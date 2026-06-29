#!/usr/bin/env python3
"""CiteLab measurement runner — Gemini grounding channel (Sprint 2, task A).

For each prompt in prompts.yaml, query Gemini 2.5 Flash with Google Search
grounding, extract the cited source domains, and record whether our target
domain (citelab-eks.pages.dev) was cited. One run record per prompt x run_index
is written, validating against runs/schema.json, and merged into the per-date
file runs/<YYYY-MM-DD>.json.

This is the only AUTO channel implemented so far. Perplexity (Sonar API) is the
next auto channel; ChatGPT / Google AI Overviews / Bing Copilot are manual.

Usage:
    source ~/.config/citelab/secrets.env
    PYTHONPATH=~/.local/citelab-libs python3 experiments/runner.py [--limit K]

Env (all overridable):
    GEMINI_API_KEY   required — read from os.environ, never logged
    N                repeats per prompt (default 3)
    TARGET_DOMAIN    our domain (default citelab-eks.pages.dev)
    MODEL            gemini model id (default gemini-2.5-flash)
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from datetime import date
from pathlib import Path

import yaml

from google import genai
from google.genai import types

HERE = Path(__file__).resolve().parent
PROMPTS_FILE = HERE / "prompts.yaml"
RUNS_DIR = HERE / "runs"
SCHEMA_FILE = RUNS_DIR / "schema.json"

PLATFORM = "gemini"
QUERY_METHOD = "api"

# Bare-domain pattern the schema enforces for competitors (lowercase, no scheme/path).
DOMAIN_RE = re.compile(r"^([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$")


def _env(name: str, default: str) -> str:
    val = os.environ.get(name)
    return val if val else default


def domain_from_title(title: str | None) -> str | None:
    """Normalise a grounding chunk title to a bare lowercase domain.

    Gemini puts the real source DOMAIN in web.title (web.uri is a Google
    vertexaisearch redirect, not the real url). Titles are usually already a
    bare domain like "forbes.com", but we sanitise defensively: strip any
    scheme/path, lowercase, drop a leading "www.", and keep only the host token.
    Returns None if the result is not a valid bare domain.
    """
    if not title:
        return None
    t = title.strip().lower()
    # Drop scheme and anything after the first slash, space, or query char.
    t = re.sub(r"^[a-z]+://", "", t)
    t = re.split(r"[/\s?#]", t, maxsplit=1)[0]
    if t.startswith("www."):
        t = t[4:]
    return t if DOMAIN_RE.match(t) else None


def run_grounding(client: genai.Client, model: str, prompt: str):
    """Single grounded generate_content call. Returns the candidate or raises.

    The RAW prompt is sent verbatim — we must measure citation behavior for the
    real query, not a citation-nudged one. Gemini decides on its own whether to
    invoke Google Search; whether a search happened is read back from
    grounding_metadata (see extract_search_queries / extract_chunks).
    """
    resp = client.models.generate_content(
        model=model,
        contents=prompt,
        config=types.GenerateContentConfig(
            tools=[types.Tool(google_search=types.GoogleSearch())]
        ),
    )
    return resp.candidates[0]


def extract_chunks(candidate):
    """Return the list of grounding chunks (or [] if none present)."""
    gm = getattr(candidate, "grounding_metadata", None)
    chunks = getattr(gm, "grounding_chunks", None) if gm else None
    return list(chunks) if chunks else []


def extract_search_queries(candidate):
    """Return the list of web search queries Gemini issued (or [] if none).

    Empty list + no chunks means Gemini answered from memory without searching,
    which must be distinguished from "searched but didn't cite us".
    """
    gm = getattr(candidate, "grounding_metadata", None)
    queries = getattr(gm, "web_search_queries", None) if gm else None
    return list(queries) if queries else []


def extract_excerpt(candidate, limit: int = 280):
    """First ~`limit` chars of the answer text (whitespace-collapsed), or None."""
    content = getattr(candidate, "content", None)
    parts = getattr(content, "parts", None) if content else None
    if not parts:
        return None
    for part in parts:
        text = getattr(part, "text", None)
        if text:
            return re.sub(r"\s+", " ", text).strip()[:limit] or None
    return None


def build_record(
    today: str,
    prompt_id: str,
    prompt: str,
    model: str,
    run_index: int,
    target_domain: str,
    chunks,
    note: str = "",
    response_excerpt: str | None = None,
):
    """Build one schema-valid run record from grounding chunks."""
    target = target_domain.lower()
    cited = False
    position = None
    source_url = None
    competitors: list[str] = []
    seen: set[str] = set()

    for idx, chunk in enumerate(chunks, start=1):
        web = getattr(chunk, "web", None)
        if web is None:
            continue
        title = getattr(web, "title", None)
        uri = getattr(web, "uri", None)
        # The real source domain is in web.title (web.uri is a Google redirect).
        # Detect our target ONLY via the normalised title domain — match exactly,
        # as a subdomain of target, or as a parent of target. No substring
        # fallback (that risks false positives).
        d = domain_from_title(title)
        is_target = bool(d) and (
            d == target
            or d.endswith("." + target)
            or target.endswith("." + d)
        )

        if is_target:
            if not cited:
                cited = True
                position = idx
                source_url = uri
            continue

        if d and d not in seen:
            seen.add(d)
            competitors.append(d)

    record = {
        "date": today,
        "prompt_id": prompt_id,
        "prompt": prompt,
        "platform": PLATFORM,
        "query_method": QUERY_METHOD,
        "model": model,
        "cited": cited,
        "citation_type": "link" if cited else "none",
        "position": position,
        "competitors": competitors,
        "source_url": source_url,
        "response_excerpt": response_excerpt,
        "run_index": run_index,
        "notes": note,
    }
    return record


# ---- validation -------------------------------------------------------------

def load_validator():
    """Return a callable(record) -> list[str] of error messages ([] if valid)."""
    schema = json.loads(SCHEMA_FILE.read_text(encoding="utf-8"))
    try:
        import jsonschema
        from jsonschema import Draft7Validator

        validator = Draft7Validator(schema)

        def validate(record):
            return [e.message for e in validator.iter_errors(record)]

        return validate
    except ImportError:
        # Minimal fallback: required fields + enum + key patterns.
        required = schema["required"]
        platforms = schema["properties"]["platform"]["enum"]
        methods = schema["properties"]["query_method"]["enum"]

        def validate(record):
            errs = []
            for field in required:
                if field not in record:
                    errs.append(f"missing required field: {field}")
            if record.get("platform") not in platforms:
                errs.append(f"platform not in {platforms}")
            if record.get("query_method") not in methods:
                errs.append(f"query_method not in {methods}")
            if not re.match(r"^p[0-9]{3,}$", str(record.get("prompt_id", ""))):
                errs.append("prompt_id pattern mismatch")
            for comp in record.get("competitors", []):
                if not DOMAIN_RE.match(comp):
                    errs.append(f"competitor not a bare domain: {comp}")
            return errs

        return validate


# ---- io ---------------------------------------------------------------------

def load_prompts(limit: int | None):
    data = yaml.safe_load(PROMPTS_FILE.read_text(encoding="utf-8"))
    if limit is not None:
        data = data[:limit]
    return data


def _record_key(r: dict):
    """Identity of a run record for idempotent per-channel merges."""
    return (
        r.get("date"),
        r.get("prompt_id"),
        r.get("platform"),
        r.get("query_method"),
        r.get("model"),
        r.get("run_index"),
    )


def write_runs(out_file: Path, new_records: list[dict]):
    existing = []
    if out_file.exists():
        try:
            existing = json.loads(out_file.read_text(encoding="utf-8"))
            if not isinstance(existing, list):
                existing = []
        except json.JSONDecodeError:
            existing = []
    # Idempotent per channel: drop any existing record whose identity matches a
    # new one (same date/prompt/platform/query_method/model/run_index), so
    # re-running the same channel/day updates in place instead of duplicating.
    # Records from OTHER platforms/channels in the same date file are preserved.
    new_keys = {_record_key(r) for r in new_records}
    kept = [r for r in existing if _record_key(r) not in new_keys]
    merged = kept + new_records
    out_file.write_text(
        json.dumps(merged, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
    )
    return len(existing), len(merged)


# ---- main -------------------------------------------------------------------

def main(argv=None):
    parser = argparse.ArgumentParser(description="CiteLab Gemini grounding runner")
    parser.add_argument(
        "--limit", type=int, default=None,
        help="run only the first K prompts (smoke test)",
    )
    args = parser.parse_args(argv)

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print(
            "ERROR: GEMINI_API_KEY not set. "
            "Run: source ~/.config/citelab/secrets.env",
            file=sys.stderr,
        )
        return 2

    n = int(_env("N", "3"))
    target_domain = _env("TARGET_DOMAIN", "citelab-eks.pages.dev")
    model = _env("MODEL", "gemini-2.5-flash")
    today = date.today().isoformat()

    prompts = load_prompts(args.limit)
    validate = load_validator()
    client = genai.Client(api_key=api_key)

    out_file = RUNS_DIR / f"{today}.json"

    print(
        f"CiteLab Gemini grounding runner | date={today} model={model} "
        f"target={target_domain} prompts={len(prompts)} N={n}"
    )

    records: list[dict] = []
    invalid: list[str] = []
    calls_ok = 0
    calls_failed = 0
    cited_runs = 0
    all_competitors: set[str] = set()

    for entry in prompts:
        prompt_id = entry["id"]
        prompt = entry["prompt"]
        for run_index in range(1, n + 1):
            note = ""
            chunks = []
            search_queries = []
            excerpt = None
            last_err = None
            # one call + one short retry
            for attempt in range(2):
                try:
                    candidate = run_grounding(client, model, prompt)
                    chunks = extract_chunks(candidate)
                    search_queries = extract_search_queries(candidate)
                    excerpt = extract_excerpt(candidate)
                    calls_ok += 1
                    last_err = None
                    break
                except Exception as exc:  # noqa: BLE001 — record, don't crash the panel
                    last_err = exc
                    if attempt == 0:
                        time.sleep(2.0)
            if last_err is not None:
                calls_failed += 1
                excerpt = None
                note = f"error: {type(last_err).__name__}: {last_err}"[:300]
                print(f"  [{prompt_id} run {run_index}] CALL FAILED: {note}")
            elif not search_queries and not chunks:
                # Call succeeded but Gemini answered from memory without searching.
                # cited=false here means "didn't search", not "searched, didn't
                # cite us" — flag it so the dataset stays honest.
                note = "no_search"

            record = build_record(
                today, prompt_id, prompt, model, run_index,
                target_domain, chunks, note=note, response_excerpt=excerpt,
            )
            errs = validate(record)
            if errs:
                invalid.append(f"{prompt_id} run {run_index}: {errs}")

            if record["cited"]:
                cited_runs += 1
            all_competitors.update(record["competitors"])
            records.append(record)

            flag = "CITED" if record["cited"] else "-"
            print(
                f"  [{prompt_id} run {run_index}] {flag} "
                f"competitors={len(record['competitors'])}"
            )
            time.sleep(1.0)  # be polite to the free tier

    before, after = write_runs(out_file, records)

    attempted = len(prompts) * n
    print("\n=== SUMMARY ===")
    print(f"prompts x N attempted : {len(prompts)} x {n} = {attempted}")
    print(f"calls ok / failed     : {calls_ok} / {calls_failed}")
    print(f"runs citing target    : {cited_runs} / {attempted}")
    print(f"distinct competitors  : {len(all_competitors)}")
    print(f"records written       : {len(records)} (file had {before}, now {after})")
    print(f"output file           : {out_file}")
    if invalid:
        print(f"SCHEMA-INVALID records: {len(invalid)}")
        for line in invalid:
            print(f"  ! {line}")
    else:
        print("schema validation     : all records valid")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

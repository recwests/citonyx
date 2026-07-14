// Dismiss the top "NEW" announcement bar and remember the choice.
// External file under script-src 'self' — no CSP hash needed (matches entry-lift.js).
const KEY = 'citonyx-announce-dismissed';

function initAnnounceDismiss() {
  const el = document.getElementById('site-announce');
  if (!el) return;
  // NB: bar has class "hidden md:flex"; classList.add('hidden') would NOT hide it on
  // desktop (md:flex wins). style.display overrides reliably.
  if (localStorage.getItem(KEY)) {
    el.style.display = 'none';
    return;
  }
  const btn = document.getElementById('site-announce-close');
  if (btn && !btn.dataset.ready) {
    btn.dataset.ready = '1';
    btn.addEventListener('click', () => {
      localStorage.setItem(KEY, '1');
      el.remove();
    });
  }
}

initAnnounceDismiss();
document.addEventListener('astro:page-load', initAnnounceDismiss);

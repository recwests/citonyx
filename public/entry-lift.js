function initEntryLift() {
  const hash = location.hash;
  if (!hash.startsWith('#entry-')) return;
  const section = document.getElementById(hash.slice(1));
  if (!section || section.dataset.lifted) return;
  const container = section.closest('.space-y-10');
  if (!container) return;
  container.prepend(section);
  section.classList.add('ring-2', 'ring-primary', 'rounded-xl', 'p-4');
  section.dataset.lifted = 'true';
  section.scrollIntoView();
}
initEntryLift();
document.addEventListener('astro:page-load', initEntryLift);

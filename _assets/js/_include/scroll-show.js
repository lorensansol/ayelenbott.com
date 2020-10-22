// SHOW WITH SCROLL TO UP
// Require scroll-shot.js
scrollShot(
  '-15%',
  '-15%',
  '[data-showup]',
  nodo => nodo.classList.remove('showup'),
  nodo => nodo.classList.add('showup')
)

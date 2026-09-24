(function () {
  'use strict';

  // Переключатель языка RU/EN.
  const languageButtons = document.querySelectorAll('.nav-right button[data-set-lang]');

  function setLanguage(lang, persist = true) {
    document.documentElement.setAttribute('data-language', lang);
    languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.setLang === lang)));
    if (persist) { try { localStorage.setItem('portfolio-language', lang); } catch (e) { /* ignore */ } }
  }

  let saved = 'ru';
  try { saved = localStorage.getItem('portfolio-language') || 'ru'; } catch (_) { /* default */ }
  setLanguage(saved, false);

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.setLang));
  });
})();
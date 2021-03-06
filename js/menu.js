(() => {
  const refs = {
    openMenuBtn: document.querySelector('.burger-btn'),
    closeMenuBtn: document.querySelector('.burger-btn-close'),
    menu: document.querySelector('.mobile-nav'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
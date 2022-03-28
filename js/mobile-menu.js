(() => {
  const menuBtnOpen = document.querySelector("[data-menu-button-open]");
  const menuBtnClose = document.querySelector("[data-menu-button-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const body = document.querySelector("[data-body]");

  menuBtnOpen.addEventListener("click", () => {
    // menuBtnOpen.classList.add("is-open");
    // menuBtnOpen.setAttribute("aria-expanded", 'true');

        body.classList.add("is-open");
      
    mobileMenuRef.classList.add("page-header__menu-container--is-open");
  });
    
    menuBtnClose.addEventListener("click", () => {

    // menuBtnClose.classList.remove("is-open");
    // menuBtnClose.setAttribute("aria-expanded", 'false');
        
        body.classList.remove("is-open");

    mobileMenuRef.classList.remove("page-header__menu-container--is-open");
  });
})();
(() => {

    const header = document.querySelector('.header');
    if(!header) return;

    const burger = header.querySelector('.header__burger');
    const menu = header.querySelector('.header__menu');
    const menuClose = header.querySelector('.header__menu-close');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add('is-scroll');
        } else {
            header.classList.remove('is-scroll');
        }
    });

})();

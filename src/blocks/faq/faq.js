(() => {

    const faq = document.querySelector('.faq');
    if(!faq) return;

    const faqItems = faq.querySelectorAll('.faq__item');
    faqItems.forEach(item => {
        const title = item.querySelector('.faq__item-title');
        title.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

})();

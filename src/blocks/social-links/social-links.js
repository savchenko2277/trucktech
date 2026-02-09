(() => {

    const socialLinks = document.querySelector('.social-links');
    if(!socialLinks) return;

    const socialLinksBtn = socialLinks.querySelector('.social-links__show');
    socialLinksBtn.addEventListener('click', () => {
        socialLinks.classList.toggle('active');
    });


})();

document.addEventListener('DOMContentLoaded', () => {

    /* Mobile Menu */
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('#main-nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('is-open');
        });
    }

    /* Category Toggle (Mobile) */
    const categoryToggle = document.querySelector('.category-toggle');
    const categoryLeft = document.querySelector('.category-left');

    if (categoryToggle && categoryLeft) {
        categoryToggle.addEventListener('click', () => {
            categoryLeft.classList.toggle('is-open');
        });
    }

    /* Category Tags Active State */
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
        });
    });

    /* Lazy Loading (Native + Fallback) */
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.transition = 'opacity 0.5s ease';
                    img.style.opacity = 1;
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => {
            img.style.opacity = 0;
            imageObserver.observe(img);
        });
    }

    /* Simple Form Handler */
    const form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
            form.reset();
        });
    }
});

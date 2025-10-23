document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Hentikan pengamatan setelah elemen muncul
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // 10% elemen terlihat
    });

    // Amati semua elemen yang perlu dianimasikan
    document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-in-left, .fade-in-right, .scale-up-effect').forEach(el => {
        observer.observe(el);
    });
});

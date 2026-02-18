const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'show' class when element enters viewport
            entry.target.classList.add('show');
        } else {
            // Remove 'show' class when element leaves viewport ✅ THIS IS THE KEY
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '-50px' // Adds buffer for smoother triggering
});
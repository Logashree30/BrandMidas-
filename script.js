// Functionality to ensure colors stay consistent
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mainBtn');
    const card = document.getElementById('interactiveCard');

    btn.addEventListener('click', () => {
        // Visual feedback using the theme color
        card.style.transform = "scale(1.02)";
        btn.style.backgroundColor = "#111827"; // Shift to a darker matching shade
        btn.textContent = "Selected";
        
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 200);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.team-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => {
                if (c !== card) c.style.opacity = '0.6';
            });
            card.classList.add('active-shadow');
        });

        card.addEventListener('mouseleave', () => {
            cards.forEach(c => c.style.opacity = '1');
            // Keep the middle card shadow if desired, or remove all
            cards.forEach(c => c.classList.remove('active-shadow'));
            document.querySelector('.team-card:nth-child(2)').classList.add('active-shadow');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Find all feature items inside the visible section
                const items = entry.target.querySelectorAll('.feature-item');
                
                items.forEach((item, index) => {
                    // Staggered delay: first item 0ms, second 150ms, etc.
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                        item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    }, index * 150);
                });
                
                // Stop observing after animation is done
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start watching the section
    const section = document.querySelector('.differentiators-section');
    if (section) observer.observe(section);
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Animación suave para las tarjetas de producto
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 300);

    // Efecto hover para las características
    const features = document.querySelectorAll('.feature-item');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            const icon = feature.querySelector('i');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });

        feature.addEventListener('mouseleave', () => {
            const icon = feature.querySelector('i');
            icon.style.transform = 'scale(1)';
        });
    });

    // Efecto de zoom suave para las imágenes
    const images = document.querySelectorAll('.product-image img, .feature-img');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });

    // Botón CTA con efecto de pulso
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.transform = 'scale(1.05)';
    });

    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.transform = 'scale(1)';
    });

    // Animación para las feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('.feature-img');
            img.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('.feature-img');
            img.style.transform = 'scale(1)';
        });
    });
});
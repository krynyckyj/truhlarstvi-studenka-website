document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.assist-slider');
    
    // Only initialize on mobile devices
    if (window.innerWidth <= 768 && slider) {
        // Clone images for infinite scroll
        const images = slider.getElementsByTagName('img');
        [...images].forEach(img => {
            const clone = img.cloneNode(true);
            slider.appendChild(clone);
        });

        let scrollInterval;
        let isHovered = false;

        // Auto scroll function
        const autoScroll = () => {
            if (!isHovered) {
                if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth) / 2) {
                    slider.scrollLeft = 0;
                } else {
                    slider.scrollLeft += 1; // Adjust speed by changing this value
                }
            }
        };

        // Start auto-scrolling
        scrollInterval = setInterval(autoScroll, 30); // Adjust interval for smoother/faster scroll

        // Pause on touch/hover
        slider.addEventListener('mouseenter', () => {
            isHovered = true;
        });

        slider.addEventListener('mouseleave', () => {
            isHovered = false;
        });

        slider.addEventListener('touchstart', () => {
            isHovered = true;
        });

        slider.addEventListener('touchend', () => {
            isHovered = false;
        });

        // Clean up on page leave
        window.addEventListener('beforeunload', () => {
            clearInterval(scrollInterval);
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slider = document.querySelector('.slider');
    const progressBar = document.querySelector('.progress-bar');
    const sliderProgress = document.querySelector('.slider-progress');
    const slides = document.querySelectorAll('.slider img');
    const slideCount = slides.length;

    let isDragging = false;
    let startX;
    let scrollLeft;

    // Drag progress bar
    sliderProgress.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - sliderProgress.offsetLeft;
        scrollLeft = sliderWrapper.scrollLeft;
    });

    sliderProgress.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    sliderProgress.addEventListener('mouseup', () => {
        isDragging = false;
    });

    sliderProgress.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderProgress.offsetLeft;
        const walk = (x - startX) * 3; // Adjust scroll speed
        sliderWrapper.scrollLeft = scrollLeft + walk;
    });

    // Navigation arrows
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    nextButton.classList.add('slider-nav');
    sliderWrapper.parentNode.appendChild(nextButton);

    nextButton.addEventListener('click', () => {
        sliderWrapper.scrollLeft += slides[0].offsetWidth;
    });
});
  document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.slider-track');
    const arrow = document.querySelector('.slider-arrow');
    const scrollAmount = 270;

    // === Funkce pro kliknutí na šipku
    arrow.addEventListener('click', () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      const currentScroll = track.scrollLeft;
      const remaining = maxScrollLeft - currentScroll;

      if (remaining <= 0) return;

      track.scrollBy({
        left: Math.min(scrollAmount, remaining),
        behavior: 'smooth'
      });
    });

    // === Funkce pro aktualizaci stavu šipky
    function updateArrowState() {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const atEnd = track.scrollLeft >= maxScroll - 1;

      if (atEnd) {
        arrow.style.opacity = '0.3';
        arrow.style.pointerEvents = 'none';
      } else {
        arrow.style.opacity = '1';
        arrow.style.pointerEvents = 'auto';
      }
    }

    track.addEventListener('scroll', updateArrowState);
    window.addEventListener('load', updateArrowState);
  });


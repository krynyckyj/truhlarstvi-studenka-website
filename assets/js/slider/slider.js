  document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const arrow = document.querySelector(".slider-arrow");

    arrow.addEventListener("click", () => {
      track.scrollBy({
        left: 280, 
        behavior: "smooth",
      });
    });
  });

  function updateScrollbar() {
  const scrollLeft = track.scrollLeft;
  const scrollWidth = track.scrollWidth - track.clientWidth;
  const progress = (scrollLeft / scrollWidth) * 100;
  thumb.style.width = `${progress}%`;

  if (scrollLeft >= scrollWidth - 1) {
    arrow.disabled = true;
    arrow.style.opacity = 0.3;
    arrow.style.cursor = "default";
  } else {
    arrow.disabled = false;
    arrow.style.opacity = 1;
    arrow.style.cursor = "pointer";
  }
}

arrowRight.addEventListener("click", () => {
  const maxScroll = track.scrollWidth - track.clientWidth;
  const scrollAmount = 300;
  const current = track.scrollLeft;
  const next = Math.min(current + scrollAmount, maxScroll);

  track.scrollTo({
    left: next,
    behavior: "smooth"
  });
});
  document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const arrow = document.querySelector(".slider-arrow");

    arrow.addEventListener("click", () => {
      track.scrollBy({
        left: 300, 
        behavior: "smooth",
      });
    });
  });
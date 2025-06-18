document.addEventListener("DOMContentLoaded", function () {
  fancyboxLoader();
});

function fancyboxLoader() {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  const totalImages = 91;
  const folder = "assets/img/photos/";
  const prefix = "0";
  const ext = ".webp";

  // Clear existing images
  gallery.innerHTML = '';

  // Check if we're on gallery.html or index.html
  const isGalleryPage = window.location.pathname.includes('gallery.html');
  const isMobile = window.innerWidth <= 768;

  // Determine the limit based on the page and device
  let limit;
  if (isGalleryPage) {
    // On gallery.html, show all images regardless of device
    limit = totalImages;
  } else {
    // On index.html, show 4 on mobile, 8 on desktop
    limit = isMobile ? 4 : 8;
  }

  // Load images
  for (let i = totalImages; i > totalImages - limit; i--) {
    const path = folder + prefix + i + ext;

    const a = document.createElement("a");
    a.href = path;
    a.setAttribute("data-fancybox", "gallery");

    const img = document.createElement("img");
    img.src = path;
    img.alt = `Foto ${i}`;
    img.loading = "lazy";

    a.appendChild(img);
    gallery.appendChild(a);
  }

  // Initialize Fancybox if available
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind('[data-fancybox="gallery"]', {
      animated: true,
      animationEffect: "fade",
    });
  }
}

// Add resize listener only for index.html
if (!window.location.pathname.includes('gallery.html')) {
  window.addEventListener("resize", fancyboxLoader);
}
document.addEventListener("DOMContentLoaded", function () {
  fancyboxLoader();
  if (!isGalleryPage()) {
    window.addEventListener("resize", debounce(fancyboxLoader, 300));
  }
});

function isGalleryPage() {
  const path = window.location.pathname;
  return path.includes('/gallery') || path.includes('gallery.html');
}


function isMobile() {
  return window.innerWidth <= 768;
}

function fancyboxLoader() {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  const totalImages = 91;
  const folder = "assets/img/photos/";
  const prefix = "0";
  const ext = ".webp";

  // Determine the limit based on the page and device
  let limit;
  if (isGalleryPage()) {
    limit = totalImages;
  } else {
    limit = isMobile() ? 4 : 8;
  }

  loadImages(gallery, totalImages, folder, prefix, ext, limit);
}

function loadImages(gallery, totalImages, folder, prefix, ext, limit) {
  gallery.innerHTML = ''; // Clear existing images

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

  // Initialize Fancybox
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind('[data-fancybox="gallery"]', {
      animated: true,
      animationEffect: "fade",
    });
  }
}

// Debounce function to avoid too many reloads during resize
function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

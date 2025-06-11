document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  const totalImages = 91;
  const folder = "assets/img/photos/";
  const prefix = "0";
  const ext = ".webp";

  // Zjisti šířku okna
  const isMobile = window.innerWidth <= 768;

  // Přečti limit z atributu, jinak použij výchozí hodnotu
  const limitAttr = gallery.getAttribute("data-limit");
  const defaultLimit = limitAttr === "all" ? totalImages : parseInt(limitAttr);
  const limit = isMobile ? 4 : defaultLimit;

  // Načti obrázky
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

  // Spusť Fancybox, pokud je dostupný
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind('[data-fancybox="gallery"]', {
      animated: true,
      animationEffect: "fade",
    });
  }
});

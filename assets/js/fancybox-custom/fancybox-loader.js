document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  // Získáme všechny odkazy
  const items = Array.from(gallery.querySelectorAll("a"));

  // Seřadíme sestupně podle čísla ve jménu obrázku (foto99 > foto1)
  items.sort((a, b) => {
    const numA = parseInt(a.getAttribute("href").match(/\d+/));
    const numB = parseInt(b.getAttribute("href").match(/\d+/));
    return numB - numA; // sestupně
  });

  // Vyčistíme galerii a vložíme prvky znovu ve správném pořadí
  gallery.innerHTML = "";
  items.forEach(el => gallery.appendChild(el));
});


document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  const totalImages = 91;
  const folder = "assets/img/photos/";
  const prefix = "0";
  const ext = ".webp";

  // Zjisti limit z atributu nebo nastav 'all'
  const limitAttr = gallery.getAttribute("data-limit");
  const showOnly = limitAttr === "all" ? totalImages : parseInt(limitAttr);

  for (let i = totalImages; i > totalImages - showOnly; i--) {
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
});

Fancybox.bind('[data-fancybox="gallery"]', {
  animated: true,
  animationEffect: "fade",
});

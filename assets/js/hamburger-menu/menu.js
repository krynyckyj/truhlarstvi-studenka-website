   const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");

    hamburger.addEventListener("click", () => {
      mobileMenu.style.display = "flex";
    });

    closeMenu.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
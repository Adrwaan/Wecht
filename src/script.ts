let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");
let backLi = document.getElementById("back-li");
let back = document.getElementById("back");
let footerBack = document.getElementById("footer-back");

if (menu && menuBtn) {
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("flex");
    }
  });
}

if (back && backLi && menu) {
  back.addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
  });
  backLi.addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
  });
}

if (footerBack) {
  footerBack.addEventListener("click", () => {
    window.location.href = "#home";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobile-menu-content");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("show");
  });

  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      mobileMenu.classList.remove("show");
    });
  });
});
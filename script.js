// SIDEBAR
const navbarMobileBtn = document.querySelector(".navbar-mobile-btn");
const sidebarBg = document.querySelector(".sidebar-bg-active");
const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbar-menu");
let sidebarActive = false;
navbarMobileBtn.addEventListener("click", () => {
  if (!sidebarActive) {
    navbarMobileBtn.classList.add("sidebar-active");
    sidebarBg.classList.add("sidebar-active");
    navbar.classList.add("sidebar-active");
    navbarMenu.classList.add("sidebar-active");
    sidebarActive = true;
  } else {
    navbarMobileBtn.classList.remove("sidebar-active");
    sidebarBg.classList.remove("sidebar-active");
    navbar.classList.remove("sidebar-active");
    navbarMenu.classList.remove("sidebar-active");
    sidebarActive = false;
  }
});

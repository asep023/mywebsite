// search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#searchBox");

document.querySelector("#serch-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// hambuerger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// menghilangkan slide bar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (
    !hamburger - menubar.contains(e.target) &&
    !navbarNav.cantains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }
});

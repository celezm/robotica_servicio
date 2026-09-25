const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach((link) => {
  const hrefPage = link.getAttribute("href")?.split("#")[0];

  if (hrefPage === currentPage) {
    link.classList.add("is-active");
  }
});

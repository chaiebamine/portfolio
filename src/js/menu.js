const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  mobileNav.classList.add("open");
  overlay.classList.add("show");
  document.body.classList.add("menu-open");
});

overlay.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  overlay.classList.remove("show");
  document.body.classList.remove("menu-open");
});

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    overlay.classList.remove("show");
    document.body.classList.remove("menu-open");
  });
});
// Scroll with offset for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = window.innerWidth <= 768 ? 100 : 100; // offset changes on mobile

      const topPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth"
      });
    }
  });
});
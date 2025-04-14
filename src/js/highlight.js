const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.3, // Adjust this value to trigger highlight earlier or later
    rootMargin: "-50px 0px -50px 0px", // Add offset (top, right, bottom, left)
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all carousels on the page
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel-item");
    const prevButton = carousel.querySelector(".carousel-control-prev");
    const nextButton = carousel.querySelector(".carousel-control-next");

    let currentIndex = 0;

    function updateCarousel() {
      items.forEach((item, index) => {
        item.classList.remove("active");
      });
      items[currentIndex].classList.add("active");
    }

    prevButton.addEventListener("click", function () {
      currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      updateCarousel();
    });

    nextButton.addEventListener("click", function () {
      currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
      updateCarousel();
    });

    // Initialize first slide as active
    updateCarousel();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel-item");
    const prevButton = carousel.querySelector(".carousel-control-prev");
    const nextButton = carousel.querySelector(".carousel-control-next");

    let currentIndex = 0;

    function updateCarousel() {
      items.forEach((item) => item.classList.remove("active"));
      items[currentIndex].classList.add("active");
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }

    function showPrev() {
      currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      updateCarousel();
    }

    // Button controls
    prevButton.addEventListener("click", showPrev);
    nextButton.addEventListener("click", showNext);

    // Auto slide every 5 seconds
    setInterval(showNext, 5000);

    updateCarousel();
  });
});

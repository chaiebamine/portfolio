const titles = [
  " Computer Engineering Student at ENSI",
  " Web Developer",
  " Graphic Designer",
  " Tech Enthusiast"
  ];

  const typewriter = document.getElementById("typewriter-text");
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      charIndex--;
      typewriter.textContent = currentTitle.substring(0, charIndex);
    } else {
      charIndex++;
      typewriter.textContent = currentTitle.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      typingSpeed = 60;
      setTimeout(type, 1200); // Pause before deleting
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }

    setTimeout(type, typingSpeed);
  }

  document.addEventListener("DOMContentLoaded", type);
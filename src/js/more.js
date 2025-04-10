document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle the hidden content for each section
  function toggleContent(button, hiddenContentClass) {
    button.addEventListener("click", function () {
      // Find the hidden content
      const hiddenContent = document.querySelector(hiddenContentClass);

      if (hiddenContent) {
        // Toggle the visibility
        if (
          hiddenContent.style.display === "none" ||
          hiddenContent.style.display === ""
        ) {
          hiddenContent.style.display = "block";
          this.textContent = "View Less"; // Change button text to 'View Less'
        } else {
          hiddenContent.style.display = "none";
          this.textContent = "View More"; // Change button text to 'View More'
        }
      }
    });
  }

  // Apply toggleContent to each button
  const viewMoreProjectsBtn = document.querySelector(".view-more-projects-btn");
  if (viewMoreProjectsBtn) {
    toggleContent(viewMoreProjectsBtn, ".hidden-projects");
  }

  const viewMoreOrganizedEventsBtn = document.querySelector(
    ".view-more-organized-btn"
  );
  if (viewMoreOrganizedEventsBtn) {
    toggleContent(viewMoreOrganizedEventsBtn, ".hidden-organized-events");
  }

  const viewMoreParticipatedEventsBtn = document.querySelector(
    ".view-more-participated-btn"
  );
  if (viewMoreParticipatedEventsBtn) {
    toggleContent(viewMoreParticipatedEventsBtn, ".hidden-participated-events");
  }
});

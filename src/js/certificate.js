function openModal(certificateId) {
  var modal = document.getElementById("certificateModal");
  var certificateImage = document.getElementById("certificateImage");

  // Set the image based on which certificate was clicked
  if (certificateId === "certificate1") {
    certificateImage.src = "assets/certificates/nvidia.jpg"; // Full-size image path
  } else if (certificateId === "certificate2") {
    certificateImage.src = "assets/certificates/programming hub.jpg"; // Full-size image path
  } else if (certificateId === "certificate3") {
    certificateImage.src = "assets/certificates/programming hero.jpg"; // Full-size image path
  } else if (certificateId === "certificate4") {
    certificateImage.src = "../../assets/certificates/statistics.png"; // Full-size image path
  } else if (certificateId === "certificate5") {
    certificateImage.src = "../../assets/certificates/probability.png"; // Full-size image path
  } else if (certificateId === "certificate6") {
    certificateImage.src = "../../assets/certificates/algebra.png"; // Full-size image path
  } else if (certificateId === "certificate7") {
    certificateImage.src = "../../assets/certificates/english.jpg"; // Full-size image path
  } else if (certificateId === "certificate11") {
    certificateImage.src = "../../assets/certificates/nvidia.jpg"; // Full-size image path
  } else if (certificateId === "certificate21") {
    certificateImage.src = "../../assets/certificates/programming hub.jpg"; // Full-size image path
  } else if (certificateId === "certificate31") {
    certificateImage.src = "../../assets/certificates/programming hero.jpg"; // Full-size image path
  }
  modal.style.display = "flex"; // Show the modal
  document.body.classList.add("modal-open"); // Disable body scroll
}

function closeModal() {
  var modal = document.getElementById("certificateModal");
  modal.style.display = "none"; // Hide the modal
  document.body.classList.remove("modal-open"); // Enable body scroll
}

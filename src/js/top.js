const backToTop = document.getElementById("backToTop");

window.onscroll = () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
};

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

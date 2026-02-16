// Auto year
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});


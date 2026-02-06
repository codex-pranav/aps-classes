// Auto year
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Enroll button
function enroll() {
  alert("For enrollment, please call us.");
}

// WhatsApp link
const wp = document.getElementById("whatsappBtn");
if (wp) {
  wp.href = "https://wa.me/918210823257";
}

// Toggle mobile navigation
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

// Contact form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
      formMessage.textContent = "✅ Thank you! Your message has been sent.";
      formMessage.style.color = "green";
      form.reset();
    } else {
      formMessage.textContent = "⚠️ Please fill in all fields.";
      formMessage.style.color = "red";
    }
  });
}

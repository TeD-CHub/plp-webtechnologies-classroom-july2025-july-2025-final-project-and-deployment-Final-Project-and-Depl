document.addEventListener("DOMContentLoaded", () => {
  // --- This is the new mobile menu toggle ---
  // It uses 'active' to match the CSS I provided
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      // 1. Toggle the 'active' class on the nav links
      navLinks.classList.toggle("active");

      // 2. Update ARIA attribute for accessibility
      const isExpanded = navLinks.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", isExpanded);
    });
  }

  // --- Your existing contact form validation ---
  // This code is unchanged
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
});

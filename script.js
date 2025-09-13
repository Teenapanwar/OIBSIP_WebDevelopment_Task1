// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typing effect in hero section
const texts = ["a Web Developer", "a Designer", "a Creator"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500); // Pause before next word
  } else {
    setTimeout(type, 100);
  }
}
type();

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("form-message");

  if (name && email && message) {
    msg.style.color = "green";
    msg.textContent = `✅ Thanks, ${name}! Your message has been sent.`;
    this.reset();
  } else {
    msg.style.color = "red";
    msg.textContent = "⚠️ Please fill in all fields.";
  }
});

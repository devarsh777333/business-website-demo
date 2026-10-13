
const WHATSAPP_NUMBER = "919999999999"; // Replace with the business number

document.getElementById("year").textContent = new Date().getFullYear();

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".property-card");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const selected = button.dataset.filter;

    cards.forEach((card) => {
      card.hidden = selected !== "all" && card.dataset.type !== selected;
    });
  });
});

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".enquire").forEach((button) => {
  button.addEventListener("click", () => {
    const property = button.dataset.property;
    openWhatsApp(`Hi, I'm interested in learning more about the ${property}. Please share the details.`);
  });
});

document.getElementById("contact-btn").addEventListener("click", () => {
  openWhatsApp("Hi, I'd like help finding a property in Ahmedabad. Please contact me.");
});

document.querySelector(".nav-cta").addEventListener("click", (event) => {
  event.preventDefault();
  openWhatsApp("Hi, I'd like to enquire about your properties.");
});

// ---- EDIT THESE TWO LINES WITH THE REAL BUSINESS INFO ----
const CONFIG = {
  businessName: "Jabones Artesanales",
  whatsappNumber: "529990000000", // E.164 without +, e.g. 529981234567
};
// ------------------------------------------------------------

const PRODUCTS = [
  // ---- Jabones por aroma ----
  { category: "aromas", name: "Menta", desc: "Jabón de glicerina vegetal, aroma a menta.", img: "images/WhatsApp Image 2026-10-13 at 7.23.10 PM.jpeg" },
  { category: "aromas", name: "Cheesecake", desc: "Jabón de glicerina vegetal, aroma a cheesecake.", img: "images/WhatsApp Image 2026-10-13 at 7.23.12 PM.jpeg" },
  { category: "aromas", name: "Canela", desc: "Jabón de glicerina vegetal, aroma a canela.", img: "images/WhatsApp Image 2026-10-13 at 7.23.16 PM.jpeg" },
  { category: "aromas", name: "Uva", desc: "Jabón de glicerina vegetal con forma de racimo de uvas.", img: "images/WhatsApp Image 2026-10-13 at 7.23.17 PM.jpeg" },
  { category: "aromas", name: "Naranja", desc: "Jabón de glicerina vegetal, aroma a naranja.", img: "images/WhatsApp Image 2026-10-13 at 7.23.11 PM (2).jpeg" },
  { category: "aromas", name: "Lavanda", desc: "Jabón de glicerina vegetal, aroma a lavanda.", img: "images/WhatsApp Image 2026-10-13 at 7.23.12 PM (2).jpeg" },
  { category: "aromas", name: "Flores", desc: "Jabón de glicerina vegetal, aroma floral.", img: "images/WhatsApp Image 2026-10-13 at 7.23.12 PM (5).jpeg" },
  { category: "aromas", name: "Limón", desc: "Jabón de glicerina vegetal, aroma a limón.", img: "images/WhatsApp Image 2026-10-13 at 7.23.19 PM (1).jpeg" },
  { category: "aromas", name: "Árbol de Té", desc: "Jabón de glicerina vegetal, limpieza profunda y purificación.", img: "images/WhatsApp Image 2026-10-13 at 7.23.21 PM.jpeg" },
  { category: "aromas", name: "Miel y Avena", desc: "Jabón de glicerina vegetal, miel y avena.", img: "images/WhatsApp Image 2026-10-13 at 7.23.20 PM.jpeg" },
  { category: "aromas", name: "Aloe Vera", desc: "Jabón de glicerina vegetal con aloe vera.", img: "images/WhatsApp Image 2026-10-13 at 7.23.19 PM.jpeg" },

  // ---- Recuerditos para fiestas y eventos ----
  { category: "recuerditos", name: "Baby Shower", desc: "Recuerdo de jabón para baby shower, niño o niña.", img: "images/WhatsApp Image 2026-10-13 at 7.23.23 PM (4).jpeg" },
  { category: "recuerditos", name: "Navidad", desc: "Set de jabones navideños: copos de nieve, árbol y estrella.", img: "images/WhatsApp Image 2026-10-13 at 7.23.26 PM (1).jpeg" },
  { category: "recuerditos", name: "Mascotas", desc: "Jabones con forma de huellita y huesito para amantes de las mascotas.", img: "images/WhatsApp Image 2026-10-13 at 7.23.17 PM (2).jpeg" },
  { category: "recuerditos", name: "Casa Nueva", desc: "Recuerdo de jabón para estrenar casa.", img: "images/WhatsApp Image 2026-10-13 at 7.23.24 PM (3).jpeg" },
  { category: "recuerditos", name: "Boda / Compromiso", desc: "Recuerdo de jabón con manos entrelazadas y rosas, ideal para bodas.", img: "images/WhatsApp Image 2026-10-13 at 7.23.16 PM (1).jpeg" },
  { category: "recuerditos", name: "Patitos", desc: "Jabones de patitos de hule, ideales para baby shower.", img: "images/WhatsApp Image 2026-10-13 at 7.23.16 PM (2).jpeg" },
  { category: "recuerditos", name: "Unicornio", desc: "Jabón artesanal con forma de unicornio, natural y vegano.", img: "images/WhatsApp Image 2026-10-13 at 7.23.26 PM (2).jpeg" },
  { category: "recuerditos", name: "Galáctico", desc: "Jabón decorativo con efecto galaxia.", img: "images/WhatsApp Image 2026-10-13 at 7.23.26 PM (4).jpeg" },
  { category: "recuerditos", name: "Flores Variadas", desc: "Recuerdo con variedad de flores decorativas.", img: "images/WhatsApp Image 2026-10-13 at 7.23.22 PM (1).jpeg" },
];

function waLink(productName) {
  const msg = encodeURIComponent(`Hola, me interesa el jabón: ${productName}`);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
}

function renderProducts(filter) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  const items = PRODUCTS.filter(p => filter === "todos" || p.category === filter);
  for (const p of items) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <a class="order-btn" href="${waLink(p.name)}" target="_blank" rel="noopener">Pedir por WhatsApp</a>
      </div>
    `;
    grid.appendChild(card);
  }
}

function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderProducts(tab.dataset.filter);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("business-name").textContent = CONFIG.businessName;
  document.getElementById("footer-wa").href = `https://wa.me/${CONFIG.whatsappNumber}`;
  initTabs();
  renderProducts("todos");
});

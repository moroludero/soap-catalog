// ---- EDIT THESE TWO LINES WITH THE REAL BUSINESS INFO ----
const CONFIG = {
  businessName: "Jabones Artesanales",
  whatsappNumber: "5353335221", // E.164 without +
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

// Curated highlight reel for the hero carousel (name must match a PRODUCTS entry)
const CAROUSEL_NAMES = ["Uva", "Lavanda", "Navidad", "Unicornio", "Baby Shower", "Cheesecake"];

function waLink(productName) {
  const msg = encodeURIComponent(`Hola, me interesa el jabón: ${productName}`);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
}

let currentList = PRODUCTS;
let currentIndex = 0;
let lastFocusedEl = null;

function renderProducts(filter) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  const items = PRODUCTS.filter(p => filter === "todos" || p.category === filter);
  items.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.innerHTML = `
      <div class="card-img" data-index="${i}" role="button" tabindex="0" aria-label="Ver ${p.name} en grande">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="card-body">
        <span class="tag">${p.category === "aromas" ? "Aroma" : "Recuerdo"}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <a class="order-btn" href="${waLink(p.name)}" target="_blank" rel="noopener">Pedir por WhatsApp</a>
      </div>
    `;
    const imgWrap = card.querySelector(".card-img");
    imgWrap.addEventListener("click", () => openLightbox(items, i));
    imgWrap.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(items, i); }
    });
    grid.appendChild(card);
  });
  currentList = items;
  observeReveals();
}

let revealObserver;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in-view"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.in-view)").forEach(el => revealObserver.observe(el));
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

// ---------------- Hero carousel ----------------
let carouselIndex = 0;
let carouselTimer = null;
const CAROUSEL_INTERVAL = 4500;

function initCarousel() {
  const track = document.getElementById("carousel-track");
  const dotsWrap = document.getElementById("carousel-dots");
  const slides = CAROUSEL_NAMES
    .map(name => PRODUCTS.find(p => p.name === name))
    .filter(Boolean);

  track.innerHTML = slides.map(p => `
    <div class="carousel-slide">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="carousel-caption">
        <span>${p.name}</span>
      </div>
    </div>
  `).join("");

  dotsWrap.innerHTML = slides.map((_, i) =>
    `<button class="carousel-dot${i === 0 ? " active" : ""}" aria-label="Ir a la imagen ${i + 1}" data-i="${i}"></button>`
  ).join("");

  const dots = dotsWrap.querySelectorAll(".carousel-dot");
  const total = slides.length;

  function goTo(i) {
    carouselIndex = (i + total) % total;
    track.style.transform = `translateX(-${carouselIndex * 100}%)`;
    dots.forEach(d => d.classList.remove("active"));
    dots[carouselIndex].classList.add("active");
  }

  function next() { goTo(carouselIndex + 1); }
  function prev() { goTo(carouselIndex - 1); }

  function startAutoplay() {
    stopAutoplay();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    carouselTimer = setInterval(next, CAROUSEL_INTERVAL);
  }
  function stopAutoplay() {
    if (carouselTimer) clearInterval(carouselTimer);
    carouselTimer = null;
  }

  dots.forEach(d => d.addEventListener("click", () => { goTo(Number(d.dataset.i)); startAutoplay(); }));
  document.getElementById("carousel-prev").addEventListener("click", () => { prev(); startAutoplay(); });
  document.getElementById("carousel-next").addEventListener("click", () => { next(); startAutoplay(); });

  const wrap = document.getElementById("carousel");
  wrap.addEventListener("mouseenter", stopAutoplay);
  wrap.addEventListener("mouseleave", startAutoplay);
  wrap.addEventListener("focusin", stopAutoplay);
  wrap.addEventListener("focusout", startAutoplay);

  // touch swipe
  let touchStartX = null;
  track.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; stopAutoplay(); }, { passive: true });
  track.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    touchStartX = null;
    startAutoplay();
  }, { passive: true });

  goTo(0);
  startAutoplay();
}

// ---------------- Lightbox ----------------
function openLightbox(list, index) {
  currentList = list;
  currentIndex = index;
  lastFocusedEl = document.activeElement;
  renderLightbox();
  const lb = document.getElementById("lightbox");
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("lightbox-close").focus();
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

function lightboxStep(delta) {
  currentIndex = (currentIndex + delta + currentList.length) % currentList.length;
  renderLightbox();
}

function renderLightbox() {
  const p = currentList[currentIndex];
  document.getElementById("lightbox-img").src = p.img;
  document.getElementById("lightbox-img").alt = p.name;
  document.getElementById("lightbox-tag").textContent = p.category === "aromas" ? "Aroma" : "Recuerdo";
  document.getElementById("lightbox-title").textContent = p.name;
  document.getElementById("lightbox-desc").textContent = p.desc;
  document.getElementById("lightbox-order").href = waLink(p.name);
}

function initLightbox() {
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", () => lightboxStep(-1));
  document.getElementById("lightbox-next").addEventListener("click", () => lightboxStep(1));
  document.getElementById("lightbox-backdrop").addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") lightboxStep(1);
    if (e.key === "ArrowLeft") lightboxStep(-1);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("business-name").textContent = CONFIG.businessName;
  document.getElementById("footer-wa").href = `https://wa.me/${CONFIG.whatsappNumber}`;
  document.getElementById("float-wa").href = `https://wa.me/${CONFIG.whatsappNumber}`;
  initTabs();
  initCarousel();
  initLightbox();
  renderProducts("todos");
});

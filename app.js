// ---- EDIT THIS LINE WITH THE REAL WHATSAPP NUMBER ----
const CONFIG = {
  whatsappNumber: "5353335221", // E.164 without +
};
// --------------------------------------------------------

const LANGS = ["es", "en", "de"];
const savedLang = localStorage.getItem("lang");
let currentLang = LANGS.includes(savedLang) ? savedLang : "es";

const I18N = {
  es: {
    navAromas: "Aromas",
    navRecuerditos: "Recuerditos",
    navComoPedir: "Cómo pedir",
    eyebrow: "Hecho a mano · Glicerina vegetal",
    businessName: "Jabones Artesanales",
    heroTitle: "Jabones que se regalan, se celebran y se disfrutan",
    heroText: "Cada jabón se hace a mano con glicerina vegetal: formas y aromas para el día a día, y diseños especiales para bodas, baby showers y fiestas.",
    heroCtaPrimary: "Ver catálogo",
    heroCtaSecondary: "Pedir por WhatsApp",
    badge1: "100% vegetal",
    badge2: "Para regalar",
    badge3: "Hecho a mano",
    statAromas: "Aromas disponibles",
    statRecuerdos: "Diseños para eventos",
    statHandmade: "Hecho a mano",
    destacadosEyebrow: "Los favoritos",
    destacadosTitle: "Lo más pedido",
    destacadosText: "Una muestra rápida de lo que más se repite en pedidos para regalos y eventos.",
    aromasEyebrow: "Para el día a día",
    aromasTitle: "Aromas",
    aromasText: "Jabones individuales de glicerina vegetal, cada uno con su propio aroma. Ideales para uso diario o como detalle sencillo.",
    recuerdosEyebrow: "Para tu evento",
    recuerdosTitle: "Recuerditos para Eventos",
    recuerdosText: "Diseños especiales para baby showers, bodas, cumpleaños y fiestas — empacados y listos para entregar a tus invitados.",
    tagAroma: "Aroma",
    tagRecuerdo: "Recuerdo",
    orderBtn: "Pedir por WhatsApp",
    comoPedirEyebrow: "Así de fácil",
    comoPedirTitle: "Cómo pedir",
    step1Title: "Elige tu jabón",
    step1Text: "Recorre el catálogo y elige el aroma o diseño que más te guste.",
    step2Title: "Escríbenos por WhatsApp",
    step2Text: "Toca el botón de pedido — el mensaje ya lleva el nombre del jabón.",
    step3Title: "Coordinamos la entrega",
    step3Text: "Confirmamos cantidad, empaque y cómo te lo hacemos llegar.",
    footerTagline: "Jabones artesanales hechos con cariño, uno a la vez.",
    footerCta: "Contactar por WhatsApp",
    footerCopy: "Hecho a mano",
    ariaFeatured: "Jabones destacados",
    ariaCarousel: "carrusel",
    ariaPrev: "Anterior",
    ariaNext: "Siguiente",
    ariaClose: "Cerrar",
    ariaMenu: "Abrir menú",
    ariaDot: (i) => `Ir a la imagen ${i}`,
    ariaView: (name) => `Ver ${name} en grande`,
    ariaFloat: "Pedir por WhatsApp",
    ariaFacebook: "Facebook de Jabones Licha",
    ariaInstagram: "Instagram de Jabones Licha",
    pageTitle: "Catálogo de Jabones Artesanales",
    metaDesc: "Catálogo de jabones artesanales de glicerina vegetal: aromas y recuerditos para eventos. Pide por WhatsApp.",
    waMessage: (name) => `Hola, me interesa el jabón: ${name}`,
  },
  en: {
    navAromas: "Scents",
    navRecuerditos: "Event Favors",
    navComoPedir: "How to order",
    eyebrow: "Handmade · Vegetable glycerin",
    businessName: "Handmade Soaps",
    heroTitle: "Soaps made to be gifted, celebrated, and enjoyed",
    heroText: "Every soap is handmade with vegetable glycerin: everyday shapes and scents, plus special designs for weddings, baby showers, and parties.",
    heroCtaPrimary: "View catalog",
    heroCtaSecondary: "Order on WhatsApp",
    badge1: "100% vegetable-based",
    badge2: "Great for gifts",
    badge3: "Handmade",
    statAromas: "Scents available",
    statRecuerdos: "Event designs",
    statHandmade: "Handmade",
    destacadosEyebrow: "The favorites",
    destacadosTitle: "Most requested",
    destacadosText: "A quick look at what shows up most in gift and event orders.",
    aromasEyebrow: "For every day",
    aromasTitle: "Scents",
    aromasText: "Individual vegetable-glycerin soaps, each with its own scent. Great for everyday use or as a simple gift.",
    recuerdosEyebrow: "For your event",
    recuerdosTitle: "Event Favors",
    recuerdosText: "Special designs for baby showers, weddings, birthdays, and parties — packaged and ready to hand to your guests.",
    tagAroma: "Scent",
    tagRecuerdo: "Favor",
    orderBtn: "Order on WhatsApp",
    comoPedirEyebrow: "It's easy",
    comoPedirTitle: "How to order",
    step1Title: "Pick your soap",
    step1Text: "Browse the catalog and choose the scent or design you like.",
    step2Title: "Message us on WhatsApp",
    step2Text: "Tap the order button — the message already includes the soap's name.",
    step3Title: "We arrange delivery",
    step3Text: "We confirm quantity, packaging, and how to get it to you.",
    footerTagline: "Handmade soaps, made with care, one at a time.",
    footerCta: "Contact on WhatsApp",
    footerCopy: "Handmade",
    ariaFeatured: "Featured soaps",
    ariaCarousel: "carousel",
    ariaPrev: "Previous",
    ariaNext: "Next",
    ariaClose: "Close",
    ariaMenu: "Open menu",
    ariaDot: (i) => `Go to image ${i}`,
    ariaView: (name) => `View ${name} larger`,
    ariaFloat: "Order on WhatsApp",
    ariaFacebook: "Jabones Licha on Facebook",
    ariaInstagram: "Jabones Licha on Instagram",
    pageTitle: "Handmade Soap Catalog",
    metaDesc: "Handmade vegetable-glycerin soap catalog: scented bars and event favors. Order on WhatsApp.",
    waMessage: (name) => `Hi! I'm interested in the soap: ${name}`,
  },
  de: {
    navAromas: "Düfte",
    navRecuerditos: "Gastgeschenke",
    navComoPedir: "So bestellst du",
    eyebrow: "Handgefertigt · Pflanzliches Glycerin",
    businessName: "Handgefertigte Seifen",
    heroTitle: "Seifen zum Verschenken, Feiern und Genießen",
    heroText: "Jede Seife ist handgefertigt aus pflanzlichem Glycerin: Alltagsformen und -düfte sowie besondere Designs für Hochzeiten, Babypartys und Feste.",
    heroCtaPrimary: "Katalog ansehen",
    heroCtaSecondary: "Per WhatsApp bestellen",
    badge1: "100 % pflanzlich",
    badge2: "Ideal als Geschenk",
    badge3: "Handgefertigt",
    statAromas: "Verfügbare Düfte",
    statRecuerdos: "Designs für Feste",
    statHandmade: "Handgefertigt",
    destacadosEyebrow: "Die Favoriten",
    destacadosTitle: "Am meisten bestellt",
    destacadosText: "Ein schneller Blick auf das, was bei Geschenken und Festen am häufigsten bestellt wird.",
    aromasEyebrow: "Für den Alltag",
    aromasTitle: "Düfte",
    aromasText: "Einzelne Seifen aus pflanzlichem Glycerin, jede mit eigenem Duft. Ideal für den Alltag oder als kleines Geschenk.",
    recuerdosEyebrow: "Für dein Fest",
    recuerdosTitle: "Gastgeschenke",
    recuerdosText: "Besondere Designs für Babypartys, Hochzeiten, Geburtstage und Feste — verpackt und bereit für deine Gäste.",
    tagAroma: "Duft",
    tagRecuerdo: "Geschenk",
    orderBtn: "Per WhatsApp bestellen",
    comoPedirEyebrow: "Ganz einfach",
    comoPedirTitle: "So bestellst du",
    step1Title: "Seife auswählen",
    step1Text: "Stöbere im Katalog und wähle deinen Lieblingsduft oder dein Lieblingsdesign.",
    step2Title: "Per WhatsApp schreiben",
    step2Text: "Tippe auf den Bestell-Button — die Nachricht enthält bereits den Namen der Seife.",
    step3Title: "Lieferung vereinbaren",
    step3Text: "Wir bestätigen Menge, Verpackung und Zustellung.",
    footerTagline: "Handgefertigte Seifen, mit Liebe gemacht, eine nach der anderen.",
    footerCta: "Per WhatsApp kontaktieren",
    footerCopy: "Handgefertigt",
    ariaFeatured: "Ausgewählte Seifen",
    ariaCarousel: "Karussell",
    ariaPrev: "Zurück",
    ariaNext: "Weiter",
    ariaClose: "Schließen",
    ariaMenu: "Menü öffnen",
    ariaDot: (i) => `Zu Bild ${i} wechseln`,
    ariaView: (name) => `${name} vergrößert ansehen`,
    ariaFloat: "Per WhatsApp bestellen",
    ariaFacebook: "Jabones Licha auf Facebook",
    ariaInstagram: "Jabones Licha auf Instagram",
    pageTitle: "Katalog für handgefertigte Seifen",
    metaDesc: "Katalog handgefertigter Glycerinseifen: Duftseifen und Gastgeschenke. Bestellung per WhatsApp.",
    waMessage: (name) => `Hallo! Ich interessiere mich für die Seife: ${name}`,
  },
};

function t(key) {
  return I18N[currentLang][key];
}

const PRODUCTS = [
  // ---- Jabones por aroma ----
  { id: "menta", category: "aromas", img: "images/WhatsApp Image 2026-10-13 at 7.23.10 PM.jpeg" },
  { id: "cheesecake", category: "aromas", img: "images/WhatsApp Image 2026-10-13 at 7.23.12 PM.jpeg" },
  { id: "canela", category: "aromas", img: "images/WhatsApp Image 2026-10-13 at 7.23.16 PM.jpeg" },
  { id: "uva", category: "aromas", img: "images/WhatsApp Image 2026-10-13 at 7.23.17 PM.jpeg" },
  { id: "naranja", category: "aromas", img: "images/WhatsApp Image 2026-10-13 at 7.23.11 PM (2).jpeg" },
  { id: "lavanda", category: "aromas", img: "images/WhatsApp Image 2026-10-13 at 7.23.12 PM (2).jpeg" },
  { id: "flores", category: "aromas", img: "images/WhatsApp Image 2026-10-13 at 7.23.12 PM (5).jpeg" },
  { id: "limon", category: "aromas", img: "images/WhatsApp Image 2026-10-13 at 7.23.19 PM (1).jpeg" },
  { id: "arbol-de-te", category: "aromas", img: "images/WhatsApp Image 2026-10-13 at 7.23.21 PM.jpeg" },
  { id: "miel-avena", category: "aromas", img: "images/WhatsApp Image 2026-10-13 at 7.23.20 PM.jpeg" },
  { id: "aloe-vera", category: "aromas", img: "images/WhatsApp Image 2026-10-13 at 7.23.19 PM.jpeg" },

  // ---- Recuerditos para fiestas y eventos ----
  { id: "baby-shower", category: "recuerditos", img: "images/WhatsApp Image 2026-10-13 at 7.23.23 PM (4).jpeg" },
  { id: "navidad", category: "recuerditos", img: "images/WhatsApp Image 2026-10-13 at 7.23.26 PM (1).jpeg" },
  { id: "mascotas", category: "recuerditos", img: "images/WhatsApp Image 2026-10-13 at 7.23.17 PM (2).jpeg" },
  { id: "casa-nueva", category: "recuerditos", img: "images/WhatsApp Image 2026-10-13 at 7.23.24 PM (3).jpeg" },
  { id: "boda-compromiso", category: "recuerditos", img: "images/WhatsApp Image 2026-10-13 at 7.23.16 PM (2).jpeg" },
  { id: "patitos", category: "recuerditos", img: "images/WhatsApp Image 2026-10-13 at 7.23.17 PM (1).jpeg" },
  { id: "unicornio", category: "recuerditos", img: "images/WhatsApp Image 2026-10-13 at 7.23.26 PM (2).jpeg" },
  { id: "galactico", category: "recuerditos", img: "images/WhatsApp Image 2026-10-13 at 7.23.26 PM (4).jpeg" },
  { id: "flores-variadas", category: "recuerditos", img: "images/WhatsApp Image 2026-10-13 at 7.23.22 PM (1).jpeg" },
];

const PRODUCT_I18N = {
  menta: {
    es: { name: "Menta", desc: "Jabón de glicerina vegetal, aroma a menta." },
    en: { name: "Mint", desc: "Vegetable glycerin soap with a fresh mint scent." },
    de: { name: "Minze", desc: "Pflanzliche Glycerinseife mit frischem Minzduft." },
  },
  cheesecake: {
    es: { name: "Cheesecake", desc: "Jabón de glicerina vegetal, aroma a cheesecake." },
    en: { name: "Cheesecake", desc: "Vegetable glycerin soap with a sweet cheesecake scent." },
    de: { name: "Cheesecake", desc: "Pflanzliche Glycerinseife mit süßem Cheesecake-Duft." },
  },
  canela: {
    es: { name: "Canela", desc: "Jabón de glicerina vegetal, aroma a canela." },
    en: { name: "Cinnamon", desc: "Vegetable glycerin soap with a warm cinnamon scent." },
    de: { name: "Zimt", desc: "Pflanzliche Glycerinseife mit warmem Zimtduft." },
  },
  uva: {
    es: { name: "Uva", desc: "Jabón de glicerina vegetal con forma de racimo de uvas." },
    en: { name: "Grape", desc: "Vegetable glycerin soap shaped like a bunch of grapes." },
    de: { name: "Traube", desc: "Pflanzliche Glycerinseife in Form einer Weintraube." },
  },
  naranja: {
    es: { name: "Naranja", desc: "Jabón de glicerina vegetal, aroma a naranja." },
    en: { name: "Orange", desc: "Vegetable glycerin soap with a citrus orange scent." },
    de: { name: "Orange", desc: "Pflanzliche Glycerinseife mit Orangenduft." },
  },
  lavanda: {
    es: { name: "Lavanda", desc: "Jabón de glicerina vegetal, aroma a lavanda." },
    en: { name: "Lavender", desc: "Vegetable glycerin soap with a calming lavender scent." },
    de: { name: "Lavendel", desc: "Pflanzliche Glycerinseife mit beruhigendem Lavendelduft." },
  },
  flores: {
    es: { name: "Flores", desc: "Jabón de glicerina vegetal, aroma floral." },
    en: { name: "Flowers", desc: "Vegetable glycerin soap with a delicate floral scent." },
    de: { name: "Blumen", desc: "Pflanzliche Glycerinseife mit zartem Blumenduft." },
  },
  limon: {
    es: { name: "Limón", desc: "Jabón de glicerina vegetal, aroma a limón." },
    en: { name: "Lemon", desc: "Vegetable glycerin soap with a fresh lemon scent." },
    de: { name: "Zitrone", desc: "Pflanzliche Glycerinseife mit frischem Zitronenduft." },
  },
  "arbol-de-te": {
    es: { name: "Árbol de Té", desc: "Jabón de glicerina vegetal, limpieza profunda y purificación." },
    en: { name: "Tea Tree", desc: "Vegetable glycerin soap for deep, purifying cleansing." },
    de: { name: "Teebaum", desc: "Pflanzliche Glycerinseife für eine tiefe, reinigende Wirkung." },
  },
  "miel-avena": {
    es: { name: "Miel y Avena", desc: "Jabón de glicerina vegetal, miel y avena." },
    en: { name: "Honey & Oats", desc: "Vegetable glycerin soap with honey and oats." },
    de: { name: "Honig & Hafer", desc: "Pflanzliche Glycerinseife mit Honig und Hafer." },
  },
  "aloe-vera": {
    es: { name: "Aloe Vera", desc: "Jabón de glicerina vegetal con aloe vera." },
    en: { name: "Aloe Vera", desc: "Vegetable glycerin soap with aloe vera." },
    de: { name: "Aloe Vera", desc: "Pflanzliche Glycerinseife mit Aloe Vera." },
  },
  "baby-shower": {
    es: { name: "Baby Shower", desc: "Recuerdo de jabón para baby shower, niño o niña." },
    en: { name: "Baby Shower", desc: "Soap favor for a baby shower, boy or girl." },
    de: { name: "Babyparty", desc: "Seifen-Gastgeschenk für eine Babyparty, Junge oder Mädchen." },
  },
  navidad: {
    es: { name: "Navidad", desc: "Set de jabones navideños: copos de nieve, árbol y estrella." },
    en: { name: "Christmas", desc: "Christmas soap set: snowflake, tree, and star." },
    de: { name: "Weihnachten", desc: "Weihnachtliches Seifenset: Schneeflocke, Baum und Stern." },
  },
  mascotas: {
    es: { name: "Mascotas", desc: "Jabones con forma de huellita y huesito para amantes de las mascotas." },
    en: { name: "Pets", desc: "Paw print and bone-shaped soaps for pet lovers." },
    de: { name: "Haustiere", desc: "Seifen in Pfoten- und Knochenform für Tierliebhaber." },
  },
  "casa-nueva": {
    es: { name: "Casa Nueva", desc: "Recuerdo de jabón para estrenar casa." },
    en: { name: "New Home", desc: "Soap favor to celebrate a new home." },
    de: { name: "Neues Zuhause", desc: "Seifen-Geschenk zum Einzug ins neue Zuhause." },
  },
  "boda-compromiso": {
    es: { name: "Boda / Compromiso", desc: "Recuerdo de jabón con manos entrelazadas y rosas, ideal para bodas." },
    en: { name: "Wedding / Engagement", desc: "Soap favor with clasped hands and roses, perfect for weddings." },
    de: { name: "Hochzeit / Verlobung", desc: "Seifen-Geschenk mit ineinander verschlungenen Händen und Rosen, ideal für Hochzeiten." },
  },
  patitos: {
    es: { name: "Patitos", desc: "Jabones de patitos de hule, ideales para baby shower." },
    en: { name: "Rubber Ducks", desc: "Rubber duck-shaped soaps, perfect for a baby shower." },
    de: { name: "Gummienten", desc: "Seifen in Gummienten-Form, ideal für eine Babyparty." },
  },
  unicornio: {
    es: { name: "Unicornio", desc: "Jabón artesanal con forma de unicornio, natural y vegano." },
    en: { name: "Unicorn", desc: "Handmade unicorn-shaped soap, natural and vegan." },
    de: { name: "Einhorn", desc: "Handgefertigte Seife in Einhornform, natürlich und vegan." },
  },
  galactico: {
    es: { name: "Galáctico", desc: "Jabón decorativo con efecto galaxia." },
    en: { name: "Galaxy", desc: "Decorative soap with a galaxy effect." },
    de: { name: "Galaktisch", desc: "Dekorative Seife mit Galaxie-Effekt." },
  },
  "flores-variadas": {
    es: { name: "Flores Variadas", desc: "Recuerdo con variedad de flores decorativas." },
    en: { name: "Assorted Flowers", desc: "Favor featuring an assortment of decorative flowers." },
    de: { name: "Verschiedene Blumen", desc: "Geschenk mit einer Auswahl dekorativer Blumen." },
  },
};

function localized(product) {
  const tr = PRODUCT_I18N[product.id][currentLang];
  return { ...product, name: tr.name, desc: tr.desc };
}

const AROMAS = PRODUCTS.filter((p) => p.category === "aromas");
const RECUERDITOS = PRODUCTS.filter((p) => p.category === "recuerditos");

// Curated highlight reel for the "Destacados" carousel
const CAROUSEL_IDS = ["uva", "lavanda", "navidad", "unicornio", "baby-shower", "cheesecake"];

function waLink(productName) {
  const msg = encodeURIComponent(t("waMessage")(productName));
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
}

// ---------------- Product grids (no filter — each section is fixed) ----------------
let aromasList = [];
let recuerditosList = [];

function cardHTML(p, idx, gridName) {
  const tagClass = p.category === "aromas" ? "tag-aroma" : "tag-recuerdo";
  const tagText = p.category === "aromas" ? t("tagAroma") : t("tagRecuerdo");
  return `
    <article class="card reveal">
      <div class="card-img" data-grid="${gridName}" data-index="${idx}" role="button" tabindex="0" aria-label="${t("ariaView")(p.name)}">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="card-body">
        <span class="tag ${tagClass}">${tagText}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <a class="order-btn" href="${waLink(p.name)}" target="_blank" rel="noopener"><svg class="icon"><use href="#icon-whatsapp"/></svg> ${t("orderBtn")}</a>
      </div>
    </article>`;
}

function renderGrids() {
  aromasList = AROMAS.map(localized);
  recuerditosList = RECUERDITOS.map(localized);

  document.getElementById("grid-aromas").innerHTML = aromasList
    .map((p, i) => cardHTML(p, i, "aromas"))
    .join("");

  document.getElementById("grid-recuerditos").innerHTML = recuerditosList
    .map((p, i) => cardHTML(p, i, "recuerditos"))
    .join("");

  observeReveals();
}

let revealObserver;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => revealObserver.observe(el));
}

document.addEventListener("click", (e) => {
  const imgWrap = e.target.closest(".card-img");
  if (!imgWrap) return;
  const list = imgWrap.dataset.grid === "aromas" ? aromasList : recuerditosList;
  openLightbox(list, Number(imgWrap.dataset.index));
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const imgWrap = e.target.closest(".card-img");
  if (!imgWrap) return;
  e.preventDefault();
  const list = imgWrap.dataset.grid === "aromas" ? aromasList : recuerditosList;
  openLightbox(list, Number(imgWrap.dataset.index));
});

// ---------------- Stats (computed from data, not hardcoded) ----------------
function renderStats() {
  document.getElementById("statAromasNum").textContent = AROMAS.length;
  document.getElementById("statRecuerdosNum").textContent = RECUERDITOS.length;
}

// ---------------- Hero carousel ("Destacados") ----------------
let carouselIndex = 0;
let carouselTimer = null;
const CAROUSEL_INTERVAL = 4500;
let carouselSlideEls = [];
let carouselSlideProducts = [];

function initCarousel() {
  const track = document.getElementById("carousel-track");
  const dotsWrap = document.getElementById("carousel-dots");
  carouselSlideProducts = CAROUSEL_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);

  track.innerHTML = carouselSlideProducts
    .map(
      (p) => `
    <div class="carousel-slide">
      <img src="${p.img}" alt="">
      <div class="carousel-caption"><span></span></div>
    </div>
  `
    )
    .join("");
  carouselSlideEls = Array.from(track.querySelectorAll(".carousel-slide"));

  dotsWrap.innerHTML = carouselSlideProducts
    .map((_, i) => `<button class="carousel-dot${i === 0 ? " active" : ""}" data-i="${i}"></button>`)
    .join("");

  const dots = dotsWrap.querySelectorAll(".carousel-dot");
  const total = carouselSlideProducts.length;

  function goTo(i) {
    carouselIndex = (i + total) % total;
    track.style.transform = `translateX(-${carouselIndex * 100}%)`;
    dots.forEach((d) => d.classList.remove("active"));
    dots[carouselIndex].classList.add("active");
    carouselSlideEls.forEach((s) => s.classList.remove("active"));
    carouselSlideEls[carouselIndex].classList.add("active");
  }

  function next() {
    goTo(carouselIndex + 1);
  }
  function prev() {
    goTo(carouselIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    carouselTimer = setInterval(next, CAROUSEL_INTERVAL);
  }
  function stopAutoplay() {
    if (carouselTimer) clearInterval(carouselTimer);
    carouselTimer = null;
  }

  dots.forEach((d) =>
    d.addEventListener("click", () => {
      goTo(Number(d.dataset.i));
      startAutoplay();
    })
  );
  document.getElementById("carousel-prev").addEventListener("click", () => {
    prev();
    startAutoplay();
  });
  document.getElementById("carousel-next").addEventListener("click", () => {
    next();
    startAutoplay();
  });

  const wrap = document.getElementById("carousel");
  wrap.addEventListener("mouseenter", stopAutoplay);
  wrap.addEventListener("mouseleave", startAutoplay);
  wrap.addEventListener("focusin", stopAutoplay);
  wrap.addEventListener("focusout", startAutoplay);

  let touchStartX = null;
  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
      stopAutoplay();
    },
    { passive: true }
  );
  track.addEventListener(
    "touchend",
    (e) => {
      if (touchStartX === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
      touchStartX = null;
      startAutoplay();
    },
    { passive: true }
  );

  updateCarouselTexts();
  goTo(0);
  startAutoplay();
}

function updateCarouselTexts() {
  carouselSlideProducts.forEach((p, i) => {
    const tr = PRODUCT_I18N[p.id][currentLang];
    const el = carouselSlideEls[i];
    if (!el) return;
    el.querySelector("img").alt = tr.name;
    el.querySelector(".carousel-caption span").textContent = tr.name;
  });
  document.querySelectorAll("#carousel-dots .carousel-dot").forEach((d, i) => {
    d.setAttribute("aria-label", t("ariaDot")(i + 1));
  });
  document.getElementById("carousel-prev").setAttribute("aria-label", t("ariaPrev"));
  document.getElementById("carousel-next").setAttribute("aria-label", t("ariaNext"));
  document.getElementById("carousel").setAttribute("aria-label", t("ariaFeatured"));
  document.getElementById("carousel").setAttribute("aria-roledescription", t("ariaCarousel"));
}

// ---------------- Lightbox ----------------
let currentList = [];
let currentIndex = 0;
let lastFocusedEl = null;

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
  const lbTag = document.getElementById("lightbox-tag");
  lbTag.textContent = p.category === "aromas" ? t("tagAroma") : t("tagRecuerdo");
  lbTag.className = `tag ${p.category === "aromas" ? "tag-aroma" : "tag-recuerdo"}`;
  document.getElementById("lightbox-title").textContent = p.name;
  document.getElementById("lightbox-desc").textContent = p.desc;
  document.getElementById("lightbox-order").href = waLink(p.name);
  document.getElementById("lightbox-order-label").textContent = t("orderBtn");
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

function updateLightboxAria() {
  document.getElementById("lightbox-close").setAttribute("aria-label", t("ariaClose"));
  document.getElementById("lightbox-prev").setAttribute("aria-label", t("ariaPrev"));
  document.getElementById("lightbox-next").setAttribute("aria-label", t("ariaNext"));
}

// ---------------- Mobile nav ----------------
function initMobileNav() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      menuToggle.classList.remove("open");
    }
  });
}

function initHeaderScroll() {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 8), { passive: true });
}

// ---------------- Language switching ----------------
function applyStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
}

function setLanguage(lang) {
  if (!LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.title = t("pageTitle");
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("metaDesc"));

  applyStaticText();
  renderGrids();
  updateCarouselTexts();
  updateLightboxAria();

  document.getElementById("menuToggle").setAttribute("aria-label", t("ariaMenu"));
  document.getElementById("float-wa").setAttribute("aria-label", t("ariaFloat"));
  const fbLink = document.querySelector('.social-row a[href*="facebook.com"]');
  const igLink = document.querySelector('.social-row a[href*="instagram.com"]');
  if (fbLink) fbLink.setAttribute("aria-label", t("ariaFacebook"));
  if (igLink) igLink.setAttribute("aria-label", t("ariaInstagram"));

  document.querySelectorAll("#langSwitch button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

function initLangSwitch() {
  document.querySelectorAll("#langSwitch button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-wa").href = `https://wa.me/${CONFIG.whatsappNumber}`;
  document.getElementById("float-wa").href = `https://wa.me/${CONFIG.whatsappNumber}`;
  document.getElementById("heroWa").href = `https://wa.me/${CONFIG.whatsappNumber}`;
  document.getElementById("navWa").href = `https://wa.me/${CONFIG.whatsappNumber}`;
  renderStats();
  initLangSwitch();
  initMobileNav();
  initHeaderScroll();
  initCarousel();
  initLightbox();
  setLanguage(currentLang);
});

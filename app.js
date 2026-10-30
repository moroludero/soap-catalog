// ---- EDIT THIS LINE WITH THE REAL WHATSAPP NUMBER ----
const CONFIG = {
  whatsappNumber: "5353335221", // E.164 without +
  currency: "MXN",
  // Price by category. To give one specific product its own price instead,
  // add a `price` field to that entry in PRODUCTS below — it overrides this.
  categoryPrices: { aromas: 30, recuerditos: 50 },
};
// --------------------------------------------------------

// Products Felicia adds herself from her phone (via admin.html) live in this
// API instead of this file. They're merged into PRODUCTS at load time — see
// loadApiProducts() near the bottom. If the API is unreachable, the site
// still works with just the products hardcoded below.
const API_BASE = "https://moroludero-catalogos-api.azurewebsites.net";

function priceFor(product) {
  return product.price != null ? product.price : CONFIG.categoryPrices[product.category];
}

function priceLabel(amount) {
  return `$${amount} ${CONFIG.currency}`;
}

const LANGS = ["es", "en", "de"];
const savedLang = localStorage.getItem("lang");
let currentLang = LANGS.includes(savedLang) ? savedLang : "es";

const I18N = {
  es: {
    navAromas: "Aromas",
    navRecuerditos: "Recuerditos",
    navComoPedir: "Cómo pedir",
    eyebrow: "Hecho a mano · Glicerina vegetal",
    businessName: "Jabones Licha",
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
    favoriteBadge: "Más pedido",
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
    testimoniosEyebrow: "Lo que dicen de nosotros",
    testimoniosTitle: "Testimonios",
    instagramEyebrow: "Síguenos",
    instagramTitle: "Instagram",
    instagramCta: "Ver en Instagram",
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
    pageTitle: "Jabones Licha — Catálogo de jabones artesanales",
    metaDesc: "Jabones Licha: jabones artesanales de glicerina vegetal, aromas y recuerditos para eventos. Pide por WhatsApp.",
    waMessage: (name) => `Hola, me interesa el jabón: ${name}`,
    addToOrder: "Agregar al pedido",
    ariaAddOne: "Agregar uno más",
    ariaRemoveOne: "Quitar uno",
    viewOrder: "Ver pedido",
    cartTitle: "Tu pedido",
    cartEmpty: "Tu pedido está vacío. Agrega jabones desde el catálogo.",
    cartNameLabel: "Tu nombre",
    cartNamePlaceholder: "Ej. María López",
    cartNotesLabel: "Entrega o notas",
    cartNotesPlaceholder: "Ej. Entregar por la tarde",
    cartSendBtn: "Enviar pedido por WhatsApp",
    cartGreeting: "Hola, quiero pedir:",
    cartNameLine: "Nombre",
    cartNotesLine: "Entrega / Notas",
    cartTotalLine: "Total",
    cartTotalLabel: "Total a pagar",
    locationShareBtn: "Compartir mi ubicación de Google Maps",
    locationLoading: "Obteniendo tu ubicación…",
    locationAdded: "Ubicación agregada ✓",
    locationError: "No se pudo obtener tu ubicación. Puedes escribir la dirección arriba.",
    locationDenied: "Permiso de ubicación denegado. Puedes escribir la dirección arriba.",
    locationLine: "Ubicación (Google Maps)",
  },
  en: {
    navAromas: "Scents",
    navRecuerditos: "Event Favors",
    navComoPedir: "How to order",
    eyebrow: "Handmade · Vegetable glycerin",
    businessName: "Jabones Licha",
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
    favoriteBadge: "Most requested",
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
    testimoniosEyebrow: "What our customers say",
    testimoniosTitle: "Testimonials",
    instagramEyebrow: "Follow us",
    instagramTitle: "Instagram",
    instagramCta: "View on Instagram",
    footerTagline: "Handmade soaps, made with care, one at a time.",
    footerCta: "Contact on WhatsApp",
    footerCopy: "Handmade",
    ariaPrev: "Previous",
    ariaNext: "Next",
    ariaClose: "Close",
    ariaMenu: "Open menu",
    ariaView: (name) => `View ${name} larger`,
    ariaFloat: "Order on WhatsApp",
    ariaFacebook: "Jabones Licha on Facebook",
    ariaInstagram: "Jabones Licha on Instagram",
    pageTitle: "Jabones Licha — Handmade Soap Catalog",
    metaDesc: "Jabones Licha: handmade vegetable-glycerin soaps, scented bars and event favors. Order on WhatsApp.",
    waMessage: (name) => `Hi! I'm interested in the soap: ${name}`,
    addToOrder: "Add to order",
    ariaAddOne: "Add one more",
    ariaRemoveOne: "Remove one",
    viewOrder: "View order",
    cartTitle: "Your order",
    cartEmpty: "Your order is empty. Add soaps from the catalog.",
    cartNameLabel: "Your name",
    cartNamePlaceholder: "E.g. Maria Lopez",
    cartNotesLabel: "Delivery or notes",
    cartNotesPlaceholder: "E.g. Deliver in the afternoon",
    cartSendBtn: "Send order on WhatsApp",
    cartGreeting: "Hi, I'd like to order:",
    cartNameLine: "Name",
    cartNotesLine: "Delivery / Notes",
    cartTotalLine: "Total",
    cartTotalLabel: "Total due",
    locationShareBtn: "Share my Google Maps location",
    locationLoading: "Getting your location…",
    locationAdded: "Location added ✓",
    locationError: "Couldn't get your location. You can type the address above.",
    locationDenied: "Location permission denied. You can type the address above.",
    locationLine: "Location (Google Maps)",
  },
  de: {
    navAromas: "Düfte",
    navRecuerditos: "Gastgeschenke",
    navComoPedir: "So bestellst du",
    eyebrow: "Handgefertigt · Pflanzliches Glycerin",
    businessName: "Jabones Licha",
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
    favoriteBadge: "Am meisten bestellt",
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
    testimoniosEyebrow: "Das sagen unsere Kundinnen",
    testimoniosTitle: "Kundenstimmen",
    instagramEyebrow: "Folge uns",
    instagramTitle: "Instagram",
    instagramCta: "Auf Instagram ansehen",
    footerTagline: "Handgefertigte Seifen, mit Liebe gemacht, eine nach der anderen.",
    footerCta: "Per WhatsApp kontaktieren",
    footerCopy: "Handgefertigt",
    ariaPrev: "Zurück",
    ariaNext: "Weiter",
    ariaClose: "Schließen",
    ariaMenu: "Menü öffnen",
    ariaView: (name) => `${name} vergrößert ansehen`,
    ariaFloat: "Per WhatsApp bestellen",
    ariaFacebook: "Jabones Licha auf Facebook",
    ariaInstagram: "Jabones Licha auf Instagram",
    pageTitle: "Jabones Licha — Katalog für handgefertigte Seifen",
    metaDesc: "Jabones Licha: handgefertigte Glycerinseifen, Duftseifen und Gastgeschenke. Bestellung per WhatsApp.",
    waMessage: (name) => `Hallo! Ich interessiere mich für die Seife: ${name}`,
    addToOrder: "Zur Bestellung hinzufügen",
    ariaAddOne: "Eins mehr hinzufügen",
    ariaRemoveOne: "Eins entfernen",
    viewOrder: "Bestellung ansehen",
    cartTitle: "Deine Bestellung",
    cartEmpty: "Deine Bestellung ist leer. Füge Seifen aus dem Katalog hinzu.",
    cartNameLabel: "Dein Name",
    cartNamePlaceholder: "Z. B. Maria Lopez",
    cartNotesLabel: "Lieferung oder Notizen",
    cartNotesPlaceholder: "Z. B. Lieferung am Nachmittag",
    cartSendBtn: "Bestellung per WhatsApp senden",
    cartGreeting: "Hallo, ich möchte bestellen:",
    cartNameLine: "Name",
    cartNotesLine: "Lieferung / Notizen",
    cartTotalLine: "Gesamtbetrag",
    cartTotalLabel: "Gesamtbetrag",
    locationShareBtn: "Meinen Google-Maps-Standort teilen",
    locationLoading: "Standort wird ermittelt…",
    locationAdded: "Standort hinzugefügt ✓",
    locationError: "Standort konnte nicht ermittelt werden. Du kannst die Adresse oben eingeben.",
    locationDenied: "Standortzugriff verweigert. Du kannst die Adresse oben eingeben.",
    locationLine: "Standort (Google Maps)",
  },
};

function t(key) {
  return I18N[currentLang][key];
}

// Los productos viven en el backend (Cosmos DB) para que Felicia los pueda
// agregar, editar o eliminar ella misma desde el panel — ver loadApiProducts()
// más abajo. Se cargan vacíos aquí y se llenan al conectar con la API, con
// respaldo en localStorage si la API no responde.
let PRODUCTS = [];
let PRODUCT_I18N = {};

function localized(product) {
  const tr = PRODUCT_I18N[product.id][currentLang];
  return { ...product, name: tr.name, desc: tr.desc };
}

let AROMAS = PRODUCTS.filter((p) => p.category === "aromas");
let RECUERDITOS = PRODUCTS.filter((p) => p.category === "recuerditos");

// ---------------- Products come entirely from the API (Felicia's panel) ----------------
// Both the 20 original soaps and anything she adds/edits afterward live in
// the same backend — this just rebuilds PRODUCTS/PRODUCT_I18N from whatever
// the API returns. Products with saved EN/DE translations (the original 20)
// keep them; anything Felicia adds herself only has her Spanish text, shown
// as-is in all 3 languages (she doesn't type translations).
function setProductsFromApi(apiItems) {
  PRODUCTS = [];
  PRODUCT_I18N = {};
  apiItems.forEach((item) => {
    if (!item || !item.id) return;
    PRODUCTS.push({ id: item.id, category: item.category, img: item.photoUrl, price: item.price ?? null });
    const esName = item.name;
    const esDesc = item.desc || "";
    PRODUCT_I18N[item.id] = {
      es: { name: esName, desc: esDesc },
      en: item.i18n && item.i18n.en ? item.i18n.en : { name: esName, desc: esDesc },
      de: item.i18n && item.i18n.de ? item.i18n.de : { name: esName, desc: esDesc },
    };
  });
  AROMAS = PRODUCTS.filter((p) => p.category === "aromas");
  RECUERDITOS = PRODUCTS.filter((p) => p.category === "recuerditos");
}

async function loadApiProducts() {
  try {
    const res = await fetch(`${API_BASE}/api/licha/products`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) throw new Error("API devolvió una lista vacía");
    localStorage.setItem("apiProductsCache", JSON.stringify(data));
    setProductsFromApi(data);
    renderGrids();
    renderStats();
  } catch (err) {
    console.warn("No se pudieron cargar los productos de la API, usando caché local", err);
    try {
      const cached = JSON.parse(localStorage.getItem("apiProductsCache") || "[]");
      if (Array.isArray(cached) && cached.length) {
        setProductsFromApi(cached);
        renderGrids();
        renderStats();
      }
    } catch (e) {
      // sin caché disponible — el catálogo queda vacío hasta que la API responda
    }
  }
}

// Curated list of best-sellers, flagged with a badge on their card
const FAVORITE_IDS = new Set(["uva", "lavanda", "navidad", "unicornio", "baby-shower", "cheesecake"]);

// ---------------- Cart (multi-item WhatsApp order) ----------------
let CART = {}; // { productId: qty }

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("cart") || "{}");
    if (saved && typeof saved === "object") CART = saved;
  } catch (e) {
    CART = {};
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(CART));
}

function cartCount() {
  return Object.values(CART).reduce((sum, q) => sum + q, 0);
}

function addToCart(id) {
  CART[id] = (CART[id] || 0) + 1;
  saveCart();
  renderQtyControl(id);
  updateCartBar();
  renderCartDrawerItems();
}

function removeFromCart(id) {
  if (!CART[id]) return;
  CART[id] -= 1;
  if (CART[id] <= 0) delete CART[id];
  saveCart();
  renderQtyControl(id);
  updateCartBar();
  renderCartDrawerItems();
}

function qtyControlHTML(id) {
  const qty = CART[id] || 0;
  if (qty === 0) {
    return `<button type="button" class="btn-add" data-action="add" data-id="${id}"><svg class="icon"><use href="#icon-cart"/></svg> ${t("addToOrder")}</button>`;
  }
  return `<div class="qty-stepper">
    <button type="button" class="qty-btn" data-action="dec" data-id="${id}" aria-label="${t("ariaRemoveOne")}">&minus;</button>
    <span class="qty-value">${qty}</span>
    <button type="button" class="qty-btn" data-action="inc" data-id="${id}" aria-label="${t("ariaAddOne")}">+</button>
  </div>`;
}

function renderQtyControl(id) {
  document.querySelectorAll(`.qty-control[data-id="${id}"]`).forEach((el) => {
    el.innerHTML = qtyControlHTML(id);
  });
}

function renderAllQtyControls() {
  PRODUCTS.forEach((p) => renderQtyControl(p.id));
}

function updateCartBar() {
  const count = cartCount();
  document.getElementById("cartBarCount").textContent = count;
  document.getElementById("cartBar").classList.toggle("visible", count > 0);
}

function cartTotal() {
  return Object.keys(CART)
    .filter((id) => CART[id] > 0)
    .reduce((sum, id) => sum + priceFor(PRODUCTS.find((p) => p.id === id)) * CART[id], 0);
}

function renderCartDrawerItems() {
  const wrap = document.getElementById("cartItems");
  const form = document.getElementById("cartForm");
  const totalRow = document.getElementById("cartTotalRow");
  const entries = Object.keys(CART).filter((id) => CART[id] > 0);
  if (entries.length === 0) {
    wrap.innerHTML = `<p class="cart-empty">${t("cartEmpty")}</p>`;
    form.style.display = "none";
    totalRow.style.display = "none";
    return;
  }
  form.style.display = "";
  totalRow.style.display = "";
  wrap.innerHTML = entries
    .map((id) => {
      const product = PRODUCTS.find((p) => p.id === id);
      const name = PRODUCT_I18N[id][currentLang].name;
      const subtotal = priceFor(product) * CART[id];
      return `
        <div class="cart-item">
          <div class="cart-item-info">
            <span class="cart-item-name">${name}</span>
            <span class="cart-item-price">${priceLabel(priceFor(product))} × ${CART[id]} = ${priceLabel(subtotal)}</span>
          </div>
          <div class="qty-control" data-id="${id}">${qtyControlHTML(id)}</div>
        </div>`;
    })
    .join("");
  document.getElementById("cartTotalValue").textContent = priceLabel(cartTotal());
}

function waCartMessage(name, notes) {
  const entries = Object.keys(CART).filter((id) => CART[id] > 0);
  const lines = entries.map((id) => {
    const product = PRODUCTS.find((p) => p.id === id);
    const subtotal = priceFor(product) * CART[id];
    return `• ${CART[id]}x ${PRODUCT_I18N[id][currentLang].name} — ${priceLabel(subtotal)}`;
  });
  let msg = `${t("cartGreeting")}\n${lines.join("\n")}\n\n${t("cartTotalLine")}: ${priceLabel(cartTotal())}`;
  if (name) msg += `\n\n${t("cartNameLine")}: ${name}`;
  if (notes) msg += `\n${t("cartNotesLine")}: ${notes}`;
  if (cartLocation) msg += `\n${t("locationLine")}: ${cartLocation.link}`;
  return msg;
}

// ---------------- Google Maps location share ----------------
let cartLocation = null; // { lat, lng, link }

function requestCartLocation() {
  const btn = document.getElementById("cartLocationBtn");
  const status = document.getElementById("cartLocationStatus");
  status.hidden = false;
  if (!navigator.geolocation) {
    status.className = "location-status error";
    status.textContent = t("locationError");
    return;
  }
  btn.disabled = true;
  status.className = "location-status";
  status.textContent = t("locationLoading");
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      cartLocation = { lat: latitude, lng: longitude, link: `https://www.google.com/maps?q=${latitude},${longitude}` };
      status.className = "location-status success";
      status.textContent = t("locationAdded");
      btn.disabled = false;
    },
    (err) => {
      cartLocation = null;
      status.className = "location-status error";
      status.textContent = err.code === err.PERMISSION_DENIED ? t("locationDenied") : t("locationError");
      btn.disabled = false;
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function resetCartLocation() {
  cartLocation = null;
  const status = document.getElementById("cartLocationStatus");
  status.hidden = true;
  status.textContent = "";
  status.className = "location-status";
}

function openCartDrawer() {
  renderCartDrawerItems();
  const drawer = document.getElementById("cartDrawer");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initCartDrawer() {
  document.getElementById("cartBar").addEventListener("click", openCartDrawer);
  document.getElementById("cartClose").addEventListener("click", closeCartDrawer);
  document.getElementById("cartBackdrop").addEventListener("click", closeCartDrawer);
  document.getElementById("cartLocationBtn").addEventListener("click", requestCartLocation);
  document.getElementById("cartSend").addEventListener("click", () => {
    if (cartCount() === 0) return;
    const name = document.getElementById("cartName").value.trim();
    const notes = document.getElementById("cartNotes").value.trim();
    const msg = waCartMessage(name, notes);
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    CART = {};
    saveCart();
    renderAllQtyControls();
    updateCartBar();
    renderCartDrawerItems();
    resetCartLocation();
    document.getElementById("cartName").value = "";
    document.getElementById("cartNotes").value = "";
    closeCartDrawer();
  });
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("cartDrawer").classList.contains("open")) return;
    if (e.key === "Escape") closeCartDrawer();
  });
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    if (action === "add" || action === "inc") addToCart(id);
    else if (action === "dec") removeFromCart(id);
  });
}

// ---------------- Product grids (no filter — each section is fixed) ----------------
let aromasList = [];
let recuerditosList = [];

function cardHTML(p, idx, gridName) {
  const tagClass = p.category === "aromas" ? "tag-aroma" : "tag-recuerdo";
  const tagText = p.category === "aromas" ? t("tagAroma") : t("tagRecuerdo");
  const favBadge = FAVORITE_IDS.has(p.id)
    ? `<span class="fav-badge"><svg class="icon"><use href="#icon-star"/></svg> ${t("favoriteBadge")}</span>`
    : "";
  return `
    <article class="card reveal">
      <div class="card-img" data-grid="${gridName}" data-index="${idx}" role="button" tabindex="0" aria-label="${t("ariaView")(p.name)}">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${favBadge}
      </div>
      <div class="card-body">
        <span class="tag ${tagClass}">${tagText}</span>
        <h3>${p.name}</h3>
        ${p.category === "recuerditos" ? `<p>${p.desc}</p>` : ""}
        <span class="price">${priceLabel(priceFor(p))}</span>
        <div class="qty-control" data-id="${p.id}"></div>
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

  renderAllQtyControls();
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
  const lbDesc = document.getElementById("lightbox-desc");
  lbDesc.textContent = p.category === "recuerditos" ? p.desc : "";
  lbDesc.style.display = p.category === "recuerditos" ? "" : "none";
  document.getElementById("lightbox-price").textContent = priceLabel(priceFor(p));
  const lbQty = document.getElementById("lightbox-qty");
  lbQty.dataset.id = p.id;
  lbQty.innerHTML = qtyControlHTML(p.id);
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
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
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
  updateLightboxAria();

  document.getElementById("menuToggle").setAttribute("aria-label", t("ariaMenu"));
  document.getElementById("float-wa").setAttribute("aria-label", t("ariaFloat"));
  document.getElementById("cartBar").setAttribute("aria-label", t("viewOrder"));
  document.getElementById("cartClose").setAttribute("aria-label", t("ariaClose"));
  const fbLink = document.querySelector('.social-row a[href*="facebook.com"]');
  const igLink = document.querySelector('.social-row a[href*="instagram.com"]');
  if (fbLink) fbLink.setAttribute("aria-label", t("ariaFacebook"));
  if (igLink) igLink.setAttribute("aria-label", t("ariaInstagram"));

  document.querySelectorAll("#langSwitch button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  if (document.getElementById("cartDrawer").classList.contains("open")) {
    renderCartDrawerItems();
  }

  if (cartLocation) {
    const status = document.getElementById("cartLocationStatus");
    status.className = "location-status success";
    status.textContent = t("locationAdded");
  }
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
  loadCart();
  renderStats();
  initLangSwitch();
  initMobileNav();
  initHeaderScroll();
  initLightbox();
  initCartDrawer();
  setLanguage(currentLang);
  updateCartBar();
  loadApiProducts();
});

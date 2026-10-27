# Catálogo de Jabones — Proceso completo

Registro de todo lo que hicimos para crear, publicar y mejorar el catálogo de jabones artesanales de tu suegra, con QR incluido.

## 1. Punto de partida

Pediste armar un catálogo online a partir de fotos de los jabones (formas, aromas, recuerditos para fiestas) y ponerlo detrás de un código QR, gratis, sin usar "Artifacts" de Claude.

Las fotos estaban en: `C:\Users\morol\Pictures\Soap Ctalog` (51 imágenes de WhatsApp).

## 2. Revisión de producto

Se revisaron las 51 fotos una por una para identificar las líneas de producto reales de la marca. Resultado: ~20 productos agrupados en dos categorías:

- **Aromas** (barras individuales): Menta, Cheesecake, Canela, Uva, Naranja, Lavanda, Flores, Limón, Árbol de Té, Miel y Avena, Aloe Vera.
- **Recuerditos para Eventos** (bolsas de regalo): Baby Shower, Navidad, Mascotas, Casa Nueva, Boda/Compromiso, Patitos, Unicornio, Galáctico, Flores Variadas.

## 3. Construcción del sitio

Sitio estático (HTML + CSS + JS, sin frameworks) creado en:
`C:\Users\morol\Documents\SoapCatalog`

Archivos clave:
- `index.html` — estructura de la página
- `styles.css` — todos los estilos
- `app.js` — configuración del negocio, lista de productos, carrusel, lightbox
- `images/` — las 52 fotos originales
- `catalog-qr.png` — el código QR (se regenera con Node + librería `qrcode`)

## 4. Hosting — primer intento: Netlify (abandonado)

1. Se instaló Netlify CLI (`npx netlify-cli`) y se hizo login con tu cuenta (moroludero@gmail.com).
2. Se desplegó el sitio (`netlify deploy --prod`) → quedó en `resplendent-taffy-c33296.netlify.app`.
3. **Problema:** la cuenta de Netlify era nueva y Netlify puso un bloqueo de verificación: el sitio devolvía `401` a cualquier visitante no logueado en Netlify.
4. Decidiste cambiar de proveedor en vez de resolver la verificación.
5. **Nota aparte:** en otra sesión de Claude que tenías abierta en paralelo, pediste borrar la cuenta de Netlify por completo (incluyendo ese deploy). Esa sesión confirmó haberlo hecho. No afectó a este proyecto porque ya nos habíamos movido a otro hosting.

## 5. Hosting definitivo: GitHub Pages

1. Se instaló GitHub CLI (`winget install GitHub.cli`).
2. Login con tu cuenta de GitHub (`gh auth login`, flujo por navegador).
3. Se creó el repositorio público `moroludero/soap-catalog` y se subió el sitio.
4. Se activó GitHub Pages (rama `master`, carpeta raíz).
5. Se limpiaron archivos que no debían subirse (`node_modules/`, carpeta local `.netlify/`) y se agregó `.gitignore`.

**Sitio en vivo:** https://moroludero.github.io/soap-catalog/
**Repositorio:** https://github.com/moroludero/soap-catalog

Cada vez que se hace `git push`, GitHub reconstruye el sitio automáticamente (tarda ~1 minuto).

## 6. QR

Generado localmente con la librería `qrcode` de Node (sin depender de ningún servicio externo), apuntando a la URL de GitHub Pages.
Archivo: `C:\Users\morol\Documents\SoapCatalog\catalog-qr.png` — listo para imprimir.

## 7. Datos de contacto

- WhatsApp configurado: **+53 5 3335221**
- Nombre del negocio: **pendiente** — sigue como placeholder "Jabones Artesanales" en `app.js` hasta que nos des el nombre real.

## 8. Bug resuelto: número viejo apareciendo

Después de actualizar el número de WhatsApp, seguía apareciendo el número placeholder viejo (+52 999 000 0000). Causa: el navegador tenía cacheado el `app.js` anterior — el archivo en GitHub ya estaba correcto. Se solucionó agregando *cache-busting* (`?v=N` en las URLs de `styles.css` y `app.js`, incrementando el número en cada cambio) para que futuras actualizaciones no se queden pegadas en caché.

## 9. Rediseño visual

A pedido tuyo, se investigaron tendencias actuales de sitios boutique/artesanales (ver fuentes abajo) y se rediseñó todo el sitio con estilo **"organic luxury"**:
- Paleta cálida (terracota, beige miel, marrón arcilla)
- Tipografía: títulos en serif (Fraunces), texto en sans-serif limpia (Jost)
- Textura de grano sutil, mucho espacio en blanco
- Nav fija con pastillas (tabs) y efecto blur
- Tarjetas de producto con hover (zoom + sombra) y animación de aparición al hacer scroll
- Botón flotante de WhatsApp

Fuentes consultadas:
- https://bellaworksweb.com/website-design-trends-2026/
- https://colorwhistle.com/e-commerce-design-trends/
- https://blog.overnightprints.com/print-trends-2026-colors-finishes-designs/

## 10. Carrusel + lightbox

Segunda ronda de mejoras, también basada en research de tendencias 2026:
- **Carrusel** en el hero con 6 fotos destacadas (Uva, Lavanda, Navidad, Unicornio, Baby Shower, Cheesecake), autoplay, flechas, puntos, swipe en móvil, se pausa al pasar el mouse/foco, respeta "reducir movimiento" del sistema.
- **Lightbox**: al tocar la foto de cualquier producto se abre en grande con su descripción y botón de WhatsApp propio; se navega con flechas de teclado o swipe sin cerrar el modal.

Fuentes consultadas:
- https://uxplanet.org/carousel-design-best-practices-5ed4e7de90e2
- https://www.designstudiouiux.com/blog/ecommerce-web-design-trends/
- https://www.elcom.com.au/resources/blog/website-design-trends-in-2026

## 11. Pulido para celular

Como la mayoría va a ver el sitio desde el teléfono, se hizo una pasada específica de mobile:
- Objetivos de toque más grandes (puntos del carrusel y botones del lightbox, antes muy chicos)
- Sin "flash" gris al tocar en iOS/Android, sin scroll horizontal accidental
- Botón flotante de WhatsApp respeta el "notch"/barra de gestos del iPhone (`safe-area-inset`)
- Color de la barra del navegador a juego con el sitio (`theme-color`)
- Espaciados más ajustados y carrusel en proporción 4:3 en pantallas chicas (en vez de 16:9, que lo dejaba muy bajito)

## 12. Rediseño de colorimetría (2026-10-23)

Monica (como especialista en marketing) pidió una revisión de diseño real: sentía
que los colores y el diseño general no estaban alineados con el negocio. Se
investigaron tendencias 2026 de branding para jabonerías/boutiques antes de tocar
código (ver fuentes abajo). Diagnóstico: la paleta anterior (terracota `#c2694a` +
bronce `#b08a5a`) se usaba para *todo* — título, botones, tags, íconos — lo cual
se veía plano y pesado, más de tienda de cerámica/aceite de oliva que de jabonería.

Paleta nueva, con roles distintos en vez de un solo tono repetido:
- **Salvia** (`#6f8f6a`) — accento primario, representa "100% vegetal". Se usa en
  tabs activos, enlaces, y el tag de categoría **Aromas**.
- **Arcilla/durazno** (`#d98f74`) — accento secundario, representa regalo/evento.
  Se usa en el tag de categoría **Recuerditos**, dándole a cada línea de producto
  un color distinto y reconocible de un vistazo.
- **Dorado**, usado con moderación solo en un ícono de insignia de confianza.
- Los títulos pasaron a un tono tinta neutro (no un color de marca saturado) —
  así el acento se siente deliberado en vez de "todo del mismo color".

Fuentes consultadas: [Color Trends 2026](https://wannathis.one/blog/color-trends-2026-for-designers-and-brands), [Trending Colours in Retail 2026](https://marketstallco.com.au/?p=37396).

## 13. Rediseño total de estructura (2026-10-26)

Monica pidió un cambio de estructura real, no solo de color ("la estructura sigue
siendo la misma, no me gusta"). Se reconstruyó la arquitectura de información
completa:

- **Header con nav fija** (Aromas / Recuerditos / Cómo pedir) + selector de idioma
  + botón de WhatsApp — antes no había encabezado, el carrusel hacía de hero.
- **Hero partido**: texto a un lado, collage de 2 fotos superpuestas al otro
  (antes era texto centrado seguido de un carrusel a todo lo ancho).
- **Franja de estadísticas** calculada desde los datos reales (`PRODUCTS.length`
  por categoría), no números fijos a mano.
- El carrusel "Destacados" pasó a ser su propia sección con encabezado — luego se
  **eliminó por completo** (ver punto 14).
- **Aromas y Recuerditos ahora son secciones narrativas separadas**, cada una con
  su propio párrafo de introducción, en vez de un solo grid filtrado por pestañas.
- Sección nueva **"Cómo pedir"** (3 pasos: elegir → escribir por WhatsApp →
  coordinar entrega) — antes el sitio nunca explicaba el proceso de compra.
- **Pie de página oscuro** que cierra la página visualmente, haciendo pareja con
  el encabezado.

## 14. Selector de idioma ES/EN/DE

Se agregó un selector de idioma completo (español/inglés/alemán), persistido en
`localStorage`. Traduce absolutamente todo: textos fijos, nombre y descripción de
cada uno de los 20 jabones, tags de categoría, aria-labels, `<title>` y meta
description. Arquitectura en `app.js`: diccionario `I18N` por idioma + diccionario
`PRODUCT_I18N` por producto; función `t(key)` para texto de interfaz.

## 15. Carrusel "Destacados" eliminado — insignia "Más pedido" en su lugar

Monica notó que el carrusel repetía fotos que ya aparecían de nuevo en las
secciones de Aromas/Recuerditos — redundante, no curado, y sobrecargaba el inicio
de la página con una segunda diapositiva de fotos justo después del collage del
hero. Se eliminó el carrusel por completo (markup, CSS y JS) y se reemplazó por
una insignia dorada "★ Más pedido" directamente sobre la foto de los 6 productos
más vendidos, dentro de sus tarjetas normales — mismo mensaje, sin repetir fotos.

## 16. Auditoría completa de fotos — 2 pares de productos cambiados

Monica reportó dos veces fotos mal emparejadas con su producto (ninguna de las
dos había sido tocada por este proyecto; venían así desde la clasificación
original de las 51 fotos):

- **Boda/Compromiso ↔ Patitos**: Patitos mostraba la foto de manos entrelazadas
  con anillo y rosas (en realidad Boda/Compromiso); Boda/Compromiso mostraba una
  foto abstracta que no era ninguna de las dos. La foto real de los patitos de
  hule estaba sin usar entre las 51 originales.
- **Limón ↔ Mascotas**: Limón mostraba la foto de jabones con forma de huellita y
  huesito (en realidad Mascotas); Mascotas mostraba una foto alterna de un
  unicornio que no correspondía a ningún producto cuidadosamente. La foto real de
  "Limón" (con su propia etiqueta "Limón") estaba sin usar.

Tras el segundo caso se hizo una auditoría visual de los 20 productos contra sus
20 fotos asignadas, uno por uno — el resto ya estaba correcto.

## 17. Rebranding a "Jabones Licha" + corrección del logo

El `<h1>`/título del sitio decía "Jabones Artesanales" desde la creación del
proyecto, como placeholder pendiente de nombre real (ver punto 7, pendiente
original). Ya con el nombre real confirmado ("Jabones Licha", igual que la Página
de Facebook/Instagram), se actualizó en `<title>`, meta description, encabezado y
pie de página, en los tres idiomas. El círculo del logo pasó de "J" a **"JL"**.

De paso se corrigió un bug real: el `.mark` del pie de página nunca tuvo estilo de
círculo (le faltaban `background`/`border-radius`/`display:flex`) — se mostraba
como texto plano sin insignia. Ahora comparte el mismo estilo que el del
encabezado.

## 18. Favicon

El sitio no tenía ningún `<link rel="icon">` — la pestaña del navegador mostraba
un ícono genérico de globo, y además explicaba el 404 que aparecía en cada prueba
de este proyecto (el navegador pedía `/favicon.ico` solo, sin que nada lo sirviera).
Se agregó un favicon de emoji 🧼, mismo criterio que usa `KintroCarpintero` (🪚).

## 19. Fotos del hero mejoradas con procesamiento de imagen

El collage del hero usaba Uva + Unicornio; la foto de Unicornio era oscura y
granulada (mala iluminación de celular), bajando la calidad visual de lo primero
que ve cualquier visitante. Se instaló la librería `sharp` (Node) y se generaron
dos copias nuevas — `images/hero-naranja.jpg` y `images/hero-boda.jpg` — a partir
de las fotos de Naranja y Boda/Compromiso (las dos de mejor luz/contraste del
catálogo), aplicando corrección automática de contraste (`normalize()`),
saturación +15%, brillo +5% y nitidez. Las fotos originales del catálogo no se
tocaron — solo estas dos copias, usadas únicamente en el collage del hero.

## 20. Corrección de color de botones

El botón "Ver catálogo" (una acción de scroll, no de WhatsApp) usaba el mismo
verde que "Pedir por WhatsApp" justo al lado, generando confusión sobre cuál
botón abría WhatsApp. Se intercambiaron las clases: "Ver catálogo" ahora es el
botón secundario (contorno salvia), y el verde de WhatsApp queda reservado
exclusivamente para acciones de WhatsApp en todo el sitio.

## 21. Sección de Testimonios (2026-10-26)

A partir de una auditoría de sitios de la competencia (parte de una
investigación de leads para Moroludero Marketing Digital), se agregó una
sección "Testimonios" (3 tarjetas con estrellas, cita y nombre) entre "Cómo
pedir" y el pie de página, traducida en ES/EN/DE (`testimoniosEyebrow`/
`testimoniosTitle` en `app.js`, estilos `.testimonials`/`.testimonial-card` en
`styles.css`, reutiliza el ícono `#icon-star` que ya existía sin usar en el
sprite SVG).

**Importante:** las 3 citas son contenido de muestra (a pedido explícito de
Monica, solo para previsualizar el diseño) — no son reseñas reales de
clientas. Cada tarjeta dice "Clienta de muestra — reemplazar antes de
publicar" en el nombre, precisamente para que sea imposible confundirlas con
testimonios genuinos si se suben así por accidente. **Pendiente:** reemplazar
por 3 reseñas reales de Licha antes de que esto se publique en serio.

**Actualización (mismo día):** Monica pasó 3 reseñas reales de clientas de
Licha (exportadas de un chat de WhatsApp, con nombre, ciudad y calificación de
cada una). Se reemplazaron las 3 tarjetas de muestra por las reales: Laura G.
(jabón de sábila), Andrés M. (recuerdito temática casa nueva) y Sofía R.
(recuerditos de baby shower) — las tres de 5 estrellas.

Antes de aceptarlas se verificó que ninguna coincidiera con contenido inventado
por Claude (al primer intento, Monica pegó sin querer las 3 citas de muestra
tal cual, palabra por palabra — se detectó y se rechazó esa vez; esta segunda
entrega sí trae nombres, ciudades y detalles específicos consistentes con
productos reales del catálogo: sábila = Aloe Vera, casa nueva y baby shower =
sus recuerditos correspondientes).

## 22. SEO y analítica

Se encontró que el sitio no tenía: etiquetas Open Graph/Twitter Card (el link
no mostraba foto/descripción al compartirse por WhatsApp o Facebook — el canal
de ventas principal del negocio), datos estructurados para buscadores,
`robots.txt`/`sitemap.xml`, ni ningún tipo de analítica de visitas. Se agregó:

- **Open Graph / Twitter Card** en `<head>` (`og:title`, `og:description`,
  `og:image` usando `images/hero-naranja.jpg`, `og:url`, `twitter:card`, etc.)
  — para que el link se vea como catálogo real al compartirse.
- **`<link rel="canonical">`** (`theme-color` ya existía desde el punto 11).
- **Datos estructurados JSON-LD** (`schema.org/LocalBusiness`) con nombre,
  teléfono y redes sociales. **Sin dirección física**, a propósito: nunca se
  confirmó una (ver punto 7, sigue pendiente), y el punto 1 de este documento
  es explícito en no inventar datos sin confirmarlos con el usuario.
- **`robots.txt`** y **`sitemap.xml`** en la raíz del proyecto.
- **Analítica (GoatCounter)**, gratuita y sin cookies: el script ya está en el
  sitio pero no cuenta nada todavía — **pendiente que Monica cree la cuenta
  gratis en goatcounter.com con el código de sitio "jabones-licha"** (o
  cambiar el código en `index.html` por el que elija). Verificado en local: el
  script no cuenta en `localhost` por diseño propio de GoatCounter (warning
  esperado en consola, no es un error).

Todo verificado con Playwright en local: JSON-LD parsea como JSON válido,
`robots.txt`/`sitemap.xml` se sirven correctamente, sin errores de consola.

## 23. Sección de Instagram (feed en vivo, pendiente de activar)

Monica pidió agregar lo que se vio en un sitio de la competencia (quererte.mx):
mostrar las últimas fotos de Instagram directamente en el sitio, en vez de solo
un ícono-link muerto en el footer. Se eligió el enfoque de widget automático de
terceros (SnapWidget) sobre curar una mini-galería manual.

Se agregó una sección "Instagram" nueva (entre Testimonios y el pie de página)
con:
- El `<iframe>` de SnapWidget **comentado** dentro de `index.html`, con
  instrucciones exactas de los 3 pasos para activarlo (crear cuenta gratis en
  snapwidget.com, conectar @jaboneslicha, pegar el iframe real reemplazando el
  comentario).
- Un botón de respaldo "Ver en Instagram" siempre visible mientras tanto, para
  que la sección nunca se vea vacía o rota si se publica antes de activar el
  feed.
- Estilos `.instagram-embed`/`.instagram-fallback` en `styles.css`, claves
  `instagramEyebrow`/`instagramTitle`/`instagramCta` en ES/EN/DE en `app.js`.

**Bug real encontrado y corregido durante la verificación:** el comentario de
instrucciones incluía literalmente las secuencias de apertura/cierre de
comentario HTML como texto explicativo, lo cual cerraba el comentario antes de
tiempo y dejaba un trozo de texto suelto visible en la página (mismo bug que
en `KintroCarpintero`, corregido igual en ambos). Verificado de nuevo con
Playwright, forzando recarga sin caché del navegador (`?v=2` en la URL).

**Pendiente:** crear la cuenta en snapwidget.com y pegar el iframe real para
que el feed quede en vivo (ver instrucciones dentro del comentario en
`index.html`).

## 24. Pedido múltiple por WhatsApp (carrito) — 2026-10-27

Monica vio una demo de Gemini (catálogo con carrito) y pidió probar la misma
idea aquí: en vez de un botón "Pedir por WhatsApp" por producto (un mensaje
por jabón), ahora cada producto tiene un control de cantidad
("Agregar al pedido" → stepper −/cantidad/+). Una barra flotante abajo a la
izquierda ("Ver pedido", con contador) abre un panel lateral con todos los
productos elegidos, un campo de nombre y uno de dirección/notas, y un botón
"Enviar pedido por WhatsApp" que arma **un solo mensaje** con todos los
artículos, cantidades, nombre y notas.

- Reemplaza el botón `.order-btn` por producto (tanto en las tarjetas como en
  el lightbox) — ya no hay un link de WhatsApp directo por jabón, todo pasa
  por el carrito, para no tener dos flujos de pedido distintos conviviendo.
- El carrito se guarda en `localStorage` (clave `cart`), así que sobrevive a
  un refresco de página.
- Traducido en ES/EN/DE igual que el resto del sitio.
- Verificado con Playwright en local (desktop y móvil 390×844): agregar/quitar
  cantidades, abrir/cerrar el panel, enviar el pedido genera correctamente
  `https://wa.me/5353335221?text=Hola%2C+quiero+pedir%3A...` con los
  productos, nombre y notas, el carrito se vacía después de enviar, y no hay
  errores de consola.

**Actualización (mismo día): precios agregados.** Monica confirmó precio por
categoría: **$30 MXN** para Aromas (barra individual) y **$50 MXN** para
Recuerditos (diseños con forma + empaque, más trabajo). Se agregó
`CONFIG.categoryPrices` en `app.js` (`{ aromas: 30, recuerditos: 50 }`), con
soporte para poner un precio distinto a un producto puntual (ej. si el set de
Navidad, que son 3 piezas, debiera costar más) agregando un campo `price` a
esa entrada en `PRODUCTS` sin tocar las demás. Ahora cada tarjeta y el
lightbox muestran el precio, el panel del carrito muestra subtotal por
producto y el total general, y el mensaje final de WhatsApp incluye precio
por línea y total — ej.: "2x Menta — $60 MXN" + "Total: $110 MXN". Verificado
de nuevo con Playwright: la matemática del total cuadra al cambiar
cantidades, y el mensaje final generado es correcto.

## 25. Compartir ubicación de Google Maps en el carrito (2026-10-27)

A pedido de Monica, se agregó un botón opcional **"Compartir mi ubicación de
Google Maps"** en el panel del carrito, debajo de "Entrega o notas". Usa la
API de geolocalización del navegador (`navigator.geolocation`) para obtener
coordenadas exactas y arma un link `https://www.google.com/maps?q=lat,lng`,
que se agrega como línea extra en el mensaje final de WhatsApp — además del
campo de texto libre, no en su lugar, porque el navegador puede negar el
permiso o el usuario puede preferir escribir la dirección en vez de compartir
su ubicación exacta.

Requiere HTTPS (o `localhost`) para funcionar — GitHub Pages ya sirve el
sitio por HTTPS, así que funcionará en producción sin cambios. Verificado en
local simulando el permiso de geolocalización con Playwright (coordenadas de
prueba en Cancún): el botón muestra "Obteniendo tu ubicación…" y luego
"Ubicación agregada ✓", y el mensaje final de WhatsApp incluye la línea
"Ubicación (Google Maps): https://www.google.com/maps?q=21.1619,-86.8515"
correctamente. La ubicación se limpia después de cada envío (no se guarda en
`localStorage`, a diferencia del carrito, por ser un dato más sensible y
puntual).

## Pendientes

- [ ] Confirmar que el botón de WhatsApp (+53 5 3335221) es el número correcto y está activo
- [ ] Revisar si falta algún producto por agregar al catálogo (precios por categoría ya confirmados y cargados, punto 24)
- [ ] Agregar el link del sitio al perfil de Instagram/Facebook si aún no está
- [ ] Crear la cuenta gratis en goatcounter.com (código de sitio "jabones-licha") para activar la analítica
- [ ] Crear la cuenta gratis en snapwidget.com, conectar @jaboneslicha, y pegar el iframe real en `index.html` (punto 23) para activar el feed de Instagram
- [ ] `git push` de todos los cambios de esta sesión (2026-10-26 y 2026-10-27) cuando Monica confirme — siguen solo en local

## Cómo editar el catálogo más adelante

Todo se controla desde `app.js`:
- **Nombre del negocio / número de WhatsApp:** objeto `CONFIG` y diccionario `I18N` (clave `businessName`) al inicio del archivo.
- **Agregar o quitar un jabón:** editar el arreglo `PRODUCTS` (id, categoría, ruta de imagen) y su entrada correspondiente en `PRODUCT_I18N` (nombre/descripción en los 3 idiomas).
- **Cambiar cuáles son "Más pedido":** editar el `Set` `FAVORITE_IDS`.
- **Traducciones de la interfaz:** diccionario `I18N` (es/en/de).

Después de editar, hay que subir los cambios a GitHub (`git add`, `git commit`, `git push`) para que se publiquen — o pedírmelo directamente a mí.

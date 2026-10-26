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

## 12. Pendientes

- [ ] Nombre real del negocio (hoy dice "Jabones Artesanales" como placeholder)
- [ ] Confirmar que el botón de WhatsApp (+53 5 3335221) es el número correcto y está activo
- [ ] Revisar si faltan productos o precios que agregar

## Cómo editar el catálogo más adelante

Todo se controla desde `app.js`:
- **Nombre del negocio / número de WhatsApp:** objeto `CONFIG` al inicio del archivo.
- **Agregar o quitar un jabón:** editar el arreglo `PRODUCTS` (categoría, nombre, descripción, ruta de la imagen).
- **Cambiar las fotos del carrusel:** editar el arreglo `CAROUSEL_NAMES`.

Después de editar, hay que subir los cambios a GitHub (`git add`, `git commit`, `git push`) para que se publiquen — o pedírmelo directamente a mí.

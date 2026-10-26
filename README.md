# TRIGRA — Sitio web

🇪🇸 Español · [🇺🇸 English](README.en.md)

Sitio web de **TRIGRA**, empresa de soluciones digitales: desarrollo web, sistemas a medida, automatización de procesos e inteligencia artificial.

🌐 **En vivo:** [trigra-app.web.app](https://trigra-app.web.app)

Construido con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), 100 % estático, desplegado en **Firebase Hosting** con **GitHub Actions**.

---

## ✨ Qué incluye

Una sola página (`/`) con navegación por secciones:

| Sección | Contenido |
| --- | --- |
| **Hero** | Titular, llamados a la acción y cifras con contador animado |
| **Proyectos** | Lista con barra animada y vista previa; modal *Ver caso completo* con galería (web / panel) y carrusel a pantalla completa |
| **Soluciones** | 8 servicios en cards, cada uno con su modal de detalle |
| **Tecnologías** | Cinta de logos en bucle infinito |
| **Proceso** | 4 pasos en cards que se arrastran con inercia |
| **Nosotros** | Misión, visión y card del fundador |
| **Contacto** | Formulario que valida y envía el mensaje por WhatsApp (se autocompleta según el botón de origen) |
| **Footer** | Navegación y modales de Política de Privacidad y Términos |

Además: navbar con indicador deslizante que se oculta al llegar al footer, botón flotante de redes en abanico, animaciones de entrada al hacer scroll y la landing original *en construcción* conservada en [`/proximamente`](https://trigra-app.web.app/proximamente).

## 🚀 Desarrollo local

Requiere **Node.js 20+**.

```bash
npm install       # instalar dependencias
npm run dev       # servidor local en http://localhost:4321
npm run build     # build de producción → dist/
npm run preview   # previsualizar el build (úsalo para medir con Lighthouse)
```

> Mide el rendimiento sobre `npm run build && npm run preview`, no sobre `npm run dev`: el modo desarrollo no empaqueta ni comprime y da puntuaciones engañosas.

## 🗂️ Estructura

```
src/
├── components/     # Una sección o pieza de UI por archivo (Hero, Proyectos, SolucionModal…)
├── data/           # Contenido editable: proyectos, soluciones, proceso, tecnologías, legales, redes
├── layouts/        # BaseLayout: <head>, fuentes, metas SEO
├── pages/          # index (sitio), proximamente, 404
├── scripts/        # Lógica compartida: modales (modal.ts) y animación al hacer scroll (reveal.ts)
├── styles/         # global.css: Tailwind, animaciones y estilos de modales
└── utils/          # Helpers de compilación: medidas de imágenes, SVG en línea
public/
├── icons/          # Íconos SVG (soluciones, pasos, redes, decoraciones)
└── images/         # Fotos y capturas, organizadas por sección
```

## ✏️ Cómo editar el contenido

La mayoría de textos **no están en los componentes** sino en `src/data/`, así que se cambian sin tocar el diseño:

| Quiero cambiar… | Archivo |
| --- | --- |
| Proyectos (textos, stack, URL, galería) | `src/data/proyectos.ts` |
| Soluciones y su modal | `src/data/soluciones.ts` |
| Pasos del proceso | `src/data/proceso.ts` |
| Logos de la cinta de tecnologías | `src/data/tecnologias.ts` |
| Política de Privacidad / Términos | `src/data/legal.ts` |
| Redes sociales, número y mensaje de WhatsApp | `src/data/social.ts` |

### Imágenes

Las imágenes se detectan **al compilar**: si el archivo existe se muestra; si no, aparece un marcador. Convenciones:

| Uso | Ruta |
| --- | --- |
| Miniatura de proyecto / captura del modal | `public/images/proyectos/<slug>.webp` · `<slug>-full.webp` |
| Galería del modal de proyecto | `public/images/proyectos/<slug>/web-1..4.webp` · `admin-1..4.webp` (+ `-lg` para el carrusel) |
| Solución | `public/images/soluciones/<slug>.webp` |
| Paso del proceso | `public/images/proceso/<slug>.webp` |
| Logo de tecnología | `public/images/tecnologias/<slug>.svg` (o `.webp`/`.png`) |
| Foto del equipo | `public/images/equipo/<slug>.webp` |
| Ícono de solución / paso | `public/icons/icon-<nombre>.svg` · `icon-paso-<slug>.svg` |

> **Optimiza antes de subir.** Las capturas suelen venir como PNG de varios MB. Conviértelas a WebP del tamaño en que se muestran (con [`sharp`](https://sharp.pixelplumbing.com), que ya viene con Astro). Los íconos SVG se insertan en el HTML y toman el color del texto, así que su color original no importa.

## 🔄 Despliegue (CI/CD)

- **Push a `main`** → `deploy.yml` construye y publica a **producción** (canal `live`).
- **Pull Request** → `preview.yml` publica una **URL de preview temporal** para revisar antes de mergear.

El secret `FIREBASE_SERVICE_ACCOUNT_TRIGRA_APP` ya está configurado en el repositorio y el `projectId: trigra-app` está fijo en los workflows. Para un deploy manual:

```bash
npm run build
firebase deploy --only hosting
```

> ⚠️ Todo push a `main` sale a producción. Para cambios grandes, trabaja en una rama y abre un Pull Request.

## 🔒 Seguridad y rendimiento

`firebase.json` aplica cabeceras de seguridad a todas las rutas: HSTS, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, COOP/CORP y una **Content-Security-Policy estricta** (solo recursos propios, `script-src 'self'`). Firebase no admite comentarios en ese archivo, por eso la explicación vive aquí.

Decisiones que conviene respetar al agregar código:

- **Sin scripts en línea.** El CSP los bloquea; por eso `astro.config.mjs` usa `assetsInlineLimit: 0` y no se usan atributos como `onclick` u `onload`.
- **Fuentes propias.** Space Grotesk y Plus Jakarta Sans se sirven desde el sitio con `@fontsource` (sin Google Fonts).
- **Sin `backdrop-filter: blur`** sobre contenido que se desplaza ni en elementos fijos: causa lag al hacer scroll.
- **Imágenes diferidas.** Las de los modales se precargan al acercarse al botón; el fondo del footer se pide al llegar a él.
- Si se agrega un servicio de terceros (analytics, formularios), hay que ampliar la CSP con su dominio.

## 🎨 Sistema de diseño

- **Space Grotesk** → titulares y botones (`font-display`)
- **Plus Jakarta Sans** → texto (`font-body`)
- Colores de marca en `tailwind.config.mjs`; tokens tipográficos exportados de Figma en `src/design/textStyles.json`.

## 📄 Licencia

**Software propietario.** © 2026 TRIGRA. Todos los derechos reservados. No se permite copiar, modificar, distribuir ni usar este código sin autorización escrita. Ver [LICENSE](LICENSE).

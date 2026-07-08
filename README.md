# Trigra — Landing

Landing page (página "en construcción" / _coming soon_) del emprendimiento **Trigra**, construida con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) y desplegada en **Firebase Hosting** mediante **GitHub Actions**.

## 🗂️ Estructura del proyecto

```
proyecto-trigra/
├── .github/
│   └── workflows/
│       ├── deploy.yml        # CI/CD: deploy a producción al hacer push a main
│       └── preview.yml       # Preview temporal por cada Pull Request
├── public/                   # Archivos estáticos (favicon, robots, imágenes públicas)
│   └── favicon.svg
├── src/
│   ├── assets/               # Imágenes/recursos procesados por Astro
│   ├── components/           # Componentes reutilizables
│   │   └── ComingSoon.astro
│   ├── design/               # Recursos/tokens de diseño (export de Figma)
│   │   └── textStyles.json
│   ├── layouts/              # Plantillas de página
│   │   └── BaseLayout.astro
│   ├── pages/                # Rutas (cada archivo = una ruta)
│   │   └── index.astro       # Única vista de la landing
│   └── styles/
│       └── global.css        # Tailwind + fuentes de marca
├── astro.config.mjs
├── tailwind.config.mjs       # Tokens de marca (colores + tipografías)
├── firebase.json             # Config de Firebase Hosting
├── .firebaserc               # ID del proyecto Firebase
└── package.json
```

## 🎨 Sistema de diseño

Los tokens de tipografía provienen de `src/design/textStyles.json` (export de Figma):

- **Space Grotesk** → titulares y botones (`font-display`)
- **Plus Jakarta Sans** → cuerpo de texto (`font-body`)
- **Roxa Sans** → labels (fuente de pago; usa `font-body` como fallback)

## 🚀 Desarrollo local

Requiere **Node.js 20+**.

```bash
npm install       # instalar dependencias
npm run dev       # servidor local en http://localhost:4321
npm run build     # build de producción → dist/
npm run preview   # previsualizar el build
```

## 🔥 Configurar Firebase (primera vez)

Aún no tienes el proyecto Firebase creado. Sigue estos pasos:

### 1. Crear el proyecto en Firebase

1. Entra a la [consola de Firebase](https://console.firebase.google.com).
2. **Agregar proyecto** → nómbralo (ej. `trigra`) → crea el proyecto.
3. Copia el **Project ID** (ej. `trigra-1a2b3`).
4. Pega ese ID en `.firebaserc` reemplazando `TU_FIREBASE_PROJECT_ID`.

### 2. Instalar Firebase CLI y hacer login

```bash
npm install -g firebase-tools
firebase login
```

### 3. (Opcional) Primer deploy manual para verificar

```bash
npm run build
firebase deploy --only hosting
```

Tu sitio quedará en `https://TU_PROJECT_ID.web.app`.

### 4. Configurar el deploy automático (GitHub Actions)

El repositorio ya trae los workflows listos. La cuenta de servicio se genera con:

```bash
firebase init hosting:github
```

Este comando crea la cuenta de servicio y **sube automáticamente** el secret
`FIREBASE_SERVICE_ACCOUNT_TRIGRA_APP` al repositorio. Cuando pregunte por sobrescribir
workflows o configurar auto-deploy en PR, responde **No** (ya los tenemos aquí).

Los workflows usan ese secret y el `projectId: trigra-app` está fijo en los `.yml`,
así que **no hace falta ningún secret adicional**.

> Nota: el nombre del secret incluye el sufijo del proyecto
> (`FIREBASE_SERVICE_ACCOUNT_TRIGRA_APP`). Si regeneras el proyecto con otro ID,
> actualiza ese nombre en `deploy.yml` y `preview.yml`.

## 🔒 Seguridad (hardening)

Firebase Hosting sirve el sitio desde la **CDN global de Google con protección DDoS**
integrada, por lo que "tumbar" una landing estática es muy difícil. Encima de eso,
`firebase.json` aplica cabeceras de seguridad HTTP a **todas** las rutas (buenas
prácticas OWASP / auditables en una ISO 27001):

| Cabecera                        | Qué protege                                             |
| ------------------------------- | ------------------------------------------------------- |
| `Strict-Transport-Security`     | Fuerza HTTPS 2 años (anti downgrade / MITM)             |
| `X-Content-Type-Options`        | Anti MIME-sniffing                                      |
| `X-Frame-Options: DENY`         | Anti clickjacking (no embebible en iframes)             |
| `Referrer-Policy`               | No filtra la URL completa a terceros                    |
| `Permissions-Policy`            | Desactiva cámara, micrófono, geolocalización, FLoC…     |
| `Content-Security-Policy`       | Solo permite recursos propios + Google Fonts            |
| `Cross-Origin-Opener-Policy`    | Aísla el origen (anti Spectre / side-channel)           |
| `Cross-Origin-Resource-Policy`  | Exige CORP a recursos cross-origin                      |

> Firebase **no admite comentarios** dentro de `firebase.json`; por eso la explicación
> de cada cabecera vive aquí. Si más adelante añades scripts de terceros (analytics,
> etc.), habrá que ampliar la `Content-Security-Policy` con sus dominios.

Además, `src/pages/404.astro` genera un **404 propio** (con el diseño de marca) que
Firebase sirve automáticamente para cualquier ruta inexistente.

## 🔄 Flujo CI/CD

- **Push a `main`** → `deploy.yml` construye y publica a **producción** (canal `live`).
- **Pull Request** → `preview.yml` genera un **canal de preview temporal** con URL única para revisar los cambios antes de mergear.

## 📄 Licencia

Privado — © Trigra.

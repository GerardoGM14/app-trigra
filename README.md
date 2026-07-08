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

El repositorio ya trae los workflows listos. Solo necesitas los **secrets** en GitHub.

**a) Generar la cuenta de servicio** (la forma más simple):

```bash
firebase init hosting:github
```

Este comando conecta tu repo de GitHub, crea la cuenta de servicio y **añade automáticamente** el secret `FIREBASE_SERVICE_ACCOUNT` al repositorio. Cuando pregunte por sobrescribir los workflows, responde **No** (ya los tienes creados aquí).

**b) Añadir manualmente el ID del proyecto como secret:**

En GitHub → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret                     | Valor                                                  |
| -------------------------- | ------------------------------------------------------ |
| `FIREBASE_SERVICE_ACCOUNT` | (lo crea `firebase init hosting:github` automáticamente) |
| `FIREBASE_PROJECT_ID`      | Tu Project ID (ej. `trigra-1a2b3`)                     |

> Si prefieres crear el secret de la cuenta de servicio a mano: Google Cloud Console → IAM → Cuentas de servicio → genera una clave JSON con el rol **Firebase Hosting Admin**, y pega el JSON completo en `FIREBASE_SERVICE_ACCOUNT`.

## 🔄 Flujo CI/CD

- **Push a `main`** → `deploy.yml` construye y publica a **producción** (canal `live`).
- **Pull Request** → `preview.yml` genera un **canal de preview temporal** con URL única para revisar los cambios antes de mergear.

## 📄 Licencia

Privado — © Trigra.

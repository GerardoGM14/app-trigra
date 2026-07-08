# Imágenes públicas

Archivos estáticos servidos tal cual en la raíz del sitio.
Una imagen aquí se referencia con ruta absoluta desde `/` (sin `public`).

## Imagen de fondo de la landing

Coloca la imagen de fondo con este nombre exacto:

```
public/images/background-trigra.webp
```

El estilo ya está configurado en `src/styles/global.css`:

- La imagen se muestra `cover`, centrada y fija al hacer scroll.
- Encima lleva un **radial gradient de marca** que la oscurece hacia los bordes
  (deja ver la imagen por el centro, oscuro en las esquinas para que el texto se lea).

Si cambias el nombre/formato del archivo, actualiza también la
línea `url('/images/background-trigra.webp')` en `global.css`.

## Logo de la landing

Coloca el logo con este nombre exacto:

```
public/images/logo-trigra.png
```

Se muestra centrado en `src/components/ComingSoon.astro` (reemplaza al texto
"trigra"). Si cambias el nombre, actualiza el `src` del `<img>` en ese componente.

## Icono del pill "Página en construcción"

```
public/images/icon-obras.webp
```

Se muestra dentro del pill de estado en `src/components/ComingSoon.astro`.

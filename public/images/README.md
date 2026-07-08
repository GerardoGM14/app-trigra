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

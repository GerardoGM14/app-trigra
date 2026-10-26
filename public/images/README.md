# Imágenes públicas

Archivos servidos tal cual desde la raíz del sitio: `public/images/x.webp` se referencia como `/images/x.webp`.

Las rutas y nombres que espera cada sección están en el [README principal](../../README.md#imágenes).
En resumen: cada sección tiene su carpeta (`proyectos/`, `soluciones/`, `proceso/`, `tecnologias/`, `equipo/`)
y los componentes detectan al compilar si la imagen existe.

## Imágenes generales

| Archivo | Uso |
| --- | --- |
| `background-trigra-principal.webp` | Fondo del hero (se precarga) |
| `background-trigra-footer.webp` | Fondo del footer (versión liviana; carga diferida) |
| `background-trigra.webp` | Fondo de `/proximamente` y de la página 404 |
| `background-negociacion.webp` | Foto del banner "¿Tienes un proyecto en mente?" |
| `logo-trigra.webp` | Logo (navbar, footer, /proximamente, 404) |
| `trigra-marca.webp` | Triángulo de la marca, de fondo en Contacto |
| `icono-logo.png` | Favicon |

> Sube siempre las imágenes optimizadas (WebP, al tamaño en que se muestran). Una captura PNG sin optimizar puede pesar varios MB.

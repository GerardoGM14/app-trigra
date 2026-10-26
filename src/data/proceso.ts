// Pasos de "Un proceso claro para construir mejores soluciones".
// Imágenes en public/images/proceso/<slug>.webp (si no existe, se muestra un marcador).
export type PasoIcon = 'necesidades' | 'estrategia' | 'desarrollo' | 'implementacion';

export interface Paso {
  slug: string;
  title: string;
  description: string;
  icon: PasoIcon;
}

export const pasos: Paso[] = [
  {
    slug: 'comprendemos',
    title: 'Comprendemos tus necesidades',
    description:
      'Conocemos tu situación, objetivos y desafíos para entender qué necesitas realmente y encontrar el mejor camino para tu proyecto.',
    icon: 'necesidades',
  },
  {
    slug: 'estrategia',
    title: 'Definimos la estrategia',
    description:
      'Analizamos las oportunidades y planteamos una estrategia clara para construir una solución alineada a tus objetivos.',
    icon: 'estrategia',
  },
  {
    slug: 'desarrollo',
    title: 'Desarrollamos la solución',
    // BORRADOR: en la captura el final del texto estaba cortado; confirmar
    description:
      'Transformamos la idea en una solución funcional, creando herramientas digitales pensadas para optimizar tus procesos.',
    icon: 'desarrollo',
  },
  {
    slug: 'implementacion',
    // BORRADOR: el paso 04 no aparecía en la captura; confirmar título y texto
    title: 'Implementamos y acompañamos',
    description:
      'Ponemos en marcha la solución, capacitamos a tu equipo y te acompañamos con soporte y mejoras continuas.',
    icon: 'implementacion',
  },
];

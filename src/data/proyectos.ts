// Proyectos destacados de la sección "Proyectos" y de su modal "Ver caso completo".
// Las imágenes van en public/images/proyectos/ (si no existe, se muestra un marcador).
export interface Proyecto {
  name: string;
  /** Parte del nombre que va con degradado en el modal (por defecto, el nombre completo) */
  highlight?: string;
  year: number;
  type: string;
  stack: string[];
  /** Etiquetas del modal, junto al año (ej. "Página web", "Panel administrativo") */
  tags: string[];
  /** Descripción del modal: una línea por elemento. Admite <strong> para resaltar. */
  description: string[];
  /** Enlace del botón "Visitar página" ('#' mientras no se defina) */
  url: string;
  /** Vista previa de la tarjeta (cuadrada) */
  image: string;
  /** Captura completa de la web para el modal */
  caseImage: string;
  /** Carpeta de la galería "Vista del proyecto": web-1..4.webp y admin-1..4.webp */
  slug: string;
  /** Muestra el switch "Página web / Panel Administrativo" en la galería */
  hasAdmin: boolean;
  /** "Detrás del proyecto": un párrafo por elemento de text */
  challenge: DetalleBloque;
  solution: DetalleBloque;
  result: DetalleBloque;
}

export interface DetalleBloque {
  title: string;
  text: string[];
}

export const proyectos: Proyecto[] = [
  {
    name: 'TPP Peru - Hotel y Tours',
    highlight: 'TPP Peru',
    year: 2026,
    type: 'Web',
    stack: ['Astro', 'Vite', 'React', 'NestJS', 'Prisma', 'Go', 'Docker', 'GitHub Actions'],
    tags: ['Página web', 'Panel administrativo'],
    // BORRADOR: confirmar texto
    description: [
      'Página web y panel administrativo para <strong>TPP Perú</strong>, agencia de tours y paquetes turísticos en Tarapoto.',
      'El proyecto consistió en desarrollar su web para mostrar tours, paquetes y ofertas, y un panel para gestionarlos.',
    ],
    url: 'http://161.132.37.31/app',
    image: '/images/proyectos/tpp-peru.webp',
    caseImage: '/images/proyectos/tpp-peru-full.webp',
    /** Carpeta de la galería: public/images/proyectos/tpp-peru/ */
    slug: 'tpp-peru',
    hasAdmin: true,
    // BORRADOR: confirmar textos de "Detrás del proyecto"
    challenge: {
      title: 'Una oferta turística que necesitaba ordenarse',
      text: [
        'TPP Perú ofrece tours, paquetes y experiencias en Tarapoto, y necesitaba presentarlos de forma atractiva y fácil de comparar, además de contar con una forma ágil de mantener actualizadas sus ofertas.',
      ],
    },
    solution: {
      title: 'Una web para explorar y reservar',
      text: [
        'Desarrollamos una página web que organiza tours, paquetes y ofertas en un recorrido claro, con acceso directo a WhatsApp para consultas. A esto se sumó un panel administrativo para gestionar el catálogo y sus promociones.',
      ],
    },
    result: {
      title: 'Una experiencia turística más simple',
      text: [
        'TPP Perú cuenta ahora con una web que reúne su oferta turística en un solo lugar, facilitando que el usuario descubra las opciones y se ponga en contacto para reservar.',
      ],
    },
  },
  {
    name: 'Grupo Prevca',
    year: 2026,
    type: 'Web',
    stack: ['Astro', 'React', 'Vite', 'Node.js', 'Firebase'],
    tags: ['Página web', 'Panel administrativo'],
    description: [
      'Página web y panel administrativo para <strong>Grupo Prevca</strong>, grupo empresarial con divisiones de madera, alojamiento, cafetería y transporte.',
      'El proyecto consistió en desarrollar su presencia web y un panel para gestionar productos, cotizaciones y otros elementos de la operación comercial.',
    ],
    url: 'https://grupoprevca.com',
    image: '/images/proyectos/grupo-prevca.webp',
    caseImage: '/images/proyectos/grupo-prevca-full.webp',
    /** Carpeta de la galería: public/images/proyectos/grupo-prevca/ */
    slug: 'grupo-prevca',
    hasAdmin: true,
    challenge: {
      title: 'Una presencia digital para un grupo con distintas divisiones',
      text: [
        'Grupo Prevca reúne diferentes líneas de negocio bajo una misma marca, desde la producción y distribución de madera hasta servicios de alojamiento y transporte.',
        'El desafío era organizar esta diversidad en una experiencia clara para el usuario, mientras se necesitaba una herramienta interna que permitiera gestionar el catálogo de productos y las cotizaciones recibidas desde la web.',
      ],
    },
    solution: {
      title: 'Una experiencia conectada con su gestión interna',
      text: [
        'Desarrollamos una página web que presenta las diferentes divisiones de Grupo Prevca y facilita el contacto para consultas y cotizaciones. A esto se incorporó un panel administrativo desde el que pueden gestionar productos, categorías, cotizaciones, tarifas de envío y métodos de pago, centralizando esta información en un mismo espacio.',
      ],
    },
    result: {
      title: 'Una web corporativa conectada con su operación',
      text: [
        'Grupo Prevca cuenta con una presencia digital que reúne sus distintas divisiones y facilita la generación de cotizaciones, junto con un panel que permite administrar su catálogo y dar seguimiento a las solicitudes recibidas desde un mismo lugar.',
      ],
    },
  },
  {
    name: 'Eco Amazónico Perú',
    year: 2026,
    type: 'Web',
    stack: ['Astro', 'React', 'Firebase', 'GitHub Actions'],
    tags: ['Página web', 'Panel administrativo'],
    // BORRADOR: confirmar texto
    description: [
      'Página web y panel administrativo para <strong>Eco Amazónico Perú</strong>, empresa de gestión de proyectos y consultorías para el desarrollo territorial sostenible.',
      'El proyecto consistió en desarrollar su web para presentar sus servicios, experiencia y certificaciones, y un panel para administrar su contenido.',
    ],
    url: 'https://ecoamazonicoperu.com',
    image: '/images/proyectos/eco-amazonico-peru.webp',
    caseImage: '/images/proyectos/eco-amazonico-peru-full.webp',
    /** Carpeta de la galería: public/images/proyectos/eco-amazonico-peru/ */
    slug: 'eco-amazonico-peru',
    hasAdmin: true,
    // BORRADOR: confirmar textos de "Detrás del proyecto"
    challenge: {
      title: 'Una trayectoria que necesitaba mostrarse',
      text: [
        'Eco Amazónico Perú gestiona proyectos y consultorías para el desarrollo territorial sostenible, y necesitaba una presencia digital que comunicara con claridad sus servicios, su experiencia y sus certificaciones.',
      ],
    },
    solution: {
      title: 'Una web que presenta su propuesta de valor',
      text: [
        'Desarrollamos una página web que organiza sus servicios, su experiencia en distintas regiones y sus certificaciones en un recorrido claro, junto con un panel administrativo para mantener su contenido actualizado.',
      ],
    },
    result: {
      title: 'Una presencia digital sólida y actualizable',
      text: [
        'Eco Amazónico Perú cuenta ahora con una web que respalda su trayectoria ante clientes y aliados, y que su equipo puede actualizar de forma autónoma.',
      ],
    },
  },
  {
    name: 'Wasi Bonsai',
    year: 2026,
    type: 'Web',
    stack: ['Astro', 'React', 'Firebase', 'GitHub Actions'],
    tags: ['Página web'],
    description: [
      'Página web para <strong>WasiBonsai</strong>, marca dedicada al cuidado de bonsáis y plantas en maceta.',
      'El proyecto consistió en reconstruir su web para presentar la marca, sus productos y facilitar la compra.',
    ],
    url: 'https://wasibonsai.com',
    image: '/images/proyectos/wasi-bonsai.webp',
    caseImage: '/images/proyectos/wasi-bonsai-full.webp',
    /** Carpeta de la galería: public/images/proyectos/wasi-bonsai/ */
    slug: 'wasi-bonsai',
    hasAdmin: false,
    challenge: {
      title: 'Una propuesta que necesitaba comunicarse mejor',
      text: [
        'WasiBonsai necesitaba una experiencia digital que permitiera presentar su marca y sus productos de forma clara. La página debía explicar qué es BonsaiPro, sus beneficios y formas de uso, además de brindar la información necesaria para generar confianza y acompañar al usuario durante su decisión de compra.',
      ],
    },
    solution: {
      title: 'Una experiencia pensada para informar y guiar',
      text: [
        'Reconstruimos la página organizando el contenido en un recorrido claro: primero presentamos la marca y el producto, luego sus beneficios, usos y características, y finalmente incorporamos testimonios, preguntas frecuentes e información de compra para facilitar el paso hacia el pedido.',
      ],
    },
    result: {
      title: 'Una experiencia digital más clara y completa',
      text: [
        'WasiBonsai cuenta ahora con una web que reúne la presentación de la marca, la información de sus productos y el proceso de compra en un mismo recorrido, permitiendo al usuario conocer la propuesta, resolver sus dudas y avanzar hacia la compra de forma más sencilla.',
      ],
    },
  },
];

// Soluciones de la sección "Soluciones".
// Las imágenes van en public/images/soluciones/<slug>.webp (si no existe, se muestra un marcador).
export type SolucionIcon =
  | 'web'
  | 'sistemas'
  | 'automatizacion'
  | 'ia'
  | 'integracion'
  | 'dashboards'
  | 'soporte'
  | 'consultoria';

export interface Solucion {
  slug: string;
  /** Modal: frase que sigue al título (ej. "Desarrollo Web: Tu presencia digital comienza aquí.") */
  headline: string;
  /** Modal: lista de servicios incluidos */
  features: string[];
  title: string;
  description: string;
  tags: string[];
  icon: SolucionIcon;
  /** Destino de la flecha ↗ (por defecto, la sección de contacto) */
  href: string;
}

export const soluciones: Solucion[] = [
  {
    slug: 'desarrollo-web',
    headline: 'Tu presencia digital comienza aquí.',
    features: [
      'Landing Pages',
      'Sitios Web Corporativos',
      'Tiendas Virtuales | E-commerce',
      'Portales Web',
      'Paneles Administrativos',
      'Mantenimiento Web',
    ],
    title: 'Desarrollo Web',
    description:
      'Desarrollamos sitios y plataformas modernas, funcionales y adaptadas a las necesidades de tu organización.',
    tags: ['Landing', 'E-commerce', 'Paneles'],
    icon: 'web',
    href: '#contacto',
  },
  {
    slug: 'sistemas-a-medida',
    headline: 'Un sistema hecho para ti.',
    features: [
      'Sistemas Administrativos',
      'Sistemas de Ventas',
      'Sistemas de Inventario',
      'Sistemas de Reservas',
      'Gestión Documental',
      'Plataformas SaaS',
    ],
    title: 'Sistemas a Medida',
    description:
      'Creamos sistemas personalizados para optimizar la gestión y digitalizar los procesos de tu organización.',
    tags: ['Administración', 'Ventas', 'SaaS'],
    icon: 'sistemas',
    href: '#contacto',
  },
  {
    slug: 'automatizacion-de-procesos',
    headline: 'Menos tareas, más resultados.',
    features: [
      'Tareas Repetitivas',
      'Flujos de Trabajo',
      'Formularios',
      'Notificaciones',
      'Reportes Automáticos',
      'Procesamiento de Documentos',
    ],
    title: 'Automatización de Procesos',
    description:
      'Automatizamos tareas y procesos para reducir tiempos, minimizar errores y aumentar la productividad.',
    tags: ['Workflows', 'Formularios', 'Reportes'],
    icon: 'automatizacion',
    href: '#contacto',
  },
  {
    slug: 'inteligencia-artificial',
    headline: 'La inteligencia que impulsa tu negocio.',
    features: [
      'Chatbots',
      'Asistentes Virtuales',
      'Extracción de Datos',
      'Reconocimiento OCR',
      'Clasificación de Documentos',
      'Atención Automatizada',
    ],
    title: 'Inteligencia Artificial',
    description:
      'Integramos soluciones con inteligencia artificial para automatizar procesos y optimizar la operación.',
    tags: ['Chatbots', 'Asistentes IA', 'Extracción'],
    icon: 'ia',
    href: '#contacto',
  },
  {
    slug: 'integracion-de-sistemas',
    headline: 'Todo conectado en un solo lugar.',
    features: [
      'APIs',
      'Bases de Datos',
      'Webhooks',
      'WhatsApp',
      'Pasarelas de Pago',
      'Sistemas Empresariales',
    ],
    title: 'Integración de Sistemas',
    description:
      'Conectamos plataformas y servicios para centralizar la información y optimizar la operación.',
    tags: ['APIs', 'Bases de Datos', 'Webhooks'],
    icon: 'integracion',
    href: '#contacto',
  },
  {
    slug: 'dashboards-y-reportes',
    headline: 'Decisiones basadas en datos.',
    features: [
      'Paneles de Control',
      'Indicadores de Gestión',
      'Reportes de Ventas',
      'Reportes Operativos',
      'Exportación a Excel',
      'Exportación a PDF',
    ],
    title: 'Dashboards y Reportes',
    description:
      'Diseñamos paneles e informes que convierten los datos en información útil para la toma de decisiones.',
    tags: ['Dashboards', 'KPIs', 'Ventas'],
    icon: 'dashboards',
    href: '#contacto',
  },
  {
    slug: 'soporte-tecnologico',
    headline: 'Tu tecnología siempre al día.',
    features: [
      'Mantenimiento de Sistemas',
      'Corrección de Errores',
      'Actualización de Contenido',
      'Mejoras de Funcionalidades',
      'Copias de Seguridad',
      'Soporte Técnico',
    ],
    title: 'Soporte Tecnológico',
    description:
      'Brindamos mantenimiento, soporte y mejoras para mantener tus soluciones siempre actualizadas.',
    tags: ['Mantenimiento', 'Respaldos', 'Mejoras'],
    icon: 'soporte',
    href: '#contacto',
  },
  {
    slug: 'consultoria-tecnologica',
    headline: 'La estrategia detrás de cada solución.',
    features: [
      'Diagnóstico de Procesos',
      'Levantamiento de Requerimientos',
      'Diseño de Soluciones',
      'Arquitectura de Sistemas',
      'Digitalización Empresarial',
      'Optimización de Procesos',
    ],
    title: 'Consultoría Tecnológica',
    description:
      'Analizamos tus necesidades y definimos la mejor estrategia tecnológica para tu organización.',
    tags: ['Diagnóstico', 'Soluciones'],
    icon: 'consultoria',
    href: '#contacto',
  },
];

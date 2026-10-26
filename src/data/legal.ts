// Textos de los modales legales del footer.
// BORRADOR: textos base redactados para el sitio; deben ser revisados por un
// profesional legal antes de considerarse definitivos.
export interface LegalSeccion {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalDoc {
  id: string;
  /** Título: parte en azul + resto */
  highlight: string;
  title: string;
  intro: string;
  updated: string;
  icon: 'privacidad' | 'terminos';
  sections: LegalSeccion[];
}

const CONTACT_EMAIL = 'info@trigra.com';

export const legales: LegalDoc[] = [
  {
    id: 'modal-privacidad',
    highlight: 'Política de Privacidad:',
    title: 'Tus datos, protegidos.',
    intro:
      'En TRIGRA respetamos tu privacidad. Esta política explica qué información recopilamos a través de este sitio, para qué la usamos y cuáles son tus derechos.',
    updated: '26 de octubre de 2026',
    icon: 'privacidad',
    sections: [
      {
        heading: 'Información que recopilamos',
        items: [
          'Nombre completo, correo electrónico y teléfono que ingresas en el formulario de contacto.',
          'Nombre de tu empresa, si decides indicarlo.',
          'El mensaje con la descripción de tu proyecto o necesidad.',
        ],
      },
      {
        heading: 'Para qué usamos tu información',
        items: [
          'Responder tu consulta y ponernos en contacto contigo.',
          'Entender tus necesidades y preparar una propuesta.',
          'Dar seguimiento a los servicios que contrates con nosotros.',
        ],
      },
      {
        heading: 'Cómo se envían tus datos',
        paragraphs: [
          'Al enviar el formulario, tus datos se comparten con nosotros a través de WhatsApp, por lo que también aplican las políticas de privacidad de ese servicio. No vendemos ni compartimos tu información con terceros con fines comerciales.',
        ],
      },
      {
        heading: 'Tus derechos',
        paragraphs: [
          `De acuerdo con la Ley N.° 29733, Ley de Protección de Datos Personales del Perú, puedes solicitar el acceso, rectificación, cancelación u oposición al uso de tus datos escribiéndonos a ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  },
  {
    id: 'modal-terminos',
    highlight: 'Términos y Condiciones:',
    title: 'Las reglas claras.',
    intro:
      'Estos términos regulan el uso de este sitio web. Al navegar en él, aceptas las condiciones que se describen a continuación.',
    updated: '26 de octubre de 2026',
    icon: 'terminos',
    sections: [
      {
        heading: 'Uso del sitio',
        items: [
          'El contenido de este sitio es informativo y describe los servicios de TRIGRA.',
          'Te comprometes a usarlo de forma lícita y a no afectar su funcionamiento.',
          'La información que envíes por el formulario debe ser verídica.',
        ],
      },
      {
        heading: 'Propiedad intelectual',
        paragraphs: [
          'La marca TRIGRA, su logotipo, textos, diseños y demás contenidos de este sitio pertenecen a TRIGRA. Los proyectos mostrados pertenecen a sus respectivos clientes y se presentan con fines de portafolio.',
        ],
      },
      {
        heading: 'Servicios',
        paragraphs: [
          'Las condiciones, alcances, plazos y costos de cada servicio se acuerdan de forma particular con cada cliente mediante una propuesta o contrato.',
        ],
      },
      {
        heading: 'Enlaces externos',
        paragraphs: [
          'Este sitio puede contener enlaces a páginas de terceros, como los proyectos de nuestros clientes o redes sociales. TRIGRA no es responsable de su contenido ni de sus políticas.',
        ],
      },
      {
        heading: 'Cambios en estos términos',
        paragraphs: [
          `Podemos actualizar estos términos en cualquier momento. Si tienes dudas, escríbenos a ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  },
];

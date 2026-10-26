// Redes sociales de Trigra: única fuente de datos para todos los componentes.
export type Network = 'whatsapp' | 'facebook' | 'instagram' | 'linkedin';

// WhatsApp: número de contacto + mensaje predefinido.
const whatsappPhone = '51934367672'; // formato internacional sin '+' ni espacios
const whatsappMessage =
  '¡Hola Trigra! Estoy interesado en adquirir uno de sus servicios. ¿Me pueden dar más información?';

export const networks: Record<Network, { label: string; href: string; icon: string }> = {
  whatsapp: {
    label: 'WhatsApp',
    href: `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`,
    icon: '/icons/icon-wsp.svg',
  },
  facebook: {
    label: 'Facebook',
    href: 'https://www.facebook.com/Gdegato.3/',
    icon: '/icons/icon-facebook.svg',
  },
  instagram: {
    label: 'Instagram',
    href: 'https://www.instagram.com/gerardogm_14/',
    icon: '/icons/icon-instagram.svg',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gerardo-f-gonzalez-moreno-9aa600270',
    icon: '/icons/icon-linkedin.svg',
  },
};

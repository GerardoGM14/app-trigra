/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // Tipografías del sistema de diseño de Trigra (textStyles.json)
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'], // titulares y acciones
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'], // cuerpo de texto
      },
      colors: {
        // Paleta base de la marca. Ajústala cuando definas los colores oficiales.
        trigra: {
          bg: '#0B0B0F',
          surface: '#14141C',
          text: '#F5F5F7',
          muted: '#A1A1AA',
          accent: '#7C5CFC',
          'accent-soft': '#A78BFA',
        },
      },
      // Escala tipográfica derivada de textStyles.json
      fontSize: {
        display: ['3rem', { lineHeight: '1.05', fontWeight: '700' }], // 48px
        'large-title': ['2.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 40px
        'title-1': ['2rem', { lineHeight: '1.15', fontWeight: '700' }], // 32px
      },
    },
  },
  plugins: [],
};

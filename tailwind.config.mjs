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
          bg: '#0A0D10', // Vulcan/950 — base del fondo
          surface: '#121A21',
          text: '#F5F5F7',
          muted: '#A1A1AA',
          accent: '#7C5CFC',
          'accent-soft': '#A78BFA',
          // Stops del radial gradient de fondo (ver global.css)
          'grad-1': '#121A21', // 58%
          'grad-2': '#0C1014', // 97%
          'grad-3': '#0A0D10', // 100% — Vulcan/950
          // Linear gradient de texto ("soluciones digitales")
          'text-grad-1': '#93FE69',
          'text-grad-2': '#6ECFFF',
        },
      },
      backgroundImage: {
        'trigra-text-grad':
          'linear-gradient(90deg, #93FE69 0%, #6ECFFF 100%)',
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

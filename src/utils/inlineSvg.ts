// Lee un SVG de public/ en tiempo de compilación para insertarlo en el HTML.
// Quita width/height y cambia los colores fijos por currentColor, así el ícono
// toma el color del texto del contenedor (y puede cambiar con hover).
// Devuelve null si el archivo no existe.
import fs from 'node:fs';
import path from 'node:path';

export function inlineSvg(publicSrc: string, className = ''): string | null {
  const file = path.join(process.cwd(), 'public', publicSrc);
  if (!fs.existsSync(file)) return null;
  return fs
    .readFileSync(file, 'utf8')
    .replace(/\s(width|height)="[^"]*"/g, '')
    .replace(/(fill|stroke)="(?!none)[^"]*"/g, '$1="currentColor"')
    .replace('<svg', `<svg class="${className}" aria-hidden="true"`);
}

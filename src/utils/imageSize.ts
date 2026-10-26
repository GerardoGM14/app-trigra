// Lee el ancho y alto de una imagen de public/ en tiempo de compilación.
// Sirve para poner width/height en <img> y reservar su espacio (evita saltos al cargar).
// Soporta WebP (VP8, VP8L, VP8X) y PNG; para otros formatos devuelve null.
import fs from 'node:fs';
import path from 'node:path';

export function imageSize(publicSrc: string): { width: number; height: number } | null {
  const file = path.join(process.cwd(), 'public', publicSrc);
  if (!fs.existsSync(file)) return null;
  const b = fs.readFileSync(file);

  // PNG: ancho y alto en el chunk IHDR
  if (b.toString('ascii', 1, 4) === 'PNG') {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }

  if (b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') return null;
  const chunk = b.toString('ascii', 12, 16);

  if (chunk === 'VP8X') {
    return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) };
  }
  if (chunk === 'VP8 ') {
    return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
  }
  if (chunk === 'VP8L') {
    const n = b.readUInt32LE(21);
    return { width: (n & 0x3fff) + 1, height: ((n >> 14) & 0x3fff) + 1 };
  }
  return null;
}

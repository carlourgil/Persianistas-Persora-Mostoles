import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'client/public');
const output = path.join(publicDir, 'images/optimized');
fs.mkdirSync(output, { recursive: true });
const files = ['hero-persianista-portada.png', 'antes-lamas.png', 'despues-lamas.png', 'antes-cinta.png', 'despues-motorizacion-blanca.png'];
const manifest = {};
const report = [];
for (const name of files) {
  const input = fs.readFileSync(path.join(publicDir, 'images', name));
  const metadata = await sharp(input).metadata();
  const hash = createHash('sha256').update(input).update('webp-quality82-effort5-v1').digest('hex').slice(0, 10);
  const widths = [...new Set([320, 640, 1024, metadata.width].filter(width => width <= metadata.width))].sort((a, b) => a - b);
  const variants = [];
  for (const width of widths) {
    const filename = `${path.parse(name).name}-${hash}-${width}.webp`;
    const destination = path.join(output, filename);
    if (!fs.existsSync(destination)) await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(destination);
    variants.push({ width, src: `/images/optimized/${filename}`, bytes: fs.statSync(destination).size });
  }
  manifest[`/images/${name}`] = {
    src: variants.at(-1).src,
    srcSet: variants.map(variant => `${variant.src} ${variant.width}w`).join(', '),
    width: metadata.width, height: metadata.height,
  };
  report.push({ original: `/images/${name}`, originalBytes: input.length, variants });
}
fs.writeFileSync(path.join(root, 'client/src/lib/optimized-images.generated.ts'), `// Generado por scripts/optimize-images.mjs a partir de las fotos originales.\nexport const optimizedImages: Record<string, { src: string; srcSet: string; width: number; height: number }> = ${JSON.stringify(manifest, null, 2)};\n`);
fs.writeFileSync(path.join(root, 'image-optimization-report.json'), JSON.stringify(report, null, 2));
const original = report.reduce((total, image) => total + image.originalBytes, 0);
const optimized = report.reduce((total, image) => total + image.variants.at(-1).bytes, 0);
console.log(`Fotos optimizadas: ${original} → ${optimized} bytes a resolución original (${(100 - optimized / original * 100).toFixed(1)} % menos), con variantes para móvil y miniaturas.`);

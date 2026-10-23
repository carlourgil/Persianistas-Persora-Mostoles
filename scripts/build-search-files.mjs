import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist/public');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const template = read('dist/public/index.html');
const origin = 'https://persianistasmostoles.madrid';
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const required = (text, expression, name) => {
  const match = text.match(expression);
  if (!match || match[1].includes('${')) throw new Error(`No se puede extraer ${name}`);
  return match[1];
};
const pages = [{ path: '/', title: required(template, /<title>([^<]+)<\/title>/, 'título de inicio'), description: required(template, /name="description" content="([^"]+)"/, 'descripción de inicio') }];
const serviceSource = read('client/src/pages/ServicePage.tsx');
for (const kind of ['reparacion', 'instalacion', 'motorizacion']) {
  const block = required(serviceSource, new RegExp(`${kind}: \\{([\\s\\S]*?)image:`), kind);
  pages.push({ path: `/${kind}-persianas-mostoles`, title: `${required(block, /title: '([^']+)'/, kind)} | Persianas Persora`, description: required(block, /description: '([^']+)'/, kind) });
}
pages.push({ path: '/contacto', title: 'Contacto | Persianas Persora en Móstoles', description: 'Contacta con Persianas Persora en Móstoles. Teléfono y WhatsApp: 622 32 04 80. Calle Alquimia, 2, Planta 1, Oficina 7B, 28933 Móstoles, Madrid.' });
for (const filename of fs.readdirSync(path.join(root, 'client/src/pages'))) {
  if (!filename.endsWith('.tsx')) continue;
  const source = read(`client/src/pages/${filename}`);
  if (!source.includes('seoTitle:')) continue;
  pages.push({ path: required(source, /slug: "([^"]+)"/, filename), title: required(source, /seoTitle: `([^`]+)`/, filename), description: required(source, /seoDesc: `([^`]+)`/, filename) });
}
if (pages.length !== 17 || new Set(pages.map(page => page.path)).size !== 17) throw new Error('Se esperaban 17 páginas únicas');
for (const page of pages) {
  if (page.path !== '/' && !/^\/[a-z-]+(?:\/[a-z-]+)?$/.test(page.path)) throw new Error(`Ruta no válida: ${page.path}`);
  const url = `${origin}${page.path}`;
  const html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${escape(page.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*("\s*\/?>)/, `$1${escape(page.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*("\s*\/?>)/, `$1${escape(page.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?>)/, `$1${url}$2`);
  const file = path.join(output, page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}
fs.writeFileSync(path.join(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
fs.writeFileSync(path.join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${origin}${page.path}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(output, '404.html'), '<!doctype html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Página no encontrada | Persianas Persora</title></head><body><main><h1>Página no encontrada</h1><p>La dirección que has abierto no existe.</p><a href="/">Volver al inicio de Persianas Persora</a></main></body></html>');
console.log('Generadas 17 páginas con metadatos propios, sitemap, robots y página 404. El contenido principal todavía requiere JavaScript.');

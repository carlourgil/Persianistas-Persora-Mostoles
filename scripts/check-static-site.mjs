import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist/public');
const read = file => fs.readFileSync(path.join(output, file), 'utf8');
const paths = [...read('sitemap.xml').matchAll(/<loc>https:\/\/persianistasmostoles\.madrid([^<]*)<\/loc>/g)].map(match => match[1]);
assert.equal(paths.length, 17);
assert.equal(new Set(paths).size, 17);
const titles = new Set();
for (const pathname of paths) {
  const html = read(pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`);
  const body = html.split('<body>')[1];
  assert.ok(body, pathname);
  assert.equal((body.match(/<h1\b/g) || []).length, 1, `H1 ausente o duplicado: ${pathname}`);
  assert.ok((body.match(/<h2\b/g) || []).length >= 3, `Contenido no generado: ${pathname}`);
  assert.ok(body.includes('Calle Alquimia, 2, Planta 1, Oficina 7B,'), pathname);
  assert.ok(body.includes('persora24@gmail.com'), pathname);
  assert.ok(body.includes('tel:+34622320480'), pathname);
  assert.ok(body.includes('https://wa.me/34622320480'), pathname);
  assert.ok(!body.includes('<div id="root"></div>'), pathname);
  assert.ok(!html.includes('client:only'), 'No se debe omitir el renderizado inicial');
  assert.ok(!html.includes('fonts.googleapis.com') && !html.includes('fonts.gstatic.com'), 'Las fuentes deben servirse desde el sitio');
  assert.ok(/name="generator" content="Astro v7\.4\.1"/.test(html), pathname);
  assert.ok(html.includes(`rel="canonical" href="https://persianistasmostoles.madrid${pathname}"`), pathname);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `Título ausente o duplicado: ${pathname}`);
  titles.add(title);
  const data = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  assert.equal(data.length, 2, pathname);
  const business = data.flatMap(item => item['@graph']).find(item => item['@type'] === 'LocalBusiness');
  assert.equal(business.telephone, '+34622320480');
  assert.equal(business.address.streetAddress, 'Calle Alquimia, 2, Planta 1, Oficina 7B');
  const page = data.flatMap(item => item['@graph']).find(item => ['WebPage', 'ContactPage'].includes(item['@type']));
  assert.equal(page.url, `https://persianistasmostoles.madrid${pathname}`);
  if (pathname.startsWith('/mostoles/')) assert.ok(/class="persora-faq-answer/.test(body), 'Faltan respuestas de preguntas frecuentes en el HTML');
  for (const match of html.matchAll(/(?:src|href|component-url|renderer-url)="(\/(?:_astro|images)\/[^"?#]+)"/g)) {
    assert.ok(fs.existsSync(path.join(output, match[1].slice(1))), `Recurso ausente: ${match[1]}`);
  }
}
const home = read('index.html');
const photos = [...home.matchAll(/<img\b[^>]*src="(\/images\/optimized\/[^\"]+)"[^>]*>/g)];
assert.equal(photos.length, 5, 'La portada y las cuatro imágenes de los comparadores deben estar optimizadas');
for (const [tag] of photos) {
  assert.ok(tag.includes('srcSet=') || tag.includes('srcset='), 'Faltan los tamaños adaptados');
  assert.ok(tag.includes('width=') && tag.includes('height='), 'Faltan las dimensiones para reservar espacio');
  assert.ok(tag.includes('alt=') && tag.includes('title='), 'Se deben conservar los textos alternativos');
}
const imageReport = JSON.parse(fs.readFileSync(path.join(root, 'image-optimization-report.json'), 'utf8'));
assert.equal(imageReport.length, 5);
for (const image of imageReport) assert.ok(image.variants.at(-1).bytes < 150000, `Foto demasiado pesada: ${image.original}`);
assert.ok(JSON.parse(read('vercel.json')).headers.some(rule => rule.source === '/images/optimized/(.*)' && rule.headers.some(header => header.value.includes('immutable'))));
assert.ok(home.includes('Con Persora, tu persiana'));
for (const price of ['75', '170', '290', '60']) assert.ok(home.includes(`Desde ${price} €`));
assert.ok(home.includes('id="faq-answer-0" hidden=""'));
assert.ok(read('404.html').includes('name="robots" content="noindex"'));
assert.ok(read('robots.txt').includes('Sitemap: https://persianistasmostoles.madrid/sitemap.xml'));
assert.equal(read('google02c302426d72a365.html').trim(), 'google-site-verification: google02c302426d72a365.html');
console.log('Correcto: 17 páginas Astro con contenido real en HTML, un H1, canónicas y títulos propios, dos bloques de datos estructurados, NAP, recursos, precios, sitemap y verificación.');

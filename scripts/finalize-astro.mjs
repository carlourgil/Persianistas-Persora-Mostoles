import fs from 'node:fs';
const output = new URL('../dist/public/', import.meta.url);
const project = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
// También permite subir directamente la compilación estática con Vercel CLI.
fs.writeFileSync(new URL('vercel.json', output), JSON.stringify({
  $schema: 'https://openapi.vercel.sh/vercel.json',
  framework: null, cleanUrls: true, trailingSlash: false,
  headers: project.headers,
}, null, 2));

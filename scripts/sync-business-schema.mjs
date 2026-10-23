import fs from 'node:fs';
import { businessStructuredData, serializeStructuredData } from '../client/src/lib/structuredData.ts';

const file = new URL('../client/index.html', import.meta.url);
let source = fs.readFileSync(file,'utf8');
const script = `<script id="persora-business-schema" type="application/ld+json">${serializeStructuredData(businessStructuredData)}</script>`;
if (source.includes('id="persora-business-schema"')) {
  source = source.replace(/<script id="persora-business-schema" type="application\/ld\+json">[\s\S]*?<\/script>/,script);
} else {
  const start = source.indexOf('    <!-- Schema.org LocalBusiness -->');
  const end = source.indexOf('    <!-- Google Fonts -->',start);
  if (start < 0 || end < 0) throw new Error('No se encontró el bloque de datos estructurados antiguo');
  source = source.slice(0,start) + `    ${script}\n` + source.slice(end);
}
fs.writeFileSync(file,source);
console.log('Datos estructurados del negocio sincronizados.');

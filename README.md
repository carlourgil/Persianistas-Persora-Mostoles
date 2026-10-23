# Persianas Persora · Astro

Web estática con Astro 7.4.1 y su integración oficial de React. Las 17 páginas se generan con el contenido completo, metadatos y JSON-LD en el HTML. Los componentes React existentes se renderizan durante la compilación y se hidratan con `client:load` para conservar sus funciones interactivas.

## Desarrollo y validación

Node.js 22.22 o superior; gestor fijado en `package.json`: pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
pnpm test:static
pnpm preview
```

La vista previa usa `http://127.0.0.1:4321`. Los scripts también se pueden ejecutar con `npm run` después de instalar con pnpm.

## Archivos principales

- `astro.config.mjs`: generación estática y formato de URL.
- `astro/pages/[...page].astro`: rutas de inicio, contacto, servicios y barrios.
- `astro/lib/routes.ts`: catálogo de las 17 rutas; reutiliza los datos de los componentes actuales.
- `astro/layouts/SiteLayout.astro`: HTML, estilos globales, títulos, canónicas y datos estructurados.
- `astro/pages/sitemap.xml.ts`, `robots.txt.ts`, `404.astro`: rastreo y errores.
- `client/src/`: componentes React, contenido y estilo visual conservados.
- `client/public/`: imágenes, favicon y verificación de Google.
- `scripts/check-static-site.mjs`: valida contenido real sin ejecutar JavaScript, metadatos, contactos y recursos de las 17 páginas.

Los antiguos puntos de entrada de Vite (`client/index.html`, `client/src/main.tsx`, `client/src/App.tsx` y `vite.config.ts`) no participan en la compilación de Astro. Se conservan como referencia del proyecto anterior. Los scripts antiguos de generación de metadatos tampoco se ejecutan.

## Publicación

Vercel: proyecto `persianistas-mostoles-web`, dominio `https://persianistasmostoles.madrid`, framework Astro, comando `npm run build`, salida `dist/public`. Las URL existentes se conservan sin barra final ni extensión `.html`.

`postbuild` crea una configuración estática en `dist/public/vercel.json` para permitir también subir directamente esa carpeta con Vercel CLI. El identificador de vinculación del proyecto se añade localmente antes de publicar y no forma parte del código fuente.

Los mapas se importan al entrar en pantalla. El formulario prepara un mensaje para WhatsApp; el cliente confirma el envío allí. La preselección por parámetros se aplica después de activar JavaScript, sin modificar el HTML de las páginas estáticas.

Antes de compilar, `scripts/optimize-images.mjs` genera versiones WebP con varios tamaños y conserva los PNG originales. `OptimizedPhoto.tsx` utiliza srcset y mantiene los alt y títulos de cada foto. Inter y Poppins se sirven localmente mediante Fontsource. Los estilos de Leaflet se cargan junto al mapa cuando entra en pantalla. Los recursos de `_astro` y `images/optimized` tienen nombres versionados y caché immutable; el HTML sigue pudiendo actualizarse en cada publicación.

## Reversión

La migración conserva las URL y el diseño. Existe una copia de fuentes y otra de la compilación publicada antes de Astro, fuera de este directorio: `persora-fuentes-antes-astro.zip` y `persora-publicada-antes-astro.zip`. Vercel conserva el despliegue anterior para volver a él si fuera necesario.

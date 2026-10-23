export function GET() {
  return new Response('User-agent: *\nAllow: /\n\nSitemap: https://persianistasmostoles.madrid/sitemap.xml\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

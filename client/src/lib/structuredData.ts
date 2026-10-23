import { servicePrices } from './servicePrices.ts';

type Node = Record<string, unknown>;
export const siteUrl = 'https://persianistasmostoles.madrid';
export const businessId = `${siteUrl}/#negocio`;
const websiteId = `${siteUrl}/#website`;
export const businessStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness', '@id': businessId,
      name: 'Persianas Persora', url: `${siteUrl}/`,
      description: 'Reparación, instalación, motorización y mantenimiento de persianas en Móstoles.',
      telephone: '+34622320480', email: 'persora24@gmail.com',
      logo: `${siteUrl}/images/logo-persora.png`,
      hasMap: 'https://share.google/eiNvij5cYFIQ8rdQm',
      address: {
        '@type': 'PostalAddress', streetAddress: 'Calle Alquimia, 2, Planta 1, Oficina 7B',
        postalCode: '28933', addressLocality: 'Móstoles', addressRegion: 'Madrid', addressCountry: 'ES',
      },
      areaServed: { '@type': 'City', name: 'Móstoles' },
      contactPoint: {
        '@type': 'ContactPoint', telephone: '+34622320480', email: 'persora24@gmail.com',
        contactType: 'Atención al cliente', availableLanguage: 'es', url: `${siteUrl}/contacto`,
      },
    },
    { '@type': 'WebSite', '@id': websiteId, url: `${siteUrl}/`, name: 'Persianas Persora', inLanguage: 'es-ES', publisher: { '@id': businessId } },
  ],
};
const services = [
  { key: 'reparacion', name: 'Reparación de persianas en Móstoles', path: '/reparacion-persianas-mostoles' },
  { key: 'instalacion', name: 'Instalación de persianas en Móstoles', path: '/instalacion-persianas-mostoles' },
  { key: 'motorizacion', name: 'Motorización de persianas en Móstoles', path: '/motorizacion-persianas-mostoles' },
  { key: 'mantenimiento', name: 'Mantenimiento de persianas en Móstoles', path: '/#precios' },
] as const;
const zones: Record<string, string> = {
  centro: 'Centro de Móstoles', 'el-soto': 'El Soto', 'parque-coimbra': 'Parque Coimbra', villafontana: 'Villafontana',
  estoril: 'Estoril I y II', 'los-rosales': 'Los Rosales', 'la-princesa': 'La Princesa', 'mostoles-sur': 'Móstoles Sur',
  pradillo: 'Pradillo', 'el-pinar': 'El Pinar', 'parque-loranca': 'Parque Loranca', 'fuente-del-rey': 'Fuente del Rey',
};
function offer(service: typeof services[number]): Node {
  const price = servicePrices[service.key];
  return {
    '@type': 'Offer', url: `${siteUrl}${service.path}`, name: `${service.name}: ${price.label.toLowerCase()}`,
    seller: { '@id': businessId },
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR', minPrice: price.amount, description: price.label },
    itemOffered: { '@type': 'Service', name: service.name, provider: { '@id': businessId }, areaServed: { '@type': 'City', name: 'Móstoles' } },
  };
}
export function buildPageStructuredData(input: string) {
  const raw = input.split(/[?#]/)[0];
  const path = raw === '/' ? '/' : raw.replace(/\/$/, '');
  const service = services.find(service => service.path === path);
  const zone = path.startsWith('/mostoles/') ? zones[path.slice('/mostoles/'.length)] : undefined;
  if (path !== '/' && path !== '/contacto' && !service && !zone) return null;
  const url = `${siteUrl}${path}`;
  const graph: Node[] = [];
  const page: Node = {
    '@type': path === '/contacto' ? 'ContactPage' : 'WebPage', '@id': `${url}#webpage`, url,
    name: path === '/' ? 'Persianistas en Móstoles | Persianas Persora' : path === '/contacto' ? 'Contacto de Persianas Persora en Móstoles' : service?.name || `Persianistas en ${zone}`,
    inLanguage: 'es-ES', isPartOf: { '@id': websiteId }, about: { '@id': businessId },
  };
  if (path === '/') {
    const id = `${url}#catalogo`;
    page.mainEntity = { '@id': id };
    graph.push({ '@type': 'OfferCatalog', '@id': id, name: 'Servicios de Persianas Persora', itemListElement: services.map(offer) });
  } else if (path === '/contacto') {
    page.mainEntity = { '@id': businessId };
  } else if (service) {
    const id = `${url}#servicio`;
    page.mainEntity = { '@id': id };
    graph.push({ '@type': 'Service', '@id': id, name: service.name, serviceType: service.name, url, provider: { '@id': businessId }, areaServed: { '@type': 'City', name: 'Móstoles' }, offers: offer(service) });
  } else if (zone) {
    const id = `${url}#servicio-local`;
    page.mainEntity = { '@id': id };
    graph.push({ '@type': 'Service', '@id': id, name: `Servicios de persianas en ${zone}`, provider: { '@id': businessId }, areaServed: { '@type': 'Place', name: zone }, offers: services.map(offer) });
  }
  if (path !== '/') {
    const elements: Node[] = [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` }];
    if (zone) elements.push({ '@type': 'ListItem', position: 2, name: 'Zonas', item: `${siteUrl}/#zonas` });
    elements.push({ '@type': 'ListItem', position: elements.length + 1, name: zone || (path === '/contacto' ? 'Contacto' : service!.name), item: url });
    const id = `${url}#breadcrumb`;
    page.breadcrumb = { '@id': id };
    graph.push({ '@type': 'BreadcrumbList', '@id': id, itemListElement: elements });
  }
  graph.unshift(page);
  return { '@context': 'https://schema.org', '@graph': graph };
}
export function serializeStructuredData(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

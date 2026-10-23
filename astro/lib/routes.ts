import { content } from '../../client/src/pages/ServicePage';
import { data as centro } from '../../client/src/pages/CentroMostoles';
import { data as elSoto } from '../../client/src/pages/ElSoto';
import { data as parqueCoimbra } from '../../client/src/pages/ParqueCoimbra';
import { data as villafontana } from '../../client/src/pages/Villafontana';
import { data as estoril } from '../../client/src/pages/Estoril';
import { data as losRosales } from '../../client/src/pages/LosRosales';
import { data as laPrincesa } from '../../client/src/pages/LaPrincesa';
import { data as mostolesSur } from '../../client/src/pages/MostolesSur';
import { data as pradillo } from '../../client/src/pages/Pradillo';
import { data as elPinar } from '../../client/src/pages/ElPinar';
import { data as parqueLoranca } from '../../client/src/pages/PaqueLoranca';
import { data as fuenteDelRey } from '../../client/src/pages/FuenteDelRey';
import type { BarrioData } from '../../client/src/components/BarrioPage';

export interface SiteRoute {
  path: string;
  title: string;
  description: string;
  type: 'home' | 'contact' | 'service' | 'zone';
  service?: keyof typeof content;
  zone?: BarrioData;
}

export const siteRoutes: SiteRoute[] = [
  {
    path: '/', type: 'home',
    title: 'Persianas Persora | Reparación Urgente 24h · Presupuesto Gratis',
    description: 'Persianistas en Móstoles con servicio urgente 24h. Reparación, instalación y motorización de persianas. Presupuesto gratuito sin compromiso. Garantía 12 meses. Llamada o WhatsApp.',
  },
  {
    path: '/contacto', type: 'contact', title: 'Contacto | Persianas Persora en Móstoles',
    description: 'Contacta con Persianas Persora en Móstoles. Teléfono y WhatsApp: 622 32 04 80. Calle Alquimia, 2, Planta 1, Oficina 7B, 28933 Móstoles, Madrid.',
  },
  ...(['reparacion', 'instalacion', 'motorizacion'] as const).map(service => ({
    path: `/${service}-persianas-mostoles`, type: 'service' as const, service,
    title: `${content[service].title} | Persianas Persora`, description: content[service].description,
  })),
  ...[centro, elSoto, parqueCoimbra, villafontana, estoril, losRosales, laPrincesa, mostolesSur, pradillo, elPinar, parqueLoranca, fuenteDelRey].map(zone => ({
    path: zone.slug, type: 'zone' as const, zone,
    title: zone.seoTitle || `Persianistas en ${zone.nombre}, Móstoles | Persianas Persora`,
    description: zone.seoDesc || zone.descripcion,
  })),
];

import OptimizedPhoto from "@/components/OptimizedPhoto";
import { imageDescriptions } from "@/lib/imageDescriptions";
import CommonRepairs from "@/components/CommonRepairs";
import { ArrowRight, MessageCircle, Check } from 'lucide-react';
import BusinessContact from '@/components/BusinessContact';
import ContactRequestForm from '@/components/ContactRequestForm';
import { servicePrices } from '@/lib/servicePrices';
import RepairIcon from '@/components/RepairIcon';
import { SiteHeader, SiteFooter, WorkProcess, serviceLinks } from '@/components/SiteChrome';

export const content = {
  reparacion: {
    title: 'Reparación de persianas en Móstoles', intro: 'Que una avería no te complique el día.', description: 'Si la persiana se ha atascado, la cinta se ha roto o el motor no responde, cuéntanos qué ocurre. Revisamos la causa para proponerte una reparación adecuada.', image: '/images/hero-persianista-portada.png',
    heading: '¿Qué necesita tu persiana?', items: [['Cinta y recogedor','Cambio de cintas desgastadas y mecanismos de recogida que no mantienen la persiana en su posición.'],['Lamas y guías','Revisión de lamas dañadas, desalineaciones y rozamientos que dificultan la subida y la bajada.'],['Motor y mando','Comprobación de motores, pulsadores y mandos antes de decidir si hace falta sustituir una pieza.']],
    points: ['Si está bloqueada, evita seguir tirando de la cinta o forzar el motor.','Una foto de la persiana y otra del mecanismo visible ayudan a preparar la valoración.','Indícanos si no sube, no baja, se queda a medias o hace un ruido diferente.'],
    faq: [['¿Hay que cambiar toda la persiana?','Depende del estado del conjunto. Una cinta, un recogedor o unas lamas pueden sustituirse por separado cuando el resto está en condiciones.'],['¿Reparáis persianas eléctricas?','Sí. Revisamos el funcionamiento del sistema, incluidos motor y controles, para identificar dónde está el fallo.'],['¿Puedo enviar una foto?','Sí. Puedes enviarla por WhatsApp junto con una breve explicación y tu zona. Algunas averías requieren comprobación presencial.']],
  },
  instalacion: {
    title: 'Instalación de persianas en Móstoles', intro: 'Una persiana nueva, a la medida de tu casa.', description: 'Te ayudamos a renovar tus persianas teniendo en cuenta el hueco, el uso de la habitación y el tipo de apertura que necesitas. Valoramos las medidas y las opciones antes de instalar.', image: '/images/despues-lamas.png',
    heading: 'Elegir bien empieza por tu ventana', items: [['Material y acabado','Valoramos las alternativas de aluminio y PVC y los acabados que encajan con tu vivienda.'],['Medición y montaje','Comprobamos el hueco, las guías y el cajón para definir el conjunto y su instalación.'],['Apertura manual o eléctrica','Puedes mantener una apertura con cinta o valorar un sistema motorizado según la instalación.']],
    points: ['Indícanos cuántas persianas quieres renovar y en qué habitaciones.','Una fotografía general permite ver el hueco y el espacio disponible.','Comprobaremos medidas y compatibilidades antes de concretar el montaje.'],
    faq: [['¿Aluminio o PVC?','La elección depende de las medidas, el uso, el acabado y el presupuesto. Te explicamos las alternativas adecuadas para tu ventana.'],['¿Puedo conservar el cajón?','Se valora su estado y su compatibilidad con la nueva persiana. No siempre es necesario sustituir todo el conjunto.'],['¿Instaláis persianas con motor?','Sí. Podemos valorar una persiana nueva con apertura eléctrica y el tipo de mando más adecuado.']],
  },
  motorizacion: {
    title: 'Motorización de persianas en Móstoles', intro: 'Más comodidad, sin tirar de la cinta.', description: 'Convierte la apertura de tu persiana en un gesto sencillo. Revisamos el mecanismo, el peso de la persiana y las posibilidades de alimentación para valorar la instalación del motor.', image: '/images/despues-motorizacion-blanca.png',
    heading: 'Una apertura adaptada a tu día a día', items: [['Motor para tu persiana','Elegimos la solución según las dimensiones, el peso y la compatibilidad del mecanismo existente.'],['Pulsador o mando','Valoramos la forma de control que te resulte más cómoda y las posibilidades de la instalación.'],['Ajuste y comprobación','Configuramos el recorrido de apertura y cierre y comprobamos el funcionamiento al terminar.']],
    points: ['Dinos si la persiana es manual o ya tiene un motor averiado.','Una fotografía del cajón y del tipo de mando ayuda a orientar la consulta.','La compatibilidad con aplicaciones o domótica depende del sistema elegido.'],
    faq: [['¿Puedo motorizar mi persiana actual?','En muchos casos se puede aprovechar, pero primero hay que revisar el estado del mecanismo y el espacio para el motor.'],['¿Necesita conexión eléctrica?','Un motor eléctrico necesita alimentación compatible. Revisamos cómo resolverla en tu instalación antes de presupuestar.'],['¿Puedo controlar varias persianas?','Depende de los motores y controles elegidos. Te orientamos sobre mandos individuales o agrupados cuando sean compatibles.']],
  },
};
export default function ServicePage({ kind }: { kind: keyof typeof content }) {
  const page = content[kind];
  return <div className="persora-site"><SiteHeader /><main id="contenido">
    <section className="persora-service-hero"><div className="persora-content-width persora-service-hero-grid"><div><nav aria-label="Ruta de navegación" className="persora-breadcrumb"><a href="/">Inicio</a><span>/</span><span>{serviceLinks[Object.keys(content).indexOf(kind)].title}</span></nav><span className="persora-section-eyebrow">PERSIANAS PERSORA</span><h1>{page.title}</h1><p className="persora-service-intro">{page.intro}</p><p>{page.description}</p><p className="persora-service-price">{servicePrices[kind].label}</p><div className="persora-hero-buttons"><a href="#solicitud" className="persora-cta-primary">Pedir presupuesto<ArrowRight size={18} /></a><a href={`https://wa.me/34622320480?text=${encodeURIComponent(`Hola, me interesa ${page.title.toLowerCase()}.`)}`} className="persora-cta-whatsapp" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />WhatsApp</a></div></div><figure><OptimizedPhoto sizes="(max-width: 900px) 640px, (min-width: 1280px) 630px, 46vw" fetchPriority="high" src={page.image} alt={imageDescriptions[page.image].alt} title={imageDescriptions[page.image].title} /><figcaption>Imagen ilustrativa del servicio.</figcaption></figure></div></section>
    {kind === 'reparacion' ? <CommonRepairs /> : (<section className="persora-content-section"><div className="persora-content-width"><div className="persora-section-heading"><h2>{page.heading}</h2></div><div className="persora-process-grid">{page.items.map(([title,text]) => <article key={title}><RepairIcon title={title} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>)}
    <WorkProcess /><section className="persora-content-section"><div className="persora-content-width persora-advice"><div><span className="persora-section-eyebrow">PREPARA TU CONSULTA</span><h2>Cuéntanos un poco más</h2><p>Con esta información podremos orientarte mejor.</p></div><ul>{page.points.map(point => <li key={point}><Check size={20} aria-hidden="true" />{point}</li>)}</ul></div></section>
    <section className="persora-content-section persora-soft"><div className="persora-faq-width"><div className="persora-section-heading"><h2>Resolvemos tus dudas</h2></div>{page.faq.map(([q,a]) => <details key={q} className="persora-faq-item"><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <section className="persora-related"><div className="persora-content-width"><h2>También podemos ayudarte con…</h2><div>{serviceLinks.filter((_,i) => i !== Object.keys(content).indexOf(kind)).map(link => <a key={link.url} href={link.url}>{link.title} de persianas<ArrowRight size={17} /></a>)}</div></div></section>
    <ContactRequestForm key={kind} initialService={kind === 'reparacion' ? 'Reparación de persianas' : kind === 'instalacion' ? 'Instalación de persianas nuevas' : 'Motorización de una persiana manual'} />
    <BusinessContact /></main><SiteFooter /></div>;
}

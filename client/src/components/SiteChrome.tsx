import { Phone, MessageCircle } from 'lucide-react';

export const serviceLinks = [
  { title: 'Reparación', url: '/reparacion-persianas-mostoles' },
  { title: 'Instalación', url: '/instalacion-persianas-mostoles' },
  { title: 'Motorización', url: '/motorizacion-persianas-mostoles' },
];
export { default as SiteHeader } from './SiteHeader';
export function ContactBar() {
  return <aside className="persora-contact-bar" aria-label="Contacto rápido"><a href="tel:+34622320480"><Phone size={18} aria-hidden="true" />Llamar</a><a href="https://wa.me/34622320480" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />WhatsApp</a></aside>;
}
export function SiteFooter() {
  return <><footer className="persora-footer"><div className="persora-footer-inner"><div><img src="/images/logo-persora.png" alt="Persianas Persora" title="Persianas Persora · Persianistas" width="170" height="84" /><p>Tu persiana vuelve a funcionar.<br />Reparación, instalación y motorización en Móstoles.</p></div><div><h2>Servicios</h2>{serviceLinks.map(link => <a key={link.url} href={link.url}>{link.title} de persianas</a>)}</div><div><h2>Explora Persora</h2><a href="/#trabajos">Ejemplos de soluciones</a><a href="/#zonas">Zonas de servicio</a><a href="/#preguntas">Preguntas frecuentes</a><a href="/contacto">Contacto y ubicación</a></div><div><h2>Persianas Persora</h2><address>Calle Alquimia, 2, Planta 1, Oficina 7B,<br />28933 Móstoles, Madrid</address><a href="tel:+34622320480">Teléfono / WhatsApp: 622 32 04 80</a><a href="mailto:persora24@gmail.com">Correo: persora24@gmail.com</a></div></div><div className="persora-footer-bottom">© {new Date().getFullYear()} Persianas Persora · Móstoles, Madrid<nav aria-label="Información legal" className="persora-legal-links"><a href="/aviso-legal">Aviso legal</a><a href="/politica-de-privacidad">Política de privacidad</a><a href="/politica-de-cookies">Política de cookies</a></nav></div></footer><ContactBar /></>;
}
export function WorkProcess() {
  return <section className="persora-process" aria-labelledby="persora-process-title"><div className="persora-content-width"><div className="persora-section-heading"><span className="persora-section-eyebrow">ASÍ DE SENCILLO</span><h2 id="persora-process-title">Cómo trabajamos, paso a paso</h2><p>Desde la primera consulta hasta comprobar que tu persiana funciona.</p></div><div className="persora-process-grid">{[
    ['01','Muéstranos qué ocurre','Envíanos una foto por WhatsApp o llámanos. Dinos qué hace la persiana y en qué zona estás.'],
    ['02','Valoramos la solución','Revisamos la información y te explicamos el siguiente paso. Si hace falta ver la persiana, acordamos la visita.'],
    ['03','La dejamos funcionando','Tras aceptar el presupuesto, realizamos el trabajo y comprobamos la apertura y el cierre contigo.'],
  ].map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

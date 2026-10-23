import { Camera, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import BusinessContact from '@/components/BusinessContact';
import ContactRequestForm from '@/components/ContactRequestForm';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';

export default function Contact() {
  return <div className="persora-site persora-contact-page"><SiteHeader /><main id="contenido">
    <section className="persora-contact-intro"><div className="persora-content-width">
      <nav className="persora-breadcrumb" aria-label="Ruta de navegación"><a href="/">Inicio</a><span>/</span><span aria-current="page">Contacto</span></nav>
      <span className="persora-section-eyebrow">HABLEMOS DE TU PERSIANA</span>
      <h1>Contacta con Persianas Persora en Móstoles</h1>
      <p>¿Necesitas una reparación, una persiana nueva o instalar un motor? Llámanos o envíanos una foto por WhatsApp. Te ayudamos a dar el siguiente paso.</p>
    </div></section>
    <ContactRequestForm />
    <BusinessContact />
    <section className="persora-contact-prepare"><div className="persora-content-width"><div className="persora-section-heading"><span className="persora-section-eyebrow">PARA PODER AYUDARTE MEJOR</span><h2>Cuéntanos qué necesitas</h2><p>Con estos tres detalles podremos orientar tu consulta.</p></div>
      <div className="persora-process-grid">{[
        { Icon: MessageCircle, title: 'Qué ocurre', text: 'Dinos si no sube, no baja, hace ruido o se ha roto alguna pieza. También puedes consultar una instalación o motorización.' },
        { Icon: Camera, title: 'Una foto de la persiana', text: 'Si puedes, envía una imagen general y otra del detalle de la avería. No hace falta desmontar nada.' },
        { Icon: MapPin, title: 'En qué zona estás', text: 'Indica el barrio o la ubicación del trabajo para que podamos organizar contigo la atención.' },
      ].map(({Icon,title,text}) => <article key={title}><Icon size={28} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="persora-contact-links"><a className="persora-text-link" href="/#servicios">Conocer nuestros servicios<ArrowRight size={17} aria-hidden="true" /></a><a className="persora-text-link" href="/#preguntas">Consultar preguntas frecuentes<ArrowRight size={17} aria-hidden="true" /></a></div>
    </div></section>
  </main><SiteFooter /></div>;
}

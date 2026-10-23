import OptimizedPhoto from "@/components/OptimizedPhoto";
import { imageDescriptions } from "@/lib/imageDescriptions";
import { servicePrices } from "@/lib/servicePrices";
import { SiteHeader, SiteFooter, WorkProcess, serviceLinks } from "@/components/SiteChrome";
import BusinessContact from "@/components/BusinessContact";
import ContactRequestForm from "@/components/ContactRequestForm";
import CommonRepairs from "@/components/CommonRepairs";
import { Phone, MessageCircle, ArrowRight, Wrench, Home as HomeIcon, Zap, MapPin, Star, ChevronDown, ChevronLeft, ChevronRight, Clock, Shield, TrendingUp } from "lucide-react";
import { useState, useRef } from "react";
import { MapView } from "@/components/Map";

// Coordenadas de los barrios de Móstoles
const MOSTOLES_BARRIOS = [
  { name: "Centro de Móstoles", lat: 40.3224, lng: -3.8655, slug: "centro" },
  { name: "El Soto", lat: 40.3309546, lng: -3.8822582, slug: "el-soto" },
  { name: "Parque Coimbra", lat: 40.3092277, lng: -3.9270075, slug: "parque-coimbra" },
  { name: "Villafontana", lat: 40.3221364, lng: -3.8533546, slug: "villafontana" },
  { name: "Estoril I y II", lat: 40.3331242, lng: -3.8611339, slug: "estoril" },
  { name: "Los Rosales", lat: 40.3200, lng: -3.8500, slug: "los-rosales" },
  { name: "La Princesa", lat: 40.3240, lng: -3.8620, slug: "la-princesa" },
  { name: "Móstoles Sur", lat: 40.3050, lng: -3.8650, slug: "mostoles-sur" },
  { name: "Pradillo", lat: 40.3217118, lng: -3.8648272, slug: "pradillo" },
  { name: "El Pinar", lat: 40.3170, lng: -3.8760, slug: "el-pinar" },
  { name: "Parque Loranca", lat: 40.2999542, lng: -3.8337193, slug: "parque-loranca" },
  { name: "Fuente del Rey", lat: 40.3280, lng: -3.8550, slug: "fuente-del-rey" },
];

// Comparador: dos imágenes del mismo tamaño y recorte independiente.
function GalleryItem({ beforeSrc, afterSrc, centerWindow = false }: { beforeSrc: string; afterSrc: string; centerWindow?: boolean }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const updatePos = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect && rect.width) setSliderPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };
  const beforeImage = <OptimizedPhoto sizes="(max-width: 767px) 600px, (min-width: 1280px) 608px, 46vw" className="persora-compare-before" src={beforeSrc} alt={imageDescriptions[beforeSrc].alt} title={imageDescriptions[beforeSrc].title} loading="lazy" draggable={false} style={centerWindow ? undefined : {clipPath: 'inset(0 ' + (100 - sliderPos) + '% 0 0)'}} />;
  return <div className={`persora-compare${centerWindow ? ' persora-compare--centered-window' : ''}`} ref={containerRef}
    onPointerDown={event => { if ((event.target as HTMLElement).closest('input')) return; event.currentTarget.setPointerCapture(event.pointerId); updatePos(event.clientX); }}
    onPointerMove={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) updatePos(event.clientX); }}
    onPointerUp={event => { if(event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}>
    <OptimizedPhoto sizes="(max-width: 767px) 600px, (min-width: 1280px) 608px, 46vw" className="persora-compare-after" src={afterSrc} alt={imageDescriptions[afterSrc].alt} title={imageDescriptions[afterSrc].title} loading="lazy" draggable={false} />
    {centerWindow ? <div className="persora-compare-before-layer" style={{clipPath: 'inset(0 ' + (100 - sliderPos) + '% 0 0)'}}>{beforeImage}</div> : beforeImage}
    <span className="persora-compare-label persora-compare-label-before">ANTES</span>
    <span className="persora-compare-label persora-compare-label-after">DESPUÉS</span>
    <div className="persora-compare-divider" style={{left: sliderPos + '%'}} aria-hidden="true"><span><ChevronLeft size={16} /><ChevronRight size={16} /></span></div>
    <label className="persora-compare-control"><span>Desliza para comparar</span><input type="range" min="0" max="100" value={sliderPos} onChange={event => setSliderPos(Number(event.target.value))} aria-label={`Comparar: ${imageDescriptions[beforeSrc].title} y ${imageDescriptions[afterSrc].title}`} aria-valuetext={`${Math.round(sliderPos)} % de la imagen anterior y ${Math.round(100 - sliderPos)} % de la imagen posterior`} /></label>
  </div>;
}

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const services = [
    {
      icon: Wrench,
      title: "Reparación",
      description: "Reparación rápida de persianas averiadas. Cinta, lamas, recogedor, eje, cable, polea.",
      price: servicePrices.reparacion.label,
      time: "<60 min"
    },
    {
      icon: HomeIcon,
      title: "Instalación",
      description: "Instalación profesional de persianas nuevas. Medida, instalación y ajuste perfecto.",
      price: servicePrices.instalacion.label,
      time: "1-2 días"
    },
    {
      icon: Zap,
      title: "Motorización",
      description: "Automatización de persianas. Motores, mandos, domótica. Confort y seguridad.",
      price: servicePrices.motorizacion.label,
      time: "1-2 días"
    }
  ];

  const stats = [
    { number: "2,847", label: "Servicios Realizados", icon: TrendingUp },
    { number: "4.9/5", label: "Calificación Google", icon: Star },
    { number: "12 Meses", label: "Garantía en Trabajos", icon: Shield },
    { number: "<60 min", label: "Tiempo de Respuesta", icon: Clock }
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo tardáis en llegar a Móstoles?",
      answer: "Para servicios urgentes en Móstoles, nuestro tiempo de respuesta es inferior a 60 minutos. Disponemos de técnicos distribuidos por toda la ciudad."
    },
    {
      question: "¿Ofrecéis presupuesto gratuito y sin compromiso?",
      answer: "Sí, todos nuestros presupuestos son gratuitos y sin compromiso. Te damos un presupuesto cerrado antes de empezar cualquier trabajo."
    },
    {
      question: "¿Qué tipo de persianas reparáis?",
      answer: "Reparamos todo tipo de persianas: enrollables, venecianas, verticales, de PVC, aluminio, madera, motorizadas, de seguridad, etc."
    },
    {
      question: "¿Las reparaciones tienen garantía?",
      answer: "Absolutamente. Todos nuestros trabajos y materiales tienen 12 meses de garantía."
    },
    {
      question: "¿Qué fotos os envío para consultar una avería?",
      answer: "Envíanos una foto de la persiana completa y otra de la pieza que veas dañada, sin desmontar nada. Dinos si no sube, no baja o se queda atascada y en qué zona estás. Si hace falta comprobarla en persona, acordamos una visita."
    },
    {
      question: "¿También instaláis y motorizáis persianas?",
      answer: "Sí. Además de reparar averías, instalamos persianas nuevas y valoramos si tu persiana manual puede adaptarse a un motor. Puedes consultar cada servicio en su página."
    },
    {
      question: "¿Podéis arreglar una persiana que se queda a medias?",
      answer: "Sí, podemos revisar ese tipo de avería. Puede estar relacionada con las lamas, las guías o el mecanismo de apertura. Evita forzarla y dinos en qué punto se detiene; una foto o un vídeo corto nos ayuda a orientar la valoración."
    }
  ];

  return (
    <div className="persora-site min-h-screen bg-white">
      <SiteHeader home />
      <main id="contenido">
      {/* Portada y servicios inspirados en la referencia */}
      <section id="inicio" className="persora-hero" aria-labelledby="persora-hero-title">
        <OptimizedPhoto sizes="(max-width: 760px) 960px, 100vw" className="persora-hero-photo" src="/images/hero-persianista-portada.png" alt={imageDescriptions["/images/hero-persianista-portada.png"].alt} title={imageDescriptions["/images/hero-persianista-portada.png"].title} fetchPriority="high" />
        <div className="persora-hero-overlay" />
        <div className="persora-hero-inner">
          <div className="persora-hero-copy">
            <span className="persora-hero-eyebrow"><MapPin size={15} aria-hidden="true" /> PERSIANAS PERSORA · MÓSTOLES</span>
            <h1 id="persora-hero-title" className="persora-hero-location">Persianistas en Móstoles</h1>
            <p className="persora-hero-promise">Con Persora, tu persiana<br className="persora-desktop-break" /> vuelve a funcionar.</p>
            <p className="persora-hero-service">Reparación, instalación y motorización.</p>
            <p className="persora-hero-description">¿No sube, se atasca o se ha roto la cinta?<br className="persora-desktop-break" /> Cuéntanos qué ocurre y te ayudamos.</p>
            <div className="persora-hero-buttons">
              <a href="#solicitud" className="persora-cta-primary">Pedir presupuesto<ArrowRight size={18} aria-hidden="true" /></a>
              <a href="https://wa.me/34622320480?text=Hola%2C%20necesito%20ayuda%20con%20una%20persiana%20en%20M%C3%B3stoles.%20Os%20env%C3%ADo%20una%20foto%20para%20que%20pod%C3%A1is%20valorarla." target="_blank" rel="noopener noreferrer" className="persora-cta-whatsapp"><MessageCircle size={20} aria-hidden="true" /> Enviar foto por WhatsApp</a>
            </div>
            <div className="persora-hero-notes"><span><Clock size={15} aria-hidden="true" /> Urgencias 24 h</span><span>Presupuesto sin compromiso</span></div>
          </div>
        </div>
      </section>
      <section className="reference-brand-strip" aria-label="Marcas y valoración">
        <div className="reference-brands">
          <span className="reference-somfy">somfy<span>.</span></span>
          <span className="reference-velux">VELUX</span>
          <span className="reference-bubendorff">BUBENDORFF</span>
          <div className="reference-rating"><div><span aria-label="5 estrellas" className="reference-stars">★★★★★</span><span className="reference-rating-score">4,9 / 5</span></div><small>Opiniones en Google</small></div>
        </div>
      </section>
      <section className="reference-services persora-services" id="servicios" aria-labelledby="persora-services-title">
        <div className="reference-services-inner">
          <div className="persora-services-heading">
            <span className="persora-section-eyebrow">QUÉ NECESITAS</span>
            <h2 id="persora-services-title">Reparación, instalación y motorización de persianas en Móstoles</h2>
            <p>Repara la que tienes, instala una nueva o gana comodidad con un motor. Te ayudamos a elegir.</p>
          </div>
          <div className="reference-service-grid">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="reference-service-card">
                  <div className="reference-service-icon" aria-hidden="true">
                    <svg viewBox="0 0 96 78" fill="none"><path d="M21 13h54v49H21zM18 9h60v6H18zM25 24h46M25 32h46M25 40h46M25 48h46" stroke="currentColor" strokeWidth="4" /><path d="M21 62v7m54-7v7" stroke="currentColor" strokeWidth="5" /></svg>
                    <Icon className="reference-icon-overlay" size={34} strokeWidth={2.5} />
                  </div>
                  <h3>{service.title}</h3>
                  <p className="reference-service-summary">{idx === 0 ? 'Cintas rotas, lamas dañadas o persianas que no suben. Recupera su funcionamiento.' : idx === 1 ? 'Renueva tus persianas con una solución a medida para las ventanas de tu casa.' : 'Sube y baja tus persianas sin tirar de la cinta. Pásate a una apertura más cómoda.'}</p>
                  <p className="reference-service-price"><strong>{service.price}</strong></p>
                  <a className="reference-service-more" href={serviceLinks[idx].url}>Ver {idx === 0 ? 'reparaciones' : service.title.toLowerCase()}<ArrowRight size={17} aria-hidden="true" /></a>

                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Estadísticas Premium */}
      <section id="resumen-servicios" className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-6 sm:py-7 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-2">
                    <Icon size={26} className="text-white opacity-80" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black mb-1 leading-tight">{stat.number}</div>
                  <p className="text-blue-100 font-medium text-xs sm:text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CommonRepairs />
      <WorkProcess />
      {/* Galería Antes / Después */}
      <section id="trabajos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-sm font-bold px-4 py-2 rounded-full mb-4">SOLUCIONES EN IMÁGENES</span>
            <h2 className="text-4xl font-black text-blue-900 mb-4">Así puede cambiar tu persiana</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Ejemplos ilustrativos de reparación y motorización. Imágenes generadas con IA. Desliza para comparar el antes y el después.</p>
          </div>

          {/* Grid de trabajos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Trabajo 1: Persiana rota */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <GalleryItem
                  beforeSrc="/images/antes-lamas.png"
                  afterSrc="/images/despues-lamas.png"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">Reparación de lamas</span>
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Ejemplo ilustrativo</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Ejemplo ilustrativo: sustitución de lamas dobladas para recuperar el funcionamiento de una persiana.</p>
              </div>
            </div>

            {/* Trabajo 2: Cinta rota → Motorización */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <GalleryItem
                  beforeSrc="/images/antes-cinta.png"
                  afterSrc="/images/despues-motorizacion-blanca.png"
                  centerWindow
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">De cinta a motor</span>
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Ejemplo ilustrativo</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Ejemplo ilustrativo: cambio de un mecanismo con cinta rota por un sistema motorizado con pulsador.</p>
              </div>
            </div>
          </div>

          {/* CTA debajo de la galería */}
          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">¿Te ocurre algo parecido? Cuéntanos cómo está tu persiana y te orientamos.</p>
            <a href="tel:+34622320480" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:scale-105">
              <Phone size={20} /> Llamar para consultar
            </a>
          </div>
        </div>
      </section>

      <section className="persora-about"><div className="persora-content-width persora-advice"><div><span className="persora-section-eyebrow">PERSIANAS PERSORA</span><h2>Persianeros en Móstoles.<br />Un trato cercano.</h2></div><div><p>Si buscas un persianero en Móstoles, en Persora te ayudamos con la reparación, instalación y motorización de tus persianas. Desde una cinta que se ha roto hasta una apertura eléctrica más cómoda.</p><p>Tenemos nuestro local en Calle Alquimia, 2. Puedes llamarnos, enviarnos una foto o consultar la ubicación para ponerte en contacto con nosotros.</p><a className="persora-text-link" href="/contacto">Conoce dónde estamos <ArrowRight size={17} /></a></div></div></section>
      {/* Testimonios - formato grid igual que barrios */}
      <section className="persora-reviews py-16" id="opiniones">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-white/10 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">OPINIONES VERIFICADAS</span>
            <h2 className="text-3xl font-black">Opiniones sobre Persianas Persora</h2>
            <div className="flex justify-center items-center gap-2 mt-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
              <span className="text-blue-200 font-semibold ml-1">4.9/5 · +127 reseñas en Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { nombre: "José Luis García", zona: "C/ Real, Centro de Móstoles", texto: "Me cambiaron las lamas de dos persianas antiguas. Trabajo limpio, materiales de calidad y un precio justo. Sin duda volveré a contar con ellos.", servicio: "Cambio de lamas", fecha: "Hace 1 semana" },
              { nombre: "Elena Retortillo", zona: "Avda. de Coimbra, Parque Coimbra", texto: "Encantada con el servicio. Puntuales, claros con el presupuesto y además muy amables. La persiana del salón quedó como nueva en menos de media hora.", servicio: "Reparación recogedor", fecha: "Hace 2 semanas" },
              { nombre: "Marta Jiménez", zona: "C/ Río Tajo, El Soto", texto: "Mi persiana se quedó atascada un domingo y pensaba que no tendría solución. Llamé y en menos de una hora estaba funcionando otra vez. Muy rápidos y profesionales.", servicio: "Persiana bloqueada", fecha: "Hace 3 semanas" },
              { nombre: "Carlos López", zona: "C/ Lisboa, Estoril II", texto: "Excelente servicio. Llegaron en 45 minutos, presupuesto transparente y trabajo impecable. Motorizaron las dos persianas del salón con Somfy. Muy recomendable.", servicio: "Motorización Somfy", fecha: "Hace 1 mes" },
            ].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-blue-100 italic mb-4 leading-relaxed">"{t.texto}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-black text-white">{t.nombre}</p>
                    <p className="text-blue-300 text-sm flex items-center gap-1"><MapPin size={12} />{t.zona}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">{t.servicio}</span>
                    <p className="text-blue-400 text-xs mt-1">{t.fecha}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabla de Precios Transparentes */}
      <section id="precios" className="py-20 bg-white border-y-4 border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-900 text-sm font-bold px-4 py-2 rounded-full mb-4">PRECIOS TRANSPARENTES</span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">¿Cuánto cuesta reparar una persiana en Móstoles?</h2>
            <p className="text-xl text-slate-600">Consulta los precios orientativos. El presupuesto se concreta según la avería y el trabajo necesario.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 shadow-lg" role="region" aria-label="Precios orientativos de servicios" tabIndex={0}>
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <tr>
                  <th scope="col" className="text-left p-5 font-black text-lg">Servicio</th>
                  <th scope="col" className="text-center p-5 font-black text-lg">Precio orientativo</th>
                  <th scope="col" className="text-center p-5 font-black text-lg">Duración orientativa</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Reparación de persianas", servicePrices.reparacion.label, "Según la avería"],
                  ["Instalación de persianas", servicePrices.instalacion.label, "2-4 horas"],
                  ["Motorización de persianas", servicePrices.motorizacion.label, "2-3 horas"],
                  ["Mantenimiento de persianas", servicePrices.mantenimiento.label, "Según la revisión"]
                ].map(([tipo, precio, tiempo], idx) => (
                  <tr key={idx} className={`border-t border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'} hover:bg-blue-50 transition-colors`}>
                    <td className="p-5 font-semibold text-slate-800">{tipo}</td>
                    <td className="p-5 text-center font-black text-blue-900 text-lg">{precio}</td>
                    <td className="p-5 text-center text-slate-600 font-medium">{tiempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-black text-slate-900 text-lg">¿Quieres valorar tu reparación?</p>
              <p className="text-slate-600">Cuéntanos qué necesitas y concretamos el presupuesto para tu persiana.</p>
            </div>
            <a href="tel:+34622320480" className="persora-cta-primary inline-flex items-center gap-2 py-3 px-6 rounded-lg font-semibold whitespace-nowrap"><Phone size={20} />Consultar por teléfono</a>
          </div>
        </div>
      </section>

      {/* Zonas de Cobertura */}
      <section id="zonas" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-blue-50 text-blue-900 text-sm font-bold px-4 py-2 rounded-full mb-4">ZONAS DE SERVICIO</span>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Reparamos tus persianas en Móstoles y alrededores</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">Consulta tu zona en el mapa o accede a su página para conocer los servicios. Dinos dónde está la persiana y organizamos contigo la atención.</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { nombre: "Centro de Móstoles", url: "/mostoles/centro" },
                  { nombre: "El Soto", url: "/mostoles/el-soto" },
                  { nombre: "Parque Coimbra", url: "/mostoles/parque-coimbra" },
                  { nombre: "Villafontana", url: "/mostoles/villafontana" },
                  { nombre: "Estoril I y II", url: "/mostoles/estoril" },
                  { nombre: "Los Rosales", url: "/mostoles/los-rosales" },
                  { nombre: "La Princesa", url: "/mostoles/la-princesa" },
                  { nombre: "Móstoles Sur", url: "/mostoles/mostoles-sur" },
                  { nombre: "Pradillo", url: "/mostoles/pradillo" },
                  { nombre: "El Pinar", url: "/mostoles/el-pinar" },
                  { nombre: "Parque Loranca", url: "/mostoles/parque-loranca" },
                  { nombre: "Fuente del Rey", url: "/mostoles/fuente-del-rey" },
                ].map((zona, idx) => (
                  zona.url ? (
                    <a key={idx} href={zona.url} className="flex items-center gap-2 bg-white border-2 border-blue-600 rounded-lg p-3 hover:bg-blue-50 transition-colors group">
                      <MapPin size={16} className="text-blue-700 flex-shrink-0" />
                      <span className="text-blue-800 font-black text-sm">{zona.nombre}</span>
                      <span className="ml-auto text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold">Ver →</span>
                    </a>
                  ) : (
                    <div key={idx} className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-3">
                      <MapPin size={16} className="text-blue-800 flex-shrink-0" />
                      <span className="text-slate-700 font-semibold text-sm">{zona.nombre}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-100">
              <div className="bg-blue-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-orange-400" />
                  <span className="text-white font-black text-lg">Cobertura en Móstoles</span>
                </div>
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">12 Zonas</span>
              </div>
              <MapView
                zones={MOSTOLES_BARRIOS} selectedName={null}
                className="h-[420px] w-full"
              />
              <div className="bg-blue-50 px-6 py-3 flex items-center gap-2 text-sm text-blue-800">
                <span className="text-orange-500 font-bold">📍</span>
                <span>Selecciona un marcador para consultar servicios, presupuesto y cómo llegar.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <section id="preguntas" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-16 text-slate-900">
            Preguntas frecuentes sobre reparación de persianas
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-2 border-slate-200 rounded-xl overflow-hidden bg-white hover:border-orange-500 transition-colors">
                <button
                  aria-expanded={expandedFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-lg text-left">{faq.question}</span>
                  <ChevronDown
                    size={28}
                    className={`text-blue-900 flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div id={`faq-answer-${idx}`} hidden={expandedFaq !== idx} className="persora-faq-answer p-6 bg-blue-50 border-t-2 border-blue-200">
                    <p className="text-slate-700 text-base leading-relaxed">{faq.answer}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactRequestForm />
      <BusinessContact />
      </main>
      <SiteFooter />
    </div>
  );
}

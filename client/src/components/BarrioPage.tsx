import { servicePrices } from "@/lib/servicePrices";
import { SiteHeader, SiteFooter, WorkProcess, serviceLinks } from "@/components/SiteChrome";
import BusinessContact from "@/components/BusinessContact";
import RepairIcon from "@/components/RepairIcon";
import { Phone, MessageCircle, Star, ChevronDown, MapPin, Shield, Wrench, Zap, Home as HomeIcon } from "lucide-react";
import { useState } from "react";

const TEL = "+34622320480";
const WA = "https://wa.me/34622320480";

export interface BarrioData {
  nombre: string;
  slug: string;
  seoTitle?: string;
  seoDesc?: string;
  h1?: string;
  h2?: string;
  descripcionHero?: string;
  descripcion: string;
  calles: string[];
  trabajos: string;
  testimonios: {
    nombre: string;
    zona: string;
    texto: string;
    servicio: string;
    fecha: string;
  }[];
  faqs: { pregunta: string; respuesta: string }[];
  averias: { icon: string; titulo: string; desc: string }[];
}

export default function BarrioPage({ data }: { data: BarrioData }) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="persora-site persora-barrio min-h-screen bg-white">

      <SiteHeader />
      <main id="contenido">
      <section className="persora-local-hero"><div className="persora-content-width"><nav className="persora-breadcrumb" aria-label="Ruta de navegación"><a href="/">Inicio</a><span>/</span><a href="/#zonas">Zonas</a><span>/</span><span>{data.nombre}</span></nav><span className="persora-section-eyebrow">PERSIANAS PERSORA · SERVICIO LOCAL</span><h1>Persianistas en {data.nombre}</h1><p>Reparación, instalación y motorización de persianas.</p><p>{data.descripcionHero ?? 'Cuéntanos qué le pasa a tu persiana. Te orientamos y acordamos contigo la intervención en tu zona.'}</p><div className="persora-hero-buttons"><a href={`/contacto?zona=${encodeURIComponent(data.nombre)}#solicitud`} className="persora-cta-primary">Pedir presupuesto</a><a href={WA} target="_blank" rel="noopener noreferrer" className="persora-cta-whatsapp"><MessageCircle size={18} />Enviar foto por WhatsApp</a></div></div></section>
      {/* ESTADISTICAS */}
      <section className="persora-brand-banner text-white py-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: data.trabajos, label: `Trabajos en ${data.nombre}` },
            { num: "4.9/5", label: "Valoración Google" },
            { num: "<60min", label: "Tiempo de llegada" },
            { num: "12 meses", label: "Garantía incluida" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black">{s.num}</div>
              <div className="text-blue-200 text-sm mt-1 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DESCRIPCION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-blue-900 mb-6">
            Persianistas en {data.nombre}: Tu Servicio de Confianza
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">{data.descripcion}</p>
          <div className="bg-blue-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
            <p className="font-bold text-blue-900 mb-3">Calles y zonas donde trabajamos en {data.nombre}:</p>
            <div className="flex flex-wrap gap-2">
              {data.calles.map((calle, i) => (
                <span key={i} className="bg-white border border-blue-200 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  <MapPin size={12} className="inline mr-1" />{calle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-50 text-blue-900 text-sm font-bold px-4 py-2 rounded-full mb-4">NUESTROS SERVICIOS</span>
            <h2 className="text-3xl font-black text-blue-900">Servicios de Persianistas en {data.nombre}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Wrench size={28} className="text-orange-500" />, titulo: "Reparación Urgente", desc: "Recogedor, cinta, lamas, eje, cable o polea. Mismo día.", desde: servicePrices.reparacion.label },
              { icon: <HomeIcon size={28} className="text-orange-500" />, titulo: "Instalación Nueva", desc: "Aluminio, PVC o madera. Medición y montaje incluidos.", desde: servicePrices.instalacion.label },
              { icon: <Zap size={28} className="text-orange-500" />, titulo: "Motorización", desc: "Motor Somfy o Nice. Control por mando, app o domótica.", desde: servicePrices.motorizacion.label },
              { icon: <Shield size={28} className="text-orange-500" />, titulo: "Mantenimiento", desc: "Revisión completa, engrase y ajuste de mecanismos.", desde: servicePrices.mantenimiento.label },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-slate-100 text-center">
                <div className="flex justify-center mb-4">{s.icon}</div>
                <h3 className="font-black text-blue-900 mb-2">{s.titulo}</h3>
                <p className="text-slate-500 text-sm mb-4">{s.desc}</p>
                <p className="text-orange-500 font-black text-xl">{s.desde}</p><a className="persora-text-link" href={i === 3 ? '/contacto#solicitud' : serviceLinks[i].url}>Consultar servicio →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVERIAS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-50 text-blue-900 text-sm font-bold px-4 py-2 rounded-full mb-4">AVERÍAS MÁS FRECUENTES</span>
            <h2 className="text-3xl font-black text-blue-900">Reparación de Persianas en {data.nombre}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.averias.map((a, i) => (
              <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-orange-400 transition-colors">
                <RepairIcon title={a.titulo} className="flex-shrink-0 text-blue-600" />
                <div>
                  <h3 className="font-black text-blue-900 mb-1">{a.titulo}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="persora-reviews py-16" id="opiniones">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-white/10 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">OPINIONES VERIFICADAS</span>
            <h2 className="text-3xl font-black">Opiniones de Vecinos de {data.nombre}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {data.testimonios.map((t, i) => (
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-50 text-blue-900 text-sm font-bold px-4 py-2 rounded-full mb-4">PREGUNTAS FRECUENTES</span>
            <h2 className="text-3xl font-black text-blue-900">Preguntas sobre Persianas en {data.nombre}</h2>
          </div>
          <div className="space-y-3">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-orange-400 transition-colors">
                <button
                  aria-expanded={expandedFaq === idx}
                  aria-controls={`zone-faq-answer-${idx}`}
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-5 flex items-center justify-between hover:bg-blue-50 transition-colors text-left"
                >
                  <span className="font-bold text-slate-900">{faq.pregunta}</span>
                  <ChevronDown size={22} className={`text-blue-900 flex-shrink-0 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`} />
                </button>
                <div id={`zone-faq-answer-${idx}`} hidden={expandedFaq !== idx} className="persora-faq-answer p-5 bg-blue-50 border-t-2 border-blue-200">
                    <p className="text-slate-700 leading-relaxed">{faq.respuesta}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="ayuda-barrio" className="persora-brand-banner py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-4">¿Persiana averiada en {data.nombre}?</h2>
          <p className="text-xl mb-8 text-blue-200">Llámanos ahora y tendrás un técnico en menos de 60 minutos. Presupuesto gratuito sin compromiso.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${TEL}`} className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-full text-xl shadow-2xl transition-all hover:scale-105">
              <Phone size={24} /> Llamar Ahora
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black px-8 py-4 rounded-full text-xl shadow-2xl transition-all hover:scale-105">
              <MessageCircle size={24} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGACION ENTRE BARRIOS */}
      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm mb-4 font-semibold">También cubrimos otros barrios de Móstoles:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { nombre: "El Soto", slug: "/mostoles/el-soto" },
              { nombre: "Parque Coimbra", slug: "/mostoles/parque-coimbra" },
              { nombre: "Villafontana", slug: "/mostoles/villafontana" },
              { nombre: "Centro", slug: "/mostoles/centro" },
              { nombre: "Estoril", slug: "/mostoles/estoril" },
              { nombre: "Los Rosales", slug: "/mostoles/los-rosales" },
              { nombre: "La Princesa", slug: "/mostoles/la-princesa" },
              { nombre: "Móstoles Sur", slug: "/mostoles/mostoles-sur" },
              { nombre: "Pradillo", slug: "/mostoles/pradillo" },
              { nombre: "El Pinar", slug: "/mostoles/el-pinar" },
              { nombre: "Parque Loranca", slug: "/mostoles/parque-loranca" },
              { nombre: "Fuente del Rey", slug: "/mostoles/fuente-del-rey" },
            ].filter(b => b.slug !== data.slug).map((b, i) => (
              <a key={i} href={b.slug} className="bg-white border border-slate-200 hover:border-orange-400 text-slate-700 hover:text-orange-600 text-sm font-semibold px-3 py-1 rounded-full transition-all">
                {b.nombre}
              </a>
            ))}
          </div>
        </div>
      </section>

      <WorkProcess />
      <section className="persora-zone-request"><div className="persora-content-width"><h2>¿Te ayudamos con tu persiana en {data.nombre}?</h2><p>Prepara tu consulta con la zona ya seleccionada.</p><a className="persora-cta-primary" href={`/contacto?zona=${encodeURIComponent(data.nombre)}#solicitud`}>Solicitar presupuesto</a></div></section>
      <BusinessContact />
      </main>
      <SiteFooter />
    </div>
  );
}

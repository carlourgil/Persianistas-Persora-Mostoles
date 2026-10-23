import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { businessDirectionsUrl as directionsUrl } from "@/lib/businessLocation";
const listingUrl = "https://share.google/eiNvij5cYFIQ8rdQm";
const embedUrl = "https://maps.google.com/maps?cid=15173704341680554927&hl=es&z=16&output=embed";
export default function BusinessContact() {
  const [mapAllowed, setMapAllowed] = useState(false);
  return <section id="contacto" className="py-16 bg-white border-t border-blue-100" style={{scrollMarginTop:100}}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-50 rounded-2xl p-6 sm:p-10 border border-blue-100">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div><span className="text-sm font-bold text-blue-700">NUESTRO LOCAL EN MÓSTOLES</span><h2 className="text-3xl font-black text-blue-900 mt-3 mb-5">Persianas Persora</h2>
            <address className="not-italic text-slate-700 leading-relaxed flex gap-3"><MapPin className="text-orange-500 shrink-0 mt-1" size={22} /><span>Calle Alquimia, 2, Planta 1, Oficina 7B,<br />28933 Móstoles, Madrid</span></address>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5"><a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex text-blue-800 font-bold underline underline-offset-4">Cómo llegar ↗</a><a href={listingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex text-blue-800 font-semibold underline underline-offset-4">Ver ficha en Google Maps ↗</a></div>
          </div>
          <div className="space-y-4"><a href="tel:+34622320480" className="flex items-center gap-3 text-blue-900 font-bold"><Phone size={23} className="shrink-0" /><span>Teléfono / WhatsApp: 622 32 04 80</span></a><a href="mailto:persora24@gmail.com" className="flex items-center gap-3 text-blue-800 break-all"><Mail size={21} className="shrink-0" /><span>Correo: persora24@gmail.com</span></a><a href="https://wa.me/34622320480" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg"><MessageCircle size={21} />Pedir presupuesto por WhatsApp</a></div>
        </div>
        <div className="mt-8 rounded-xl overflow-hidden border border-blue-100 bg-white">
          <div className="flex items-center justify-between gap-3 px-4 py-3 bg-blue-900 text-white"><h3 className="font-bold flex items-center gap-2"><MapPin size={19} className="text-orange-400" />Dónde estamos</h3><a href={listingUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline underline-offset-4">Abrir en Maps ↗</a></div>
          {mapAllowed ? <><iframe title="Ubicación de Persianas Persora en Google Maps, Calle Alquimia 2, Móstoles" src={embedUrl} width="100%" height="360" style={{border:0,display:"block"}} loading="lazy" allowFullScreen referrerPolicy="no-referrer" /><button type="button" className="persora-map-choice" onClick={() => setMapAllowed(false)}>Ocultar mapa y retirar permiso</button></> : <div className="persora-map-consent"><MapPin size={32} aria-hidden="true" /><h3>Encuéntranos en Calle Alquimia, 2</h3><p>Para mostrar el mapa se conectará con Google, que recibirá datos técnicos y puede utilizar cookies. Puedes consultar la dirección sin cargarlo.</p><button type="button" className="persora-cta-primary" onClick={() => setMapAllowed(true)}>Cargar mapa de Google</button><a href="/politica-de-cookies">Información sobre cookies y mapas</a></div>}
          <p className="px-4 py-3 text-sm text-slate-600">Calle Alquimia, 2, Planta 1, Oficina 7B, 28933 Móstoles, Madrid</p>
        </div>
      </div>
    </div>
  </section>;
}

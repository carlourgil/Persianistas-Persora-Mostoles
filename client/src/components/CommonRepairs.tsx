import { Phone, MessageCircle } from "lucide-react";
import RepairIcon from "@/components/RepairIcon";

export default function CommonRepairs() {
  return (
    <section id="averias" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-900 text-sm font-bold px-4 py-2 rounded-full mb-4">AVERÍAS MÁS FRECUENTES</span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Reparaciones de persianas: ¿qué le pasa a la tuya?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Identifica el problema y consúltanos. No necesitas saber el nombre de la pieza: una foto también nos ayuda.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔧",
                title: "¿El recogedor no recoge la cinta?",
                desc: "Si la cinta no se recoge o la persiana no se mantiene en su posición, revisamos el recogedor y lo sustituimos cuando es necesario.",
                keywords: "recogedor persiana Móstoles"
              },
              {
                icon: "📏",
                title: "¿La cinta está rota o deshilachada?",
                desc: "Una cinta deshilachada puede terminar rompiéndose. Cambiamos la cinta y comprobamos la polea y el recorrido de subida y bajada.",
                keywords: "cinta persiana Móstoles"
              },
              {
                icon: "🪟",
                title: "¿Hay lamas rotas o fuera de su sitio?",
                desc: "Las lamas dañadas pueden provocar roces y atascos. Valoramos si se pueden cambiar las piezas afectadas o conviene renovar el paño.",
                keywords: "lamas persiana Móstoles"
              },
              {
                icon: "⚙️",
                title: "¿La persiana se enrolla torcida en el eje?",
                desc: "Si la persiana se enrolla torcida o se queda a medias, revisamos el eje, sus soportes y los enganches para localizar la avería.",
                keywords: "eje persiana Móstoles"
              },
              {
                icon: "🔗",
                title: "¿El motor no responde al mando?",
                desc: "Si el motor no arranca o el mando no responde, comprobamos el sistema para saber si el problema está en el control, el ajuste o el propio motor.",
                keywords: "cable persiana Móstoles"
              },
              {
                icon: "🔩",
                title: "¿La persiana roza con las guías?",
                desc: "Los roces laterales y los desplazamientos de las lamas dificultan el movimiento. Revisamos las guías y su alineación para recuperar un recorrido suave.",
                keywords: "polea persiana Móstoles"
              }
            ].map((averia, idx) => (
              <div key={idx} className="bg-white border-2 border-slate-100 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all group">
                <RepairIcon title={averia.title} className="text-blue-600 mb-5" />
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">{averia.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{averia.desc}</p>
                <a href="tel:+34622320480" className="inline-flex items-center gap-2 text-blue-900 font-bold text-sm hover:text-blue-950 transition-colors">
                  <Phone size={16} /> Consultar esta avería
                </a>
              </div>
            ))}
          </div>
          <div className="persora-fault-help">
            <div><h3>¿Tu avería no aparece aquí?</h3><p>Envíanos una foto de tu persiana y cuéntanos qué ocurre.</p></div>
            <a href="https://wa.me/34622320480?text=Hola%2C%20no%20encuentro%20mi%20aver%C3%ADa%20en%20la%20web.%20Os%20env%C3%ADo%20una%20foto%20de%20mi%20persiana%20para%20que%20pod%C3%A1is%20orientarme." target="_blank" rel="noopener noreferrer"><MessageCircle size={20} aria-hidden="true" />Consultar por WhatsApp</a>
          </div>
        </div>
      </section>
  );
}

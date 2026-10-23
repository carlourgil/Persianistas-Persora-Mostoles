import BarrioPage, { BarrioData } from "@/components/BarrioPage";

export const data: BarrioData = {
  nombre: "Fuente del Rey",
  slug: "/mostoles/fuente-del-rey",
  seoTitle: `Persianistas Fuente del Rey, Móstoles | Reparación Hoy Mismo`,
  seoDesc: `Persianistas en Fuente del Rey (Móstoles). Servicio urgente con llegada en menos de 60 minutos. Reparamos aluminio, PVC y madera. Presupuesto gratuito. Garantía 12 meses.`,
  h1: `Persianistas en<br/><span style='color:#fb923c'>Fuente del Rey, Móstoles</span>`,
  h2: `Reparación Urgente de Persianas en Fuente del Rey — Hoy Mismo`,
  descripcionHero: `Fuente del Rey es un barrio residencial tranquilo al norte de Móstoles. Nuestros persianistas en Fuente del Rey ofrecen servicio urgente con llegada en menos de 60 minutos. Reparamos persianas de aluminio, PVC y madera con garantía de 12 meses.`,
  trabajos: "165+",
  descripcion: "Fuente del Rey es un barrio residencial de Móstoles con una mezcla de viviendas de distintas épocas, desde bloques de pisos de los años 90 hasta promociones más recientes. El barrio debe su nombre a la histórica fuente que durante siglos abasteció de agua a la zona. Las persianas aquí son principalmente de aluminio, con una mezcla de sistemas manuales en los edificios más antiguos y motorizados en los más nuevos. Nuestros persianistas en Fuente del Rey ofrecen reparación urgente el mismo día, instalación de persianas nuevas y motorización con presupuesto gratuito y garantía de 12 meses.",
  calles: [
    "C/ Fuente del Rey",
    "C/ Manantial",
    "C/ Arroyo",
    "Avda. Fuente del Rey",
    "C/ Riachuelo",
    "C/ Torrente",
    "C/ Nacimiento",
    "C/ Caño"
  ],
  testimonios: [
    {
      nombre: "Natalia Ortega",
      zona: "C/ Fuente del Rey",
      texto: "La persiana del salón no bajaba bien desde hacía semanas. Llamé y en menos de una hora llegó el técnico. Diagnosticó el problema (eje desajustado y cinta desgastada), lo solucionó en el momento y el precio fue muy razonable. Muy recomendables.",
      servicio: "Reparación urgente de eje y cinta",
      fecha: "Hace 1 semana"
    },
    {
      nombre: "Alberto Nieto",
      zona: "Avda. Fuente del Rey",
      texto: "Cambio de cinta en dos persianas del dormitorio y la cocina. Trabajo rápido, limpio y con garantía. El técnico fue muy profesional, dejó todo recogido y el precio fue exactamente el que me dijeron por teléfono.",
      servicio: "Cambio de cinta en dos persianas",
      fecha: "Hace 3 semanas"
    },
    {
      nombre: "Susana Ibáñez",
      zona: "C/ Manantial, Fuente del Rey",
      texto: "Instalaron persianas nuevas de aluminio en el dormitorio y la cocina. Vinieron a medir, me dieron el presupuesto en el momento y al día siguiente estaban instaladas. Trabajo impecable y precio muy competitivo.",
      servicio: "Instalación de persianas nuevas",
      fecha: "Hace 1 mes"
    },
    {
      nombre: "Fernando Pascual",
      zona: "C/ Arroyo, Fuente del Rey",
      texto: "Motorización de las persianas del salón con motor Nice. El técnico me explicó todas las opciones, me recomendó el motor más adecuado para el tamaño de mis persianas y la instalación fue perfecta. Ahora las controlo desde el móvil.",
      servicio: "Motorización Nice con app",
      fecha: "Hace 7 semanas"
    },
  ],
  faqs: [
    {
      pregunta: "¿Cuánto tarda un persianista en llegar a Fuente del Rey?",
      respuesta: "Normalmente entre 45 y 60 minutos desde la llamada. Cubrimos todo el barrio de Fuente del Rey con técnicos disponibles en Móstoles durante todo el día."
    },
    {
      pregunta: "¿Cuál es la avería más frecuente en Fuente del Rey?",
      respuesta: "En los edificios más antiguos de Fuente del Rey, la avería más habitual es la rotura de la cinta y el desgaste del recogedor. En los edificios más nuevos, es más frecuente la demanda de motorización."
    },
    {
      pregunta: "¿Cuánto cuesta reparar una persiana en Fuente del Rey?",
      respuesta: "La reparación de persianas es desde 75 €. Consúltanos para valorar la avería y concretar el trabajo antes de empezar."
    },
    {
      pregunta: "¿Reparáis persianas eléctricas en Fuente del Rey?",
      respuesta: "Sí, reparamos todo tipo de persianas eléctricas y motorizadas con motores de todas las marcas: Somfy, Nice, Faac y Bubendorff. También reprogramamos mandos y receptores."
    },
    {
      pregunta: "¿Tenéis garantía en los trabajos de Fuente del Rey?",
      respuesta: "Todos nuestros trabajos tienen garantía de 12 meses en mano de obra y materiales. Si algo falla dentro del período de garantía, volvemos sin coste adicional."
    },
  ],
  averias: [
    { icon: "🔧", titulo: "Recogedor desgastado", desc: "La avería más frecuente en los edificios antiguos de Fuente del Rey. Cambio en 20 minutos." },
    { icon: "📏", titulo: "Cinta rota", desc: "Cintas de 14 y 18 mm en todos los colores. Usamos cinta reforzada para mayor durabilidad." },
    { icon: "⚙️", titulo: "Eje partido o bloqueado", desc: "Reparamos ejes de aluminio y PVC de todos los tamaños con garantía de 12 meses." },
    { icon: "🔩", titulo: "Lamas rotas o dobladas", desc: "Sustituimos lamas sueltas sin cambiar toda la persiana, ahorrando hasta un 70% del coste." },
    { icon: "⚡", titulo: "Motorización", desc: "Instalamos motores Nice y Somfy en persianas manuales. Sin obras, en 1-2 horas por persiana." },
    { icon: "🛠️", titulo: "Persiana bloqueada", desc: "Desbloqueamos persianas atascadas sin dañar el mecanismo ni el cajoncillo." },
  ],
};

export default function FuenteDelRey() {
  return <BarrioPage data={data} />;
}

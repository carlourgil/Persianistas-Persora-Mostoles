import BarrioPage, { BarrioData } from "@/components/BarrioPage";

export const data: BarrioData = {
  nombre: "Parque Loranca",
  slug: "/mostoles/parque-loranca",
  seoTitle: `Persianistas Parque Loranca, Móstoles | Somfy · Nice · Bubendorff`,
  seoDesc: `Persianistas en Parque Loranca (Móstoles). Especialistas en motores Somfy, Nice y Bubendorff para viviendas de nueva construcción. Instalación y reparación el mismo día.`,
  h1: `Persianistas en<br/><span style='color:#fb923c'>Parque Loranca, Móstoles</span>`,
  h2: `Reparación e Instalación de Persianas en Parque Loranca`,
  descripcionHero: `Parque Loranca es uno de los barrios más modernos de Móstoles, con viviendas de nueva construcción donde las persianas motorizadas y los sistemas de automatización son muy habituales. Somos especialistas en motores Somfy, Nice y Bubendorff en Parque Loranca.`,
  trabajos: "185+",
  descripcion: "Parque Loranca es una de las urbanizaciones más modernas y bien equipadas de Móstoles, con bloques de pisos de construcción de los años 2000 y 2010 que disponen de amplias zonas verdes y buenas comunicaciones. Las persianas aquí son modernas, con cajón exterior de aluminio anodizado y alta demanda de motorización e integración con sistemas de domótica. La calidad constructiva de las viviendas de Parque Loranca hace que las persianas sean también de mayor calidad, aunque igualmente requieren mantenimiento y reparación. Nuestros persianistas en Parque Loranca están especializados en instalaciones modernas y sistemas motorizados.",
  calles: [
    "C/ Loranca",
    "Avda. de Loranca",
    "C/ Parque de Loranca",
    "C/ Jardín de Loranca",
    "C/ Alameda de Loranca",
    "C/ Bosque de Loranca",
    "C/ Arboleda",
    "C/ Pradera de Loranca"
  ],
  testimonios: [
    {
      nombre: "Sandra Fuentes",
      zona: "C/ Loranca, Parque Loranca",
      texto: "Instalaron persianas motorizadas con motor Somfy en toda la vivienda. Trabajo muy profesional, materiales de primera calidad y el resultado es perfecto. El técnico fue muy cuidadoso y dejó todo impecable. Muy recomendables.",
      servicio: "Instalación motorizada Somfy",
      fecha: "Hace 2 semanas"
    },
    {
      nombre: "Javier Reyes",
      zona: "Avda. de Loranca",
      texto: "La persiana del dormitorio no subía bien desde hacía meses. Llamé y en 55 minutos llegó el técnico. Diagnosticó el problema (cinta desgastada y recogedor flojo) y lo solucionó en media hora. Precio muy justo.",
      servicio: "Cambio de cinta y recogedor",
      fecha: "Hace 1 mes"
    },
    {
      nombre: "Mónica Vidal",
      zona: "C/ Parque de Loranca",
      texto: "Cambio de cinta en tres persianas del piso. Trabajo rápido, limpio y con garantía. El técnico fue muy amable, explicó qué tipo de cinta usaba y por qué dura más. Muy profesional.",
      servicio: "Cambio de cinta reforzada",
      fecha: "Hace 5 semanas"
    },
    {
      nombre: "Óscar Delgado",
      zona: "C/ Jardín de Loranca",
      texto: "Integré las persianas con mi sistema de domótica. El técnico tenía experiencia con integraciones y configuró todo perfectamente. Ahora controlo todas las persianas desde el móvil y con el asistente de voz. Excelente servicio.",
      servicio: "Domótica integrada",
      fecha: "Hace 2 meses"
    },
  ],
  faqs: [
    {
      pregunta: "¿Cuánto tarda un persianista en llegar a Parque Loranca?",
      respuesta: "Normalmente entre 45 y 60 minutos desde la llamada. Cubrimos toda la urbanización de Parque Loranca con técnicos especializados en instalaciones modernas."
    },
    {
      pregunta: "¿Instaláis persianas motorizadas en Parque Loranca?",
      respuesta: "Sí, somos especialistas en instalación de persianas motorizadas con Somfy, Nice y Faac. Podemos instalar motores nuevos o sustituir los existentes con garantía de 12 meses."
    },
    {
      pregunta: "¿Cuánto cuesta la motorización en Parque Loranca?",
      respuesta: "La motorización de persianas es desde 290 €. El presupuesto se concreta según la persiana y el sistema elegido."
    },
    {
      pregunta: "¿Podéis integrar las persianas con domótica en Parque Loranca?",
      respuesta: "Sí, integramos persianas con sistemas domóticos y plataformas como Alexa, Google Home y Apple HomeKit. Tenemos técnicos especializados en integración domótica."
    },
    {
      pregunta: "¿Tenéis garantía en los trabajos de Parque Loranca?",
      respuesta: "Todos nuestros trabajos tienen garantía de 12 meses en mano de obra y materiales. Si algo falla dentro del período de garantía, volvemos sin coste adicional."
    },
  ],
  averias: [
    { icon: "⚡", titulo: "Motorización Somfy y Nice", desc: "Automatizamos persianas con los mejores motores del mercado. Instalación sin obras en 1-2 horas." },
    { icon: "📱", titulo: "Domótica integrada", desc: "Integración con Alexa, Google Home y Apple HomeKit para control inteligente." },
    { icon: "🏠", titulo: "Instalación nueva", desc: "Instalamos persianas de aluminio anodizado de alta calidad en 24-48 horas." },
    { icon: "📏", titulo: "Cinta rota", desc: "Cambio de cinta reforzada en todos los anchos y colores. Larga duración garantizada." },
    { icon: "🔧", titulo: "Recogedor desgastado", desc: "Cambio rápido con recambio original compatible. Trabajo en 20 minutos con garantía." },
    { icon: "🛠️", titulo: "Mantenimiento preventivo", desc: "Revisión y ajuste preventivo para alargar la vida de las persianas modernas." },
  ],
};

export default function PaqueLoranca() {
  return <BarrioPage data={data} />;
}

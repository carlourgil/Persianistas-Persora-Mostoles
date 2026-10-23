import BarrioPage, { BarrioData } from "@/components/BarrioPage";

export const data: BarrioData = {
  nombre: "Móstoles Sur",
  slug: "/mostoles/mostoles-sur",
  seoTitle: `Persianistas Móstoles Sur | Persianas Eléctricas y Domótica`,
  seoDesc: `Persianistas en Móstoles Sur. Especialistas en persianas motorizadas y domótica en viviendas de nueva construcción. Reparación e instalación el mismo día. Presupuesto gratis.`,
  h1: `Persianistas en<br/><span style='color:#fb923c'>Móstoles Sur</span> · Servicio 24h`,
  h2: `Reparación de Persianas en Móstoles Sur — Disponibles Ahora`,
  descripcionHero: `Móstoles Sur es una zona en expansión con viviendas de nueva construcción donde las persianas motorizadas y los sistemas de domótica son cada vez más comunes. Somos especialistas en persianas eléctricas y motores de última generación en Móstoles Sur.`,
  trabajos: "195+",
  descripcion: "Móstoles Sur es una de las zonas de expansión más reciente de la ciudad, con urbanizaciones de nueva construcción y viviendas de los años 2000 en adelante. Las persianas aquí son modernas, con cajón exterior de aluminio anodizado y alta demanda de motorización e integración domótica desde el primer día. Muchas viviendas de Móstoles Sur ya cuentan con preinstalación para motor, lo que facilita enormemente la automatización. Nuestros persianistas en Móstoles Sur están especializados en instalaciones nuevas, motorización con Somfy y Nice, y domótica integrada con asistentes de voz. También atendemos urgencias de reparación con tiempo de respuesta inferior a 60 minutos.",
  calles: [
    "Avda. del Sur",
    "C/ Pradillo Sur",
    "C/ Horizonte",
    "C/ Progreso",
    "C/ Nueva Expansión",
    "C/ Arroyo del Sur",
    "C/ Vega del Sur",
    "C/ Camino del Sur"
  ],
  testimonios: [
    {
      nombre: "Laura Medina",
      zona: "Avda. del Sur, Móstoles Sur",
      texto: "Compramos casa nueva en Móstoles Sur y quisimos motorizar todas las persianas desde el principio. Instalaron 6 motores Somfy en un solo día. La casa ya tenía preinstalación, así que fue todo muy rápido. Trabajo impecable y trato muy profesional.",
      servicio: "Motorización completa Somfy",
      fecha: "Hace 2 semanas"
    },
    {
      nombre: "Diego Romero",
      zona: "C/ Pradillo Sur, Móstoles Sur",
      texto: "La persiana del garaje no cerraba bien y se quedaba enganchada a mitad de recorrido. Llegaron en 55 minutos, ajustaron las guías y cambiaron el cable de acero. Desde entonces funciona perfectamente. Muy recomendables.",
      servicio: "Reparación de garaje",
      fecha: "Hace 1 mes"
    },
    {
      nombre: "Nuria Campos",
      zona: "C/ Horizonte, Móstoles Sur",
      texto: "Instalación de persianas nuevas de aluminio en toda la vivienda. Vinieron a medir, me dieron varias opciones de colores y acabados, y el montaje fue perfecto. Presupuesto muy competitivo y materiales de primera calidad.",
      servicio: "Instalación completa",
      fecha: "Hace 6 semanas"
    },
    {
      nombre: "Álvaro Serrano",
      zona: "C/ Vega del Sur, Móstoles Sur",
      texto: "Integré las persianas con mi sistema domótico KNX. El técnico tenía experiencia con este tipo de integraciones y lo configuró todo perfectamente. Ahora controlo las persianas con Alexa, Google Home y desde el móvil.",
      servicio: "Domótica KNX integrada",
      fecha: "Hace 2 meses"
    },
  ],
  faqs: [
    {
      pregunta: "¿Cuánto tarda un persianista en llegar a Móstoles Sur?",
      respuesta: "Normalmente entre 45 y 60 minutos desde la llamada. Cubrimos toda la zona sur de Móstoles con técnicos especializados en instalaciones modernas y motorización."
    },
    {
      pregunta: "¿Las viviendas de Móstoles Sur tienen preinstalación para motor?",
      respuesta: "Muchas viviendas de nueva construcción en Móstoles Sur ya cuentan con preinstalación eléctrica en los cajones de persiana, lo que facilita y abarata la instalación de motores. Revisamos la preinstalación gratuitamente antes de presupuestar."
    },
    {
      pregunta: "¿Podéis integrar las persianas con domótica en Móstoles Sur?",
      respuesta: "Sí, integramos persianas con sistemas domóticos KNX, Zigbee, Z-Wave y plataformas como Alexa, Google Home y Apple HomeKit. Tenemos técnicos especializados en integración domótica."
    },
    {
      pregunta: "¿Cuánto cuesta motorizar una persiana en Móstoles Sur?",
      respuesta: "La motorización de persianas es desde 290 €. El presupuesto se concreta según la persiana y el sistema elegido."
    },
    {
      pregunta: "¿Tenéis garantía en los trabajos de Móstoles Sur?",
      respuesta: "Todos nuestros trabajos tienen garantía de 12 meses en mano de obra y materiales. Si algo falla dentro del período de garantía, volvemos sin coste adicional."
    },
  ],
  averias: [
    { icon: "⚡", titulo: "Motorización Somfy y Nice", desc: "Automatizamos persianas con los mejores motores del mercado. Aprovechamos la preinstalación existente." },
    { icon: "📱", titulo: "Domótica integrada", desc: "Integración con KNX, Zigbee, Alexa, Google Home y Apple HomeKit." },
    { icon: "🏠", titulo: "Instalación nueva", desc: "Instalamos persianas de aluminio anodizado de alta calidad en 24-48 horas." },
    { icon: "🚗", titulo: "Persiana de garaje", desc: "Instalación y reparación de persianas de garaje enrollables y seccionales." },
    { icon: "🔧", titulo: "Reparación urgente", desc: "Atendemos cualquier avería en menos de 60 minutos en toda la zona sur." },
    { icon: "🛠️", titulo: "Mantenimiento preventivo", desc: "Revisión y ajuste completo para alargar la vida de las persianas modernas." },
  ],
};

export default function MostolesSur() {
  return <BarrioPage data={data} />;
}

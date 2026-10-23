import BarrioPage, { BarrioData } from "@/components/BarrioPage";

export const data: BarrioData = {
  nombre: "El Pinar",
  slug: "/mostoles/el-pinar",
  seoTitle: `Persianistas El Pinar, Móstoles | Chalets y Adosados · 24h`,
  seoDesc: `Persianistas en El Pinar (Móstoles). Especialistas en persianas de madera, PVC y seguridad para chalets y adosados. Reparamos todas las marcas. Garantía 12 meses.`,
  h1: `Persianistas en<br/><span style='color:#fb923c'>El Pinar, Móstoles</span> · Garantía 12 Meses`,
  h2: `Arreglo de Persianas en El Pinar — Reparamos Todas las Marcas`,
  descripcionHero: `El Pinar es una urbanización residencial con predominio de chalets y adosados donde las persianas de madera y PVC son frecuentes. Reparamos e instalamos todo tipo de persianas en El Pinar, incluyendo persianas de seguridad y sistemas de motorización.`,
  trabajos: "175+",
  descripcion: "El Pinar es una urbanización residencial de Móstoles con predominio de viviendas unifamiliares y chalets adosados, caracterizada por sus amplias parcelas y jardines. Las persianas aquí son principalmente de aluminio con cajón exterior y guías de gran tamaño, propias de ventanas amplias y puertas de terraza. Es frecuente la demanda de motorización para persianas de gran formato y de persianas de seguridad para accesos a planta baja. Nuestros persianistas en El Pinar ofrecen servicio urgente el mismo día y están especializados en persianas de gran formato y sistemas de seguridad.",
  calles: [
    "C/ Pino",
    "C/ Pinar",
    "C/ Abeto",
    "Avda. del Pinar",
    "C/ Roble",
    "C/ Encina",
    "C/ Cedro",
    "C/ Ciprés"
  ],
  testimonios: [
    {
      nombre: "Gonzalo Peña",
      zona: "C/ Pino, El Pinar",
      texto: "Instalaron persianas de seguridad en la planta baja del chalet para proteger las ventanas del jardín. Trabajo muy profesional, materiales de alta resistencia y precio competitivo. Ahora dormimos mucho más tranquilos.",
      servicio: "Persianas de seguridad planta baja",
      fecha: "Hace 1 semana"
    },
    {
      nombre: "Cristina Leal",
      zona: "Avda. del Pinar",
      texto: "Motorización de 4 persianas grandes del salón y la terraza. El técnico fue muy profesional y me explicó las diferencias entre los motores para persianas de gran formato. El resultado es perfecto y ahora las controlo desde el móvil.",
      servicio: "Motorización persianas grandes",
      fecha: "Hace 3 semanas"
    },
    {
      nombre: "Héctor Mora",
      zona: "C/ Abeto, El Pinar",
      texto: "El cable de la persiana del garaje se rompió de golpe y el portón quedó completamente bloqueado. Llegaron en 55 minutos, cambiaron el cable de acero y ajustaron todo el mecanismo. Muy eficientes y con garantía incluida.",
      servicio: "Cambio de cable de garaje",
      fecha: "Hace 1 mes"
    },
    {
      nombre: "Pilar Aguilar",
      zona: "C/ Roble, El Pinar",
      texto: "Instalación completa de persianas nuevas en toda la casa. Vinieron a medir, me dieron un presupuesto muy detallado con diferentes opciones de materiales, y el montaje fue impecable. Muy contentos con el resultado final.",
      servicio: "Instalación completa en chalet",
      fecha: "Hace 2 meses"
    },
  ],
  faqs: [
    {
      pregunta: "¿Cuánto tarda un persianista en llegar a El Pinar?",
      respuesta: "Normalmente menos de 60 minutos. Cubrimos toda la urbanización de El Pinar con técnicos especializados en persianas de gran formato propias de chalets y viviendas unifamiliares."
    },
    {
      pregunta: "¿Instaláis persianas de seguridad en El Pinar?",
      respuesta: "Sí, somos especialistas en persianas de seguridad para viviendas unifamiliares y chalets. Instalamos persianas con lamas de acero reforzado para proteger ventanas y accesos de planta baja."
    },
    {
      pregunta: "¿Motorizáis persianas de gran formato en El Pinar?",
      respuesta: "Sí, tenemos experiencia con persianas de gran formato que requieren motores de mayor potencia. Trabajamos con Somfy, Nice y Faac, seleccionando el motor adecuado según el peso y tamaño de cada persiana."
    },
    {
      pregunta: "¿Cuánto cuesta reparar una persiana de garaje en El Pinar?",
      respuesta: "La reparación de persianas es desde 75 €. Consúltanos para valorar la avería y concretar el trabajo antes de empezar."
    },
    {
      pregunta: "¿Tenéis garantía en los trabajos de El Pinar?",
      respuesta: "Todos nuestros trabajos tienen garantía de 12 meses en mano de obra y materiales. Si algo falla dentro del período de garantía, volvemos sin coste adicional."
    },
  ],
  averias: [
    { icon: "🔒", titulo: "Persiana de seguridad", desc: "Instalación y reparación de persianas de seguridad con lamas de acero para chalets y planta baja." },
    { icon: "⚡", titulo: "Motor para gran formato", desc: "Motores de alta potencia Somfy y Nice para persianas de gran tamaño en viviendas unifamiliares." },
    { icon: "🔧", titulo: "Cable de garaje roto", desc: "Cambiamos cables de acero en persianas de garaje de todos los tamaños con garantía." },
    { icon: "🚗", titulo: "Persiana de garaje", desc: "Reparamos e instalamos persianas de garaje enrollables y seccionales en chalets y adosados." },
    { icon: "🔩", titulo: "Lamas rotas en gran formato", desc: "Sustituimos lamas en persianas de gran formato sin necesidad de cambiar toda la persiana." },
    { icon: "🛠️", titulo: "Mantenimiento anual", desc: "Revisión y engrase de mecanismos en persianas de gran tamaño para alargar su vida útil." },
  ],
};

export default function ElPinar() {
  return <BarrioPage data={data} />;
}

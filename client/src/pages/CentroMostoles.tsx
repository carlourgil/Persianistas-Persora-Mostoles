import BarrioPage, { BarrioData } from "@/components/BarrioPage";

export const data: BarrioData = {
  nombre: "Centro de Móstoles",
  slug: "/mostoles/centro",
  seoTitle: `Persianistas Centro Móstoles | Reparación 24h · Locales y Pisos`,
  seoDesc: `Persianistas en el Centro de Móstoles. Atendemos viviendas, locales comerciales y comunidades. Técnico en menos de 45 minutos. Disponibles 24h, 7 días. Presupuesto gratis.`,
  h1: `Persianistas en el<br/><span style='color:#fb923c'>Centro de Móstoles</span> · 24 Horas`,
  h2: `Reparación Urgente de Persianas en el Centro de Móstoles`,
  descripcionHero: `En el Centro de Móstoles atendemos tanto viviendas particulares como locales comerciales y comunidades de vecinos. Disponibles las 24 horas, los 7 días de la semana. Técnico en tu puerta en menos de 45 minutos.`,
  trabajos: "580+",
  descripcion: "El Centro de Móstoles concentra la mayor densidad de viviendas y comercios de toda la ciudad, con edificios de distintas épocas que van desde los años 60 hasta las construcciones más recientes. Esta diversidad hace que las persianas del Centro sean también muy variadas: desde las antiguas persianas de madera pintada hasta las modernas persianas de PVC con motorización domótica. Nuestros persianistas en el Centro de Móstoles son los que más intervenciones acumulan en la ciudad, con más de 580 trabajos realizados en esta zona. Atendemos urgencias en menos de 45 minutos, trabajamos en comunidades de vecinos, locales comerciales y viviendas particulares.",
  calles: [
    "C/ Mayorazgo",
    "C/ Ávila",
    "Plaza de España",
    "C/ Pradillo",
    "Avda. de Portugal",
    "C/ Dos de Mayo",
    "C/ Doctor Severo Ochoa",
    "C/ Ramón y Cajal",
    "C/ Jacinto Benavente",
    "Avda. de Extremadura"
  ],
  testimonios: [
    {
      nombre: "Antonio López",
      zona: "C/ Mayorazgo, Centro de Móstoles",
      texto: "Tenía tres persianas averiadas en el local comercial y necesitaba solución urgente antes de abrir. Llamé a las 7:30 y a las 8:45 ya estaban arregladas. Servicio impecable, rápido y con precio muy competitivo para ser urgente.",
      servicio: "Reparación urgente en local comercial",
      fecha: "Hace 4 días"
    },
    {
      nombre: "María Fernández",
      zona: "Plaza de España, Centro de Móstoles",
      texto: "Vivo en un piso antiguo con persianas de madera que nadie quería tocar. Estos chicos las revisaron, cambiaron las piezas dañadas y las dejaron como nuevas. Muy contentos con el resultado y con el trato recibido.",
      servicio: "Reparación persianas antiguas de madera",
      fecha: "Hace 2 semanas"
    },
    {
      nombre: "Pedro Martínez",
      zona: "Avda. de Portugal, Centro de Móstoles",
      texto: "Gestioné la reparación de 8 persianas de la comunidad de vecinos. Vinieron puntualmente, hicieron un presupuesto detallado por cada piso y terminaron todo en un día. La presidenta de la comunidad quedó encantada.",
      servicio: "Reparación en comunidad de vecinos",
      fecha: "Hace 1 mes"
    },
    {
      nombre: "Laura Jiménez",
      zona: "C/ Dos de Mayo, Centro de Móstoles",
      texto: "Instalé persianas nuevas en toda la reforma del piso. Me asesoraron sobre el mejor modelo para cada habitación, el precio fue muy ajustado y la instalación perfecta. Muy recomendables.",
      servicio: "Instalación completa en reforma",
      fecha: "Hace 6 semanas"
    },
  ],
  faqs: [
    {
      pregunta: "¿Cuánto tarda un persianista en llegar al Centro de Móstoles?",
      respuesta: "Al ser la zona central de Móstoles, nuestros técnicos suelen llegar en menos de 45 minutos. Es nuestra zona de mayor actividad y siempre tenemos técnicos disponibles cerca."
    },
    {
      pregunta: "¿Reparáis persianas en locales comerciales del Centro?",
      respuesta: "Sí, atendemos tanto viviendas particulares como locales comerciales, oficinas y comunidades de vecinos. Para locales, ofrecemos horario de urgencia antes de la apertura del negocio."
    },
    {
      pregunta: "¿Podéis reparar persianas antiguas de madera en el Centro?",
      respuesta: "Sí, tenemos experiencia con persianas de madera de los edificios más antiguos del Centro de Móstoles. Reparamos o sustituimos las piezas dañadas manteniendo el sistema original siempre que sea posible."
    },
    {
      pregunta: "¿Hacéis presupuestos para comunidades de vecinos en el Centro?",
      respuesta: "Sí, ofrecemos presupuestos detallados para comunidades de vecinos con descuento por volumen. Coordinamos con el administrador de fincas y realizamos todos los trabajos en una sola visita."
    },
    {
      pregunta: "¿Cuánto cuesta cambiar una persiana completa en el Centro de Móstoles?",
      respuesta: "La instalación de persianas es desde 170 €. El presupuesto se concreta según las medidas, el material y el trabajo necesario."
    },
  ],
  averias: [
    { icon: "🔧", titulo: "Recogedor roto", desc: "Muy frecuente en los edificios más antiguos del Centro. Cambiamos el recogedor en 20 minutos con recambio original." },
    { icon: "📏", titulo: "Cinta rota o desgastada", desc: "Sustituimos cintas de todos los anchos y colores. Usamos cinta reforzada de mayor durabilidad para evitar roturas." },
    { icon: "🚪", titulo: "Persiana atascada", desc: "Desbloqueamos persianas atascadas por deformación de guías, acumulación de suciedad o rotura de lamas." },
    { icon: "🔩", titulo: "Lamas rotas o dobladas", desc: "Cambiamos lamas sueltas sin necesidad de sustituir toda la persiana, ahorrando hasta un 70% del coste." },
    { icon: "⚡", titulo: "Motor sin respuesta", desc: "Reparamos motores eléctricos de todas las marcas. También reprogramamos mandos a distancia y receptores." },
    { icon: "🏢", titulo: "Persianas de seguridad", desc: "Instalamos y reparamos persianas de seguridad para locales comerciales con cierre automático." },
  ],
};

export default function CentroMostoles() {
  return <BarrioPage data={data} />;
}

import BarrioPage, { BarrioData } from "@/components/BarrioPage";

export const data: BarrioData = {
  nombre: "Los Rosales",
  slug: "/mostoles/los-rosales",
  seoTitle: `Persianistas Los Rosales, Móstoles | +15 Años de Confianza`,
  seoDesc: `Persianistas en Los Rosales (Móstoles). Más de 15 años reparando persianas en el barrio. Recogedor, cinta, lamas y eje. Mismo día garantizado. Presupuesto gratuito.`,
  h1: `Tu Persianista de Confianza en<br/><span style='color:#fb923c'>Los Rosales, Móstoles</span>`,
  h2: `Reparación de Persianas en Los Rosales — Mismo Día Garantizado`,
  descripcionHero: `Los Rosales es un barrio tranquilo con predominio de bloques de pisos de mediana altura. Llevamos más de 15 años reparando persianas en Los Rosales y conocemos los modelos más habituales de la zona. Presupuesto gratuito sin desplazamiento.`,
  trabajos: "245+",
  descripcion: "Los Rosales es una de las urbanizaciones más tranquilas y bien cuidadas de Móstoles, con viviendas unifamiliares adosadas y bloques de pisos de baja altura construidos mayoritariamente en los años 90 y 2000. En esta zona predominan las persianas de PVC de alta calidad con cajón exterior y sistemas de motorización, siendo muy habitual la demanda de automatización y mantenimiento preventivo. Nuestros persianistas en Los Rosales ofrecen un servicio personalizado y cuidadoso, adaptado al tipo de vivienda de la zona, con presupuesto gratuito y garantía de 12 meses en todos los trabajos.",
  calles: ["C/ Rosa de Alejandría", "C/ Rosa de los Vientos", "C/ Rosal", "C/ Rosaleda", "Avda. de los Rosales", "C/ Flor de Lis", "C/ Azalea", "C/ Magnolia"],
  testimonios: [
    {
      nombre: "Cristina López",
      zona: "C/ Rosa de Alejandría, Los Rosales",
      texto: "Vivo en un adosado y tenía la persiana del garaje con el motor averiado. Vinieron a las pocas horas de llamar, diagnosticaron el problema (motor quemado) y lo sustituyeron por uno nuevo de la misma marca. Todo en una sola visita. Excelente servicio.",
      servicio: "Sustitución de motor de garaje",
      fecha: "Hace 5 días"
    },
    {
      nombre: "Alejandro Martín",
      zona: "Avda. de los Rosales",
      texto: "Motoricé las cuatro persianas del salón y el dormitorio principal. El técnico fue muy profesional, me explicó las diferencias entre los distintos motores y me recomendó el más adecuado para mi tipo de persiana. El resultado es perfecto.",
      servicio: "Motorización completa",
      fecha: "Hace 2 semanas"
    },
    {
      nombre: "Marta González",
      zona: "C/ Rosal, Los Rosales",
      texto: "La persiana de la terraza no subía bien y hacía un ruido horrible. La revisaron, cambiaron las guías y lubricaron todo el mecanismo. Ahora sube y baja en silencio. Muy contentos con el trabajo y con el precio.",
      servicio: "Reparación y mantenimiento",
      fecha: "Hace 1 mes"
    },
    {
      nombre: "Raúl Hernández",
      zona: "C/ Rosaleda, Los Rosales",
      texto: "Instalaron persianas nuevas de PVC en toda la reforma de la casa. Vinieron a medir, me dieron varias opciones de colores y materiales, y la instalación fue perfecta. El precio fue muy competitivo comparado con otros presupuestos.",
      servicio: "Instalación de persianas en reforma",
      fecha: "Hace 6 semanas"
    },
  ],
  faqs: [
    {
      pregunta: "¿Cuánto tarda un persianista en llegar a Los Rosales?",
      respuesta: "Normalmente entre 45 y 60 minutos desde la llamada. Los Rosales está bien comunicada con el resto de Móstoles y nuestros técnicos conocen perfectamente la distribución de la urbanización."
    },
    {
      pregunta: "¿Reparáis persianas de garaje en Los Rosales?",
      respuesta: "Sí, reparamos y sustituimos motores de persianas de garaje de todas las marcas. También instalamos nuevas persianas de garaje enrollables y seccionales en adosados y viviendas unifamiliares."
    },
    {
      pregunta: "¿Podéis motorizar persianas en adosados de Los Rosales?",
      respuesta: "Sí, es uno de los servicios más demandados en Los Rosales. Instalamos motores tubulares en persianas manuales de adosados sin necesidad de obras. Trabajamos con Somfy, Nice y Faac."
    },
    {
      pregunta: "¿Hacéis mantenimiento preventivo en Los Rosales?",
      respuesta: "Sí, ofrecemos revisiones periódicas de mantenimiento preventivo para alargar la vida útil de las persianas. Incluye limpieza, lubricación, ajuste de guías y revisión del mecanismo completo."
    },
    {
      pregunta: "¿Cuánto cuesta reparar una persiana en Los Rosales?",
      respuesta: "La reparación de persianas es desde 75 €. Consúltanos para valorar la avería y concretar el trabajo antes de empezar."
    },
  ],
  averias: [
    { icon: "🚗", titulo: "Motor de garaje averiado", desc: "Reparamos y sustituimos motores de garaje de todas las marcas en adosados y viviendas unifamiliares." },
    { icon: "⚡", titulo: "Motorización nueva", desc: "Instalamos motores Somfy, Nice y Faac en persianas manuales. Sin obras, en 1-2 horas por persiana." },
    { icon: "🛠️", titulo: "Guías ruidosas", desc: "Ajustamos y lubricamos guías para un deslizamiento suave y completamente silencioso." },
    { icon: "🔧", titulo: "Recogedor desgastado", desc: "Cambiamos recogedores en 20 minutos con recambio original compatible con todos los modelos." },
    { icon: "📏", titulo: "Cinta rota", desc: "Sustituimos cintas de todos los anchos. Usamos cinta reforzada de larga duración." },
    { icon: "🔩", titulo: "Lamas rotas", desc: "Cambiamos lamas sueltas sin necesidad de sustituir toda la persiana." },
  ],
};

export default function LosRosales() {
  return <BarrioPage data={data} />;
}

import BarrioPage, { BarrioData } from "@/components/BarrioPage";

export const data: BarrioData = {
  nombre: "Pradillo",
  slug: "/mostoles/pradillo",
  seoTitle: `Persianistas en Pradillo, Móstoles | Reparación Mismo Día`,
  seoDesc: `Persianistas en Pradillo (Móstoles). Reparamos persianas antiguas y sistemas motorizados modernos. Diagnóstico gratuito. Técnico en menos de 60 minutos. Garantía 12 meses.`,
  h1: `Reparación de Persianas en<br/><span style='color:#fb923c'>Pradillo, Móstoles</span>`,
  h2: `Persianistas en Pradillo — Presupuesto Gratuito al Instante`,
  descripcionHero: `El barrio de Pradillo combina viviendas de los años 90 con promociones más recientes. Nuestros persianistas en Pradillo atienden tanto persianas de aluminio antiguas como sistemas motorizados modernos. Diagnóstico gratuito y reparación el mismo día.`,
  trabajos: "220+",
  descripcion: "Pradillo es un barrio céntrico de Móstoles con edificios de construcción de los años 80 y 90, situado muy cerca del corazón de la ciudad. Es una zona con alta densidad de viviendas donde las persianas de aluminio con cajón empotrado son las más habituales. La proximidad al centro de Móstoles nos permite ofrecer tiempos de respuesta muy cortos: normalmente menos de 45 minutos. Nuestros persianistas en Pradillo atienden principalmente averías de cinta, recogedor y lamas, aunque también realizamos instalaciones nuevas y motorizaciones. Más de 220 trabajos realizados en este barrio avalan nuestra experiencia.",
  calles: [
    "C/ Pradillo",
    "C/ Prado",
    "C/ Pradera",
    "Avda. del Pradillo",
    "C/ Camino del Pradillo",
    "C/ Fuente del Pradillo",
    "C/ Arroyo del Pradillo",
    "C/ Verde"
  ],
  testimonios: [
    {
      nombre: "Consuelo Vargas",
      zona: "C/ Pradillo, Pradillo",
      texto: "Rapidísimos. Llamé a las 11 de la mañana con la persiana del salón completamente bloqueada y a las 11:50 ya estaba el técnico. Cambió la cinta y el recogedor en 25 minutos. Precio muy justo y trato excelente.",
      servicio: "Cambio de cinta y recogedor",
      fecha: "Hace 3 días"
    },
    {
      nombre: "Emilio Castro",
      zona: "Avda. del Pradillo",
      texto: "Llevaba semanas con la persiana del dormitorio atascada a media altura. El técnico llegó, identificó el problema (guías desajustadas por humedad), las corrigió y ajustó el eje. Explicó todo muy bien y el precio fue muy razonable.",
      servicio: "Reparación de guías y eje",
      fecha: "Hace 2 semanas"
    },
    {
      nombre: "Amparo Rubio",
      zona: "C/ Prado, Pradillo",
      texto: "Instalaron una persiana nueva de aluminio en la terraza. Vinieron a medir, me dieron el presupuesto en el momento y en dos días la tenía instalada. Trabajo impecable, recogieron todos los restos y el resultado es perfecto.",
      servicio: "Instalación persiana nueva",
      fecha: "Hace 1 mes"
    },
    {
      nombre: "Víctor Soria",
      zona: "C/ Pradera, Pradillo",
      texto: "Cambiaron las lamas rotas de dos persianas. Trabajo impecable, con recambios originales del mismo color y garantía incluida. No fue necesario cambiar toda la persiana, lo que me ahorró bastante dinero.",
      servicio: "Cambio de lamas",
      fecha: "Hace 5 semanas"
    },
  ],
  faqs: [
    {
      pregunta: "¿Cuánto tarda un persianista en llegar a Pradillo?",
      respuesta: "Al ser un barrio muy céntrico de Móstoles, normalmente llegamos en menos de 45 minutos desde la llamada. Es una de nuestras zonas de mayor cobertura y siempre tenemos técnicos disponibles cerca."
    },
    {
      pregunta: "¿Cuál es la avería más frecuente en las persianas de Pradillo?",
      respuesta: "En Pradillo, la avería más habitual es la rotura de la cinta y el desgaste del recogedor, especialmente en los edificios de los años 80 y 90. También son frecuentes las guías desajustadas por la humedad del barrio."
    },
    {
      pregunta: "¿Cuánto cuesta cambiar la cinta de una persiana en Pradillo?",
      respuesta: "La reparación de persianas es desde 75 €. Consúltanos para valorar la avería y concretar el trabajo antes de empezar."
    },
    {
      pregunta: "¿Reparáis persianas de aluminio antiguas en Pradillo?",
      respuesta: "Sí, somos especialistas en persianas de aluminio de los años 80 y 90, que son las más habituales en Pradillo. Tenemos recambios para todos los modelos y marcas de esa época."
    },
    {
      pregunta: "¿Tenéis garantía en las reparaciones en Pradillo?",
      respuesta: "Todos nuestros trabajos tienen garantía de 12 meses en mano de obra y materiales. Si algo falla dentro del período de garantía, volvemos sin coste adicional."
    },
  ],
  averias: [
    { icon: "📏", titulo: "Cinta rota", desc: "La avería más frecuente en Pradillo. Cambio en 20 minutos con cinta reforzada de larga duración." },
    { icon: "🔧", titulo: "Recogedor desgastado", desc: "Sustituimos recogedores con recambio original compatible. Trabajo en 20 minutos con garantía." },
    { icon: "🔩", titulo: "Lamas rotas o dobladas", desc: "Cambiamos lamas sueltas sin sustituir toda la persiana, ahorrando hasta un 70% del coste." },
    { icon: "🛠️", titulo: "Guías desajustadas", desc: "Ajustamos guías de aluminio afectadas por humedad para un deslizamiento perfecto y silencioso." },
    { icon: "⚙️", titulo: "Eje partido o bloqueado", desc: "Reparamos ejes de aluminio y PVC de todos los tamaños en los edificios más antiguos de Pradillo." },
    { icon: "⚡", titulo: "Motorización", desc: "Instalamos motores tubulares en persianas manuales. Sin obras, en 1-2 horas por persiana." },
  ],
};

export default function Pradillo() {
  return <BarrioPage data={data} />;
}

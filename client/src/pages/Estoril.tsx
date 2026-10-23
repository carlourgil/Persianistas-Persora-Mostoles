import BarrioPage, { BarrioData } from "@/components/BarrioPage";

export const data: BarrioData = {
  nombre: "Estoril",
  slug: "/mostoles/estoril",
  seoTitle: `Persianistas en Estoril, Móstoles | Motorización y Reparación`,
  seoDesc: `Persianistas en Estoril I y II (Móstoles). Especialistas en motorización Somfy y Nice. Reparación urgente de persianas el mismo día. Presupuesto gratuito. Garantía 12 meses.`,
  h1: `Persianistas en<br/><span style='color:#fb923c'>Estoril, Móstoles</span> · Sin Esperas`,
  h2: `Reparación y Motorización de Persianas en Estoril I y II`,
  descripcionHero: `Estoril I y II son urbanizaciones modernas donde la motorización de persianas es cada vez más demandada. Instalamos motores Somfy y Nice en un día. También reparamos cualquier avería urgente en Estoril con garantía de 12 meses.`,
  trabajos: "275+",
  descripcion: "Estoril I y Estoril II son dos urbanizaciones residenciales de Móstoles caracterizadas por bloques de pisos de altura media construidos en los años 80 y 90, donde predominan las persianas de aluminio con cajón empotrado. La exposición solar de esta zona, especialmente en las orientaciones sur y oeste, provoca un desgaste acelerado de las cintas y los mecanismos de recogida. Nuestros persianistas en Estoril conocen perfectamente las características de estas persianas y ofrecen soluciones rápidas y duraderas. Cubrimos toda la urbanización con el mismo tiempo de respuesta garantizado: menos de 60 minutos desde la llamada.",
  calles: [
    "C/ Estoril",
    "C/ Cascais",
    "C/ Faro",
    "C/ Coímbra",
    "Avda. de Lisboa",
    "C/ Setúbal",
    "C/ Évora",
    "C/ Braga"
  ],
  testimonios: [
    {
      nombre: "Fernando García",
      zona: "C/ Estoril, Estoril I",
      texto: "Persiana del salón completamente bloqueada en pleno verano. Llamé a mediodía y en menos de una hora tenía al técnico. Cambió el eje y ajustó las guías. Ahora funciona perfectamente y sin ruido. Precio muy justo.",
      servicio: "Reparación de eje y guías",
      fecha: "Hace 1 semana"
    },
    {
      nombre: "Carmen Rodríguez",
      zona: "C/ Cascais, Estoril II",
      texto: "Llevaba tiempo con la cinta de la persiana del dormitorio muy deteriorada. La cambiaron en 15 minutos y de paso revisaron el recogedor sin coste adicional. Muy atentos y profesionales.",
      servicio: "Cambio de cinta y revisión",
      fecha: "Hace 3 semanas"
    },
    {
      nombre: "Javier Morales",
      zona: "Avda. de Lisboa, Estoril I",
      texto: "Motoricé las persianas de la habitación principal y el salón con motor Nice. El técnico me explicó todas las opciones y me recomendó la mejor para mi tipo de persiana. Instalación en un día, sin obras.",
      servicio: "Motorización Nice",
      fecha: "Hace 5 semanas"
    },
    {
      nombre: "Pilar Sánchez",
      zona: "C/ Faro, Estoril II",
      texto: "Tres lamas de la persiana de la cocina estaban rotas desde hacía meses. Las cambiaron por lamas nuevas del mismo color y quedó perfecta. No fue necesario cambiar toda la persiana, lo que me ahorró mucho dinero.",
      servicio: "Sustitución de lamas",
      fecha: "Hace 2 meses"
    },
  ],
  faqs: [
    {
      pregunta: "¿Cuánto tarda un persianista en llegar a Estoril?",
      respuesta: "Normalmente entre 45 y 60 minutos desde la llamada. Estoril I y II están bien comunicadas y nuestros técnicos conocen perfectamente la distribución de la urbanización."
    },
    {
      pregunta: "¿Por qué se rompen tanto las cintas en Estoril?",
      respuesta: "La orientación sur y oeste de muchos bloques de Estoril provoca una mayor exposición solar que deteriora las cintas más rápidamente. Usamos cintas reforzadas UV para mayor durabilidad."
    },
    {
      pregunta: "¿Podéis motorizar persianas antiguas en Estoril?",
      respuesta: "Sí, es uno de los servicios más solicitados en Estoril. Instalamos motores tubulares en persianas manuales existentes sin necesidad de obras. El trabajo se realiza en 1-2 horas por persiana."
    },
    {
      pregunta: "¿Cuánto cuesta reparar una persiana en Estoril?",
      respuesta: "La reparación de persianas es desde 75 €. Consúltanos para valorar la avería y concretar el trabajo antes de empezar."
    },
    {
      pregunta: "¿Tenéis garantía en las reparaciones en Estoril?",
      respuesta: "Todos nuestros trabajos tienen garantía de 12 meses en mano de obra y materiales. Si algo falla dentro del período de garantía, volvemos sin coste adicional."
    },
  ],
  averias: [
    { icon: "📏", titulo: "Cinta rota por sol", desc: "La exposición solar en Estoril deteriora las cintas rápidamente. Usamos cinta reforzada UV de larga duración." },
    { icon: "🔧", titulo: "Recogedor desgastado", desc: "Cambiamos recogedores en 20 minutos. Disponemos de recambios para todos los modelos habituales en Estoril." },
    { icon: "🔩", titulo: "Lamas rotas o dobladas", desc: "Sustituimos lamas sueltas sin cambiar toda la persiana. Disponemos de lamas en todos los colores estándar." },
    { icon: "⚙️", titulo: "Eje bloqueado", desc: "Desbloqueamos y reparamos ejes de aluminio y PVC en persianas de todos los tamaños." },
    { icon: "⚡", titulo: "Motorización nueva", desc: "Instalamos motores Nice y Somfy en persianas manuales. Sin obras, en 1-2 horas por persiana." },
    { icon: "🛠️", titulo: "Guías desajustadas", desc: "Ajustamos guías para un deslizamiento suave y silencioso, eliminando los ruidos al subir y bajar." },
  ],
};

export default function Estoril() {
  return <BarrioPage data={data} />;
}

import BarrioPage, { BarrioData } from "@/components/BarrioPage";

export const data: BarrioData = {
  nombre: "La Princesa",
  slug: "/mostoles/la-princesa",
  seoTitle: `Persianistas La Princesa, Móstoles | Técnico en 60 Minutos`,
  seoDesc: `¿Persiana averiada en La Princesa, Móstoles? Técnico en menos de 60 minutos. Reparamos recogedor, cinta, lamas, eje y motor. Sin sorpresas en el precio. Garantía 12 meses.`,
  h1: `Persianistas Urgentes en<br/><span style='color:#fb923c'>La Princesa, Móstoles</span>`,
  h2: `Arreglo de Persianas en La Princesa — Técnico en Menos de 60 min`,
  descripcionHero: `¿Persiana atascada en La Princesa? Nuestros técnicos conocen perfectamente este barrio y pueden estar en tu domicilio en menos de 60 minutos. Reparamos todo tipo de averías: recogedor, cinta, lamas, eje y motor. Sin sorpresas en el precio.`,
  trabajos: "240+",
  descripcion: "La Princesa es un barrio residencial de Móstoles con predominio de bloques de pisos de construcción de los años 80 y 90, donde conviven familias de larga trayectoria en el barrio con nuevos residentes. Las persianas aquí son principalmente de aluminio con cajón empotrado en pared, con cintas de 18 mm y recogedores de palanca que acumulan muchos años de uso. El desgaste de estos mecanismos es la causa más habitual de avería en La Princesa. Nuestros persianistas conocen perfectamente estos sistemas y ofrecen reparación urgente el mismo día con presupuesto gratuito y garantía de 12 meses.",
  calles: ["C/ Princesa", "C/ Infanta", "C/ Reina", "Avda. de la Princesa", "C/ Duquesa", "C/ Condesa", "C/ Marquesa", "C/ Baronesa"],
  testimonios: [
    {
      nombre: "Marta Iglesias",
      zona: "C/ Princesa, La Princesa",
      texto: "Llevaba semanas con la persiana del salón que no subía bien. El recogedor estaba completamente desgastado. El técnico llegó en menos de una hora, cambió el recogedor y revisó la cinta de paso. Quedó perfecta. Precio muy razonable para la calidad del servicio.",
      servicio: "Cambio de recogedor y revisión",
      fecha: "Hace 1 semana"
    },
    {
      nombre: "Tomás Guerrero",
      zona: "Avda. de la Princesa",
      texto: "El eje de la persiana del dormitorio se partió de golpe y la persiana quedó bloqueada a media altura. Llamaron en 45 minutos, desmontaron todo, cambiaron el eje y la dejaron como nueva. Trabajo muy limpio y rápido.",
      servicio: "Reparación de eje partido",
      fecha: "Hace 2 semanas"
    },
    {
      nombre: "Silvia Navarro",
      zona: "C/ Infanta, La Princesa",
      texto: "Aproveché la reforma del piso para instalar persianas nuevas en las dos habitaciones. Vinieron a medir, me dieron presupuesto en el momento y al día siguiente estaban instaladas. Trabajo impecable, dejaron todo limpio.",
      servicio: "Instalación de persianas nuevas",
      fecha: "Hace 1 mes"
    },
    {
      nombre: "Raúl Cano",
      zona: "C/ Reina, La Princesa",
      texto: "Quería motorizar las persianas del salón para no tener que levantarme a subirlas cada mañana. Instalaron motores Nice en tres persianas y ahora las controlo desde el móvil con temporizador automático. Excelente servicio.",
      servicio: "Motorización Nice con app",
      fecha: "Hace 6 semanas"
    },
  ],
  faqs: [
    {
      pregunta: "¿Cuánto tarda un persianista en llegar a La Princesa?",
      respuesta: "Normalmente entre 45 y 60 minutos desde la llamada. La Princesa está bien comunicada con el centro de Móstoles y siempre tenemos técnicos disponibles en la zona."
    },
    {
      pregunta: "¿Cuál es la avería más frecuente en las persianas de La Princesa?",
      respuesta: "En La Princesa, la avería más habitual es el desgaste del recogedor y la rotura de la cinta, debido a la antigüedad de los edificios. También es frecuente el eje partido en persianas de gran tamaño."
    },
    {
      pregunta: "¿Cuánto cuesta cambiar el recogedor de una persiana en La Princesa?",
      respuesta: "La reparación de persianas es desde 75 €. Consúltanos para valorar la avería y concretar el trabajo antes de empezar."
    },
    {
      pregunta: "¿Podéis motorizar persianas antiguas en La Princesa?",
      respuesta: "Sí, instalamos motores tubulares en persianas manuales de los edificios más antiguos de La Princesa sin necesidad de obras. El trabajo se realiza en 1-2 horas por persiana."
    },
    {
      pregunta: "¿Tenéis garantía en las reparaciones en La Princesa?",
      respuesta: "Todos nuestros trabajos tienen garantía de 12 meses en mano de obra y materiales. Si algo falla dentro del período de garantía, volvemos sin coste adicional."
    },
  ],
  averias: [
    { icon: "🔧", titulo: "Recogedor desgastado", desc: "La avería más frecuente en La Princesa. Cambio en 20 minutos con recambio original compatible." },
    { icon: "📏", titulo: "Cinta rota o deteriorada", desc: "Cintas de 14 y 18 mm en todos los colores. Usamos cinta reforzada para mayor durabilidad." },
    { icon: "⚙️", titulo: "Eje partido o bloqueado", desc: "Frecuente en persianas de gran tamaño. Reparamos ejes de aluminio y PVC de todos los tamaños." },
    { icon: "🔩", titulo: "Lamas rotas o dobladas", desc: "Sustituimos lamas sueltas sin cambiar toda la persiana, ahorrando hasta un 70% del coste." },
    { icon: "⚡", titulo: "Motorización de persianas antiguas", desc: "Instalamos motores en persianas manuales de los edificios más antiguos de La Princesa." },
    { icon: "🛠️", titulo: "Persiana bloqueada a media altura", desc: "Desbloqueamos persianas atascadas sin dañar el mecanismo ni el cajoncillo." },
  ],
};

export default function LaPrincesa() {
  return <BarrioPage data={data} />;
}

export const contactServices = [
  'Reparación de persianas',
  'Recogedor que no recoge la cinta',
  'Cinta rota o deshilachada',
  'Lamas rotas o fuera de su sitio',
  'Persiana que se enrolla torcida / avería del eje',
  'Motor o mando que no responde',
  'Persiana que roza con las guías',
  'Instalación de persianas nuevas',
  'Motorización de una persiana manual',
  'Otra avería / no estoy seguro',
] as const;
export const contactZones = ['Centro de Móstoles','El Soto','Parque Coimbra','Villafontana','Estoril I y II','Los Rosales','La Princesa','Móstoles Sur','Pradillo','El Pinar','Parque Loranca','Fuente del Rey'] as const;
export interface ContactRequest { name: string; phone: string; service: string; zone: string; preference: 'Llamada' | 'WhatsApp'; message: string }
export function createContactWhatsappUrl(request: ContactRequest) {
  const lines = [
    'Hola, Persianas Persora. Quiero consultar un servicio.',
    '',
    `Nombre: ${request.name.trim()}`,
    `Teléfono: ${request.phone.trim()}`,
    `Servicio o avería: ${request.service}`,
    `Zona: ${request.zone || 'Otra zona / por concretar'}`,
    `Prefiero que me contactéis por: ${request.preference}`,
  ];
  if (request.message.trim()) lines.push('', `Qué ocurre: ${request.message.trim()}`);
  return `https://wa.me/34622320480?text=${encodeURIComponent(lines.join('\n'))}`;
}

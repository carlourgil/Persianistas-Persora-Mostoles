import { useState, useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import { MessageCircle, ArrowUpRight, Phone } from 'lucide-react';
import { contactServices, contactZones, createContactWhatsappUrl } from '@/lib/contactRequest';
import type { ContactRequest } from '@/lib/contactRequest';

export default function ContactRequestForm({ initialService = '', initialZone = '' }: { initialService?: string; initialZone?: string }) {
  const [preparedUrl, setPreparedUrl] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const serviceDefault = contactServices.some(service => service === initialService) ? initialService : '';
  const requestedZone = initialZone === 'Estoril' ? 'Estoril I y II' : initialZone;
  const zoneDefault = contactZones.some(zone => zone === requestedZone) ? requestedZone : '';
  useEffect(() => {
    if (window.location.pathname !== '/contacto') return;
    const query = new URLSearchParams(window.location.search);
    const service = query.get('servicio');
    const rawZone = query.get('zona');
    const zone = rawZone === 'Estoril' ? 'Estoril I y II' : rawZone;
    const form = formRef.current;
    if (!form) return;
    if (service && contactServices.some(option => option === service)) (form.elements.namedItem('service') as HTMLSelectElement).value = service;
    if (zone && contactZones.some(option => option === zone)) (form.elements.namedItem('zone') as HTMLSelectElement).value = zone;
  }, []);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = form.elements.namedItem('name') as HTMLInputElement;
    const phone = form.elements.namedItem('phone') as HTMLInputElement;
    name.setCustomValidity(values.get('name')?.toString().trim() ? '' : 'Escribe tu nombre.');
    const digitCount = phone.value.replace(/\D/g, '').length;
    phone.setCustomValidity(digitCount >= 9 && digitCount <= 15 ? '' : 'Escribe un teléfono válido, con prefijo si es necesario.');
    if (!form.reportValidity()) return;
    const request: ContactRequest = {
      name: String(values.get('name') || ''), phone: phone.value,
      service: String(values.get('service') || ''), zone: String(values.get('zone') || ''),
      preference: values.get('preference') === 'Llamada' ? 'Llamada' : 'WhatsApp',
      message: String(values.get('message') || ''),
    };
    const url = createContactWhatsappUrl(request);
    setPreparedUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return <section className="persora-request-section" id="solicitud" aria-labelledby="persora-request-title"><div className="persora-content-width persora-request-layout">
    <div className="persora-request-intro"><span className="persora-section-eyebrow">TÚ ELIGES CÓMO HABLAMOS</span><h2 id="persora-request-title">Cuéntanos qué necesita tu persiana</h2><p>Indica la avería o el servicio que buscas y cómo prefieres que te contactemos. Prepararemos tu consulta para enviarla por WhatsApp.</p><div className="persora-request-direct"><h3>¿Prefieres hablar directamente?</h3><p>Puedes llamarnos o escribirnos sin rellenar el formulario.</p><a href="tel:+34622320480"><Phone size={18} aria-hidden="true" />Llamar al 622 32 04 80<ArrowUpRight size={17} aria-hidden="true" /></a><a href="https://wa.me/34622320480" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />Escribir directamente por WhatsApp</a></div></div>
    <form ref={formRef} className="persora-request-form" onSubmit={submit} onChange={() => { if (preparedUrl) setPreparedUrl(''); }}>
      <h3>Prepara tu consulta</h3><p className="persora-request-hint">Los campos con * son obligatorios.</p>
      <div className="persora-request-fields">
        <label htmlFor="request-name">Nombre *<input id="request-name" name="name" type="text" autoComplete="name" required maxLength={80} placeholder="Tu nombre" onChange={event => event.currentTarget.setCustomValidity('')} /></label>
        <label htmlFor="request-phone">Teléfono *<input id="request-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required maxLength={24} placeholder="622 00 00 00" onChange={event => event.currentTarget.setCustomValidity('')} /></label>
        <label htmlFor="request-service">¿Qué necesitas? *<select id="request-service" name="service" defaultValue={serviceDefault} required><option value="" disabled>Elige una avería o servicio</option>{contactServices.map(service => <option key={service}>{service}</option>)}</select></label>
        <label htmlFor="request-zone">Zona (opcional)<select id="request-zone" name="zone" defaultValue={zoneDefault}><option value="">No estoy seguro / otra zona</option>{contactZones.map(zone => <option key={zone}>{zone}</option>)}</select></label>
      </div>
      <fieldset className="persora-request-preference"><legend>¿Cómo prefieres que te contactemos? *</legend><label><input type="radio" name="preference" value="Llamada" required />Llamada</label><label><input type="radio" name="preference" value="WhatsApp" defaultChecked required />WhatsApp</label></fieldset>
      <label className="persora-request-message" htmlFor="request-message">Cuéntanos qué ocurre (opcional)<textarea id="request-message" name="message" rows={4} maxLength={1200} placeholder="Por ejemplo: la persiana del salón se queda a medias y no baja." /></label>
      <p className="persora-request-disclosure">Al continuar se abrirá WhatsApp con los datos que has escrito. Revisa el mensaje y confirma el envío allí. Puedes añadir fotos desde el chat. Responsable: Armada Digital Seo S.L. (Persianas Persora). Finalidad: atender tu consulta y preparar el presupuesto solicitado; base jurídica: medidas precontractuales. Puedes ejercer tus derechos en persora24@gmail.com. <a href="/politica-de-privacidad">Información sobre protección de datos</a>.</p>
      <button className="persora-request-submit" type="submit"><MessageCircle size={20} aria-hidden="true" />Continuar en WhatsApp<ArrowUpRight size={18} aria-hidden="true" /></button>
      {preparedUrl && <div className="persora-request-status" role="status"><p>Mensaje preparado. Tu consulta se enviará cuando lo confirmes en WhatsApp.</p><a href={preparedUrl} target="_blank" rel="noopener noreferrer">Si no se ha abierto, abrir WhatsApp ↗</a></div>}
    </form>
  </div></section>;
}

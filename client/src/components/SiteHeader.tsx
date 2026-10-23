import OptimizedPhoto from "@/components/OptimizedPhoto";
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X, Phone, MapPin, ArrowRight } from 'lucide-react';

type Category = 'servicios' | 'zonas' | 'informacion';
const services = [
  { title: 'Reparar una persiana', description: 'Cintas, recogedores, lamas y atascos', href: '/reparacion-persianas-mostoles', image: '/images/hero-persianista-portada.png' },
  { title: 'Instalar persianas nuevas', description: 'Una solución a medida para tu casa', href: '/instalacion-persianas-mostoles', image: '/images/despues-lamas.png' },
  { title: 'Motorizar tus persianas', description: 'Más comodidad con apertura eléctrica', href: '/motorizacion-persianas-mostoles', image: '/images/despues-motorizacion-blanca.png' },
];
const zones = [
  ['Centro de Móstoles','centro'],['El Soto','el-soto'],['Parque Coimbra','parque-coimbra'],['Villafontana','villafontana'],['Estoril I y II','estoril'],['Los Rosales','los-rosales'],['La Princesa','la-princesa'],['Móstoles Sur','mostoles-sur'],['Pradillo','pradillo'],['El Pinar','el-pinar'],['Parque Loranca','parque-loranca'],['Fuente del Rey','fuente-del-rey'],
];
export default function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<Category>('servicios');
  const header = useRef<HTMLElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const anchor = (id: string) => id === 'contacto' ? '/contacto' : `${home ? '' : '/'}#${id}`;
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); lastTrigger.current?.focus(); } };
    const focusOutside = (event: FocusEvent) => { if (!header.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    document.addEventListener('focusin', focusOutside);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); document.removeEventListener('focusin', focusOutside); };
  }, [open]);
  const toggle = (next: Category, trigger: HTMLButtonElement) => { lastTrigger.current = trigger; setCategory(next); setOpen(!(open && category === next)); };
  return <><a className="persora-skip-link" href="#contenido">Saltar al contenido</a><header ref={header} className={`persora-header persora-mega-header${open ? ' is-open' : ''}`}>
    <div className="persora-header-inner">
      <a href={home ? '#inicio' : '/'} className="persora-home-link" aria-label="Persianas Persora — Inicio" onClick={() => setOpen(false)}><img src="/images/logo-persora.png" alt="Persianas Persora" title="Persianas Persora · Persianistas" width="170" height="84" className="persora-brand-logo" /></a>
      <nav className="persora-desktop-links" aria-label="Navegación principal">
        <button type="button" aria-expanded={open && category === 'servicios'} aria-controls="persora-navigation-panel" onClick={event => toggle('servicios', event.currentTarget)}>Servicios<ChevronDown size={14} aria-hidden="true" /></button>
        <button type="button" aria-expanded={open && category === 'zonas'} aria-controls="persora-navigation-panel" onClick={event => toggle('zonas', event.currentTarget)}>Zonas<ChevronDown size={14} aria-hidden="true" /></button>
        <a href={anchor('contacto')} onClick={() => setOpen(false)}>Contacto</a>
      </nav>
      <div className="persora-header-actions"><a className="persora-phone-pill" href="tel:+34622320480"><Phone size={17} aria-hidden="true" /><span>622 32 04 80</span><span className="persora-phone-pill-arrow"><ArrowUpRight size={19} aria-hidden="true" /></span></a><button type="button" className="persora-menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="persora-navigation-panel" onClick={event => { lastTrigger.current = event.currentTarget; setOpen(!open); }}>{open ? <X size={23} /> : <Menu size={23} />}</button></div>
    </div>
    {open && <div id="persora-navigation-panel" className="persora-mega-panel" onClick={event => { if ((event.target as HTMLElement).closest('a')) setOpen(false); }}>
      <div className="persora-mega-inner"><div className="persora-mega-categories" aria-label="Categorías de navegación">
        {([['servicios','Servicios'],['zonas','Ubicaciones'],['informacion','Información']] as const).map(([key,label]) => <button type="button" key={key} aria-pressed={category === key} aria-controls={`persora-menu-${category}`} onClick={() => setCategory(key)}>{label}</button>)}
        <button type="button" className="persora-mega-close" aria-label="Cerrar menú" onClick={() => { setOpen(false); lastTrigger.current?.focus(); }}><X size={20} /></button>
      </div>
      <nav id={`persora-menu-${category}`} aria-label={category === 'servicios' ? 'Servicios de persianas' : category === 'zonas' ? 'Zonas de atención' : 'Información de Persora'}>
        {category === 'servicios' && <><div className="persora-mega-services">{services.map(service => <a className="persora-mega-service" href={service.href} key={service.href}><span><strong>{service.title}</strong><small>{service.description}</small></span><OptimizedPhoto sizes="220px" src={service.image} alt="" width="105" height="124" /></a>)}</div><a className="persora-mega-bottom" href={anchor('servicios')}>Ver todos los servicios<ArrowRight size={16} aria-hidden="true" /></a></>}
        {category === 'zonas' && <><div className="persora-mega-zones">{zones.map(([name,slug]) => <a key={slug} href={`/mostoles/${slug}`}><MapPin size={17} aria-hidden="true" /><span>{name}</span><ArrowUpRight size={15} aria-hidden="true" /></a>)}</div><a className="persora-mega-bottom" href={anchor('zonas')}>Consultar el mapa de cobertura<ArrowRight size={16} aria-hidden="true" /></a></>}
        {category === 'informacion' && <div className="persora-mega-info">{[
          ['Ejemplos de soluciones','Compara el antes y el después','trabajos'],['Preguntas frecuentes','Resolvemos tus dudas sobre persianas','preguntas'],['Contacto y ubicación','Dirección, teléfono y cómo llegar','contacto'],
        ].map(([title,description,id]) => <a key={id} href={anchor(id)}><strong>{title}</strong><small>{description}</small><ArrowRight size={18} aria-hidden="true" /></a>)}</div>}
      </nav></div>
    </div>}
  </header></>;
}

import { useEffect, useRef, useState } from "react";
import type L from "leaflet";
import { cn } from "@/lib/utils";
import { businessDirectionsUrl } from "@/lib/businessLocation";

export interface CoverageZone { name: string; lat: number; lng: number; slug: string }
interface MapViewProps { className?: string; zones: CoverageZone[]; selectedName?: string | null }

export function MapView({ className, zones, selectedName }: MapViewProps) {
  const container = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markers = useRef(new Map<string, L.Marker>());
  const [ready, setReady] = useState(false);
  const [tileError, setTileError] = useState(false);
  const [zoneName, setZoneName] = useState("");

  useEffect(() => {
    const host = container.current;
    if (!host) return;
    let resize: ResizeObserver | undefined;
    let disposed = false;
    const init = async () => {
      if (disposed || mapRef.current) return;
      const [{ default: L }, { default: styles }] = await Promise.all([import('leaflet'), import('leaflet/dist/leaflet.css?inline')]);
      if (disposed || mapRef.current) return;
      if (!document.querySelector('style[data-persora-map-styles]')) {
        const style = document.createElement('style');
        style.dataset.persoraMapStyles = '';
        style.textContent = styles;
        document.head.appendChild(style);
      }
      const map = L.map(host, { scrollWheelZoom: false, keyboard: true, zoomControl: true });
      mapRef.current = map;
      const tiles = L.tileLayer(import.meta.env.VITE_MAP_TILE_URL || "https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      });
      tiles.on("tileerror", () => { if (!disposed) setTileError(true); });
      tiles.addTo(map);
      const icon = L.divIcon({ className: "coverage-marker", html: '<svg viewBox="0 0 32 42" width="32" height="42" aria-hidden="true"><path d="M16 2C8 2 2 8 2 16c0 11 14 24 14 24s14-13 14-24C30 8 24 2 16 2Z" fill="#f97316" stroke="white" stroke-width="2.5"/><circle cx="16" cy="16" r="5" fill="white"/></svg>', iconSize: [32, 42], iconAnchor: [16, 40], popupAnchor: [0, -36] });
      for (const zone of zones) {
        const popup = document.createElement("div");
        popup.className = "coverage-popup";
        const title = document.createElement("strong"); title.textContent = zone.name;
        const description = document.createElement("p"); description.textContent = "Reparación, instalación y motorización. Consulta disponibilidad y presupuesto.";
        const page = document.createElement("a"); page.href = `/mostoles/${zone.slug}`; page.textContent = "Ver servicios en esta zona →";
        const directions = document.createElement("a"); directions.href = businessDirectionsUrl; directions.target = "_blank"; directions.rel = "noopener noreferrer"; directions.textContent = "Cómo llegar a nuestro local ↗";
        const note = document.createElement("small"); note.textContent = "Marcador de zona de servicio. Nuestro local está en Calle Alquimia, 2, Móstoles.";
        popup.append(title, description, page, directions, note);
        const marker = L.marker([zone.lat, zone.lng], { icon, title: zone.name, alt: `Ver ${zone.name}`, keyboard: true }).addTo(map).bindPopup(popup, { maxWidth: 240 });
        marker.on("click", () => setZoneName(zone.name));
        markers.current.set(zone.name, marker);
      }
      map.fitBounds(L.latLngBounds(zones.map(z => [z.lat, z.lng] as L.LatLngTuple)), { padding: [32, 32], maxZoom: 13 });
      L.control.scale({ imperial: false, position: "bottomleft" }).addTo(map);
      resize = new ResizeObserver(() => map.invalidateSize()); resize.observe(host);
      setReady(true);
    };
    const observer = new IntersectionObserver(entries => { if (entries.some(e => e.isIntersecting)) { init(); observer.disconnect(); } }, { rootMargin: "100px" });
    observer.observe(host);
    return () => { disposed = true; observer.disconnect(); resize?.disconnect(); mapRef.current?.remove(); mapRef.current = null; markers.current.clear(); };
  }, [zones]);

  const focusZone = (name: string) => {
    setZoneName(name);
    const marker = markers.current.get(name);
    if (marker && mapRef.current) { mapRef.current.setView(marker.getLatLng(), 15); marker.openPopup(); }
  };
  useEffect(() => { if (selectedName && ready) focusZone(selectedName); }, [selectedName, ready]);

  const reset = () => {
    setZoneName(""); mapRef.current?.closePopup();
    mapRef.current?.fitBounds(zones.map(z => [z.lat, z.lng] as L.LatLngTuple), { padding: [32, 32], maxZoom: 13 });
  };
  const fullScreen = async () => {
    try { if (document.fullscreenElement === frame.current) await document.exitFullscreen(); else await frame.current?.requestFullscreen(); }
    catch { window.open("https://www.openstreetmap.org/#map=13/40.32/-3.88", "_blank", "noopener,noreferrer"); }
  };
  return (
    <div ref={frame} className="coverage-map-frame">
      <div className="coverage-toolbar">
        <label className="sr-only" htmlFor="coverage-zone">Seleccionar zona del mapa</label>
        <select id="coverage-zone" value={zoneName} disabled={!ready} onChange={e => e.target.value ? focusZone(e.target.value) : reset()}><option value="">Todas las zonas</option>{zones.map(z => <option key={z.slug}>{z.name}</option>)}</select>
        <button type="button" onClick={reset} disabled={!ready} title="Ver todas las zonas">Ver todas</button>
        <button type="button" onClick={fullScreen} aria-label="Ampliar mapa a pantalla completa" title="Pantalla completa">⛶</button>
      </div>
      <div ref={container} role="region" aria-label="Mapa interactivo de cobertura en Móstoles" className={cn("coverage-map w-full h-[420px]", className)} />
      {tileError && <p className="coverage-map-error" role="status">No se ha podido cargar parte del mapa. Puedes consultar los marcadores o <a href="https://www.openstreetmap.org/#map=13/40.32/-3.88" target="_blank" rel="noopener noreferrer">abrir el mapa externo</a>.</p>}
    </div>
  );
}

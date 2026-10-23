import type { ReactNode } from "react";

/** Piezas de persiana en un mismo estilo vectorial, legibles en móvil. */
export default function RepairIcon({ title, className = "" }: { title: string; className?: string }) {
  const name = title.toLocaleLowerCase("es");
  let drawing: ReactNode;
  if (name.includes("recogedor")) {
    drawing = <><rect x="18" y="7" width="28" height="50" rx="7" /><circle cx="32" cy="36" r="10" /><circle cx="32" cy="36" r="3" /><path d="M28 8v15h8V8M32 46v10" /><path d="M23 13h2m14 38h2" /></>;
  } else if (name.includes("cinta")) {
    drawing = <><ellipse cx="32" cy="16" rx="16" ry="9" /><ellipse cx="32" cy="16" rx="6" ry="3" /><path d="M16 16v15c0 5 7 9 16 9s16-4 16-9V16M24 39v10l6-3 5 5 5-3v10M30 25v14M37 25v14" /></>;
  } else if (name.includes("eje")) {
    drawing = <><path d="M13 26h38v14H13zM23 26v14m18-14v14M7 29h6v8H7zm44 0h6v8h-6z" /><ellipse cx="13" cy="33" rx="4" ry="7" /><ellipse cx="51" cy="33" rx="4" ry="7" /><path d="M30 26l-3 7 7 1-4 6" /></>;
  } else if (name.includes("lama")) {
    drawing = <><rect x="8" y="10" width="48" height="10" rx="2" /><path d="M8 25h24l-4 5 6 5H8zM38 25h18v10H38l-5-5z" /><rect x="8" y="40" width="48" height="10" rx="2" /><path d="M13 15h38M13 45h38" /></>;
  } else if (name.includes("motor") || name.includes("eléctr")) {
    drawing = <><rect x="8" y="23" width="35" height="18" rx="5" /><path d="M16 23v18m7-18v18m20-14h9v10h-9M8 32H4M27 41v10h8" /><rect x="43" y="6" width="15" height="15" rx="3" /><path d="M49 10l-2 5h6l-3 4" /></>;
  } else if (name.includes("guía")) {
    drawing = <><path d="M8 9h9v46H8zm39 0h9v46h-9zM17 16h30M17 25h30M17 34h30M17 43h30M29 5h6m-3 0v7m-3 47h6m-3-7v7" /></>;
  } else if (name.includes("cable")) {
    drawing = <><path d="M10 9c31 0 44 6 44 18S14 35 14 46c0 8 17 10 35 9M10 14c29 0 39 4 39 13S9 35 9 46c0 12 19 14 40 14" /><path d="M10 6v11m39 35v11" /></>;
  } else if (name.includes("polea")) {
    drawing = <><circle cx="32" cy="28" r="18" /><circle cx="32" cy="28" r="11" /><circle cx="32" cy="28" r="4" /><path d="M14 28v29m36-29v29M32 10V5m-6 0h12" /></>;
  } else {
    drawing = <><path d="M10 10h44v44H10zM14 18h36M14 26h36M14 34h36" /><rect x="25" y="40" width="14" height="17" rx="3" /><path d="M28 40v-5a4 4 0 018 0v5" /></>;
  }
  return <svg className={className} width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{drawing}</svg>;
}

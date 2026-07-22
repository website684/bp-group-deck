// Shared HTML snippets for authored slides (same class vocabulary as legacy-deck.css / app.css)

export const bframe = (src: string, url: string, cap?: string) => `
  <div>
    <div class="bframe">
      <div class="bbar"><span class="bdots"><i></i><i></i><i></i></span><span class="burl">${url}</span></div>
      <img src="${src}" alt="${cap || url}" loading="lazy"/>
    </div>
    ${cap ? `<div class="bcap">${cap}</div>` : ''}
  </div>`

export const fi = (icon: string, h: string, p: string, d: number) => `
  <div class="fi rise" style="animation-delay:${d}s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icon}</svg></span><div><h4>${h}</h4><p>${p}</p></div></div>`

export const mstat = (n: string, l: string) => `<div class="mstat"><div class="n">${n}</div><div class="l">${l}</div></div>`

export const icons = {
  search: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4-4"/>',
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  shield: '<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/>',
  bot: '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 14h.01M15 14h.01"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
  play: '<circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4z"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4a2 2 0 0 0 2 4M17 6h3a2 2 0 0 1-2 4"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>',
  plug: '<path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-10 0z"/><path d="M12 17v5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M2 21a7 7 0 0 1 14 0"/><circle cx="18" cy="9" r="2"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  warn: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  layers: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  mic: '<rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4"/>',
  cam: '<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
  map: '<path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  zap: '<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>',
  building: '<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>',
  repeat: '<path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8"/><path d="M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/>',
  book: '<path d="M4 5h16v11H4z"/><path d="M4 20h16"/>',
  lang: '<path d="M5 8h8M9 5v3M7 8c0 4 4 7 7 8M11 8c-1 4-4 7-7 8"/><path d="M14 21l4-9 4 9M15.5 17.5h5"/>',
}

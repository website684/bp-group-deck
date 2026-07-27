// Client accent theming — turns one brand colour into readable accents for
// dark and light slides, so the client's colour threads through the deck as
// the "partner accent" without ever failing contrast. BetterPlace yellow stays
// the primary accent on headline highlights and CTAs.

const DEFAULT = '#FFC401' // BetterPlace yellow — no override when this is the colour

function mix(r: number, g: number, b: number, tr: number, tg: number, tb: number, t: number) {
  const c = (a: number, z: number) => Math.round(a + (z - a) * t)
  return `rgb(${c(r, tr)}, ${c(g, tg)}, ${c(b, tb)})`
}

/** CSS custom properties to spread onto the player / hub root. Empty for the
 *  default BetterPlace colour, so stock decks look exactly as before. */
export function clientAccentVars(color?: string | null): Record<string, string> {
  if (!color) return {}
  const hex = color.replace('#', '')
  if (hex.length !== 6 || color.toUpperCase() === DEFAULT) return { '--client': color }
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  // On dark slides: lighten dark colours toward white so they read.
  const onDark = lum < 0.5 ? mix(r, g, b, 255, 255, 255, lum < 0.25 ? 0.6 : 0.4) : color
  // On light slides: darken light colours toward black so they read.
  const onLight = lum > 0.55 ? mix(r, g, b, 0, 0, 0, lum > 0.8 ? 0.55 : 0.38) : color
  return {
    '--client': color,
    '--client-ondark': onDark,
    '--client-onlight': onLight,
    '--accent-ondark': onDark,
    '--accent-onlight': onLight,
  }
}

const INDUSTRY_DECK: Record<string, string> = {
  'Retail & Q-commerce': 'ind-retail',
  'Manufacturing': 'ind-mfg',
  'Logistics & Delivery': 'ind-log',
  'BFSI & Field Sales': 'ind-bfsi',
  'Tech & Services': 'ind-tech',
}

export function industryDeckId(industry?: string | null): string | null {
  return (industry && INDUSTRY_DECK[industry]) || null
}

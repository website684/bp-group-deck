import type { SlideDef, SlideTheme } from '../lib/types'

// STORY KIT · TypeScript helpers for the shared story grammar (src/styles/story.css).
// Every new deck should build its slides from these so headings, rails, word blocks and
// product windows look and behave the same. Rules: brand/deck-playbook.md.

export const svg = (d: string) => `<svg viewBox="0 0 24 24">${d}</svg>`

/** A lifecycle rail. `seps` are the 1-based step numbers that get a gap before them. */
export const makeRail = (labels: string[], seps: number[] = [], numbered = true) => (on: number, demo?: string) => `
  <div class="tel-rail">
    ${labels.map((l, i) => {
      const n = i + 1
      const cls = n === on ? 'on' : n < on ? 'done' : ''
      return `${seps.includes(n) ? '<span class="sep"></span>' : ''}<span class="rl ${cls}${numbered ? '' : ' nonum'}"><i>${numbered ? n : ''}</i>${l}</span>`
    }).join('')}
    ${demo ? `<span class="demo">${demo}</span>` : ''}
  </div>`

/** Window chrome for an authored mock. `amber` marks pilot or illustrative content. */
export const bar = (title: string, live = 'Live', amber = false) =>
  `<div class="tm-bar"><span class="d"><i></i><i></i><i></i></span><span class="t">${title}</span><span class="live${amber ? ' amber' : ''}">${live}</span></div>`

/** A cleaned real screenshot in window chrome, with an honest tag. Crop with tools/clean_shot.py first. */
export const shot = (src: string, title: string, tag = 'Real screen · demo data', opts: { pos?: string; h?: string } = {}) => `
  <div class="tm tm-shot">
    ${bar(title, tag)}
    <div class="tm-shotimg" style="${opts.h ? `height:${opts.h};` : ''}"><img src="${src}" alt="${title}" loading="lazy" style="object-position:${opts.pos || 'top left'}"/></div>
  </div>`

/** One status row inside a mock: title, sub-line, chip (g/r/y/b). */
export const row = (title: string, sub: string, chip: string, tone: 'g' | 'r' | 'y' | 'b' = 'g', extra = '') =>
  `<div class="rw ${extra}"><div><b>${title}</b><small>${sub}</small></div><span class="chip ${tone}">${chip}</span></div>`

export type Change = { ic: string; b: string; t: string }
export type ProblemSlide = {
  id: string; theme: SlideTheme; title: string
  /** rail renderer from makeRail, plus the step to highlight */
  rail?: (on: number, demo?: string) => string; step?: number; demo?: string
  kick: string; h2: string
  /** label for the first word block: "You told us" (client deck) or "On site today" (generic deck) */
  qLabel?: string; quote: string
  changes: Change[]; proof: { n: string; p: string }
  vis: string; foot?: string; flip?: boolean; wide?: boolean
}

/** The problem slide: rail · kicker + heading · words (40%) + product (60%) · honest footer. */
export const problemSlide = (p: ProblemSlide): SlideDef => ({
  id: p.id, theme: p.theme, title: p.title,
  html: `
  <div class="tel${p.rail ? '' : ' norail'}">
    ${p.rail ? p.rail(p.step || 0, p.demo) : ''}
    <div class="tel-head"><div><span class="kick">${p.kick}</span><h2>${p.h2}</h2></div>${!p.rail && p.demo ? `<span class="demo">${p.demo}</span>` : ''}</div>
    <div class="tel-body${p.flip ? ' flip' : ''}${p.wide ? ' wide' : ''}">
      ${p.flip ? `<div class="tel-vis">${p.vis}</div>` : ''}
      <div class="tel-say">
        <div class="blk"><div class="lbl">${p.qLabel || 'You told us'}</div><div class="tq">${p.quote}</div></div>
        <div class="blk"><div class="lbl">What changes</div><ul>${p.changes.map((c) => `<li><span class="ic">${svg(c.ic)}</span><span><b>${c.b}</b> ${c.t}</span></li>`).join('')}</ul></div>
        <div class="proof"><div class="n">${p.proof.n}</div><p>${p.proof.p}</p></div>
      </div>
      ${p.flip ? '' : `<div class="tel-vis">${p.vis}</div>`}
      ${p.foot ? `<div class="foot">${p.foot}</div>` : ''}
    </div>
  </div>`,
})

/** A full-width slide with no rail: kicker + heading + any body. */
export const plainSlide = (id: string, theme: SlideTheme, title: string, kick: string, h2: string, body: string, opts: { demo?: string; glow?: boolean } = {}): SlideDef => ({
  id, theme, title,
  html: `${opts.glow ? '<div class="glow"></div>' : ''}
  <div class="tel norail">
    <div class="tel-head"><div><span class="kick">${kick}</span><h2>${h2}</h2></div>${opts.demo ? `<span class="demo">${opts.demo}</span>` : ''}</div>
    ${body}
  </div>`,
})

/** The cover ring: lifecycle steps orbiting one record. Uses data-cycle to light each node in turn. */
export const coverRing = (labels: string[], centre: [string, string] = ['one', 'worker record'], numbered = true) => {
  const n = labels.length
  const nodes = labels.map((l, i) => {
    const a = (-90 + i * (360 / n)) * Math.PI / 180
    const x = 200 + Math.cos(a) * 150, y = 200 + Math.sin(a) * 150
    return `<g class="cyc node"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="32"/><text x="${x.toFixed(1)}" y="${(y - 4).toFixed(1)}" text-anchor="middle" class="nn">${numbered ? i + 1 : ''}</text><text x="${x.toFixed(1)}" y="${(y + (numbered ? 10 : 4)).toFixed(1)}" text-anchor="middle" class="nl">${l}</text></g>`
  }).join('')
  return `<div class="tel-ring" data-cycle="1400"><svg viewBox="0 0 400 400"><circle class="orbit" cx="200" cy="200" r="150"/><circle class="orbit2" cx="200" cy="200" r="150"/>${nodes}<text x="200" y="192" text-anchor="middle" class="cn">${centre[0]}</text><text x="200" y="216" text-anchor="middle" class="cn">${centre[1]}</text></svg></div>`
}

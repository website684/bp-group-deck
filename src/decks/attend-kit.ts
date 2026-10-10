import { bar, row } from './story-kit'

// ATTEND KIT · the attendance and onboarding screens shared by the Tata Electronics deck and the
// general CLMS deck. Each builder takes a PlantCfg so a client deck can name its plant, lines,
// contractors, state rules and worker language, while the generic deck uses neutral values.
// The roster and rules screens are authored product UIs styled after the real goBetter roster
// and org-configuration screens (dark sidebar, breadcrumb, org switcher, toolbar, Today column).
// All numbers and names are illustrative; slide footers say so.

export type PlantCfg = {
  org: string; orgInitials: string; site: string; gate: string
  lineA: string; lineB: string; lineC: string; floatPool: string
  zones: { n: string; s: string; c: string; d: string; dc?: 'in' | 'out' | '' }[]
  inside: number; insideSub: string
  workers: { i: string; n: string; id: string; meta: string }[] // exactly 6
  contractors: [string, string, string]
  ruleSetName: string
  rules: { k: string; v: string; u: string; law: string }[]
  holidays: { n: string; d: string; w: string; c: string }[]
  roleTitle: string; roleMeta: string
  persona: { first: string; full: string; initials: string; role: string; city: string; phone: string }
  lang: { label: string; greet: string; accept: string; consent: string; agree: string; upload: string; verified: string }
  joinMsg: string
  reel3: string
  quiz: [string, string]
  access: [string, string, string?][] // zone, when, colour
  week: string // e.g. 'Oct 13 – Oct 19, 2026'
  days: [string, string][] // 7 × [Mon, 13]
  todayIdx: number
}

/* ---------- roster: authored product screen ---------- */
const S = (cls: string, t: string, s = '') => `<div class="sh ${cls}">${t}${s ? `<small>${s}</small>` : ''}</div>`
const A = S('A', 'A', '06–14'), B = S('B', 'B', '14–22'), C = S('C', 'C', '22–06'), OFF = S('off', 'Off'), LV = S('lv', 'Leave')

export const rosterUI = (c: PlantCfg) => {
  const w = c.workers
  const td = (i: number) => (i === c.todayIdx ? ' today' : '')
  const rowsCells: string[][] = [
    [A, A, A, A, A, OFF, OFF],
    [OFF, A, A, 'GAP', A, A, OFF],
    [B, B, B, B, 'BAD', OFF, B],
    [C, C, C, OFF, OFF, C, C],
    [A, LV, LV, A, A, A, OFF],
  ]
  const cell = (v: string, i: number, r: number) => {
    if (v === 'GAP') return `<div class="${td(i).trim()}" style="position:relative"><div class="sh gapcyc"><span class="cyc">Absent<small>no-show</small></span><span class="cyc g2">Finding…<small>${c.floatPool}</small></span><span class="cyc g3">${w[r].i === 'MR' ? 'Filled' : 'Filled'}<small>${c.floatPool}</small></span></div></div>`
    if (v === 'BAD') return `<div class="${td(i).trim()}" style="position:relative"><div class="sh B bad">B<small>14–22</small></div><div class="ui-tip" style="right:-4px;top:40px"><b>Refused · 48 h rule</b>This shift takes ${w[r].n.split(' ')[0]} to 49 h. It can run only as consented overtime at 2×.</div></div>`
    return `<div class="${td(i).trim()}">${v}</div>`
  }
  return `
<div class="ui" data-cycle="2200">
  <div class="ui-side"><span class="lg"></span><i class="r"></i><i></i><i class="on"></i><i></i><i></i><i class="r"></i></div>
  <div class="ui-main">
    <div class="ui-top"><div><div class="ui-crumb">${c.org} / Site Management / ${c.site} / <b>Roster Management</b></div><div class="ui-title">Roster Management · ${c.lineA}</div></div><div class="ui-org"><span>${c.orgInitials}</span>${c.org}</div></div>
    <div class="ui-bar"><span class="ui-box">150 Associates</span><span class="ui-date"><span>‹</span><span>${c.week}</span><span>›</span></span><span class="ui-sp"></span><span class="ui-ico">⧉</span><span class="ui-ico">↺</span><span class="ui-btn ai">✦ Auto-build</span><span class="ui-btn pri">Publish Changes</span></div>
    <div class="ui-wrap">
      <div class="ui-grid">
        <div class="srch"><span>⌕ Search for Associate</span></div>
        ${c.days.map(([d, n], i) => `<div class="hd${td(i)}"><b>${d}</b><small>${n}</small>${i === c.todayIdx ? '<em>Today</em>' : ''}</div>`).join('')}
        <div class="cntl">Rostered vs plan</div>
        ${c.days.map((_, i) => `<div class="cnt${td(i)}"><i class="${i === 3 ? 'x' : 'b'}">${i === 3 ? '149' : '150'}/150</i></div>`).join('')}
        ${w.slice(0, 5).map((p, r) => `<div class="wk"><span class="ui-av">${p.i}</span><div class="ui-wn"><b>${p.n}</b><small>${p.id} · ${p.meta}</small></div></div>${rowsCells[r].map((v, i) => cell(v, i, r)).join('')}`).join('')}
      </div>
      <div class="ui-panel">
        <div class="ph">Roster assistant</div>
        <div class="ui-sug cyc"><b>1 no-show on Thu</b>Fill from ${c.floatPool}: certified on ${c.lineA}, under 48 h this week.<div class="act"><span class="go">Apply</span><span>Skip</span></div></div>
        <div class="ui-sug cyc"><b>${c.lineB} down Wed–Thu</b>Move 40 certified operators to ${c.lineA}; 60 to paid refresher training.<div class="act"><span class="go">Apply</span><span>Review</span></div></div>
        <div class="ui-sug cyc"><b>Festival week ahead</b>Expected −46 on Tue. Stagger 132 leave requests, pre-book standby.<div class="act"><span class="go">Plan</span><span>Later</span></div></div>
        <div class="ui-chk"><span>Hours per day and week</span><span>1 rest day in 7</span><span>Certified only</span><span class="x">1 change refused</span></div>
      </div>
    </div>
  </div>
</div>`
}

/* ---------- labour-law rules: authored settings screen ---------- */
export const rulesUI = (c: PlantCfg) => `
<div class="ui">
  <div class="ui-side"><span class="lg"></span><i class="r"></i><i></i><i></i><i class="on"></i><i></i><i class="r"></i></div>
  <div class="ui-main">
    <div class="ui-top"><div><div class="ui-crumb">${c.org} / Attend / <b>Rule sets</b></div><div class="ui-title">${c.ruleSetName}</div></div><div class="ui-org"><span>${c.orgInitials}</span>${c.org}</div></div>
    <div class="ui-set">
      <div class="snav"><span class="on">Working hours <i></i></span><span>Overtime <i></i></span><span>Rest days <i></i></span><span>Night shift <i></i></span><span>Customer codes <i></i></span><span>Alerts <i></i></span><span>Overrides <i></i></span></div>
      <div class="form">
        <div class="fh">Hours and overtime</div><div class="fs">The roster cannot publish a shift that breaks these. Punches that break them raise an alert.</div>
        ${c.rules.slice(0, 5).map((r) => `<div class="ui-f"><span>${r.k}</span><span class="in">${r.v}<small>${r.u}</small></span><span class="law">${r.law}</span></div>`).join('')}
        <div class="ui-f"><span>Overrides need a named role, a reason and an expiry</span><span class="tg"></span><span class="law">Audit trail</span></div>
        <div class="ui-live"><b>Live check · this week</b> 0 published breaches · 3 roster changes refused · 2 alerts raised</div>
      </div>
    </div>
  </div>
</div>
<div class="tm" style="margin-top:10px">
  ${bar(`goBetter · Alerts · ${c.site} · this week`, 'Live')}
  <div class="tm-body" style="display:flex;flex-direction:column;gap:6px">
    <div class="ui-alert r"><div><b>Roster change refused · ${c.lineA} · Sat</b>7 workers would cross 48 h. Saturday can run only as consented OT at 2×.</div><em>Blocked</em></div>
  </div>
</div>`

/* ---------- live headcount ---------- */
export const headcountMock = (c: PlantCfg) => `
<div class="tm">
  ${bar(`goBetter · Attend · ${c.site} · live headcount`, 'Live')}
  <div class="tm-body">
    <div class="tm-hc">
      <div class="big">
        <div class="l">Inside the gate now · 06:42</div>
        <div class="n"><span data-t="${c.inside}">0</span></div>
        <div class="s">${c.insideSub}</div>
        <div class="split"><i style="width:71%;background:#ffc401"></i><i style="width:22%;background:#32cad4"></i><i style="width:7%;background:#8a93b8"></i></div>
        <div class="leg"><span style="--c:#ffc401">Gate face devices 71%</span><span style="--c:#32cad4">Line kiosks 22%</span><span style="--c:#8a93b8">Training centre · app 7%</span></div>
      </div>
      <div class="tm-zones">
        ${c.zones.map((z, i) => `<div class="z" style="animation-delay:${i * 0.1}s"><div><b>${z.n}</b><small>${z.s}</small></div><span class="n">${z.c}</span><span class="d ${z.dc || ''}">${z.d}</span></div>`).join('')}
      </div>
    </div>
    <div class="tm-stream"><span><b>${c.workers[0].n.split(' ')[0]} ${c.workers[0].n.split(' ')[1]?.[0] || ''}.</b> ${c.gate} · 05:52</span><span><b>${c.workers[0].n.split(' ')[0]} ${c.workers[0].n.split(' ')[1]?.[0] || ''}.</b> ${c.lineA} kiosk · 06:08</span><span><b>Offline</b> Gate 5 device · 14 punches queued, synced 06:40</span></div>
  </div>
</div>`

/* ---------- leave, holidays, roles and certifications ---------- */
export const leaveMock = (c: PlantCfg) => `
<div class="tm">
  ${bar(`goBetter · Leave, holidays and roles · ${c.site}`, 'Live')}
  <div class="tm-body">
    <div class="tm-mini3">
      <div><div class="l">Leave · this week</div>
        <div class="it"><div><b>${c.workers[1].n} · 2 days</b><small>festival travel · approved on mobile</small></div><span class="chip g">Approved</span></div>
        <div class="it"><div><b>${c.workers[3].n} · 1 day</b><small>sick · balance 4 left</small></div><span class="chip y">Pending</span></div>
        <div class="it"><div><b>On-roll leave</b><small>stays in your HR system · synced nightly</small></div><span class="chip b">Synced</span></div>
      </div>
      <div><div class="l">Holidays · by state and site</div>
        ${c.holidays.map((h) => `<div class="it"><div><b>${h.n} · ${h.d}</b><small>${h.w}</small></div><span class="chip b">${h.c}</span></div>`).join('')}
      </div>
      <div><div class="l">Roles and station certifications</div>
        <div class="it"><div><b>${c.roleTitle}</b><small>${c.roleMeta}</small></div><span class="chip g">Role</span></div>
        <div class="it"><div><b>212 certifications expire this month</b><small>roster will not place an expired operator</small></div><span class="chip y">Due</span></div>
        <div class="it"><div><b>Default site, line and station</b><small>used by roster, gate and pay</small></div><span class="chip b">Master</span></div>
      </div>
    </div>
    <div class="note"><b>One record.</b> A holiday on the state calendar changes the roster, the pay rate for anyone who works it, and the muster roll, without anyone re-entering it.</div>
  </div>
</div>`

/* ---------- WhatsApp onboarding: three bare phones ---------- */
export const waPhones = (c: PlantCfg) => {
  const p = c.persona, L = c.lang
  const top = `<div class="top"><i>M</i><div>Mia · ${c.org} joining<small>BetterPlace verified business</small></div></div>`
  return `
<div class="wa-row">
  <div class="wa" style="--d:.1s" data-cycle="4200">
    <div class="scr">
      ${top}
      <div class="lang"><span class="cyc">English</span><span class="cyc">${L.label}</span></div>
      <div class="chat">
        <div class="cycpane">
          <div class="m">Hi ${p.first}, I’m Mia. I’ll handle your joining at ${c.org}, ${c.site}. You’ve been offered <b>${p.role}.</b><div class="doc">Offer_Letter_${p.first}.pdf</div><div class="btns"><span>Accept offer</span></div></div>
          <div class="m me">Accept offer</div>
          <div class="m">To finish your joining I’ll collect a few details. Do you consent?<div class="btns"><span>Yes, I consent</span></div></div>
          <div class="m">From your application: <b>${p.full} · ${p.phone} · ${p.city}.</b> Correct?</div>
          <div class="m me">Correct</div>
        </div>
        <div class="cycpane">
          <div class="m">${L.greet}<div class="doc">Offer_Letter_${p.first}.pdf</div><div class="btns"><span>${L.accept}</span></div></div>
          <div class="m me">${L.accept}</div>
          <div class="m">${L.consent}<div class="btns"><span>${L.agree}</span></div></div>
        </div>
      </div>
    </div>
    <div class="wa-cap">1 · Offer, consent, details</div>
  </div>
  <div class="wa" style="--d:.3s">
    <div class="scr">
      ${top}
      <div class="chat">
        <div class="m" style="--d:.5s">Please upload your Aadhaar.</div>
        <div class="m me" style="--d:.8s"><div class="img">Aadhaar · XXXX XXXX 4417</div></div>
        <div class="m sys" style="--d:1.1s">Aadhaar verified · name matches · age 18+</div>
        <div class="m" style="--d:1.4s">Did you pay anyone a fee to get this job?<div class="btns"><span>No, I paid no fee</span></div></div>
        <div class="m sys" style="--d:1.8s">UAN fetched and filled · EPF history clear · record check clear · 1 min 40 s</div>
      </div>
    </div>
    <div class="wa-cap">2 · Aadhaar, checks, declarations</div>
  </div>
  <div class="wa" style="--d:.5s">
    <div class="scr">
      ${top}
      <div class="chat">
        <div class="m" style="--d:.7s">Three short videos before you join:<div class="reels"><span style="--rc1:#1B2D93;--rc2:#2142B9">Welcome to ${c.org}<small>2 min</small></span><span style="--rc1:#7a1f5c;--rc2:#c2397d">POSH · respect at work<small>3 min</small></span><span style="--rc1:#0d6b4f;--rc2:#1a9a6c">${c.reel3}<small>3 min</small></span></div></div>
        <div class="m" style="--d:1.1s">${c.quiz[0]}<div class="btns"><span>✓ ${c.quiz[1]}</span></div></div>
        <div class="m" style="--d:1.5s">${c.joinMsg}<div class="qrp"><span class="qr"></span><span>Pass · ${p.first} ${p.full.split(' ')[1]?.[0] || ''}.<br/>Training centre · day 1</span></div><div class="btns"><span>I’ll be there</span></div></div>
      </div>
    </div>
    <div class="wa-cap">3 · Induction, joining slot, pass</div>
  </div>
</div>`
}

/* ---------- verification and access by zone ---------- */
export const accessMock = (c: PlantCfg) => `
<div class="tm">
  ${bar(`goBetter · ${c.persona.full} · verification and access`, 'Live')}
  <div class="tm-body">
    <div class="tm-rows">
      ${row('Aadhaar · age 18+ · recruitment-fee declaration', 'Verified on WhatsApp · stored for audits', 'Clear', 'g')}
      ${row('UAN fetched and filled · EPF history · record check', 'By API · 1 min 40 s', 'Clear', 'g')}
      ${row('Address and court checks', 'Returned clear in 19 hours · line access unlocked', 'Clear', 'g')}
      ${row('Medical · PPE kit · hostel or transport', 'Recorded at the training centre on day 1', 'Done', 'g')}
    </div>
    <div class="tm-h" style="margin:12px 0 0"><b>Access by zone · pushed to your devices</b><span>no pass office</span></div>
    <div class="tm-zones2">
      ${c.access.map(([z, w, col]) => `<div${col ? ` style="--zc:${col}"` : ''}><b>${z}</b>${w}</div>`).join('')}
    </div>
  </div>
</div>`

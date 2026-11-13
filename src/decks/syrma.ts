import type { SlideDef } from '../lib/types'
import { icons } from './html'
import { makeRail, bar, row, problemSlide, plainSlide, coverRing } from './story-kit'
import { clmsSlides } from './clms'
import { skhCss } from './skh'

// Syrma SGS · goBetter CLMS (Nov 2026). Electronics manufacturer: ~8,250 non-permanent workers
// of ~10,000 (FY26 BRSR), 14 plants across ~18 states plus Germany, 48% women, new plants coming
// (Pune Ranjangaon, Naidupeta PCB, Chennai laptop line, Jodhpur medical plastics). The general CLMS
// deck re-cut for them: their numbers, scale-up, a women-led workforce, customer audits, ESD and
// station certifications. Mocks relocated to the Pune (Ranjangaon) campus. A competitor comparison
// slide is added once the research on the competitor in the room is back.

const STEPS = ['Vendors', 'Orders', 'Hire', 'Onboard', 'Verify', 'Gate', 'Attend', 'OT', 'Pay', 'Comply', 'Train']
const rail = makeRail(STEPS, [3, 7, 11], false)
const Q = 'On site today'

const local = (h: string) => h
  .replace(/Sahyadri Auto/g, 'Syrma SGS')
  .replace(/<span>SA<\/span>/g, '<span>SY</span>')
  .replace(/सह्याद्री ऑटो, चाकण/g, 'सिरमा एसजीएस, रंजनगांव')
  .replace(/Chakan, Pune/g, 'Ranjangaon, Pune')
  .replace(/Chakan/g, 'Ranjangaon')
  .replace(/Assembly Operator \(semi-skilled\)/g, 'SMT Line Operator (semi-skilled)')
  .replace(/Assembly-3/g, 'SMT-3').replace(/Assembly-1/g, 'SMT-1').replace(/Assembly operator · skilled/g, 'SMT operator · skilled')
  .replace(/OJT sign-off, forklift licence/g, 'OJT sign-off, ESD certification')
  .replace(/ \(SOW §[\d.]+\)/g, '').replace(/WO-your-/g, 'WO-')
  .replace(/Maker-checker on every document\./g, 'A second person approves every document.')
  .replace(/Regularisation from the phone/g, 'Attendance corrections from the phone')
  .replace(/Challans read by OCR\./g, 'Challans read automatically.')
  .replace(/Attendance vs TO/g, 'Attendance vs plan').replace(/against the TO/g, 'against the plan')
  .replace(/login created on IC approval/g, 'login created once HR approves').replace(/>IC approval</g, '>HR approval<')

const pick = (id: string, edit: (h: string) => string = (h) => h) => {
  const s = clmsSlides.find((x) => x.id === id)
  if (!s) throw new Error(`clms slide ${id} missing`)
  return { ...s, html: edit(local(s.html)) }
}

const sy = `<style>
.sy-plants { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.sy-plants .p { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 12px 14px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.sy-plants .p .k { font-family: var(--mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: var(--navy); }
.sy-plants .p h4 { margin: 4px 0 4px; font-family: var(--disp); font-size: 1rem; color: var(--ink); }
.sy-plants .p p { margin: 0; font-size: .8rem; line-height: 1.42; color: var(--text); }
.sy-plants .p.new { border: 2px solid var(--yellow); }
.sy-wk { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
.sy-wk .s { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 8px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.sy-wk .s .w { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--yellow); }
.sy-wk .s h4 { margin: 0; font-family: var(--disp); font-size: 1rem; color: #fff; }
.sy-wk .s p { margin: 0; font-size: .8rem; line-height: 1.45; color: rgba(255,255,255,.8); }
.sy-wk .s .n { margin-top: auto; font-family: var(--disp); font-weight: 800; font-size: 1.5rem; color: var(--yellow); }
.sy-wk .s .n small { font-size: .72rem; font-weight: 500; color: rgba(255,255,255,.7); margin-left: 4px; }
.sy-aud { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.sy-aud .a { background: #fff; border: 1px solid var(--border); border-top: 4px solid var(--ac); border-radius: 14px; padding: 14px 16px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.sy-aud .a .k { font-family: var(--mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: #6b7280; }
.sy-aud .a h4 { margin: 4px 0 8px; font-family: var(--disp); font-size: 1.05rem; color: var(--ink); }
.sy-aud .a ul { margin: 0; padding-left: 16px; font-size: .82rem; line-height: 1.5; color: var(--text); }
.sy-aud .a .g { margin-top: 10px; font-size: .78rem; font-weight: 600; color: #1a8f52; border-top: 1px dashed var(--border); padding-top: 8px; }
.sy-cd { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
.sy-cd .k { background: #f7f8fb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 9px 10px; }
.sy-cd .k b { display: block; font-family: var(--disp); font-size: 1.3rem; color: #111827; line-height: 1.1; }
.sy-cd .k b.g { color: #1a8f52; } .sy-cd .k b.r { color: #c0392b; } .sy-cd .k b.y { color: #b7791f; }
.sy-cd .k span { font-size: 10.5px; color: #6b7280; }
.sy-hm { display: grid; grid-template-columns: 1.4fr repeat(6, 1fr); gap: 3px; margin-top: 10px; font-size: 10.5px; }
.sy-hm .h { font-family: var(--mono); font-size: 9.5px; text-transform: uppercase; letter-spacing: .05em; color: #6b7280; padding: 3px 4px; }
.sy-hm .n { color: #111827; font-weight: 600; padding: 6px 4px; }
.sy-hm .c { border-radius: 5px; text-align: center; padding: 6px 2px; font-weight: 700; }
.sy-hm .c.g { background: #dcf3e5; color: #146c3e; } .sy-hm .c.y { background: #fdf0d2; color: #8a5a00; } .sy-hm .c.r { background: #fbe0dc; color: #a12b1f; }
</style>`

const compUI = `
<div class="tm">
  ${bar('goBetter · Compliance dashboard · all plants · October', 'Live')}
  <div class="tm-body">
    <div class="sy-cd">
      <div class="k"><b>214</b><span>contractors</span></div>
      <div class="k"><b class="g">96%</b><span>licences valid</span></div>
      <div class="k"><b class="y">4,547</b><span>at minimum wage · revision ready</span></div>
      <div class="k"><b class="r">38</b><span>workers short on PF/ESI</span></div>
      <div class="k"><b class="g">99%</b><span>registers signed off</span></div>
      <div class="k"><b class="r">7</b><span>bills on hold</span></div>
    </div>
    <div class="sy-hm"><div class="h">Plant</div><div class="h">Licence</div><div class="h">PF/ESI</div><div class="h">Min wage</div><div class="h">Hours/OT</div><div class="h">Registers</div><div class="h">Women nights</div><div class="n">Chennai 1–4</div><div class="c g">✓</div><div class="c g">✓</div><div class="c g">✓</div><div class="c y">Due</div><div class="c g">✓</div><div class="c g">✓</div><div class="n">Bargur</div><div class="c g">✓</div><div class="c y">Due</div><div class="c g">✓</div><div class="c g">✓</div><div class="c g">✓</div><div class="c g">✓</div><div class="n">Manesar 1</div><div class="c g">✓</div><div class="c g">✓</div><div class="c r">Gap</div><div class="c g">✓</div><div class="c g">✓</div><div class="c y">Due</div><div class="n">Manesar 2</div><div class="c g">✓</div><div class="c g">✓</div><div class="c g">✓</div><div class="c g">✓</div><div class="c y">Due</div><div class="c g">✓</div><div class="n">Bawal</div><div class="c y">Due</div><div class="c g">✓</div><div class="c g">✓</div><div class="c r">Gap</div><div class="c g">✓</div><div class="c g">✓</div><div class="n">Bengaluru</div><div class="c g">✓</div><div class="c g">✓</div><div class="c g">✓</div><div class="c g">✓</div><div class="c g">✓</div><div class="c g">✓</div><div class="n">Baddi</div><div class="c g">✓</div><div class="c g">✓</div><div class="c y">Due</div><div class="c g">✓</div><div class="c g">✓</div><div class="c g">✓</div><div class="n">Pune</div><div class="c g">✓</div><div class="c r">Gap</div><div class="c g">✓</div><div class="c g">✓</div><div class="c g">✓</div><div class="c y">Due</div></div>
  </div>
</div>`

const womenUI = `
<div class="tm">
  ${bar('goBetter · Women on shift · Ranjangaon · tonight, C shift 22:00–06:00', 'Live')}
  <div class="tm-body">
    <div class="tm-stats" style="--n:4;margin:0"><div><div class="n">412</div><div class="l">Women rostered tonight</div></div><div><div class="n g">412</div><div class="l">Written night consent on file</div></div><div><div class="n g">18 / 18</div><div class="l">Cabs with GPS and escort</div></div><div><div class="n r">3</div><div class="l">Removed from roster</div></div></div>
    <div class="tm-rows" style="margin-top:10px">
      ${row('Consent check before publish', 'The roster will not place a woman on the night shift without her written consent on file', 'Enforced', 'g')}
      ${row('Priya S. · SMT-3 · consent withdrawn today', 'Moved to the A shift; the gap filled from certified standby', 'Moved', 'y', 'warn')}
      ${row('Drop-off log · cab 7', 'Last drop 06:42, confirmed by OTP from the worker', 'Closed', 'g')}
      ${row('POSH refresher · Ranjangaon', '1,860 of 1,912 complete · 52 due this week, contractors notified', '97%', 'g')}
      ${row('Maternity benefit · contract workers', '14 on leave, eligibility and payment tracked against each contractor', 'Tracked', 'b')}
    </div>
  </div>
</div>`

const scaleUI = `
<div class="tm">
  ${bar('goBetter · New plant mobilisation · Naidupeta PCB campus · first 1,000', 'Live')}
  <div class="tm-body">
    <div class="tm-gauges" style="margin-top:0">
      <div class="gg"><b>Contractors approved</b><span class="tr"><i style="--w:100%;--d:.3s"></i></span><span class="v">6 / 6</span></div>
      <div class="gg"><b>Joiners onboarded</b><span class="tr"><i style="--w:74%;--d:.4s"></i></span><span class="v">742 / 1,000</span></div>
      <div class="gg"><b>Verified and inducted</b><span class="tr"><i style="--w:66%;--d:.5s"></i></span><span class="v">658</span></div>
      <div class="gg"><b>ESD certified, on the line</b><span class="tr"><i style="--w:58%;--bc:#FF9518;--d:.6s"></i></span><span class="v">581</span></div>
    </div>
    <div class="tm-rows" style="margin-top:12px">
      ${row('Rule set · Andhra Pradesh', 'Copied from your Tamil Nadu set, state limits and holidays changed in one place', 'Ready', 'g')}
      ${row('Batch upload · 214 joiners · Sri Venkateswara Manpower', '196 clean, 18 returned to the contractor to fix', 'Running', 'b')}
      ${row('Telugu onboarding on WhatsApp', 'Offer, Aadhaar, UAN and induction in Telugu, 41 minutes on average', 'Live', 'g')}
    </div>
  </div>
</div>`

const auditUI = `
<div class="sy-aud">
  ${[
    ['#1B2D93', 'Automotive customers', 'IATF 16949 and customer audits', ['Operator qualification per station', 'Training records with dates', 'Traceability of who built what, and when'], 'Station certifications on the roster'],
    ['#0d7d85', 'Medical device customers', 'ISO 13485 and customer audits', ['Trained before touching the line', 'Cleanroom and gowning training', 'Records kept for audit, per worker'], 'Course status gates line access'],
    ['#F39200', 'Global electronics brands', 'Supplier codes such as RBA', ['Age 18+ verified', 'No recruitment fee paid by the worker', 'Weekly hours, including overtime'], 'Declarations and weekly hours file'],
  ].map(([c, h, k, l, g], i) => `<div class="a" style="--ac:${c};--d:${0.1 + i * 0.1}s"><div class="k">${k}</div><h4>${h}</h4><ul>${(l as string[]).map((x) => `<li>${x}</li>`).join('')}</ul><div class="g">✓ ${g}</div></div>`).join('')}
</div>`

export const syrmaSlides: SlideDef[] = [
  {
    id: 'sy1', theme: 'darker', title: 'Cover',
    html: `${skhCss}${sy}
    <div class="glow"></div>
    <div class="tel center" style="padding-top:0">
      <div class="tel-coverwrap">
        <div class="tel-covertext">
          <span class="kick">goBetter CLMS · for Syrma SGS · contract workforce</span>
          <h1>Fourteen plants today, more coming. <em>Every contract worker on one record, from day one.</em></h1>
          <p>Every contractor’s licence, every joiner, every shift, every overtime hour, every PF challan and every customer audit, across all your plants and states, on one record.</p>
          <div class="tel-nums" style="margin-top:24px">
            <div><div class="n">500K</div><div class="l">Contract workers a month at Reliance · Retail, Jio, O2C</div></div>
            <div><div class="n">3,000<em>+</em></div><div class="l">Vendors on one rule engine</div></div>
            <div><div class="n">45 min</div><div class="l">Average joiner onboarding on WhatsApp</div></div>
          </div>
        </div>
        ${coverRing(['Vendors', 'Onboard', 'Verify', 'Gate', 'Attend', 'Overtime', 'Pay', 'Audit'], ['one', 'worker record'], false)}
      </div>
    </div>`,
  },

  pick('cmA'),
  pick('cmB', (h) => h.replace('<div class="tel-logos">', '<div class="foot" style="margin:4px 0 8px">Outcomes are client-reported.</div><div class="tel-logos">')),

  plainSlide('sy2', 'darker', 'Syrma SGS today',
    'Syrma SGS today · from your own FY26 report',
    'Almost all of your shop floor is contract. <em>Your report already sets the bar: proof before payment.</em>',
    `<div>
    <div class="tel-stakes">
      <div class="st" style="--d:.15s"><div class="n">8,253</div><div class="l">contract workers of 8,426, up from 6,674</div><p>About 98% of the people on your lines come through contractors, and the number grew by a quarter in one year.</p><div class="src">BRSR FY26</div></div>
      <div class="st" style="--d:.3s"><div class="n">4,547</div><div class="l">contract workers paid exactly the minimum wage</div><p>55% of them, 60% of contract women. Every state wage revision under the Code on Wages changes their pay overnight.</p><div class="src">BRSR FY26</div></div>
      <div class="st" style="--d:.45s"><div class="n">87% → 61%</div><div class="l">workers covered by ESI, FY25 to FY26</div><p>Auditors and customers will ask why. The answer has to be per worker, per contractor, per month.</p><div class="src">BRSR FY26</div></div>
      <div class="st" style="--d:.6s"><div class="n">48%</div><div class="l">of your workforce are women</div><p>Night-shift consent, transport, maternity and POSH, recorded for every woman on every shift.</p><div class="src">BRSR FY26</div></div>
    </div>
    <div class="tel-band ghost" style="margin-top:14px"><span class="bl">Your own rule</span><p>Your report says contractors are paid only after proof of last month’s PF, ESI, welfare fund and professional tax. goBetter turns that monthly paper check into a match, worker by worker, before every bill is released.</p></div>
    </div>`, { glow: true }),

  pick('cmD'),
  pick('cm2'),
  plainSlide('sy8', 'light', 'Choosing a CLMS',
    'Choosing a CLMS · what to test in any vendor, including us',
    'Most CLMS tools onboard, track attendance and calculate pay. <em>Four things decide whether you are protected.</em>',
    `<div class="sk-cmp">
      <div class="par">
        <div class="lbl">What most CLMS tools do well, and so do we</div>
        <div class="it"><b>Onboarding with ID and UAN checks</b><span>Aadhaar, face match, bank and UAN validated at joining.</span></div>
        <div class="it"><b>Attendance and rostering</b><span>Biometric and mobile attendance, shifts, overtime approval, state holidays.</span></div>
        <div class="it"><b>Wages, registers and vendor bills</b><span>Minimum wage checks, statutory registers, invoices from approved attendance.</span></div>
        <div class="it"><b>Documents and expiry alerts</b><span>Vendor licences and policies tracked to expiry.</span></div>
      </div>
      <div class="up">
        <div class="lbl">Ask every vendor to show these live</div>
        <div class="it" style="--d:.15s"><i>1</i><div><b>A gate pass refused</b><span>Show a pass blocked because a contractor is over its licence or an induction has lapsed, not just an alert.</span></div></div>
        <div class="it" style="--d:.25s"><i>2</i><div><b>A challan matched to each worker</b><span>Show one worker’s PF short-paid inside a contractor’s challan, before you pay the bill.</span></div></div>
        <div class="it" style="--d:.35s"><i>3</i><div><b>A night shift refused without consent</b><span>Show the roster stop a woman being placed on nights without her written consent.</span></div></div>
        <div class="it" style="--d:.45s"><i>4</i><div><b>A new plant set up in a day</b><span>Show a state rule set copied, a contractor batch uploaded and Telugu onboarding running.</span></div></div>
      </div>
    </div>
    <div class="foot" style="margin-top:8px">We will show all four live in this meeting. Our proof is named: Reliance with 500K contract workers a month and 3,000+ vendors, BPCL’s refinery gates, Zepto across 967 sites.</div>`),

  pick('cm3'),

  plainSlide('sy3', 'light', 'Your plants on one record',
    'Your plants · one record across states, acquisitions and new sites',
    'Each plant keeps its own rules. <em>Head office sees every one of them, live.</em>',
    `<div class="sy-plants">
      ${[
        ['Tamil Nadu · 5 plants', 'Chennai · Bargur · Uthiramerur · Madapattu', 'RFID, IT and the new laptop line with MSI. Tamil onboarding.', false],
        ['Haryana · 5 plants', 'Manesar · Gurgaon · Bawal', 'Automotive and telecom lines. Hindi onboarding, Haryana rules.', false],
        ['Karnataka', 'Bengaluru', 'Electronics manufacturing; the Elemaster JV nearby. Kannada.', false],
        ['Himachal · Rajasthan', 'Baddi and Rajasthan', 'Each state on its own rule set and holidays.', false],
        ['Maharashtra · new', 'Pune · Ranjangaon', '26.5-acre campus for circuit-board assembly and inverters.', true],
        ['Andhra Pradesh · new', 'Naidupeta PCB', 'India’s largest PCB plant, 1,000+ jobs, trial in April 2027. Telugu.', true],
        ['Subsidiaries and JVs', 'Elcome · Johari Medtech · Perfect ID', 'Outside your BRSR today; on the same record when you choose.', true],
        ['Germany', 'International', 'Outside contract-labour scope; in the leadership view if you wish.', false],
      ].map(([k, h, p, n], i) => `<div class="p${n ? ' new' : ''}" style="--d:${0.05 + i * 0.05}s"><div class="k">${k}</div><h4>${h}</h4><p>${p}</p></div>`).join('')}
    </div>
    <div class="tel-band light" style="margin-top:12px"><span class="bl">One rule engine</span><p>A rule set per state, copied and changed in one place for a new plant. Every plant, contractor and worker on the same record, whichever system they used before.</p></div>`),

  pick('cm4'), pick('cm5'), pick('cm6'), pick('cm6b'),

  problemSlide({
    id: 'sy4', theme: 'dark', title: 'New plant in weeks', rail, step: 4, demo: 'Live · mobilisation',
    kick: 'Scale-up · staffing a new plant',
    h2: 'A new plant staffed, verified and certified <em>in weeks, not months.</em>',
    qLabel: Q, quote: 'A new line needs 1,000 people. Contractors send names on spreadsheets, and the first month is spent chasing documents.',
    changes: [
      { ic: icons.layers, b: 'Rules ready on day one.', t: 'Copy a state rule set, change what differs, and the new plant runs on it.' },
      { ic: icons.users, b: 'Batches from every contractor.', t: 'Bulk upload or WhatsApp in the local language; every row checked against the work order and licence.' },
      { ic: icons.check, b: 'Only certified people on the line.', t: 'Verification, induction and ESD certification tracked per person, and the roster places only those who are ready.' },
    ],
    proof: { n: '45 min', p: 'average onboarding on WhatsApp at <b>Zepto</b>, documents to certificate, across 967 sites.' },
    vis: scaleUI,
    foot: 'Bulk and WhatsApp onboarding, rule sets and station certifications are live. Plant, contractor and numbers illustrative.',
  }),

  pick('cm6d'), pick('cm7'), pick('cm8'), pick('cm9'),
  pick('cm10'), pick('cm10b'), pick('cm11'), pick('cm11b'), pick('cm12'),

  problemSlide({
    id: 'sy5', theme: 'light', title: 'Women on every shift', rail, step: 7, demo: 'Live · night shift rules',
    kick: 'Women on every shift · consent, transport, POSH, maternity',
    h2: 'Half your workforce are women. <em>Every night shift, every consent and every cab, recorded.</em>',
    qLabel: Q, quote: 'Night-shift consent is a signed sheet at the time office. Nobody can say, for tonight, that every condition is met.',
    changes: [
      { ic: icons.check, b: 'Consent the roster respects.', t: 'Written consent per woman for night work; without it the roster will not place her, and withdrawal moves her the same day.' },
      { ic: icons.map, b: 'Safe transport, logged.', t: 'Cab, escort and drop-off recorded per shift, against the conditions your state sets.' },
      { ic: icons.shield, b: 'POSH and maternity.', t: 'POSH training tracked for every worker; maternity eligibility and payment checked against each contractor.' },
    ],
    proof: { n: '48%', p: 'women in your FY26 workforce. The same records serve your customers’ social audits.' },
    vis: womenUI,
    foot: 'Consent fields, roster rules and training tracking are live; transport logging is configured per plant. Conditions follow your state rules; interpretation stays with you and your advisors. Names illustrative.',
  }),

  problemSlide({
    id: 'sy9', theme: 'light', title: 'Compliance dashboard', rail, step: 10, demo: 'Live · compliance dashboard',
    kick: 'Compliance · every plant, every contractor, every month, on one screen',
    h2: 'Every compliance gap across 14 plants, <em>on one screen, before an auditor or a customer finds it.</em>',
    qLabel: Q, quote: 'Each plant sends a monthly compliance sheet. Head office finds a gap weeks later, after the bill has been paid.',
    changes: [
      { ic: icons.chart, b: 'Plant by plant, check by check.', t: 'Licences, PF and ESI, minimum wage, hours and overtime, registers and women’s night shifts, green, due or gap.' },
      { ic: icons.shield, b: 'Proof before payment.', t: 'Your rule, enforced: a contractor’s bill waits until last month’s PF, ESI, welfare fund and tax are matched to each worker.' },
      { ic: icons.doc, b: 'Ready for any audit.', t: 'Drill from a red cell to the worker, the challan and the register in two clicks; export for auditors and customers.' },
    ],
    proof: { n: '−80%', p: 'vendor non-compliance at <b>Reliance</b> once every contractor was checked this way every month.' },
    vis: compUI, wide: true,
    foot: 'Compliance dashboard, challan matching, registers and alerts are live. Plants, contractors and numbers illustrative.',
  }),

  pick('cm13'), pick('cm14'), pick('cm15'), pick('cm16'), pick('cm17'),

  plainSlide('sy6', 'light', 'Ready for every customer audit',
    'Customer audits · the records your customers ask for',
    'Your customers audit your people too. <em>Every answer comes out of the same record.</em>',
    `<div>${auditUI}
      <div class="foot" style="margin-top:10px">Audit regimes are examples of what automotive, medical and global electronics customers typically require; your own customer list decides which apply.</div></div>`),

  pick('cm8b'),
  pick('cm18'), pick('cm19'), pick('cm20'), pick('cm21'),

  plainSlide('sy7', 'darker', 'How this starts',
    'How this starts · one plant now, the new plants next',
    'Start where it hurts most, <em>then run every new plant on it from day one.</em>',
    `<div>
      <div class="tel-phase4">
        <div class="ph4" style="--d:.15s"><div class="w">Weeks 1–3</div><h4>Design</h4><p>Your plants, contractors, work orders and state rule sets; night-shift and certification rules agreed with you.</p><div class="who">Joint</div></div>
        <div class="ph4" style="--d:.3s"><div class="w">Weeks 3–8</div><h4>Pilot one plant</h4><p>Onboarding, attendance, overtime and challan checks live at one existing plant, for a full pay cycle.</p><div class="who">Measured</div></div>
        <div class="ph4" style="--d:.45s"><div class="w">From the first new site</div><h4>New plants on it</h4><p>Ranjangaon or Naidupeta mobilised on goBetter from the first contractor and the first joiner.</p><div class="who">BetterPlace</div></div>
        <div class="ph4" style="--d:.6s"><div class="w">Your schedule</div><h4>All plants</h4><p>The remaining plants in waves; one view for leadership across every state.</p><div class="who">Staged</div></div>
      </div>
      <div class="tel-close" style="margin-top:16px;grid-template-columns:1.2fr .8fr">
        <div class="tel-band ghost" style="margin:0;grid-template-columns:auto 1fr"><span class="bl">What we measure</span><p>Days from contractor request to a certified worker on the line, overtime paid right, challans matched, and audit requests answered the same day.</p></div>
        <div class="tel-contact"><div class="nm">Anuj Saxena</div><div class="rl">Director, Product · BetterPlace</div><a href="mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent('Syrma SGS · goBetter CLMS')}">anuj.saxena@betterplace.co.in</a></div>
      </div>
    </div>`, { glow: true }),
]

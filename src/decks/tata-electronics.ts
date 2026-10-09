import type { SlideDef } from '../lib/types'
import { icons } from './html'

// Tata Electronics · CLMS demo deck (Oct 2026), v2 after a six-persona rehearsal
// (Head HR, HR digitisation, plant HR, compliance/legal, CFO+CISO, presentation designer).
// Storyline agreed with Bhuvan (Head HR, Components business): credentials in two slides, the
// stakes, then the seven problems Tata gave us in the order they happen to a contract worker
// (day 0 → every shift → every month), switching to live software at each "▶ Live" marker,
// then fit with e-Sparsh/SAP, security, an honest status table, the eight-week plan.
// Rules: every capability carries its real status (live / configured for Tata in the pilot /
// pilot model on Tata's data). No prices, uptime or SLAs. Hours shown in mocks are legal under
// TN's saved Factories Act rules (9 h/day, 48 h/week) and Apple's 60 h cap. Tata facts are from
// public reporting (Tata Sons AR 2025-26, The Ken May 2025, Apple supplier accountability 2025).

const svg = (d: string) => `<svg viewBox="0 0 24 24">${d}</svg>`

const RAIL = ['Onboard', 'Absence', 'Roster', 'Line time', 'Attrition', 'Compliance', 'Intelligence']
const rail = (on: number, demo?: string) => `
  <div class="tel-rail">
    ${RAIL.map((l, i) => {
      const n = i + 1
      const cls = n === on ? 'on' : n < on ? 'done' : ''
      const sep = (n === 2 || n === 5 || n === 6) ? '<span class="sep"></span>' : ''
      return `${sep}<span class="rl ${cls}"><i>${n}</i>${l}</span>`
    }).join('')}
    ${demo ? `<span class="demo">${demo}</span>` : ''}
  </div>`

type Change = { ic: string; b: string; t: string }
type P = {
  id: string; theme: 'light' | 'dark' | 'darker'; title: string; n: number; kick: string; h2: string; demo: string;
  quote: string; changes: Change[]; proof: { n: string; p: string }; vis: string; foot?: string; flip?: boolean; wide?: boolean
}
const pslide = (p: P): SlideDef => ({
  id: p.id, theme: p.theme, title: p.title,
  html: `
  <div class="tel">
    ${rail(p.n, p.demo)}
    <div class="tel-head"><div><span class="kick">${p.kick}</span><h2>${p.h2}</h2></div></div>
    <div class="tel-body${p.flip ? ' flip' : ''}${p.wide ? ' wide' : ''}">
      ${p.flip ? `<div class="tel-vis">${p.vis}</div>` : ''}
      <div class="tel-say">
        <div class="blk"><div class="lbl">You told us</div><div class="tq">${p.quote}</div></div>
        <div class="blk"><div class="lbl">What changes</div><ul>${p.changes.map((c) => `<li><span class="ic">${svg(c.ic)}</span><span><b>${c.b}</b> ${c.t}</span></li>`).join('')}</ul></div>
        <div class="proof"><div class="n">${p.proof.n}</div><p>${p.proof.p}</p></div>
      </div>
      ${p.flip ? '' : `<div class="tel-vis">${p.vis}</div>`}
      ${p.foot ? `<div class="foot">${p.foot}</div>` : ''}
    </div>
  </div>`,
})

const bar = (t: string, live = 'Live', amber = false) =>
  `<div class="tm-bar"><span class="d"><i></i><i></i><i></i></span><span class="t">${t}</span><span class="live${amber ? ' amber' : ''}">${live}</span></div>`

/* ---------------- mocks ---------------- */

const onbMock = `
<div class="tm">
  ${bar('goBetter · Onboard · Hosur · Shree Manpower · WO-26-HSR-0412', 'Next shift')}
  <div class="tm-body">
    <div class="tm-onb" data-cycle="1500">
      <div class="tm-steps">
        <div class="st cyc"><span class="dot"><span>1</span></span><div><h5>Aadhaar eKYC, assisted at the desk</h5><p>OTP or offline XML through a UIDAI-licensed KUA partner, assisted at the desk when the phone is a parent's. Name, age, address verified. No photocopies.</p></div><span class="tm-t">2 min</span></div>
        <div class="st cyc"><span class="dot"><span>2</span></span><div><h5>Vendor, work order, line, skill grade</h5><p>Checked against the sanctioned strength on the order and the role list you have approved for contract work.</p></div><span class="tm-t">4 min</span></div>
        <div class="st cyc"><span class="dot"><span>3</span></span><div><h5>Face registered, liveness, background check started</h5><p>Identity clears in minutes. Address and court checks run behind her and return within 24 hours.</p></div><span class="tm-t">9 min</span></div>
        <div class="st cyc"><span class="dot"><span>4</span></span><div><h5>Induction in Tamil, with a test</h5><p>ESD, gowning, line SOP. Ten questions. A dated certificate on pass. Done at the onboarding centre, not on the line.</p></div><span class="tm-t">38 min</span></div>
        <div class="st cyc"><span class="dot"><span>5</span></span><div><h5>Gate pass issued, provisional for 24 h</h5><p>Opens on identity, strength and induction. Confirmed when the background check returns; withdrawn automatically if it fails.</p></div><span class="tm-t">41 min</span></div>
        <div class="st cyc"><span class="dot"><span>6</span></span><div><h5>First punch · Gate 3 · 05:52 · A shift</h5><p>Her line, shift, vendor and work order are on the record before she reaches the floor.</p></div><span class="tm-t">Next shift</span></div>
      </div>
      <div class="tm-side">
        <div class="tm-clock"><div class="l">Offer to first punch</div><div class="v">Next shift<small>not next week</small></div><div class="was">Today: <s>days of forms, photocopies and a queue at the time office</s></div></div>
        <div class="tm-card"><div class="l">Captured once · used by every module</div>
          <div class="tm-kv"><span>Vendor · work order</span><b>Shree · WO-0412</b><span>Line · skill grade</span><b>SMT-4 · G2</b><span>Shift pattern</span><b>A/B rotation</b><span>Hostel · bus route</span><b>Vidiyal B-7 · R12</b><span>UAN · bank</span><b>Verified</b><span>Night-shift consent</span><b>Separate · revocable</b></div>
        </div>
      </div>
    </div>
  </div>
</div>
`

const inductMock = `
<div class="tm">
  ${bar('AI Mia · induction agent · onboarding centre · தமிழ்', 'Live')}
  <div class="tm-body" style="display:grid;grid-template-columns:176px 1fr;gap:16px;align-items:start;">
    <div class="tm-phone"><div class="scr">
      <div class="ph"><i></i><div>AI Mia · Induction<small>Tata Electronics · Hosur</small></div></div>
      <div class="msgs">
        <div class="m sys" style="--d:.1s">Language · தமிழ்</div>
        <div class="m" style="--d:.4s">Vanakkam Priya. Before your gate pass: ESD safety, cleanroom gowning, SMT line SOP. Three short videos, then ten questions.</div>
        <div class="m" style="--d:1.3s">Q3 · Which strap do you wear before touching a board?<div class="opt"><span>Rubber band</span><span class="pick">ESD wrist strap</span><span>None</span></div></div>
        <div class="cam" style="animation:telpop .4s var(--ease) 2.3s both">LIVE · PPE PHOTO CHECK</div>
        <div class="m sys" style="--d:2.9s">Certificate issued · valid 12 months</div>
      </div>
    </div></div>
    <div class="tm-side">
      <div class="tm-card"><div class="l">What the pass checks before it opens</div>
        <div class="tm-kv"><span>Work order live, within sanctioned strength</span><b class="chip g">Clear</b><span>Age, Aadhaar, face registered</span><b class="chip g">Clear</b><span>Background check</span><b class="chip y">Provisional · 24 h</b><span>Induction certificate</span><b class="chip g">Passed 9/10</b><span>Role on the approved contract-work list</span><b class="chip g">Yes</b></div>
      </div>
      <div class="tm-card"><div class="l">Rules you set once · enforced on every onboarding</div>
        <div class="tm-kv"><span>Minimum age</span><b>18</b><span>Roles open to contract workers</span><b>Your list</b><span>Sanctioned strength</span><b>Per work order</b><span>Mandatory courses per line</span><b>3 for SMT</b><span>Refresher cadence</span><b>12 months</b></div>
      </div>
    </div>
  </div>
</div>`

const heatRow = (name: string, cells: number[], d: number) =>
  `<span class="hl">${name}</span>${cells.map((v, i) => `<span class="c l${v}" style="--d:${(d + i * 0.03).toFixed(2)}s"></span>`).join('')}`
const absMock = `
<div class="tm">
  ${bar('goBetter · Attend analytics · Hosur · last 14 days · absence by line', 'Near real time')}
  <div class="tm-body">
    <div class="tm-abs">
      <div>
        <div class="tm-h"><b>Where absence clusters</b><span>Mon · payday+1 · festival eve</span></div>
        <div class="tm-heat">
          <span class="hl"></span>${['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => `<span class="hd${i === 7 ? ' pay' : ''}">${i === 7 ? 'Pay' : d}</span>`).join('')}
          ${heatRow('SMT Line 4', [3, 1, 1, 1, 2, 1, 0, 4, 3, 1, 1, 2, 1, 0], 0.2)}
          ${heatRow('CNC-2', [2, 1, 0, 1, 1, 1, 0, 3, 2, 1, 0, 1, 1, 0], 0.3)}
          ${heatRow('Final Assy B', [2, 1, 1, 0, 1, 2, 0, 3, 2, 1, 1, 1, 2, 0], 0.4)}
          ${heatRow('Packing', [1, 0, 0, 1, 1, 0, 0, 2, 1, 0, 0, 1, 1, 0], 0.5)}
          ${heatRow('Quality', [1, 1, 0, 0, 1, 1, 0, 2, 1, 0, 1, 0, 1, 0], 0.6)}
          ${heatRow('Stores', [1, 0, 0, 0, 1, 0, 0, 2, 1, 0, 0, 0, 1, 0], 0.7)}
        </div>
        <div class="tm-legend"><span><i style="background:rgba(33,66,185,.08)"></i>0–2%</span><span><i style="background:rgba(33,66,185,.18)"></i>2–5%</span><span><i style="background:rgba(255,196,1,.55)"></i>5–8%</span><span><i style="background:rgba(255,149,24,.8)"></i>8–12%</span><span><i style="background:var(--red)"></i>12%+</span></div>
      </div>
      <div class="tm-pred" data-cycle="2600">
        <div class="tm-h"><b>Tomorrow · Thu · expected short</b><span class="chip y">Pilot model</span></div>
        <div class="row"><span class="ln">SMT Line 4</span><span class="bar"><i style="--w:72%;--bc:var(--red);--d:.3s"></i></span><span class="pc">−14</span></div>
        <div class="row"><span class="ln">CNC-2</span><span class="bar"><i style="--w:48%;--bc:#FF9518;--d:.4s"></i></span><span class="pc">−9</span></div>
        <div class="row"><span class="ln">Final Assy B</span><span class="bar"><i style="--w:34%;--bc:#FF9518;--d:.5s"></i></span><span class="pc">−6</span></div>
        <div class="row"><span class="ln">Packing</span><span class="bar"><i style="--w:12%;--d:.6s"></i></span><span class="pc">−2</span></div>
        <div class="act">
          <div class="cycpane"><span>21:10</span><span>Backfill request for <b>14 on SMT-4</b> sent to Shree Manpower and Ganpati Services on the contractor portal</span></div>
          <div class="cycpane"><span>21:24</span><span><b>9 standby workers</b> accepted in the worker app · 5 still open · all logged</span></div>
          <div class="cycpane"><span>21:40</span><span>Line 4 supervisor told: <b>plan for 5 short</b> or borrow 5 from Packing's A-shift surplus</span></div>
          <div class="cycpane"><span>05:58</span><span>Actual: <b>12 absent</b>, 9 backfilled, 3 borrowed from Packing. Line started full.</span></div>
        </div>
      </div>
    </div>
  </div>
</div>`

const rosterMock = `
<div class="tm">
  ${bar('goBetter · Roster · Hosur · week of 13 Oct · demand from the plan', 'Filled')}
  <div class="tm-body">
    <div class="tm-roster" data-cycle="1800">
      <span class="rh">Line · plan</span><span class="rh">A · 06:00–14:00</span><span class="rh">B · 14:00–22:00</span><span class="rh">C · 22:00–06:00</span>
      <div class="rl2">SMT Line 4<small>Plan 150 · G2+</small></div><div class="cell ok" style="--d:.2s">150 / 150<small>Shree 96 · Ganpati 54</small></div><div class="cell ok" style="--d:.25s">150 / 150<small>Shree 90 · Ganpati 60</small></div><div class="cell gap" style="--d:.3s"><span class="cyc">136 / 150<small>14 short</small></span><span class="cyc g2">Asked 2 contractors<small>14 · by 20:00</small></span><span class="cyc g3">150 / 150<small>night consent 150/150</small></span></div>
      <div class="rl2">CNC-2<small>Plan 84 · G3</small></div><div class="cell ok" style="--d:.35s">84 / 84<small>Krishna 84</small></div><div class="cell ok" style="--d:.4s">84 / 84<small>Krishna · Excel upload</small></div><div class="cell ok" style="--d:.45s">84 / 84<small>night consent 84/84</small></div>
      <div class="rl2">Final Assy B<small>Plan 220 · G1+</small></div><div class="cell ok" style="--d:.5s">220 / 220</div><div class="cell ok" style="--d:.55s">220 / 220</div><div class="cell off" style="--d:.6s">No C shift</div>
      <div class="rl2">Packing<small>Plan 60</small></div><div class="cell ok" style="--d:.65s">65 / 60<small>5 surplus · lendable</small></div><div class="cell ok" style="--d:.7s">60 / 60</div><div class="cell ok" style="--d:.75s">60 / 60</div>
      <div class="rl2">Quality<small>Plan 40</small></div><div class="cell ok" style="--d:.8s">40 / 40</div><div class="cell ok" style="--d:.85s">40 / 40</div><div class="cell ok" style="--d:.9s">40 / 40</div>
    </div>
    <div class="tm-rules">
      <span class="chip b">TN · 9 h / day · 48 h / week</span><span class="chip b">1 rest day in 7</span><span class="chip b">Apple · 60 h incl. OT</span><span class="chip b">Night shift · written consent · transport to hostel</span><span class="chip b">Sanctioned strength per work order</span><span class="chip b">Drop list → transport vendor, per route</span><span class="chip r">2 breaches blocked this week</span>
    </div>
  </div>
</div>`

const seg = (cls: string, w: number, l: string, d: number) => `<i class="${cls}" style="--w:${w}%;--d:${d}s" data-l="${l}"></i>`
const lineMock = `
<div class="tm">
  ${bar('goBetter · Attend · one worker, one shift · Hosur · 9 Oct', 'Gate + line punches')}
  <div class="tm-body">
    <div class="tm-day">
      <div class="who"><span class="av">PS</span><div><b>Priya S · G2 operator · Shree Manpower</b><span>SMT Line 4 · A shift 06:00–14:00 · Vidiyal B-7</span></div></div>
      <div class="tm-track">
        ${seg('gate', 3.5, '', 0.2)}${seg('walk', 3, '', 0.3)}${seg('line', 51, 'ON LINE 06:08–10:30', 0.4)}${seg('brk', 3, '', 0.6)}${seg('line', 23.5, 'ON LINE', 0.7)}${seg('brk', 5.9, 'LUNCH', 0.85)}${seg('line', 9.8, 'LINE', 0.95)}${seg('gate', 1.4, '', 1.1)}
      </div>
      <div class="tm-ticks"><span>05:50</span><span>07:00</span><span>09:00</span><span>11:00</span><span>13:00</span><span>14:20</span></div>
      <div class="tm-punch"><span><b>Gate 3</b> face device · 05:52</span><span><b>Line 4 kiosk</b> · 06:08</span><span><b>Canteen</b> QR · 10:30 · 12:45</span><span><b>Line 4 kiosk</b> · 13:15</span><span><b>Gate 3</b> · 14:12</span></div>
      <div class="tm-kpis"><div><div class="n">8h 20m</div><div class="l">Inside the factory</div></div><div><div class="n">7h 12m</div><div class="l">On the line</div></div><div><div class="n hot">86%</div><div class="l">Line time share</div></div></div>
      <div class="tm-util">
        <div class="u"><span>SMT-4</span><span class="b"><i style="--w:86%;--d:.4s"></i></span><span class="v">86%</span></div>
        <div class="u"><span>CNC-2</span><span class="b"><i style="--w:89%;--d:.5s"></i></span><span class="v">89%</span></div>
        <div class="u"><span>Final B</span><span class="b"><i style="--w:78%;--bc:#FF9518;--d:.6s"></i></span><span class="v">78%</span></div>
        <div class="u"><span>Packing</span><span class="b"><i style="--w:91%;--d:.7s"></i></span><span class="v">91%</span></div>
      </div>
    </div>
  </div>
</div>`

const sigs = (rows: [string, string, boolean?][]) => `<div class="tm-sig">${rows.map(([b, w, ok]) => `<div class="s"><b>${b}</b><span class="w${ok ? ' ok' : ''}">${w}</span></div>`).join('')}</div>`
const attrMock = `
<div class="tm">
  ${bar('goBetter · Attrition risk · Hosur · this week · 312 high-risk of 23,400', 'Pilot model', true)}
  <div class="tm-body">
    <div class="tm-risk" data-cycle="3000">
      <div class="tm-risklist">
        <div class="r cyc"><span class="av">PS</span><div><b>Priya S · SMT-4</b><small>Shree · day 52 of tenure</small></div><span class="sc h">81</span></div>
        <div class="r cyc"><span class="av" style="background:#FF9518">KR</span><div><b>Kavitha R · Final B</b><small>Ganpati · day 71</small></div><span class="sc m">64</span></div>
        <div class="r cyc"><span class="av" style="background:#0d7d85">MT</span><div><b>Manoj T · CNC-2</b><small>Krishna · day 38</small></div><span class="sc m">58</span></div>
        <div class="r cyc"><span class="av" style="background:#3DBE7B">DK</span><div><b>Deepa K · Packing</b><small>Shree · day 204</small></div><span class="sc l">22</span></div>
      </div>
      <div class="tm-riskpane">
        <div class="cycpane">
          <div class="tm-h"><b>Why Priya is at 81</b><span>signals from her own record</span></div>
          ${sigs([['3 absences in 14 days', 'was 0 before'], ['Regularisation requests', '↑ 4 this month'], ['Shift-swap requests', '2 this month'], ['Pay query raised', '2 Oct · open'], ['Tenure window', 'day 45–90 · highest exit risk']])}
          <span class="tm-actbtn">▶ Supervisor check-in today · Tamil script · close the pay query</span>
        </div>
        <div class="cycpane">
          <div class="tm-h"><b>Why Kavitha is at 64</b><span>signals</span></div>
          ${sigs([['Hostel block changed', 'B-7 → D-2'], ['Late punches', '4 in 10 days'], ['Training refresher', 'not started'], ['Absences', '1 in 14 days', true]])}
          <span class="tm-actbtn">▶ Check bus route R12 · offer A-shift swap</span>
        </div>
        <div class="cycpane">
          <div class="tm-h"><b>Why Manoj is at 58</b><span>signals</span></div>
          ${sigs([['Tenure window', 'day 38 · entering risk window'], ['Hours incl. OT', '57 h this week · Apple cap 60'], ['Skill test', 'G3 pending 2 weeks'], ['Pay query', 'none', true]])}
          <span class="tm-actbtn">▶ Schedule G3 test · keep the week under 60 h</span>
        </div>
        <div class="cycpane">
          <div class="tm-h"><b>Deepa is at 22</b><span>stable</span></div>
          ${sigs([['Absences', '0 in 60 days', true], ['Tenure', 'day 204', true], ['Overtime', 'within cap', true], ['Pay queries', 'none', true]])}
          <span class="tm-actbtn" style="background:rgba(61,190,123,.2)">✓ No action · candidate for team-lead track</span>
        </div>
      </div>
    </div>
    <div class="note" style="margin-top:12px"><b>Used to keep, never to exclude.</b> Scores open a conversation. They are not an input to shift, overtime or renewal decisions, and that rule is written into the configuration.</div>
  </div>
</div>`

const rep = (b: string, s: string) => `<div class="rp cyc"><div><b>${b}</b><small>${s}</small></div><span class="chip">Generated</span></div>`
const compMock = `
<div class="tm">
  ${bar('goBetter · Compliance · Hosur · September 2026 · 38 contractors', 'Month closed 2 Oct')}
  <div class="tm-body">
    <div class="tm-comp">
      <div class="tm-reps" data-cycle="1300">
        ${rep('Register of workers employed by each contractor', 'OSH Code · per contractor · per work order')}
        ${rep('Muster roll and wage register', 'daily, from face punches · per contractor · contractor signs off')}
        ${rep('Overtime register with worker consent', 'hours vs cap · 2× rate · consent recorded per OT shift')}
        ${rep('Weekly working hours, per worker', 'Apple supplier format · 60 h incl. OT · 1 rest day in 7 · apprentices included')}
        ${rep('Women night-shift consent and transport log', 'consent, batch size, drop point, complaints committee on file')}
        ${rep('PF and ESI challan reconciliation', 'contractor challan OCR vs computed dues · worker by worker')}
        ${rep('Contractor licence and strength ledger', 'licence validity · sanctioned vs deployed · expiry alerts')}
        ${rep('Annual return · principal employer', 'OSH Code electronic return · pre-filled from the record')}
      </div>
      <div class="tm-side">
        <div class="tm-gauge">
          <svg viewBox="0 0 100 100"><circle class="ring" cx="50" cy="50" r="40"/><circle class="val" cx="50" cy="50" r="40" style="stroke-dashoffset:${Math.round(251 * (1 - 0.76))}"/><text class="gv" x="50" y="56" text-anchor="middle">45.6</text></svg>
          <div class="gt"><b>Weekly hours, plant-wide, before the week closes</b><p>Average 45.6 h. <b style="color:var(--red)">7 workers</b> cross 48 h with a Saturday shift: it runs as overtime only with recorded consent, at 2×, inside the quarterly cap. <b>0 workers</b> above Apple's 60.</p></div>
        </div>
        <div class="tm-recon"><div><div class="n">38</div><div class="l">Contractors</div></div><div><div class="n g">36</div><div class="l">Challans match</div></div><div><div class="n r">2</div><div class="l">Short-paid</div></div><div><div class="n r">₹1.9L</div><div class="l">PF gap flagged</div></div></div>
        <div class="note"><b>Flag raised to Tata Electronics.</b> Contractor notified with the worker-level gap. Whether to hold the bill is your decision, with the wage-liability rule (OSH Code and Code on Social Security) in front of you.</div>
      </div>
    </div>
  </div>
</div>`

const biMock = `
<div class="tm">
  ${bar('goBetter · Analytics · Tata Electronics · contract + on-roll · Oct 2026', 'Near real time')}
  <div class="tm-body">
    <div class="tm-filters"><span>Plant <b>Hosur</b></span><span>Line <b>All</b></span><span>Vendor <b>All (38)</b></span><span>Shift <b>All</b></span><span>Period <b>Oct 2026</b></span><span>Worker type <b>Contract + on-roll</b></span></div>
    <div class="tm-bi">
      <div class="w"><div class="l"><i>3</i>Deployed today vs plan</div><div class="n"><span data-t="23418">0</span><small>+2.1%</small></div></div>
      <div class="w"><div class="l"><i>2</i>Absenteeism · month</div><div class="n">6.8%<small>−1.4 pt</small></div></div>
      <div class="w"><div class="l"><i>5</i>High attrition risk</div><div class="n"><span data-t="312">0</span><small class="bad">+28</small></div></div>
      <div class="w"><div class="l"><i>6</i>Contractors with PF gaps</div><div class="n">2<small>of 38</small></div></div>
      <div class="w s2"><div class="l"><i>6</i>Weekly hours per worker · 48 h ordinary · 60 h incl. OT</div>
        <svg viewBox="0 0 300 70"><g class="bars">${[38, 42, 40, 44, 46, 45, 47, 48, 44, 41, 39, 43].map((h, i) => `<rect x="${8 + i * 24}" y="${68 - h}" width="16" height="${h}" rx="3" style="--d:${0.2 + i * 0.05}s"${i === 7 ? ' class="cap"' : ''}/>`).join('')}</g><line x1="0" y1="20" x2="300" y2="20" stroke="#FF9518" stroke-dasharray="4 3"/><text x="4" y="16" style="font:8px var(--mono);fill:#FF9518">48 h · OT with consent</text><line x1="0" y1="8" x2="300" y2="8" stroke="var(--red)" stroke-dasharray="4 3"/><text x="200" y="6" style="font:8px var(--mono);fill:var(--red)">60 h · Apple cap</text></svg></div>
      <div class="w s2"><div class="l"><i>3</i>Shortfall by line · current shift</div>
        <div class="tree"><div class="a" style="--d:.2s">SMT Line 4<b>−14</b></div><div class="b" style="--d:.3s">CNC-2<b>−9</b></div><div class="c" style="--d:.4s">Final B<b>−6</b></div><div class="e" style="--d:.5s">Packing<b>−2</b></div><div class="e" style="--d:.6s">Quality<b>−1</b></div></div></div>
      <div class="w s2"><div class="l"><i>4</i>Line-time share · 90 days</div>
        <svg viewBox="0 14 300 40"><path class="sparkfill" d="M0 50 L30 44 L60 48 L90 38 L120 41 L150 30 L180 34 L210 24 L240 28 L270 18 L300 20 L300 70 L0 70Z"/><path class="spark" d="M0 50 L30 44 L60 48 L90 38 L120 41 L150 30 L180 34 L210 24 L240 28 L270 18 L300 20"/></svg></div>
      <div class="w s2"><div class="l"><i>1</i>Contractor fill rate · onboarding time · this week</div>
        <div class="tm-util" style="margin-top:8px">
          <div class="u"><span>Shree</span><span class="b"><i style="--w:98%;--d:.3s"></i></span><span class="v">98% · 1 shift</span></div>
          <div class="u"><span>Ganpati</span><span class="b"><i style="--w:94%;--d:.4s"></i></span><span class="v">94% · 1 shift</span></div>
          <div class="u"><span>Krishna</span><span class="b"><i style="--w:100%;--d:.5s"></i></span><span class="v">100% · 2 shifts</span></div>
          <div class="u"><span>Bhoomi</span><span class="b"><i style="--w:81%;--bc:var(--red);--d:.6s"></i></span><span class="v">81% · 4 shifts</span></div>
        </div></div>
    </div>
  </div>
</div>`

const rampMock = `
<div class="tm">
  ${bar('goBetter · Deployment vs plan · Hosur · Jun 2026 → Jan 2027', 'Illustrative ramp', true)}
  <div class="tm-body tm-ramp">
    <svg viewBox="0 0 640 250">
      <g class="grid">${[40, 90, 140, 190].map((y) => `<line x1="40" y1="${y}" x2="620" y2="${y}"/>`).join('')}</g>
      ${['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'].map((m, i) => `<text class="ax" x="${40 + i * 82.8}" y="236">${m}</text>`).join('')}
      <text class="ax" x="8" y="44">28k</text><text class="ax" x="8" y="94">24k</text><text class="ax" x="8" y="144">20k</text><text class="ax" x="8" y="194">16k</text>
      <path class="fill" d="M40 171 L123 171 L206 146 L288 115 L371 96 L454 96 L537 128 L620 146 L620 215 L40 215Z"/>
      <path class="demand" d="M40 168 L123 168 L206 138 L288 108 L371 90 L454 90 L537 122 L620 142"/>
      <path class="deployed" d="M40 171 L123 171 L206 146 L288 115 L371 96 L454 96 L537 128 L620 146"/>
      <circle class="dot" cx="288" cy="115" r="5"/><rect class="tagbox" x="52" y="44" width="300" height="40" rx="7"/><text class="tag" x="62" y="60">Ramp up · +6,000 in eight weeks</text><text class="tag" x="62" y="75" style="font-weight:500;fill:var(--muted)">order strength raised · 3 contractors · beds pace it</text>
      <circle class="dot" cx="537" cy="128" r="5"/><rect class="tagbox" x="384" y="160" width="232" height="40" rx="7"/><text class="tag" x="394" y="176">Ramp down · −4,000 as orders close</text><text class="tag" x="394" y="191" style="font-weight:500;fill:var(--muted)">passes expire · F&amp;F inputs sent</text>
      <rect x="380" y="18" width="12" height="3" fill="var(--red)"/><text class="ax" x="396" y="22">Plan (production)</text>
      <rect x="500" y="18" width="12" height="3" fill="var(--navy)"/><text class="ax" x="516" y="22">Deployed (face-verified)</text>
    </svg>
  </div>
</div>`

const archMock = `
<div class="tm">
  ${bar('Who is the system of record for what · e-Sparsh · SAP · goBetter', 'Integration map')}
  <div class="tm-body tm-arch">
    <svg viewBox="0 0 700 250">
      <rect class="box soft" x="12" y="18" width="150" height="56" rx="12"/><text class="bt" x="26" y="42">Gate face devices</text><text class="bs" x="26" y="58">LINE KIOSKS · CANTEEN QR</text>
      <rect class="box soft" x="12" y="96" width="150" height="56" rx="12"/><text class="bt" x="26" y="120">Contractors (38)</text><text class="bs" x="26" y="136">PORTAL · CHALLANS</text>
      <rect class="box soft" x="12" y="174" width="150" height="56" rx="12"/><text class="bt" x="26" y="198">Production plan</text><text class="bs" x="26" y="214">DEMAND · LINE · SHIFT</text>
      <rect class="box hero" x="230" y="52" width="220" height="146" rx="16"/><text class="bt w" x="250" y="82" style="font-size:13px">goBetter CLMS</text><text class="bs w" x="250" y="100">ONE RECORD · EVERY WORKER</text>
      <text class="bs w" x="250" y="128">ONBOARD · GATE · ATTEND · ROSTER</text><text class="bs w" x="250" y="144">OT · REGISTERS · RECONCILIATION</text><text class="bs w" x="250" y="160">ATTRITION + ABSENCE MODELS</text><text class="bs w" x="250" y="184" style="fill:var(--yellow)">INDIA-HOSTED · ISO 27001 · SOC 2</text>
      <rect class="box" x="530" y="18" width="160" height="56" rx="12"/><text class="bt" x="544" y="42">e-Sparsh</text><text class="bs" x="544" y="58">ON-ROLL HR · LEAVE</text>
      <rect class="box" x="530" y="96" width="160" height="56" rx="12"/><text class="bt" x="544" y="120">SAP · payroll · AP</text><text class="bs" x="544" y="136">DAYS · OT · INVOICES</text>
      <rect class="box" x="530" y="174" width="160" height="56" rx="12"/><text class="bt" x="544" y="198">Apple · auditors</text><text class="bs" x="544" y="214">HOURS · REGISTERS · RBA</text>
      <path class="ln" d="M162 46 C200 46 200 92 230 92" style="--d:.2s"/><path class="ln" d="M162 124 L230 124" style="--d:.35s"/><path class="ln" d="M162 202 C200 202 200 160 230 160" style="--d:.5s"/>
      <path class="ln y" d="M450 92 C490 92 490 46 530 46" style="--d:.65s"/><path class="ln" d="M450 124 L530 124" style="--d:.8s"/><path class="ln" d="M450 160 C490 160 490 202 530 202" style="--d:.95s"/>
      <text class="lt" x="464" y="74">sync ⇄</text><text class="lt" x="458" y="118">days · OT</text><text class="lt" x="462" y="192">exports</text>
      <text class="lt" x="170" y="78">punches</text><text class="lt" x="168" y="118">workers · docs</text><text class="lt" x="172" y="186">demand</text>
    </svg>
    <div class="tm-sor">
      <div class="h">Object</div><div class="h">System of record</div><div class="h">Flows to</div><div class="h">Interface</div>
      <div>On-roll employee master, leave</div><div><b>e-Sparsh</b></div><div>goBetter reads it for attendance</div><div>API or nightly file · agreed with Tata group IT</div>
      <div>Contract worker master, gate pass, induction</div><div><b>goBetter</b></div><div>Contractor portal</div><div>Built in</div>
      <div>Attendance and overtime, everyone</div><div><b>goBetter</b></div><div>e-Sparsh (on-roll) · SAP (contract days, OT)</div><div>API · daily</div>
      <div>Work orders, contractor invoices, payment</div><div><b>SAP</b></div><div>goBetter checks invoice vs verified attendance; hold stays in SAP</div><div>API · per invoice</div>
    </div>
  </div>
</div>`

/* ---------------- slides ---------------- */

const ringNodes = RAIL.map((l, i) => {
  const a = (-90 + i * (360 / 7)) * Math.PI / 180
  const x = 200 + Math.cos(a) * 150, y = 200 + Math.sin(a) * 150
  return `<g class="cyc node" style="--d:${0.4 + i * 0.12}s"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="26"/><text x="${x.toFixed(1)}" y="${(y - 4).toFixed(1)}" text-anchor="middle" class="nn">${i + 1}</text><text x="${x.toFixed(1)}" y="${(y + 10).toFixed(1)}" text-anchor="middle" class="nl">${l}</text></g>`
}).join('')

export const tataElectronicsSlides: SlideDef[] = [
  {
    id: 'te1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="tel center" style="padding-top:0">
      <div class="tel-coverwrap">
        <div class="tel-covertext">
          <span class="kick">BetterPlace × Tata Electronics · October 2026</span>
          <h1>Seven problems. <em>One record</em> for every contract worker.</h1>
          <p>From the day she is offered a place on the line to the month-end register. Onboarding, attendance, rostering, line time, attrition, compliance and the intelligence on top, shown on the software that runs 300,000 contract workers today.</p>
          <div class="meta"><span>Working session · Components business HR</span><span>Slides + live software</span><span>Confidential</span></div>
        </div>
        <div class="tel-ring" data-cycle="1400">
          <svg viewBox="0 0 400 400">
            <circle class="orbit" cx="200" cy="200" r="150"/>
            <circle class="orbit2" cx="200" cy="200" r="150"/>
            ${ringNodes}
            <text x="200" y="192" text-anchor="middle" class="cn">one</text><text x="200" y="216" text-anchor="middle" class="cn">worker record</text>
          </svg>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'te2', theme: 'dark', title: 'Who we are',
    html: `
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">Credentials · 1 of 2</span><h2>Ten years on the frontline, 25 million worker profiles, <em>built for your scale.</em></h2></div></div>
      <div class="tel-cred">
        <div>
          <div class="tel-nums">
            <div><div class="n">25M<em>+</em></div><div class="l">Verified worker profiles</div></div>
            <div><div class="n">1,000<em>+</em></div><div class="l">Enterprises on the platform</div></div>
            <div><div class="n">8</div><div class="l">Markets · India, SEA, GCC</div></div>
            <div><div class="n">300K</div><div class="l">Contract workers run for one client</div></div>
            <div><div class="n">₹1,000 Cr<em>+</em></div><div class="l">Group revenue · FY25 · incl. staffing</div></div>
            <div><div class="n">$95M</div><div class="l">Raised · Series A to D</div></div>
          </div>
          <div class="tel-backers"><span>Jungle Ventures</span><span>British International Investment</span><span>Macquarie Capital</span><span>Capria</span><span>3one4 Capital</span><span>CX Partners</span><span>SITE Capital</span></div>
          <div class="tel-badges"><img src="assets/compliance/iso-27001.svg" alt="ISO 27001"/><img src="assets/compliance/soc-2.svg" alt="SOC 2"/><span>ISO 27001 · SOC 2 · DPDPA-aligned: data processing agreement, India residency, consent in 35 languages, retention schedule</span></div>
        </div>
        <div class="tel-time">
          <div class="ev" style="--d:.2s"><b>2015</b><span>Founded. Background verification for frontline hiring. 200 customers in two years.</span></div>
          <div class="ev" style="--d:.3s"><b>2018</b><span>Onboarding and attendance. Face and geo punches at scale.</span></div>
          <div class="ev" style="--d:.4s"><b>2019–20</b><span>Learning platform. Acquired OkayGo (gig) and Ezedox.</span></div>
          <div class="ev" style="--d:.5s"><b>2021–22</b><span>Gig deployment and worker fintech. Extended Series C, $40M.</span></div>
          <div class="ev" style="--d:.6s"><b>2023–24</b><span>goBetter platform. Reliance Retail live with 300K contract workers and 3,000 vendors. Factory face devices at Reliance O2C. Southeast Asia.</span></div>
          <div class="ev" style="--d:.7s"><b>2026</b><span>AI Labs. Agents that onboard, induct, roster and reconcile, inside the same record.</span></div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'te3', theme: 'light', title: 'Who runs on us',
    html: `
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">Credentials · 2 of 2</span><h2>Three companies with your kind of problem already run their contract workforce on this.</h2></div></div>
      <div>
        <div class="tel-clients">
          <div class="tel-case" style="--pc:var(--navy);--d:.15s"><div class="who">Retail · 18,918 stores</div><h4>Reliance Retail</h4><div class="big">300K<small>contract workers</small></div><p>3,000+ vendors on one rule engine. Payroll leakage down 90%, vendor non-compliance down 80%, customisation 7× faster than the systems it replaced.</p><div class="mini"><div><b>3,000+</b><span>vendors</span></div><div><b>−90%</b><span>payroll leakage</span></div><div><b>−80%</b><span>vendor non-compliance</span></div></div></div>
          <div class="tel-case" style="--pc:#FF9518;--d:.3s"><div class="who">Oil &amp; gas · refineries and plants</div><h4>Bharat Petroleum</h4><div class="big">Gate<small>inside SAP</small></div><p>Work orders, gate passes and contract workers on our platform, with the gate logic living in their SAP. A pass lapses after 30 days without a punch.</p><div class="mini"><div><b>Refineries</b><span>+ marketing plants</span></div><div><b>5</b><span>pass conditions</span></div><div><b>30 days</b><span>no punch → pass lapses</span></div></div></div>
          <div class="tel-case" style="--pc:#0d7d85;--d:.45s"><div class="who">Quick commerce · 22 cities</div><h4>Zepto</h4><div class="big">967<small>sites</small></div><p>15,000 workers on face and geo attendance with spoof detection. Deployment gated on training completion. 40% cost saved on attendance operations.</p><div class="mini"><div><b>15,000</b><span>workers</span></div><div><b>22</b><span>cities</span></div><div><b>−40%</b><span>attendance ops cost</span></div></div></div>
        </div>
        <div class="tel-logos"><span class="lbl">Also on the platform</span>
          <img src="assets/logo/c-hindalco.png" alt="Hindalco"/><img src="assets/logo/c-basf.png" alt="BASF"/><img src="assets/logo/c-Bharat_Petroleum.png" alt="BPCL"/><img src="assets/logo/c-tcs.png" alt="TCS"/><img src="assets/logo/c-accenture.png" alt="Accenture"/><img src="assets/logo/c-amazon.jpg" alt="Amazon"/><img src="assets/logo/c-titan.png" alt="Titan"/><img src="assets/logo/c-jll.png" alt="JLL"/><img src="assets/logo/c-ibm.png" alt="IBM"/>
        </div>
        <div class="tel-band"><span class="bl">Straight answer</span><p>No electronics plant runs on us yet. Our factory deployments are petrochemical and refinery sites, and we will put those plant teams on a call with you. Outcomes above are client-reported after go-live against their own prior year; baselines and periods come in the case notes to the working session.</p></div>
      </div>
    </div>`,
  },
  {
    id: 'te4', theme: 'light', title: 'Seven problems, one lifecycle',
    html: `
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">Your seven problems · the order they happen to a worker</span><h2>Each problem is a moment in one worker's week. <em>Fix the record once and all seven move.</em></h2></div></div>
      <div>
        <div class="tel-map">
          <div class="mp" data-n="1" style="--d:.15s"><div class="ph">Day 0</div><h4>Faster onboarding, to first punch</h4><p>Risk, training quality and the deployment data, captured before the gate opens.</p><span class="ic">${svg(icons.zap)}</span></div>
          <div class="mp" data-n="2" style="--d:.25s"><div class="ph">Every shift</div><h4>Absenteeism, seen a day early</h4><p>Where absence clusters, who is likely short tomorrow, and the backfill already asked for.</p><span class="ic">${svg(icons.eye)}</span></div>
          <div class="mp" data-n="3" style="--d:.35s"><div class="ph">Every shift</div><h4>Rostering that fills itself</h4><p>Demand from the plan, names from the contractors, hour and night-shift rules enforced.</p><span class="ic">${svg(icons.clock)}</span></div>
          <div class="mp" data-n="4" style="--d:.45s"><div class="ph">Every shift</div><h4>Time on the line vs in the factory</h4><p>Gate punch and line punch, so the gap between them is a number you manage.</p><span class="ic">${svg(icons.map)}</span></div>
          <div class="mp" data-n="5" style="--d:.55s"><div class="ph">Every week</div><h4>Attrition, predicted per worker</h4><p>Signals from her own record, a score, and the one action that keeps her.</p><span class="ic">${svg(icons.users)}</span></div>
          <div class="mp" data-n="6" style="--d:.65s"><div class="ph">Every month</div><h4>Compliance reports, generated</h4><p>Registers, weekly hours for Apple, night-shift logs and challan reconciliation.</p><span class="ic">${svg(icons.shield)}</span></div>
          <div class="mp" data-n="7" style="--d:.75s"><div class="ph">Always</div><h4>Business intelligence</h4><p>Plant, line, contractor and shift in one view, near real time, contract and on-roll together.</p><span class="ic">${svg(icons.chart)}</span></div>
        </div>
        <div class="tel-phases"><span>Before the gate opens</span><span>While the shift runs</span><span>When the week and the month close</span></div>
        <div class="tel-band light"><span class="bl">How to read the next nine slides</span><p>Same shape every time. <b>What you told us</b> on the left, <b>what changes</b> and the <b>proof</b> below it, the <b>product</b> on the right. The yellow <b>▶ Live</b> marker is where we leave the slides and open the software.</p></div>
      </div>
    </div>`,
  },
  {
    id: 'te4b', theme: 'darker', title: 'The stakes',
    html: `
    <div class="glow"></div>
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">Why now · the stakes at Hosur alone</span><h2>At this scale the seven problems are not HR admin. <em>They are the plant's output and its licence to supply.</em></h2></div></div>
      <div class="tel-stakes">
        <div class="st" style="--d:.15s"><div class="n"><span data-t="86466">0</span></div><div class="l">people at Tata Electronics at FY26 close, incl. contract</div><p>Up 20,819 in one year. Nearly two-thirds women, most in company hostels. Every joiner is an onboarding, an induction, a face registration, a gate pass.</p><div class="src">Tata Sons Annual Report 2025-26</div></div>
        <div class="st" style="--d:.3s"><div class="n">Hundreds</div><div class="l">join and leave each week, through local recruiters and contractors</div><p>At that churn, onboarding and exit are not events. They are a production line of their own, and every exit is a face registration, a pass and a file to close.</p><div class="src">Your words · alignment call, Oct 2026</div></div>
        <div class="st" style="--d:.45s"><div class="n">60 h</div><div class="l">Apple's weekly cap, incl. overtime, per worker, every week</div><p>Apple collects weekly working hours on 1.4 million supplier workers and runs RBA audits. Tamil Nadu's saved rules say 48 hours. Both have to be provable for every contract worker, not estimated.</p><div class="src">Apple supplier accountability report, 2025</div></div>
        <div class="st" style="--d:.6s"><div class="n">21 Nov 2025</div><div class="l">OSH Code in force, central rules May 2026</div><p>Contractor registers, the 50-worker threshold, the core-activity bar, and the principal employer paying wages when a contractor defaults. State rules are still landing, in three different states.</p><div class="src">Labour Codes notification; DLA Piper, LKS trackers</div></div>
      </div>
    </div>`,
  },

  pslide({
    id: 'tp1', theme: 'light', title: '1 · Onboarding to first punch', n: 1,
    kick: 'Problem 1 of 7 · faster onboarding at scale, up to the first punch',
    h2: 'Offered today, <em>punching in at the gate next shift,</em> with her risk checked and her deployment data already on the record.',
    demo: 'Live · onboard a worker',
    quote: 'Onboarding is slow, and when we speed it up we lose control of risk, training quality and the data we need to deploy people.',
    changes: [
      { ic: icons.zap, b: 'Aadhaar eKYC replaces the photocopy pile.', t: 'Identity, age and address verified in minutes, assisted at the desk when the phone number is a parent’s. Fake and duplicate profiles drop out before they cost you a shift.' },
      { ic: icons.shield, b: 'The gate pass is conditional and provisional.', t: 'Opens on identity, sanctioned strength and induction. Confirmed when the background check returns within 24 hours; withdrawn automatically if it fails.' },
      { ic: icons.layers, b: 'Deployment data is captured once.', t: 'Vendor, work order, line, skill grade, shift pattern, hostel block, bus route. Rostering, payroll and compliance read the same fields. Night-shift consent is separate and revocable.' },
    ],
    proof: { n: '45 min', p: '<b>Zepto</b> onboards a delivery partner in 45 minutes on the same flow, documents to certificate. <b>Reliance</b> runs it for 300K contract workers.' },
    vis: onbMock,
    foot: 'Onboarding, eKYC, background check and induction are live modules. Times shown are typical for a worker with Aadhaar; the business rules are yours to set. "Next shift" assumes the desk runs the day before.',
  }),
  pslide({
    id: 'tp1b', theme: 'light', title: '1 · Quality of onboarding', n: 1,
    kick: 'Problem 1 of 7 · quality of onboarding, including training',
    h2: 'Induction in Tamil, with a test and a PPE photo, <em>before the pass opens.</em> Not a signature on a register.',
    demo: 'Live · induction agent',
    quote: 'We can make onboarding fast or we can make it thorough. We have not managed both.',
    changes: [
      { ic: icons.lang, b: 'Her language, at the onboarding centre or hostel.', t: 'ESD, gowning, line SOP as short videos with a ten-question test. 35 languages; Tamil, Kannada, Hindi, Odia, Assamese for your plants. Finished before she is on a line where phones are not allowed.' },
      { ic: icons.cam, b: 'Proof, with a photo and a date.', t: 'Camera check for PPE, a dated certificate, a refresher pushed before it lapses. A lapsed certificate withdraws the pass.' },
      { ic: icons.repeat, b: 'Deterministic flow.', t: 'Every mandatory step runs in order, every time. The agent cannot skip a video the way a busy time office can.' },
    ],
    proof: { n: '88%', p: 'completion on frontline training across our clients, against about 25% in the industry. <b>Hindalco</b> tripled shop-floor training coverage this way.' },
    vis: inductMock, flip: true,
    foot: 'Induction agent (AI Mia) is live. Course content is built with your EHS team in week one. The approved-roles list for contract work is yours; the software enforces it, it does not decide it.',
  }),
  pslide({
    id: 'tp2', theme: 'light', title: '2 · Absenteeism', n: 2,
    kick: 'Problem 2 of 7 · absenteeism · predictive and analytics',
    h2: 'You see tomorrow’s short lines tonight, <em>and the backfill request has already gone to the contractor.</em>',
    demo: 'Live · attend analytics',
    quote: 'We find out a line is short when the shift starts. Then it is phone calls and overtime nobody budgeted.',
    changes: [
      { ic: icons.eye, b: 'Pattern you can show the contractor.', t: 'Absence by line, contractor, hostel block, weekday and payday, from face punches. The heat map is the conversation.' },
      { ic: icons.chart, b: 'Tomorrow’s shortfall, tonight.', t: 'A model on your own punch history, leave and festival calendar flags which lines will run short and by how much. First predictions in week six of the pilot, on migrated history.' },
      { ic: icons.repeat, b: 'The gap closes on the record.', t: 'Backfill asked on the contractor portal, standby workers accept in the worker app, surplus borrowed from a neighbouring line. Every step logged, nothing on WhatsApp.' },
    ],
    proof: { n: '15–20%', p: 'reduction in absenteeism reported for absence prediction in frontline workforce studies (MIT Sloan). Your number comes from your data in the pilot.' },
    vis: absMock,
    foot: 'Absence analytics and exception queues are live. The next-day prediction is a pilot model trained on your punch history; it needs about 90 days of data, migrated from existing devices and registers where available.',
  }),
  pslide({
    id: 'tp3', theme: 'light', title: '3 · Auto rostering', n: 3,
    kick: 'Problem 3 of 7 · missing auto rostering',
    h2: 'The plan sets demand, contractors fill names, <em>and the roster refuses anything that breaks an hours rule.</em>',
    demo: 'Live · roster grid',
    quote: 'Rostering is done by the contractors in spreadsheets. We get the names after the fact.',
    changes: [
      { ic: icons.clock, b: 'Demand per line per shift, from the plan.', t: 'Required headcount and skill grade become a published roster. Contractors fill against it in the portal or by Excel upload, never above it.' },
      { ic: icons.shield, b: 'Three states, three rule sets, one engine.', t: 'Tamil Nadu 9 hours a day and 48 a week, Karnataka up to 12 with written consent, Gujarat with its own overtime cap, Apple’s 60. One rest day in seven. Night-shift conditions for women. Set once per plant.' },
      { ic: icons.zap, b: 'Gaps go to the contractor, not the supervisor.', t: 'A short cell asks the contractor, tracks the response, and shows surplus on another line that can be lent. The night drop list goes to the transport vendor per route.' },
    ],
    proof: { n: '3,000+', p: 'contractors fill rosters against sanctioned work-order strength at <b>Reliance Retail</b>. Shortfall management there went from hours to minutes.' },
    vis: rosterMock,
    foot: 'Roster, shift and rule engine are live. Filling the roster from a production-plan forecast is configured in the pilot. TN, KA and GJ provisions are Factories Act rules saved under the OSH Code pending state rules; rule changes after a state notification are made within the working days written into the MSA.',
  }),
  pslide({
    id: 'tp3b', theme: 'dark', title: '3 · Ramp up and ramp down', n: 3,
    kick: 'Problem 3 of 7 · the hard case · ramp-ups and ramp-downs',
    h2: 'Six thousand in, four thousand out, in one season, <em>without the gate, the strength or the exits falling behind.</em>',
    demo: 'Live · work order strength',
    quote: 'Hiring thousands in a season is one problem. Doing it without breaching an order or losing track at ramp-down is the other.',
    changes: [
      { ic: icons.layers, b: 'Ramp-up runs on the work order.', t: 'Raise the sanctioned strength, three contractors fill in parallel, hostel beds and transport capacity gate the pace, and every joiner goes through the same next-shift onboarding.' },
      { ic: icons.lock, b: 'Ramp-down runs on expiry.', t: 'Passes lapse when the order ends or after 30 days without a punch. Attendance and OT inputs for full and final go to the contractor, with your sign-off recorded.' },
      { ic: icons.repeat, b: 'The rehire pool stays warm.', t: 'A worker who left clean is a verified profile, inducted and known. Next season she is a same-shift rejoiner, not a fresh file.' },
    ],
    proof: { n: '−60%', p: 'hiring lead time across our enterprise clients when sourcing, verification and onboarding sit on one record. Rejoiners skip everything but the face check.' },
    vis: rampMock, wide: true,
    foot: 'Work-order strength, pass expiry and F&F inputs are live. Chart values are illustrative of a festive-season ramp.',
  }),
  pslide({
    id: 'tp4', theme: 'light', title: '4 · Time on the line vs in the factory', n: 4,
    kick: 'Problem 4 of 7 · data on time spent on the line vs in the factory',
    h2: 'A gate punch says she was inside. <em>A line punch says she was producing.</em> The gap between them is finally a number.',
    demo: 'Live · one worker’s day',
    quote: 'We pay for the hours inside the gate. We do not know how many of them were spent on the line.',
    changes: [
      { ic: icons.map, b: 'Fixed punch points, no phone needed.', t: 'Face devices at the gate, two kiosks per line head, QR at the canteen. Each is a site in the plant hierarchy with its own rule. Devices keep working offline and sync when the network returns.' },
      { ic: icons.clock, b: 'A timeline per worker per shift.', t: 'Gate in, walk, line, break, line, gate out. Line time and factory time computed, not estimated. Gate queue time at 05:45 becomes visible too.' },
      { ic: icons.chart, b: 'Line-time share per line and contractor.', t: 'Which lines lose 15% to movement and queues, which crews settle fastest. The input for the IE team and for contractor conversations.' },
    ],
    proof: { n: '967 sites', p: 'at <b>Zepto</b> run per-site rules on this attendance engine. Face devices at <b>Reliance O2C</b> factory sites run the same way.' },
    vis: lineMock, flip: true,
    foot: 'Multi-point attendance within a plant is configured per site. Line-time analytics are built on it during the pilot. Priya is a composite; times illustrative.',
  }),
  pslide({
    id: 'tp5', theme: 'dark', title: '5 · Predictive attrition', n: 5,
    kick: 'Problem 5 of 7 · predictive attrition',
    h2: 'When hundreds join and leave every week, <em>you need to know who is about to go while there is still time to ask her to stay.</em>',
    demo: 'Live · risk list',
    quote: 'We learn about attrition from the exit. By then the contractor has already replaced her with someone we have to onboard again.',
    changes: [
      { ic: icons.users, b: 'Signals from her own record.', t: 'Absence streaks, regularisation spikes, declined overtime, pay queries, hostel or route changes, training not refreshed, tenure in the 45–90 day window.' },
      { ic: icons.chart, b: 'A score and a reason.', t: 'The supervisor sees why she is at 81 and what changed this fortnight. Used to keep people, never as an input to shift, overtime or renewal decisions.' },
      { ic: icons.zap, b: 'One action, in her language.', t: 'A check-in script, a shift swap, a pay query closed the same day. Tracked, so you learn which actions work in which plant.' },
    ],
    proof: { n: '−15%', p: 'attrition, client-reported across our enterprise deployments. <b>Meesho</b> lifted week-on-week retention 19.7% with engagement built on the same worker record.' },
    vis: attrMock,
    foot: 'Attrition risk is a pilot model; the signals it reads are live data. First scores need about 90 days of history; validation against actual exits is at week 16. Workers shown are composites.',
  }),
  pslide({
    id: 'tp6', theme: 'light', title: '6 · Auto compliance reports', n: 6,
    kick: 'Problem 6 of 7 · auto compliance reports',
    h2: 'Registers, Apple’s weekly-hours file and the contractor PF check <em>come out of the punches. Nobody compiles them.</em>',
    demo: 'Live · month close',
    quote: 'Month-end is a week of collecting registers from contractors and hoping the auditor does not sample the wrong one.',
    changes: [
      { ic: icons.doc, b: 'Registers from the record, signed by the contractor.', t: 'Workers per contractor, muster roll, wage register, overtime register with the worker’s consent, strength ledger, the annual electronic return. Generated, then authenticated by the contractor in the portal.' },
      { ic: icons.clock, b: 'Weekly hours before the week closes.', t: 'Apple’s 60-hour week and rest-day rule, Tamil Nadu’s 48, per worker, apprentices included. Past 48 the roster asks for OT consent; past 60 it blocks. Evidence for RBA audits, not a reconstruction.' },
      { ic: icons.shield, b: 'Contractor PF and ESI, worker by worker.', t: 'Challan OCR against computed dues. Short-payment flagged to you with the worker list; the contractor is notified. Whether to hold the bill is your call, with the wage-liability rule (OSH Code and Code on Social Security) shown.' },
    ],
    proof: { n: '−80%', p: 'vendor non-compliance risk at <b>Reliance Retail</b> across 3,000 contractors. Challan matching is the feature our clients tell us they use most.' },
    vis: compMock,
    foot: 'Registers, OT register, challan reconciliation and strength ledger are live. The weekly-hours export in Apple’s format, the OT-consent field and the night-shift log are configured for Tata Electronics in the pilot. Figures illustrative.',
  }),
  pslide({
    id: 'tp7', theme: 'dark', title: '7 · Business intelligence', n: 7,
    kick: 'Problem 7 of 7 · business intelligence',
    h2: 'All seven problems, one screen. <em>Contract and on-roll together,</em> because they come from one record.',
    demo: 'Live · analytics',
    quote: 'Our data sits with the contractors, in e-Sparsh and in SAP. Nobody can answer a simple question about the contract workforce without a week.',
    changes: [
      { ic: icons.chart, b: 'Every tile is one of your seven.', t: 'Deployed vs plan, absenteeism, line time, attrition risk, contractor fill and onboarding time, hours against cap, PF gaps. Drill from plant to a single worker.' },
      { ic: icons.plug, b: 'Your warehouse, your tools.', t: 'Dashboards embedded in the platform, or the same data to Power BI and SAP by API. Near real time.' },
    ],
    proof: { n: '7×', p: 'faster customisation of rules and reports at <b>Reliance Retail</b> than the systems it replaced. Dashboards there run for 300K workers and 3,000 contractors.' },
    vis: biMock, wide: true,
    foot: 'Embedded analytics are live (Amazon QuickSight, hosted in India). Attrition and absence tiles depend on the pilot models. Values illustrative.',
  }),

  {
    id: 'te5', theme: 'light', title: 'How it fits with e-Sparsh',
    html: `
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">Fit · e-Sparsh, SAP and the plant floor</span><h2>e-Sparsh stays the HR system for your employees. <em>goBetter runs the gate, the line and the contractors,</em> and feeds both.</h2></div><span class="demo">Live · integration</span></div>
      <div class="tel-body">
        <div class="tel-say">
          <div class="blk"><div class="lbl">You told us</div><div class="tq">Leave for everyone moved to e-Sparsh after Kronos was sunset, so attendance has to cover on-roll and contract staff together. e-Sparsh has not given us contract-labour practice.</div></div>
          <div class="blk"><div class="lbl">What changes</div><ul>
            <li><span class="ic">${svg(icons.plug)}</span><span><b>One attendance engine for everyone.</b> On-roll and contract punch at the same devices; on-roll employees are face-registered for attendance only, and the commercial scope for them is agreed separately. Attendance syncs to e-Sparsh for employees; contract days, OT and invoice checks go to SAP. Interfaces agreed with Tata group IT in the working session.</span></li>
            <li><span class="ic">${svg(icons.layers)}</span><span><b>Clear system of record per object.</b> e-Sparsh owns the on-roll master and leave. SAP owns orders, invoices and payment. goBetter owns the contract worker, the punch and the registers. Nothing is mastered twice.</span></li>
            <li><span class="ic">${svg(icons.repeat)}</span><span><b>Practice, not just a tool.</b> The rules Reliance and BPCL run on come pre-configured as a starting point for Tata Electronics.</span></li>
          </ul></div>
          <div class="proof"><div class="n">BPCL</div><p>runs our gate logic inside its own SAP. <b>Reliance O2C</b> runs our face devices at factory sites. The e-Sparsh interface is new and we say so.</p></div>
        </div>
        <div class="tel-vis">${archMock}</div>
      </div>
    </div>`,
  },
  {
    id: 'te5b', theme: 'light', title: 'Where the data lives',
    html: `
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">Security · for InfoSec and Legal, before the pilot, not after</span><h2>Aadhaar, faces and hostel addresses for 86,000 people. <em>What we can state today, and what the security pack covers.</em></h2></div></div>
      <div class="tel-sec">
        <div class="col">
          <div class="lbl">What we can state today</div>
          <div class="row"><b>ISO 27001 · SOC 2 · DPDPA-aligned</b><span>Certificates, the SOC 2 report and a draft data processing agreement go to your InfoSec and Legal teams with the pack.</span></div>
          <div class="row"><b>Hosted in India</b><span>Worker data, face data and documents stay in Indian regions. No cross-border processing for Tata Electronics.</span></div>
          <div class="row"><b>Face used for matching, not sharing</b><span>Face data is used only to verify the punch. Liveness stops a photo at the device. Access to images is role-gated and logged.</span></div>
          <div class="row"><b>Role-based access by plant and contractor</b><span>Each of the 38 contractors sees only their own workers. Plant HR sees the plant. Group sees everything. Every edit is on an audit log you can export.</span></div>
          <div class="row"><b>Consent at registration, in her language, revocable</b><span>Purpose-specific notices for identity, face and attendance data, in Tamil and the other languages your workers speak, stored with the record with a withdrawal path. Attrition and absence scoring is a stated purpose in the notice, with its own opt-out.</span></div>
          <div class="row"><b>AI agents behind guardrails</b><span>PII masking, private models, no training on your data. Agent actions are logged like any user’s.</span></div>
        </div>
        <div class="col pack">
          <div class="lbl">What the security pack covers · for your review before week 1</div>
          <div class="row"><b>Architecture and tenant isolation</b><span>How Tata Electronics’ data is separated from other clients, and contractors from each other.</span></div>
          <div class="row"><b>Encryption and key management</b><span>In transit and at rest, who holds keys, how device-to-cloud traffic is secured on SIM-only gates.</span></div>
          <div class="row"><b>Biometric storage, retention, deletion</b><span>What is stored for a face, for how long, how deletion on exit is executed and evidenced against register-retention duties.</span></div>
          <div class="row"><b>DPDPA roles and sub-processors</b><span>Fiduciary and processor split between Tata Electronics, each contractor and BetterPlace, in writing, with the sub-processor list.</span></div>
          <div class="row"><b>SSO, penetration tests, incident notification</b><span>Azure AD single sign-on for your users, latest external test summary, and the breach-notification commitment.</span></div>
          <div class="row"><b>Liability, exit and portability</b><span>Who carries what when a computed hour is wrong, export formats, the deletion certificate, and what stays in e-Sparsh and SAP if you stop.</span></div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'te6', theme: 'dark', title: 'What is live and what is built on your data',
    html: `
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">The honest table · seven problems, three statuses</span><h2>Four of the seven run at other clients today, in whole or in part. <em>Three are built on your data in the pilot, and we say which.</em></h2></div></div>
      <div class="tel-status">
        <div class="h">#</div><div class="h">Problem</div><div class="h">What runs today, where</div><div class="h">Status for Tata Electronics</div>
        <div class="r" style="--d:.1s"><i>1</i><b>Onboarding to first punch</b><span>eKYC, background check, induction agent, conditional gate pass. Reliance 300K, BPCL, Zepto.</span><em class="live">Live · configure your rules</em></div>
        <div class="r" style="--d:.18s"><i>2</i><b>Absenteeism</b><span>Absence analytics, exception queues, contractor backfill flow live. Next-day prediction is a model trained on your punches.</span><em class="mix">Analytics live · prediction is a pilot model</em></div>
        <div class="r" style="--d:.26s"><i>3</i><b>Auto rostering</b><span>Roster grid, shift and hours rule engine, Excel upload, contractor fill live. Demand from a production-plan forecast is configured for Tata in the pilot; not live at any client yet.</span><em class="mix">Live · forecast link configured in pilot</em></div>
        <div class="r" style="--d:.34s"><i>4</i><b>Line vs factory time</b><span>Multi-site hierarchy and per-site rules live (Zepto 967 sites). Line kiosks are a per-plant device configuration; line-time analytics built on them.</span><em class="cfg">Configured for Tata in the pilot</em></div>
        <div class="r" style="--d:.42s"><i>5</i><b>Predictive attrition</b><span>Every signal is live data. The score is a model trained on your history; validated against actual exits at week 16.</span><em class="pilot">Pilot model on your data</em></div>
        <div class="r" style="--d:.5s"><i>6</i><b>Compliance reports</b><span>Registers, OT register, challan reconciliation, strength ledger live (Reliance, BPCL). Apple weekly-hours format, OT consent field, night-shift log configured.</span><em class="mix">Live · three reports configured in pilot</em></div>
        <div class="r" style="--d:.58s"><i>7</i><b>Business intelligence</b><span>Embedded dashboards live (QuickSight, India). API feed to Power BI and SAP. Model-driven tiles depend on 2 and 5.</span><em class="live">Live · near real time</em></div>
      </div>
    </div>`,
  },
  {
    id: 'te7', theme: 'light', title: 'Eight weeks at one plant',
    html: `
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">How we start · one plant, two contractors, eight weeks</span><h2>Eight weeks at Hosur with two contractors, <em>and you decide on your own data</em> whether Narasapura and Chennai follow.</h2></div></div>
      <div>
        <div class="tel-plan">
          <div class="wk" style="--d:.15s"><div class="w">Weeks 1–2</div><h4>Configure</h4><ul><li>Plant hierarchy, lines, shifts, TN hour rules, Apple caps</li><li>Two contractors, their work orders and strengths</li><li>Gate devices (reuse where possible), two line kiosks, offline test</li><li>Induction content with EHS; DPDPA notices in Tamil</li><li>e-Sparsh and SAP field mapping with Shubham and group IT</li></ul><div class="out">Output: rules, devices and consent live on one line</div></div>
          <div class="wk" style="--d:.3s"><div class="w">Weeks 3–4</div><h4>Onboard and gate</h4><ul><li>New joiners through eKYC, background check, induction</li><li>Existing crews face-registered in batches, consent captured</li><li>Conditional, provisional gate passes go live</li><li>Roster published from the plan; history migrated for the models</li></ul><div class="out">Output: first-punch time measured, problem 1 answered</div></div>
          <div class="wk" style="--d:.45s"><div class="w">Weeks 5–6</div><h4>Run the shifts</h4><ul><li>Absence heat map; first next-day predictions from week 6</li><li>Line-time analytics from kiosk punches</li><li>Attrition signals accumulating; no scores yet</li><li>Contractors fill gaps in the roster</li></ul><div class="out">Output: problems 2, 3, 4 on live data</div></div>
          <div class="wk" style="--d:.6s"><div class="w">Weeks 7–8</div><h4>Close the month</h4><ul><li>Registers, OT register, strength ledger generated; Legal reviews them</li><li>Weekly-hours export in Apple format</li><li>Challan reconciliation for both contractors</li><li>Dashboard review with plant HR, Finance, Legal</li></ul><div class="out">Output: problems 6 and 7 live; 5 validated at week 16; the scale decision</div></div>
        </div>
        <div class="tel-band light"><span class="bl">Who brings what</span><div class="two three"><div><h5>Tata Electronics</h5><p>A plant HR owner and Shubham as the working contact. Two contractors and their work orders. Device locations at the gate and two lines. e-Sparsh and SAP contacts. EHS content for induction. Legal for the DPA.</p></div><div><h5>BetterPlace</h5><p>Configuration, device integration, induction build, time-office and contractor training, a named deployment manager, and a weekly review with the numbers for problems 1 to 7 as they come live.</p></div><div><h5>Commercials and exit</h5><p>Software priced per active worker per month; devices itemised separately with ownership agreed before week 1; pilot scope fixed in writing. If you stop at week 8: full export in open formats and a deletion certificate.</p></div></div></div>
      </div>
    </div>`,
  },
  {
    id: 'te8', theme: 'darker', title: 'Next step',
    html: `
    <div class="glow"></div>
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">Next step</span><h2>Three things to agree today, <em>and the pilot is configured within two weeks of InfoSec sign-off.</em></h2></div></div>
      <div class="tel-close">
        <div class="asks">
          <div class="ask" style="--d:.15s"><div class="n">1</div><div><h4>Pick the plant and two contractors</h4><p>Hosur is the natural choice: the largest contract workforce, the hostel-to-line journey, the Apple hours requirement. Two contractors with different fill rates give a fair test.</p></div></div>
          <div class="ask" style="--d:.3s"><div class="n">2</div><div><h4>A working session with Shubham and group IT</h4><p>Ninety minutes on master data, the e-Sparsh and SAP interfaces, the hour rules and the induction content list. We configure from that session.</p></div></div>
          <div class="ask" style="--d:.45s"><div class="n">3</div><div><h4>Security and legal review, this week</h4><p>ISO 27001 and SOC 2 reports, the draft data processing agreement, data residency and access model to your InfoSec and Legal teams, so the pilot does not wait on them.</p></div></div>
          <div class="tel-weeks"><span style="--d:.6s"><b>WEEKS 1–2</b>Configure</span><span style="--d:.68s"><b>WEEKS 3–4</b>Onboard and gate</span><span style="--d:.76s"><b>WEEKS 5–6</b>Run the shifts</span><span style="--d:.84s"><b>WEEKS 7–8</b>Close the month</span></div>
        </div>
        <div class="tel-contact">
          <div class="nm">Anuj Saxena</div><div class="rl">Director, Product · BetterPlace</div>
          <a href="mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent('Tata Electronics · CLMS pilot at Hosur')}">anuj.saxena@betterplace.co.in</a>
          <p>Seven problems. One record. One pilot. The software you saw today is the software the pilot runs on, configured for Tata Electronics.</p>
        </div>
      </div>
    </div>`,
  },
]

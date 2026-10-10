import type { SlideDef } from '../lib/types'
import { icons } from './html'
import { svg, makeRail, bar, shot, row, problemSlide, plainSlide, coverRing } from './story-kit'

// Tata Electronics · contract and on-roll workforce deck, v3 (Oct 2026).
// Restructured after the alignment call with Bhuvan (Head HR, Components) and Anuj's notes:
// problems a large electronics plant faces come first, in our words (never "your seven problems",
// never their phrasing), then one solution area per slide in this order: time & roster, absence,
// payroll, attrition, vendors, compliance, hire, onboarding; then plant workflows, intelligence,
// fit with e-Sparsh, security, an honest status table, the plan and the asks.
// Honesty: every capability carries its real status in the footer and in the status table.
// No prices, uptime or SLAs. Mock numbers are illustrative. Legal lines follow
// knowledge/13-clms-legal-facts.md. Public facts: Tata Sons AR 2025-26 (86,466 people),
// Apple supplier accountability report 2025 (60-hour week incl. overtime).

const AREAS = ['Time & roster', 'Absence', 'Payroll', 'Attrition', 'Vendors', 'Compliance', 'Hire', 'Onboard']
const rail = makeRail(AREAS, [3, 7], false)
const P = 'The problem'

/* ---------------- mocks ---------------- */

const headcountMock = `
<div class="tm">
  ${bar('goBetter · Attend · Hosur campus · live headcount', 'Live')}
  <div class="tm-body">
    <div class="tm-hc">
      <div class="big">
        <div class="l">Inside the gate now · 06:42</div>
        <div class="n"><span data-t="18412">0</span></div>
        <div class="s">A shift in 16,970 · C shift still exiting 1,404 · visitors 38</div>
        <div class="split"><i style="width:71%;background:#ffc401"></i><i style="width:22%;background:#32cad4"></i><i style="width:7%;background:#8a93b8"></i></div>
        <div class="leg"><span style="--c:#ffc401">Gate face devices 71%</span><span style="--c:#32cad4">Line kiosks 22%</span><span style="--c:#8a93b8">Training centre · app 7%</span></div>
      </div>
      <div class="tm-zones">
        <div class="z"><div><b>Gate 3 · shift change</b><small>6 devices · A in, C out · cleared in 27 min</small></div><span class="n">212</span><span class="d in">queued</span></div>
        <div class="z" style="animation-delay:.1s"><div><b>FATP lines 1–8</b><small>line kiosks · since 06:00</small></div><span class="n">6,900</span><span class="d in">96% of plan</span></div>
        <div class="z" style="animation-delay:.2s"><div><b>CNC enclosure</b><small>line kiosks</small></div><span class="n">3,960</span><span class="d out">88%</span></div>
        <div class="z" style="animation-delay:.3s"><div><b>Anodising · polishing</b><small>line kiosks</small></div><span class="n">1,800</span><span class="d in">97%</span></div>
        <div class="z" style="animation-delay:.4s"><div><b>Test and pack</b><small>line kiosks</small></div><span class="n">2,100</span><span class="d in">99%</span></div>
      </div>
    </div>
    <div class="tm-stream"><span><b>Priya S.</b> Gate 3 · 05:52</span><span><b>Priya S.</b> FATP-4 kiosk · 06:08</span><span><b>Ravi S.</b> Gate 1 out · 06:31</span><span><b>Offline</b> Gate 5 device · 14 punches queued, synced 06:40</span></div>
  </div>
</div>`

const rulesAlerts = `
<div class="tm" style="margin-top:12px">
  ${bar('goBetter · Alerts · Hosur · this week', 'Live')}
  <div class="tm-body">
    <div class="tm-rows">
      ${row('Roster change refused · SMT-4 · Sat', '7 workers would cross 48 h. Saturday can run only as consented overtime at 2×.', 'Blocked', 'r', 'hot')}
      ${row('Bus R12 arrived 06:14 · 41 late punches', 'Matched to the route log and excused automatically, not regularised by hand', 'Excused', 'g')}
    </div>
  </div>
</div>`

const scenTab = (label: string) => `<span class="cyc">${label}</span>`
const autoRosterMock = `
<div class="tm tm-scen" data-cycle="3000">
  ${bar('goBetter · Roster · Hosur · week of 20 Oct · built from demand and rules', 'Auto-built')}
  <div class="tm-body">
    <div class="tabs">${scenTab('Normal week')}${scenTab('6 absent on SMT-4')}${scenTab('Line 2 shutdown')}${scenTab('Dasara week')}</div>
    <div class="cycpane">
      <div class="tm-roster">
        <span class="rh">Line · plan</span><span class="rh">A · 06–14</span><span class="rh">B · 14–22</span><span class="rh">C · 22–06</span>
        <div class="rl2">FATP-4<small>150 · station-certified</small></div><div class="cell ok">150</div><div class="cell ok">150</div><div class="cell ok">150</div>
        <div class="rl2">FATP-2<small>120 · station-certified</small></div><div class="cell ok">120</div><div class="cell ok">120</div><div class="cell ok">120</div>
        <div class="rl2">CNC-2<small>84 · G3</small></div><div class="cell ok">84</div><div class="cell ok">84</div><div class="cell ok">84</div>
        <div class="rl2">Narasapura · FATP<small>12 h · 4 on, 3 off · KA</small></div><div class="cell ok">Day 12 h</div><div class="cell off">—</div><div class="cell ok">Night 12 h</div>
      </div>
      <div class="why"><b>Built from inputs:</b> demand per line, station certifications, 48-hour week, 1 rest day in 7, rotating weekly off, night-shift consent. 12-hour patterns only where the state allows them.</div>
    </div>
    <div class="cycpane">
      <div class="tm-roster">
        <span class="rh">Line · plan</span><span class="rh">A · 06–14</span><span class="rh">B · 14–22</span><span class="rh">C · 22–06</span>
        <div class="rl2">FATP-4<small>150 · certified</small></div><div class="cell gap" style="display:flex">144<small>6 absent</small></div><div class="cell ok">150</div><div class="cell ok">150</div>
        <div class="rl2">Float pool<small>certified on FATP-4</small></div><div class="cell mv">4 → FATP-4</div><div class="cell ok">12</div><div class="cell ok">9</div>
        <div class="rl2">Test and pack<small>surplus, certified</small></div><div class="cell mv">2 → FATP-4</div><div class="cell ok">60</div><div class="cell ok">60</div>
      </div>
      <div class="why"><b>Rebuilt in seconds:</b> 4 from your certified float pool and 2 certified from Test and pack moved to FATP-4. Nobody uncertified, nobody past 48 hours.</div>
    </div>
    <div class="cycpane">
      <div class="tm-roster">
        <span class="rh">Line · plan</span><span class="rh">A · 06–14</span><span class="rh">B · 14–22</span><span class="rh">C · 22–06</span>
        <div class="rl2">FATP-2<small>shutdown Wed–Thu</small></div><div class="cell rel">0 · maint.</div><div class="cell rel">0</div><div class="cell rel">0</div>
        <div class="rl2">FATP-4<small>absorbs 40 certified</small></div><div class="cell mv">+20</div><div class="cell mv">+20</div><div class="cell ok">150</div>
        <div class="rl2">Training room<small>refreshers</small></div><div class="cell mv">60 · ESD</div><div class="cell off">—</div><div class="cell off">—</div>
      </div>
      <div class="why"><b>Shutdown handled:</b> 40 certified operators moved to FATP-4, 60 sent to due paid refresher training instead of idle time. No overtime created.</div>
    </div>
    <div class="cycpane">
      <div class="tm-roster">
        <span class="rh">Line · plan</span><span class="rh">Mon 19</span><span class="rh">Tue 20</span><span class="rh">Wed 21</span>
        <div class="rl2">FATP-4<small>forecast short</small></div><div class="cell ok">150</div><div class="cell gap" style="display:flex">−46<small>covered</small></div><div class="cell gap" style="display:flex">−31<small>covered</small></div>
        <div class="rl2">Float pool + Krishna<small>pre-booked, certified</small></div><div class="cell off">—</div><div class="cell mv">+40</div><div class="cell mv">+25</div>
        <div class="rl2">Leave approvals<small>staggered</small></div><div class="cell ok">12</div><div class="cell ok">18</div><div class="cell ok">14</div>
      </div>
      <div class="why"><b>Festival planned two weeks out:</b> leave staggered, standby pre-booked with the contractor, travel batches spread across the week.</div>
    </div>
  </div>
</div>`

const leaveMock = `
<div class="tm">
  ${bar('goBetter · Leave, holidays and roles · Hosur and Narasapura', 'Live')}
  <div class="tm-body">
    <div class="tm-mini3">
      <div><div class="l">Leave · this week</div>
        <div class="it"><div><b>Kaviya M. · 2 days</b><small>Pongal travel · approved on mobile</small></div><span class="chip g">Approved</span></div>
        <div class="it"><div><b>Arun P. · 1 day</b><small>sick · balance 4 left</small></div><span class="chip y">Pending</span></div>
        <div class="it"><div><b>On-roll leave</b><small>stays in e-Sparsh · synced nightly</small></div><span class="chip b">Synced</span></div>
      </div>
      <div><div class="l">Holidays · by state and site</div>
        <div class="it"><div><b>Pongal · 14–15 Jan</b><small>Hosur, Chennai · Tamil Nadu</small></div><span class="chip b">TN</span></div>
        <div class="it"><div><b>Ayudha Puja · 19 Oct</b><small>all southern plants</small></div><span class="chip b">TN · KA</span></div>
        <div class="it"><div><b>Rajyotsava · 1 Nov</b><small>Narasapura · Karnataka</small></div><span class="chip b">KA</span></div>
      </div>
      <div><div class="l">Roles and station certifications</div>
        <div class="it"><div><b>FATP operator · G2</b><small>OJT sign-off, ESD · per station</small></div><span class="chip g">Role</span></div>
        <div class="it"><div><b>212 certifications expire this month</b><small>roster will not place an expired operator</small></div><span class="chip y">Due</span></div>
        <div class="it"><div><b>Default site, line and station</b><small>used by roster, gate and pay</small></div><span class="chip b">Master</span></div>
      </div>
    </div>
    <div class="note"><b>One record.</b> A holiday on the state calendar changes the roster, the pay rate for anyone who works it, and the muster roll, without anyone re-entering it.</div>
  </div>
</div>`

const festMock = `
<div class="tm">
  ${bar('goBetter · Absence forecast · Hosur · Dasara window · next: Deepavali', 'Pilot model', true)}
  <div class="tm-body">
    <div class="tm-fest">
      <div>
        <div class="tm-h"><b>Expected absence by home state</b><span>19–23 Oct</span></div>
        <div class="hb">
          <div class="r"><b>Odisha</b><span class="b"><i style="--w:76%;--bc:var(--red);--d:.3s"></i></span><span class="v">38%</span></div>
          <div class="r"><b>Jharkhand</b><span class="b"><i style="--w:62%;--bc:#FF9518;--d:.4s"></i></span><span class="v">31%</span></div>
          <div class="r"><b>Assam</b><span class="b"><i style="--w:44%;--bc:#FF9518;--d:.5s"></i></span><span class="v">22%</span></div>
          <div class="r"><b>Uttarakhand</b><span class="b"><i style="--w:18%;--d:.6s"></i></span><span class="v">9%</span></div>
          <div class="r"><b>Tamil Nadu</b><span class="b"><i style="--w:8%;--d:.7s"></i></span><span class="v">4%</span></div>
        </div>
      </div>
      <div>
        <div class="tm-h"><b>FATP-4 · expected short</b><span>A shift</span></div>
        <div class="tm-cal"><span class="hd">M</span><span class="hd">T</span><span class="hd">W</span><span class="hd">T</span><span class="hd">F</span><span class="hd">S</span><span class="hd">S</span><span class="h2">19</span><span class="h3">20</span><span class="h2">21</span><span class="h1">22</span><span class="h1">23</span><span>24</span><span>25</span></div>
        <div class="tm-rows" style="margin-top:10px">
          ${row('Tue 20 · −46', 'Float pool plus 25 certified from Krishna pre-booked', 'Booked', 'g')}
          ${row('Leave requests · 132', 'Staggered across 16–26 Oct by line', 'Planned', 'b')}
        </div>
      </div>
    </div>
    <div class="note"><b>Learned from your own history:</b> punches, leave, home district, hostel block, line, contractor and the festival calendar. Forecast two weeks out, refreshed daily.</div>
  </div>
</div>`

const payrollMock = `
<div style="position:relative">${shot('assets/product/clms/pongal-bonus-component.jpg', 'goBetter · Payroll · add a one-time component', 'Production design', { h: '236px' })}<div class="tm-callout" style="right:16px;bottom:14px;--d:.7s;--ay:auto"><b>Festival bonus</b>Pongal or Deepavali bonus for one month, with PF, ESI and OT applicability set on it.</div></div>
<div class="tm" style="margin-top:12px">
  ${bar('goBetter · Pay run · October · Hosur · all contractors', 'Running')}
  <div class="tm-body">
    <div class="tm-stats" style="--n:4;margin:0"><div><div class="n">23,400</div><div class="l">Workers in run</div></div><div><div class="n">38</div><div class="l">Contractors · wage registers</div></div><div><div class="n g">1,204 h</div><div class="l">Consented OT at 2×</div></div><div><div class="n r">3</div><div class="l">Below minimum wage · returned</div></div></div>
    <div class="tm-rows">
    </div>
  </div>
</div>`

const sigs = (rows: [string, string, boolean?][]) => `<div class="tm-sig">${rows.map(([b, w, ok]) => `<div class="s"><b>${b}</b><span class="w${ok ? ' ok' : ''}">${w}</span></div>`).join('')}</div>`
const attrMock = `
<div class="tm">
  ${bar('goBetter · Attrition risk · Hosur · this week · 312 high-risk of 23,400', 'Pilot model', true)}
  <div class="tm-body">
    <div class="tm-risk" data-cycle="3200">
      <div class="tm-risklist">
        <div class="r cyc"><span class="av">PS</span><div><b>Priya S. · FATP-4</b><small>Shree · day 52</small></div><span class="sc h">81</span></div>
        <div class="r cyc"><span class="av" style="background:#FF9518">KR</span><div><b>Kavitha R. · Final B</b><small>Ganpati · day 71</small></div><span class="sc m">64</span></div>
        <div class="r cyc"><span class="av" style="background:#0d7d85">T</span><div><b>Supervisor team · FATP-6 A</b><small>team of 48</small></div><span class="sc h">2.1×</span></div>
      </div>
      <div class="tm-riskpane">
        <div class="cycpane">
          <div class="tm-h"><b>Why Priya is at 81</b><span>signals from her record</span></div>
          ${sigs([['Tenure', 'day 52 · most exits come before day 90'], ['First salary', 'credited 2 days late'], ['Station test', 'FATP refresher 52%'], ['Late punches', '5 this month'], ['Absences', '3 in 14 days · was 0']])}
          <span class="tm-actbtn">▶ Supervisor check-in today · Tamil script · close the pay query</span>
        </div>
        <div class="cycpane">
          <div class="tm-h"><b>Why Kavitha is at 64</b><span>signals</span></div>
          ${sigs([['Hostel block changed', 'B-7 → D-2'], ['Late punches', '4 in 10 days'], ['Refresher training', 'not started'], ['Absences', '1 in 14 days', true]])}
          <span class="tm-actbtn">▶ Check bus route R12 · offer A-shift swap</span>
        </div>
        <div class="cycpane">
          <div class="tm-h"><b>Team trend · FATP-6 A shift</b><span>last 90 days</span></div>
          ${sigs([['Exits in 90 days', '2.1× plant average'], ['Regularisation requests', '1.8× average'], ['Same contractor, other teams', 'normal', true]])}
          <span class="tm-actbtn">▶ Review with the supervisor and plant HR</span>
        </div>
      </div>
    </div>
    <div class="note" style="margin-top:12px"><b>Used to keep people, never to exclude.</b> Scores are not inputs to shift, overtime or renewal decisions, and the consent notice says what they are for.</div>
  </div>
</div>`

const vendorMock = `
<div class="tm">
  ${bar('goBetter · Vendor scorecard · Hosur · September', 'Live')}
  <div class="tm-body">
    <div class="tm-score">
      <div class="h">Contractor</div><div class="h">Fill rate</div><div class="h">Absence</div><div class="h">90-day attrition</div><div class="h">Compliance</div><div class="h">Grade</div>
      <div><b>Krishna Logistics</b></div><div class="good">100%</div><div>4.1%</div><div>6%</div><div class="good">Clean</div><div><span class="gr a">A</span></div>
      <div><b>Shree Manpower</b></div><div class="good">98%</div><div>5.8%</div><div>9%</div><div class="good">Clean</div><div><span class="gr a">A</span></div>
      <div><b>Ganpati Services</b></div><div>94%</div><div>7.2%</div><div>14%</div><div>1 late challan</div><div><span class="gr b">B</span></div>
      <div><b>Bhoomi Facility</b></div><div class="bad">81%</div><div class="bad">11.9%</div><div class="bad">27%</div><div class="bad">Over licence</div><div><span class="gr c">C</span></div>
    </div>
    <div class="tm-rows" style="margin-top:10px">
      ${row('Supplied beyond licence · Bhoomi', '214 deployed across 3 orders against a licence for 100 · fill time 3 shifts', 'Over', 'r', 'hot')}
      ${row('AI recommendation · next SMT order (120)', 'Allocate 60 to Krishna, 40 to Shree, 20 to Ganpati; hold Bhoomi until the licence is fixed', 'Pilot', 'y', 'warn')}
    </div>
  </div>
</div>`

const rep = (b: string, s: string) => `<div class="rp cyc"><div><b>${b}</b><small>${s}</small></div><span class="chip">Generated</span></div>`
const compMock = `
<div class="tm">
  ${bar('goBetter · Compliance · Hosur · September · 38 contractors', 'Month closed 2 Oct')}
  <div class="tm-body">
    <div class="tm-comp">
      <div class="tm-reps" data-cycle="1300">
        ${rep('Register of workers per contractor', 'OSH Code · per work order')}
        ${rep('Muster roll and wage register', 'From punches · contractor signs off')}
        ${rep('Overtime register', 'Hours, consent, 2× rate, approver')}
        ${rep('Weekly hours per worker', 'Apple format · 60 h incl. OT')}
        ${rep('Recruitment-fee declaration, age 18+', 'Per worker · for RBA audits')}
        ${rep('PF and ESI challan match', 'Per worker, per contractor')}
        ${rep('Licence and strength ledger', 'Licensed vs deployed')}
        ${rep('Exits · F&F, pass and face revoked', 'Absconding flagged at day 7')}
      </div>
      <div class="tm-side">
        <div class="tm-rows">
          ${row('Bhoomi Facility · licence', 'Licensed for 100 · deploying 214 · new passes blocked', '2.1×', 'r', 'hot')}
          ${row('Ganpati Services · PF', '6 workers with no deposit · ₹10,800 · contractor notified', 'Gap', 'y', 'warn')}
        </div>
        <div class="tm-recon"><div><div class="n">38</div><div class="l">Contractors</div></div><div><div class="n g">36</div><div class="l">Challans match</div></div><div><div class="n r">2</div><div class="l">With gaps</div></div><div><div class="n r">1</div><div class="l">Over licence</div></div></div>
        <div class="note"><b>Flag raised to Tata Electronics.</b> Whether to hold a contractor’s bill is your decision, with the liability rule shown.</div>
      </div>
    </div>
  </div>
</div>`

const hireMock = `
<div class="tm">
  ${bar('goBetter Hire · contractor portal · Hosur', 'Live')}
  <div class="tm-body">
    <div class="tm-hire">
      <div class="card">
        <div class="l">Opening · from work order WO-26-HSR-0412</div>
        <h5>FATP operator · G2 · 120 by 20 Oct</h5>
        <div class="sub">Split across contractors by scorecard grade</div>
        <div class="tm-funnel">
          <div class="f"><span>Krishna</span><span class="b"><i style="--w:100%;--d:.3s"></i></span><span class="v">60/60</span></div>
          <div class="f"><span>Shree</span><span class="b"><i style="--w:78%;--d:.4s"></i></span><span class="v">31/40</span></div>
          <div class="f"><span>Ganpati</span><span class="b"><i style="--w:55%;--d:.5s"></i></span><span class="v">11/20</span></div>
        </div>
      </div>
      <div class="card">
        <div class="l">Walk-in drive · QR link · Shree Manpower</div>
        <div style="display:flex;gap:10px;align-items:center;margin-top:6px"><span class="qr"></span><div><h5 style="margin:0">Krishnagiri ITI · 9 Oct</h5><div class="sub">Scan to apply on WhatsApp · Tamil, Hindi, Odia</div></div></div>
        <div class="tm-funnel">
          <div class="f"><span>Scanned</span><span class="b"><i style="--w:100%;--d:.3s"></i></span><span class="v">412</span></div>
          <div class="f"><span>Applied</span><span class="b"><i style="--w:49%;--d:.4s"></i></span><span class="v">203</span></div>
          <div class="f"><span>Screened</span><span class="b"><i style="--w:34%;--d:.5s"></i></span><span class="v">141</span></div>
          <div class="f"><span>Selected</span><span class="b"><i style="--w:24%;--d:.6s"></i></span><span class="v">99</span></div>
          <div class="f"><span>Onboarding</span><span class="b"><i style="--w:24%;--d:.7s"></i></span><span class="v">99</span></div>
        </div>
      </div>
    </div>
    <div class="note"><b>No re-keying.</b> A selected candidate starts onboarding on WhatsApp with the contractor, role, line and shift already filled in.</div>
  </div>
</div>`

const waTop = `<div class="top"><i>M</i><div>Mia · Tata Electronics joining<small>BetterPlace verified business</small></div></div>`
const waPhones = `
<div class="wa-row">
  <div class="wa" style="--d:.1s" data-cycle="4200">
    <div class="scr">
      ${waTop}
      <div class="lang"><span class="cyc">English</span><span class="cyc">தமிழ்</span></div>
      <div class="chat">
        <div class="cycpane">
          <div class="m" style="--d:.3s">Hi Kaviya, I\u2019m Mia. I\u2019ll handle your joining at Tata Electronics, Hosur. You\u2019ve been offered <b>FATP Operator (G2), A shift.</b><div class="doc">Offer_Letter_Kaviya.pdf</div><div class="btns"><span>Accept offer</span></div></div>
          <div class="m me" style="--d:.7s">Accept offer</div>
          <div class="m" style="--d:1s">To finish your joining I\u2019ll collect a few details. Do you consent?<div class="btns"><span>Yes, I consent</span></div></div>
          <div class="m" style="--d:1.3s">From your application: <b>Kaviya Murugan · 98xxxx2210 · Krishnagiri.</b> Correct?</div>
          <div class="m me" style="--d:1.6s">Correct</div>
        </div>
        <div class="cycpane">
          <div class="m">வணக்கம் கவியா, நான் மியா. டாடா எலக்ட்ரானிக்ஸ், ஓசூரில் உங்கள் சேர்க்கையை நான் கவனித்துக்கொள்கிறேன்.<div class="doc">Offer_Letter_Kaviya.pdf</div><div class="btns"><span>சலுகையை ஏற்கிறேன்</span></div></div>
          <div class="m me">சலுகையை ஏற்கிறேன்</div>
          <div class="m">உங்கள் சேர்க்கையை முடிக்க சில விவரங்களைச் சேகரிக்க உங்கள் ஒப்புதல் தேவை.<div class="btns"><span>ஒப்புக்கொள்கிறேன்</span></div></div>
        </div>
      </div>
    </div>
    <div class="wa-cap">1 · Offer, consent, details</div>
  </div>
  <div class="wa" style="--d:.3s">
    <div class="scr">
      ${waTop}
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
      ${waTop}
      <div class="chat">
        <div class="m" style="--d:.7s">Three short videos before you join:<div class="reels"><span style="--rc1:#1B2D93;--rc2:#2142B9">Welcome to Tata Electronics<small>2 min</small></span><span style="--rc1:#7a1f5c;--rc2:#c2397d">POSH · respect at work<small>3 min</small></span><span style="--rc1:#0d6b4f;--rc2:#1a9a6c">Safe at work · ESD<small>3 min</small></span></div></div>
        <div class="m" style="--d:1.1s">Before you touch a board, you wear…<div class="btns"><span>✓ ESD wrist strap</span></div></div>
        <div class="m" style="--d:1.5s">You\u2019re all set. Report to the <b>Training Centre, Hosur, tomorrow 13 Oct, 07:00</b> for medical, ESD kit and your hostel bed.<div class="qrp"><span class="qr"></span><span>Pass · Kaviya M.<br/>Training centre · hostel</span></div><div class="btns"><span>I\u2019ll be there</span></div></div>
      </div>
    </div>
    <div class="wa-cap">3 · Induction, joining slot, pass</div>
  </div>
</div>`

const flowMock = `
<div class="tm">
  ${bar('goBetter · Workflows · Gate 3 entry', 'Live')}
  <div class="tm-body">
    <div class="tm-flow">
      <div class="fnode" style="--d:.1s"><small>Trigger</small><b>Face at turnstile</b>or QR pass</div><span class="ar">→</span>
      <div class="fnode" style="--d:.2s;--nc:#32cad4"><small>Check</small><b>Pass and induction valid</b>licence inside strength</div><span class="ar">→</span>
      <div class="fnode" style="--d:.3s;--nc:#32cad4"><small>Check</small><b>Inside shift window</b>rostered today, rest day respected</div><span class="ar">→</span>
      <div class="fnode" style="--d:.4s;--nc:#3DBE7B"><small>Action</small><b>Open boom or turnstile</b>log entry, update headcount</div><span class="ar">→</span>
      <div class="fnode" style="--d:.5s;--nc:#FF9518"><small>Else</small><b>Deny and alert</b>supervisor and security</div>
    </div>
    <div class="tm-wfl">
      <span>Gate entry and exit, QR or face <em>Live</em></span>
      <span>Turnstile and boom barrier control <em class="cfg">Per device</em></span>
      <span>Visitor and contractor-supervisor passes <em>Live</em></span>
      <span>Absconding at day 7 · pass and face revoked <em>Live</em></span>
      <span>Debarring and re-entry approval <em>Live</em></span>
      <span>Overstay and missed-exit alerts <em>Live</em></span>
      <span>Emergency headcount by zone <em>Live</em></span>
      <span>Your own forms, approvals and alerts <em class="cfg">No code</em></span>
    </div>
  </div>
</div>`

const biMock = `
<div class="tm">
  ${bar('goBetter · Analytics · Tata Electronics · contract + on-roll · October', 'Near real time')}
  <div class="tm-body">
    <div class="tm-filters"><span>Plant <b>Hosur</b></span><span>Line <b>All</b></span><span>Contractor <b>All (38)</b></span><span>Shift <b>All</b></span><span>Worker type <b>Contract + on-roll</b></span></div>
    <div class="tm-bi">
      <div class="w"><div class="l">Inside now vs plan</div><div class="n"><span data-t="18412">0</span><small>98%</small></div></div>
      <div class="w"><div class="l">Absence · month</div><div class="n">6.8%<small>−1.4 pt</small></div></div>
      <div class="w"><div class="l">High attrition risk</div><div class="n"><span data-t="312">0</span><small class="bad">+28</small></div></div>
      <div class="w"><div class="l">Contractors with gaps</div><div class="n">2<small>of 38</small></div></div>
      <div class="w s2"><div class="l">Weekly hours · 48 h ordinary · 60 h incl. OT</div>
        <svg viewBox="0 0 300 70"><g class="bars">${[38, 42, 40, 44, 46, 45, 47, 48, 44, 41, 39, 43].map((h, i) => `<rect x="${8 + i * 24}" y="${68 - h}" width="16" height="${h}" rx="3" style="--d:${0.2 + i * 0.05}s"${i === 7 ? ' class="cap"' : ''}/>`).join('')}</g><line x1="0" y1="20" x2="300" y2="20" stroke="#FF9518" stroke-dasharray="4 3"/><line x1="0" y1="8" x2="300" y2="8" stroke="var(--red)" stroke-dasharray="4 3"/></svg></div>
      <div class="w s2"><div class="l">Shortfall by line · current shift</div>
        <div class="tree"><div class="a" style="--d:.2s">FATP-4<b>−14</b></div><div class="b" style="--d:.3s">CNC-2<b>−9</b></div><div class="c" style="--d:.4s">Final B<b>−6</b></div><div class="e" style="--d:.5s">Packing<b>−2</b></div><div class="e" style="--d:.6s">Quality<b>−1</b></div></div></div>
      <div class="w s2"><div class="l">Payroll cost per line · vs budget</div>
        <svg viewBox="0 14 300 40"><path class="sparkfill" d="M0 44 L30 40 L60 42 L90 36 L120 38 L150 30 L180 32 L210 26 L240 28 L270 22 L300 24 L300 54 L0 54Z"/><path class="spark" d="M0 44 L30 40 L60 42 L90 36 L120 38 L150 30 L180 32 L210 26 L240 28 L270 22 L300 24"/></svg></div>
      <div class="w s2"><div class="l">Contractor grades</div>
        <div class="tm-util" style="margin-top:8px">
          <div class="u"><span>Krishna</span><span class="b"><i style="--w:100%;--d:.3s"></i></span><span class="v">A</span></div>
          <div class="u"><span>Shree</span><span class="b"><i style="--w:96%;--d:.4s"></i></span><span class="v">A</span></div>
          <div class="u"><span>Ganpati</span><span class="b"><i style="--w:80%;--d:.5s"></i></span><span class="v">B</span></div>
          <div class="u"><span>Bhoomi</span><span class="b"><i style="--w:55%;--bc:var(--red);--d:.6s"></i></span><span class="v">C</span></div>
        </div></div>
    </div>
  </div>
</div>`

const archMock = `
<div class="tm">
  ${bar('Who is the system of record for what · e-Sparsh · SAP · goBetter', 'Integration map')}
  <div class="tm-body tm-arch">
    <div class="tm-sor" style="margin-top:0">
      <div class="h">Object</div><div class="h">System of record</div><div class="h">Flows to</div><div class="h">Interface</div>
      <div>On-roll employee master, on-roll leave</div><div><b>e-Sparsh</b></div><div>goBetter reads it for attendance and roster</div><div>API or nightly file · agreed with Tata group IT</div>
      <div>Contract worker master, gate pass, induction</div><div><b>goBetter</b></div><div>Contractor portal</div><div>Built in</div>
      <div>Attendance, roster, overtime · everyone</div><div><b>goBetter</b></div><div>e-Sparsh (on-roll) · SAP (contract days, OT)</div><div>API · daily</div>
      <div>Contract payroll and wage registers</div><div><b>goBetter</b></div><div>SAP for cost and contractor invoices</div><div>API · per run</div>
      <div>Work orders, invoices, payment release</div><div><b>SAP</b></div><div>goBetter checks invoices against verified attendance</div><div>API · per invoice</div>
      <div>Gate devices, turnstiles, boom barriers</div><div><b>Your hardware</b></div><div>Punches and access decisions both ways</div><div>Device integration · offline queue</div>
    </div>
  </div>
</div>`

/* ---------------- slides ---------------- */

export const tataElectronicsSlides: SlideDef[] = [
  {
    id: 'te1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="tel center" style="padding-top:0">
      <div class="tel-coverwrap">
        <div class="tel-covertext">
          <span class="kick">BetterPlace × Tata Electronics · October 2026</span>
          <h1>One operating system for your plants, <em>for every contract and on-roll worker.</em></h1>
          <p>Time and rosters, absence, payroll, attrition, contractors, compliance, hiring and onboarding on one record. Shown on the software that runs 300,000 contract workers today, configured for electronics manufacturing in Tamil Nadu and Karnataka.</p>
          <div class="meta"><span>Working session · Components business HR</span><span>Slides + live software</span><span>Confidential</span></div>
        </div>
        ${coverRing(['Time', 'Absence', 'Payroll', 'Attrition', 'Vendors', 'Comply', 'Hire', 'Onboard'], ['one operating', 'system'], false)}
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
          <div class="ev" style="--d:.6s"><b>2023–24</b><span>goBetter platform. Reliance Retail live with 300K contract workers and 3,000 vendors. Factory face devices at Reliance O2C.</span></div>
          <div class="ev" style="--d:.7s"><b>2026</b><span>AI Labs. Agents that onboard, induct, roster and reconcile, inside the same record.</span></div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'te3', theme: 'light', title: 'Who runs on us',
    html: `
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">Credentials · 2 of 2</span><h2>Three large operators already run their contract workforce on this.</h2></div></div>
      <div>
        <div class="tel-clients">
          <div class="tel-case" style="--pc:var(--navy);--d:.15s"><div class="who">Retail · 18,918 stores</div><h4>Reliance Retail</h4><div class="big">300K<small>contract workers</small></div><p>3,000+ vendors on one rule engine. Payroll leakage down 90%, vendor non-compliance down 80%, customisation 7× faster than the systems it replaced.</p><div class="mini"><div><b>3,000+</b><span>vendors</span></div><div><b>−90%</b><span>payroll leakage</span></div><div><b>−80%</b><span>vendor non-compliance</span></div></div></div>
          <div class="tel-case" style="--pc:#FF9518;--d:.3s"><div class="who">Oil &amp; gas · refineries and plants</div><h4>Bharat Petroleum</h4><div class="big">Gate<small>inside SAP</small></div><p>Work orders, gate passes and contract workers on our platform, with the gate logic living in their SAP. The count of people inside the gate is known at any moment.</p><div class="mini"><div><b>SAP</b><span>vendor and order master</span></div><div><b>30 days</b><span>no punch → pass lapses</span></div></div></div>
          <div class="tel-case" style="--pc:#0d7d85;--d:.45s"><div class="who">Quick commerce · 22 cities</div><h4>Zepto</h4><div class="big">967<small>sites</small></div><p>15,000 workers on face and geo attendance with spoof detection. Deployment gated on training completion. 40% cost saved on attendance operations.</p><div class="mini"><div><b>15,000</b><span>workers</span></div><div><b>22</b><span>cities</span></div><div><b>−40%</b><span>attendance ops cost</span></div></div></div>
        </div>
        <div class="tel-logos"><span class="lbl">Also on the platform</span>
          <img src="assets/logo/c-basf.png" alt="BASF"/><img src="assets/logo/c-Bharat_Petroleum.png" alt="BPCL"/><img src="assets/logo/c-tcs.png" alt="TCS"/><img src="assets/logo/c-accenture.png" alt="Accenture"/><img src="assets/logo/c-amazon.jpg" alt="Amazon"/><img src="assets/logo/c-titan.png" alt="Titan"/><img src="assets/logo/c-jll.png" alt="JLL"/><img src="assets/logo/c-ibm.png" alt="IBM"/>
        </div>
        <div class="tel-band"><span class="bl">Straight answer</span><p>No electronics plant runs on us yet. Our factory deployments are petrochemical and refinery sites, and we will put those plant teams on a call with you. Outcomes above are client-reported against their own prior year; baselines come in the case notes.</p></div>
      </div>
    </div>`,
  },

  plainSlide('te4', 'darker', 'Why now',
    'Why now · what is at stake on a campus of this size',
    'At this scale workforce data is not HR admin. <em>It decides output, audits and the licence to supply.</em>',
    `<div class="tel-stakes">
      <div class="st" style="--d:.15s"><div class="n"><span data-t="86466">0</span></div><div class="l">people at Tata Electronics at FY26 close, incl. contract</div><p>Up 20,819 in one year, nearly two-thirds women, most in company hostels. Every joiner is an onboarding, an induction, a face registration and a gate pass.</p><div class="src">Tata Sons Annual Report 2025-26</div></div>
      <div class="st" style="--d:.3s"><div class="n">Hundreds</div><div class="l">join and leave every week across large electronics campuses</div><p>Through local recruiters and contractors. At that churn, onboarding and exit are a production line of their own, and attrition is the most expensive number on the floor.</p><div class="src">Industry pattern · our deployments</div></div>
      <div class="st" style="--d:.45s"><div class="n">60 h</div><div class="l">weekly cap for Apple suppliers, overtime included</div><p>Weekly working hours per worker, one rest day in seven, audited. State law says 48 ordinary hours with overtime at twice the rate. Both have to be provable, worker by worker.</p><div class="src">Apple supplier accountability report, 2025</div></div>
      <div class="st" style="--d:.6s"><div class="n">Right now</div><div class="l">how many people are inside the gate, and where</div><p>At BPCL’s refineries that count must be known at any moment, and it comes from our gate punches. Safety teams and auditors on an electronics campus ask for the same.</p><div class="src">BPCL deployment</div></div>
    </div>`, { glow: true }),

  plainSlide('te5', 'light', 'The rules',
    'The rules your records must prove · the new labour codes, state rules and your customer’s code',
    'Every hour and every rupee now has to satisfy four sets of rules. <em>The software keeps you inside them.</em>',
    `<div>
      <div class="tel-codes">
        <div class="cd" style="--d:.1s"><span class="law">OSH Code 2020 · working hours</span><h4>Daily and weekly limits, a weekly rest day</h4><p>Tamil Nadu: 9 hours a day, 48 a week. Karnataka allows 12-hour days inside 48 hours with written consent. Spread-over and rest intervals apply.</p><div class="we"><b>We enforce:</b> the roster refuses a breach; actual punches that cross a limit raise an alert.</div></div>
        <div class="cd" style="--d:.18s"><span class="law">OSH Code + Code on Wages · overtime</span><h4>Overtime needs consent and pays twice</h4><p>Hours beyond the limit are overtime, only with the worker’s consent, paid at twice the ordinary rate, inside a quarterly cap set by the state.</p><div class="we"><b>We enforce:</b> consent recorded per OT shift, 2× computed, alerts before the cap.</div></div>
        <div class="cd" style="--d:.26s"><span class="law">OSH Code · women at night</span><h4>Night shifts with consent and safeguards</h4><p>Written consent, transport to residence, minimum batch sizes and safety measures, which differ by state.</p><div class="we"><b>We enforce:</b> consent kept separate and revocable; a C-shift cell needs it before it fills.</div></div>
        <div class="cd" style="--d:.34s"><span class="law">Code on Wages · pay</span><h4>Minimum wage, on time, every time</h4><p>Minimum wage by state and skill grade, wages paid on time, deductions within limits.</p><div class="we"><b>We enforce:</b> a salary below the floor is refused when it is set up, not found at inspection.</div></div>
        <div class="cd" style="--d:.42s"><span class="law">Code on Social Security · PF and ESI</span><h4>The principal employer pays if a contractor doesn’t</h4><p>PF and ESI for contract workers fall back on you when the contractor defaults.</p><div class="we"><b>We enforce:</b> every contractor challan matched to every worker, every month.</div></div>
        <div class="cd" style="--d:.5s"><span class="law">Apple Supplier Code</span><h4>60 hours including overtime, 1 day off in 7</h4><p>Weekly working hours per worker, apprentices included, evidenced for RBA audits.</p><div class="we"><b>We enforce:</b> past 60 the roster blocks; the weekly file comes straight from punches.</div></div>
      </div>
      <div class="foot" style="margin-top:10px">The four Labour Codes took effect on 21 Nov 2025; central rules were notified in May 2026. Until each state notifies its rules, saved state rules apply. We configure the rules you confirm; interpretation stays with you and your advisors.</div>
    </div>`),

  plainSlide('te6', 'light', 'What breaks on a large plant',
    'What breaks on a large electronics plant',
    'Where a contract workforce leaks time, money and compliance. <em>One record closes every gap.</em>',
    `<div>
      <div class="tel-map" style="--cols:8">
        <div class="mp" data-n="" style="--d:.1s"><div class="ph">Every shift</div><h4>Time &amp; roster</h4><p>Punches at the gate only. Rosters in spreadsheets that break hour limits nobody notices.</p><span class="ic">${svg(icons.clock)}</span></div>
        <div class="mp" data-n="" style="--d:.17s"><div class="ph">Every shift</div><h4>Absence</h4><p>Lines learn they are short at 06:00, and festival weeks surprise everyone every year.</p><span class="ic">${svg(icons.eye)}</span></div>
        <div class="mp" data-n="" style="--d:.24s"><div class="ph">Every month</div><h4>Payroll</h4><p>Days retyped from registers, overtime at the wrong rate, wages below the floor.</p><span class="ic">${svg(icons.card)}</span></div>
        <div class="mp" data-n="" style="--d:.31s"><div class="ph">Every week</div><h4>Attrition</h4><p>Exits discovered at the exit. Nobody sees the signals in time to act.</p><span class="ic">${svg(icons.users)}</span></div>
        <div class="mp" data-n="" style="--d:.38s"><div class="ph">Every order</div><h4>Vendors</h4><p>Dozens of contractors, no common measure of who supplies, who retains, who complies.</p><span class="ic">${svg(icons.building)}</span></div>
        <div class="mp" data-n="" style="--d:.45s"><div class="ph">Every audit</div><h4>Compliance</h4><p>Licences exceeded, challans unmatched, registers rebuilt by hand for the auditor.</p><span class="ic">${svg(icons.shield)}</span></div>
        <div class="mp" data-n="" style="--d:.52s"><div class="ph">Every joiner</div><h4>Hire</h4><p>Contractors source on paper and WhatsApp; data is retyped at onboarding.</p><span class="ic">${svg(icons.search)}</span></div>
        <div class="mp" data-n="" style="--d:.59s"><div class="ph">Every joiner</div><h4>Onboard</h4><p>Days from offer to first punch: forms, photocopies, a queue at the pass office.</p><span class="ic">${svg(icons.zap)}</span></div>
      </div>
      <div class="tel-phases" style="grid-template-columns:2fr 4fr 2fr"><span>While the shift runs</span><span>When the week and the month close</span><span>Before the first shift</span></div>
      <div class="tel-band light"><span class="bl">How each slide works</span><p>The <b>problem</b> on the left, <b>what changes</b> and the <b>proof</b> below it, the <b>product</b> on the right. The yellow <b>▶ Live</b> marker is where we leave the slides and open the software.</p></div>
    </div>`),

  problemSlide({
    id: 'tt1', theme: 'light', title: 'Time · capture', rail, step: 1, demo: 'Live · headcount',
    kick: 'Time & roster · 1 of 4 · capture attendance down to the line',
    h2: 'Know who is inside the plant, on which line, <em>right now, not at the end of the shift.</em>',
    qLabel: P, quote: 'Most plants only know who crossed the gate. Who reached the line, and how many are inside at this moment, is a guess.',
    changes: [
      { ic: icons.cam, b: 'Face at fixed devices, geo-face elsewhere.', t: 'Your face and biometric terminals integrated at gates and line kiosks, so no phone is needed inside the build area. Geotagged face with liveness on a phone at the training centre or outstation.' },
      { ic: icons.map, b: 'Gate, line and canteen punches.', t: 'Each punch point is a zone in the plant hierarchy, so you see how many are active in each area as people go in and out.' },
      { ic: icons.users, b: 'A live count inside the gate.', t: 'Contract, on-roll and visitors, at any moment, for safety and audit. Devices keep working offline and sync when the network returns.' },
    ],
    proof: { n: 'BPCL', p: 'knows the count of people inside its refinery gates at any moment from these punches. <b>Zepto</b> runs the same engine across 967 sites.' },
    vis: headcountMock,
    foot: 'Face and geo capture, device integration and live headcount are live. Line kiosks are configured per plant. Numbers illustrative.',
  }),

  problemSlide({
    id: 'tt2', theme: 'light', title: 'Time · rules', rail, step: 1, demo: 'Live · policy engine',
    kick: 'Time & roster · 2 of 4 · labour-law rules the roster cannot break',
    h2: 'Set the labour-law rules once. <em>The roster never breaks them, and you hear the moment reality does.</em>',
    qLabel: P, quote: 'Hour limits live in a policy document. The roster is built in a spreadsheet that has never read it.',
    changes: [
      { ic: icons.layers, b: 'Rules as settings, per state and plant.', t: '9 hours a day and 48 a week in Tamil Nadu, 12-hour days with consent in Karnataka, a rest day in seven, overtime consent and quarterly cap, night-shift conditions, Apple’s 60.' },
      { ic: icons.lock, b: 'The roster refuses a breach.', t: 'A shift that would cross a limit cannot be published. The planner sees which rule and which workers.' },
      { ic: icons.warn, b: 'Reality checked against the rules.', t: 'When punches cross 48 hours, overtime runs without consent or a rest day is missed, the supervisor and HR get an alert the same hour. Overrides need a named role, a reason and an expiry, and show on the register.' },
    ],
    proof: { n: '7×', p: 'faster rule changes at <b>Reliance</b> than the systems it replaced, across 300K workers on this rules engine.' },
    vis: `<div style="position:relative">${shot('assets/product/clms/policy-engine.jpg', 'goBetter · Attend · org-level rules', 'Real screen · demo org', { h: '196px' })}<div class="tm-callout" style="right:16px;bottom:14px;--d:.7s;--ay:auto"><b>Rules as settings</b>Full and half day, overtime cap, tolerance and edit window, with history.</div></div>${rulesAlerts}`,
    foot: 'Policy engine, roster validation and alerts are live. Screen shows a demo organisation’s settings; your values follow your state rules.',
  }),

  problemSlide({
    id: 'tt3', theme: 'dark', title: 'Time · auto roster', rail, step: 1, demo: 'Live · auto roster',
    kick: 'Time & roster · 3 of 4 · intelligent rostering',
    h2: 'Give us demand and the rules. <em>We build the roster, and rebuild it when a line stops or a festival hits.</em>',
    qLabel: P, quote: 'A separate scheduling tool, a separate attendance system, and contractors rostering in Excel in between.',
    changes: [
      { ic: icons.clock, b: 'Any pattern the law allows.', t: 'Three 8-hour shifts at Hosur; 12-hour, four-on-three-off at Narasapura with written consent; 5- or 6-day weeks; a weekly off that rotates per person month to month.' },
      { ic: icons.repeat, b: 'Rebuilt on the day.', t: 'Absences filled only with operators certified on those stations. Shutdowns move crews or send them to paid training instead of idle time. Festivals planned two weeks out.' },
      { ic: icons.layers, b: 'No scheduling tool in between.', t: 'Roster, attendance, overtime and pay on one record. Nothing to sync, nothing to reconcile.' },
    ],
    proof: { n: 'Minutes', p: 'for shortfall management at <b>Reliance Retail</b> on this roster engine, down from hours. Rostering and backfill agents are live.' },
    vis: autoRosterMock, wide: true,
    foot: 'Roster engine, patterns and the rostering and backfill agents are live. Building the roster from a production-plan forecast is configured in the pilot. Numbers illustrative.',
  }),

  problemSlide({
    id: 'tt4', theme: 'light', title: 'Time · leave, holidays, roles', rail, step: 1, demo: 'Live · leave and holidays',
    kick: 'Time & roster · 4 of 4 · leave, holidays, roles and certifications',
    h2: 'Every rule knows who it applies to, <em>because leave, holidays, roles and certifications live on one record.</em>',
    qLabel: P, quote: 'Leave sits in one system, holidays in a circular, roles in a spreadsheet. The roster and payroll see none of them.',
    changes: [
      { ic: icons.check, b: 'Leave for the contract workforce.', t: 'Policies and balances per contractor and role, applied and approved on the phone. On-roll leave stays in e-Sparsh and syncs, so attendance covers everyone.' },
      { ic: icons.map, b: 'Holidays by state and site.', t: 'Pongal in Tamil Nadu, Rajyotsava in Karnataka, national and optional holidays, each applied to the right plants.' },
      { ic: icons.user, b: 'Roles and station certifications.', t: 'Designation, skill grade, default line and station, OJT sign-off and ESD certification with expiry. The roster will not place an uncertified or expired operator.' },
    ],
    proof: { n: '18,026', p: 'face-registered workers in a single client organisation on this attendance record, with roles, sites and leave attached.' },
    vis: leaveMock,
    foot: 'Leave, holiday, shift and role configuration are live. The e-Sparsh sync for on-roll leave is agreed with Tata group IT in the pilot. Names illustrative.',
  }),

  problemSlide({
    id: 'tp2', theme: 'dark', title: 'Absence', rail, step: 2, demo: 'Live · absence analytics',
    kick: 'Absence · predicted before it happens',
    h2: 'Festival absence is predictable. <em>We show which lines, which home states and which days, two weeks ahead.</em>',
    qLabel: P, quote: 'Every Dasara and Deepavali the same lines run short, and every year it is handled at 06:00 with phone calls and overtime.',
    changes: [
      { ic: icons.eye, b: 'Patterns from your own data.', t: 'Absence by home district and state, hostel block, line, contractor, weekday and payday, from face punches and leave.' },
      { ic: icons.chart, b: 'A forecast, then a plan.', t: 'Two weeks out for festivals, a day ahead for everything else. Leave is staggered, standby is pre-booked with contractors, travel batches are spread.' },
      { ic: icons.repeat, b: 'The roster acts on it.', t: 'Forecast gaps go straight into the auto-roster. Late hostel buses are matched to the route log, so 40 late punches are excused, not 40 regularisations.' },
    ],
    proof: { n: 'Baseline', p: 'is your own last Dasara and Deepavali shortfall. The pilot measures the forecast against it, line by line.' },
    vis: festMock,
    foot: 'Analytics live; the forecast is a pilot model on your history. Never uses caste, religion or community. Figures illustrative.',
  }),

  problemSlide({
    id: 'tp3', theme: 'light', title: 'Payroll', rail, step: 3, demo: 'Live · pay run',
    kick: 'Payroll · from verified attendance',
    h2: 'Run payroll for every contractor from verified attendance, <em>with minimum wage and overtime built in.</em>',
    qLabel: P, quote: 'Days are retyped from contractor registers, overtime is paid at the wrong rate, and nobody checks the floor wage until an inspector does.',
    changes: [
      { ic: icons.clock, b: 'Pay from punches.', t: 'Present days, half days, holidays worked and consented overtime at 2× flow in. Pongal and Deepavali bonuses as one-time components.' },
      { ic: icons.layers, b: 'Your structures and registers.', t: 'Salary structures by state and skill grade, multiple wage registers by contractor and plant, payslips in the worker app in Tamil.' },
      { ic: icons.shield, b: 'Or validate the contractor’s payroll.', t: 'Upload their wage register; we check it against attendance, rates and the minimum wage before you release payment.' },
    ],
    proof: { n: '−90%', p: 'payroll leakage at <b>Reliance</b> once pay ran from verified attendance, across 300K+ workers.' },
    vis: payrollMock,
    foot: 'Payroll and wage-register checks are live. OT is measured in hours, normalised to days; no true hourly payroll.',
  }),

  problemSlide({
    id: 'tp4', theme: 'dark', title: 'Attrition', rail, step: 4, demo: 'Live · risk list',
    kick: 'Attrition · predicted per worker and per team',
    h2: 'Know who is likely to leave, and which teams lose people, <em>while there is still time to act.</em>',
    qLabel: P, quote: 'Attrition is reported after the exit. By then the contractor has replaced the worker and onboarding starts again.',
    changes: [
      { ic: icons.users, b: 'Signals from her record.', t: 'Tenure window, whether the first salary landed on time, station test scores, late punches, absences and hostel moves.' },
      { ic: icons.chart, b: 'Team trends, not just names.', t: 'When people under one supervisor leave at twice the plant rate, it shows as a trend for plant HR to take up.' },
      { ic: icons.zap, b: 'One action, in her language.', t: 'A check-in script, a shift swap, a pay query closed the same day, tracked so you learn what works.' },
    ],
    proof: { n: '−15%', p: 'attrition, client-reported across our enterprise deployments once these signals were acted on every week.' },
    vis: attrMock,
    foot: 'Pilot model on live signals; scores after ~90 days of history, validated at week 16. People are composites.',
  }),

  problemSlide({
    id: 'tp5', theme: 'light', title: 'Vendors', rail, step: 5, demo: 'Live · vendor scorecard',
    kick: 'Vendors · work orders, supply and a scorecard',
    h2: 'Every contractor, every work order and every worker they supply, <em>scored on how they actually perform.</em>',
    qLabel: P, quote: 'Thirty-plus contractors, and the renewal decision rests on who shouts loudest, not who supplies, retains and complies.',
    changes: [
      { ic: icons.building, b: 'One vendor master.', t: 'Documents, licences and insurance tracked to expiry; work orders with sanctioned strength by skill; rate cards.' },
      { ic: icons.users, b: 'Supply you can see.', t: 'Requested against supplied per shift, time to fill, absence and attrition of each contractor’s workers.' },
      { ic: icons.chart, b: 'An AI scorecard.', t: 'Contractors graded on fill, absence, attrition, onboarding speed and compliance, with a recommended split for the next order.' },
    ],
    proof: { n: '3,000+', p: 'vendors on one rule engine at <b>Reliance</b>, each tracked against its work orders this way.' },
    vis: vendorMock, flip: true,
    foot: 'Vendor master, work orders and the scorecard are live. The AI allocation recommendation is a pilot. Names and numbers illustrative.',
  }),

  problemSlide({
    id: 'tp6', theme: 'dark', title: 'Compliance', rail, step: 6, demo: 'Live · month close',
    kick: 'Compliance · checked continuously, not at audit time',
    h2: 'Licences, registers, overtime and contractor PF and ESI, <em>checked every day, ready for any auditor.</em>',
    qLabel: P, quote: 'A contractor licensed for 100 is quietly running 200, and the PF challan is a PDF nobody has matched.',
    changes: [
      { ic: icons.doc, b: 'Licence against headcount.', t: 'Licensed strength per contractor measured against deployment across every work order; new passes blocked when it is exceeded.' },
      { ic: icons.check, b: 'Audit-ready on any day.', t: 'Muster roll, wage and overtime registers, the weekly hours file, recruitment-fee and age declarations for RBA, and exits closed on time.' },
      { ic: icons.shield, b: 'PF and ESI, worker by worker.', t: 'Contractor challans read by OCR and matched to payroll. Gaps flagged to you; holding a bill stays your decision.' },
    ],
    proof: { n: '−80%', p: 'vendor non-compliance risk at <b>Reliance</b> across 3,000 contractors on these checks.' },
    vis: compMock,
    foot: 'Registers, licence ledger and challan reconciliation are live. The Apple weekly-hours format and night-shift log are configured in the pilot. Figures illustrative.',
  }),

  problemSlide({
    id: 'tp7', theme: 'light', title: 'Hire', rail, step: 7, demo: 'Live · contractor hiring',
    kick: 'Hire · contractors source on the same platform',
    h2: 'Contractors hire on the same platform, <em>so every candidate arrives with the data already in place.</em>',
    qLabel: P, quote: 'Contractors source on paper and WhatsApp. HR sees a name list the day before joining and retypes everything.',
    changes: [
      { ic: icons.doc, b: 'Openings from the work order.', t: 'Roles, lines, skill grades and numbers split across contractors by their scorecard grade.' },
      { ic: icons.search, b: 'Sourcing that measures itself.', t: 'QR links for walk-in drives at ITIs and villages, WhatsApp apply in Tamil, Hindi or Odia, screening questions and skill tests.' },
      { ic: icons.zap, b: 'Straight into onboarding.', t: 'Selected candidates move to onboarding with contractor, role, line and shift filled. You see each contractor’s funnel and time to fill.' },
    ],
    proof: { n: '−60%', p: 'hiring lead time across our enterprise clients when sourcing, verification and onboarding sit on one record.' },
    vis: hireMock, flip: true,
    foot: 'goBetter Hire is live (in production for store and sales hiring). The contractor portal set-up for Tata Electronics is configured in the pilot. Numbers illustrative.',
  }),

  {
    id: 'to1', theme: 'dark', title: 'Onboard · WhatsApp',
    html: `
    <div class="tel">
      ${rail(8, 'Live · WhatsApp onboarding')}
      <div class="tel-head"><div><span class="kick">Onboard · 1 of 2 · on WhatsApp, in her language</span><h2>Hired today, onboarded on WhatsApp by evening, <em>at the training centre the next morning.</em></h2></div></div>
      <div class="tel-body" style="grid-template-columns:minmax(0,.3fr) minmax(0,.7fr)">
        <div class="tel-say">
          <div class="blk"><div class="lbl">${P}</div><div class="tq">Days between offer and first day: forms, photocopies and a queue at the pass office for every joiner.</div></div>
          <div class="blk"><div class="lbl">What changes</div><ul>
            <li><span class="ic">${svg(icons.zap)}</span><span><b>The hire triggers it.</b> Offer, consent and details on WhatsApp, prefilled from hiring.</span></li>
            <li><span class="ic">${svg(icons.lang)}</span><span><b>Her language.</b> Tamil or any of 35 languages, switched at any step.</span></li>
            <li><span class="ic">${svg(icons.mic)}</span><span><b>Stuck? Our agent calls.</b> An AI voice agent walks her through the step. Live at Zepto.</span></li>
          </ul></div>
          <div class="proof"><div class="n">45 min</div><p>average onboarding at <b>Zepto</b> on this flow, documents to certificate.</p></div>
        </div>
        <div class="tel-vis">${waPhones}</div>
        <div class="foot">WhatsApp onboarding, Aadhaar OCR, the calling agent and induction are live. Kaviya is a composite.</div>
      </div>
    </div>`,
  },

  problemSlide({
    id: 'to2', theme: 'light', title: 'Onboard · verified and through the gate', rail, step: 8, demo: 'Live · BGV and gate pass',
    kick: 'Onboard · 2 of 2 · verified, audit-ready, access by zone',
    h2: 'The minute onboarding finishes, she is verified, cleared for audits <em>and her access is set up, zone by zone.</em>',
    qLabel: P, quote: 'Verification runs for days with an agency, induction is a signature, and the gate pass needs another trip to an office.',
    changes: [
      { ic: icons.shield, b: 'Verification starts on its own.', t: 'UAN fetched and filled by API, EPF history and record checks in one to two minutes. Address and court checks finish within a day.' },
      { ic: icons.check, b: 'RBA checks on the record.', t: 'Age 18+ and a no-recruitment-fee declaration per worker, stored with the record for Apple and RBA auditors.' },
      { ic: icons.lock, b: 'Access by zone, set up the same minute.', t: 'Training centre, canteen and hostel from day 1; the line once checks clear and OJT is signed off. Pushed to your devices.' },
    ],
    proof: { n: '1–2 min', p: 'for UAN fetch and record checks in most cases in production. 25M+ verified profiles behind them.' },
    vis: `<div class="tm">
      ${bar('goBetter · Kaviya M. · verification and access', 'Live')}
      <div class="tm-body">
        <div class="tm-rows">
          ${row('Aadhaar · age 18+ · recruitment-fee declaration', 'Verified on WhatsApp · stored for RBA audits', 'Clear', 'g')}
          ${row('UAN fetched and filled · EPF history · record check', 'By API · 1 min 40 s', 'Clear', 'g')}
          ${row('Address and court checks', 'Returned clear in 19 hours · line access unlocked', 'Clear', 'g')}
          ${row('Medical · ESD kit · hostel bed D-2', 'Recorded at the training centre on day 1', 'Done', 'g')}
        </div>
        <div class="tm-h" style="margin:12px 0 0"><b>Access by zone · pushed to your devices</b><span>no pass office</span></div>
        <div class="tm-zones2">
          <div><b>Training centre</b>Active from 06:30 day 1</div>
          <div><b>Canteen · hostel gate</b>Active from day 1</div>
          <div style="--zc:#FF9518"><b>FATP-4 line</b>After checks clear and OJT sign-off</div>
          <div style="--zc:#8A93B8"><b>Build area</b>Kiosk only · no phone</div>
        </div>
      </div>
    </div>`,
    foot: 'Verification, UAN fetch and device enrolment are live. Line access waits for checks and OJT sign-off by default.',
  }),

  problemSlide({
    id: 'tw1', theme: 'light', title: 'Plant workflows', demo: 'Live · workflows',
    kick: 'Across every area · gate management and plant workflows',
    h2: 'Gates, entry, exit and every plant routine as workflows you configure. <em>The operating system for your factories.</em>',
    qLabel: P, quote: 'Gate rules live in the security office, visitor passes in a register, and nobody can say who is still inside after a shift.',
    changes: [
      { ic: icons.lock, b: 'Gate management.', t: 'Entry by QR or face, turnstile and boom barrier control, and entry only inside the rostered shift window.' },
      { ic: icons.warn, b: 'Exits and exceptions.', t: 'Missed-exit alerts, absconding flagged after the days you set with pass and face revoked, F&F timer, debarring, visitor passes.' },
      { ic: icons.layers, b: 'Your own routines.', t: 'Forms, approval chains and alerts for any plant process, configured without code on the same worker record.' },
    ],
    proof: { n: 'BPCL', p: 'runs gate pass issue, renewal and auto-termination, visitor management, debarring and delegation as workflows on this platform.' },
    vis: flowMock, wide: true,
    foot: 'Gate workflows and the workflow builder are live. Turnstile and boom barrier control is configured per device model.',
  }),

  problemSlide({
    id: 'tbi', theme: 'dark', title: 'Intelligence', demo: 'Live · analytics',
    kick: 'Intelligence · everything on one screen',
    h2: 'See what is going right and what is going wrong, <em>contract and on-roll together, on one screen.</em>',
    qLabel: P, quote: 'Data sits with contractors, in e-Sparsh and in SAP. A simple workforce question takes a week of emails.',
    changes: [
      { ic: icons.chart, b: 'Every area on one screen.', t: 'Headcount against plan, absence, weekly hours, payroll cost, attrition risk and contractor grades. Drill from plant to a single worker.' },
      { ic: icons.building, b: 'Vendor intelligence.', t: 'Fill, absence, attrition and compliance by contractor, side by side, every month.' },
      { ic: icons.plug, b: 'Your tools too.', t: 'Dashboards in the platform, or the same data to Power BI and SAP by API.' },
    ],
    proof: { n: '7×', p: 'faster customisation of rules and reports at <b>Reliance</b>, where these dashboards run for 300K workers and 3,000 contractors.' },
    vis: biMock, wide: true,
    foot: 'Embedded analytics are live (Amazon QuickSight, hosted in India) and refresh near real time. Attrition and absence tiles depend on the pilot models. Values illustrative.',
  }),

  plainSlide('tfit', 'light', 'How it fits with e-Sparsh',
    'Fit · e-Sparsh, SAP and your gate hardware',
    'e-Sparsh stays the HR system for your employees. <em>goBetter runs the gate, the line and the contractors, and feeds both.</em>',
    `<div class="tel-body" style="grid-template-columns:minmax(0,.4fr) minmax(0,.6fr);align-items:center">
      <div class="tel-say">
        <div class="blk"><div class="lbl">What changes</div><ul>
          <li><span class="ic">${svg(icons.plug)}</span><span><b>One attendance engine for everyone.</b> On-roll and contract punch at the same devices; on-roll leave stays in e-Sparsh and syncs, so nothing that replaced Kronos is undone.</span></li>
          <li><span class="ic">${svg(icons.layers)}</span><span><b>One system of record per object.</b> e-Sparsh owns on-roll people and leave, SAP owns orders and payment, goBetter owns the contract worker, the punch and the registers.</span></li>
          <li><span class="ic">${svg(icons.repeat)}</span><span><b>Practice, not just a tool.</b> The rules Reliance and BPCL run on come pre-configured as a starting point.</span></li>
        </ul></div>
        <div class="proof"><div class="n">BPCL</div><p>runs our gate logic inside its own SAP. The e-Sparsh interface is new, and we agree it with Tata group IT.</p></div>
      </div>
      <div class="tel-vis">${archMock}</div>
    </div>`, { demo: 'Live · integration' }),

  plainSlide('tsec', 'light', 'Where the data lives',
    'Security · for InfoSec and Legal, before the pilot, not after',
    'Aadhaar, faces and hostel addresses for 86,000 people. <em>What we can state today, and what the security pack covers.</em>',
    `<div class="tel-sec">
      <div class="col">
        <div class="lbl">What we can state today</div>
        <div class="row"><b>ISO 27001 · SOC 2 · DPDPA-aligned</b><span>Certificates, the SOC 2 report and a draft data processing agreement go to InfoSec and Legal with the pack.</span></div>
        <div class="row"><b>Hosted in India</b><span>Worker data, face data and documents stay in Indian regions. No cross-border processing.</span></div>
        <div class="row"><b>Face used for matching, not sharing</b><span>Face data verifies the punch. Liveness stops a photo at the device. Access to images is role-gated and logged.</span></div>
        <div class="row"><b>Role-based access by plant and contractor</b><span>Each contractor sees only its own workers. Plant HR sees the plant. Every edit is on an exportable audit log.</span></div>
        <div class="row"><b>Consent in her language, revocable</b><span>Purpose-specific notices for identity, face, attendance and the absence and attrition models, with a withdrawal path.</span></div>
        <div class="row"><b>AI agents behind guardrails</b><span>PII masking, private models, no training on your data. Agent actions are logged like any user’s.</span></div>
      </div>
      <div class="col pack">
        <div class="lbl">What the security pack covers · for review before week 1</div>
        <div class="row"><b>Architecture and tenant isolation</b><span>How your data is separated from other clients, and contractors from each other.</span></div>
        <div class="row"><b>Encryption and key management</b><span>In transit and at rest, who holds keys, how gate devices reach the cloud over mobile data.</span></div>
        <div class="row"><b>Biometric storage, retention, deletion</b><span>What is stored for a face, for how long, and how deletion on exit is evidenced against register-retention duties.</span></div>
        <div class="row"><b>DPDPA roles and sub-processors</b><span>Fiduciary and processor split between you, each contractor and BetterPlace, in writing.</span></div>
        <div class="row"><b>SSO, penetration tests, incident notification</b><span>Azure AD single sign-on, latest external test summary, breach-notification commitment.</span></div>
        <div class="row"><b>Liability, exit and portability</b><span>Who carries what when a computed hour is wrong, export formats, and the deletion certificate if you stop.</span></div>
      </div>
    </div>`, { demo: 'Pack sent this week' }),

  plainSlide('tstat', 'dark', 'What is live',
    'The honest table · what runs today, what we configure, what we build on your data',
    'Most of this runs at clients today. <em>Here is exactly what is live, configured or built on your data.</em>',
    `<div class="tel-status tight">
      <div class="h"></div><div class="h">Area</div><div class="h">What runs today</div><div class="h">Status for Tata Electronics</div>
      <div class="r" style="--d:.05s"><i>·</i><b>Attendance capture, live headcount</b><span>Face and geo with liveness, device integration, gate and zone punches. Zepto 967 sites, BPCL.</span><em class="live">Live · line kiosks configured</em></div>
      <div class="r" style="--d:.1s"><i>·</i><b>Rules, roster, auto-roster</b><span>Policy engine, roster validation, alerts, patterns, rostering and backfill agents.</span><em class="mix">Live · plan-driven roster configured</em></div>
      <div class="r" style="--d:.15s"><i>·</i><b>Leave, holidays, shifts, roles</b><span>Configuration live. On-roll leave stays in e-Sparsh and syncs.</span><em class="live">Live · e-Sparsh sync agreed in pilot</em></div>
      <div class="r" style="--d:.2s"><i>·</i><b>Absence</b><span>Analytics and exception queues live. The forecast is trained on your history.</span><em class="pilot">Analytics live · forecast pilot model</em></div>
      <div class="r" style="--d:.25s"><i>·</i><b>Payroll</b><span>Pay from attendance, structures, minimum wage, wage-register checks. OT normalised to days.</span><em class="live">Live</em></div>
      <div class="r" style="--d:.3s"><i>·</i><b>Attrition</b><span>Every signal is live data; the score is trained on your history and validated at week 16.</span><em class="pilot">Pilot model on your data</em></div>
      <div class="r" style="--d:.35s"><i>·</i><b>Vendors and scorecard</b><span>Vendor master, work orders, supply tracking, grades. Allocation recommendation in pilot.</span><em class="mix">Live · AI allocation pilot</em></div>
      <div class="r" style="--d:.4s"><i>·</i><b>Compliance</b><span>Licence ledger, registers, OT register, challan match. Apple file and night-shift log configured.</span><em class="mix">Live · two reports configured</em></div>
      <div class="r" style="--d:.45s"><i>·</i><b>Hire</b><span>Openings, QR and WhatsApp sourcing, screening, pipeline.</span><em class="live">Live · contractor portal configured</em></div>
      <div class="r" style="--d:.5s"><i>·</i><b>Onboarding and gate access</b><span>WhatsApp flow, Aadhaar OCR, calling agent, BGV, induction reels, gate enrolment.</span><em class="live">Live</em></div>
      <div class="r" style="--d:.55s"><i>·</i><b>Workflows and intelligence</b><span>Gate workflows, workflow builder, embedded dashboards. Boom barriers per device model.</span><em class="live">Live</em></div>
    </div>`),

  plainSlide('tplan', 'light', 'Eight weeks at one plant',
    'How we start · one plant, two contractors, eight weeks',
    'Eight weeks at Hosur with two contractors, <em>and you decide on your own data</em> whether Narasapura and Chennai follow.',
    `<div>
      <div class="tel-plan">
        <div class="wk" style="--d:.15s"><div class="w">Weeks 1–2</div><h4>Configure</h4><ul><li>Plant hierarchy, lines, zones, shifts and patterns</li><li>Tamil Nadu hour rules, overtime caps, Apple 60</li><li>Two contractors, work orders, licences</li><li>Gate devices, two line kiosks, offline test</li><li>e-Sparsh and SAP mapping with Shubham and group IT</li></ul><div class="out">Rules, devices and consent live on one line</div></div>
        <div class="wk" style="--d:.3s"><div class="w">Weeks 3–4</div><h4>Hire, onboard, gate</h4><ul><li>Contractor hiring on QR and WhatsApp</li><li>WhatsApp onboarding in Tamil, BGV, induction reels</li><li>Gate access the minute onboarding ends</li><li>History migrated for the models</li></ul><div class="out">Offer to first punch measured</div></div>
        <div class="wk" style="--d:.45s"><div class="w">Weeks 5–6</div><h4>Run the shifts</h4><ul><li>Live headcount and line punches</li><li>Auto-roster with rule alerts</li><li>Absence forecast from week 6</li><li>Vendor supply tracked per shift</li></ul><div class="out">Time, roster and absence on live data</div></div>
        <div class="wk" style="--d:.6s"><div class="w">Weeks 7–8</div><h4>Close the month</h4><ul><li>Pay run from punches for both contractors</li><li>Registers, weekly-hours file, challan match</li><li>Vendor scorecard and dashboard review</li><li>Legal reviews the generated registers</li></ul><div class="out">Payroll, compliance, vendors live; attrition validates at week 16</div></div>
      </div>
      <div class="tel-band light"><span class="bl">Who brings what</span><div class="two three"><div><h5>Tata Electronics</h5><p>A plant HR owner and Shubham as the working contact. Two contractors and their work orders. Device locations. e-Sparsh and SAP contacts. EHS content for induction. Legal for the DPA.</p></div><div><h5>BetterPlace</h5><p>Configuration, device integration, induction reels, time-office and contractor training, a named deployment manager, and a weekly review with the numbers as each area goes live.</p></div><div><h5>Commercials and exit</h5><p>Software priced per active worker per month; devices itemised with ownership agreed before week 1; pilot scope in writing. If you stop at week 8: full export and a deletion certificate.</p></div></div></div>
    </div>`),

  plainSlide('tnext', 'darker', 'Next step',
    'Next step',
    'Three things to agree today, <em>and the pilot is configured within two weeks of InfoSec sign-off.</em>',
    `<div class="tel-close">
      <div class="asks">
        <div class="ask" style="--d:.15s"><div class="n">1</div><div><h4>Pick the plant and two contractors</h4><p>Hosur is the natural choice: the largest contract workforce, the hostel-to-line journey and the Apple hours requirement. Two contractors with different fill rates give a fair test.</p></div></div>
        <div class="ask" style="--d:.3s"><div class="n">2</div><div><h4>A working session with Shubham and group IT</h4><p>Ninety minutes on master data, e-Sparsh and SAP interfaces, hour rules and shift patterns, and the induction content. We configure from that session.</p></div></div>
        <div class="ask" style="--d:.45s"><div class="n">3</div><div><h4>Security and legal review, this week</h4><p>ISO 27001 and SOC 2 reports, the draft data processing agreement, residency and access model to InfoSec and Legal, so the pilot does not wait on them.</p></div></div>
        <div class="tel-weeks"><span style="--d:.6s"><b>WEEKS 1–2</b>Configure</span><span style="--d:.68s"><b>WEEKS 3–4</b>Hire, onboard, gate</span><span style="--d:.76s"><b>WEEKS 5–6</b>Run the shifts</span><span style="--d:.84s"><b>WEEKS 7–8</b>Close the month</span></div>
      </div>
      <div class="tel-contact">
        <div class="nm">Anuj Saxena</div><div class="rl">Director, Product · BetterPlace</div>
        <a href="mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent('Tata Electronics · pilot at Hosur')}">anuj.saxena@betterplace.co.in</a>
        <p>One operating system for your plants. The software you saw today is the software the pilot runs on, configured for Tata Electronics.</p>
      </div>
    </div>`, { glow: true }),
]

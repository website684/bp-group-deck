import type { SlideDef } from '../lib/types'
import { icons } from './html'
import { svg, makeRail, bar, row, shot, problemSlide, plainSlide, coverRing } from './story-kit'
import { type PlantCfg, rosterUI, rulesUI, headcountMock, leaveMock, waPhones } from './attend-kit'

// goBetter CLMS · the general contract-labour deck for a principal employer (plant, refinery,
// facility). v3, Oct 2026: rebuilt on the shared story grammar after the Tata Electronics
// six-persona rehearsal. Order = the order things happen on site (vendor → work order → worker →
// gate → attendance → overtime → wages/challans → invoice/registers), then intelligence,
// integrations, security, an honest status table, proof and how to start.
// Sources: Jindal Stainless SOW (Aug 2026), BPCL / Reliance / Zepto deployments, knowledge/*.md,
// knowledge/13-clms-legal-facts.md. Legal framing follows the OSH Code (in force 21 Nov 2025).
// Real screenshots are cleaned crops in public/assets/product/clms/ (demo org, PII blurred).
// No prices, uptime figures or numeric SLAs. Mock numbers are illustrative and footers say so.

const STEPS = ['Vendors', 'Orders', 'Hire', 'Onboard', 'Verify', 'Gate', 'Attend', 'OT', 'Pay', 'Comply', 'Train']
const rail = makeRail(STEPS, [3, 7, 11], false)
const Q = 'On site today'

const PL: PlantCfg = {
  org: 'Sahyadri Auto', orgInitials: 'SA', site: 'Chakan plant', gate: 'Gate 2',
  lineA: 'Assembly-3', lineB: 'Assembly-1', lineC: 'Machining', floatPool: 'float pool',
  zones: [
    { n: 'Gate 2 · shift change', s: '4 devices · A in, C out · cleared in 22 min', c: '146', d: 'queued', dc: 'in' },
    { n: 'Assembly lines 1–4', s: 'line kiosks · since 06:00', c: '1,980', d: '97% of plan', dc: 'in' },
    { n: 'Machining', s: 'line kiosks', c: '1,120', d: '91%', dc: 'out' },
    { n: 'Paint shop', s: 'line kiosks', c: '640', d: '98%', dc: 'in' },
    { n: 'Stores and dispatch', s: 'line kiosks', c: '520', d: '99%', dc: 'in' },
  ],
  inside: 5280, insideSub: 'A shift in 4,860 · C shift still exiting 362 · visitors 58',
  workers: [
    { i: 'RS', n: 'Ravi Sharma', id: 'P1-10417', meta: 'Skilled · Assembly-3' },
    { i: 'SY', n: 'Sunita Yadav', id: 'P1-10588', meta: 'Semi-skilled · Assembly-3' },
    { i: 'AK', n: 'Arjun Kale', id: 'P1-09902', meta: 'Skilled · night consent ✓' },
    { i: 'MP', n: 'Manoj Patil', id: 'P1-10133', meta: 'Skilled · Assembly-3' },
    { i: 'PD', n: 'Pooja Desai', id: 'P1-10711', meta: 'Semi-skilled · Assembly-3' },
    { i: 'IK', n: 'Imran Khan', id: 'P1-10056', meta: 'Skilled · Assembly-3' },
  ],
  contractors: ['Shree', 'Ganpati', 'Krishna'],
  ruleSetName: 'Rule set · Maharashtra plants',
  rules: [
    { k: 'Maximum hours per day', v: '9', u: 'h', law: 'OSH Code · state' },
    { k: 'Maximum ordinary hours per week', v: '48', u: 'h', law: 'OSH Code' },
    { k: 'Weekly rest', v: '1 in 7', u: 'days', law: 'OSH Code' },
    { k: 'Overtime at 2×, with worker consent', v: 'On', u: '', law: 'OSH Code · Wages' },
    { k: 'Overtime cap per quarter', v: '75', u: 'h', law: 'State rule' },
  ],
  holidays: [
    { n: 'Gudi Padwa', d: '19 Mar', w: 'Plants 1 and 2 · Maharashtra', c: 'MH' },
    { n: 'Ganesh Chaturthi', d: '14 Sep', w: 'all Maharashtra plants', c: 'MH' },
    { n: 'Diwali', d: '8–9 Nov', w: 'all plants', c: 'All' },
  ],
  roleTitle: 'Assembly operator · skilled', roleMeta: 'OJT sign-off, forklift licence · per station',
  persona: { first: 'Sunita', full: 'Sunita Yadav', initials: 'SY', role: 'Assembly Operator (semi-skilled), A shift', city: 'Chakan', phone: '97xxxx3381' },
  lang: {
    label: 'हिंदी',
    greet: 'नमस्ते सुनीता, मैं मिया हूँ। सह्याद्री ऑटो, चाकण प्लांट में आपकी जॉइनिंग मैं संभालूँगी। आपको असेंबली ऑपरेटर, A शिफ्ट का ऑफर मिला है।',
    accept: 'ऑफर स्वीकार है', consent: 'जॉइनिंग पूरी करने के लिए कुछ जानकारी लेने हेतु आपकी सहमति चाहिए।', agree: 'मैं सहमत हूँ',
    upload: 'कृपया अपना आधार अपलोड करें।', verified: 'आधार सत्यापित',
  },
  joinMsg: 'You\u2019re all set. Report to the <b>Training Centre, Chakan, tomorrow, 07:00</b> for medical, PPE kit and induction.',
  reel3: 'Safe on the shop floor', quiz: ['Which PPE is mandatory on the line?', 'Safety shoes and gloves'],
  access: [['Training centre', 'Active from 06:30 day 1'], ['Canteen', 'Active from day 1'], ['Assembly-3 line', 'After checks clear and OJT sign-off', '#FF9518']],
  week: 'Oct 13 – Oct 19, 2026', days: [['Mon', 'Oct 13'], ['Tue', 'Oct 14'], ['Wed', 'Oct 15'], ['Thu', 'Oct 16'], ['Fri', 'Oct 17'], ['Sat', 'Oct 18'], ['Sun', 'Oct 19']], todayIdx: 3,
}

/* ---------------- mocks ---------------- */

const licenceMock = `
<div class="tm">
  ${bar('goBetter CLMS · Contractor licence ledger · Plant 1', 'Live')}
  <div class="tm-body">
    <div class="tm-gauges" style="margin-top:0">
      <div class="gg"><b>Shree Manpower</b><span class="tr"><i style="--w:87%;--d:.3s"></i><em style="--cap:100%"></em></span><span class="v">174 / 200</span></div>
      <div class="gg"><b>Ganpati Services</b><span class="tr"><i style="--w:71%;--d:.4s"></i><em style="--cap:100%"></em></span><span class="v">106 / 150</span></div>
      <div class="gg"><b>Bhoomi Facility</b><span class="tr"><i style="--w:100%;--bc:var(--red);--d:.5s"></i><em style="--cap:84%"></em></span><span class="v r">63 / 53 · over</span></div>
      <div class="gg"><b>Krishna Logistics</b><span class="tr"><i style="--w:46%;--d:.6s"></i><em style="--cap:100%"></em></span><span class="v">37 / 80</span></div>
    </div>
    <div class="tm-rows" style="margin-top:12px">
      ${row('Gate pass request · Suresh Y. · Bhoomi Facility', '10 over the licensed strength · request blocked at issue', 'Blocked', 'r', 'hot')}
      ${row('Ganpati Services licence', 'Valid to 30 Nov · renewal reminder sent at 60 and 30 days', '52 days', 'y', 'warn')}
      ${row('Register of contractors', 'Generated from this ledger · no second copy kept', 'View', 'b')}
    </div>
  </div>
</div>`

const gateMock = `
<div class="tm">
  ${bar('goBetter CLMS · Gate pass · Suresh Yadav · Bhoomi Facility · WO-2026-P1-131', 'Checking')}
  <div class="tm-body">
    <div class="tm-rows">
      ${row('Work order live, inside sanctioned strength', 'WO-2026-P1-131 · 48 of 60 deployed', 'Clear', 'g')}
      ${row('Contractor licence valid, inside licensed strength', 'Bhoomi Facility · 63 deployed against 53 licensed', 'Blocked', 'r', 'hot')}
      ${row('Identity and background check', 'Aadhaar eKYC and face match clear · address and court checks returned green', 'Clear', 'g')}
      ${row('Employee compensation cover current', 'WC policy · valid to 12 Jan 2027', 'Clear', 'g')}
      ${row('Safety induction certificate', 'Passed 9/10 in Hindi · photo PPE check · valid to 12 Mar 2027', 'Clear', 'g')}
    </div>
    <div class="note"><b>Pass not issued.</b> Bhoomi Facility is 10 over its licence. The contractor sees why in the portal; you see it on the vendor dashboard.</div>
  </div>
</div>`

const otMock = `
<div class="tm">
  ${bar('goBetter · Overtime register · Plant 1 · Q3 · cap 75 h per worker (your rule)', 'Live')}
  <div class="tm-body">
    <div class="tm-gauges" style="margin-top:0">
      <div class="gg"><b>Ravi K. · fitter</b><span class="tr"><i style="--w:41%;--d:.3s"></i><em style="--cap:100%"></em></span><span class="v">31 / 75 h</span></div>
      <div class="gg"><b>Sunita D. · housekeeping</b><span class="tr"><i style="--w:91%;--bc:#FF9518;--d:.4s"></i><em style="--cap:100%"></em></span><span class="v">68 / 75 h</span></div>
      <div class="gg"><b>Mohan L. · loader</b><span class="tr"><i style="--w:100%;--bc:var(--red);--d:.5s"></i><em style="--cap:100%"></em></span><span class="v r">75 / 75 h</span></div>
    </div>
    <div class="tm-rows" style="margin-top:12px">
      ${row('Ravi K. · Sat 11 Oct · 4 h', 'Raised by supervisor · worker consent recorded in app · approved on mobile 10 Oct', '2× rate', 'g')}
      ${row('Sunita D. · approaching cap', 'Alert sent to supervisor and contractor at 90%', 'Alert', 'y', 'warn')}
      ${row('Mohan L. · further OT', 'Quarterly cap reached · roster refuses new OT shifts', 'Blocked', 'r', 'hot')}
      ${row('Unpunched OT claim · 3 h · Tue', 'No punch record for the claimed hours', 'Rejected', 'r')}
    </div>
  </div>
</div>`

const payrunMock = `
<div class="tm" style="margin-top:12px">
  ${bar('goBetter · Pay run · September · Shree Manpower · 174 workers', 'Running')}
  <div class="tm-body">
    <div class="tm-rows">
      ${row('1 · Attendance details', 'From verified punches · no manual entry', 'Done', 'g')}
      ${row('2 · Variables', 'Festival bonus · PF and ESI applicability on the component', 'Done', 'g')}
      ${row('3 · Wage checks', '2 records below the minimum wage returned to the contractor', 'Checking', 'y', 'warn')}
    </div>
  </div>
</div>`

const invoiceMock = `
<div class="tm">
  ${bar('goBetter CLMS · Invoice check · INV-0919 · WO-2026-P1-114 · September', 'Live')}
  <div class="tm-body">
    <div class="tm-stats"><div><div class="n">4,872</div><div class="l">Shifts invoiced</div></div><div><div class="n g">4,701</div><div class="l">Shifts gate-verified</div></div><div><div class="n r">171</div><div class="l">Shifts held</div></div></div>
    <div class="tm-rows">
      ${row('Billed but not present', '16 workers · 148 shifts with no gate punch on the billed days', 'Held', 'r', 'hot')}
      ${row('Rate mismatch', '3 workers billed as skilled, deployed semi-skilled on the order', '₹8,400', 'y', 'warn')}
      ${row('Above sanction', '23 shifts beyond the 180 sanctioned on 4 days', 'Review', 'y')}
      ${row('PF challan for the period', '6 workers unmatched · your release condition not met', 'Gated', 'b')}
    </div>
  </div>
</div>`

const rep = (b: string, s: string) => `<div class="rp cyc"><div><b>${b}</b><small>${s}</small></div><span class="chip">Generated</span></div>`
const regMock = `
<div class="tm">
  ${bar('goBetter CLMS · Registers · Plant 1 · September', 'Month closed 2 Oct')}
  <div class="tm-body">
    <div class="tm-comp">
      <div class="tm-reps" data-cycle="1300">
        ${rep('Register of contractors', 'From the licence ledger')}
        ${rep('Register of workers per contractor', 'Per work order')}
        ${rep('Muster roll and wage register', 'From punches · contractor signs off')}
        ${rep('Overtime register', 'Hours, consent, approver')}
        ${rep('Wage slips', 'To the worker app')}
        ${rep('Challan reconciliation', 'PF and ESI per worker')}
        ${rep('Annual return', 'OSH Code · pre-filled')}
        ${rep('Audit trail export', 'Every edit, old and new')}
      </div>
      <div class="tm-side">
        <div class="tm-stats" style="--n:2;margin:0"><div><div class="n">8</div><div class="l">Registers and reports</div></div><div><div class="n g">39</div><div class="l">Contractors signed off</div></div></div>
        <div class="tm-rows">
          ${row('Ganpati Services', 'Wage register sign-off pending · reminder sent', 'Pending', 'y', 'warn')}
          ${row('Bhoomi Facility', 'Licence lapsed in period · flagged on the register', 'Flagged', 'r', 'hot')}
        </div>
        <div class="note"><b>Formats follow your state rules.</b> Saved state rules apply until each state notifies its OSH Code rules.</div>
      </div>
    </div>
  </div>
</div>`

const biMock = `
<div class="tm">
  ${bar('goBetter · Analytics · contract workforce · all plants · October', 'Near real time')}
  <div class="tm-body">
    <div class="tm-filters"><span>State <b>All</b></span><span>Plant <b>All (4)</b></span><span>Contractor <b>All (41)</b></span><span>Shift <b>All</b></span><span>Period <b>Oct 2026</b></span></div>
    <div class="tm-bi">
      <div class="w"><div class="l">Deployed vs sanctioned</div><div class="n"><span data-t="6214">0</span><small>98.6%</small></div></div>
      <div class="w"><div class="l">Absenteeism · month</div><div class="n">7.2%<small>−0.9 pt</small></div></div>
      <div class="w"><div class="l">Workers near OT cap</div><div class="n"><span data-t="37">0</span><small class="bad">+6</small></div></div>
      <div class="w"><div class="l">Contractors with gaps</div><div class="n">3<small>of 41</small></div></div>
      <div class="w s2"><div class="l">Shortfall by site · current shift</div>
        <div class="tree"><div class="a" style="--d:.2s">Plant 2 · maint.<b>−35</b></div><div class="b" style="--d:.3s">Plant 1 · HK<b>−8</b></div><div class="c" style="--d:.4s">Plant 3<b>−5</b></div><div class="e" style="--d:.5s">Plant 4<b>−2</b></div><div class="e" style="--d:.6s">Yard<b>−1</b></div></div></div>
      <div class="w s2"><div class="l">Contractor scorecard · fill · no-shows · compliance</div>
        <div class="tm-util" style="margin-top:8px">
          <div class="u"><span>Shree</span><span class="b"><i style="--w:98%;--d:.3s"></i></span><span class="v">98%</span></div>
          <div class="u"><span>Ganpati</span><span class="b"><i style="--w:94%;--d:.4s"></i></span><span class="v">94%</span></div>
          <div class="u"><span>Krishna</span><span class="b"><i style="--w:91%;--d:.5s"></i></span><span class="v">91%</span></div>
          <div class="u"><span>Bhoomi</span><span class="b"><i style="--w:72%;--bc:var(--red);--d:.6s"></i></span><span class="v">72%</span></div>
        </div></div>
      <div class="w s4"><div class="l">Attendance trend · 90 days · % of sanctioned present</div>
        <svg viewBox="0 14 600 40"><path class="sparkfill" d="M0 44 L60 40 L120 42 L180 36 L240 38 L300 30 L360 32 L420 26 L480 28 L540 22 L600 24 L600 54 L0 54Z"/><path class="spark" d="M0 44 L60 40 L120 42 L180 36 L240 38 L300 30 L360 32 L420 26 L480 28 L540 22 L600 24"/></svg></div>
    </div>
  </div>
</div>`

const archMock = `
<div class="tm">
  ${bar('One record, six connections', 'Integration map')}
  <div class="tm-body tm-arch">
    <svg viewBox="0 0 700 250">
      <rect class="box soft" x="12" y="18" width="150" height="56" rx="12"/><text class="bt" x="26" y="42">SAP / ERP</text><text class="bs" x="26" y="58">PO · VENDOR · COST</text>
      <rect class="box soft" x="12" y="96" width="150" height="56" rx="12"/><text class="bt" x="26" y="120">Gate devices</text><text class="bs" x="26" y="136">FACE · FINGER · PASS</text>
      <rect class="box soft" x="12" y="174" width="150" height="56" rx="12"/><text class="bt" x="26" y="198">Contractors</text><text class="bs" x="26" y="214">PORTAL · CHALLANS</text>
      <rect class="box hero" x="230" y="52" width="220" height="146" rx="16"/><text class="bt w" x="250" y="82" style="font-size:13px">goBetter CLMS</text><text class="bs w" x="250" y="100">ONE WORKER RECORD</text>
      <text class="bs w" x="250" y="128">VENDOR · ORDER · GATE</text><text class="bs w" x="250" y="144">ATTEND · OT · WAGES</text><text class="bs w" x="250" y="160">CHALLANS · INVOICE</text><text class="bs w" x="250" y="184" style="fill:var(--yellow)">INDIA · ISO 27001 · SOC 2</text>
      <rect class="box" x="530" y="18" width="160" height="56" rx="12"/><text class="bt" x="544" y="42">Payroll</text><text class="bs" x="544" y="58">VERIFIED DAYS · OT OUT</text>
      <rect class="box" x="530" y="96" width="160" height="56" rx="12"/><text class="bt" x="544" y="120">Worker app</text><text class="bs" x="544" y="136">HOURS · PAYSLIPS</text>
      <rect class="box" x="530" y="174" width="160" height="56" rx="12"/><text class="bt" x="544" y="198">Your BI</text><text class="bs" x="544" y="214">API · DAILY FEED</text>
      <path class="ln" d="M162 46 C200 46 200 92 230 92" style="--d:.2s"/><path class="ln" d="M162 124 L230 124" style="--d:.35s"/><path class="ln" d="M162 202 C200 202 200 160 230 160" style="--d:.5s"/>
      <path class="ln y" d="M450 92 C490 92 490 46 530 46" style="--d:.65s"/><path class="ln" d="M450 124 L530 124" style="--d:.8s"/><path class="ln" d="M450 160 C490 160 490 202 530 202" style="--d:.95s"/>
    </svg>
  </div>
</div>`

const side = (on: number) => `<div class="ui-side"><span class="lg"></span>${[0, 1, 2, 3, 4, 5].map((i) => `<i class="${i === on ? 'on' : ''}${i === 0 || i === 5 ? ' r' : ''}"></i>`).join('')}</div>`
const top = (crumb: string, title: string) => `<div class="ui-top"><div><div class="ui-crumb">${crumb}</div><div class="ui-title">${title}</div></div><div class="ui-org"><span>SA</span>Sahyadri Auto</div></div>`

const vendorUI = `
<div class="ui">
  ${side(1)}
  <div class="ui-main">
    ${top('Sahyadri Auto / CLMS / <b>Vendors</b>', 'Vendor master · all plants')}
    <div class="ui-bar"><span class="ui-box">64 vendors</span><span class="ui-box">Type: All 9</span><span class="ui-box">Location: All plants</span><span class="ui-sp"></span><span class="ui-btn">Bulk upload</span><span class="ui-btn pri">+ Add vendor</span></div>
    <div class="hv-tbl">
      <div class="h">Vendor</div><div class="h">Contract type</div><div class="h">Documents</div><div class="h">Workers · licence</div><div class="h">Login</div>
      <div><b>Sri Sakthi Services</b><small>Plant 1 · since 2019</small></div><div><span class="hv-t m">Manpower</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d g">WC</span><span class="hv-d g">Licence</span></div><div>412 / 500</div><div><span class="hv-s g">Active</span></div>
      <div><b>Ganesh Logistics</b><small>Plant 1 · logistics</small></div><div><span class="hv-t j">Job · attendance</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d y">WC 19 d</span><span class="hv-d g">Licence</span></div><div>186 / 200</div><div><span class="hv-s g">Active</span></div>
      <div><b>Velan Engineering</b><small>Plant 2 · AMC</small></div><div><span class="hv-t a">AMC</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d g">WC</span><span class="hv-d n">n/a</span></div><div>24 · 3-month passes</div><div><span class="hv-s g">Active</span></div>
      <div><b>Kumaran Builders</b><small>Plant 2 · new block</small></div><div><span class="hv-t c">Construction</span></div><div><span class="hv-d g">PF</span><span class="hv-d r">ESI missing</span><span class="hv-d g">WC</span><span class="hv-d g">BOCW</span></div><div>58 · held</div><div><span class="hv-s y">IC approval</span></div>
      <div><b>Royal Caterers</b><small>Plant 1 · canteen</small></div><div><span class="hv-t s">Service</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d g">FSSAI</span><span class="hv-d g">WC</span></div><div>96</div><div><span class="hv-s g">Active</span></div>
    </div>
    <div class="hv-foot">Contract type sets the pass validity, the modules that apply and the approval chain · login created on IC approval</div>
  </div>
</div>`

const woUI = `
<div class="ui">
  ${side(2)}
  <div class="ui-main">
    ${top('Sahyadri Auto / CLMS / Work orders / <b>WO-your-2026-0312</b>', 'Work order · Material handling, Plant 1')}
    <div class="hv-wo">
      <div class="hv-kv"><span>Contractor</span><b>Ganesh Logistics</b><span>Type</span><b>Job contract · attendance based</b><span>Domain head</span><b>R. Srinivasan · Logistics</b><span>Validity</span><b>01 Apr 2026 – 31 Mar 2027</b></div>
      <div class="hv-chain"><span class="ok">HR created</span><i>→</i><span class="ok">HR TL</span><i>→</i><span class="ok">HR DH</span><i>→</i><span class="ok">Contractor assigned</span><i>→</i><span class="ok">User and DH informed</span></div>
    </div>
    <div class="hv-price">
      <div class="h">Skill code</div><div class="h">Headcount</div><div class="h">Rate / day</div><div class="h">Min wage · state</div><div class="h">Statutory</div>
      <div><b>MH-SK</b> Skilled</div><div>60 / 60</div><div>₹1,040</div><div><span class="hv-d g">₹ OK</span></div><div>PF · ESI · bonus auto</div>
      <div><b>MH-SS</b> Semi-skilled</div><div>94 / 100</div><div>₹930</div><div><span class="hv-d g">₹ OK</span></div><div>PF · ESI · bonus auto</div>
      <div><b>MH-FL</b> Forklift</div><div>32 / 40</div><div>₹980</div><div><span class="hv-d r">Below floor</span></div><div>Upload refused</div>
    </div>
    <div class="hv-foot">Price master by Excel upload · minimum wage checked per skill code · a revision notifies only the contractors on that skill code</div>
  </div>
</div>`

const scoreUI = `
<div class="ui">
  ${side(4)}
  <div class="ui-main">
    ${top('Sahyadri Auto / CLMS / <b>Contractor performance · September</b>', 'Contractor scorecard')}
    <div class="ui-bar"><span class="ui-box">Manpower and job contracts · 41</span><span class="hv-rag"><i class="g"></i>29 green<i class="o"></i>9 orange<i class="r"></i>3 red</span><span class="ui-sp"></span><span class="ui-btn">Monthly report</span><span class="ui-btn pri">Send for DH approval</span></div>
    <div class="hv-score">
      <div class="h">Contractor</div><div class="h">Attendance vs TO</div><div class="h">Attrition</div><div class="h">Statutory</div><div class="h">User score</div><div class="h">Overall</div>
      <div><b>Sri Sakthi Services</b></div><div class="bar"><i style="--w:98%"></i>98%</div><div>3.1%</div><div><span class="hv-d g">On time</span></div><div>4.6 / 5</div><div><span class="hv-g g">92</span></div>
      <div><b>Velan Engineering</b></div><div class="bar"><i style="--w:96%"></i>96%</div><div>2.4%</div><div><span class="hv-d g">On time</span></div><div>4.4 / 5</div><div><span class="hv-g g">89</span></div>
      <div><b>Ganesh Logistics</b></div><div class="bar"><i style="--w:91%;--bc:#f59e0b"></i>91%</div><div>6.8%</div><div><span class="hv-d y">ESI late</span></div><div>3.7 / 5</div><div><span class="hv-g o">71</span></div>
      <div><b>Kumaran Builders</b></div><div class="bar"><i style="--w:78%;--bc:#ef4444"></i>78%</div><div>14.2%</div><div><span class="hv-d r">PF short</span></div><div>2.9 / 5</div><div><span class="hv-g r">48</span></div>
    </div>
    <div class="hv-ai"><b>✦ Next work order · 120 material handlers</b> Suggested split: Sri Sakthi 70, Velan 50. Hold Kumaran until the PF gap is cleared.</div>
  </div>
</div>`

const hireMock = `
<div class="tm">
  ${bar('goBetter Hire · contractor portal · Plant 1', 'Live')}
  <div class="tm-body">
    <div class="tm-hire">
      <div class="card">
        <div class="l">Opening · from work order WO-2026-P1-114</div>
        <h5>Assembly operator · semi-skilled · 120 by 20 Oct</h5>
        <div class="sub">Split across contractors by scorecard grade</div>
        <div class="tm-funnel">
          <div class="f"><span>Krishna</span><span class="b"><i style="--w:100%;--d:.3s"></i></span><span class="v">60/60</span></div>
          <div class="f"><span>Shree</span><span class="b"><i style="--w:78%;--d:.4s"></i></span><span class="v">31/40</span></div>
          <div class="f"><span>Ganpati</span><span class="b"><i style="--w:55%;--d:.5s"></i></span><span class="v">11/20</span></div>
        </div>
      </div>
      <div class="card">
        <div class="l">Walk-in drive · QR link · Shree Manpower</div>
        <div style="display:flex;gap:10px;align-items:center;margin-top:6px"><span class="qr"></span><div><h5 style="margin:0">Chakan ITI · 9 Oct</h5><div class="sub">Scan to apply on WhatsApp · Hindi, Marathi, Odia</div></div></div>
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

const verifyUI = `
<div class="ui">
  ${side(3)}
  <div class="ui-main">
    ${top('Sahyadri Auto / verifyBetter / Cases / <b>Sunita Yadav</b>', 'Background verification · Assembly operator pack')}
    <div class="ui-bar"><span class="ui-box">Batch: 48 joiners · Shree Manpower</span><span class="hv-rag"><i class="g"></i>41 green<i class="o"></i>5 amber<i class="r"></i>2 red</span><span class="ui-sp"></span><span class="ui-btn">Case report PDF</span><span class="ui-btn pri">Initiate batch</span></div>
    <div class="hv-steps">
      <div class="hv-st done"><span class="n">✓</span><div><b>Identity · Aadhaar, PAN, face match, liveness</b><small>Returned in 2 minutes</small></div><em>Green</em></div>
      <div class="hv-st done"><span class="n">✓</span><div><b>Employment · UAN and EPF history</b><small>2 previous employers · no gaps flagged</small></div><em>Green</em></div>
      <div class="hv-st done"><span class="n">✓</span><div><b>Address · digital and physical</b><small>Chakan, Pune · verified 6 Oct</small></div><em>Green</em></div>
      <div class="hv-st on"><span class="n">4</span><div><b>Legal · court records, police verification</b><small>Court clear · police report awaited</small></div><em>Running</em></div>
      <div class="hv-st"><span class="n">5</span><div><b>Health · fitness for the role</b><small>Medical at the plant on day 1</small></div><em>Day 1</em></div>
    </div>
    <div class="hv-ai" style="background:#f0fdf4;border-color:#bbf7d0"><b style="color:#166534">Pass rule:</b> identity and employment green → provisional pass · full pass when legal checks return · red stops the pass and alerts HR.</div>
  </div>
</div>`

const bulkUI = `
<div class="ui">
  ${side(2)}
  <div class="ui-main">
    ${top('Sahyadri Auto / Onboard / <b>Bulk upload · Batch B-1042</b>', 'Bulk onboarding · Shree Manpower · WO-2026-P1-114')}
    <div class="hv-up"><span class="doc"></span><div><b>Joiners_Oct_Week3.xlsx · 212 rows · uploaded by contractor 14 Oct, 10:42</b><small>Template by contract type · Aadhaar, PAN, UAN, bank, skill code, line, shift, documents as links or a zip</small></div><span class="hv-s g">Validated in 38 s</span></div>
    <div class="hv-comp" style="margin-bottom:0">
      <div class="c"><b>Ready</b><span class="n">196</span><small>all checks passed</small><em class="g">Onboarded</em></div>
      <div class="c"><b>Fix and resend</b><span class="n">12</span><small>errors in one file</small><em class="y">Returned</em></div>
      <div class="c"><b>Blocked</b><span class="n">4</span><small>duplicate · under 18</small><em class="r">Held</em></div>
      <div class="c"><b>Next, in bulk</b><span class="n">196</span><small>BGV · face · passes</small><em class="g">Started</em></div>
    </div>
    <div class="hv-price" style="grid-template-columns:.5fr 1.2fr 1.6fr .8fr">
      <div class="h">Row</div><div class="h">Worker</div><div class="h">Check</div><div class="h">Result</div>
      <div>14</div><div><b>Rahul Pawar</b></div><div>Aadhaar · UAN · bank IFSC · skill MH-SS</div><div><span class="hv-d g">Ready</span></div>
      <div>57</div><div><b>Amit Shinde</b></div><div>UAN belongs to another name</div><div><span class="hv-d y">Fix</span></div>
      <div>88</div><div><b>Sagar Jadhav</b></div><div>Already active with Ganpati Services</div><div><span class="hv-d r">Duplicate</span></div>
      <div>131</div><div><b>Kiran More</b></div><div>Date of birth: age 17</div><div><span class="hv-d r">Under 18</span></div>
    </div>
    <div class="hv-ai" style="background:#f0fdf4;border-color:#bbf7d0"><b style="color:#166534">196 workers onboarded in one go.</b> Background checks initiated, face enrolment slots booked, provisional passes queued for approval.</div>
  </div>
</div>`

/* ---------------- slides ---------------- */

export const clmsSlides: SlideDef[] = [
  {
    id: 'cm1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="tel center" style="padding-top:0">
      <div class="tel-coverwrap">
        <div class="tel-covertext">
          <span class="kick">goBetter CLMS · for principal employers</span>
          <h1>Every contract worker on your site, <em>from work order to wage slip,</em> on one record.</h1>
          <p>The contractor's licence, the work order, the gate pass, the induction certificate, the attendance, the overtime, the PF challan and the invoice. Held together, checked against each other, and visible to you before the inspector or the auditor asks.</p>
          <div class="tel-nums" style="margin-top:24px">
            <div><div class="n">300K</div><div class="l">Contract workers live at Reliance</div></div>
            <div><div class="n">3,000<em>+</em></div><div class="l">Vendors on one rule engine</div></div>
            <div><div class="n">967</div><div class="l">Sites on the attendance engine at Zepto</div></div>
          </div>
        </div>
        ${coverRing(['Vendors', 'Hire', 'Onboard', 'Verify', 'Attend', 'Pay', 'Comply', 'Train'], ['one', 'worker record'], false)}
      </div>
    </div>`,
  },

  {
    id: 'cmA', theme: 'dark', title: 'Who we are',
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
  plainSlide('cmB', 'light', 'Customer impact',
    'Customer impact · whole contract workforces, run on BetterPlace',
    'We run the entire contract workforce for India\u2019s largest enterprises, <em>from vendor to gate to wage.</em>',
    `<div>
      <div class="tel-clients" style="grid-template-columns:1.15fr 1.15fr .8fr">
        <div class="tel-case" style="--pc:var(--navy);--d:.15s"><div class="who">Reliance · Retail, Jio, O2C</div><h4>Reliance Industries</h4><div class="big">300K<small>contract workers, end to end</small></div><p>Their entire contract workforce on one platform: 3,000+ vendors, work orders and position codes, onboarding and verification, attendance, payroll, PF and ESI challan reconciliation and registers, across 18,000+ stores, Jio sites and O2C plants.</p><div class="mini"><div><b>−90%</b><span>payroll leakage</span></div><div><b>−80%</b><span>vendor non-compliance</span></div><div><b>7×</b><span>faster rule changes</span></div></div></div>
        <div class="tel-case" style="--pc:#FF9518;--d:.3s"><div class="who">Energy · PSU · refineries and plants</div><h4>Bharat Petroleum</h4><div class="big">Every<small>contract worker at the gate</small></div><p>BPCL\u2019s contract workforce runs on our CLMS: vendors and work orders from SAP, labour licences and insurance per contract, gate pass issue, renewal and auto-termination, visitor management, and a live count of everyone inside the refinery.</p><div class="mini"><div><b>SAP</b><span>integrated master</span></div><div><b>Live</b><span>headcount inside</span></div><div><b>30 days</b><span>no swipe → pass lapses</span></div></div></div>
        <div class="tel-case" style="--pc:#0d7d85;--d:.45s"><div class="who">Quick commerce · 22 cities</div><h4>Zepto</h4><div class="big">967<small>sites</small></div><p>15,000 workers on face and geo attendance with spoof detection; deployment gated on training.</p><div class="mini"><div><b>−40%</b><span>attendance ops cost</span></div></div></div>
      </div>
      <div class="tel-logos"><span class="lbl">Also on the platform</span>
        <img src="assets/logo/c-basf.png" alt="BASF"/><img src="assets/logo/c-tcs.png" alt="TCS"/><img src="assets/logo/c-accenture.png" alt="Accenture"/><img src="assets/logo/c-amazon.jpg" alt="Amazon"/><img src="assets/logo/c-titan.png" alt="Titan"/><img src="assets/logo/c-jll.png" alt="JLL"/><img src="assets/logo/c-ibm.png" alt="IBM"/>
      </div>
    </div>`),

  plainSlide('cmC', 'darker', 'Why now',
    'Why now · what is at stake on a plant of this size',
    'Contract labour is no longer an HR file. <em>It decides output, audits and the principal employer\u2019s liability.</em>',
    `<div class="tel-stakes">
      <div class="st" style="--d:.15s"><div class="n">21 Nov 2025</div><div class="l">the four Labour Codes in force · central rules May 2026</div><p>Contractor registers, licensed strength, the core-activity bar and one annual electronic return. State rules are still landing, differently in every state you operate in.</p><div class="src">Labour Codes notification</div></div>
      <div class="st" style="--d:.3s"><div class="n">You pay</div><div class="l">wages, PF and ESI when a contractor defaults</div><p>The principal employer pays and recovers. With dozens of vendors across your plants, one unmatched challan becomes your notice.</p><div class="src">OSH Code · Code on Social Security</div></div>
      <div class="st" style="--d:.45s"><div class="n">48 h</div><div class="l">ordinary hours a week · overtime at 2×, with consent</div><p>Every hour beyond the limit needs the worker\u2019s consent, is paid at twice the rate and sits inside a quarterly cap. It has to be provable, worker by worker.</p><div class="src">OSH Code · Code on Wages</div></div>
      <div class="st" style="--d:.6s"><div class="n">Right now</div><div class="l">how many contract workers are inside the gate, and where</div><p>At BPCL\u2019s refineries that count must be known at any moment, and it comes from our gate swipes. Safety and auditors at a manufacturing plant ask for the same.</p><div class="src">BPCL deployment</div></div>
    </div>`, { glow: true }),

  plainSlide('cmD', 'light', 'The rules',
    'The rules your records must prove · the new labour codes and state rules',
    'Every pass, hour and rupee now has to satisfy the labour codes. <em>The software keeps you inside them.</em>',
    `<div>
      <div class="tel-codes">
        <div class="cd" style="--d:.1s"><span class="law">OSH Code · contract labour</span><h4>Licensed strength and the core-activity bar</h4><p>Each contractor deploys only up to its licence, and only in roles open to contract work.</p><div class="we"><b>We enforce:</b> a pass that would cross the licence is blocked at issue.</div></div>
        <div class="cd" style="--d:.18s"><span class="law">OSH Code · working hours</span><h4>Daily and weekly limits, a weekly rest day</h4><p>Typically 9 hours a day and 48 a week, set state by state for every plant and site. Sunday work needs a permit.</p><div class="we"><b>We enforce:</b> the roster refuses a breach; swipes that cross a limit raise an alert.</div></div>
        <div class="cd" style="--d:.26s"><span class="law">OSH Code + Code on Wages · overtime</span><h4>Overtime needs consent and pays twice</h4><p>Only with the worker\u2019s consent, at twice the ordinary rate, inside a quarterly cap.</p><div class="we"><b>We enforce:</b> consent per OT shift, 2× computed, approval inside the billing cycle.</div></div>
        <div class="cd" style="--d:.34s"><span class="law">Code on Wages · pay</span><h4>Minimum wage by skill, paid on time</h4><p>Minimum wage by state and skill, bonus, holiday wages and deductions within limits.</p><div class="we"><b>We enforce:</b> a rate below the floor is refused in the price master.</div></div>
        <div class="cd" style="--d:.42s"><span class="law">Code on Social Security · PF, ESI, gratuity</span><h4>The principal employer pays if a contractor doesn\u2019t</h4><p>PF, ESI and gratuity for contract workers fall back on you when the contractor defaults.</p><div class="we"><b>We enforce:</b> every challan matched to every worker, every month.</div></div>
        <div class="cd" style="--d:.5s"><span class="law">OSH Code · registers and returns</span><h4>Registers on demand, one annual return</h4><p>Workers per contractor, muster roll, wages, overtime, wage slips, the annual return.</p><div class="we"><b>We generate:</b> any register, any day, signed off by the contractor.</div></div>
      </div>
      <div class="foot" style="margin-top:10px">Central rules were notified in May 2026; until each state notifies its rules, saved state rules apply. We configure the rules you confirm; interpretation stays with you and your advisors.</div>
    </div>`),

  plainSlide('cm2', 'light', 'The problem',
    'Why contract labour is a board-level number now',
    'You answer for people you did not hire, <em>paid by companies you do not control.</em>',
    `<div>
      <div class="tel-eq">
        <div class="rec" style="--d:.1s"><span class="ic">${svg(icons.doc)}</span><h4>Contractor licence</h4><p>Strength, validity, insurance. Found expired when someone looks.</p><div class="where">A folder in admin</div></div>
        <div class="rec" style="--d:.2s"><span class="ic">${svg(icons.lock)}</span><h4>Gate register</h4><p>Who came in, on paper or a badge that never expires.</p><div class="where">At security</div></div>
        <div class="rec" style="--d:.3s"><span class="ic">${svg(icons.users)}</span><h4>Wage sheet</h4><p>Days and wages as the contractor says they were.</p><div class="where">At the contractor</div></div>
        <div class="rec" style="--d:.4s"><span class="ic">${svg(icons.shield)}</span><h4>PF challan</h4><p>A PDF in email. Nobody matches it to the workers.</p><div class="where">In someone's inbox</div></div>
        <div class="rec" style="--d:.5s"><span class="ic">${svg(icons.card)}</span><h4>Invoice</h4><p>Checked against the contractor's own timesheet.</p><div class="where">In finance</div></div>
        <span class="eqs">=</span>
        <div class="res"><b>Five records that never meet until the audit.</b><span>Billed-but-absent shifts paid every month. Overtime past the cap. A contractor's unpaid PF arriving as your notice. Three to four weeks of audit preparation.</span></div>
      </div>
      <div class="foot" style="margin-top:12px">The OSH Code 2020 subsumed the Contract Labour Act on 21 Nov 2025; central rules were notified in May 2026. State rules are still landing, and saved state rules apply meanwhile. We supply data, registers and the audit trail; legal interpretation stays with you and your advisors.</div>
    </div>`),

  plainSlide('cm3', 'light', 'One record',
    'What CLMS does · one worker record, in the order things happen on site',
    'From vendor to wage, one record. <em>Each step checks the ones before it.</em>',
    `<div>
      <div class="tel-map" style="--cols:8">
        <div class="mp" data-n="" style="--d:.1s"><div class="ph">Before deployment</div><h4>Vendors &amp; orders</h4><p>Vendor master, work orders, licensed strength, price master, scorecard.</p><span class="ic">${svg(icons.building)}</span></div>
        <div class="mp" data-n="" style="--d:.17s"><div class="ph">Sourcing</div><h4>Hire</h4><p>Contractors source on the platform: openings, QR drives, screening.</p><span class="ic">${svg(icons.search)}</span></div>
        <div class="mp" data-n="" style="--d:.24s"><div class="ph">Day 0</div><h4>Onboard &amp; verify</h4><p>WhatsApp onboarding, eKYC, background checks by role.</p><span class="ic">${svg(icons.shield)}</span></div>
        <div class="mp" data-n="" style="--d:.31s"><div class="ph">Day 0</div><h4>Gate</h4><p>Induction with a test. Pass only if every condition clears.</p><span class="ic">${svg(icons.lock)}</span></div>
        <div class="mp" data-n="" style="--d:.38s"><div class="ph">Every shift</div><h4>Attend</h4><p>Face, geo or devices. Labour-law roster, live headcount.</p><span class="ic">${svg(icons.clock)}</span></div>
        <div class="mp" data-n="" style="--d:.45s"><div class="ph">Every shift</div><h4>Overtime</h4><p>From punches, with consent, inside caps, at twice the rate.</p><span class="ic">${svg(icons.zap)}</span></div>
        <div class="mp" data-n="" style="--d:.52s"><div class="ph">Every month</div><h4>Pay</h4><p>Payroll from attendance. PF and ESI challans matched per worker.</p><span class="ic">${svg(icons.card)}</span></div>
        <div class="mp" data-n="" style="--d:.59s"><div class="ph">Every month</div><h4>Comply &amp; train</h4><p>Registers from the record. Refreshers on the LMS, tracked.</p><span class="ic">${svg(icons.doc)}</span></div>
      </div>
      <div class="tel-phases" style="grid-template-columns:4fr 2fr 2fr"><span>Before the gate opens</span><span>While the shift runs</span><span>When the month closes</span></div>
      <div class="tel-band light"><span class="bl">How to read the next slides</span><p>One step per slide, in this order. <b>What happens on site today</b> on the left, <b>what changes</b> and the <b>proof</b> below it, the <b>product</b> on the right. Screens marked <b>Real screen</b> are captures from the platform with demo data; the rest are authored views of the same flows.</p></div>
    </div>`),

  problemSlide({
    id: 'cm4', theme: 'light', title: 'Vendor master', rail, step: 1, demo: 'Live · vendor register',
    kick: 'the vendor',
    h2: 'Every contractor on file, <em>every document with an expiry date</em> and a consequence when it lapses.',
    qLabel: Q, quote: 'Licences and insurance live in a folder. Someone finds the expiry when an inspector asks for it.',
    changes: [
      { ic: icons.building, b: 'One vendor master.', t: 'PAN, GST, PF and ESIC codes, contractor licence, employee compensation policy, allowed sites, roles and rate cards. Uploaded by the vendor in their own login, checked by your team.' },
      { ic: icons.clock, b: 'Expiry with teeth.', t: 'Alerts at 60 and 30 days. A lapsed licence or policy holds new gate passes for that contractor until it is renewed.' },
      { ic: icons.check, b: 'Maker-checker on every document.', t: 'Nothing goes live on the vendor’s word. Every approval is on the audit trail.' },
    ],
    proof: { n: '3,000+', p: 'vendors on one rule engine at <b>Reliance</b>, each with documents, licences and expiry tracked this way.' },
    vis: vendorUI, wide: true,
    foot: 'Vendor master, expiry alerts and the deployment hold are live (SOW §5.1). Names and numbers are illustrative.',
  }),

  problemSlide({
    id: 'cm5', theme: 'light', title: 'Work orders', rail, step: 2, demo: 'Live · work order',
    kick: 'the work order and sanctioned headcount',
    h2: 'Nothing happens on site without a work order behind it, <em>and nobody is deployed above it.</em>',
    qLabel: Q, quote: 'Contractors send whoever they have. We learn the real headcount when the invoice arrives.',
    changes: [
      { ic: icons.doc, b: 'The order is the anchor.', t: 'Scope, plant, department, sanctioned headcount by skill grade, validity, rate card and billing terms. Pulled from your SAP purchase order where you have one.' },
      { ic: icons.shield, b: 'Sanction enforced at the gate.', t: 'Deployment above the order is flagged or blocked, your choice per site. Shortfalls that risk output show up on the same screen.' },
      { ic: icons.layers, b: 'Position codes and cost centres.', t: 'Each contract position carries a code, grade and cost centre, so cost lands on the right line in finance.' },
    ],
    proof: { n: '300K', p: 'contract workers at <b>Reliance</b> run on position codes and budgets as the governing master.' },
    vis: woUI, wide: true,
    foot: 'Work orders, sanctioned strength and position codes are live. A demand forecast from the production plan is pilot-built, not a shipped module. Numbers illustrative.',
  }),

  problemSlide({
    id: 'cm6', theme: 'dark', title: 'Licensed strength', rail, step: 2, demo: 'Live · licence ledger',
    kick: 'the contractor licence as a ceiling',
    h2: 'Deploy past a contractor’s licensed strength and <em>the gate stops it, not the inspector.</em>',
    qLabel: Q, quote: 'Nobody adds up headcount across work orders against the contractor’s licence until audit week.',
    changes: [
      { ic: icons.doc, b: 'The licence as a record.', t: 'Licensed strength, validity, issuing authority and state for every contractor. Deployment is measured against it all the time, across every work order.' },
      { ic: icons.lock, b: 'Block or flag.', t: 'A gate pass that would breach the licence is blocked at issue. You choose block or flag per site.' },
      { ic: icons.check, b: 'The register writes itself.', t: 'The register of contractors and the licence ledger are views on this data. Nothing is kept twice.' },
    ],
    proof: { n: 'BPCL', p: 'runs labour licence and compensation policy per contract, with gate passes auto-terminated on rules, wired into its SAP.' },
    vis: licenceMock,
    foot: 'Licence ledger and block-or-flag are live (SOW §5.3). Applicability thresholds and filing stay with you and your advisors. Numbers illustrative.',
  }),

  problemSlide({
    id: 'cm6b', theme: 'dark', title: 'Scorecard', rail, step: 1, demo: 'Live · scorecard',
    kick: 'Vendors · the contractor scorecard',
    h2: 'Every contractor scored green, orange or red each month, <em>on data, not on who complains loudest.</em>',
    qLabel: Q, quote: 'Contractor reviews are opinions collected once a year. Renewals go to the familiar name.',
    changes: [
      { ic: icons.chart, b: 'Performance from the system.', t: 'Attendance against the TO, attrition, fill time and statutory record, measured every month.' },
      { ic: icons.users, b: 'User score, DH approval.', t: 'Users rate the contractor; the domain head approves; HR adds the statutory score.' },
      { ic: icons.zap, b: 'AI picks the split.', t: 'For the next work order, a suggested allocation across the best-scoring contractors.' },
    ],
    proof: { n: '−80%', p: 'vendor non-compliance at <b>Reliance</b> once contractors were measured this way every month.' },
    vis: scoreUI, wide: true,
    foot: 'Scorecard and monthly report are live; user scoring with DH approval is configured; AI allocation is a pilot. Authored view; scores illustrative.',
  }),

  problemSlide({
    id: 'cm6c', theme: 'light', title: 'Hire', rail, step: 3, demo: 'Live · contractor hiring',
    kick: 'Hire · contractors source on the same platform',
    h2: 'Contractors hire on the same platform, <em>so every candidate arrives with the data already in place.</em>',
    qLabel: Q, quote: 'Contractors source on paper and WhatsApp. HR sees a name list the day before joining and retypes everything.',
    changes: [
      { ic: icons.doc, b: 'Openings from the work order.', t: 'Roles, lines, skill grades and numbers split across contractors by their scorecard grade.' },
      { ic: icons.search, b: 'Sourcing that measures itself.', t: 'QR links for walk-in drives at ITIs and villages, WhatsApp apply in Hindi, Marathi or Odia, screening questions and skill tests.' },
      { ic: icons.zap, b: 'Straight into onboarding.', t: 'Selected candidates move to onboarding with contractor, role, line and shift filled. You see each contractor’s funnel and time to fill.' },
    ],
    proof: { n: '−60%', p: 'hiring lead time across our enterprise clients when sourcing, verification and onboarding sit on one record.' },
    vis: hireMock, flip: true,
    foot: 'goBetter Hire is live (in production for store and sales hiring). The contractor portal is configured per client. Numbers illustrative.',
  }),

  problemSlide({
    id: 'cm6d', theme: 'light', title: 'Bulk onboarding', rail, step: 4, demo: 'Live · bulk upload',
    kick: 'Onboard · 1 of 2 · bulk onboarding for a whole batch',
    h2: 'Two hundred joiners onboarded from one file, <em>with every row checked before anyone reaches the gate.</em>',
    qLabel: Q, quote: 'Contractors send a spreadsheet and a folder of scans. The time office retypes it, and mistakes surface at payroll.',
    changes: [
      { ic: icons.layers, b: 'One template per contract type.', t: 'Contractor or HR uploads the batch: identity, UAN, bank, skill code, line, shift and documents, against the work order.' },
      { ic: icons.shield, b: 'Every row validated.', t: 'Aadhaar and PAN verified, UAN matched to the name, IFSC checked, age 18+, duplicates across contractors caught, sanctioned strength respected.' },
      { ic: icons.zap, b: 'Errors back in one file, the rest moves on.', t: 'Fixes go back to the contractor in a single sheet. Clean rows start background checks, face enrolment and passes in bulk.' },
    ],
    proof: { n: '300K', p: 'contract workers at <b>Reliance</b>, mobilised through bulk onboarding and sub-vendor capture at this scale.' },
    vis: bulkUI, wide: true,
    foot: 'Bulk onboarding with row-level validation and bulk initiation of checks is live. Authored view; names and numbers illustrative.',
  }),

  {
    id: 'cm7', theme: 'dark', title: 'Worker onboarding · WhatsApp',
    html: `
    <div class="tel">
      ${rail(4, 'Live · WhatsApp onboarding')}
      <div class="tel-head"><div><span class="kick">Onboard · 2 of 2 · or self-onboarding on WhatsApp, in their language</span><h2>Hired today, onboarded on WhatsApp by evening, <em>at the training centre the next morning.</em></h2></div></div>
      <div class="tel-body" style="grid-template-columns:minmax(0,.3fr) minmax(0,.7fr)">
        <div class="tel-say">
          <div class="blk"><div class="lbl">${Q}</div><div class="tq">Joiners queue at the time office with photocopies. Half the forms come back incomplete.</div></div>
          <div class="blk"><div class="lbl">What changes</div><ul>
            <li><span class="ic">${svg(icons.zap)}</span><span><b>The hire triggers it.</b> Offer, consent and details on WhatsApp, prefilled from hiring or the contractor.</span></li>
            <li><span class="ic">${svg(icons.lang)}</span><span><b>Their language.</b> Hindi, Marathi, Tamil or any of 35, switched at any step.</span></li>
            <li><span class="ic">${svg(icons.mic)}</span><span><b>Stuck? Our agent calls.</b> An AI voice agent walks them through the step.</span></li>
          </ul></div>
          <div class="proof"><div class="n">45 min</div><p>average onboarding at <b>Zepto</b> on this flow, documents to certificate.</p></div>
        </div>
        <div class="tel-vis">${waPhones(PL)}</div>
        <div class="foot">WhatsApp onboarding, Aadhaar OCR, UAN fetch, the calling agent and induction reels are live. Plant and worker are illustrative.</div>
      </div>
    </div>`,
  },

  problemSlide({
    id: 'cm8', theme: 'light', title: 'Background verification', rail, step: 5, demo: 'Live · verification',
    kick: 'the worker · background verification',
    h2: 'Verified once, by role, <em>and trusted at every site and every rehire.</em>',
    qLabel: Q, quote: 'Checks run on a spreadsheet with an agency. We cannot say who is cleared on any given day.',
    changes: [
      { ic: icons.shield, b: 'Six heads, packed by role.', t: 'Identity with face match and liveness, address, career and UAN history, financial, health, and legal: court, criminal and police. A gate worker and a crane operator carry different packs.' },
      { ic: icons.chart, b: 'A portfolio, not a pile.', t: 'Bulk initiation per batch, red, amber, green across the workforce, dated per check, a case report you can download.' },
      { ic: icons.repeat, b: 'Rehire reuses it.', t: 'A returning worker draws on his verified record. No second verification for the same facts.' },
    ],
    proof: { n: '<24 h', p: 'turnaround target for a digital case. Identity checks return in minutes. 25M+ verified profiles behind it.' },
    vis: verifyUI, wide: true,
    foot: 'Verification is live: identity, employment, address, legal and health checks by role. Authored view; names illustrative.',
  }),

  problemSlide({
    id: 'cm9', theme: 'dark', title: 'Gate pass and induction', rail, step: 6, demo: 'Live · gate pass',
    kick: 'gate pass, safety induction and access',
    h2: 'The gate pass opens <em>only when everything behind it is true,</em> and closes when any of it stops being true.',
    qLabel: Q, quote: 'Induction is a signature on a register. Badges never expire.',
    changes: [
      { ic: icons.check, b: 'Five conditions, checked together.', t: 'Work order inside strength, contractor licence inside strength, identity and background check, compensation cover current, induction certificate valid. Miss one and no pass is issued.' },
      { ic: icons.lang, b: 'Induction in his language, with a test.', t: 'SOP video, a short test and a photo PPE check on his phone, before he reaches the floor. The certificate is dated and has an expiry.' },
      { ic: icons.clock, b: 'Expiry is automatic.', t: 'Passes, certificates and cover carry dates. Advance alerts, then access withdrawn. If you allow it, a pass opens provisionally while address and court checks finish, and closes if they fail.' },
    ],
    proof: { n: '30 days', p: 'without a punch and a pass lapses at <b>BPCL</b>, where pass issue, renewal and termination run on rules.' },
    vis: gateMock,
    foot: 'Conditional gate pass and the induction agent are live. Names and numbers illustrative.',
  }),

  problemSlide({
    id: 'cm10', theme: 'light', title: 'Attendance · capture', rail, step: 7, demo: 'Live · headcount',
    kick: 'attendance · 1 of 4 · capture down to the line',
    h2: 'Know who is inside the plant, on which line, <em>right now, not at the end of the shift.</em>',
    qLabel: Q, quote: 'We know who crossed the gate. Who reached the line, and how many are inside right now, is a guess.',
    changes: [
      { ic: icons.cam, b: 'Face at fixed devices, geo-face elsewhere.', t: 'Your face and biometric terminals integrated at gates and line kiosks. Geotagged face with liveness on a phone for field and outstation staff. A photo held to the camera does not count.' },
      { ic: icons.map, b: 'Gate, line and canteen punches.', t: 'Each punch point is a zone in the plant hierarchy, so you see how many are active in each area as people go in and out.' },
      { ic: icons.users, b: 'A live count inside the gate.', t: 'Contract, on-roll and visitors, at any moment, for safety and audit. Devices work offline and sync when the network returns.' },
    ],
    proof: { n: 'BPCL', p: 'knows the count of people inside its refinery gates at any moment from these punches. <b>Zepto</b> runs the same engine across 967 sites.' },
    vis: headcountMock(PL),
    foot: 'Face and geo capture, device integration and live headcount are live. Line kiosks are configured per plant. Numbers illustrative.',
  }),

  problemSlide({
    id: 'cm10b', theme: 'light', title: 'Attendance · rules', rail, step: 7, demo: 'Live · policy engine',
    kick: 'attendance · 2 of 4 · labour-law rules the roster cannot break',
    h2: 'Set the labour-law rules once. <em>The roster never breaks them, and you hear the moment reality does.</em>',
    qLabel: Q, quote: 'Hour limits live in a policy document. The roster is built in a spreadsheet that has never read it.',
    changes: [
      { ic: icons.layers, b: 'Rules as settings, per state and plant.', t: 'Daily and weekly hour limits, a rest day in seven, overtime consent and the quarterly cap, night-shift conditions, any customer code you answer to.' },
      { ic: icons.lock, b: 'The roster refuses a breach.', t: 'A shift that would cross a limit cannot be published. The planner sees which rule and which workers.' },
      { ic: icons.warn, b: 'Reality checked against the rules.', t: 'When punches cross 48 hours, overtime runs without consent or a rest day is missed, the supervisor gets an alert the same hour. Overrides need a named role, a reason and an expiry.' },
    ],
    proof: { n: '7×', p: 'faster rule changes at <b>Reliance</b> than the systems it replaced, across 300K workers on this rules engine.' },
    vis: rulesUI(PL),
    foot: 'Policy engine, roster validation and alerts are live. Authored view of the rule-set screen; values follow your state rules.',
  }),

  problemSlide({
    id: 'cm11', theme: 'dark', title: 'Attendance · auto roster', rail, step: 7, demo: 'Live · auto roster',
    kick: 'attendance · 3 of 4 · intelligent rostering',
    h2: 'Give us demand and the rules. <em>We build the roster, and rebuild it when a line stops or a festival hits.</em>',
    qLabel: Q, quote: 'Contractors roster in Excel. We see the names after the shift has started, and absences are fixed by phone.',
    changes: [
      { ic: icons.clock, b: 'Any pattern the law allows.', t: 'Three 8-hour shifts, 12-hour patterns where the state allows them with consent, 5- or 6-day weeks, a weekly off that rotates per person.' },
      { ic: icons.repeat, b: 'Rebuilt on the day.', t: 'Absences filled only with operators certified on those stations. Shutdowns move crews or send them to paid training. Festivals planned two weeks out.' },
      { ic: icons.layers, b: 'No scheduling tool in between.', t: 'Roster, attendance, overtime and pay on one record. Contractors fill against the work order in the portal or by Excel upload.' },
    ],
    proof: { n: 'Minutes', p: 'for shortfall management at <b>Reliance Retail</b> on this roster engine, down from hours. Rostering and backfill agents are live.' },
    vis: rosterUI(PL), wide: true,
    foot: 'Roster, patterns and the rostering agent are live; plan-driven building is configured in the pilot. Authored view, names illustrative.',
  }),

  problemSlide({
    id: 'cm11b', theme: 'light', title: 'Attendance · leave, holidays, roles', rail, step: 7, demo: 'Live · leave and holidays',
    kick: 'attendance · 4 of 4 · leave, holidays, roles and certifications',
    h2: 'Every rule knows who it applies to, <em>because leave, holidays, roles and certifications live on one record.</em>',
    qLabel: Q, quote: 'Leave sits in one system, holidays in a circular, roles in a spreadsheet. The roster and payroll see none of them.',
    changes: [
      { ic: icons.check, b: 'Leave for the contract workforce.', t: 'Policies and balances per contractor and role, applied and approved on the phone. On-roll leave can stay in your HR system and sync.' },
      { ic: icons.map, b: 'Holidays by state and site.', t: 'National, state and optional holidays, each applied to the right plants, with the right pay rate for anyone who works one.' },
      { ic: icons.user, b: 'Roles and station certifications.', t: 'Designation, skill grade, default line and station, OJT sign-off and licences with expiry. The roster will not place an uncertified or expired operator.' },
    ],
    proof: { n: '18,026', p: 'face-registered workers in a single client organisation on this attendance record, with roles, sites and leave attached.' },
    vis: leaveMock(PL),
    foot: 'Leave, holiday, shift and role configuration are live. Names illustrative.',
  }),

  {
    id: 'cm12', theme: 'dark', title: 'The worker app',
    html: `
    <div class="tel">
      ${rail(7, 'Live · worker app')}
      <div class="tel-head"><div><span class="kick">what the worker sees</span><h2>He sees his own hours, pay and corrections, <em>so disputes end on his phone, not at your gate.</em></h2></div></div>
      <div class="tel-body">
        <div class="tel-say">
          <div class="blk"><div class="lbl">${Q}</div><div class="tq">Workers queue at the time office every month to ask about days and deductions.</div></div>
          <div class="blk"><div class="lbl">What changes</div><ul>
            <li><span class="ic">${svg(icons.clock)}</span><span><b>A calendar of his own hours.</b> In and out times, half days, leave, overtime and week offs, in his language.</span></li>
            <li><span class="ic">${svg(icons.card)}</span><span><b>Pay he can read.</b> Monthly summary with earnings, present days and overtime, and the payslip by month.</span></li>
            <li><span class="ic">${svg(icons.check)}</span><span><b>Corrections with a reason.</b> Regularisation from the phone, with a reason from a fixed list, sent to his manager and kept on the trail.</span></li>
          </ul></div>
          <div class="proof"><div class="n">35</div><p>languages out of the box. Induction, training and grievance status live in the same app.</p></div>
        </div>
        <div class="tel-vis"><div class="tm-fan">
          <div class="ph"><img src="assets/product/clms/app-daily-attendance-log-pending-approval.png" alt="Attendance log"/><em>Attendance log</em></div>
          <div class="ph"><img src="assets/product/clms/app-monthly-attendance-summary.png" alt="Monthly summary with earnings"/><em>Monthly summary</em></div>
          <div class="ph"><img src="assets/product/clms/app-regularisation-final-review.png" alt="Regularisation review"/><em>Regularisation</em></div>
          <div class="chipf" style="left:2%;top:18%;animation-delay:0s,.8s"><b>₹24,935</b>earnings this month</div>
          <div class="chipf" style="right:0;top:34%;animation-delay:1.5s,1s"><b>4 of 8</b>regularisations left</div>
        </div></div>
        <div class="foot">Screens from the production app designs. Grievance is raise-and-track today, not full case management.</div>
      </div>
    </div>`,
  },

  problemSlide({
    id: 'cm13', theme: 'light', title: 'Overtime', rail, step: 8, demo: 'Live · OT register',
    kick: 'overtime',
    h2: 'Overtime computed from punches, consented, capped, <em>and paid at twice the rate.</em>',
    qLabel: Q, quote: 'OT is claimed on a slip, approved after it is worked and paid at the single rate.',
    changes: [
      { ic: icons.clock, b: 'Computed, not claimed.', t: 'Hours beyond the shift compute from attendance. No punch record, no overtime.' },
      { ic: icons.check, b: 'Consent and approval first.', t: 'The worker’s consent and the supervisor’s pre-approval are switches. Approvers clear it on mobile, then the hours count.' },
      { ic: icons.shield, b: 'Caps that warn, then stop.', t: 'Weekly, monthly and quarterly caps by organisation and site. Alerts near the cap, blocks at it. Paid at the statutory multiple; the register names who, how long and who approved.' },
    ],
    proof: { n: '0 h', p: 'of overtime paid without a punch record. That rule runs in the attendance engine today.' },
    vis: otMock,
    foot: 'Said early: overtime is measured in hours and normalised to days for computation; true hourly payroll is not supported today. The 75-hour quarterly cap is an example; caps follow your state rules.',
  }),

  problemSlide({
    id: 'cm14', theme: 'light', title: 'Wages and minimum wage', rail, step: 9, demo: 'Live · pay run',
    kick: 'wages',
    h2: 'Wages computed from verified attendance, <em>with the minimum wage checked before anyone is paid.</em>',
    qLabel: Q, quote: 'The contractor’s wage sheet is the only record of what the workers were actually paid.',
    changes: [
      { ic: icons.clock, b: 'Payroll from attendance.', t: 'Present days, overtime and leave flow in from verified punches. No manual days, no retyped hours.' },
      { ic: icons.shield, b: 'Minimum wage at entry.', t: 'Validated per state and skill grade when the salary structure is set. A basic below the floor is refused, not corrected after an inspection.' },
      { ic: icons.layers, b: 'Statutory behaviour on every component.', t: 'One-time bonuses and variables carry PF, ESI, PT and OT applicability on the component itself. Salary structures are effective-dated.' },
    ],
    proof: { n: '−90%', p: 'payroll leakage at <b>Reliance</b>, measured across 300K+ workers once pay ran from verified attendance.' },
    vis: `<div style="position:relative">${shot('assets/product/clms/wage-guardrail.jpg', 'goBetter · Payroll · salary structure · validation', 'Production design', { h: '160px', pos: 'left 78%' })}<div class="tm-callout" style="right:24px;top:64px;--d:.7s;--ax:24px"><b>Below the floor</b>Basic of ₹5,999 is refused. The floor is set per state and skill grade.</div></div>${payrunMock}`,
    foot: 'Payroll and minimum-wage validation are live. Pay-run screen is an authored view; numbers illustrative.',
  }),

  problemSlide({
    id: 'cm15', theme: 'darker', title: 'Challan reconciliation', rail, step: 9, demo: 'Live · challan OCR',
    kick: 'the contractor’s PF and ESI challans',
    h2: 'A challan upload is not compliance. <em>Matching it to every worker is.</em>',
    qLabel: Q, quote: 'PF challans arrive as PDFs in email. Nobody checks them against the workers we paid for.',
    changes: [
      { ic: icons.doc, b: 'Challans read by OCR.', t: 'The contractor uploads. UANs, amounts and the wage month are extracted and compared with computed dues for each named worker.' },
      { ic: icons.warn, b: 'Gaps in the same cycle.', t: 'Short payment, non-payment, wrong UAN and late deposit flagged while the bill is still with you, with a dated notice to the contractor.' },
      { ic: icons.shield, b: 'Your decision, documented.', t: 'Release can wait on reconciliation if you set it so. The wage and PF liability falls back to you if the contractor defaults, so the rule sits in front of whoever decides.' },
    ],
    proof: { n: '−80%', p: 'vendor non-compliance risk at <b>Reliance</b>. Clients name challan matching among the features they use most.' },
    vis: `<div class="ui">
      ${side(5)}
      <div class="ui-main">
        ${top('Sahyadri Auto / Payroll / Compliances / <b>PF and ESI · September</b>', 'Challan reconciliation · Shree Manpower')}
        <div class="hv-up"><span class="doc"></span><div><b>PF ECR challan · TRRN 2610…4418 · uploaded by vendor 05 Oct</b><small>OCR read 182 UANs, amounts and wage month · ESI challan read: 182 IP numbers</small></div><span class="hv-s g">OCR read</span></div>
        <div class="hv-comp" style="margin-bottom:0">
          <div class="c"><b>Workers billed</b><span class="n">186</span><small>from verified attendance</small></div>
          <div class="c"><b>PF matched</b><span class="n">180</span><small>dues = deposit</small><em class="g">On time</em></div>
          <div class="c"><b>PF gaps</b><span class="n">6</span><small>4 not paid · 2 short</small><em class="r">₹8,600</em></div>
          <div class="c"><b>ESI gaps</b><span class="n">2</span><small>wrong IP number</small><em class="y">Review</em></div>
        </div>
        <div class="hv-price" style="grid-template-columns:1.1fr 1fr .8fr .8fr 1fr">
          <div class="h">Worker</div><div class="h">UAN</div><div class="h">PF due</div><div class="h">PF paid</div><div class="h">Status</div>
          <div><b>Suresh R.</b></div><div>1009…2231</div><div>₹1,800</div><div>₹1,800</div><div><span class="hv-d g">Match</span></div>
          <div><b>Vignesh G.</b></div><div>1014…0912</div><div>₹1,800</div><div>₹0</div><div><span class="hv-d r">Not paid</span></div>
          <div><b>Dinesh S.</b></div><div>1012…3305</div><div>₹1,800</div><div>₹1,100</div><div><span class="hv-d r">Short ₹700</span></div>
        </div>
        <div class="hv-ai" style="background:#fef2f2;border-color:#fecaca"><b style="color:#b91c1c">Flag raised to your HR.</b> Vendor notified · scorecard updated · bill held until cleared.</div>
      </div>
    </div>`, wide: true,
    foot: 'The OCR-and-match flow is live. The statutory reconciliation AI agent is in Beta. Numbers illustrative.',
  }),

  problemSlide({
    id: 'cm16', theme: 'light', title: 'Invoice check', rail, step: 10, demo: 'Live · invoice check',
    kick: 'vendor billing',
    h2: 'You pay for shifts that happened, at the rate on the order, <em>after the challans match.</em>',
    qLabel: Q, quote: 'Invoices are checked against the contractor’s own timesheet, by hand, once a month.',
    changes: [
      { ic: icons.card, b: 'Every line against a punch.', t: 'Invoiced shifts compared with gate-verified shifts. Billed-but-absent days held before they are paid.' },
      { ic: icons.doc, b: 'Every rate against the order.', t: 'Skill grade billed against grade deployed. Shifts above sanction routed for review.' },
      { ic: icons.plug, b: 'Payment stays in your SAP.', t: 'CLMS passes the verified quantities and holds; your finance team releases from SAP as today.' },
    ],
    proof: { n: 'BPCL', p: 'keeps vendors, contracts and work orders in its SAP, locked on our side, so billing and gate logic share one master.' },
    vis: invoiceMock, flip: true,
    foot: 'Invoice reconciliation is live (SOW §13). Numbers illustrative.',
  }),

  problemSlide({
    id: 'cm17', theme: 'light', title: 'Registers and returns', rail, step: 10, demo: 'Live · registers',
    kick: 'registers, returns and the audit trail',
    h2: 'Registers, returns and audit packs come out of the record. <em>Nobody compiles them.</em>',
    qLabel: Q, quote: 'Audit preparation is three to four weeks of chasing contractors for registers that never agree.',
    changes: [
      { ic: icons.doc, b: 'Views on live data.', t: 'Register of contractors, workers per contractor, muster roll, wage register, overtime register, wage slips and the annual return. Nothing kept twice.' },
      { ic: icons.check, b: 'Signed by the contractor.', t: 'Registers are generated, then authenticated by each contractor in the portal. Pending sign-offs are chased automatically.' },
      { ic: icons.eye, b: 'Every edit on the trail.', t: 'Who changed what, when, old and new value, inside a backdating window you set. Exportable for the auditor.' },
    ],
    proof: { n: '300K+', p: 'contract workers and 3,000+ vendors at <b>Reliance</b> on the same registers and audit trail.' },
    vis: regMock,
    foot: 'Registers and the audit trail are live. Formats follow your state rules; we configure, you and your advisors confirm interpretation.',
  }),

  problemSlide({
    id: 'cm8b', theme: 'dark', title: 'Training', rail, step: 11, demo: 'Live · skillBetter',
    kick: 'Training · induction and safety refreshers on the worker\u2019s phone',
    h2: 'Induction and refreshers on every worker\u2019s phone, <em>with proof of who passed.</em>',
    qLabel: Q, quote: 'Induction is a signed self-declaration and refresher attendance is a scanned sheet. Nobody can say who is due.',
    changes: [
      { ic: icons.play, b: 'Short courses in their language.', t: 'Induction, safety, height and forklift refreshers as bite-sized videos with a test, in 35 languages, offline too.' },
      { ic: icons.check, b: 'Proof, not paper.', t: 'Self-declaration signed in the app, test scores and certificates dated per worker. Refreshers pushed before they lapse.' },
      { ic: icons.lock, b: 'Linked to the pass.', t: 'A lapsed mandatory course can hold the gate pass or the work permit. The dashboard shows who is due, by contractor.' },
    ],
    proof: { n: '88%', p: 'course completion across our clients, against about 25% in the industry. <b>Hindalco</b> tripled shop-floor training coverage on skillBetter.' },
    vis: `<div class="tm-fan">
      <div class="ph"><img src="assets/product/figma/skilling/mobile-learning-home-new-feed.png" alt="Learning home"/><em>Learning home</em></div>
      <div class="ph"><img src="assets/product/figma/skilling/skillbetter-mobile-course-overview-chapter-states.png" alt="Factory operations course"/><em>Mandatory course</em></div>
      <div class="ph"><img src="assets/product/figma/skilling/skillbetter-mobile-offline-downloads-sheet.png" alt="Offline downloads"/><em>Works offline</em></div>
      <div class="chipf" style="left:0;top:16%;animation-delay:0s,.8s"><b>212</b>refreshers due this month</div>
      <div class="chipf" style="right:0;top:40%;animation-delay:1.5s,1s"><b>9 / 10</b>safety test passed</div>
    </div>`,
    foot: 'skillBetter LMS is live (production app screens). Linking course status to gate passes and permits is configured per client.',
  }),

  problemSlide({
    id: 'cm18', theme: 'dark', title: 'Intelligence', demo: 'Live · analytics',
    kick: 'Above the steps · intelligence',
    h2: 'Plant, contractor and shift in one view, <em>near real time, drilled to a single worker.</em>',
    qLabel: Q, quote: 'A simple headcount question takes a week of emails between plants and contractors.',
    changes: [
      { ic: icons.chart, b: 'The numbers that run the floor.', t: 'Deployed against sanctioned, absenteeism, workers near the OT cap, shortfall by site, contractor gaps. Filter by state, plant, contractor and shift.' },
      { ic: icons.layers, b: 'Contractor scorecards.', t: 'Fill rate, no-shows and compliance per contractor. The renewal conversation becomes a ranked list.' },
      { ic: icons.plug, b: 'Your BI if you prefer.', t: 'Dashboards embedded in the platform, or the same data to your warehouse by API every day.' },
    ],
    proof: { n: '7×', p: 'faster customisation of rules and reports at <b>Reliance</b> than the systems it replaced.' },
    vis: biMock, wide: true,
    foot: 'Embedded dashboards are live (Amazon QuickSight, hosted in India) and refresh on a processing cycle; metrics that must be strictly live sit on operational screens. Values illustrative.',
  }),

  plainSlide('cm19', 'dark', 'Integrations and AI',
    'How it connects · and where AI agents help',
    'Sits on your SAP, your gates and your payroll. <em>Agents do the checking that never scales by hand.</em>',
    `<div class="tel-body" style="grid-template-columns:minmax(0,.55fr) minmax(0,.45fr);align-items:center">
      <div class="tel-vis">${archMock}</div>
      <div>
        <div class="tel-agents" style="grid-template-columns:1fr 1fr">
          <div class="ag2" style="--d:.2s"><h4>Rostering and backfill <span class="st2 live">Live</span></h4><p>Fills short cells from contractors and standby pools.</p></div>
          <div class="ag2" style="--d:.28s"><h4>Induction <span class="st2 live">Live</span></h4><p>Your SOP as a deterministic flow with a test and photo proof.</p></div>
          <div class="ag2" style="--d:.36s"><h4>Worker support <span class="st2 live">Live</span></h4><p>Answers pay, leave and attendance questions in his language.</p></div>
          <div class="ag2" style="--d:.44s"><h4>Notification and calling <span class="st2 live">Live</span></h4><p>Reminders, no-show calls and expiry chases.</p></div>
          <div class="ag2" style="--d:.52s"><h4>Statutory reconciliation <span class="st2 beta">Beta</span></h4><p>Works the challan exceptions the OCR flow raises.</p></div>
          <div class="ag2" style="--d:.6s"><h4>Verification <span class="st2 beta">Beta</span></h4><p>Chases missing documents and pre-checks packs.</p></div>
        </div>
        <div class="foot" style="margin-top:12px">Agents run on our infrastructure in India on open models, with PII masking and every action on the audit log.</div>
      </div>
    </div>`, { demo: 'Live · integrations' }),

  plainSlide('cm20', 'light', 'Where the data lives',
    'Security · for InfoSec and Legal, before the pilot, not after',
    'Aadhaar, faces and wages for every contract worker. <em>What we can state today, and what the security pack covers.</em>',
    `<div class="tel-sec">
      <div class="col">
        <div class="lbl">What we can state today</div>
        <div class="row"><b>ISO 27001 · SOC 2 · DPDPA-aligned</b><span>Certificates, the SOC 2 report and a draft data processing agreement go to your InfoSec and Legal teams with the pack.</span></div>
        <div class="row"><b>Hosted in India</b><span>Worker data, face data and documents stay in Indian regions.</span></div>
        <div class="row"><b>Face used for matching, not sharing</b><span>Face data verifies the punch. Liveness stops a photo at the device. Access to images is role-gated and logged.</span></div>
        <div class="row"><b>Role-based access by plant and contractor</b><span>Each contractor sees only its own workers. Plant HR sees the plant. Every edit is on an audit log you can export.</span></div>
        <div class="row"><b>Consent in his language, revocable</b><span>Purpose-specific notices for identity, face and attendance data, stored with the record, with a withdrawal path.</span></div>
      </div>
      <div class="col pack">
        <div class="lbl">What the security pack covers · for review before week 1</div>
        <div class="row"><b>Architecture and tenant isolation</b><span>How your data is separated from other clients, and contractors from each other.</span></div>
        <div class="row"><b>Encryption and key management</b><span>In transit and at rest, who holds keys, how gate devices talk to the cloud over mobile data.</span></div>
        <div class="row"><b>Biometric storage, retention, deletion</b><span>What is stored for a face, for how long, and how deletion on exit is evidenced against register-retention duties.</span></div>
        <div class="row"><b>DPDPA roles and sub-processors</b><span>Fiduciary and processor split between you, each contractor and BetterPlace, in writing.</span></div>
        <div class="row"><b>Liability, exit and portability</b><span>Who carries what when a computed hour is wrong, export formats, and the deletion certificate if you stop.</span></div>
      </div>
    </div>`),

  plainSlide('cm21', 'dark', 'What is live',
    'The honest table · what runs today, what we configure, what we do not do',
    'Most of the lifecycle runs at clients today. <em>Here is exactly what runs, and what does not.</em>',
    `<div class="tel-status tight">
      <div class="h"></div><div class="h">Capability</div><div class="h">Where it runs today</div><div class="h">Status</div>
      <div class="r" style="--d:.05s"><i>·</i><b>Vendor master and expiry</b><span>Documents, maker-checker, alerts, deployment hold. Reliance, BPCL.</span><em class="live">Live</em></div>
      <div class="r" style="--d:.1s"><i>·</i><b>Work orders and licensed strength</b><span>Sanctioned headcount, position codes, block or flag. Reliance, BPCL.</span><em class="live">Live</em></div>
      <div class="r" style="--d:.12s"><i>·</i><b>Contractor hiring</b><span>Openings from the work order, QR and WhatsApp sourcing, screening, pipeline.</span><em class="live">Live</em></div>
      <div class="r" style="--d:.15s"><i>·</i><b>Onboarding and verification</b><span>WhatsApp onboarding, eKYC, background checks by role, rehire reuse.</span><em class="live">Live</em></div>
      <div class="r" style="--d:.18s"><i>·</i><b>Training on the LMS</b><span>skillBetter: induction and refreshers in 35 languages, tests, certificates.</span><em class="live">Live</em></div>
      <div class="r" style="--d:.2s"><i>·</i><b>Gate pass and induction</b><span>Five-condition pass, expiry, induction agent with test and photo.</span><em class="live">Live</em></div>
      <div class="r" style="--d:.25s"><i>·</i><b>Attendance, roster, worker app</b><span>Face, geo, gate terminals, approvals queue, policy engine. Zepto 967 sites.</span><em class="live">Live</em></div>
      <div class="r" style="--d:.3s"><i>·</i><b>Overtime</b><span>Computed from punches, caps, approvals, register. Worker-consent field configured per client.</span><em class="live">Live · consent configured</em></div>
      <div class="r" style="--d:.35s"><i>·</i><b>Wages and challan reconciliation</b><span>Payroll from attendance, minimum wage at entry, challan OCR and match. Reconciliation agent in Beta.</span><em class="mix">Live · agent Beta</em></div>
      <div class="r" style="--d:.4s"><i>·</i><b>Invoice check and registers</b><span>Invoice against verified shifts and rate card, registers, audit trail.</span><em class="live">Live</em></div>
      <div class="r" style="--d:.45s"><i>·</i><b>Demand forecast from the production plan</b><span>Built and measured in a pilot at a PSU oil major. Not a shipped module.</span><em class="pilot">Pilot-built</em></div>
      <div class="r" style="--d:.55s"><i>·</i><b>True hourly payroll</b><span>Overtime is measured in hours and normalised to days. Hourly pay models are scoped in design.</span><em class="no">Not supported</em></div>
    </div>`),

  plainSlide('cm23', 'darker', 'How this starts',
    'How this starts · one plant, then your schedule',
    'One plant in four to five months, <em>and a number you can take to your board.</em>',
    `<div>
      <div class="tel-phase4">
        <div class="ph4" style="--d:.15s"><div class="w">01 · 3 to 4 weeks</div><h4>Design</h4><p>Your org model, sites, vendors, work orders and state rule sets, configured to your interpretation of the rules.</p><div class="who">Joint</div></div>
        <div class="ph4" style="--d:.3s"><div class="w">02 · 4 to 6 weeks</div><h4>Build</h4><p>SAP or ERP master and posting integration, devices at the gates you choose, SSO, API and webhooks.</p><div class="who">BetterPlace</div></div>
        <div class="ph4" style="--d:.45s"><div class="w">03 · 6 to 8 weeks</div><h4>Pilot one plant</h4><p>Five-condition gate pass, attendance and overtime live, contractor challans reconciled worker by worker for a full cycle.</p><div class="who">Measured</div></div>
        <div class="ph4" style="--d:.6s"><div class="w">04 · your schedule</div><h4>Roll out</h4><p>Payroll, billing, leave and training in phase 2. AI agents in phase 3, on our infrastructure in India.</p><div class="who">Staged</div></div>
      </div>
      <div class="tel-close" style="margin-top:16px;grid-template-columns:1.2fr .8fr">
        <div class="tel-band ghost" style="margin:0;grid-template-columns:auto 1fr"><span class="bl">Commercials and exit</span><p>Software priced per active worker per month. Devices itemised separately, with ownership agreed before build. Pilot scope fixed in writing. If you stop after the pilot: full export in open formats and a deletion certificate. Durations are indicative and confirmed at initiation.</p></div>
        <div class="tel-contact"><div class="nm">Anuj Saxena</div><div class="rl">Director, Product · BetterPlace</div><a href="mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent('goBetter CLMS · one-plant pilot')}">anuj.saxena@betterplace.co.in</a></div>
      </div>
    </div>`, { glow: true }),
]

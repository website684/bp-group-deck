import type { SlideDef } from '../lib/types'
import { icons } from './html'
import { svg, makeRail, bar, row, problemSlide, plainSlide, coverRing } from './story-kit'
import { type PlantCfg, rosterUI, rulesUI, headcountMock, waPhones } from './attend-kit'

// Hyundai Motor India (HMIL) · CLMS demo deck (Oct 2026). Built from HMIL's requirement workbook
// (contract types, activity flows, onboarding forms, live dashboard list) in our own words.
// Order requested by Anuj: vendor management first (vendors, work orders, onboarding, gate pass,
// scorecard), then attendance, shifts, overtime and billing, statutory, dashboard; modules not in
// the requirement (hire, WhatsApp self-onboarding, absence and attrition prediction) at the end.
// Status honesty as in the Tata deck: approval chains and HMIL-specific forms are configured on the
// workflow builder; nothing is called live that is not. Numbers and names are illustrative.

const AREAS = ['Vendors', 'Work orders', 'Onboard', 'Passes', 'Scorecard', 'Attend', 'Shifts', 'OT & billing', 'Statutory', 'Dashboard']
const rail = makeRail(AREAS, [6, 9], false)
const P = 'The problem'

const HM: PlantCfg = {
  org: 'Hyundai Motor India', orgInitials: 'HM', site: 'Chennai plant', gate: 'Gate 2',
  lineA: 'Body shop B', lineB: 'Paint shop', lineC: 'Trim line', floatPool: 'float pool',
  zones: [
    { n: 'Gate 2 · shift change', s: '6 devices · A in, C out · cleared in 24 min', c: '188', d: 'queued', dc: 'in' },
    { n: 'Body shop', s: 'card and biometric swipes', c: '2,140', d: '97% of plan', dc: 'in' },
    { n: 'Paint shop', s: 'card swipes', c: '1,260', d: '94%', dc: 'out' },
    { n: 'Trim and final', s: 'PDA scanners', c: '2,480', d: '98%', dc: 'in' },
    { n: 'Material and port', s: 'PDA scanners', c: '910', d: '99%', dc: 'in' },
  ],
  inside: 7420, insideSub: 'A shift in 6,790 · C shift still exiting 540 · visitors 90',
  workers: [
    { i: 'KM', n: 'Karthik M.', id: 'CL-30417', meta: 'Skilled · Body shop B' },
    { i: 'SR', n: 'Suresh R.', id: 'CL-30588', meta: 'Semi-skilled · Body shop B' },
    { i: 'PA', n: 'Prakash A.', id: 'CL-29902', meta: 'Skilled · night shift' },
    { i: 'VG', n: 'Vignesh G.', id: 'CL-30133', meta: 'Forklift licence · Body B' },
    { i: 'DS', n: 'Dinesh S.', id: 'CL-30711', meta: 'Semi-skilled · Body shop B' },
    { i: 'AK', n: 'Arun K.', id: 'CL-30056', meta: 'Skilled · Body shop B' },
  ],
  contractors: ['Sri Sakthi', 'Ganesh', 'Velan'],
  ruleSetName: 'Rule set · Chennai plant',
  rules: [
    { k: 'Maximum hours per day', v: '9', u: 'h', law: 'OSH Code · state' },
    { k: 'Maximum ordinary hours per week', v: '48', u: 'h', law: 'OSH Code' },
    { k: 'Weekly rest · Sunday work needs a permit', v: '1 in 7', u: 'days', law: 'OSH Code · HMIL' },
    { k: 'Overtime at 2×, with worker consent', v: 'On', u: '', law: 'OSH Code · Wages' },
    { k: 'OT approved inside the billing cycle', v: 'On', u: '', law: 'HMIL rule' },
  ],
  holidays: [{ n: 'Pongal', d: '14–15 Jan', w: 'Tamil Nadu sites', c: 'TN' }, { n: 'Gudi Padwa', d: '19 Mar', w: 'Maharashtra sites', c: 'MH' }, { n: 'Diwali', d: '8 Nov', w: 'all India', c: 'All' }],
  roleTitle: 'Body shop operator · skilled', roleMeta: 'Height, confined space, forklift permits',
  persona: { first: 'Karthik', full: 'Karthik Murugan', initials: 'KM', role: 'Body Shop Operator (skilled), A shift', city: 'Sriperumbudur', phone: '98xxxx4410' },
  lang: {
    label: 'தமிழ்',
    greet: 'வணக்கம் கார்த்திக், நான் மியா. ஹூண்டாய் மோட்டார் இந்தியா, சென்னை ஆலையில் உங்கள் சேர்க்கையை நான் கவனித்துக்கொள்கிறேன்.',
    accept: 'ஏற்கிறேன்', consent: 'உங்கள் சேர்க்கையை முடிக்க சில விவரங்களைச் சேகரிக்க உங்கள் ஒப்புதல் தேவை.', agree: 'ஒப்புக்கொள்கிறேன்',
    upload: 'உங்கள் ஆதார் அட்டையைப் பதிவேற்றவும்.', verified: 'ஆதார் சரிபார்க்கப்பட்டது',
  },
  joinMsg: 'Documents complete. Your <b>medical at the OHC is tomorrow, 08:00, Gate 2</b>. Safety and HR approvals follow; your pass is issued at security.',
  reel3: 'Safety at the plant', quiz: ['Before height work you need…', 'A height permit and harness'],
  access: [['OHC and training', 'Day 1'], ['Canteen', 'Day 1'], ['Body shop B', 'After all approvals', '#FF9518']],
  week: 'Oct 13 – Oct 19, 2026', days: [['Mon', 'Oct 13'], ['Tue', 'Oct 14'], ['Wed', 'Oct 15'], ['Thu', 'Oct 16'], ['Fri', 'Oct 17'], ['Sat', 'Oct 18'], ['Sun', 'Oct 19']], todayIdx: 2,
}

const side = (on: number) => `<div class="ui-side"><span class="lg"></span>${[0, 1, 2, 3, 4, 5].map((i) => `<i class="${i === on ? 'on' : ''}${i === 0 || i === 5 ? ' r' : ''}"></i>`).join('')}</div>`
const top = (crumb: string, title: string) => `<div class="ui-top"><div><div class="ui-crumb">${crumb}</div><div class="ui-title">${title}</div></div><div class="ui-org"><span>HM</span>Hyundai Motor India</div></div>`

/* ---------- vendor master (authored product UI) ---------- */
const vendorUI = `
<div class="ui">
  ${side(1)}
  <div class="ui-main">
    ${top('Hyundai Motor India / CLMS / <b>Vendors</b>', 'Vendor master · every plant and site across India')}
    <div class="ui-bar"><span class="ui-box">64 vendors</span><span class="ui-box">Type: All 9</span><span class="ui-box">Location: All India</span><span class="ui-sp"></span><span class="ui-btn">Bulk upload</span><span class="ui-btn pri">+ Add vendor</span></div>
    <div class="hv-tbl">
      <div class="h">Vendor</div><div class="h">Contract type</div><div class="h">Documents</div><div class="h">Workers · licence</div><div class="h">Login</div>
      <div><b>Sri Sakthi Services</b><small>Chennai plant · since 2019</small></div><div><span class="hv-t m">Manpower</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d g">WC</span><span class="hv-d g">Licence</span></div><div>412 / 500</div><div><span class="hv-s g">Active</span></div>
      <div><b>Ganesh Logistics</b><small>Ennore port · logistics</small></div><div><span class="hv-t j">Job · attendance</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d y">WC 19 d</span><span class="hv-d g">Licence</span></div><div>186 / 200</div><div><span class="hv-s g">Active</span></div>
      <div><b>Velan Engineering</b><small>Hyderabad R&amp;D · AMC</small></div><div><span class="hv-t a">AMC</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d g">WC</span><span class="hv-d n">n/a</span></div><div>24 · 3-month passes</div><div><span class="hv-s g">Active</span></div>
      <div><b>Kumaran Builders</b><small>Talegaon plant · new block</small></div><div><span class="hv-t c">Construction</span></div><div><span class="hv-d g">PF</span><span class="hv-d r">ESI missing</span><span class="hv-d g">WC</span><span class="hv-d g">BOCW</span></div><div>58 · held</div><div><span class="hv-s y">IC approval</span></div>
      <div><b>Royal Caterers</b><small>Gurugram HQ · canteen</small></div><div><span class="hv-t s">Service</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d g">FSSAI</span><span class="hv-d g">WC</span></div><div>96</div><div><span class="hv-s g">Active</span></div>
    </div>
    <div class="hv-foot">Contract type sets the pass validity, the modules that apply and the approval chain · login created on IC approval</div>
  </div>
</div>`

/* ---------- work order + price master ---------- */
const woUI = `
<div class="ui">
  ${side(2)}
  <div class="ui-main">
    ${top('Hyundai Motor India / CLMS / Work orders / <b>WO-HMIL-2026-0312</b>', 'Work order · Material handling, Chennai plant')}
    <div class="hv-wo">
      <div class="hv-kv"><span>Contractor</span><b>Ganesh Logistics</b><span>Type</span><b>Job contract · attendance based</b><span>Domain head</span><b>R. Srinivasan · Logistics</b><span>Validity</span><b>01 Apr 2026 – 31 Mar 2027</b></div>
      <div class="hv-chain"><span class="ok">HR created</span><i>→</i><span class="ok">HR TL</span><i>→</i><span class="ok">HR DH</span><i>→</i><span class="ok">Contractor assigned</span><i>→</i><span class="ok">User and DH informed</span></div>
    </div>
    <div class="hv-price">
      <div class="h">Skill code</div><div class="h">Headcount</div><div class="h">Rate / day</div><div class="h">Min wage · TN</div><div class="h">Statutory</div>
      <div><b>MH-SK</b> Skilled</div><div>60 / 60</div><div>₹1,040</div><div><span class="hv-d g">₹ OK</span></div><div>PF · ESI · bonus auto</div>
      <div><b>MH-SS</b> Semi-skilled</div><div>94 / 100</div><div>₹930</div><div><span class="hv-d g">₹ OK</span></div><div>PF · ESI · bonus auto</div>
      <div><b>MH-FL</b> Forklift</div><div>32 / 40</div><div>₹980</div><div><span class="hv-d r">Below floor</span></div><div>Upload refused</div>
    </div>
    <div class="hv-foot">Price master by Excel upload · minimum wage checked per skill code · a revision notifies only the contractors on that skill code</div>
  </div>
</div>`

/* ---------- onboarding approval chain ---------- */
const chainSteps: [string, string, string][] = [
  ['Contractor', 'Creates worker · Aadhaar, PAN, PF, ESI, insurance, skill test, eye test', 'done'],
  ['Department in-charge', 'Approves · mobile and laptop permission', 'done'],
  ['Domain head', 'Reviews and approves the pass', 'done'],
  ['OHC doctor', 'Medical · fit or unfit', 'on'],
  ['Safety', 'Height, confined space, forklift assessment by job profile', ''],
  ['HR', 'Documents, PF and ESI challans verified', ''],
  ['Security', 'Biometrics and photo · pass issued', ''],
]
const chainUI = `
<div class="ui">
  ${side(3)}
  <div class="ui-main">
    ${top('Hyundai Motor India / CLMS / Onboarding / <b>Karthik Murugan</b>', 'Gate pass request · Manpower · Sri Sakthi')}
    <div class="hv-steps" data-cycle="1500">
      ${chainSteps.map(([r, d, s], i) => `<div class="hv-st ${s}"><span class="n">${s === 'done' ? '✓' : i + 1}</span><div><b>${r}</b><small>${d}</small></div><em>${s === 'done' ? 'Approved' : s === 'on' ? 'Pending' : 'Waiting'}</em></div>`).join('')}
    </div>
    <div class="hv-foot">Every form digital · files uploaded once · the chain differs by contract type (AMC, manpower, construction…) and is configured, not coded</div>
  </div>
</div>`

/* ---------- gate pass, renewals, permits ---------- */
const passUI = `
<div class="ui">
  ${side(3)}
  <div class="ui-main">
    ${top('Hyundai Motor India / CLMS / <b>Gate passes</b>', 'Passes, renewals and work permits')}
    <div class="ui-bar"><span class="ui-box">5,912 active passes</span><span class="ui-box">Renewals due in 45 days: 312</span><span class="ui-sp"></span><span class="ui-btn">Change validity · bulk</span><span class="ui-btn pri">Renew selected</span></div>
    <div class="hv-pass">
      <div class="card"><div class="l">Validity by contract type</div>
        <div class="kv"><span>Manpower · job · vendor</span><b>6 months</b><span>AMC · construction · driver</span><b>3 months</b><span>Others</span><b>1 month</b><span>Capped at</span><b>WC policy expiry</b></div></div>
      <div class="card"><div class="l">Renewal · Sri Sakthi · 38 workers</div>
        <div class="kv"><span>Due</span><b>28 Nov · request opened 45 days ahead</b><span>Chain</span><b>User → HOD → OHC → HR → Security</b><span>OHC</span><b>Only workers due for 6-month medical</b></div></div>
      <div class="card"><div class="l">Work permits</div>
        <div class="pm"><span class="g">Height · 212 valid</span><span class="g">Confined space · 46</span><span class="y">Forklift · 9 licences expiring</span><span class="r">2 operators blocked</span></div></div>
      <div class="card"><div class="l">Sunday and holiday entry · 19 Oct</div>
        <div class="kv"><span>Requests</span><b>14 contractors · 236 workers</b><span>Sent to</span><b>User, DH, HR · canteen and security count</b></div></div>
    </div>
  </div>
</div>`

/* ---------- vendor scorecard ---------- */
const scoreUI = `
<div class="ui">
  ${side(4)}
  <div class="ui-main">
    ${top('Hyundai Motor India / CLMS / <b>Contractor performance · September</b>', 'Contractor scorecard')}
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

/* ---------- OT and billing ---------- */
const otUI = `
<div class="ui">
  ${side(5)}
  <div class="ui-main">
    ${top('Hyundai Motor India / CLMS / <b>Overtime and billing · September</b>', 'Ganesh Logistics · WO-HMIL-2026-0312')}
    <div class="hv-ot">
      <div class="card"><div class="l">Overtime · approve inside the billing cycle</div>
        ${row('412 OT hours · 63 workers', 'Contractor validated → user approved → DH pending · reminder mailed', 'DH pending', 'y', 'warn')}
        ${row('18 hours without a swipe', 'Rejected automatically', 'Rejected', 'r', 'hot')}</div>
      <div class="card"><div class="l">Bill against verified attendance</div>
        <div class="kv"><span>Man-days billed</span><b>4,872</b><span>Swipe-verified</span><b>4,701</b><span>Held</span><b class="r">171 days · ₹1.6 L</b><span>Rate</span><b>From price master</b></div></div>
      <div class="card"><div class="l">Statutory payments validated</div>
        <div class="kv"><span>PF and ESI challans</span><b>Matched per worker</b><span>Bonus · EL encashment</span><b>Validated</b><span>Holiday wages</span><b>NFH rule checked</b><span>Gratuity</span><b>12 eligible · reimbursement raised</b></div></div>
    </div>
  </div>
</div>`

/* ---------- dashboard (their 13 reports) ---------- */
const dashUI = `
<div class="ui">
  ${side(0)}
  <div class="ui-main">
    ${top('Hyundai Motor India / CLMS / <b>Live dashboard</b>', 'Contract workforce · all locations · today')}
    <div class="hv-dash">
      <div class="w"><div class="l">TO vs actual vs vacancy</div><div class="n">6,420 <small>/ 6,610 · 190 open</small></div></div>
      <div class="w"><div class="l">Attendance · today</div><div class="n">96.8%</div></div>
      <div class="w"><div class="l">Attrition · month</div><div class="n">4.1% <small>cum. 22%</small></div></div>
      <div class="w"><div class="l">CLRA licence vs actual</div><div class="n r">2 over</div></div>
      <div class="w s2"><div class="l">Attendance by vendor</div><div class="bars">${[96, 98, 91, 99, 78, 95, 97, 93].map((h, i) => `<i style="--h:${h}%;--d:${0.2 + i * 0.05}s"${h < 85 ? ' class="r"' : ''}></i>`).join('')}</div></div>
      <div class="w"><div class="l">Gender · migrant</div><div class="donut"><span style="--p:18"></span><b>18% women<br/>41% migrant</b></div></div>
      <div class="w"><div class="l">Fulfilment TAT</div><div class="n">6.2 <small>days</small></div></div>
      <div class="w s2"><div class="l">Compliance · pending · needs attention · due</div><div class="rag3"><span class="r">3</span><span class="o">11</span><span class="g">27</span></div></div>
      <div class="w"><div class="l">Payment status</div><div class="n">36 <small>/ 41 paid</small></div></div>
      <div class="w"><div class="l">Wage revision status</div><div class="n">38 <small>/ 41 signed</small></div></div>
    </div>
  </div>
</div>`

/* ---------- slides ---------- */

const baseSlides: SlideDef[] = [
  {
    id: 'hy1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="tel center" style="padding-top:0">
      <div class="tel-coverwrap">
        <div class="tel-covertext">
          <span class="kick">BetterPlace × Hyundai Motor India · October 2026</span>
          <h1>Every contractor, every pass, every swipe, <em>on one CLMS for every plant and site across India.</em></h1>
          <p>Vendors and work orders, onboarding and gate passes, contractor scorecards, attendance, overtime, billing, statutory checks and the live dashboard. Shown on the software that runs 500,000 contract workers today.</p>
          <div class="meta"><span>CLMS demo · HR and Security</span><span>Slides + live software</span><span>Confidential</span></div>
        </div>
        ${coverRing(['Vendors', 'Orders', 'Onboard', 'Passes', 'Score', 'Attend', 'Billing', 'Dashboard'], ['one', 'CLMS'], false)}
      </div>
    </div>`,
  },

  {
    id: 'hy2a', theme: 'dark', title: 'Who we are',
    html: `
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">Credentials · 1 of 2</span><h2>Ten years on the frontline, 25 million worker profiles, <em>built for your scale.</em></h2></div></div>
      <div class="tel-cred">
        <div>
          <div class="tel-nums">
            <div><div class="n">25M<em>+</em></div><div class="l">Verified worker profiles</div></div>
            <div><div class="n">1,000<em>+</em></div><div class="l">Enterprises on the platform</div></div>
            <div><div class="n">8</div><div class="l">Markets · India, SEA, GCC</div></div>
            <div><div class="n">500K</div><div class="l">Contract workers a month at Reliance</div></div>
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
          <div class="ev" style="--d:.6s"><b>2023–24</b><span>goBetter platform. Reliance live with 500K contract workers a month and 3,000+ vendors across Retail, Jio and O2C. Factory face devices at Reliance O2C.</span></div>
          <div class="ev" style="--d:.7s"><b>2026</b><span>AI Labs. Agents that onboard, induct, roster and reconcile, inside the same record.</span></div>
        </div>
      </div>
    </div>`,
  },
  plainSlide('hy2', 'light', 'Customer impact',
    'Customer impact · whole contract workforces, run on BetterPlace',
    'We run the entire contract workforce for India\u2019s largest enterprises, <em>from vendor to gate to wage.</em>',
    `<div>
      <div class="tel-clients" style="grid-template-columns:1.15fr 1.15fr .8fr">
        <div class="tel-case" style="--pc:var(--navy);--d:.15s"><div class="who">Reliance · Retail, Jio, O2C</div><h4>Reliance Industries</h4><div class="big">500K<small>contract workers active every month</small></div><p>Their entire contract workforce on one platform: 3,000+ vendors, work orders and position codes, onboarding and verification, attendance, payroll, PF and ESI challan reconciliation and registers, across 18,000+ stores, Jio sites and O2C plants.</p><div class="mini"><div><b>−90%</b><span>payroll leakage</span></div><div><b>−80%</b><span>vendor non-compliance</span></div><div><b>7×</b><span>faster rule changes</span></div></div></div>
        <div class="tel-case" style="--pc:#FF9518;--d:.3s"><div class="who">Energy · PSU · refineries and plants</div><h4>Bharat Petroleum</h4><div class="big">Every<small>contract worker at the gate</small></div><p>BPCL\u2019s contract workforce runs on our CLMS: vendors and work orders from SAP, labour licences and insurance per contract, gate pass issue, renewal and auto-termination, visitor management, and a live count of everyone inside the refinery.</p><div class="mini"><div><b>SAP</b><span>integrated master</span></div><div><b>Live</b><span>headcount inside</span></div><div><b>30 days</b><span>no swipe → pass lapses</span></div></div></div>
        <div class="tel-case" style="--pc:#0d7d85;--d:.45s"><div class="who">Quick commerce · 22 cities</div><h4>Zepto</h4><div class="big">967<small>sites</small></div><p>15,000 workers on face and geo attendance with spoof detection; deployment gated on training.</p><div class="mini"><div><b>−40%</b><span>attendance ops cost</span></div></div></div>
      </div>
      <div class="tel-logos"><span class="lbl">Also on the platform</span>
        <img src="assets/logo/c-basf.png" alt="BASF"/><img src="assets/logo/c-tcs.png" alt="TCS"/><img src="assets/logo/c-accenture.png" alt="Accenture"/><img src="assets/logo/c-amazon.jpg" alt="Amazon"/><img src="assets/logo/c-titan.png" alt="Titan"/><img src="assets/logo/c-jll.png" alt="JLL"/><img src="assets/logo/c-ibm.png" alt="IBM"/>
      </div>
    </div>`),

  plainSlide('hy2b', 'darker', 'Why now',
    'Why now · what is at stake on a plant of this size',
    'Contract labour is no longer an HR file. <em>It decides output, audits and the principal employer\u2019s liability.</em>',
    `<div class="tel-stakes">
      <div class="st" style="--d:.15s"><div class="n">21 Nov 2025</div><div class="l">the four Labour Codes in force · central rules May 2026</div><p>Contractor registers, licensed strength, the core-activity bar and one annual electronic return. State rules are still landing, differently in every state you operate in.</p><div class="src">Labour Codes notification</div></div>
      <div class="st" style="--d:.3s"><div class="n">You pay</div><div class="l">wages, PF and ESI when a contractor defaults</div><p>The principal employer pays and recovers. With nine contract types and dozens of vendors, one unmatched challan becomes your notice.</p><div class="src">OSH Code · Code on Social Security</div></div>
      <div class="st" style="--d:.45s"><div class="n">48 h</div><div class="l">ordinary hours a week · overtime at 2×, with consent</div><p>Every hour beyond the limit needs the worker\u2019s consent, is paid at twice the rate and sits inside a quarterly cap. It has to be provable, worker by worker.</p><div class="src">OSH Code · Code on Wages</div></div>
      <div class="st" style="--d:.6s"><div class="n">Right now</div><div class="l">how many contract workers are inside the gate, and where</div><p>At BPCL\u2019s refineries that count must be known at any moment, and it comes from our gate swipes. Safety and auditors at an auto plant ask for the same.</p><div class="src">BPCL deployment</div></div>
    </div>`, { glow: true }),

  plainSlide('hy2c', 'light', 'The rules',
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

  plainSlide('hy3', 'light', 'Nine contract types',
    'One platform for every kind of contractor at your plants',
    'Nine contract types, each with its own pass validity, approvals and modules. <em>Set once, applied every time.</em>',
    `<div>
      <div class="hv-types">
        ${[
          ['Manpower', '6 months', 'Per worker / day / month', 'All modules'],
          ['Job · attendance based', '6 months', 'Per unit or area', 'All modules'],
          ['Job · PO based', '6 months', 'Per job or quantity', 'No billing'],
          ['AMC', '3 months', 'Annual fixed fee', 'Entry, attendance, statutory'],
          ['Service', '6 months', 'Monthly or service fee', 'Entry, attendance, statutory'],
          ['Construction / project', '3 months', 'Lump sum or milestone', 'Entry, attendance, statutory'],
          ['Vendor / supplier', '6 months', 'Per unit or order', 'Entry, attendance, statutory'],
          ['Logistics driver', '3 months', 'Per driver or trip', 'Entry, attendance, statutory'],
          ['Others', '1 month', '—', 'Entry, attendance'],
        ].map(([t, v, b, m], i) => `<div class="ty" style="--d:${0.05 + i * 0.05}s"><b>${t}</b><span>Pass ${v}</span><small>${b}</small><em>${m}</em></div>`).join('')}
      </div>
      <div class="tel-band light"><span class="bl">How the deck runs</span><p><b>Vendor management first</b>: vendors, work orders, onboarding, gate passes, scorecard. Then <b>attendance</b>, shifts, overtime and billing, statutory and the dashboard. The yellow <b>▶ Live</b> marker is where we switch to the software.</p></div>
    </div>`),

  problemSlide({
    id: 'hv1', theme: 'light', title: 'Vendors', rail, step: 1, demo: 'Live · vendor master',
    kick: 'Vendor management · 1 of 5 · adding vendors',
    h2: 'Every contractor on file with its contract type, documents and licence, <em>before a single worker is added.</em>',
    qLabel: P, quote: 'Sixty-plus vendors across contract types, with documents and licences in folders, and logins handed out by email.',
    changes: [
      { ic: icons.building, b: 'One vendor master, nine contract types.', t: 'The type sets pass validity, the modules that apply and the approval chain.' },
      { ic: icons.doc, b: 'Documents with expiry.', t: 'PF, ESI, WC policy, labour licence and FSSAI or BOCW where relevant. A missing or lapsed one holds new passes.' },
      { ic: icons.lock, b: 'Vendor login on IC approval.', t: 'Contractors get their own login for entry and exit only, created once your IC approves them.' },
    ],
    proof: { n: '3,000+', p: 'vendors on one rule engine at <b>Reliance</b>, with documents, licences and expiry tracked this way.' },
    vis: vendorUI, wide: true,
    foot: 'Vendor master, documents and expiry holds are live. Contract types and the IC approval step are configured for HMIL. Authored view; names illustrative.',
  }),

  problemSlide({
    id: 'hv2', theme: 'light', title: 'Work orders', rail, step: 2, demo: 'Live · work order',
    kick: 'Vendor management · 2 of 5 · work orders and the price master',
    h2: 'Work orders approved in the system, <em>with every rate checked against the minimum wage.</em>',
    qLabel: P, quote: 'Work orders and rates move on email and Excel. A rate below the minimum wage is found at the audit.',
    changes: [
      { ic: icons.doc, b: 'Created, approved, assigned.', t: 'HR creates, HR TL and DH approve, the contractor is assigned, the user and domain head are informed.' },
      { ic: icons.shield, b: 'Price master with a wage floor.', t: 'Excel upload by skill code; statutory components calculated automatically; a rate below the floor is refused.' },
      { ic: icons.repeat, b: 'Revisions reach the right contractors.', t: 'A wage revision notifies only the contractors on that skill code. Users can see the skill rates that apply to them.' },
    ],
    proof: { n: '500K', p: 'contract workers at <b>Reliance</b> run on work orders and position codes as the governing master.' },
    vis: woUI, wide: true,
    foot: 'Work orders, sanctioned headcount and minimum-wage validation are live. The HR approval chain is configured. Authored view; rates illustrative.',
  }),

  problemSlide({
    id: 'hv3', theme: 'dark', title: 'Onboarding chain', rail, step: 3, demo: 'Live · approval chain',
    kick: 'Vendor management · 3 of 5 · onboarding with every approval',
    h2: 'Seven approvals, all digital, <em>from the contractor’s entry to the security desk.</em>',
    qLabel: P, quote: 'Paper forms travel between the department, the doctor, safety, HR and security. Nobody knows where a pass is stuck.',
    changes: [
      { ic: icons.user, b: 'The contractor enters once.', t: 'Personal and job details with Aadhaar, PAN, PF, ESI, insurance, skill test and eye test, uploaded once.' },
      { ic: icons.check, b: 'Each approver acts on mobile.', t: 'Department in-charge, domain head, OHC doctor, safety, HR, then security. Every step timed and visible.' },
      { ic: icons.layers, b: 'Different chains by contract type.', t: 'AMC, manpower and construction run different chains, configured without code. No manual forms.' },
    ],
    proof: { n: 'BPCL', p: 'runs gate pass issue, renewal and termination as configured approval workflows on this platform.' },
    vis: chainUI, wide: true,
    foot: 'Onboarding, document capture and the workflow builder are live; HMIL’s seven-step chain and forms are configured. Authored view.',
  }),

  problemSlide({
    id: 'hv4', theme: 'light', title: 'Gate passes', rail, step: 4, demo: 'Live · passes',
    kick: 'Vendor management · 4 of 5 · gate passes, renewals and permits',
    h2: 'Passes that expire on time, renew 45 days ahead, <em>and carry the permits the job needs.</em>',
    qLabel: P, quote: 'Pass validity is set by hand, renewals are chased late, and a forklift licence expiry is noticed on the floor.',
    changes: [
      { ic: icons.clock, b: 'Validity by type, capped by WC.', t: '6, 3 or 1 month by contract type, never past the WC policy expiry; changed in bulk by vendor or domain.' },
      { ic: icons.repeat, b: 'Renewals and permits.', t: 'Renewal opens 45 days ahead; height, confined space and forklift permits with licence expiry.' },
      { ic: icons.map, b: 'Sunday and holiday entry.', t: 'Contractors request online; user, DH and HR are informed; canteen and security get the count.' },
    ],
    proof: { n: '30 days', p: 'without a swipe and a pass lapses at <b>BPCL</b>, where renewals and terminations run on rules.' },
    vis: passUI, wide: true,
    foot: 'Pass validity, renewals, permits with expiry and bulk changes are live; the Sunday-entry workflow is configured. Authored view.',
  }),

  problemSlide({
    id: 'hv5', theme: 'dark', title: 'Scorecard', rail, step: 5, demo: 'Live · scorecard',
    kick: 'Vendor management · 5 of 5 · contractor scorecard',
    h2: 'Every contractor scored green, orange or red each month, <em>on data, not on who complains loudest.</em>',
    qLabel: P, quote: 'Contractor reviews are opinions collected once a year. Renewals go to the familiar name.',
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
    id: 'ha1', theme: 'light', title: 'Attendance capture', rail, step: 6, demo: 'Live · headcount',
    kick: 'Attendance · capture from every device you have',
    h2: 'Biometric, card or PDA scanner, <em>every swipe in one live count by gate and shop.</em>',
    qLabel: P, quote: 'Swipes sit in device software. The work-order check sheet is prepared by hand at month end.',
    changes: [
      { ic: icons.cam, b: 'Your devices, integrated.', t: 'Biometric, card and PDA scanners feed the same record, offline-safe.' },
      { ic: icons.doc, b: 'Check sheet by work order.', t: 'Real-time attendance and overtime per work order; the contractor confirms in the system.' },
      { ic: icons.users, b: 'Who is inside, now.', t: 'Live headcount by gate and shop for safety and audit.' },
    ],
    proof: { n: 'BPCL', p: 'knows the count inside its refinery gates at any moment from these swipes.' },
    vis: headcountMock(HM),
    foot: 'Device integration, work-order attendance and live headcount are live. Numbers illustrative.',
  }),

  problemSlide({
    id: 'ha2', theme: 'dark', title: 'Shifts', rail, step: 7, demo: 'Live · shift mapping',
    kick: 'Attendance · shift mapping by location',
    h2: 'Contractors map shifts by location, <em>and the system changes shifts on rotation by itself.</em>',
    qLabel: P, quote: 'Shift mapping lives with each contractor in Excel, different at every plant, port, warehouse, welfare centre and regional office.',
    changes: [
      { ic: icons.map, b: 'By location.', t: 'Every plant, port, warehouse, R&D centre and office, each with its own shifts and state rules.' },
      { ic: icons.repeat, b: 'Auto shift change.', t: 'Rotations change on schedule; contractors edit or delete within the rules.' },
      { ic: icons.lock, b: 'Rules it will not break.', t: 'Daily and weekly hours, weekly rest, certification for the station.' },
    ],
    proof: { n: 'Minutes', p: 'for shortfall management at <b>Reliance Retail</b> on this roster engine, down from hours.' },
    vis: rosterUI(HM), wide: true,
    foot: 'Shift mapping, rotation and roster rules are live. Authored view; names illustrative.',
  }),

  problemSlide({
    id: 'ha3', theme: 'light', title: 'Rules', rail, step: 7, demo: 'Live · rules',
    kick: 'Attendance · labour-law rules the roster cannot break',
    h2: 'Set the rules once. <em>The roster refuses a breach, and you hear the moment a swipe breaks one.</em>',
    qLabel: P, quote: 'Hour limits sit in a policy document; OT and Sunday work are found after they happen.',
    changes: [
      { ic: icons.layers, b: 'Rules as settings.', t: 'Hours per day and week, weekly rest, OT consent and caps, by state.' },
      { ic: icons.lock, b: 'Refused before publishing.', t: 'A shift that would cross a limit cannot be published.' },
      { ic: icons.warn, b: 'Alerts from real swipes.', t: 'Crossing a limit raises an alert the same hour.' },
    ],
    proof: { n: '7×', p: 'faster rule changes at <b>Reliance</b> than the systems it replaced.' },
    vis: rulesUI(HM),
    foot: 'Policy engine, roster validation and alerts are live. Authored view; values follow your state rules.',
  }),

  problemSlide({
    id: 'ha4', theme: 'dark', title: 'OT and billing', rail, step: 8, demo: 'Live · billing',
    kick: 'Overtime, billing and statutory payments',
    h2: 'Overtime approved inside the billing cycle, <em>bills paid only for swipe-verified days.</em>',
    qLabel: P, quote: 'OT approvals run late, bills are checked against the contractor’s own sheet, and statutory payments are taken on trust.',
    changes: [
      { ic: icons.check, b: 'OT approval chain.', t: 'Contractor validates, user approves, DH approves, inside the cycle, with auto reminders.' },
      { ic: icons.card, b: 'Bill against swipes.', t: 'Man-days billed checked against verified attendance and the price master.' },
      { ic: icons.shield, b: 'Statutory payments validated.', t: 'PF and ESI challans per worker; bonus, EL encashment, holiday wages and gratuity reimbursement checked.' },
    ],
    proof: { n: '−90%', p: 'payroll leakage at <b>Reliance</b> once billing ran from verified attendance.' },
    vis: otUI, wide: true,
    foot: 'OT, invoice checks and challan reconciliation are live; the HMIL OT chain and gratuity reimbursement flow are configured. Figures illustrative.',
  }),

  problemSlide({
    id: 'hp1', theme: 'light', title: 'Payroll · PF and ESI compliance', rail, step: 9, demo: 'Live · challan match',
    kick: 'Payroll · PF and ESI compliance monitoring for the principal employer',
    h2: 'Every vendor\u2019s PF and ESI challan checked against every worker, <em>every month, before you pay the bill.</em>',
    qLabel: P, quote: 'Vendors send challans as PDFs. Nobody checks whether each worker\u2019s PF and ESI was actually paid, until a notice arrives for the principal employer.',
    changes: [
      { ic: icons.doc, b: 'Vendor uploads, we read it.', t: 'The PF ECR and ESI challan are uploaded on the vendor portal; OCR reads every UAN, IP number, amount and wage month.' },
      { ic: icons.shield, b: 'Matched against actual numbers.', t: 'Each deposit is compared with the dues computed from that worker\u2019s verified attendance and wages. Not paid, short paid, wrong UAN and late deposits are flagged.' },
      { ic: icons.check, b: 'Compliance proven, payment protected.', t: 'The vendor is notified with the worker list, the gap shows on the scorecard, and the bill can be held until it is cleared. Due diligence on record.' },
    ],
    proof: { n: '−80%', p: 'vendor non-compliance at <b>Reliance</b> across 3,000+ vendors. Clients name challan matching among the features they use most.' },
    vis: `<div class="ui">
      ${side(5)}
      <div class="ui-main">
        ${top('Hyundai Motor India / Payroll / Compliances / <b>PF and ESI · September</b>', 'Challan reconciliation · Ganesh Logistics')}
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
        <div class="hv-ai" style="background:#fef2f2;border-color:#fecaca"><b style="color:#b91c1c">Flag raised to HMIL HR.</b> Vendor notified · scorecard updated · bill held until cleared.</div>
      </div>
    </div>`,
    foot: 'Challan OCR and worker-by-worker PF and ESI reconciliation are live; payroll, PT and LWF compliance too. Figures illustrative.',
  }),

  plainSlide('hs1', 'light', 'Statutory and training',
    'Statutory · compliance checked every month, not at the audit',
    'Registers, challans, licences and training records, <em>ready for any inspector on any day.</em>',
    `<div class="tel-codes">
      <div class="cd" style="--d:.1s"><span class="law">OSH Code · contractor licence</span><h4>Licensed strength vs actual</h4><p>Deployment across every work order measured against each contractor's licence.</p><div class="we"><b>We enforce:</b> new passes blocked when the licence is exceeded.</div></div>
      <div class="cd" style="--d:.18s"><span class="law">Code on Social Security · PF and ESI</span><h4>Challans matched to every worker</h4><p>Contractors upload remittances and challans; we match them to the workers billed.</p><div class="we"><b>We flag:</b> short or missing deposits before you pay the bill.</div></div>
      <div class="cd" style="--d:.26s"><span class="law">Code on Wages · bonus and holidays</span><h4>Bonus, EL encashment, holiday wages</h4><p>Validated against the rules, including the before-and-after national holiday condition.</p><div class="we"><b>We check:</b> every payment line before release.</div></div>
      <div class="cd" style="--d:.34s"><span class="law">Gratuity</span><h4>Reimbursement on termination</h4><p>Pass terminated, eligibility checked by the system, HR approves, cost mailed to the contractor.</p><div class="we"><b>We automate:</b> the eligibility check and the mail.</div></div>
      <div class="cd" style="--d:.42s"><span class="law">Training</span><h4>Induction and safety refreshers</h4><p>Self-declaration at onboarding; periodic safety refreshers with attendance uploaded.</p><div class="we"><b>We track:</b> who is due, who attended, by contractor.</div></div>
      <div class="cd" style="--d:.5s"><span class="law">Registers</span><h4>Muster roll, wages, overtime</h4><p>Generated from swipes and signed off by contractors.</p><div class="we"><b>We generate:</b> any register, any day.</div></div>
    </div>`),

  problemSlide({
    id: 'ht1', theme: 'dark', title: 'Training', rail, step: 9, demo: 'Live · skillBetter',
    kick: 'Training · induction and safety refreshers on the worker\u2019s phone',
    h2: 'Induction and safety refreshers on every worker\u2019s phone, <em>in the worker\u2019s own language, with proof of who passed.</em>',
    qLabel: P, quote: 'Induction is a signed self-declaration and refresher attendance is a scanned sheet. Nobody can say who is due.',
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
    foot: 'skillBetter LMS is live (production app screens). Linking course status to gate passes and permits is configured for HMIL.',
  }),

  problemSlide({
    id: 'hr1', theme: 'light', title: 'Reimbursements', rail, step: 9, demo: 'Live · reimbursements',
    kick: 'Reimbursements · claims and gratuity on the same record',
    h2: 'Claims raised, approved and paid in the system, <em>with gratuity reimbursement checked automatically.</em>',
    qLabel: P, quote: 'Reimbursement claims and gratuity cases move on email with attachments, and eligibility is worked out by hand.',
    changes: [
      { ic: icons.doc, b: 'Raise with the bill attached.', t: 'Contractor or worker raises a claim against a category and limit, with the receipt uploaded.' },
      { ic: icons.check, b: 'Approve and pay through the run.', t: 'Approved claims flow into the next payroll or bill; nothing is retyped.' },
      { ic: icons.shield, b: 'Gratuity on termination.', t: 'Pass terminated, eligibility checked by the system, HR approves, cost and worker details mailed to the contractor.' },
    ],
    proof: { n: '1 record', p: 'claims, pay, passes and exits sit on the same worker record, so eligibility is never worked out by hand.' },
    vis: `<div class="ui">
      ${side(5)}
      <div class="ui-main">
        ${top('Hyundai Motor India / Payroll / <b>Reimbursements · October</b>', 'Reimbursement claims')}
        <div class="ui-bar"><span class="ui-box">Pending 18</span><span class="ui-box">Approved 46</span><span class="ui-box">Paid in run 112</span><span class="ui-sp"></span><span class="ui-btn pri">Approve selected</span></div>
        <div class="hv-tbl" style="grid-template-columns:1.2fr 1fr .7fr .9fr .7fr">
          <div class="h">Claim</div><div class="h">Category</div><div class="h">Amount</div><div class="h">Receipt</div><div class="h">Status</div>
          <div><b>Karthik M.</b><small>Sri Sakthi · CL-30417</small></div><div>Safety shoes</div><div>₹1,450</div><div><span class="hv-d g">Uploaded</span></div><div><span class="hv-s y">Pending</span></div>
          <div><b>Suresh R.</b><small>Ganesh · CL-30588</small></div><div>Medical test</div><div>₹600</div><div><span class="hv-d g">Uploaded</span></div><div><span class="hv-s g">Approved</span></div>
          <div><b>Velan Engineering</b><small>contractor claim</small></div><div>Travel · Talegaon site</div><div>₹8,200</div><div><span class="hv-d g">Uploaded</span></div><div><span class="hv-s g">Paid</span></div>
        </div>
        <div class="hv-ai" style="background:#f0fdf4;border-color:#bbf7d0"><b style="color:#166534">Gratuity · 12 workers eligible</b> Passes terminated in September · 5+ years · cost ₹6.8 L · details mailed to 3 contractors · HR approval pending</div>
      </div>
    </div>`,
    foot: 'The reimbursement module (claims, approval, payout through payroll) is live in a basic form; the gratuity eligibility workflow is configured for HMIL. Authored view; figures illustrative.',
  }),

  problemSlide({
    id: 'hd1', theme: 'dark', title: 'Live dashboard', rail, step: 10, demo: 'Live · dashboard',
    kick: 'Live dashboard · every report on one screen',
    h2: 'TO against actual, attendance, attrition, compliance and payments, <em>for every contractor, live.</em>',
    qLabel: P, quote: 'Each report is a separate Excel from a separate person, a week late.',
    changes: [
      { ic: icons.chart, b: 'Thirteen reports, one screen.', t: 'TO vs actual vs vacancy, attendance, attrition, gender, migrant, TAT, compliance, wage revisions, CLRA vs actual, budget, payments, performance.' },
      { ic: icons.layers, b: 'Drill down.', t: 'By vendor, domain, contract type, location, down to one worker.' },
      { ic: icons.plug, b: 'Your tools too.', t: 'Embedded dashboards or the same data to your BI and SAP by API.' },
    ],
    proof: { n: '7×', p: 'faster report changes at <b>Reliance</b>, where these dashboards run for 500K workers.' },
    vis: dashUI, wide: true,
    foot: 'Embedded dashboards are live; HMIL’s report set is configured in the pilot. Values illustrative.',
  }),

  plainSlide('hm1', 'dark', 'Beyond the requirement',
    'Also on the platform · beyond your requirement list',
    'When you are ready: <em>self-onboarding on WhatsApp, hiring, and prediction.</em>',
    `<div class="tel-body" style="grid-template-columns:minmax(0,.36fr) minmax(0,.64fr);align-items:center">
      <div class="tel-say">
        <ul>
          <li><span class="ic">${svg(icons.zap)}</span><span><b>WhatsApp self-onboarding.</b> Workers upload Aadhaar and documents in their own language; UAN fetched; checks in minutes.</span></li>
          <li><span class="ic">${svg(icons.search)}</span><span><b>Contractor hiring.</b> Openings from the work order, QR walk-in drives, candidates straight into onboarding.</span></li>
          <li><span class="ic">${svg(icons.eye)}</span><span><b>Absence prediction.</b> Festival and seasonal shortfalls by line, two weeks ahead.</span></li>
          <li><span class="ic">${svg(icons.users)}</span><span><b>Attrition prediction.</b> Who is likely to leave, and which teams lose people.</span></li>
        </ul>
        <div class="proof"><div class="n">45 min</div><p>average onboarding at <b>Zepto</b> on the WhatsApp flow.</p></div>
      </div>
      <div class="tel-vis">${waPhones(HM)}</div>
    </div>`),

  plainSlide('hn1', 'darker', 'Next step',
    'Next step',
    'Start with one plant and three contractors, <em>and decide on your own data.</em>',
    `<div class="tel-close">
      <div class="asks">
        <div class="ask" style="--d:.15s"><div class="n">1</div><div><h4>Pick one plant or site and three contractor types</h4><p>Manpower, AMC and construction show every chain: passes, attendance, billing and statutory.</p></div></div>
        <div class="ask" style="--d:.3s"><div class="n">2</div><div><h4>A working session with HR and Security</h4><p>We configure the nine contract types, the seven-step chain, forms and the price master from it.</p></div></div>
        <div class="ask" style="--d:.45s"><div class="n">3</div><div><h4>Security and legal review this week</h4><p>ISO 27001 and SOC 2 reports, the draft DPA and the hosting model to your InfoSec team.</p></div></div>
      </div>
      <div class="tel-contact">
        <div class="nm">Anuj Saxena</div><div class="rl">Director, Product · BetterPlace</div>
        <a href="mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent('Hyundai Motor India · CLMS pilot')}">anuj.saxena@betterplace.co.in</a>
        <p>Every contractor, every pass, every swipe on one CLMS. The software you saw today is what the pilot runs on.</p>
      </div>
    </div>`, { glow: true }),
]


/* =====================================================================================
   Panel version (23 Nov 2026). HMIL's evaluation panel set the agenda: Overview 5 min,
   Product features 15 min, Demo 10 min, Q&A 10 min. The base slides above are reordered to
   that agenda, patched for current company facts, and joined by slides for what the MoM of
   21 Oct asked for: float-pool replacement, access and approvals by location, vendor-wise
   salary structures, PF verification, integrations, security, implementation, support and
   the licensing model. Statuses stay honest: Live · Configured for HMIL · Pilot · Beta.
   ===================================================================================== */

const PROTO = 'https://www.betterplace.co.in/studio/hyundai'

/* ---------- salary structures: vendor × location × department × skill ---------- */
const salUI = `
<div class="ui">
  ${side(2)}
  <div class="ui-main">
    ${top('Hyundai Motor India / Payroll / <b>Salary structures</b>', 'Structures by vendor, location, department and skill')}
    <div class="ui-bar"><span class="ui-box">Vendor: Sri Sakthi · V-10442</span><span class="ui-box">Location: Chennai Plant 1</span><span class="ui-box">Sub-vendors: 2</span><span class="ui-sp"></span><span class="ui-btn ai">✦ Check against minimum wage</span><span class="ui-btn pri">+ Structure</span></div>
    <div class="hv-tbl" style="grid-template-columns:1.2fr 1fr .8fr .75fr .75fr .9fr">
      <div class="h">Department · work order</div><div class="h">Skill</div><div class="h">Basic + DA / day</div><div class="h">Min wage TN</div><div class="h">OT</div><div class="h">Check</div>
      <div><b>Body shop</b><small>WO-HMIL-0298 · welding</small></div><div>Skilled</div><div>₹742</div><div>₹698</div><div>2× · consent</div><div><span class="hv-d g">Above floor</span></div>
      <div><b>Paint shop</b><small>WO-HMIL-0301 · sealing</small></div><div>Semi-skilled</div><div>₹668</div><div>₹652</div><div>2× · consent</div><div><span class="hv-d g">Above floor</span></div>
      <div><b>Material handling</b><small>WO-HMIL-0312 · same vendor</small></div><div>Semi-skilled</div><div>₹671</div><div>₹652</div><div>2× · consent</div><div><span class="hv-d g">Above floor</span></div>
      <div><b>Housekeeping</b><small>WO-HMIL-0330 · sub-vendor Annai</small></div><div>Unskilled</div><div>₹598</div><div>₹612</div><div>2× · consent</div><div><span class="hv-d r">Below floor · blocked</span></div>
    </div>
    <div class="hy-reimb"><span class="l">Non-CTC reimbursements</span><span>PPE kit · ₹1,450 / 6 months</span><span>Safety shoes · ₹1,200 / year</span><span>Uniform · 2 sets</span><span>Canteen subsidy</span></div>
    <div class="hv-foot">Two structures for the same vendor at one plant are normal: each work order carries its own. Rates are illustrative, not notified minimum wages.</div>
  </div>
</div>`

/* ---------- access and approvals by location, vendor, department, role ---------- */
const accUI = `
<div class="ui">
  ${side(4)}
  <div class="ui-main">
    ${top('Hyundai Motor India / Settings / <b>Roles and approvals</b>', 'Who sees what, who approves what')}
    <div class="hy-acc">
      <div class="h">Role</div><div class="h">Locations</div><div class="h">Vendors</div><div class="h">Departments</div><div class="h">Can approve</div>
      <div><b>Corporate HR · Gurugram</b></div><div>All India</div><div>All</div><div>All</div><div><span class="hv-d g">Work orders</span><span class="hv-d g">Wage revisions</span></div>
      <div><b>Plant HR · Chennai</b></div><div>Chennai plants, port</div><div>All at Chennai</div><div>All</div><div><span class="hv-d g">Passes</span><span class="hv-d g">OT</span><span class="hv-d g">Invoices</span></div>
      <div><b>Plant HR · Talegaon</b></div><div>Talegaon, Chakan</div><div>All at Pune</div><div>All</div><div><span class="hv-d g">Passes</span><span class="hv-d g">OT</span><span class="hv-d g">Invoices</span></div>
      <div><b>Domain head · Body shop</b></div><div>Chennai Plant 1</div><div>4 vendors</div><div>Body shop</div><div><span class="hv-d g">Passes</span><span class="hv-d g">OT</span></div>
      <div><b>Security · Gate 2</b></div><div>Chennai Plant 1</div><div>All</div><div>Read only</div><div><span class="hv-d n">Pass issue only</span></div>
      <div><b>Vendor · Sri Sakthi</b></div><div>Own sites</div><div>Self + sub-vendors</div><div>Own work orders</div><div><span class="hv-d n">Submit only</span></div>
    </div>
    <div class="hy-flow"><span class="l">Approval chain · OT above 4 h in a day · Chennai</span><span class="ok">Vendor validates</span><i>→</i><span class="ok">Supervisor</span><i>→</i><span class="on">Domain head</span><i>→</i><span>Plant HR if &gt; 50 h in the quarter</span></div>
  </div>
</div>`

/* ---------- float pool: skill-based replacement of absent workers ---------- */
const fpUI = `
<div class="ui">
  ${side(3)}
  <div class="ui-main">
    ${top('Hyundai Motor India / Roster / <b>Absent today · Body shop B · A shift</b>', 'Replace from the vendor float pools')}
    <div class="ui-bar"><span class="ui-box">Absent at 06:20 · <b>9</b></span><span class="ui-box">Float pool · 3 vendors · 41 ready</span><span class="ui-sp"></span><span class="ui-btn">Criteria</span><span class="ui-btn ai">✦ Fill all 9</span></div>
    <div class="hy-fp">
      <div class="col"><div class="l">Absent · station needs</div>
        <div class="ab"><b>Karthik M.</b><small>Spot welding · station W-14</small></div>
        <div class="ab"><b>Arun K.</b><small>Spot welding · station W-17</small></div>
        <div class="ab"><b>Dinesh S.</b><small>Sealer · station S-03</small></div>
      </div>
      <div class="col wide"><div class="l">Ranked replacements for W-14</div>
        <div class="cand top"><span class="rk">1</span><div><b>Prakash A.</b><small>Velan · float · spot welding certified · 18 shifts on W-line</small></div><em>94</em><span class="hv-s g">Notified</span></div>
        <div class="cand"><span class="rk">2</span><div><b>Vignesh G.</b><small>Sri Sakthi · float · certified · 31 of 50 OT h used</small></div><em>88</em><span class="hv-s y">Standby</span></div>
        <div class="cand dim"><span class="rk">–</span><div><b>Suresh R.</b><small>Ganesh · not certified for W-line</small></div><em>—</em><span class="hv-d r">Excluded</span></div>
        <div class="why">Ranked on certification for the station, recent shifts on the line, hours left this week and quarter, rest since last shift, vendor fill rate. Criteria and weights are yours to set.</div>
      </div>
    </div>
    <div class="hv-ai"><b>✦ 8 of 9 filled by 06:34.</b> Workers told on the app in Tamil; vendors and the supervisor informed. One open cell raised to the domain head.</div>
  </div>
</div>`

/* ---------- Ask goBetter AI mock ---------- */
const askUI = `
<div class="hy-ask">
  <div class="q"><span>✦</span>Which vendors have PF gaps this month, and how many workers are affected?</div>
  <div class="a">
    <p><b>3 vendors</b> have PF gaps for October: <b>Ganesh Logistics</b> (6 workers, ₹8,600), <b>Kumaran Builders</b> (11 workers, ₹19,400) and <b>Marina Housekeeping</b> (2 workers, ₹2,900).</p>
    <div class="bars"><span style="--w:100%"><b>Kumaran</b><i>₹19.4K</i></span><span style="--w:44%"><b>Ganesh</b><i>₹8.6K</i></span><span style="--w:15%"><b>Marina</b><i>₹2.9K</i></span></div>
    <div class="src">Read 41 challans · 6,212 wage lines · Oct 2026 · <u>Open the 19 workers</u> · <u>Draft vendor notice</u></div>
  </div>
</div>`

/* ---------- integration map ---------- */
const hmArch = `
<div class="tm">
  ${bar('Who is the system of record for what · SAP · HRMS · goBetter', 'Integration map')}
  <div class="tm-body tm-arch">
    <div class="tm-sor" style="margin-top:0">
      <div class="h">Object</div><div class="h">System of record</div><div class="h">Flows to</div><div class="h">Interface</div>
      <div>Vendor codes, work orders, POs, payments</div><div><b>SAP ERP</b></div><div>goBetter reads vendors and orders; bills checked before release</div><div>API or file · agreed with HMIL IT</div>
      <div>On-roll employee master, org, cost centres</div><div><b>Your HRMS</b></div><div>goBetter reads for approvers and departments</div><div>API · with PeopleStrong, our partner</div>
      <div>Contract worker, pass, attendance, wages, registers</div><div><b>goBetter</b></div><div>SAP for cost and invoices · HRMS for headcount</div><div>API · daily or per run</div>
      <div>Biometric, card, turnstile, PDA</div><div><b>Your devices</b></div><div>Punches in, access decisions out</div><div>Device integration · offline queue</div>
      <div>PF and ESI challans, UAN</div><div><b>EPFO · ESIC</b></div><div>Challans read by OCR; UAN checked on a sample</div><div>Upload + verification</div>
      <div>Sign-in</div><div><b>Your directory</b></div><div>Single sign-on for HMIL users</div><div>SAML / Azure AD</div>
    </div>
  </div>
</div>`

/* ---------- new slides ---------- */
const extra: Record<string, SlideDef> = {
  hag: plainSlide('hag', 'darker', 'Agenda',
    'Agenda · the panel’s format, in the panel’s order',
    'Forty minutes, four parts. <em>Every point on your list has a slide and a screen.</em>',
    `<div class="hy-agenda">
      <div class="ag" style="--d:.1s"><div class="t">05 min</div><div><h4>Overview</h4><p>Company profile, products, CLMS experience, financials, workforce, clientele with manufacturing first.</p></div><span class="n">Slides 3–4</span></div>
      <div class="ag" style="--d:.2s"><div class="t">15 min</div><div><h4>Product features</h4><p>The contract-labour lifecycle end to end: contractor onboarding, statutory monitoring, attendance and deployment, documents and workflows, invoicing and payments, dashboards, integrations, security, implementation, support and the licensing model.</p></div><span class="n">Slides 5–28</span></div>
      <div class="ag hot" style="--d:.3s"><div class="t">10 min</div><div><h4>Product demo, end to end</h4><p>A clickable product built for HMIL: Chennai, Talegaon and Delhi on one screen, with AI that answers, rosters and checks.</p></div><span class="n">Slide 29 · live</span></div>
      <div class="ag" style="--d:.4s"><div class="t">10 min</div><div><h4>Q&amp;A</h4><p>Product, implementation and technical experts on the call. Quotation sent separately, password-protected, to panel members only.</p></div><span class="n">Slide 30</span></div>
    </div>`, { glow: true }),

  hfm: plainSlide('hfm', 'dark', 'Your feature list',
    'Product features · your list, with where it is shown and its status for HMIL',
    'Thirteen areas on your list. <em>Here is each one, what runs today and what we configure for you.</em>',
    `<div class="tel-status tight hy-status">
      <div class="h"></div><div class="h">Your area</div><div class="h">What runs today</div><div class="h">Status for HMIL</div>
      ${[
        ['End-to-end lifecycle', 'Vendor → work order → onboarding → pass → attendance → wages → exit, on one worker record.', 'live', 'Live'],
        ['Contractor onboarding', 'Vendor master, nine contract types, documents with expiry, vendor login on IC approval, sub-vendors.', 'live', 'Live · types configured'],
        ['Statutory compliance', 'PF and ESI challans matched per worker, sampled UAN checks, licences, Labour Code registers, minimum wage.', 'live', 'Live'],
        ['Attendance and deployment', 'Biometric, card and PDA devices, live headcount, shifts, roster rules, float-pool replacement.', 'live', 'Live · float criteria configured'],
        ['Documents and workflows', 'Document vault with expiry; approval chains by location, vendor, department and role.', 'mix', 'Live · HMIL chains configured'],
        ['Invoicing and payments', 'Work-order bills against verified attendance, OT inside the cycle, reimbursements, gratuity.', 'live', 'Live'],
        ['Dashboards, MIS, analytics', 'Embedded dashboards, drill-down to the worker, scheduled reports, Ask goBetter AI.', 'mix', 'Live · Ask AI pilot'],
        ['ERP and HRMS integration', 'SAP and HRMS by API or file, device integration, SSO.', 'cfg', 'Configured with HMIL IT'],
        ['Security and privacy', 'ISO 27001, SOC 2, DPDPA-aligned processing, India hosting, role-based access, audit log.', 'live', 'Live · pack on request'],
        ['Implementation', '6–8 weeks of configuration after selection; year-end go-live as discussed.', 'cfg', 'Plan on slide 35'],
        ['Support', 'Named CSM, L1–L3, worker helpdesk in their language, Labour Code updates as configuration.', 'live', 'Live'],
        ['Commercials', 'Per active worker per month, devices itemised, no one-time licence purchase.', 'cfg', 'On the commercials slide'],
        ['Hiring (ATS)', 'Openings from work orders, walk-in and WhatsApp sourcing, straight into onboarding.', 'live', 'Live · in the CLMS package'],
      ].map(([a, b, c, d], i) => `<div class="r" style="--d:${0.04 + i * 0.04}s"><i>${String(i + 1).padStart(2, '0')}</i><b>${a}</b><span>${b}</span><em class="${c}">${d}</em></div>`).join('')}
    </div>`),

  hsal: problemSlide({
    id: 'hsal', theme: 'dark', title: 'Salary structures', rail, step: 2, demo: 'Live · structures',
    kick: 'Product features · vendor management · salary structures',
    h2: 'A structure for every vendor, location, department and skill, <em>checked against the minimum wage before it saves.</em>',
    qLabel: P, quote: 'One vendor can supply three departments at one plant on three rates. Rates live in each vendor’s Excel, and a rate under the floor is found at audit.',
    changes: [
      { ic: icons.layers, b: 'Structures per work order.', t: 'Vendor code, sub-vendor, location, department and skill each carry their own structure; one vendor, many structures.' },
      { ic: icons.shield, b: 'Minimum wage as a gate.', t: 'A structure below the state floor for that skill cannot be saved; a revision re-checks every structure it touches.' },
      { ic: icons.card, b: 'Non-CTC reimbursements.', t: 'PPE kits, safety shoes, uniforms and canteen subsidy as reimbursement heads outside CTC, paid through the bill.' },
    ],
    proof: { n: '500K', p: 'contract workers at <b>Reliance</b> are paid on structures configured this way across 3,000+ vendors.' },
    vis: salUI, wide: true,
    foot: 'Configurable structures, vendor codes, sub-vendors, minimum-wage validation and reimbursement heads are live. HMIL’s structures are configured from your rate sheets. Authored view; rates illustrative.',
  }),

  hwf: problemSlide({
    id: 'hwf', theme: 'light', title: 'Access and approvals', rail, step: 3, demo: 'Live · roles and chains',
    kick: 'Product features · documents, workflows and access control',
    h2: 'Access by location, vendor, department and role, <em>and approval chains you change without code.</em>',
    qLabel: P, quote: 'Chennai, Pune and Delhi each approve differently. Access is all or nothing, and every new approval step is a change request.',
    changes: [
      { ic: icons.lock, b: 'Four-way access control.', t: 'Each role sees only its locations, vendors and departments. Vendors see their own workers and sub-vendors, nothing else.' },
      { ic: icons.repeat, b: 'Chains as settings.', t: 'Steps, approvers, conditions (hours, amount, contract type) and escalations set per location in the workflow builder.' },
      { ic: icons.doc, b: 'One document vault.', t: 'Every licence, policy, challan and worker document stored once with expiry and version, retrievable by any approver with access.' },
    ],
    proof: { n: 'BPCL', p: 'runs gate pass issue, renewal and termination as configured approval chains on this platform.' },
    vis: accUI, wide: true,
    foot: 'Role-based access, the workflow builder and the document vault are live. HMIL’s role matrix and chains are set in the design workshop. Authored view.',
  }),

  hfp: problemSlide({
    id: 'hfp', theme: 'dark', title: 'Float pool', rail, step: 7, demo: 'Live · roster agent',
    kick: 'Product features · attendance and deployment · absent worker replacement',
    h2: 'Nine absent at 06:20, eight replaced by 06:34, <em>each by skill, from the vendors’ float pools.</em>',
    qLabel: P, quote: 'When a welder is absent, the supervisor phones the contractor, who sends whoever is free. Skill and hour limits are checked afterwards, if at all.',
    changes: [
      { ic: icons.users, b: 'Vendor-maintained float pools.', t: 'Each vendor keeps its trained standby workers on the system, tagged with skills, certifications and stations.' },
      { ic: icons.chart, b: 'Ranked, inside the rules.', t: 'Candidates ranked on your criteria; anyone uncertified or near the weekly or quarterly hour limit is left out.' },
      { ic: icons.zap, b: 'Notified, confirmed, logged.', t: 'The worker confirms on the app; vendor and supervisor are told; every replacement is on record for billing.' },
    ],
    proof: { n: 'Minutes', p: 'for shortfall management at <b>Reliance Retail</b> on this roster engine, down from hours.' },
    vis: fpUI, wide: true,
    foot: 'Roster, standby pools and the rostering and backfill agent are live. HMIL’s ranking criteria and notification rules are configured. Authored view; names illustrative.',
  }),

  hai: plainSlide('hai', 'darker', 'The AI layer',
    'Product features · the AI layer on top of the CLMS',
    'Ask in plain words, let agents do the rostering and checking, <em>and see every record checked, not a sample.</em>',
    `<div class="tel-body" style="grid-template-columns:minmax(0,.5fr) minmax(0,.5fr);align-items:start">
      <div class="tel-vis">${askUI}</div>
      <div>
        <div class="tel-agents" style="grid-template-columns:1fr 1fr">
          <div class="ag2" style="--d:.15s"><h4>Ask goBetter AI <span class="st2 beta">Pilot</span></h4><p>Questions in English, Tamil or Hindi over your own CLMS data. Every number links to the records behind it.</p></div>
          <div class="ag2" style="--d:.23s"><h4>Compliance checks <span class="st2 live">Live</span></h4><p>Every licence, challan, wage line and punch checked against the rules each cycle. Blocks what breaks a rule.</p></div>
          <div class="ag2" style="--d:.31s"><h4>Roster and backfill <span class="st2 live">Live</span></h4><p>Drafts the week inside every rule and refills absences from float pools. The supervisor approves.</p></div>
          <div class="ag2" style="--d:.39s"><h4>Challan agent <span class="st2 beta">Beta</span></h4><p>Works the gaps the challan check raises with each vendor until they close.</p></div>
          <div class="ag2" style="--d:.47s"><h4>Worker helpdesk <span class="st2 live">Live</span></h4><p>Answers pay, OT and shift questions in the worker’s language, 24/7.</p></div>
          <div class="ag2" style="--d:.55s"><h4>Onboarding agent <span class="st2 live">Live</span></h4><p>WhatsApp in Tamil or Marathi: consent, Aadhaar, documents, induction.</p></div>
        </div>
        <div class="foot" style="margin-top:12px">Agents run on our infrastructure in India with PII masking; no training on your data; every agent action is on the audit log like a user’s.</div>
      </div>
    </div>`, { demo: 'Shown in the demo', glow: true }),

  hint: plainSlide('hint', 'light', 'Integrations',
    'Product features · integration with ERP, HRMS and your hardware',
    'SAP stays the system for orders and payments, your HRMS for employees. <em>goBetter runs the contract worker and feeds both.</em>',
    `<div class="tel-body" style="grid-template-columns:minmax(0,.38fr) minmax(0,.62fr);align-items:center">
      <div class="tel-say">
        <div class="blk"><div class="lbl">How it fits</div><ul>
          <li><span class="ic">${svg(icons.plug)}</span><span><b>APIs and files, both ways.</b> REST APIs and scheduled files for SAP and HRMS; the interface list is agreed with HMIL IT in week 1.</span></li>
          <li><span class="ic">${svg(icons.layers)}</span><span><b>One owner per object.</b> No double entry: each record has one system of record and flows from there.</span></li>
          <li><span class="ic">${svg(icons.cam)}</span><span><b>Your devices stay.</b> Biometric, card, turnstile and PDA swipes come in through device integration, queued offline when the network drops.</span></li>
        </ul></div>
        <div class="proof"><div class="n">BPCL</div><p>runs vendors, contracts and work orders from <b>SAP</b> as master on this platform.</p></div>
      </div>
      <div class="tel-vis">${hmArch}</div>
    </div>`, { demo: 'Configured with HMIL IT' }),

  hsec: plainSlide('hsec', 'light', 'Security and privacy',
    'Product features · information security and data privacy',
    'Aadhaar, biometrics and wages for every contract worker. <em>What we can state today, and what the security pack covers.</em>',
    `<div class="tel-sec">
      <div class="col">
        <div class="lbl">What we can state today</div>
        <div class="row"><b>ISO 27001 · SOC 2</b><span>Certificates and the SOC 2 report go to HMIL InfoSec with the security pack.</span></div>
        <div class="row"><b>DPDPA-aligned processing</b><span>Data processing agreement, consent per purpose in the worker’s language, retention schedule, deletion on exit evidenced against register-retention duties.</span></div>
        <div class="row"><b>Hosted in India</b><span>Worker data, biometrics and documents stay in Indian regions.</span></div>
        <div class="row"><b>Role-based access, full audit log</b><span>Access by location, vendor, department and role; every view and edit logged and exportable.</span></div>
        <div class="row"><b>Aadhaar handled properly</b><span>eKYC through a UIDAI-licensed partner; Aadhaar masked on every screen; offline XML as an option.</span></div>
        <div class="row"><b>AI behind guardrails</b><span>PII masked before any model, models hosted in India, no training on your data.</span></div>
      </div>
      <div class="col pack">
        <div class="lbl">What the security pack covers · for InfoSec review</div>
        <div class="row"><b>Architecture and tenant isolation</b><span>How HMIL’s data is separated from other clients, and vendors from each other.</span></div>
        <div class="row"><b>Encryption and keys</b><span>In transit and at rest; key management; device-to-cloud traffic.</span></div>
        <div class="row"><b>Biometric storage and deletion</b><span>What is stored, for how long, and how deletion is evidenced.</span></div>
        <div class="row"><b>SSO, VAPT, incident response</b><span>SAML or Azure AD sign-in, the latest external test summary, breach-notification commitment.</span></div>
        <div class="row"><b>Backup, DR and exit</b><span>Backup schedule, recovery approach, full export and a deletion certificate if you stop.</span></div>
      </div>
    </div>`, { demo: 'Pack on request' }),

  himp: plainSlide('himp', 'light', 'Implementation',
    'Product features · implementation methodology and timeline',
    'Configured in six to eight weeks after selection, <em>live by year-end as discussed, one location wave at a time.</em>',
    `<div>
      <div class="tel-plan">
        <div class="wk" style="--d:.15s"><div class="w">Weeks 1–2</div><h4>Design</h4><ul><li>Workshops on access, approval chains and reports</li><li>Contract types, salary structures, rate sheets</li><li>SAP, HRMS and device interface list with HMIL IT</li><li>Security pack review with InfoSec</li></ul><div class="out">Signed configuration workbook</div></div>
        <div class="wk" style="--d:.3s"><div class="w">Weeks 3–6</div><h4>Configure and integrate</h4><ul><li>Masters: locations, departments, vendors, work orders</li><li>Workflows, roles, float-pool criteria, OT rules by state</li><li>Interfaces built and tested; devices connected</li><li>Any custom development, scoped in writing</li></ul><div class="out">HMIL tenant ready for testing</div></div>
        <div class="wk" style="--d:.45s"><div class="w">Weeks 7–8</div><h4>Test and train</h4><ul><li>UAT with HR, Security, Finance and vendors</li><li>Vendor onboarding and portal training</li><li>Admin and approver training, Tamil and Marathi material for workers</li><li>Data migration of active workers</li></ul><div class="out">UAT sign-off</div></div>
        <div class="wk" style="--d:.6s"><div class="w">Go-live</div><h4>Location waves</h4><ul><li>Wave 1: Chennai plants and port</li><li>Wave 2: Talegaon and Pune warehouse</li><li>Wave 3: Gurugram, Delhi and Hyderabad</li><li>Hypercare for one full pay cycle per wave</li></ul><div class="out">Year-end, ± 1–2 weeks</div></div>
      </div>
      <div class="tel-band light"><span class="bl">Who brings what</span><div class="two three"><div><h5>HMIL</h5><p>A project owner in HR, plant HR and Security leads per location, rate sheets and work orders, IT contacts for SAP, HRMS and devices, InfoSec for the pack.</p></div><div><h5>BetterPlace</h5><p>A named project manager and solution consultant, configuration, interfaces, vendor and admin training, data migration, a weekly review.</p></div><div><h5>PeopleStrong</h5><p>Our partner on this bid: HRMS-side integration and account governance alongside us.</p></div></div></div>
    </div>`),

  hsup: plainSlide('hsup', 'dark', 'Support',
    'Product features · customer support and post-implementation services',
    'After go-live you keep a named team, <em>and Labour Code changes arrive as configuration, not projects.</em>',
    `<div class="hy-sup">
      <div class="c" style="--d:.1s"><div class="k">Named team</div><h4>Customer success manager</h4><p>One owner for HMIL: monthly review of adoption, compliance gaps and vendor performance; quarterly business review.</p></div>
      <div class="c" style="--d:.18s"><div class="k">L1</div><h4>Helpdesk for users and vendors</h4><p>Ticket, email and phone for HR, Security and vendors. Workers get a helpdesk in Tamil, Marathi or Hindi on the app.</p></div>
      <div class="c" style="--d:.26s"><div class="k">L2</div><h4>Functional consultants</h4><p>Configuration changes: new work orders, chains, structures, reports, roles.</p></div>
      <div class="c" style="--d:.34s"><div class="k">L3</div><h4>Engineering</h4><p>Product defects, interfaces and devices, with root-cause notes.</p></div>
      <div class="c" style="--d:.42s"><div class="k">Updates</div><h4>Labour Code and state rules</h4><p>New central or state rules shipped as configuration; release notes before each release.</p></div>
      <div class="c" style="--d:.5s"><div class="k">Hypercare</div><h4>First pay cycle per wave</h4><p>Daily stand-up with plant HR until the first month closes cleanly.</p></div>
    </div>
    <div class="foot" style="margin-top:12px">Response and resolution times are as written in the MSA.</div>`),

  hcom: plainSlide('hcom', 'light', 'Commercials',
    'Commercials · one subscription per active user, all modules included',
    'All modules, 10,000 users, paid annually upfront: <em>\u20b960 per user per month, 40% below rack.</em>',
    `<div class="hy-price">
      <div class="lad">
        ${[
          ['rack', 'Rack rate', 'goBetter CLMS, per user per month', '\u20b9100', '\u20b91.20 Cr a year'],
          ['d', 'All-modules discount', 'HMIL takes the full CLMS', '\u2212 \u20b920', '20%'],
          ['d', 'Volume discount', 'Minimum guarantee of 10,000 users', '\u2212 \u20b915', '15%'],
          ['net', 'HMIL price, billed monthly', 'per user per month', '\u20b965', '\u20b978 L a year'],
          ['d', 'Annual-upfront discount', 'Year paid in advance', '\u2212 \u20b95', 'a further 7.7%'],
          ['best', 'HMIL price, annual upfront', 'per user per month', '\u20b960', '\u20b972 L a year'],
        ].map(([c, a, b, v, n], i) => `<div class="st ${c}" style="--d:${0.08 + i * 0.07}s"><div><b>${a}</b><span>${b}</span></div><em>${v}</em><small>${n}</small></div>`).join('')}
      </div>
      <div class="opts">
        <div class="op" style="--d:.5s"><span class="k">Option 1 \u00b7 monthly billing</span><div class="n">\u20b965<small> /user/month</small></div><p><b>\u20b96,50,000 a month</b> for 10,000 users, \u20b978,00,000 a year. Billed on the higher of 10,000 or users active.</p></div>
        <div class="op hot" style="--d:.58s"><span class="k">Option 2 \u00b7 annual upfront \u00b7 recommended</span><div class="n">\u20b960<small> /user/month</small></div><p><b>\u20b972,00,000 a year</b>, in advance. Saves \u20b96 L a year against monthly and \u20b948 L against rack.</p></div>
        <div class="op sm" style="--d:.66s"><span class="k">Also in the order form</span><p>One-time set-up \u20b99,00,000 \u00b7 custom development scoped in writing at \u20b915,000 per person-day \u00b7 devices quoted separately \u00b7 3-year term, rates held \u00b7 amounts exclude GST.</p></div>
      </div>
    </div>`),

  hdemo: {
    id: 'hdemo', theme: 'darker', title: 'Demo',
    html: `<div class="glow"></div>
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">Product demo · 10 minutes · end to end</span><h2>Now the product, built around HMIL: <em>Chennai, Talegaon and Delhi on one screen.</em></h2></div><span class="demo">Live · switch to the product</span></div>
      <div class="hy-demo">
        <div class="url"><span class="l">Open on any browser</span><a href="${PROTO}" target="_blank" rel="noopener">betterplace.co.in/studio/hyundai</a><p>Clickable for every panel member after the call. Demo data shaped like HMIL; not HMIL figures.</p></div>
        <ol class="path">
          ${[
            ['Command Centre', 'All locations, then Chennai Plant 1, a vendor, one worker'],
            ['Vendors &amp; Work Orders', 'Contractor onboarding, work orders, structures'],
            ['Onboard &amp; Gate', 'Bulk upload, WhatsApp in Tamil, five-condition pass'],
            ['Roster &amp; Float Pool', 'Absent at shift start, replaced by skill'],
            ['Compliance Centre', 'PF, ESI, licences, registers, minimum wage'],
            ['Attendance &amp; Shifts', 'Shift set-up and rules by state'],
            ['Invoicing &amp; Payments', 'Bill against swipes, challan to wage'],
            ['Ask goBetter AI', 'A question from the panel, answered'],
            ['Access &amp; Integrations', 'Roles, chains, SAP and HRMS'],
          ].map(([a, b], i) => `<li style="--d:${0.1 + i * 0.06}s"><span>${i + 1}</span><b>${a}</b><small>${b}</small></li>`).join('')}
        </ol>
      </div>
    </div>`,
  },
}


/* ---------- opening 10 minutes: who we are and the scale we run (Nov 23 restructure) ---------- */
const cIc: Record<string, string> = {"gate": "<path d=\"M4 21V5l8-3 8 3v16\"/><path d=\"M9 21v-7h6v7\"/>", "dev": "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M9 17h6\"/>", "clock": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/>", "shield": "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M9 12l2 2 4-4\"/>", "users": "<circle cx=\"9\" cy=\"8\" r=\"3.5\"/><path d=\"M2.5 20c.5-3.5 3.3-5.5 6.5-5.5s6 2 6.5 5.5\"/><circle cx=\"17\" cy=\"9\" r=\"2.5\"/><path d=\"M16 14.5c2.6.2 4.8 1.9 5.3 4.8\"/>", "moon": "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z\"/>", "alert": "<path d=\"M12 3l10 18H2z\"/><path d=\"M12 10v4M12 17.5v.5\"/>", "doc": "<path d=\"M6 2h9l5 5v15H6z\"/><path d=\"M14 2v6h6M9 13h8M9 17h8\"/>", "wallet": "<rect x=\"3\" y=\"6\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3 10h18\"/>", "bolt": "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>", "radar": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 3v2M12 19v2M3 12h2M19 12h2\"/>", "layers": "<path d=\"M12 3l9 5-9 5-9-5z\"/><path d=\"M3 13l9 5 9-5\"/>"}
const tile = (i: string, h: string, p: string, d: number) => `<div class="t" style="--d:${d}s"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${cIc[i]}</svg></span><h4>${h}</h4><p>${p}</p></div>`

Object.assign(extra, {
  hag: plainSlide('hag', 'darker', 'Agenda',
    'Agenda · 40 minutes, in five parts',
    'First the scale we run, then compliance. <em>Then every module on your list, then the product.</em>',
    `<div class="hy-agenda">
      <div class="ag" style="--d:.1s"><div class="t">08 min</div><div><h4>Who we are, and the scale we run</h4><p>BetterPlace in numbers, Reliance (5 lakh+ contract workers) and Bharat Petroleum (20,000+), our clients and the AI layer.</p></div><span class="n">Slides 3–8</span></div>
      <div class="ag" style="--d:.16s"><div class="t">05 min</div><div><h4>Compliance by design</h4><p>Every module as a Labour Code control, rule by rule, your three states’ rules, and the Compliance Centre.</p></div><span class="n">Slides 9–12</span></div>
      <div class="ag" style="--d:.22s"><div class="t">12 min</div><div><h4>Every module on your list</h4><p>Lifecycle, contractor onboarding, statutory monitoring (PF, ESI, Labour Codes), attendance and deployment, documents and workflows, invoicing and payments, dashboards and MIS, ERP and HRMS integration, security and privacy, implementation, support.</p></div><span class="n">Slides 13–37</span></div>
      <div class="ag hot" style="--d:.28s"><div class="t">10 min</div><div><h4>Product demo, end to end</h4><p>A clickable product built for HMIL: Chennai, Talegaon and Delhi on one screen.</p></div><span class="n">Slide 38</span></div>
      <div class="ag" style="--d:.34s"><div class="t">05 min</div><div><h4>Q&amp;A</h4><p>Product, implementation and technical experts on the call. Quotation sent separately, password-protected.</p></div><span class="n">Slide 39</span></div>
    </div>`, { glow: true }),

  hscale: plainSlide('hscale', 'darker', 'The scale we run',
    'Who we are · the scale we run, every month',
    'India’s largest contract workforces already run on goBetter. <em>HMIL would be one more plant network on the same platform.</em>',
    `<div class="hy-scale">
      <div class="hero" style="--d:.1s"><div class="n">5,00,000<em>+</em></div><div class="l">contract workers active every month at Reliance alone, on one platform</div></div>
      <div class="g">
        <div class="c" style="--d:.2s"><div class="n">3,000<em>+</em></div><div class="l">vendors with licences, work orders and challans</div></div>
        <div class="c" style="--d:.26s"><div class="n">4,000<em>+</em></div><div class="l">sites: plants, refineries, stores, depots</div></div>
        <div class="c" style="--d:.32s"><div class="n">20,000<em>+</em></div><div class="l">contract workers at Bharat Petroleum</div></div>
        <div class="c" style="--d:.38s"><div class="n">15M<em>+</em></div><div class="l">worker profiles on BetterPlace</div></div>
        <div class="c" style="--d:.44s"><div class="n">1,000<em>+</em></div><div class="l">enterprises on the platform</div></div>
        <div class="c" style="--d:.5s"><div class="n">11 <em>yrs</em></div><div class="l">since 2015 · 4 markets · India, Malaysia, Singapore, Indonesia</div></div>
      </div>
    </div>
    <div class="foot hy-cfoot">Client figures are client-reported; case notes and reference calls on request.</div>`, { glow: true }),

  hrel: plainSlide('hrel', 'dark', 'Case study · Reliance',
    'Case study · Reliance Industries · Retail, Jio, Oil-to-chemicals',
    'Reliance’s entire contract workforce runs on goBetter. <em>Every gate, punch, wage and challan.</em>',
    `<div class="hy-cs">
      <div class="side">
        <img class="lg" src="assets/logo/x-reliance.png" alt="Reliance"/>
        <div class="big" style="--d:.1s"><div class="n">5,00,000<em>+</em></div><div class="l">contract workers active every month</div></div>
        <div class="mini"><div><b>3,000+</b><span>vendors</span></div><div><b>4,000+</b><span>sites</span></div><div><b>14</b><span>manufacturing facilities*</span></div></div>
        <div class="res"><div><b>−90%</b><span>payroll leakage</span></div><div><b>−80%</b><span>vendor non-compliance</span></div><div><b>7×</b><span>faster rule changes</span></div></div>
        <small>Results client-reported after go-live, against their prior year. *Reliance-reported footprint.</small>
      </div>
      <div class="tiles">
        ${tile('gate', 'Gate pass management', 'Passes issued only with licence, work order, verification and induction in place.', .1)}
        ${tile('dev', 'Physical device integration', 'Face and biometric devices at plant gates, incl. O2C. Offline, then sync.', .14)}
        ${tile('clock', 'Attendance to payroll', 'Every punch flows into shifts, OT and the wage sheet. No re-keying.', .18)}
        ${tile('shield', '100% compliance monitoring', 'Every record checked every cycle: compliant at every point in time.', .22)}
        ${tile('users', '3,000+ vendors, one system', 'Onboarding, licences, work orders, PF and ESIC matched per worker.', .26)}
        ${tile('moon', 'Hibernation flows', 'Inactive workers parked, not deleted; back with their verified record.', .3)}
        ${tile('alert', 'Absconding workflows', 'No-shows flagged after set days; access revoked; settlement started.', .34)}
        ${tile('doc', 'Audit reports in one click', 'Muster, wage, OT and contractor registers for any site and period.', .38)}
        ${tile('wallet', 'Payroll leakage control', 'Paid only on verified attendance; ghosts and duplicates caught.', .42)}
      </div>
    </div>`),

  hbpc: plainSlide('hbpc', 'dark', 'Case study · Bharat Petroleum',
    'Case study · Bharat Petroleum · Refineries and plants',
    'At Bharat Petroleum, every contract worker at the gate runs on our CLMS. <em>And the count inside is always live.</em>',
    `<div class="hy-cs bp">
      <div class="side">
        <div class="ctr" style="--d:.1s">
          <span class="live"><i></i>Live workforce counter · illustrative screen</span>
          <div class="cn">19,384</div><div class="cl">inside BPCL refineries and plants right now</div>
          <div class="sp"><div><b>16,920</b><span>contract</span></div><div><b>2,104</b><span>on-roll</span></div><div><b>360</b><span>visitors</span></div></div>
          ${[['Kochi refinery', 92, '7,140'], ['Mumbai refinery', 88, '6,812'], ['Bina refinery', 38, '2,906'], ['LPG plants and depots', 33, '2,526']].map(([g, w, n]) => `<div class="gt"><span>${g}</span><span class="bar"><i style="width:${w}%"></i></span><em>${n}</em></div>`).join('')}
        </div>
        <div class="mini"><div><b>20,000+</b><span>contract workers on goBetter</span></div><div><b>3</b><span>refineries: Mumbai, Kochi, Bina*</span></div><div><b>54</b><span>LPG plants, ~80 depots*</span></div></div>
        <small>*BPCL-reported footprint (BRSR FY2024-25), not our deployment count.</small>
      </div>
      <div class="tiles t2">
        <img class="lg" src="assets/logo/x-bpcl.png" alt="Bharat Petroleum"/>
        ${tile('radar', 'Real-time workforce counter', 'Contract, on-roll and visitors inside each gate and unit, any moment.', .1)}
        ${tile('gate', 'Gate pass lifecycle', 'Issue, renew, auto-terminate. A pass lapses after 30 days without a punch.', .16)}
        ${tile('layers', 'SAP as the master', 'Vendors, contracts and work orders flow from SAP. No double entry.', .22)}
        ${tile('dev', 'Devices at the gate', 'Biometric at entry, tied to a valid pass. Offline, then sync.', .28)}
        ${tile('doc', 'Licence and insurance per contract', 'Licence strength and compensation cover checked before deployment.', .34)}
        ${tile('bolt', 'Audit-ready in one click', 'Gate, attendance and contractor registers for any refinery and period.', .4)}
      </div>
    </div>`),

  hcli: plainSlide('hcli', 'dark', 'Clients',
    'Who we are · clients across manufacturing, energy and commerce',
    'Trusted by enterprises that run on frontline people. <em>1,000+ of them.</em>',
    `<div class="hy-cli">
      ${[
        ['x-hindalco.png', 'Hindalco', 'Metals · Aditya Birla', '3× training coverage', 'Shop-floor training app, mandatory completion tracked, 1,000+ workers upskilled.'],
        ['c-yokohama.png', 'Yokohama', 'Tyre manufacturing', 'Plant workforce', 'Frontline workforce on the BetterPlace platform.'],
        ['c-dubai-holding.svg', 'Dubai Holding', 'Real estate and hospitality', 'Workforce operations', 'Frontline workforce on the BetterPlace platform.'],
        ['x-titan.png', 'Titan', 'Retail · Tata group', 'Sales incentives', 'Incentive programme for frontline retail staff.'],
        ['x-amazon.png', 'Amazon', 'E-commerce and logistics', '91% completion', 'Role-based learning across two business units; 222 custom audits.'],
        ['c-zepto.png', 'Zepto', 'Quick commerce · 22 cities', '15,000 workers · 967 sites', 'Face and geo attendance with spoof detection; 40% lower cost.'],
        ['c-meesho.svg', 'Meesho', 'Social commerce', '1.5 lakh workforce', 'Gamified learning; 85% completion, +19.7% week-on-week retention.'],
        ['c-iffco-tokio.svg', 'IFFCO Tokio', 'Insurance', '~30,000 trained by AI', 'Sales teams coached by an AI role-play agent with tone scoring.'],
      ].map(([f, n, k, m, d], i) => `<div class="cc" style="--d:${0.06 + i * 0.05}s"><div class="lw"><img src="assets/logo/${f}" alt="${n}"/></div><span class="k">${k}</span><b>${m}</b><p>${d}</p></div>`).join('')}
    </div>
    <div class="foot hy-cfoot">Outcomes are client-reported. Reference calls with Reliance and BPCL can be arranged for the panel.</div>`),

  happx: plainSlide('happx', 'darker', 'Appendix',
    'Appendix · detail for Q&amp;A',
    'Every area on your list, in detail. <em>Open any of these when a question needs it.</em>',
    `<div class="hy-appx">${['Lifecycle and contract types', 'Attendance rules engine', 'Statutory checks', 'Training', 'Reimbursements'].map((t, i) => `<span style="--d:${0.04 + i * 0.03}s"><i>A${i + 1}</i>${t}</span>`).join('')}</div>`, { glow: true }),
})


/* ---------- compliance by design ---------- */
Object.assign(extra, {
  hcx: plainSlide('hcx', 'darker', 'Compliance by design',
    'Compliance by design · every module is a control',
    'Compliance is not a report we run at month end. <em>It is how every screen in goBetter is built.</em>',
    `<div class="hy-cx">
      <div class="chain">${[
        ['Vendor', 'Licence and licensed strength on file, with expiry'],
        ['Work order', 'Only roles open to contract work; sanctioned headcount'],
        ['Wage structure', 'No rate below minimum wage for the state and skill'],
        ['Onboarding', 'Identity, age, eKYC, consent in the worker’s language'],
        ['Gate pass', 'Five conditions met, or no pass'],
        ['Attendance', 'Daily and weekly hours, rest day, OT with consent at 2×'],
        ['Bill', 'Paid only on verified attendance and approved OT'],
        ['PF and ESI', 'Every challan matched to every worker billed'],
        ['Registers', 'Any register, any day; data for the annual return'],
      ].map(([h, p], i) => `<div class="st" style="--d:${0.06 + i * 0.05}s"><i>${String(i + 1).padStart(2, '0')}</i><b>${h}</b><span>${p}</span></div>`).join('')}</div>
      <div class="pil">
        <div class="pl" style="--d:.55s"><em class="b">Prevent</em><h4>Stopped before it happens</h4><p>A pass over licence strength, a rate below the floor, a shift over the daily limit: the product refuses them at entry.</p></div>
        <div class="pl" style="--d:.62s"><em class="f">Detect</em><h4>Every record, every cycle</h4><p>Rules-based checks run on 100% of workers, swipes, wages and challans each cycle, not a sample at audit time.</p></div>
        <div class="pl" style="--d:.69s"><em class="p">Prove</em><h4>Ready for any inspector</h4><p>Registers, challans, licences and the approval trail behind every pass and payment, in one click.</p></div>
      </div>
    </div>
    <div class="foot hy-cfoot">The software flags and blocks as you configure it; HMIL decides, and legal interpretation stays with you and your advisors.</div>`, { glow: true }),

  hstate: plainSlide('hstate', 'dark', 'State rules engine',
    'Compliance by design · one CLMS, three states’ rules',
    'Chennai, Talegaon and Delhi follow different state rules. <em>Each plant runs on its own rule set, automatically.</em>',
    `<div class="hy-st">
      <div class="stack">
        ${[
          ['Labour Codes and central rules', 'Wages, OSH, Social Security: the floor for every plant'],
          ['State rules', 'Tamil Nadu · Maharashtra · Haryana / Delhi, as notified'],
          ['HMIL policy', 'Your own limits; they can only be stricter'],
          ['Plant, shop and shift', 'Shift patterns, holidays and approvers per location'],
        ].map(([h, p], i) => `<div class="ly" style="--d:${0.08 + i * 0.07}s;--w:${100 - i * 7}%"><b>${h}</b><span>${p}</span></div>`).join('')}
        <div class="out">
          <div><em class="b">Block</em><span>Pass over licence strength · rate below minimum wage · roster over the daily limit</span></div>
          <div><em class="f">Flag</em><span>OT nearing the quarterly cap · challan short · licence expiring in 30 days</span></div>
          <div><em class="i">Inform</em><span>New state notification · minimum-wage revision · holiday list for the year</span></div>
        </div>
      </div>
      <div class="pl3">
        ${[
          ['Chennai', 'Irungattukottai plants', 'Tamil Nadu', ['9 h a day, 48 h a week', 'OT at 2× with consent, inside the state quarterly cap', 'Women at night: consent, transport, batch size (TN rules)', 'TN minimum wage by skill', 'Pongal and state holidays']],
          ['Pune', 'Talegaon', 'Maharashtra', ['Hours and rest day per Maharashtra rules', 'OT at 2× with consent, inside the state cap', 'Maharashtra minimum wage by zone and skill', 'Gudi Padwa and state holidays']],
          ['Delhi NCR', 'Offices and sites', 'Haryana / Delhi', ['Hours and rest day per the notified state rules', 'OT at 2× with consent, inside the state cap', 'State minimum wage by skill', 'State holiday list']],
        ].map(([c, s2, st, rows], i) => `<div class="pc" style="--d:${0.2 + i * 0.08}s"><div class="hd"><b>${c}</b><span>${s2}</span><em>${st}</em></div><ul>${(rows as string[]).map((r) => `<li>${r}</li>`).join('')}</ul></div>`).join('')}
      </div>
    </div>
    <div class="foot hy-cfoot">We configure the rules you and your counsel confirm. When a state notifies new rules, we update the rule set and you approve it before it applies.</div>`),

  hcc: plainSlide('hcc', 'dark', 'Compliance Centre',
    'Compliance by design · the Compliance Centre',
    'One screen tells you where you are exposed today. <em>Before an inspector or a contractor default does.</em>',
    `<div class="hy-cs hy-cc">
      <div class="sc" style="--d:.1s">
        <span class="live"><i></i>Compliance Centre · illustrative screen</span>
        <div class="top"><div><div class="cn">97.8<small>%</small></div><div class="cl">records compliant, all plants, this cycle</div></div>
          <div class="pls">${[['Chennai Plant 1', 98.6], ['Chennai Plant 2', 97.9], ['Talegaon', 96.4], ['Delhi NCR', 97.1]].map(([n, v]) => `<div><span>${n}</span><span class="bar"><i style="width:${(Number(v) - 90) * 10}%"></i></span><em>${v}%</em></div>`).join('')}</div></div>
        <div class="items">${[
          ['b', 'Blocked', 'Vendor C-14 at 150 of 150 licensed workers. New passes held until the licence is amended.'],
          ['f', 'Flag', 'PF challan short for 19 workers, October. Shown before the bill is approved; you decide.'],
          ['f', 'Flag', '42 workers past 80% of the quarterly OT cap. Roster agent moves OT to the float pool.'],
          ['f', 'Flag', 'Safety refresher overdue for 61 workers across 4 contractors.'],
          ['i', 'Inform', 'Minimum-wage revision notified. 212 rates updated in the price master, awaiting approval.'],
        ].map(([c, t, d]) => `<div class="it"><em class="${c}">${t}</em><span>${d}</span></div>`).join('')}</div>
      </div>
      <div class="tiles t2">
        ${tile('radar', 'Checks on 100% of records', 'Every worker, swipe, wage line and challan checked against your rules every cycle. Exceptions go to the owner, with the evidence.', .14)}
        ${tile('doc', 'Registers in one click', 'Contractors, workers per contractor, muster roll, wages, overtime, wage slips: any plant, any period.', .2)}
        ${tile('shield', 'Contractor compliance score', 'Licences, challans, wages on time and documents roll into a score that drives renewals.', .26)}
        ${tile('layers', 'Annual return, prepared', 'The data for the principal employer’s annual electronic return, built from the same records.', .32)}
        ${tile('alert', 'Liability in view', 'Where a contractor defaults on wages or PF, the exposure you carry is shown before you pay.', .38)}
        ${tile('bolt', 'Audit trail on every action', 'Who approved which pass, rate, OT and bill, and when. Nothing changes without a record.', .44)}
      </div>
    </div>
    <div class="foot hy-cfoot">Live in the demo: the Compliance Centre tab. Figures illustrative.</div>`),
})


Object.assign(extra, {
  hwa: problemSlide({
    id: 'hwa', theme: 'dark', title: 'Worker onboarding · WhatsApp', rail, step: 3, demo: 'Live · WhatsApp onboarding',
    kick: 'Product features · contractor onboarding · self-onboarding on WhatsApp, in their language',
    h2: 'Hired today, onboarded on WhatsApp by evening, <em>at the plant gate the next morning.</em>',
    qLabel: P, quote: 'Joiners queue at the time office with photocopies. Half the forms come back incomplete.',
    changes: [
      { ic: icons.zap, b: 'The contractor’s request triggers it.', t: 'Offer, consent and details on WhatsApp, prefilled from the contractor or hiring.' },
      { ic: icons.lang, b: 'Their language.', t: 'Tamil, Hindi, Marathi or any of 35, switched at any step.' },
      { ic: icons.mic, b: 'Stuck? Our agent calls.', t: 'An AI voice agent walks them through the step. Aadhaar OCR and UAN fetch on the way.' },
    ],
    proof: { n: '45 min', p: 'average onboarding at <b>Zepto</b> on this flow, documents to certificate.' },
    vis: waPhones(HM), wide: true,
  }),
})


/* ---------- share (read-through) version ---------- */
Object.assign(extra, {
  hsum: plainSlide('hsum', 'darker', 'In one page',
    'In one page · why goBetter for HMIL',
    'goBetter runs India’s largest contract workforces. <em>It is built around compliance, and configured for your three states.</em>',
    `<div class="hy-sum">
      ${[
        ['5 lakh<em>+</em>', 'Proven at plant scale', 'Contract workers a month at Reliance on one platform; 20,000+ at Bharat Petroleum’s refineries and plants.'],
        ['100<em>%</em>', 'Compliance built in', 'Labour Codes, PF, ESI, minimum wage and state rules are controls in every module. Every record checked, every cycle.'],
        ['13<em>/13</em>', 'Your list, covered', 'Structures by vendor, location, department and skill; float pools; PF and ESI validation; access by role. Live or configured.'],
        ['6–8 <em>wks</em>', 'To go live', 'Configuration after selection, Chennai first, then Talegaon and Delhi, for the year-end go-live you asked for.'],
      ].map(([n, h, p2], i) => `<div class="c" style="--d:${0.1 + i * 0.08}s"><div class="n">${n}</div><h4>${h}</h4><p>${p2}</p></div>`).join('')}
    </div>
    <div class="hy-sumlogos"><span>Running on BetterPlace</span>${['x-reliance.png', 'x-bpcl.png', 'x-hindalco.png', 'c-yokohama.png', 'c-dubai-holding.svg', 'x-titan.png', 'x-amazon.png', 'c-zepto.png'].map((f) => `<img src="assets/logo/${f}" alt=""/>`).join('')}</div>
    <div class="foot hy-cfoot">Client figures are client-reported. The clickable product is at betterplace.co.in/studio/hyundai.</div>`, { glow: true }),

  happx2: plainSlide('happx2', 'darker', 'Appendix',
    'Appendix · every area in detail',
    'The detail behind each area on your list. <em>For your compliance, HR, IT and InfoSec teams.</em>',
    `<div class="hy-appx">${['The Labour Codes, rule by rule', 'State rules engine: TN, MH, NCR', 'Lifecycle and contract types', 'Vendor master', 'Work orders', 'Gate passes', 'Contractor scorecard', 'Statutory checks', 'Attendance capture', 'Shifts', 'Attendance rules', 'OT and billing', 'Reimbursements', 'Training', 'Live dashboard', 'Security and privacy', 'Support'].map((t, i) => `<span style="--d:${0.04 + i * 0.03}s"><i>A${i + 1}</i>${t}</span>`).join('')}</div>`, { glow: true }),
})

const sharePatches: Record<string, (s: SlideDef) => SlideDef> = {
  hfm: (s) => ({ ...s, html: s.html.replace('Plan on slide 35', 'Plan on slide 19') }),
  hcc: (s) => ({ ...s, html: s.html.replace('Live in the demo: the Compliance Centre tab. Figures illustrative.', 'Try it: betterplace.co.in/studio/hyundai, Compliance Centre tab. Figures illustrative.') }),
  hdemo: (s) => ({ ...s, title: 'Try the product', html: s.html
    .replace('Product demo · 10 minutes · end to end', 'The product · clickable, for your whole team')
    .replace('Now the product, built around HMIL: <em>Chennai, Talegaon and Delhi on one screen.</em>', 'Click through the product built around HMIL: <em>Chennai, Talegaon and Delhi on one screen.</em>')
    .replace('<span class="demo">Live · switch to the product</span>', '')
    .replace('Clickable for every panel member after the call.', 'Open it on any browser; no login.') }),
  hn1: (s) => ({ ...s, html: s.html.replace('Your questions now. <em>Then three things we can start this week.</em>', 'Three things we can start <em>this week.</em>') }),
}

const SHARE_ORDER = [
  'hy1', 'hsum', 'hy2a', 'hscale', 'hrel', 'hbpc', 'hcli',
  'hcx', 'hcc',
  'hfm', 'hsal', 'hv3', 'hwa', 'hfp', 'hp1', 'hwf',
  'hai', 'hint', 'himp', 'hcom', 'hdemo', 'hn1',
  'happx2', 'hy2c', 'hstate', 'hy3', 'hv1', 'hv2', 'hv4', 'hv5', 'hs1', 'ha1', 'ha2', 'ha3', 'ha4', 'hr1', 'ht1', 'hd1', 'hsec', 'hsup',
]

/* ---------- patches to the base slides ---------- */
const patches: Record<string, (s: SlideDef) => SlideDef> = {
  hy1: (s) => ({ ...s, html: s.html
    .replace('BetterPlace × Hyundai Motor India · October 2026', 'BetterPlace × HMIL · Evaluation panel · 23 Nov 2026')
    .replace('Every contractor, every pass, every swipe, <em>on one CLMS for every plant and site across India.</em>', 'Every contractor, every pass, every swipe, <em>on one AI-native CLMS for Chennai, Pune and Delhi.</em>')
    .replace('Vendors and work orders, onboarding and gate passes, contractor scorecards, attendance, overtime, billing, statutory checks and the live dashboard. Shown on the software that runs 500,000 contract workers today.', 'Vendors and work orders, onboarding and gate passes, attendance and float pools, statutory compliance, invoicing and dashboards, with AI that answers, rosters and checks every record. On the platform that runs 5 lakh+ contract workers a month at Reliance.')
    .replace('<span>CLMS demo · HR and Security</span><span>Slides + live software</span>', '<span>Overview · Features · Demo · Q&amp;A</span><span>Slides + clickable product</span>') }),
  hy2a: (s) => ({ ...s, title: 'Company profile', html: s.html
    .replace('Credentials · 1 of 2', 'Overview · company profile, products, financials')
    .replace('Ten years on the frontline, 25 million worker profiles, <em>built for your scale.</em>', 'Eleven years on the frontline, 15 million worker profiles, <em>built for your scale.</em>')
    .replace('<div class="n">25M<em>+</em></div><div class="l">Verified worker profiles</div>', '<div class="n">15M<em>+</em></div><div class="l">Worker profiles on the platform</div>')
    .replace('<div class="n">8</div><div class="l">Markets · India, SEA, GCC</div>', '<div class="n">4</div><div class="l">Markets · India, Malaysia, Singapore, Indonesia</div>')
    .replace('<div class="n">500K</div><div class="l">Contract workers a month at Reliance</div>', '<div class="n">5 lakh<em>+</em></div><div class="l">Contract workers a month at Reliance</div>')
    .replace('<b>2026</b><span>AI Labs. Agents that onboard, induct, roster and reconcile, inside the same record.</span>', '<b>2026</b><span>AI-native CLMS. Agents that roster, reconcile and answer questions on the same record. Products: goBetter CLMS and HRMS, skillBetter, Verify, AI Labs, staffing.</span>') }),
  hy2: (s) => ({ ...s, title: 'CLMS experience and clientele', html: s.html
    .replace('Customer impact · whole contract workforces, run on BetterPlace', 'Overview · CLMS experience and clientele, manufacturing and energy first')
    .replace('<div class="big">500K<small>contract workers active every month</small></div>', '<div class="big">5 lakh+<small>contract workers active every month</small></div>')
    .replace('<div class="big">Every<small>contract worker at the gate</small></div>', '<div class="big">20,000+<small>contract workers at refineries and plants</small></div>')
    .replace('<span class="lbl">Also on the platform</span>', '<span class="lbl">Manufacturing and enterprise clients</span>')
    .replace('<img src="assets/logo/c-basf.png" alt="BASF"/><img src="assets/logo/c-tcs.png" alt="TCS"/><img src="assets/logo/c-accenture.png" alt="Accenture"/><img src="assets/logo/c-amazon.jpg" alt="Amazon"/><img src="assets/logo/c-titan.png" alt="Titan"/><img src="assets/logo/c-jll.png" alt="JLL"/><img src="assets/logo/c-ibm.png" alt="IBM"/>',
      '<img src="assets/logo/c-hindalco.png" alt="Hindalco"/><img src="assets/logo/c-yokohama.png" alt="Yokohama" style="height:22px"/><img src="assets/logo/c-tata.png" alt="Tata"/><img src="assets/logo/c-titan.png" alt="Titan"/><img src="assets/logo/c-basf.png" alt="BASF"/><img src="assets/logo/c-amazon.jpg" alt="Amazon"/><img src="assets/logo/c-jll.png" alt="JLL"/>')
    .replace('<div class="tel-logos">', '<div class="foot hy-cfoot">Outcome numbers are client-reported against their own prior year; case notes on request. Reference calls with Reliance and BPCL can be arranged.</div><div class="tel-logos">') }),
  hy2c: (s) => ({ ...s, title: 'The Labour Codes, rule by rule', html: s.html.replace('The rules your records must prove · the new labour codes and state rules', 'Compliance by design · the Labour Codes, rule by rule').replace('Every pass, hour and rupee now has to satisfy the labour codes. <em>The software keeps you inside them.</em>', 'We know every rule your contract workforce must meet. <em>Each one is a control in the product.</em>') }),
  hy3: (s) => ({ ...s, html: s.html
    .replace('One platform for every kind of contractor at your plants', 'Product features · the contract-labour lifecycle, for nine contract types')
    .replace('<b>Vendor management first</b>: vendors, work orders, onboarding, gate passes, scorecard. Then <b>attendance</b>, shifts, overtime and billing, statutory and the dashboard. The yellow <b>▶ Live</b> marker is where we switch to the software.', 'The lifecycle runs <b>vendor → work order → structure → onboarding → pass → attendance → float pool → bill → statutory → dashboard</b>. The yellow <b>▶ Live</b> marker on each slide is the screen we open in the demo.') }),
  hp1: (s) => ({ ...s, html: s.html
    .replace('Each deposit is compared with the dues computed from that worker’s verified attendance and wages. Not paid, short paid, wrong UAN and late deposits are flagged.', 'Each deposit is compared with the dues from that worker’s verified attendance and wages, and a sample of UANs is checked against EPFO. Not paid, short paid, wrong UAN and late deposits are flagged.')
    .replace('Challan OCR and worker-by-worker PF and ESI reconciliation are live; payroll, PT and LWF compliance too. Figures illustrative.', 'Challan OCR and worker-by-worker PF and ESI reconciliation are live; sampled UAN verification via EPFO and PT and LWF compliance too. Figures illustrative.') }),
  hn1: (s) => ({ ...s, title: 'Q&A and next steps', html: s.html
    .replace('<span class="kick">Next step</span>', '<span class="kick">Q&amp;A · and what happens next</span>')
    .replace('Start with one plant and three contractors, <em>and decide on your own data.</em>', 'Your questions now. <em>Then three things we can start this week.</em>')
    .replace('<h4>Pick one plant or site and three contractor types</h4><p>Manpower, AMC and construction show every chain: passes, attendance, billing and statutory.</p>', '<h4>Hands-on access for your operations and compliance teams</h4><p>As promised in the MoM: logins to a goBetter demo environment for Yogesh and the team, plus the clickable product at betterplace.co.in/studio/hyundai.</p>')
    .replace('<h4>A working session with HR and Security</h4><p>We configure the nine contract types, the seven-step chain, forms and the price master from it.</p>', '<h4>Reference calls with Reliance and BPCL</h4><p>Speak to the teams who run their contract workforce on goBetter, at 5 lakh+ and 20,000+ workers.</p>')
    .replace('<h4>Security and legal review this week</h4><p>ISO 27001 and SOC 2 reports, the draft DPA and the hosting model to your InfoSec team.</p>', '<h4>Design workshop and security pack</h4><p>Access, approval chains and structures for Chennai, Pune and Delhi; ISO 27001 and SOC 2 reports and the draft DPA to InfoSec.</p>')
    .replace(encodeURIComponent('Hyundai Motor India · CLMS pilot'), encodeURIComponent('Hyundai Motor India · CLMS evaluation'))
    .replace('Every contractor, every pass, every swipe on one CLMS. The software you saw today is what the pilot runs on.', 'Every contractor, every pass, every swipe on one AI-native CLMS. The product you clicked through today is the one HMIL would run on, configured for you.') }),
}

const featKick = (s: SlideDef) => ({ ...s, html: s.html.replace(/<span class="kick">(?!Product features)/, '<span class="kick">Product features · ') })

const ORDER = [
  // 1 · who we are and the scale we run
  'hy1', 'hag', 'hy2a', 'hscale', 'hrel', 'hbpc', 'hcli', 'hai',
  // 2 · compliance by design
  'hcx', 'hy2c', 'hstate', 'hcc',
  // 3 · every area on HMIL's list, in their order
  'hfm', 'hy3', 'hv1', 'hv2', 'hsal', 'hv3', 'hwa', 'hv4', 'hv5',
  'hs1', 'hp1',
  'ha1', 'ha2', 'ha3', 'hfp',
  'hwf',
  'ha4', 'hr1', 'ht1',
  'hd1', 'hint', 'hsec', 'himp', 'hsup', 'hcom',
  // 4 · demo and Q&A
  'hdemo', 'hn1',
]
const FEATURE_IDS = new Set(['hv1', 'hv2', 'hv3', 'hv4', 'hv5', 'ha1', 'ha2', 'ha4', 'hp1', 'ht1', 'hr1', 'hd1'])
const byId = Object.fromEntries(baseSlides.map((s) => [s.id, s])) as Record<string, SlideDef>

const build = (order: string[], extraP: Record<string, (s: SlideDef) => SlideDef> = {}) => order.map((id) => {
  let s = extra[id] ?? byId[id]
  if (!s) throw new Error('hyundai deck: missing slide ' + id)
  if (patches[id]) s = patches[id](s)
  if (extraP[id]) s = extraP[id](s)
  if (FEATURE_IDS.has(id)) s = featKick(s)
  return s
})
export const hyundaiSlides: SlideDef[] = build(ORDER)
export const hyundaiBriefSlides: SlideDef[] = build(SHARE_ORDER, sharePatches)

void bar

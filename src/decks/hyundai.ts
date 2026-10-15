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
    { k: 'Maximum hours per day', v: '9', u: 'h', law: 'OSH Code · TN' },
    { k: 'Maximum ordinary hours per week', v: '48', u: 'h', law: 'OSH Code' },
    { k: 'Weekly rest · Sunday work needs a permit', v: '1 in 7', u: 'days', law: 'OSH Code · HMIL' },
    { k: 'Overtime at 2×, with worker consent', v: 'On', u: '', law: 'OSH Code · Wages' },
    { k: 'OT approved inside the billing cycle', v: 'On', u: '', law: 'HMIL rule' },
  ],
  holidays: [{ n: 'Pongal', d: '14–15 Jan', w: 'Chennai', c: 'TN' }, { n: 'Ayudha Puja', d: '19 Oct', w: 'Chennai', c: 'TN' }, { n: 'Diwali', d: '8 Nov', w: 'Chennai, Pune', c: 'All' }],
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
    ${top('Hyundai Motor India / CLMS / <b>Vendors</b>', 'Vendor master · Chennai and Pune')}
    <div class="ui-bar"><span class="ui-box">64 vendors</span><span class="ui-box">Type: All 9</span><span class="ui-box">Location: All</span><span class="ui-sp"></span><span class="ui-btn">Bulk upload</span><span class="ui-btn pri">+ Add vendor</span></div>
    <div class="hv-tbl">
      <div class="h">Vendor</div><div class="h">Contract type</div><div class="h">Documents</div><div class="h">Workers · licence</div><div class="h">Login</div>
      <div><b>Sri Sakthi Services</b><small>Chennai · since 2019</small></div><div><span class="hv-t m">Manpower</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d g">WC</span><span class="hv-d g">Licence</span></div><div>412 / 500</div><div><span class="hv-s g">Active</span></div>
      <div><b>Ganesh Logistics</b><small>Chennai · port</small></div><div><span class="hv-t j">Job · attendance</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d y">WC 19 d</span><span class="hv-d g">Licence</span></div><div>186 / 200</div><div><span class="hv-s g">Active</span></div>
      <div><b>Velan Engineering</b><small>Chennai · AMC</small></div><div><span class="hv-t a">AMC</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d g">WC</span><span class="hv-d n">n/a</span></div><div>24 · 3-month passes</div><div><span class="hv-s g">Active</span></div>
      <div><b>Kumaran Builders</b><small>Pune · new canteen block</small></div><div><span class="hv-t c">Construction</span></div><div><span class="hv-d g">PF</span><span class="hv-d r">ESI missing</span><span class="hv-d g">WC</span><span class="hv-d g">BOCW</span></div><div>58 · held</div><div><span class="hv-s y">IC approval</span></div>
      <div><b>Royal Caterers</b><small>Chennai · canteen</small></div><div><span class="hv-t s">Service</span></div><div><span class="hv-d g">PF</span><span class="hv-d g">ESI</span><span class="hv-d g">FSSAI</span><span class="hv-d g">WC</span></div><div>96</div><div><span class="hv-s g">Active</span></div>
    </div>
    <div class="hv-foot">Contract type sets the pass validity, the modules that apply and the approval chain · login created on IC approval</div>
  </div>
</div>`

/* ---------- work order + price master ---------- */
const woUI = `
<div class="ui">
  ${side(2)}
  <div class="ui-main">
    ${top('Hyundai Motor India / CLMS / Work orders / <b>WO-HMIL-2026-0312</b>', 'Work order · Material handling, Chennai')}
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

export const hyundaiSlides: SlideDef[] = [
  {
    id: 'hy1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="tel center" style="padding-top:0">
      <div class="tel-coverwrap">
        <div class="tel-covertext">
          <span class="kick">BetterPlace × Hyundai Motor India · October 2026</span>
          <h1>Every contractor, every pass, every swipe, <em>on one CLMS for Chennai and Pune.</em></h1>
          <p>Vendors and work orders, onboarding and gate passes, contractor scorecards, attendance, overtime, billing, statutory checks and the live dashboard. Shown on the software that runs 300,000 contract workers today.</p>
          <div class="meta"><span>CLMS demo · HR and Security</span><span>Slides + live software</span><span>Confidential</span></div>
        </div>
        ${coverRing(['Vendors', 'Orders', 'Onboard', 'Passes', 'Score', 'Attend', 'Billing', 'Dashboard'], ['one', 'CLMS'], false)}
      </div>
    </div>`,
  },

  plainSlide('hy2', 'light', 'Who runs on us',
    'Credentials · who already runs their contract workforce on this',
    'Ten years on the frontline, 25 million worker profiles, <em>and the largest CLMS deployments in India.</em>',
    `<div>
      <div class="tel-clients">
        <div class="tel-case" style="--pc:var(--navy);--d:.15s"><div class="who">Retail · 18,918 stores</div><h4>Reliance Retail</h4><div class="big">300K<small>contract workers</small></div><p>3,000+ vendors on one rule engine. Payroll leakage down 90%, vendor non-compliance down 80%.</p></div>
        <div class="tel-case" style="--pc:#FF9518;--d:.3s"><div class="who">Oil &amp; gas · refineries</div><h4>Bharat Petroleum</h4><div class="big">SAP<small>as the master</small></div><p>Work orders, gate passes, labour licences and visitor management, with the gate logic in their SAP. Live headcount inside the gate.</p></div>
        <div class="tel-case" style="--pc:#0d7d85;--d:.45s"><div class="who">Quick commerce · 22 cities</div><h4>Zepto</h4><div class="big">967<small>sites</small></div><p>15,000 workers on face and geo attendance with spoof detection. 40% cost saved on attendance operations.</p></div>
      </div>
      <div class="tel-band"><span class="bl">Trusted at scale</span><p>25M+ verified worker profiles · 1,000+ enterprises · ISO 27001 · SOC 2 · data hosted in India.</p></div>
    </div>`),

  plainSlide('hy2b', 'darker', 'Why now',
    'Why now · what is at stake on a plant of this size',
    'Contract labour is no longer an HR file. <em>It decides output, audits and the principal employer\u2019s liability.</em>',
    `<div class="tel-stakes">
      <div class="st" style="--d:.15s"><div class="n">21 Nov 2025</div><div class="l">the four Labour Codes in force · central rules May 2026</div><p>Contractor registers, licensed strength, the core-activity bar and one annual electronic return. State rules for Tamil Nadu and Maharashtra are still landing.</p><div class="src">Labour Codes notification</div></div>
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
        <div class="cd" style="--d:.18s"><span class="law">OSH Code · working hours</span><h4>Daily and weekly limits, a weekly rest day</h4><p>Tamil Nadu and Maharashtra: 9 hours a day, 48 a week. Sunday work needs a permit.</p><div class="we"><b>We enforce:</b> the roster refuses a breach; swipes that cross a limit raise an alert.</div></div>
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
    proof: { n: '300K', p: 'contract workers at <b>Reliance</b> run on work orders and position codes as the governing master.' },
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
    qLabel: P, quote: 'Shift mapping lives with each contractor in Excel, different at Chennai, Pune, the welfare centre and the port.',
    changes: [
      { ic: icons.map, b: 'By location.', t: 'Chennai, Pune, welfare centre, port, each with its own shifts.' },
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
    h2: 'Induction and safety refreshers on every worker\u2019s phone, <em>in Tamil or Marathi, with proof of who passed.</em>',
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
          <div><b>Velan Engineering</b><small>contractor claim</small></div><div>Travel · Pune site</div><div>₹8,200</div><div><span class="hv-d g">Uploaded</span></div><div><span class="hv-s g">Paid</span></div>
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
    proof: { n: '7×', p: 'faster report changes at <b>Reliance</b>, where these dashboards run for 300K workers.' },
    vis: dashUI, wide: true,
    foot: 'Embedded dashboards are live; HMIL’s report set is configured in the pilot. Values illustrative.',
  }),

  plainSlide('hm1', 'dark', 'Beyond the requirement',
    'Also on the platform · beyond your requirement list',
    'When you are ready: <em>self-onboarding on WhatsApp, hiring, and prediction.</em>',
    `<div class="tel-body" style="grid-template-columns:minmax(0,.36fr) minmax(0,.64fr);align-items:center">
      <div class="tel-say">
        <ul>
          <li><span class="ic">${svg(icons.zap)}</span><span><b>WhatsApp self-onboarding.</b> Workers upload Aadhaar and documents in Tamil or Marathi; UAN fetched; checks in minutes.</span></li>
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
        <div class="ask" style="--d:.15s"><div class="n">1</div><div><h4>Pick Chennai or Pune and three contractor types</h4><p>Manpower, AMC and construction show every chain: passes, attendance, billing and statutory.</p></div></div>
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

void bar

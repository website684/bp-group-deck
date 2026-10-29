import type { SlideDef } from '../lib/types'
import { icons } from './html'
import { svg, makeRail, bar, row, problemSlide, plainSlide, coverRing } from './story-kit'
import { clmsSlides } from './clms'

// SKH (Krishna Group) · goBetter CLMS, second meeting with the CHRO (Oct 2026).
// The general CLMS deck, re-cut after the first demo: SKH's own numbers up front (15,000 workers,
// mostly contract, ~10% attrition, 12-hour shifts in north India), the four questions the CHRO
// asked answered in the flow (USP vs plant software, onboarding at high churn, overtime on
// 12-hour shifts, worker feedback), hiring dropped (scope is contract manpower only), and the
// close asks for what he asked for: references and commercials. Mocks are relocated to Haryana.

const STEPS = ['Vendors', 'Orders', 'Hire', 'Onboard', 'Verify', 'Gate', 'Attend', 'OT', 'Pay', 'Comply', 'Train']
const rail = makeRail(STEPS, [3, 7, 11], false)
const Q = 'On site today'

// Relocate the CLMS mocks from a Maharashtra plant to a north-India one.
const local = (h: string) => h
  .replace(/Sahyadri Auto/g, 'SKH')
  .replace(/<span>SA<\/span>/g, '<span>SK</span>')
  .replace(/सह्याद्री ऑटो, चाकण/g, 'एसकेएच, मानेसर')
  .replace(/Chakan, Pune/g, 'Manesar, Gurugram')
  .replace(/Chakan/g, 'Manesar')
  .replace(/Maharashtra/g, 'Haryana')
  .replace(/Marathi/g, 'Punjabi')
  .replace(/Gudi Padwa · 19 Mar/g, 'Holi · 4 Mar')
  .replace(/Ganesh Chaturthi · 14 Sep/g, 'Haryana Day · 1 Nov')
  .replace(/>MH</g, '>HR<')
  .replace(/Krishna Logistics/g, 'Om Sai Logistics')
  .replace(/>Krishna</g, '>Om Sai<')
  .replace(/Sri Sakthi/g, 'Shri Balaji').replace(/Velan Engineering/g, 'Vardhman Engineering').replace(/Velan/g, 'Vardhman')
  .replace(/Kumaran Builders/g, 'Kumar Builders').replace(/Kumaran/g, 'Kumar').replace(/R\. Srinivasan/g, 'R. Malhotra')
  .replace(/Ganesh Logistics/g, 'Gopal Logistics').replace(/Vignesh G\./g, 'Vikas G.')
  .replace(/Rahul Pawar/g, 'Rahul Yadav').replace(/Amit Shinde/g, 'Amit Sharma').replace(/Sagar Jadhav/g, 'Sagar Chauhan').replace(/Kiran More/g, 'Kiran Saini')
  .replace(/MH-(SK|SS|FL)/g, 'HR-$1')
  .replace(/ \(SOW §[\d.]+\)/g, '').replace(/WO-your-/g, 'WO-')
  // contract manpower only: no Hire step
  .replace(/<span class="rl[^"]*"><i><\/i>Hire<\/span>/g, '')
  .replace(/<div class="mp" data-n="" style="--d:\.17s"><div class="ph">Sourcing<\/div><h4>Hire<\/h4>.*?<\/div>\s*(?=<div class="mp")/s, '')
  .replace('class="tel-map" style="--cols:8"', 'class="tel-map" style="--cols:7"')
  .replace(/<b>The hire triggers it\.<\/b> Offer, consent and details on WhatsApp, prefilled from hiring or the contractor\./g, '<b>The contractor triggers it.</b> Offer, consent and details on WhatsApp, prefilled from the contractor\u2019s upload.')
  // plain language
  .replace(/Maker-checker on every document\./g, 'A second person approves every document.')
  .replace(/Regularisation from the phone/g, 'Attendance corrections from the phone')
  .replace(/Challans read by OCR\./g, 'Challans read automatically.')
  .replace(/near real time, drilled to a single worker\./g, 'updated through the day, down to each worker.')
  // ordinary hours vs overtime, consistent with 12-hour shifts
  .replace(/Daily and weekly limits, a weekly rest day<\/h4><p>Typically 9 hours a day and 48 a week, set state by state for every plant and site\. Sunday work needs a permit\.<\/p>/, 'Ordinary hours, overtime beyond them, a weekly rest day</h4><p>Eight or nine ordinary hours a day by state, 48 a week. Anything beyond is overtime: with consent, at 2×, inside the quarterly cap.</p>')
  .replace(/the roster refuses a breach; swipes that cross a limit raise an alert\./, 'the roster refuses ordinary hours past the limit; extra hours run only as consented overtime.')
  .replace(/Attendance vs TO/g, 'Attendance vs plan').replace(/against the TO/g, 'against the plan')
  .replace(/login created on IC approval/g, 'login created once HR approves').replace(/>IC approval</g, '>HR approval<')
  .replace(/Typically 9 hours a day and 48 a week/g, 'Eight or nine hours a day by state, and 48 a week')
  .replace('<span>Maximum hours per day</span><span class="in">9<small>h</small></span><span class="law">OSH Code · state</span>', '<span>Ordinary hours per day</span><span class="in">8<small>h</small></span><span class="law">Your Haryana rule</span>')

const pick = (id: string, edit: (h: string) => string = (h) => h) => {
  const s = clmsSlides.find((x) => x.id === id)
  if (!s) throw new Error(`clms slide ${id} missing`)
  return { ...s, html: edit(local(s.html)) }
}
// SKH scope is contract manpower only: no hiring row in the status table.
const noHire = (h: string) => h.replace(/<div class="r"[^>]*><i>·<\/i><b>Contractor hiring<\/b>.*?<\/div>/, '')

const css = `<style>
.sk-asks { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
.sk-asks .a { background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 18px 18px 14px; display: flex; flex-direction: column; gap: 10px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.sk-asks .q { font-family: var(--disp); font-size: 1.02rem; line-height: 1.3; color: var(--ink); }
.sk-asks .q::before { content: "“"; color: var(--yellow); font-size: 1.6rem; line-height: 0; vertical-align: -.35em; margin-right: 2px; }
.sk-asks p { margin: 0; font-size: .84rem; line-height: 1.48; color: var(--text); flex: 1; }
.sk-asks .w { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--navy); border-top: 1px dashed var(--border); padding-top: 8px; }
.sk-cmp { display: grid; grid-template-columns: 1fr 1.15fr; gap: 14px; }
.sk-cmp .lbl { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 10px; }
.sk-cmp .par { background: #f7f8fb; border: 1px solid var(--border); border-radius: 16px; padding: 16px 18px; }
.sk-cmp .par .lbl { color: #6b7280; }
.sk-cmp .par .it { padding: 9px 0; border-top: 1px solid var(--border); font-size: .84rem; line-height: 1.45; color: var(--text); }
.sk-cmp .par .it b { display: block; color: var(--ink); margin-bottom: 2px; }
.sk-cmp .up { background: #fff; border: 2px solid var(--yellow); border-radius: 16px; padding: 16px 18px; }
.sk-cmp .up .lbl { color: var(--navy); }
.sk-cmp .up .it { display: grid; grid-template-columns: 30px 1fr; gap: 10px; padding: 9px 0; border-top: 1px solid var(--border); animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.sk-cmp .up .it i { font-style: normal; width: 26px; height: 26px; border-radius: 50%; background: var(--yellow); color: var(--ink); display: grid; place-items: center; font-weight: 700; font-size: .85rem; }
.sk-cmp .up .it b { display: block; color: var(--ink); font-size: .95rem; }
.sk-cmp .up .it span { font-size: .84rem; line-height: 1.45; color: var(--text); }
.sk-cost { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.sk-cost .c { border-radius: 16px; padding: 18px 20px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); animation: telpop .45s var(--ease) both; animation-delay: var(--d); display: flex; flex-direction: column; gap: 8px; }
.sk-cost .c.best { border: 2px solid var(--yellow); background: rgba(255,196,1,.08); }
.sk-cost .t { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.6); }
.sk-cost h4 { margin: 0; font-family: var(--disp); color: #fff; font-size: 1.15rem; }
.sk-cost .n { font-family: var(--disp); font-weight: 800; font-size: 2.6rem; color: var(--yellow); line-height: 1; }
.sk-cost .n small { font-size: .9rem; font-weight: 500; color: rgba(255,255,255,.7); margin-left: 6px; }
.sk-cost p { margin: 0; font-size: .86rem; line-height: 1.5; color: rgba(255,255,255,.82); }
.sk-cost .v { margin-top: auto; font-size: .8rem; font-weight: 600; padding: 6px 10px; border-radius: 8px; }
.sk-cost .v.r { background: rgba(208,39,29,.2); color: #ffb4ae; } .sk-cost .v.y { background: rgba(255,149,24,.2); color: #ffd29a; } .sk-cost .v.g { background: rgba(61,190,123,.2); color: #9ff0c3; }
.sk-vs { display: grid; grid-template-columns: 1.05fr 1fr 1.25fr; border: 1px solid var(--border); border-radius: 16px; overflow: hidden; background: #fff; }
.sk-vs > div { padding: 8px 16px; font-size: .82rem; line-height: 1.42; border-top: 1px solid var(--border); color: var(--text); animation: telpop .4s var(--ease) both; animation-delay: var(--d); }
.sk-vs .h { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--muted, #6b7280); border-top: 0; background: #f7f8fb; }
.sk-vs .h.us { color: var(--navy); background: rgba(255,196,1,.18); }
.sk-vs .k { font-weight: 600; color: var(--ink); }
.sk-vs .us { background: rgba(255,196,1,.07); color: var(--ink); }
.sk-shift { margin-bottom: 12px; }
.sk-shift .tl { display: grid; grid-template-columns: 8fr 4fr; height: 34px; border-radius: 9px; overflow: hidden; font-size: 12px; font-weight: 600; }
.sk-shift .tl span { display: grid; place-items: center; color: #fff; }
.sk-shift .tl .o { background: var(--navy); } .sk-shift .tl .x { background: #d0271d; }
.sk-shift .ax { display: flex; justify-content: space-between; font-family: var(--mono); font-size: 10.5px; color: #6b7280; margin-top: 4px; }
.sk-pulse .qq { display: grid; grid-template-columns: 1fr 160px 44px; gap: 10px; align-items: center; font-size: .82rem; color: #111827; padding: 7px 0; border-bottom: 1px solid #eef0f4; }
.sk-pulse .qq .b { height: 8px; border-radius: 9px; background: #eef0f4; overflow: hidden; }
.sk-pulse .qq .b i { display: block; height: 100%; width: var(--w); background: var(--bc, #3dbe7b); border-radius: 9px; animation: telgrow 1s var(--ease) both; }
.sk-pulse .qq .v { font-family: var(--mono); font-size: 11px; text-align: right; }
</style>`

const otMock = `
<div class="tm">
  ${bar('goBetter · Overtime check · Plant 2, Manesar · 12-hour shifts · October', 'Live')}
  <div class="tm-body">
    <div class="sk-shift">
      <div class="tl"><span class="o">Ordinary hours · to your daily limit</span><span class="x">Overtime · 2× with consent</span></div>
      <div class="ax"><span>08:00</span><span>16:00 · daily limit (your rule)</span><span>20:00</span></div>
    </div>
    <div class="tm-rows">
      ${row('Ravi K. · Tue · 12 h shift', '8 h ordinary + 4 h overtime · consent in app · approved by the line supervisor', '2× rate', 'g')}
      ${row('Shree Manpower · October wage sheet · 212 workers', 'Overtime paid at the single rate · statute requires twice the ordinary rate', 'Flagged', 'r', 'hot')}
      ${row('Shortfall the contractor owes', 'Computed worker by worker from punches and the rate card · flagged on the invoice, held if your rule says so', 'Flagged', 'y', 'warn')}
      ${row('Mohan L. · quarterly cap reached on day 19', '75 h cap ÷ 4 h a day · roster refuses further overtime shifts this quarter', 'Blocked', 'r')}
      ${row('Overtime register · October', 'Generated from punches, consent and approvals · signed off by the contractor', 'Ready', 'g')}
    </div>
  </div>
</div>`

const pulseMock = `
<div class="tm">
  ${bar('goBetter · Pulse survey · contract workers · Plant 2 · October', 'Live')}
  <div class="tm-body sk-pulse">
    <div class="qq"><span>I was paid correctly and on time</span><span class="b"><i style="--w:82%"></i></span><span class="v">82%</span></div>
    <div class="qq"><span>My supervisor treats me fairly</span><span class="b"><i style="--w:74%"></i></span><span class="v">74%</span></div>
    <div class="qq"><span>Canteen and transport are adequate</span><span class="b"><i style="--w:58%;--bc:#FF9518"></i></span><span class="v">58%</span></div>
    <div class="qq"><span>I will be working here in three months</span><span class="b"><i style="--w:61%;--bc:#FF9518"></i></span><span class="v">61%</span></div>
    <div class="tm-rows" style="margin-top:12px">
      ${row('1,184 of 1,420 responded', 'On the worker app and WhatsApp, in Hindi · two minutes, anonymous by default', '83%', 'g')}
      ${row('Om Sai Logistics · transport score 41%', 'Lowest of 9 contractors · raised to the plant HR and the contractor', 'Action', 'y', 'warn')}
      ${row('Grievance · overtime not reflected in pay', '37 raised this month · tracked to closure in the app', 'Tracked', 'b')}
    </div>
  </div>
</div>`

export const skhSlides: SlideDef[] = [
  {
    id: 'sk1', theme: 'darker', title: 'Cover',
    html: `${css}
    <div class="glow"></div>
    <div class="tel center" style="padding-top:0">
      <div class="tel-coverwrap">
        <div class="tel-covertext">
          <span class="kick">goBetter CLMS · for SKH · contract manpower</span>
          <h1>15,000 workers across your plants, <em>one record from vendor to wage slip.</em></h1>
          <p>Every contractor’s licence, every joiner, every punch, every overtime hour, every PF challan and every invoice, checked against each other and visible from head office without waiting for a plant MIS.</p>
          <div class="tel-nums" style="margin-top:24px">
            <div><div class="n">500K</div><div class="l">Contract workers a month at Reliance · Retail, Jio, O2C</div></div>
            <div><div class="n">3,000<em>+</em></div><div class="l">Vendors on one rule engine</div></div>
            <div><div class="n">967</div><div class="l">Sites on the attendance engine at Zepto</div></div>
          </div>
        </div>
        ${coverRing(['Vendors', 'Onboard', 'Verify', 'Gate', 'Attend', 'Overtime', 'Pay', 'Comply'], ['one', 'worker record'], false)}
      </div>
    </div>`,
  },

  plainSlide('sk2', 'light', 'What you asked',
    'Last time you asked us five things · today’s answers, in the order your plant runs',
    'You asked how we differ from LabourWorks, how fast we onboard, <em>whether 12-hour overtime is compliant, and how workers are heard.</em>',
    `<div class="sk-asks">
      <div class="a" style="--d:.1s"><div class="q">What is the USP compared to LabourWorks?</div><p>At the gate we match it. Beyond it we do four things it doesn’t describe: challans matched to each worker’s wage, overtime checked at 2×, onboarding built for churn, and a worker app.</p><div class="w">Answered · goBetter and LabourWorks</div></div>
      <div class="a" style="--d:.2s"><div class="q">People keep coming and going. How simple is onboarding?</div><p>The contractor uploads a batch, or the worker joins on WhatsApp in Hindi. A returning worker keeps his verified profile.</p><div class="w">Answered · Onboarding</div></div>
      <div class="a" style="--d:.3s"><div class="q">12-hour shifts, single overtime after 8. Is it compliant?</div><p>No. Hours past the daily limit are overtime at twice the rate, with consent, inside a quarterly cap. We compute it and flag a wage sheet that pays the single rate.</p><div class="w">Answered · Overtime</div></div>
      <div class="a" style="--d:.4s"><div class="q">Any feedback system, a climate survey?</div><p>Pulse surveys and grievances on the worker’s phone, read by plant and by contractor.</p><div class="w">Answered · Worker voice</div></div>
      <div class="a" style="--d:.5s"><div class="q">Share commercials and references.</div><p>Commercials for contract manpower only, per active worker per month. Reference calls with Reliance and BPCL teams on request.</p><div class="w">Answered · Next steps</div></div>
    </div>`),

  plainSlide('sk3', 'darker', 'SKH today',
    'SKH today · what you told us, and what it means on the floor',
    'At your scale, contract labour decides <em>output, cost and the principal employer’s liability.</em>',
    `<div class="tel-stakes">
      <div class="st" style="--d:.15s"><div class="n">15,000</div><div class="l">workers · most on contract</div><p>Dozens of contractors across plants, each with its own licence, wage sheet and challans. You answer for all of them as principal employer.</p><div class="src">From our first meeting</div></div>
      <div class="st" style="--d:.3s"><div class="n">~1,500</div><div class="l">replacements at 10% attrition</div><p>Every replacement goes through the contractor, onboarding, ID checks, induction and a gate pass. If each takes a week, the line runs short for that week.</p><div class="src">10% of 15,000</div></div>
      <div class="st" style="--d:.45s"><div class="n">12 h</div><div class="l">shifts · 4 hours of overtime a day</div><p>Overtime is paid at twice the rate, with consent. If the quarterly cap is 75 hours, 4 hours a day uses it up in about three weeks. Paid at the single rate, the gap is yours if the contractor doesn’t pay it.</p><div class="src">Code on Wages · OSH Code · your state cap</div></div>
      <div class="st" style="--d:.6s"><div class="n">One view</div><div class="l">every plant, from head office</div><p>Headcount, absenteeism, overtime and contractor compliance by plant, without anyone collating a monthly MIS.</p><div class="src">What the CHRO’s office sees</div></div>
    </div>`, { glow: true }),

  pick('cm2'),
  pick('cmD'),

  plainSlide('sk4', 'light', 'goBetter and LabourWorks',
    'goBetter and LabourWorks · a fair comparison',
    'At the gate, we match LabourWorks. <em>Beyond the gate, four things change for you.</em>',
    `<div class="sk-cmp">
      <div class="par">
        <div class="lbl">Where LabourWorks is strong, and we match it</div>
        <div class="it"><b>Gate control</b><span>LabourWorks locks the turnstile on its compliance rules. goBetter issues a pass only when five checks clear and lapses it on expiry or 30 days without a punch, as at BPCL.</span></div>
        <div class="it"><b>Licences and documents</b><span>Both alert before expiry and stop deployment past the licence.</span></div>
        <div class="it"><b>Bills and SAP</b><span>LabourWorks builds a model bill and is SAP-certified. goBetter checks every invoiced shift against a punch and runs on SAP masters at BPCL.</span></div>
        <div class="it"><b>Registers</b><span>LabourWorks lists 300+ reports. goBetter generates the statutory registers from the live record, signed off by each contractor.</span></div>
      </div>
      <div class="up">
        <div class="lbl">Where goBetter goes further</div>
        <div class="it" style="--d:.15s"><i>1</i><div><b>Every challan matched to every worker</b><span>A PF or ESIC number shows the worker is registered. We read the monthly challan and match the amount to each worker’s wage, so a short payment shows before you pay the bill.</span></div></div>
        <div class="it" style="--d:.25s"><i>2</i><div><b>Overtime checked at 2×</b><span>Computed from punches, with consent, inside the cap, and compared with the contractor’s wage sheet.</span></div></div>
        <div class="it" style="--d:.35s"><i>3</i><div><b>Onboarding built for churn</b><span>Contractor bulk upload, WhatsApp in Hindi, checks by our own verification business, rehire in minutes.</span></div></div>
        <div class="it" style="--d:.45s"><i>4</i><div><b>One cloud record, and the worker on it</b><span>Every plant in one view from head office, and a worker app for hours, payslips, corrections and surveys.</span></div></div>
      </div>
    </div>
    <div class="foot" style="margin-top:8px">LabourWorks from Scrum Systems’ public website, October 2026; your installation may do more. Ask us to show any goBetter point live.</div>`),

  pick('cmB', (h) => h.replace('<div class="tel-logos">', '<div class="foot" style="margin:4px 0 8px">Outcomes are client-reported.</div><div class="tel-logos">')),

  pick('cm3'),
  pick('cm4'), pick('cm5'), pick('cm6'), pick('cm6b'),

  plainSlide('sk5', 'dark', 'Built for churn',
    'Onboarding · built for constant replacements',
    'At 10% attrition, onboarding is a production line. <em>We make each joiner a same-day job.</em>',
    `<div class="tel-stakes">
      <div class="st" style="--d:.15s"><div class="n">Bulk</div><div class="l">upload by the contractor</div><p>A contractor brings 40 workers on Monday: one sheet, validated row by row against the work order and licence, errors returned to fix.</p><div class="src">Next slide</div></div>
      <div class="st" style="--d:.3s"><div class="n">WhatsApp</div><div class="l">self-onboarding, in Hindi</div><p>The worker sends his Aadhaar and bank details from his phone. Fields fill themselves; an agent calls if he is stuck.</p><div class="src">45 min average at Zepto</div></div>
      <div class="st" style="--d:.45s"><div class="n">Rehire</div><div class="l">in minutes, not days</div><p>A returning worker comes back with his verified profile, documents and training history. Only what has expired is asked again.</p><div class="src">Live</div></div>
      <div class="st" style="--d:.6s"><div class="n">Day 0</div><div class="l">induction before he joins</div><p>A short pre-joining course shows the job and the shift. People who would leave in week one drop out before you spend on them.</p><div class="src">skillBetter · live</div></div>
    </div>`, { glow: true }),

  pick('cm6d'), pick('cm7'), pick('cm8'), pick('cm9'),
  pick('cm10'), pick('cm10b'), pick('cm11'), pick('cm11b'), pick('cm12'),

  problemSlide({
    id: 'sk6', theme: 'light', title: 'Overtime on 12-hour shifts', rail, step: 8, demo: 'Live · OT register',
    kick: 'overtime · 12-hour shifts',
    h2: 'On a 12-hour shift, the hours after the limit are overtime <em>at twice the rate, with consent.</em>',
    qLabel: Q, quote: 'People work 12 hours. After 8, the contractor pays overtime at the single rate.',
    changes: [
      { ic: icons.clock, b: 'Computed, not claimed.', t: 'Ordinary hours to your daily limit, overtime after it, straight from the punches. No punch, no overtime.' },
      { ic: icons.shield, b: '2× checked against the wage sheet.', t: 'We compute what each worker is owed at twice the ordinary rate and flag a contractor paying the single rate before you pass the invoice. You decide whether the bill waits.' },
      { ic: icons.check, b: 'Consent and caps.', t: 'Worker consent per overtime shift in the app, supervisor approval on mobile, and the quarterly cap under your state rule. Near the cap it warns; at the cap it stops.' },
    ],
    proof: { n: '0 h', p: 'of overtime paid without a punch record. That rule runs in the attendance engine today.' },
    vis: otMock,
    foot: 'Daily limits and quarterly caps follow the Haryana rules you confirm; interpretation stays with you and your advisors. Overtime is measured in hours and normalised to days; true hourly payroll is not supported. Values illustrative.',
  }),

  plainSlide('sk6b', 'darker', 'Overtime cost',
    'Overtime · what a compliant 12-hour day costs',
    'Paid properly, 12-hour shifts cost a third more. <em>Covering the same hours with 8-hour shifts costs what you pay today.</em>',
    `<div>
      <div class="sk-cost">
        <div class="c" style="--d:.15s"><div class="t">Today</div><h4>12 hours, overtime at 1×</h4><div class="n">12<small>hours of wages</small></div><p>8 ordinary hours + 4 overtime hours paid at the ordinary rate, for one position-day.</p><div class="v r">Not compliant · gap is yours if the contractor defaults</div></div>
        <div class="c" style="--d:.3s"><div class="t">Compliant, same roster</div><h4>12 hours, overtime at 2×</h4><div class="n">16<small>hours of wages · +33%</small></div><p>8 ordinary + 4 × 2. And at 4 hours a day, a 75-hour quarterly cap runs out on day 19.</p><div class="v y">Compliant only with consent, and only until the cap</div></div>
        <div class="c best" style="--d:.45s"><div class="t">Compliant, new roster</div><h4>The same 12 hours, in 8-hour shifts</h4><div class="n">12<small>hours of wages · same as today</small></div><p>One and a half people per position instead of one. No routine overtime, no cap problem. Overtime stays for peaks.</p><div class="v g">Compliant · wage cost unchanged</div></div>
      </div>
      <div class="tel-band ghost" style="margin-top:14px"><span class="bl">How goBetter helps</span><p>The auto roster builds the 8-hour pattern within your rules, contractors fill it against the work order, and onboarding at churn speed brings the extra people in. Run it on one line first and compare.</p></div>
      <div class="foot" style="margin-top:8px">Wages only, per position-day. More people also add per-head costs (transport, canteen, PPE, induction); the cap figure is an example and follows your state rule. Interpretation stays with you and your advisors.</div>
    </div>`, { glow: true }),

  pick('cm14'), pick('cm15'), pick('cm16'), pick('cm17'),

  problemSlide({
    id: 'sk7', theme: 'dark', title: 'Worker voice', rail, step: 11, demo: 'Surveys · set up on skillBetter',
    kick: 'Worker voice · surveys and grievances',
    h2: 'Ask 15,000 workers how it is going, <em>and see the answer by plant and by contractor.</em>',
    qLabel: Q, quote: 'We hear about a problem when a batch of workers walks out, or the contractor tells us.',
    changes: [
      { ic: icons.mic, b: 'Pulse surveys on his phone.', t: 'Two-minute surveys on the worker app or WhatsApp, in his language, anonymous by default. Pay, supervisor, canteen, transport, intent to stay.' },
      { ic: icons.chart, b: 'Read by plant and contractor.', t: 'Scores split by plant, line and contractor, so the contractor behind a bad transport score is named.' },
      { ic: icons.check, b: 'Grievances tracked to closure.', t: 'Raised from the app with a category, routed to plant HR, status visible to the worker.' },
    ],
    proof: { n: '35', p: 'languages on the same app the worker already uses for his hours and payslip, so a survey is one tap away.' },
    vis: pulseMock,
    foot: 'Surveys are set up for you on skillBetter\u2019s engagement features; scope confirmed in the pilot. Grievance is raise-and-track today, not full case management. Questions and values illustrative.',
  }),

  pick('cm8b'),
  pick('cm18'), pick('cm19'), pick('cm20'), pick('cm21', (h) => noHire(h).replace(/<div class="r"[^>]*><i>·<\/i><b>Demand forecast from the production plan<\/b>.*?<\/div>/, '').replace('maker-checker', 'second-person approval').replace(/(<div class="r"[^>]*><i>·<\/i><b>Invoice check and registers<\/b>)/, '<div class="r" style="--d:.38s"><i>·</i><b>Pulse surveys and grievances</b><span>Surveys on skillBetter\u2019s engagement features, set up per client; grievance raise-and-track.</span><em class="mix">Configured</em></div>$1')),

  plainSlide('sk8', 'darker', 'Next steps',
    'Next steps · what you asked for, and how one plant starts',
    'Commercials for contract manpower, references you can call, <em>and one plant live in four to five months.</em>',
    `<div>
      <div class="tel-phase4">
        <div class="ph4" style="--d:.15s"><div class="w">This week</div><h4>Commercials</h4><p>For contract manpower only, about 15,000 workers: priced per active worker per month, devices itemised separately. Sent to your team this week.</p><div class="who">BetterPlace</div></div>
        <div class="ph4" style="--d:.3s"><div class="w">This week</div><h4>References</h4><p>Calls with teams running contract labour on goBetter at Reliance and BPCL, set up on request.</p><div class="who">BetterPlace</div></div>
        <div class="ph4" style="--d:.45s"><div class="w">Weeks 1 to 10</div><h4>Design and build</h4><p>Your plants, contractors, work orders and Haryana rule sets; gate devices or your access-control system; SSO and ERP.</p><div class="who">Joint</div></div>
        <div class="ph4" style="--d:.6s"><div class="w">Then 6 to 8 weeks</div><h4>Pilot one plant</h4><p>Onboarding, attendance and 12-hour overtime live; every contractor’s challans reconciled worker by worker for a full cycle.</p><div class="who">Measured</div></div>
      </div>
      <div class="tel-close" style="margin-top:16px;grid-template-columns:1.2fr .8fr">
        <div class="tel-band ghost" style="margin:0;grid-template-columns:auto 1fr"><span class="bl">What we measure</span><p>Days from contractor request to worker on the line, overtime paid at the right rate, challans matched, and hours your HR team gets back each month.</p></div>
        <div class="tel-contact"><div class="nm">Anuj Saxena</div><div class="rl">Director, Product · BetterPlace</div><a href="mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent('SKH · goBetter CLMS')}">anuj.saxena@betterplace.co.in</a></div>
      </div>
    </div>`, { glow: true }),
]

void svg

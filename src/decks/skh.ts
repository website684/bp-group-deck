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

const pick = (id: string) => {
  const s = clmsSlides.find((x) => x.id === id)
  if (!s) throw new Error(`clms slide ${id} missing`)
  return { ...s, html: local(s.html) }
}

const css = `<style>
.sk-asks { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
.sk-asks .a { background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 18px 18px 14px; display: flex; flex-direction: column; gap: 10px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.sk-asks .q { font-family: var(--disp); font-size: 1.02rem; line-height: 1.3; color: var(--ink); }
.sk-asks .q::before { content: "“"; color: var(--yellow); font-size: 1.6rem; line-height: 0; vertical-align: -.35em; margin-right: 2px; }
.sk-asks p { margin: 0; font-size: .84rem; line-height: 1.48; color: var(--text); flex: 1; }
.sk-asks .w { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--navy); border-top: 1px dashed var(--border); padding-top: 8px; }
.sk-vs { display: grid; grid-template-columns: 1.05fr 1fr 1.25fr; border: 1px solid var(--border); border-radius: 16px; overflow: hidden; background: #fff; }
.sk-vs > div { padding: 11px 16px; font-size: .86rem; line-height: 1.42; border-top: 1px solid var(--border); color: var(--text); animation: telpop .4s var(--ease) both; animation-delay: var(--d); }
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
      ${row('Shortfall the contractor owes', 'Computed worker by worker from punches and the rate card · held against the invoice', 'Held', 'y', 'warn')}
      ${row('Mohan L. · quarterly cap', 'Cap under your state rule reached · roster refuses further 12-hour shifts', 'Blocked', 'r')}
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
            <div><div class="n">300K</div><div class="l">Contract workers live at Reliance</div></div>
            <div><div class="n">Every</div><div class="l">contract worker at BPCL’s refinery gates</div></div>
            <div><div class="n">45 min</div><div class="l">Joiner onboarding on WhatsApp at Zepto</div></div>
          </div>
        </div>
        ${coverRing(['Vendors', 'Onboard', 'Verify', 'Gate', 'Attend', 'Overtime', 'Pay', 'Comply'], ['one', 'worker record'], false)}
      </div>
    </div>`,
  },

  plainSlide('sk2', 'light', 'What you asked',
    'Last time you asked us five things · today’s answers, in the order your plant runs',
    'You asked what makes us different, how fast we onboard, <em>how 12-hour overtime stays compliant, and how workers are heard.</em>',
    `<div class="sk-asks">
      <div class="a" style="--d:.1s"><div class="q">What is the USP compared to other software?</div><p>One cloud record across every plant, contractors doing their own data work, a worker app, and challans matched worker by worker. Rule changes by configuration, not code.</p><div class="w">Answered · Why goBetter</div></div>
      <div class="a" style="--d:.2s"><div class="q">People keep coming and going. How simple is onboarding?</div><p>Bulk upload by the contractor or self-onboarding on WhatsApp in Hindi. Returning workers reuse their verified profile.</p><div class="w">Answered · Onboarding</div></div>
      <div class="a" style="--d:.3s"><div class="q">12-hour shifts, single overtime after 8. Is it compliant?</div><p>No. The hours past the daily limit are overtime at twice the rate, with consent, inside a quarterly cap. We compute it and flag a wage sheet that pays the single rate.</p><div class="w">Answered · Overtime</div></div>
      <div class="a" style="--d:.4s"><div class="q">Any feedback system, a climate survey?</div><p>Pulse surveys and grievances on the worker’s phone, read by plant and by contractor.</p><div class="w">Answered · Worker voice</div></div>
      <div class="a" style="--d:.5s"><div class="q">Share commercials and references.</div><p>Commercials for contract manpower only, per active worker per month. Reference calls with Reliance and BPCL teams on request.</p><div class="w">Answered · Next steps</div></div>
    </div>`),

  pick('cmA'),
  pick('cmB'),

  plainSlide('sk3', 'darker', 'SKH today',
    'SKH today · what you told us, and what it means on the floor',
    'At your scale, contract labour decides <em>output, cost and the principal employer’s liability.</em>',
    `<div class="tel-stakes">
      <div class="st" style="--d:.15s"><div class="n">15,000</div><div class="l">workers · most on contract</div><p>Dozens of contractors across plants, each with its own licence, wage sheet and challans. You answer for all of them as principal employer.</p><div class="src">From our first meeting</div></div>
      <div class="st" style="--d:.3s"><div class="n">~1,500</div><div class="l">replacements at 10% attrition</div><p>Every replacement goes through the contractor, onboarding, ID checks, induction and a gate pass. If each takes a week, the line runs short for that week.</p><div class="src">10% of 15,000</div></div>
      <div class="st" style="--d:.45s"><div class="n">12 h</div><div class="l">shifts · overtime after the daily limit</div><p>Paid at the single rate, those hours are a wage shortfall the principal employer carries when the contractor doesn’t make it good.</p><div class="src">Code on Wages · OSH Code</div></div>
      <div class="st" style="--d:.6s"><div class="n">One view</div><div class="l">every plant, from head office</div><p>Headcount, absenteeism, overtime and contractor compliance by plant, without anyone collating a monthly MIS.</p><div class="src">What the CHRO’s office sees</div></div>
    </div>`, { glow: true }),

  pick('cmD'),
  pick('cm2'),

  plainSlide('sk4', 'light', 'Why goBetter',
    'Why goBetter · what plant CLMS software usually does, and what we do',
    'Most CLMS tools keep the records. <em>We check them against each other, every day, in every plant.</em>',
    `<div class="sk-vs">
      <div class="h"></div><div class="h">Typical plant CLMS software</div><div class="h us">goBetter</div>
      <div class="k" style="--d:.08s">Where it runs</div><div style="--d:.08s">Installed per plant; head office collates a monthly MIS.</div><div class="us" style="--d:.08s">One cloud record. Head office sees every plant live, drilled to one worker.</div>
      <div class="k" style="--d:.14s">Who does the data work</div><div style="--d:.14s">Your HR team keys in joiners and documents.</div><div class="us" style="--d:.14s">Contractors onboard their own workers on web or mobile; you approve. Workers self-onboard on WhatsApp.</div>
      <div class="k" style="--d:.2s">PF and ESI challans</div><div style="--d:.2s">A PDF filed against the contractor.</div><div class="us" style="--d:.2s">Read by OCR and matched worker by worker against wages and attendance. Gaps held against the invoice.</div>
      <div class="k" style="--d:.26s">Overtime</div><div style="--d:.26s">Whatever the wage sheet says.</div><div class="us" style="--d:.26s">From punches, with consent and approval, inside caps, at 2×. Single-rate pay flagged.</div>
      <div class="k" style="--d:.32s">The worker</div><div style="--d:.32s">No interface; queues at the time office.</div><div class="us" style="--d:.32s">An app in his language: hours, payslip, corrections, surveys, grievances.</div>
      <div class="k" style="--d:.38s">Rule changes</div><div style="--d:.38s">A vendor change request per plant.</div><div class="us" style="--d:.38s">Configuration your admins switch, for example which components count as ESI wages.</div>
      <div class="k" style="--d:.44s">AI</div><div style="--d:.44s">Reports.</div><div class="us" style="--d:.44s">Agents that roster, induct, chase documents and work challan exceptions, on the same record.</div>
    </div>`),

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
      { ic: icons.shield, b: '2× checked against the wage sheet.', t: 'We compute what each worker is owed at twice the ordinary rate and flag a contractor paying the single rate before you pass the invoice.' },
      { ic: icons.check, b: 'Consent and caps.', t: 'Worker consent per overtime shift in the app, supervisor approval on mobile, and the quarterly cap under your state rule. Near the cap it warns; at the cap it stops.' },
    ],
    proof: { n: '0 h', p: 'of overtime paid without a punch record. That rule runs in the attendance engine today.' },
    vis: otMock,
    foot: 'Daily limits and quarterly caps follow the Haryana rules you confirm; interpretation stays with you and your advisors. Overtime is measured in hours and normalised to days; true hourly payroll is not supported. Values illustrative.',
  }),

  pick('cm14'), pick('cm15'), pick('cm16'), pick('cm17'),

  problemSlide({
    id: 'sk7', theme: 'dark', title: 'Worker voice', rail, step: 11, demo: 'Live · surveys and grievances',
    kick: 'Worker voice · surveys and grievances',
    h2: 'Ask 15,000 workers how it is going, <em>and see the answer by plant and by contractor.</em>',
    qLabel: Q, quote: 'We hear about a problem when a batch of workers walks out, or the contractor tells us.',
    changes: [
      { ic: icons.mic, b: 'Pulse surveys on his phone.', t: 'Two-minute surveys on the worker app or WhatsApp, in his language, anonymous by default. Pay, supervisor, canteen, transport, intent to stay.' },
      { ic: icons.chart, b: 'Read by plant and contractor.', t: 'Scores split by plant, line and contractor, so the contractor behind a bad transport score is named.' },
      { ic: icons.check, b: 'Grievances tracked to closure.', t: 'Raised from the app with a category, routed to plant HR, status visible to the worker.' },
    ],
    proof: { n: '88%', p: 'course completion on skillBetter across our clients; surveys reach workers on the same app.' },
    vis: pulseMock,
    foot: 'Surveys run on skillBetter’s engagement features. Grievance is raise-and-track today, not full case management. Questions and values illustrative.',
  }),

  pick('cm8b'),
  pick('cm18'), pick('cm19'), pick('cm20'), pick('cm21'),

  plainSlide('sk8', 'darker', 'Next steps',
    'Next steps · what you asked for, and how one plant starts',
    'Commercials for contract manpower, references you can call, <em>and one plant live in four to five months.</em>',
    `<div>
      <div class="tel-phase4">
        <div class="ph4" style="--d:.15s"><div class="w">This week</div><h4>Commercials</h4><p>For contract manpower only, about 15,000 workers: priced per active worker per month, devices itemised separately. Sent to Ankit and your team.</p><div class="who">BetterPlace</div></div>
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

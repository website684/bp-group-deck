import type { SlideDef } from '../lib/types'
import { groupSlides } from './group'
import { outcomeSlide, problemSlide } from './html'

const groupGig = groupSlides.find((s) => s.id === 's12')!

export const gigbetterSlides: SlideDef[] = [
  {
    id: 'gb1', theme: 'dark', title: 'gigBetter cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">gigBetter · on-demand gig &amp; task fulfilment</span>
      <h1 class="rise" style="animation-delay:.15s">The workforce that scales with you. <span style="color:var(--yellow)">Pay only for outcomes.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">AI-matched gig workers by skill, proximity and performance — deployed in under 24 hours, billed 100% on GPS-and-photo-verified tasks.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">&lt;24 hr</div><div class="l">Deployment, 1 to 500+ workers</div></div>
        <div class="stat"><div class="n">&lt;4%</div><div class="l">No-show rate</div></div>
        <div class="stat"><div class="n">2–4 hr</div><div class="l">Metro replacement SLA</div></div>
        <div class="stat"><div class="n">100%</div><div class="l">Outcome-based billing</div></div>
      </div>
      <div class="mdcover ghost">GG</div>
    </div>`,
  },
  problemSlide('gb1b', 'For operations & finance', 'You staff for the peak and pay for the valley.', [
    { pain: 'Fixed headcount sized to the busiest week', painDetail: 'Festive, audit season, launches — capacity built for spikes idles the rest of the year on your payroll.', painStat: 'Peak-sized teams · 52-week cost', fix: 'Scale 1 → 500+ inside 24 hours, then back down', fixDetail: 'AI-matched gig workers by skill, proximity and rating — deployed for the spike, gone with it.', fixStat: '<24 hr deployment · 2–4 hr replacement' },
    { pain: 'You pay invoices you can’t verify', painDetail: 'Field vendors bill on claimed attendance and claimed tasks — disputes are monthly, proof is nobody’s.', painStat: 'Claimed work ≠ verified work', fix: '100% outcome billing with GPS + photo proof', fixDetail: 'Every billed task carries a location check-in and photo evidence — the invoice argument ends.', fixStat: 'Audit any task, any time' },
    { pain: 'Gig quality collapses exactly when you need it', painDetail: 'No-shows spike on the days that matter most, and replacements take days you don’t have.', painStat: 'Industry no-show rates run double digits', fix: 'Rated, insured supply that returns', fixDetail: 'Pre-screened workers with job insurance and early wage access — quality supply that shows up again.', fixStat: '<4% no-shows · 95% proctor retention' },
  ], 'gigBetter deployment data · assessment-platform engagement (5,000 drives)'),
  { ...groupGig, id: 'gb2', title: 'gigBetter capabilities' },
  {
    id: 'gb3', theme: 'light', title: 'The economics',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Why CFOs like the model</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Fixed headcount becomes <span style="color:var(--navy)">variable, verified spend.</span></h2>
      <div class="vs rise" style="animation-delay:.2s">
        <div class="col bad">
          <h4>Carrying fixed headcount for peaks</h4>
          <ul>
            <li>Staffed for the busiest week, paid for all 52</li>
            <li>No-shows discovered at shift start</li>
            <li>Invoices based on attendance claims you can't check</li>
            <li>Every new city means a new local agency</li>
          </ul>
        </div>
        <div class="col good">
          <h4>gigBetter on-demand</h4>
          <ul>
            <li>Scale 1 → 500+ workers inside 24 hours, back down just as fast</li>
            <li>&lt;4% no-shows; metro replacements inside 2–4 hours</li>
            <li>You pay per verified task — GPS check-in + photo proof</li>
            <li>One platform across 500+ cities, India · Malaysia · Indonesia</li>
          </ul>
        </div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:16px;">Verticals: last-mile delivery · retail &amp; merchandising · warehouse ops · events · telecalling · field audits &amp; mystery shopping · exam proctoring · <b style="color:var(--navy)">AI data annotation (new)</b></div>
    </div>`,
  },
  {
    id: 'gb4', theme: 'light', title: 'Proof',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">5,000 exam drives. 40+ cities. <span style="color:var(--navy)">95% retention.</span></h2>
      <div class="cases" style="grid-template-columns:1fr;max-width:860px;margin-top:16px;">
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.22s"><div class="ch"><span class="cn">Leading assessment platform</span><span class="ct">Gig · exam proctoring</span></div><p>End-to-end management of a dispersed proctor and invigilator workforce — tech-driven quality platform, exam audits, outcome-verified payouts.</p><div class="cm"><div class="m"><div class="mn">95%</div><div class="ml">proctor retention</div></div><div class="m"><div class="mn">40+</div><div class="ml">cities covered</div></div><div class="m"><div class="mn">5,000</div><div class="ml">drives run</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.4s">Pre-screened, rated workers with job insurance and early wage access — quality supply that keeps coming back.</div>
    </div>`,
  },
  outcomeSlide('gb5', 'What gigBetter changes in your cost line.', [
    { n: '100%', what: 'Spend tied to verified output', how: 'Every billed task carries GPS check-in and photo proof — the invoice argument with vendors disappears.', proof: 'Outcome billing on every engagement' },
    { n: '−100%', what: 'Idle-capacity cost between peaks', how: 'Festive, audit and launch spikes staffed on demand; when the spike ends, so does the spend.', proof: '1 → 500+ workers in <24 hr' },
    { n: '<4%', what: 'No-show risk, absorbed by us', how: 'Rated, pre-screened supply plus 2–4 hour metro replacement — your ops plan survives contact with reality.', proof: '95% proctor retention · 5,000 drives' },
    { n: '1 day', what: 'New-city launch time', how: 'The same platform and supply pool covers 500+ cities — expansion stops waiting for local agency hunts.', proof: 'India · Malaysia · Indonesia' },
  ], 'Pilot it on your next spike: we deploy for one event and you audit every billed task.'),
  {
    id: 'gb6', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Staff your next spike without hiring for it.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>One-event burst</h4><p>Your next sale, audit or exam drive — deployed inside 24 hours, every task GPS-and-photo verified.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>A standing gig bench</h4><p>A rated pool sized to your seasonal curve — drawn down when you need it, zero cost when you don't.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>AI data annotation pilot</h4><p>Our newest vertical: trained, verified annotators on outcome billing for your AI/data teams.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in · Onkar Vartak — Sales · onkar.vartak@betterplace.co.in</div>
    </div>`,
  },
]

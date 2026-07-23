import type { SlideDef } from '../lib/types'
import { icons, outcomeSlide } from './html'
import { groupSlides } from './group'
import { attendanceSlides } from './attendance'
import { hrisSlides } from './hris'
import { incentivesSlides } from './incentives'

const pick = (arr: SlideDef[], id: string, newId: string, title?: string): SlideDef => {
  const s = arr.find((x) => x.id === id)!
  return { ...s, id: newId, ...(title ? { title } : {}) }
}

export const gobetterSlides: SlideDef[] = [
  {
    id: 'gb-cover', theme: 'dark', title: 'goBetter cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter · the frontline workforce OS</span>
      <h1 class="rise" style="animation-delay:.15s">Every system your frontline needs. <span style="color:var(--yellow)">One login.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Hire, onboard, verify, attend, pay, incentivise, upskill — eight modules reading one worker record, with AI Labs agents working underneath. This is the software the rest of our story runs on.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">8</div><div class="l">Modules, one record</div></div>
        <div class="stat"><div class="n"><em>25</em>M+</div><div class="l">Worker profiles</div></div>
        <div class="stat"><div class="n">1,000+</div><div class="l">Enterprises powered</div></div>
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage at Reliance</div></div>
      </div>
      <div class="mdcover ghost">go</div>
    </div>`,
  },
  pick(groupSlides, 's2', 'gb-problem', 'The fragmentation problem'),
  {
    id: 'gb-suite', theme: 'light', title: 'The suite map',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The suite · what's inside goBetter</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Eight modules. Adopt one, or run the whole operating system.</h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.search}</svg></span><h4>Hire</h4><p>Full ATS — WhatsApp-apply, AI screening, ranked shortlists, auto offers</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Onboard</h4><p>Offer to payroll-ready in 10 minutes, on the worker's own phone</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><h4>Verify</h4><p>Six-point digital BGV — 50K cases/day, &lt;24 hr turnaround</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.user}</svg></span><h4>Attend</h4><p>Face + geo attendance, rostering, approvals, a real policy engine</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.card}</svg></span><h4>Payroll & compliance</h4><p>Attendance-driven pay, wage validation, vendor challan reconciliation</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.trophy}</svg></span><h4>Incentives</h4><p>Any scheme as config, live earnings in every associate's pocket</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.book}</svg></span><h4>Upskill · LMS</h4><p>88% completion — reels, 35+ languages, proctored assessments</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>HRIS core</h4><p>The one worker record every module reads — with embedded BI</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.42s">Underneath all eight: <b>AI Labs agents and one shared worker record</b> — adopt any module and the rest are a setting away.</div>
    </div>`,
  },
  pick(hrisSlides, 'hr2', 'gb-hris', 'One record, one console'),
  pick(groupSlides, 's7', 'gb-hire', 'Hire & onboard'),
  pick(groupSlides, 'sv', 'gb-verify', 'Verify'),
  pick(groupSlides, 's8', 'gb-attend', 'Attend & manage'),
  pick(attendanceSlides, 'at3', 'gb-roster', 'Rostering, real product'),
  pick(groupSlides, 's8b', 'gb-payroll', 'Pay & comply'),
  pick(incentivesSlides, 'inc5', 'gb-incentives', 'Incentives, live in pocket'),
  pick(groupSlides, 's9', 'gb-lms', 'Upskill & engage'),
  pick(groupSlides, 's8c', 'gb-real', 'The actual console'),
  pick(groupSlides, 's10', 'gb-ai', 'The AI layer'),
  outcomeSlide('gb-outcomes', 'What one suite changes against five point tools.', [
    { n: '0', what: 'Re-entry between systems', how: 'The record created at hiring is the one attendance tracks, payroll pays, incentives reward and training certifies — the export-import ritual between vendors ends.', proof: 'One worker record · 8 modules' },
    { n: 'Crores', what: 'Leakage and liability recovered', how: 'Face-verified attendance kills ghost payroll; challan OCR kills inherited PF/ESI exposure — the two silent costs of a contract workforce.', proof: 'Reliance: −90% leakage · −80% vendor risk' },
    { n: 'Weeks', what: 'Recovered on every hiring ramp', how: 'AI-screened funnels, 10-minute onboarding and <24hr BGV — sites open on schedule with workers who arrive trained.', proof: '−60% hiring lead-time' },
    { n: '1', what: 'Vendor relationship, not five', how: 'One contract, one data view, one compliance standard, one support line — the integration project you never have to run.', proof: '1,000+ enterprises run it' },
  ], 'Start with the module that hurts most — the rest of the suite is already waiting behind the same login.'),
  pick(groupSlides, 's14', 'gb-proof', 'Customer outcomes'),
  {
    id: 'gb-close', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Start with one module. The suite follows.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Pick the pain</h4><p>Attendance, payroll, hiring, training or incentives — we pilot the module that hurts most, on one site or region.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Prove it in a quarter</h4><p>Live in days, measured against your current numbers — leakage, TAT, completion, disputes.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Switch on the next module</h4><p>Same record, same login, no integration project — each addition compounds the last.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in · Onkar Vartak — Sales · onkar.vartak@betterplace.co.in</div>
    </div>`,
  },
]

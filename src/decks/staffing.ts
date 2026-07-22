import type { SlideDef } from '../lib/types'
import { groupSlides } from './group'

const groupStaff = groupSlides.find((s) => s.id === 's11')!
const groupGig = groupSlides.find((s) => s.id === 's12')!

export const staffingSlides: SlideDef[] = [
  {
    id: 'st1', theme: 'dark', title: 'Staffing cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">staffBetter &amp; gigBetter · managed workforce</span>
      <h1 class="rise" style="animation-delay:.15s">We don't just sell the software. <span style="color:var(--yellow)">We deploy the workers.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Full-time staffing with employer-of-record compliance, and on-demand gig deployment billed only on verified outcomes — both drawn from the verified 25M+ pool.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">40K+</div><div class="l">Workers managed / month</div></div>
        <div class="stat"><div class="n">24–72 hr</div><div class="l">Deployment from verified pool</div></div>
        <div class="stat"><div class="n">&lt;4%</div><div class="l">Gig no-show rate</div></div>
      </div>
      <div class="mdcover ghost">SB</div>
    </div>`,
  },
  { ...groupStaff, id: 'st2', title: 'staffBetter' },
  { ...groupGig, id: 'st3', title: 'gigBetter' },
  {
    id: 'st3b', theme: 'light', title: 'How an engagement runs',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The operating commitments</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">SLAs you can hold us to, <span style="color:var(--navy)">in the contract.</span></h2>
      <div class="modelrow rise" style="animation-delay:.2s;margin-top:16px;">
        <div class="mstat"><div class="n">24–72 hr</div><div class="l">Full-time deployment from the verified 25M+ pool</div></div>
        <div class="mstat"><div class="n">&lt;24 hr</div><div class="l">Gig deployment, 1 to 500+ workers</div></div>
        <div class="mstat"><div class="n">2–4 hr</div><div class="l">Metro replacement SLA</div></div>
        <div class="mstat"><div class="n">100%</div><div class="l">Outcome billing — GPS check-in + photo proof per task</div></div>
      </div>
      <div class="capgrid rise" style="animation-delay:.35s;grid-template-columns:repeat(3,1fr);margin-top:18px;">
        <div class="cap"><h4>Employer of record</h4><p>PF, ESIC, payroll, gratuity, labour law — our liability, with real-time reporting to you</p></div>
        <div class="cap"><h4>Worker welfare built in</h4><p>Statutory benefits, job-accident insurance, early wage access — the reasons workers stay</p></div>
        <div class="cap"><h4>200+ role categories</h4><p>Warehouse, retail, delivery, F&amp;B, security, manufacturing, BPO, healthcare support</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.5s;margin-top:14px;">Every deployed worker is BGV-verified and app-tracked on the same goBetter platform you saw earlier</div>
    </div>`,
  },
  {
    id: 'st4', theme: 'light', title: 'Proof',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">From HNI sales floors to <span style="color:var(--navy)">5,000 exam drives.</span></h2>
      <div class="cases" style="margin-top:16px;">
        <div class="case rise" style="--pc:#FF9518;animation-delay:.22s"><div class="ch"><span class="cn">Mahindra Holidays</span><span class="ct">Staffing · hospitality</span></div><p>Exclusive vendor for HNI telemarketing and field sales — luxury packages of ₹2–16L, sourced pan-India.</p><div class="cm"><div class="m"><div class="mn">300+</div><div class="ml">quality hires in 3 months</div></div><div class="m"><div class="mn">1,000+</div><div class="ml">execs today</div></div></div></div>
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.3s"><div class="ch"><span class="cn">Leading assessment platform</span><span class="ct">Gig · proctoring</span></div><p>A dispersed proctor workforce run on a tech-driven quality platform with exam audits.</p><div class="cm"><div class="m"><div class="mn">95%</div><div class="ml">proctor retention</div></div><div class="m"><div class="mn">40+</div><div class="ml">cities</div></div><div class="m"><div class="mn">5,000</div><div class="ml">drives</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s">Fixed headcount becomes variable, performance-based spend — <b>GPS check-in and photo proof on every billed task.</b></div>
    </div>`,
  },
  {
    id: 'st5', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Give us your hardest site to staff.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>A 30-day staffing pilot</h4><p>One city, one role family — measure fill rate, time-to-deploy and retention against your current agency.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>A gig burst for your next spike</h4><p>Festive, audit or launch — 1 to 500+ workers inside 24 hours, billed only on verified tasks.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>EoR compliance takeover</h4><p>We become employer of record for your contract workforce — PF, ESIC, payroll and gratuity, reported in real time.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">AasaanJobs (India) · MyRobin (Indonesia) · Troopers (Malaysia) — 500+ cities</div>
    </div>`,
  },
]

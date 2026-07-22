import type { SlideDef } from '../lib/types'
import { groupSlides } from './group'
import { bframe, fi, icons } from './html'

const groupHire = groupSlides.find((s) => s.id === 's7')!

export const hireOnboardSlides: SlideDef[] = [
  {
    id: 'ho1', theme: 'dark', title: 'Hire & Onboard cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter Hire &amp; manageBetter Onboarding</span>
      <h1 class="rise" style="animation-delay:.15s">Job posts in. <span style="color:var(--yellow)">Day-one-ready workers out.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">A full ATS plus digital onboarding, built for volume frontline hiring — with AI screening working the pipeline underneath.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">−60%</div><div class="l">Time-to-hire</div></div>
        <div class="stat"><div class="n">−20%</div><div class="l">Cost per acquisition</div></div>
        <div class="stat"><div class="n">10 min</div><div class="l">Worker self-onboarding</div></div>
      </div>
      <div class="mdcover ghost">GO</div>
    </div>`,
  },
  { ...groupHire, id: 'ho2', title: 'The hiring pipeline' },
  {
    id: 'ho2b', theme: 'light', title: 'ATS capability map',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">goBetter Hire — the complete ATS surface</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">A full ATS built for frontline volume, <span style="color:var(--navy)">not white-collar trickle.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Job openings</h4><p>Requisitions per role, site and city — with approval chains</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.layers}</svg></span><h4>Custom workflows</h4><p>Pipeline stages per client and market, exactly as your process runs</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.search}</svg></span><h4>Multi-channel sourcing</h4><p>Career page, boards, referrals, QR codes, vendors, WhatsApp-apply</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>Recruiter console</h4><p>Pipelines, assignments, approvals, role-based access</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.mic}</svg></span><h4>Interviews</h4><p>AI or human rounds, structured question sets per role</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Fit scores</h4><p>Ranked shortlists against the role rubric</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Forms &amp; screening</h4><p>Custom application forms and questionnaires per opening</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.check}</svg></span><h4>Offers</h4><p>Auto-generated offer and appointment letters</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">Real-time pipeline analytics: source performance · stage conversion · time-to-hire — per requisition</div>
    </div>`,
  },
  {
    id: 'ho3', theme: 'light', title: 'The ATS surface',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">goBetter Hire · the full ATS</span>
        <h2 class="rise" style="animation-delay:.08s;">Recruiters review a ranked list, <span style="color:var(--navy)">not a pile.</span></h2>
        <div class="featlist">
          ${fi(icons.search, 'Every channel, one pipeline', 'Career page, job boards, referrals, QR codes, vendors — and WhatsApp-apply with no app install.', 0.24)}
          ${fi(icons.layers, 'Your process, as workflows', 'Configurable stages per role and market: screening → interview → approval → offer, exactly as you run it.', 0.32)}
          ${fi(icons.chart, 'Fit scores & pipeline analytics', 'Candidates ranked against the role rubric; source performance, stage conversion and TAT in real time.', 0.40)}
          ${fi(icons.doc, 'Offers without the admin', 'Auto-generated offer and appointment letters, approval chains included.', 0.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${bframe('assets/product/gobetter/hire/onboarding-status-funnel.jpg', 'gobetter · Onboarding status', 'The onboarding funnel — drop-off counts and conversion at every stage, <b>bottlenecks visible</b>')}
      </div>
    </div>`,
  },
  {
    id: 'ho4', theme: 'light', title: 'Digital onboarding',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">manageBetter Onboarding</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">From signed offer to day-one ready — <span style="color:var(--navy)">on the worker's own phone.</span></h2>
      <div class="mediasplit" style="align-items:start;">
        <div class="featlist" style="margin-top:14px;">
          ${fi(icons.doc, 'Documents collected via API', 'IDs, certificates, right-to-work — configurable per market and state; e-sign for contracts and policies.', 0.24)}
          ${fi(icons.shield, 'Verification built in', 'ID checks tie straight into verifyBetter BGV with face-match — no second vendor, no re-entry.', 0.32)}
          ${fi(icons.card, 'Payroll-ready from minute one', 'Bank and statutory details captured once; PF/ESI templates auto-generated; the record flows to payroll untouched.', 0.40)}
          ${fi(icons.users, 'First-day journey in their language', 'Role-based checklists, intro content and policies — AI Mia guides docs and safety induction in under an hour.', 0.48)}
        </div>
        <div class="rise" style="animation-delay:.35s;">
          <div class="vs" style="grid-template-columns:1fr;margin-top:14px;">
            <div class="col bad"><h4>Onboarding by chase</h4><ul><li>HR chases photocopies for a week</li><li>Data typed three times into three systems</li><li>Joiner shows up untrained, unverified</li></ul></div>
            <div class="col good"><h4>Onboarding by phone</h4><ul><li>ID + e-sign + bank setup in under 10 minutes</li><li>Zero re-entry — one record flows to payroll &amp; HRMS</li><li>Trained, verified and rostered before day one</li></ul></div>
          </div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'ho4b', theme: 'light', title: 'Onboarding capability map',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">manageBetter Onboarding — the complete surface</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Everything between "offer signed" and "first shift" — <span style="color:var(--navy)">handled.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Document collection</h4><p>API-based — IDs, certificates, right-to-work, configurable per state</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><h4>Verification</h4><p>ID checks tied into verifyBetter BGV with face-match</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.check}</svg></span><h4>e-Sign</h4><p>Contracts and policy acknowledgements signed digitally</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.card}</svg></span><h4>Bank &amp; statutory setup</h4><p>Captured once, payroll-ready; PF/ESI templates auto-generated</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.zap}</svg></span><h4>Platform onboarding</h4><p>App access, role, site and shift assigned on completion</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.book}</svg></span><h4>First-day journey</h4><p>Role-based checklists, intro content, policies — in the worker's language</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Admin tracking</h4><p>360° status across every joiner, bottleneck view</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.bot}</svg></span><h4>AI Mia guidance</h4><p>Docs plus safety induction guided in chat — under an hour</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">Worker completes ID + e-sign + bank setup on their own phone in <b style="color:var(--navy)">under 10 minutes</b> — zero HR re-entry</div>
    </div>`,
  },
  {
    id: 'ho5', theme: 'dark', title: 'Day in the life',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">What it looks like in your world</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">300 store staff before festive season? <span style="color:var(--yellow)">Post once.</span></h2>
      <div class="rail" style="grid-template-columns:repeat(4,1fr);margin-top:24px;">
        <div class="rstage rise" style="animation-delay:.22s"><div class="rn">FRI · EVENING</div><h4>Post once</h4><ul><li>One requisition fans out to boards, QR posters and WhatsApp-apply</li></ul></div>
        <div class="rstage rise" style="animation-delay:.30s"><div class="rn">OVERNIGHT</div><h4>AI screens 2,000</h4><ul><li>AI Jack interviews on WhatsApp; voice bots call and score fit</li></ul></div>
        <div class="rstage rise" style="animation-delay:.38s"><div class="rn">MON</div><h4>Recruiters meet 300</h4><ul><li>Only the ranked shortlist — offers auto-generated on accept</li></ul></div>
        <div class="rstage rise" style="animation-delay:.46s"><div class="rn">SAME WEEK</div><h4>Onboarded in 10 min each</h4><ul><li>Docs, BGV, bank, e-sign on their phones — straight into payroll</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.6s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">In production for <b>IFFCO Tokio</b> and <b>Subway</b> — funnel: 4,820 sourced → 1,960 AI-screened → 720 interviewed → 540 offered → <b>505 onboarded</b>.</div>
    </div>`,
  },
  {
    id: 'ho6', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">One role. One city. Two weeks.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Pilot one live requisition</h4><p>Your highest-volume role, run end-to-end on goBetter Hire — measure TAT and cost against your current funnel.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>WhatsApp-apply QR test</h4><p>A store poster campaign: candidates apply and AI-screen without installing anything.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Onboarding time-trial</h4><p>Watch a real joiner go from offer to payroll-ready on their own phone, in under 10 minutes.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Every hire lands BGV-verified and training-ready — the closed hire → verify → onboard → train → pay loop.</div>
    </div>`,
  },
]

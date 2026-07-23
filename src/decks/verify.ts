import type { SlideDef } from '../lib/types'
import { groupSlides } from './group'
import { bframe, icons, outcomeSlide, problemSlides, aiNote } from './html'

const groupVerify = groupSlides.find((s) => s.id === 'sv')!

export const verifySlides: SlideDef[] = [
  {
    id: 'vf1', theme: 'dark', title: 'verifyBetter cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">verifyBetter · background verification</span>
      <h1 class="rise" style="animation-delay:.15s">Verified in hours, <span style="color:var(--yellow)">not weeks.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">India's first digital frontline BGV — AI reads the records, live APIs check the source, and your team reviews only the exceptions. Six checks, at the speed high-churn hiring actually needs.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n"><em>50</em>K+</div><div class="l">Cases processed daily</div></div>
        <div class="stat"><div class="n">&lt;24 hr</div><div class="l">Average TAT · minutes for identity</div></div>
        <div class="stat"><div class="n">25M+</div><div class="l">Verified profiles on platform</div></div>
      </div>
      <div class="mdcover ghost">✓</div>
    </div>`,
  },
  ...problemSlides('vf1b', 'For HR & trust-and-safety', 'One in ten frontline applications isn’t what it claims.', 'And slow checks cost you the honest nine.', [
    { pain: 'Discrepancies are the norm, not the edge case', painDetail: 'Inflated experience, unverifiable addresses, false credentials — retail hiring runs a double-digit discrepancy rate.', painStat: '10.3% discrepancy in retail hiring · AuthBridge FY26', fix: 'Six checks on every worker, digitally', fixDetail: 'Identity, address, career, financial, health, legal — run in parallel from one click, at 50K+ cases a day.', fixStat: 'Red/yellow/green triage per case' },
    { pain: 'BGV speed decides whether the hire happens', painDetail: 'Frontline candidates take the job that starts first — a two-week verification is an offer you made to a competitor’s employee.', painStat: 'Traditional BGV: 1–3 weeks', fix: 'Reports inside 24 hours, identity in minutes', fixDetail: 'Digital-first checks with EPFO integration and AI court-record scans — candidates verify themselves on their own phones.', fixStat: '<24 hr TAT · 50K+ cases/day' },
    { pain: 'The worker in a customer’s home is your brand', painDetail: 'One fraudulent identity behind a uniform — a theft, an assault — costs more than every check you’ll ever run.', painStat: 'One incident > years of BGV budget', fix: 'Liveness-checked identity, tamper-proof records', fixDetail: 'Face-match liveness stops photo-of-a-photo fraud; court and police checks come back dated and audit-ready.', fixStat: 'Swiggy · Licious · Royal Orchid live' },
    { pain: 'Churn makes you pay to verify the same people twice', painDetail: 'High-churn sectors rehire the workers they lost — and run full-price BGV on someone verified eight months ago.', painStat: 'Frontline attrition: 15%/month avg · Frontline Index', fix: 'Rehires re-clear from the 25M-profile layer', fixDetail: 'Verified history lives on the shared worker record — returning workers clear in minutes at a fraction of the cost.', fixStat: 'Instant re-verification on rehire' },
  ], 'AuthBridge Workforce Fraud Files H1 FY26 · BetterPlace Frontline Index FY23'),
  { ...groupVerify, id: 'vf2', title: 'Six checks, one report' },
  {
    id: 'vf2c', theme: 'light', title: 'The full check catalogue',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Our offerings · the checks we run today</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">A wide range of verification checks — <span style="color:var(--navy)">pick exactly what each role needs.</span></h2>
      <div class="checkcat rise" style="animation-delay:.2s">
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${icons.user}</svg></span><span class="cc-t">Identity</span></div>
          <ul><li>Aadhaar</li><li>PAN</li><li>Driving Licence</li><li>Voter ID</li><li>Passport</li></ul>
        </div>
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${icons.building}</svg></span><span class="cc-t">Address</span></div>
          <ul><li>Physical</li><li>Postal</li><li>Digital</li></ul>
        </div>
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${icons.users}</svg></span><span class="cc-t">Career</span></div>
          <ul><li>Education</li><li>Employment</li><li>UAN</li><li>Doctor's Licence</li><li>Reference check</li><li>CV check</li></ul>
        </div>
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${icons.card}</svg></span><span class="cc-t">Financial</span></div>
          <ul><li>Bank account</li><li>Credit check</li></ul>
        </div>
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${icons.zap}</svg></span><span class="cc-t">Health</span></div>
          <ul><li>Drug tests</li><li>Medical certificates</li><li>Fitness certificates</li><li>Physical examination</li></ul>
        </div>
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><span class="cc-t">Legal</span></div>
          <ul><li>Criminal, narcotics &amp; psychotropic cases</li><li>Organised Crime / Police Acts</li><li>Civil litigation &amp; Motor Vehicles Act</li><li>Supreme &amp; High Court records</li><li>Law-firm reports</li><li>Police verification certificates</li><li>Global database check</li></ul>
        </div>
      </div>
      <div class="clientline rise" style="animation-delay:.5s;margin-top:14px;">Configure the check pack per role — a delivery rider, a store cashier and a field-sales manager each get the right depth.</div>
    </div>`,
  },
  {
    id: 'vf3', theme: 'light', title: 'Portfolio & case view',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The live product · red / yellow / green</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Your whole BGV book at a glance — <span style="color:var(--navy)">and every case behind it.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/gobetter/verify/bgv-insights-red-yellow-green.jpg', 'gobetter · Verify · Insights', 'Portfolio health — red/yellow/green progress plus checks-level trend, filterable by site')}
        ${bframe('assets/product/gobetter/verify/bgv-individual-report-red-case.jpg', 'gobetter · Verify · Individual report', 'A red case in full: Aadhaar flag, tenure timeline, <b>downloadable PDF report</b>')}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">Red, yellow and green tabs work as a triage queue. Click any associate and the full case opens — who employed them, when, and exactly which check flagged.</p>
    </div>`,
  },
  {
    id: 'vf4', theme: 'light', title: 'AI-led & API-connected',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Why it's instant — and hard to fool</span>
        <h2 class="rise" style="animation-delay:.08s;">AI reads the records. APIs check the source. <span style="color:var(--navy)">You review the exceptions.</span></h2>
        <div class="featlist">
          <div class="fi rise" style="animation-delay:.24s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg></span><div><h4>Instant AI criminal-record review</h4><p>NLP scans pan-India court &amp; police records in seconds, matches identity variants, and surfaces only the relevant hits — no manual reading backlog, far fewer false positives.</p></div></div>
          <div class="fi rise" style="animation-delay:.32s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg></span><div><h4>Document AI — read &amp; validated</h4><p>OCR lifts IDs, certificates and letters straight into the record; face-match liveness at capture means a photo of a photo doesn't pass.</p></div></div>
          <div class="fi rise" style="animation-delay:.40s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3v6M15 3v6M7 9h10v3a5 5 0 0 1-10 0zM12 17v4"/></svg></span><div><h4>Checked against the source, not paper</h4><p>Live API integrations to Aadhaar, PAN, DigiLocker, EPFO/UAN, bank penny-drop and court databases — verified at origin, and one-click into your ATS.</p></div></div>
          <div class="fi rise" style="animation-delay:.48s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 2.1l4 4-4 4M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4M21 11.8v2a4 4 0 0 1-4 4H4.2"/></svg></span><div><h4>Clean auto-clears, edge cases route to a human</h4><p>The straightforward pass in minutes; anything ambiguous goes to a reviewer with the evidence attached — and rehires re-clear instantly off the 25M-profile layer.</p></div></div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="apipanel">
          <div class="ap-bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">verifyBetter · Live source integrations</span></div>
          <div class="ap-body">
            <div class="apiconn">
              <div class="row"><span class="nm">Aadhaar / UIDAI</span><span class="st">Live</span></div>
              <div class="row"><span class="nm">PAN / NSDL</span><span class="st">Live</span></div>
              <div class="row"><span class="nm">DigiLocker</span><span class="st">Live</span></div>
              <div class="row"><span class="nm">EPFO / UAN</span><span class="st">Live</span></div>
              <div class="row"><span class="nm">Bank penny-drop</span><span class="st">Live</span></div>
              <div class="row"><span class="nm">Pan-India courts</span><span class="st">Live</span></div>
            </div>
            <div class="tatladder">
              <div class="tatrow"><span class="tv">Seconds</span><span class="tl">Identity — Aadhaar &amp; PAN validated via API</span></div>
              <div class="tatrow"><span class="tv">Minutes</span><span class="tl">Criminal — AI scans court &amp; police records</span></div>
              <div class="tatrow"><span class="tv">&lt;24 hr</span><span class="tl">Full six-point report · 50K+ cases a day</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ${aiNote('AI Cole · verification agent', 'Records read by AI, checked by API, reviewed by a human', 'Court-record NLP + document OCR + live source APIs clear the clean cases in minutes and route only the ambiguous ones to a reviewer — with liveness stopping spoofed identities.', '50K+ cases/day · <24 hr TAT · 99.2% face-match')}
    `,
  },
  outcomeSlide('vf4b', 'What verification at frontline speed protects.', [
    { n: '<24 hr', what: 'Hiring speed, kept', how: 'Verification stops being the bottleneck between offer and first shift — high-churn roles fill this week, not next.', proof: '50K+ cases/day · minutes for identity' },
    { n: '1', what: 'Bad hire caught early pays for thousands of checks', how: 'A theft, an assault, one fraudulent identity in a customer\\u2019s home — the incident you prevent is the whole business case.', proof: 'Swiggy · Licious · Royal Orchid live' },
    { n: '−50%+', what: 'Re-verification cost on rehires', how: 'Frontline churn means the same workers return; profiles on the 25M+ layer re-clear in minutes instead of full-price rechecks.', proof: 'Shared worker-intelligence layer' },
    { n: '100%', what: 'Defensible, DPDPA-compliant records', how: 'Red/yellow/green case files with dated checks and PDF reports — when a client or regulator asks, you answer same-day.', proof: 'Audit-ready case trail, every worker' },
  ], 'Batch of 50 real candidates, all six checks, benchmarked on TAT and cost against your current vendor.'),
  {
    id: 'vf5', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Send us 50 hires. Reports back inside 24 hours.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>A 50-case pilot batch</h4><p>Real candidates, all six checks, verified against your current vendor's TAT and cost.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>API into your ATS</h4><p>One-click initiation from your hiring flow — candidates verify themselves on their own phones.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Portfolio dashboard</h4><p>Your compliance team gets the red/yellow/green view across every active case, live.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Trusted by Swiggy · Licious · Royal Orchid Hotels — DPDPA-compliant, 100% digital</div>
    </div>`,
  },
]

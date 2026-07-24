import type { SlideDef } from '../lib/types'
import { bframe, fi, icons, outcomeSlide, problemSlides } from './html'

export const mfgStorySlides: SlideDef[] = [
  {
    id: 'ms1', theme: 'dark', title: 'Manufacturing story cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter for manufacturing · contract &amp; plant workforce</span>
      <h1 class="rise" style="animation-delay:.15s">Run the plant. <span style="color:var(--yellow)">We run the workforce behind it.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Every contract worker — sourced, verified, gate-passed, attended, paid and kept compliant on one platform, with AI agents working underneath. From the vendor's licence to the worker's payslip, one record, one system.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">3,000+</div><div class="l">Vendors on one rule engine (Reliance)</div></div>
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage</div></div>
        <div class="stat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk</div></div>
        <div class="stat"><div class="n">100%</div><div class="l">Gate entry on a verified pass</div></div>
      </div>
      <div class="mdcover ghost">MFG</div>
    </div>`,
  },
  ...problemSlides('ms1b', 'For the plant & compliance head', 'Your plant runs on contract labour you can barely see.', 'And the liability for all of it sits with you.', [
    { pain: 'Contract labour is now 40% of the floor', painDetail: 'In large plants the contract share of non-managerial work has roughly doubled to ~40% — a workforce that turns over fast and lives across dozens of vendors.', painStat: '~40% contract share · 20–35% attrition (India mfg)', fix: 'One verified pool, deployed against work orders', fixDetail: 'Source from the 25M+ verified pool, map every worker to a work order and contractor, and track headcount against each vendor’s licensed strength.', fixStat: 'Reliance: 300K workers · 3,000+ vendors, one engine' },
    { pain: 'You can’t prove who’s inside the gate', painDetail: 'Paper gate registers, unverified contractor lists, no line between "on the roster" and "actually on site" — an auditor’s and a safety officer’s nightmare.', painStat: 'Manual gate registers ≠ audit evidence', fix: 'Gate pass gated on verification + induction', fixDetail: 'A digital gate pass issues only behind a valid work order, BGV and safety induction; biometric at the gate; every entry timestamped and logged.', fixStat: 'IOWMS gate-pass + VAMS visitor flow, live at BPCL' },
    { pain: '75% of industrial accidents are contract workers', painDetail: 'The people most exposed to injury are the ones your safety induction reaches least — and each incident is a life, a shutdown and a liability.', painStat: '~75% of factory accidents involve contract labour', fix: 'Deterministic safety induction, enforced', fixDetail: 'SOP + video + quiz + certificate that a worker must clear before the pass activates — ISO-ready logs proving every worker was inducted.', fixStat: 'Deterministic flow · audit-ready per worker' },
    { pain: 'Vendor PF/ESI defaults land on the principal employer', painDetail: 'As principal employer you inherit CLRA obligations and every contractor’s statutory gap — discovered, usually, at the audit.', painStat: 'CLRA + EPFO 7Q/14B exposure is yours', fix: 'Challan OCR + CLRA compliance, monthly', fixDetail: 'Every vendor challan read and reconciled worker-by-worker; licence-strength and WC-policy expiries flagged before they become a notice.', fixStat: 'Reliance: −80% vendor non-compliance' },
  ], 'Bertrand et al. (Econometrica 2025) contract-labour share · Safe in India CRUSHED 2025 · BetterPlace deployments'),
  {
    id: 'ms2', theme: 'dark', title: 'The plant lifecycle',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">One platform · the whole contract-labour lifecycle</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">From "the vendor sends 200 workers" to a compliant payslip.</h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(6,1fr);margin-top:22px;">
        <div class="rstage"><div class="rn">01</div><h4>Source</h4><ul><li>Verified 25M+ pool</li><li>Vendor + work-order mapped</li><li>Licence-strength checked</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Verify</h4><ul><li>Six-point BGV</li><li>WC policy on file</li><li>&lt;24 hr</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Gate &amp; onboard</h4><ul><li>Safety induction</li><li>Gate pass issued</li><li>Docs + e-sign on phone</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Attend</h4><ul><li>Face + geo at the gate</li><li>Shift &amp; roster</li><li>Factory approval flows</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Pay &amp; comply</h4><ul><li>Challan OCR + CLRA</li><li>Statutory filings</li><li>Vendor reconciliation</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Upskill</h4><ul><li>Safety &amp; technical</li><li>Vernacular reels</li><li>Certification tracking</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Every stage writes to <b>one worker record</b> — so a gate pass can’t open without a work order, a BGV and a safety induction behind it.</div>
    </div>`,
  },
  {
    id: 'ms3', theme: 'light', title: 'Verify, gate & comply',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Gate &amp; compliance · the factory surface</span>
        <h2 class="rise" style="animation-delay:.08s;">Nobody enters your plant <span style="color:var(--navy)">without the paperwork behind them.</span></h2>
        <div class="featlist">
          ${fi(icons.repeat, 'Work-order deployment', 'Every contract worker mapped to a work order / PO; headcount, wages and billing tracked against it, per contractor.', 0.24)}
          ${fi(icons.shield, 'CLRA + WC policy', 'Worker counts kept inside each contractor’s licensed strength; Workmen’s Compensation cover recorded per worker, expiries flagged before anyone works uninsured.', 0.32)}
          ${fi(icons.lock, 'Gate pass, gated', 'A digital pass issues only behind a valid work order, BGV and cleared safety induction — biometric at the gate, VAMS-style visitor flow, every entry logged.', 0.40)}
          ${fi(icons.check, 'Factory approval flows', 'Multi-level, plant-configured sign-off for deployment, regularisation, overtime and exits — exactly how your plant approves.', 0.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${bframe('assets/product/gobetter/verify/bgv-address-legal-verification.jpg', 'gobetter · Verify · Address, court & police checks', 'Six-point BGV behind every gate pass — <b>dated, audit-ready</b>')}
      </div>
    </div>`,
  },
  {
    id: 'ms4', theme: 'light', title: 'Attend & pay',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Attend → pay → comply · the money screens</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Face-verified attendance in. <span style="color:var(--navy)">Compliant, leakage-free payroll out.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/gobetter/attendance/roster-weekly-grid.jpg', 'gobetter · Attend · Roster', 'Shift &amp; roster across the plant — bulk tools, publish step')}
        ${bframe('assets/product/gobetter/payroll/vendor-reconciliation-dashboard.jpg', 'gobetter · Payroll · Reconcile', 'Every vendor’s statutory status — <b>pending · failed · success</b>')}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:94ch;">Attendance computes straight into payroll with minimum-wage validation; challan OCR reconciles every contractor worker-by-worker — the principal-employer exposure closes before the auditor arrives.</p>
    </div>`,
  },
  {
    id: 'ms5', theme: 'light', title: 'Safety & technical training',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Upskill · safety &amp; technical</span>
        <h2 class="rise" style="animation-delay:.08s;">The training reaches the worker <span style="color:var(--navy)">most likely to get hurt.</span></h2>
        <div class="featlist">
          ${fi(icons.play, 'Safety in reels, in their language', 'Bite-sized vernacular safety and SOP content on the worker’s own phone — 88% completion vs 25% industry, so induction actually lands.', 0.24)}
          ${fi(icons.doc, 'Proctored certification', 'Face-detection proctored assessments and tamper-proof certificates — the audit proof that a worker is qualified for the machine.', 0.32)}
          ${fi(icons.shield, 'Certification gating', 'A worker can’t be rostered to a line or a machine until the required certification is current — role–skill mapping enforces it.', 0.40)}
          ${fi(icons.lang, 'One upload, 35+ languages', 'Record a safety module once; every migrant worker watches it in their language by the same shift.', 0.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="phones" style="min-height:clamp(280px,30vw,390px);">
          <div class="phone p1"><img src="assets/product/figma/skilling/skillbetter-mobile-image-mcq-feedback.png" alt="Safety assessment"/></div>
          <div class="phone p2"><img src="assets/product/figma/skilling/mobile-learning-home-new-feed.png" alt="Reels-style safety feed"/></div>
          <div class="phone p3"><img src="assets/product/app-gamification.webp" alt="Certification journey"/></div>
        </div>
        <div class="phonecap" style="margin-top:12px;">Safety reels · proctored assessment · certification — Hindalco runs 60+ technical modules this way</div>
      </div>
    </div>`,
  },
  {
    id: 'ms6', theme: 'darker', title: 'The plant agent bench',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">AI Labs · agents built for the factory floor</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">A bench of AI specialists working your contract workforce.</h2>
      <div class="agents" style="margin-top:22px;">
        <div class="ag rise" style="--ac:#3DBE7B;animation-delay:.24s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Safety induction</div><h4>AI Rhea</h4><p>Walks every worker through SOP steps with video verification and a quiz — deterministic, audit-ready, before the gate pass activates.</p></div>
        <div class="ag rise" style="--ac:#32CAD4;animation-delay:.31s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Contractor verification</div><h4>AI Cole</h4><p>Face-match, OCR and API checks on every vendor worker’s documents before they reach the gate.</p></div>
        <div class="ag rise" style="--ac:#FFC401;animation-delay:.38s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Statutory watchdog</div><h4>AI Dev</h4><p>Chases vendor challans, reads them by OCR and flags short-payments, licence-strength breaches and WC expiries to the principal employer.</p></div>
        <div class="ag rise" style="--ac:#7C6BF0;animation-delay:.45s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Technical tutor</div><h4>AI Theo</h4><p>Answers machine, SOP and safety questions in the operator’s language, cited from your manuals — 4 seconds, any shift.</p></div>
        <div class="ag rise" style="--ac:#FF9518;animation-delay:.52s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat soon"><span class="d"></span>Soon</span></div><div class="role">Shift &amp; shortfall</div><h4>AI Zara</h4><p>Spots tomorrow’s line shortfalls, messages the vendor SPOC and tracks the replacement all the way to the gate.</p></div>
        <div class="ag rise" style="--ac:#FF7A59;animation-delay:.59s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Bulk hiring</div><h4>AI Jack</h4><p>Screens seasonal and ramp-up intake over WhatsApp and voice, ranks by fit and locality, and hands the plant a ready shortlist.</p></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:20px;animation-delay:.68s">All on the AI Labs runtime — deterministic where safety and compliance demand it, private LLMs, ₹0.37 per interaction</div>
    </div>`,
  },
  {
    id: 'ms7', theme: 'dark', title: 'Proof',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof · plants already running on BetterPlace</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;">Manufacturers who already run their floor on this.</h2>
      <div class="cases" style="margin-top:16px;">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.2s"><div class="ch"><span class="cn">Hindalco · Aditya Birla</span><span class="ct">Metals · $26B</span></div><p>E-Karyashala: self-paced, gamified shop-floor training with mandatory completion — 60+ technical modules, 50+ assessments.</p><div class="cm"><div class="m"><div class="mn">3×</div><div class="ml">training coverage</div></div><div class="m"><div class="mn">1,000+</div><div class="ml">workers upskilled</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.28s"><div class="ch"><span class="cn">Reliance O2C</span><span class="ct">Oil, gas &amp; chemicals</span></div><p>Biometric/tablet attendance at factory locations, integrated across a 300K+ worker, 3,000+ vendor operation on the goBetter rule engine.</p><div class="cm"><div class="m"><div class="mn">−90%</div><div class="ml">payroll leakage</div></div><div class="m"><div class="mn">−80%</div><div class="ml">vendor non-compliance</div></div></div></div>
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.36s"><div class="ch"><span class="cn">AGI Greenpac</span><span class="ct">Glass manufacturing</span></div><p>Shift-wise machine &amp; safety checklists digitised for hazard-free operation, per shift, per line.</p><div class="cm"><div class="m"><div class="mn">Per-shift</div><div class="ml">safety checklists</div></div></div></div>
        <div class="case rise" style="--pc:#FF9518;animation-delay:.44s"><div class="ch"><span class="cn">BPCL IOWMS</span><span class="ct">Petroleum · vendor workforce</span></div><p>Integrated Onboarding &amp; Workforce Management: gate pass, work order, VAMS visitor flow and incentives across the vendor network.</p><div class="cm"><div class="m"><div class="mn">Gate-to-pay</div><div class="ml">one platform</div></div></div></div>
      </div>
    </div>`,
  },
  outcomeSlide('ms8', 'What one platform changes across the plant.', [
    { n: 'Crores', what: 'Leakage &amp; inherited liability, recovered', how: 'Face-verified gate attendance kills ghost payroll; challan OCR + CLRA tracking kills the vendor statutory exposure you currently inherit blind.', proof: 'Reliance: −90% leakage · −80% vendor risk' },
    { n: 'Audit-ready', what: 'Every worker who entered, provable', how: 'Gate pass behind BGV + induction, timestamped entries, certification on file — the safety and labour audit answers itself.', proof: 'ISO-ready logs · CLRA registers' },
    { n: '88%', what: 'Safety training that actually lands', how: 'Vernacular reels reach the contract worker most exposed to injury — 88% completion vs 25%, the difference between a signed form and a safe worker.', proof: 'Hindalco: 3× training coverage' },
    { n: '1', what: 'Platform, not a vendor patchwork', how: 'Source, verify, gate, attend, pay, comply and upskill on one worker record — one contract, one compliance standard, across every plant.', proof: 'The goBetter suite underneath' },
  ], 'Pick one plant — we’ll run gate-to-payslip on it for a quarter and hand your CFO and safety head the before/after.'),
  {
    id: 'ms9', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">One plant. One quarter. Gate to payslip.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Gate + compliance pilot</h4><p>Digital gate pass behind BGV and safety induction on one plant — with work-order and CLRA tracking live from day one.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Challan health check</h4><p>Last month’s vendor challans through the OCR reconciliation — every short-payment, wrong UAN and licence-strength breach, itemised.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Safety agent</h4><p>Your induction SOP as a deterministic agent with camera proof and certificates — proving every contract worker was inducted.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in · Onkar Vartak — Sales · onkar.vartak@betterplace.co.in</div>
    </div>`,
  },
]

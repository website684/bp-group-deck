import type { SlideDef } from '../lib/types'
import { groupSlides } from './group'
import { bframe, icons, outcomeSlide, problemSlide } from './html'

const groupPayroll = groupSlides.find((s) => s.id === 's8b')!

export const payrollSlides: SlideDef[] = [
  {
    id: 'py1', theme: 'dark', title: 'Payroll cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">manageBetter · payroll &amp; vendor statutory compliance</span>
      <h1 class="rise" style="animation-delay:.15s">Never inherit a vendor's <span style="color:var(--yellow)">PF/ESI liability</span> again.</h1>
      <p class="sub rise" style="animation-delay:.3s">As principal employer, you are jointly liable when a contractor underpays statutory dues. We check every vendor challan, every month — worker by worker.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage</div></div>
        <div class="stat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk</div></div>
        <div class="stat"><div class="n">100%</div><div class="l">Rupees traceable — audit-ready</div></div>
      </div>
      <div class="mdcover ghost">PF</div>
    </div>`,
  },
  problemSlide('py1b', 'For compliance & finance', 'The penalty clock is already running on someone’s delay.', [
    { pain: 'A vendor’s PF default becomes your bill', painDetail: 'As principal employer you are jointly liable under contract-labour law when a contractor underpays — and you find out at the audit, years of interest later.', painStat: '7Q interest: 12% p.a. + 14B damages up to 100% of arrears', fix: 'Challan OCR reconciles every vendor, monthly', fixDetail: 'PF/ESI challans read automatically and matched worker-by-worker against computed dues; gaps flagged the month they happen, with documented due diligence.', fixStat: 'Reliance: −80% vendor non-compliance' },
    { pain: 'Minimum-wage misses hide in salary structures', painDetail: 'State- and skill-level wage floors change; one wrong Basic in a template quietly violates on thousands of workers.', painStat: 'Per-state floors · revised twice yearly', fix: 'Validation blocks bad structures before payroll', fixDetail: 'Inline minimum-wage guardrails stop a non-compliant Basic at data entry — not in a labour-department notice.', fixStat: 'Blocking error, screenshot on the next slide' },
    { pain: 'Payroll leakage no one can locate', painDetail: 'Ghost workers, unverified overtime and manual consolidation mean you pay a workforce that partially isn’t there.', painStat: 'Time theft ≈ 1.5–5% of gross payroll · APA', fix: 'Pay computes from face-verified attendance only', fixDetail: 'The attendance→payroll pipe is one system: no punch, no pay — and every rupee traces back to a verified log.', fixStat: 'Reliance: −90% payroll leakage' },
    { pain: 'Audit prep is a quarterly fire drill', painDetail: 'Challans in email, registers in Excel, proofs with vendors — assembling one audit response takes weeks.', painStat: 'Evidence scattered across 5+ places', fix: 'The audit file writes itself all year', fixDetail: 'Challan history, reconciliation status and batch trails live on the platform — PF · ESI · PT · LWF, one workspace each.', fixStat: 'Same-day audit answers' },
  ], 'EPFO Sections 7Q & 14B (post-Jun 2024 rates) · American Payroll Association · Reliance Retail deployment'),
  { ...groupPayroll, id: 'py2', title: 'Challan OCR & reconciliation' },
  {
    id: 'py2b', theme: 'light', title: 'Capability map',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The full surface — payroll plus the compliance shield</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">From attendance to statutory filing, <span style="color:var(--navy)">every step on one platform.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.zap}</svg></span><h4>Automated computation</h4><p>Payroll computed straight from attendance — zero manual entry</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><h4>Minimum-wage validation</h4><p>Per state and skill category, checked on every run</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Salary structure templates</h4><p>Reusable compensation rules — configure once, apply to thousands</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.card}</svg></span><h4>Wage-register &amp; invoice recon</h4><p>Vendor invoices reconciled against actual attendance</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.check}</svg></span><h4>Auto compliance payments</h4><p>PF, ESI, Professional Tax, LWF — separate workspaces, on schedule</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.search}</svg></span><h4>Challan OCR + recon</h4><p>Vendor PF/ESI challans read and matched worker-by-worker</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Final settlement &amp; reimbursements</h4><p>F&amp;F and claims inside the same operating surface</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Audit trail</h4><p>Every rupee traceable — batch stages, statuses, history</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">Payroll Inputs · Run Payroll · Final Settlement · Invoice · Reports · Compliances · Reimbursements — the actual module map</div>
    </div>`,
  },
  {
    id: 'py3', theme: 'light', title: 'Reconciliation console',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The compliance control room · real product</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Every vendor's status on one screen — <span style="color:var(--navy)">before the auditor asks.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/gobetter/payroll/vendor-reconciliation-dashboard.jpg', 'gobetter · Payroll · Reconcile Dashboard', 'Vendors by period — <b>pending · failed · awaiting payrun · success</b>')}
        ${bframe('assets/product/gobetter/payroll/vendor-reconciliation-table-detail.jpg', 'gobetter · Payroll · Vendor Detail', 'Vendor-level payroll tied to reconciliation status and actions')}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">This is the proof behind the claim: principal employers monitor statutory exposure on a dashboard — not through email chains and spreadsheets.</p>
    </div>`,
  },
  {
    id: 'py4', theme: 'light', title: 'Payroll operations',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Payroll operations · real product</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">From attendance to bank file — <span style="color:var(--navy)">zero manual entry.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/gobetter/payroll/payroll-batch-status-pipeline.jpg', 'gobetter · Payroll · Run Payroll', 'The batch pipeline — see where a pay run is waiting or failed before drilling down')}
        ${bframe('assets/product/gobetter/payroll/pf-challan-upload-list.jpg', 'gobetter · Payroll · Compliances', 'PF challan upload &amp; history — <b>statutory evidence, on the record</b>')}
      </div>
      <div class="tags rise" style="animation-delay:.4s;margin-top:14px;">
        <span class="tag">Computation from attendance</span><span class="tag">Minimum-wage validation by state</span><span class="tag">Salary structure templates</span><span class="tag">Vendor invoicing in-platform</span><span class="tag">PF · ESI · PT · LWF workspaces</span>
      </div>
    </div>`,
  },
  {
    id: 'py4c', theme: 'light', title: 'The payroll workspace',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The payroll workspace · latest product design</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Attendance → variables → eligibility → run. <span style="color:var(--navy)">Never one opaque button.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/figma/payroll/run-payroll-batch-overview.jpg', 'gobetter · Payroll · Run Payroll', 'The batch workspace — month lock, attendance input, workflow progress, <b>employee states</b>', true)}
        ${bframe('assets/product/figma/payroll/salary-structure-validation-error.jpg', 'gobetter · Payroll · Salary Structure', 'A compliance guardrail firing — <b>Basic pay below the ₹6,000 configured minimum is blocked inline</b>', 'mid')}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:14px;margin-bottom:64px;max-width:94ch;">One-time components (a Diwali bonus, a Pongal incentive) apply to one month without touching the salary template — and minimum-wage validation blocks a bad structure before it ever reaches a pay run.</p>
    </div>`,
  },
  {
    id: 'py4b', theme: 'light', title: 'Controlled pay cycles',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Controls &amp; configuration · real product</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">A pay run is a controlled workflow, <span style="color:var(--navy)">not a spreadsheet ritual.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/gobetter/payroll/salary-structure-templates.jpg', 'gobetter · Payroll · Salary Structures', 'Reusable salary structure templates — compensation rules configured once')}
        ${bframe('assets/product/gobetter/payroll/raise-invoice-vendor.jpg', 'gobetter · Payroll · Raise Invoice', 'Vendor invoicing inside the platform — tied to the same attendance and payroll data')}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">Month picker → inputs → batch pipeline → disbursement: operators see where a run is waiting or failed before drilling down, and vendors invoice against verified numbers.</p>
    </div>`,
  },
  {
    id: 'py5', theme: 'dark', title: 'Proof',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof at scale</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">3,000+ vendors. 300K workers. <span style="color:var(--yellow)">One compliance shield.</span></h2>
      <div class="cases" style="grid-template-columns:1fr;max-width:820px;margin-top:18px;">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.22s"><div class="ch"><span class="cn">Reliance Retail</span><span class="ct">Retail · 18,918 stores</span></div><p>Replaced disintegrated systems and manual compliance with the goBetter rule engine — one integrated system across every vendor and store.</p><div class="cm"><div class="m"><div class="mn">90%</div><div class="ml">↓ payroll leakage</div></div><div class="m"><div class="mn">80%</div><div class="ml">↓ vendor non-compliance</div></div><div class="m"><div class="mn">7×</div><div class="ml">faster customisation</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.4s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Every challan checked, every month. <b>You see gaps before the auditor does — with documented proof of due diligence.</b></div>
    </div>`,
  },
  outcomeSlide('py5b', 'What this saves you — beyond the payroll team’s weekends.', [
    { n: '−90%', what: 'Payroll leakage recovered', how: 'Pay computes from face-verified attendance with minimum-wage guardrails — over- and under-payment both stop.', proof: 'Reliance: 90% ↓ leakage' },
    { n: '−80%', what: 'Principal-employer exposure', how: 'Every vendor challan OCR-checked monthly, worker-by-worker — documented due diligence under contract-labour law instead of discovered liability at audit.', proof: '3,000+ vendors reconciled at Reliance' },
    { n: 'Days → hours', what: 'Pay-cycle close time', how: 'Controlled batches with visible failure states replace spreadsheet consolidation — reruns target the failed slice, not the whole month.', proof: 'Batch pipeline with per-stage status' },
    { n: '0', what: 'Audit-day surprises', how: 'Challan history, reconciliation records and an immutable trail live on the platform — when the notice arrives, the evidence is already filed.', proof: 'PF · ESI · PT · LWF workspaces' },
  ], 'Send one month of vendor challans through our OCR health check — the gap report usually pays for the pilot.'),
  {
    id: 'py6', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Bring last month's challans. We'll show you the gaps.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>A compliance health check</h4><p>Run one month of real vendor challans through the OCR reconciliation — see every short-payment and wrong UAN.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>One-vendor pilot</h4><p>Your highest-headcount contractor, one payroll period, reconciled worker-by-worker.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Roll out the shield</h4><p>Every vendor uploads into the platform; you monitor exposure from one dashboard.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in · Onkar Vartak — Sales · onkar.vartak@betterplace.co.in</div>
    </div>`,
  },
]

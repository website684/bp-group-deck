import type { SlideDef } from '../lib/types'
import { groupSlides } from './group'
import { bframe } from './html'

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
  { ...groupPayroll, id: 'py2', title: 'Challan OCR & reconciliation' },
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

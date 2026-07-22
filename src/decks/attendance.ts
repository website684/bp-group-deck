import type { SlideDef } from '../lib/types'
import { groupSlides } from './group'
import { bframe, icons } from './html'

const groupAttend = groupSlides.find((s) => s.id === 's8')!

export const attendanceSlides: SlideDef[] = [
  {
    id: 'at1', theme: 'dark', title: 'Attendance cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">manageBetter · attendance &amp; workforce management</span>
      <h1 class="rise" style="animation-delay:.15s">Live attendance. <span style="color:var(--yellow)">Zero spoofing.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Face-verified, geo-fenced attendance feeding rosters, approvals and payroll — one system for every site, shift and vendor.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage</div></div>
        <div class="stat"><div class="n">967</div><div class="l">Sites live at Zepto alone</div></div>
        <div class="stat"><div class="n">18,026</div><div class="l">Face-registered in one org</div></div>
        <div class="stat"><div class="n">Minutes</div><div class="l">Shortfall fixes, not hours</div></div>
      </div>
      <div class="mdcover ghost">AT</div>
    </div>`,
  },
  { ...groupAttend, id: 'at2', title: 'Face + geo attendance' },
  {
    id: 'at2b', theme: 'light', title: 'Capability map',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The full surface — one system, not a punch clock</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Attendance is the front door. <span style="color:var(--navy)">Behind it sits a workforce OS.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.user}</svg></span><h4>Facial + geo attendance</h4><p>Face recognition with AI spoof detection, geo-fenced marking</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.clock}</svg></span><h4>Rostering &amp; shifts</h4><p>Weekly grids, reusable shift cards, bulk tools, publish step</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Demand planning</h4><p>Forecast and plan deployment across sites; shortfall management in minutes</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Leave management</h4><p>Full leave workflows — periods, locations, optional holidays</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>Vendor / CLMS control</h4><p>Per-vendor deployment rules, work-order tracking, compliance view</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.check}</svg></span><h4>Approvals queue</h4><p>Regularisation, leave, reconciliation, possible spoofs — bulk approve/reject with SLA counters</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.warn}</svg></span><h4>Alert management</h4><p>Shift-wise, overtime, leave, sync and regularisation alerts</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Reports, self-serve</h4><p>Muster roll, attendance log, overtime — filtered by role, gender, location</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">Live dashboards: real-time present/absent by site · exception filter pills: irregularity, no-show, review, weekly-off</div>
    </div>`,
  },
  {
    id: 'at3', theme: 'light', title: 'Rostering console',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The ops console · real product</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">Plan a week of shifts for a whole site — <span style="color:var(--navy)">then hit publish.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/gobetter/attendance/roster-weekly-grid.jpg', 'gobetter · Attend · Roster Management', 'Weekly associate-by-day roster — bulk tools, copy/paste, undo, <b>publish step</b>')}
        ${bframe('assets/product/gobetter/attendance/roster-associate-level-shifts.jpg', 'gobetter · Attend · Associate shifts', 'Drill to one associate’s week — inspect or change individual shift assignments')}
      </div>
      <div class="tags rise" style="animation-delay:.4s;margin-top:14px;">
        <span class="tag">Reusable shift cards — define timings once</span><span class="tag">Daily shift counts</span><span class="tag">Site &amp; associate filters</span><span class="tag">Bulk operations with undo</span>
      </div>
    </div>`,
  },
  {
    id: 'at3b', theme: 'light', title: 'Policy engine',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Configuration depth · real product</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Your attendance policy, <span style="color:var(--navy)">enforced by software — not circulars.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/gobetter/attendance/org-level-configuration.jpg', 'gobetter · Attend · Org Configuration', 'The policy engine — full/half-day thresholds, OT caps, buffers, <b>edit windows</b>', true)}
        ${bframe('assets/product/gobetter/attendance/holiday-configuration.jpg', 'gobetter · Attend · Holiday Configuration', 'Regional, public and optional holidays — by location or selected sites', true)}
      </div>
      <div class="tags rise" style="animation-delay:.4s;margin-top:14px;">
        <span class="tag">Forced logout &amp; elapsed-hour rules</span><span class="tag">Manager approvals &amp; OT pre-approval</span><span class="tag">Associate self-regularisation limits</span><span class="tag">Site auto-configuration</span><span class="tag">Verify-status checks at marking</span><span class="tag">Named BetterPlace + client SPOCs</span>
      </div>
    </div>`,
  },
  {
    id: 'at4', theme: 'light', title: 'Approvals & exceptions',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Exceptions &amp; governance · real product</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Every exception lands in one queue — <span style="color:var(--navy)">including possible spoofs.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/gobetter/attendance/approvals-regularisation-queue.jpg', 'gobetter · Attend · Approvals', 'One approvals queue: regularisation, leave, reconciliation and the <b>AI possible-spoofs</b> tab')}
        ${bframe('assets/product/gobetter/attendance/associate-filters-regularization.jpg', 'gobetter · Attend · Exception console', 'Exception filter pills — irregularity, no-show, review — with <b>bulk log edit</b>')}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">Approve All / Reject All with expiring-SLA counters: managers clear a day's exceptions in one sitting, and every correction stays on the log.</p>
    </div>`,
  },
  {
    id: 'at5', theme: 'dark', title: 'Proof',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof at scale</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">15,000 workers. 967 sites. <span style="color:var(--yellow)">40% cheaper to run.</span></h2>
      <div class="cases" style="margin-top:18px;">
        <div class="case rise" style="--pc:#D0271D;animation-delay:.22s"><div class="ch"><span class="cn">Zepto</span><span class="ct">Quick-commerce · 22 cities</span></div><p>Geo-based attendance with AI spoof detection and a real-time custom dashboard across dark stores.</p><div class="cm"><div class="m"><div class="mn">40%</div><div class="ml">cost savings</div></div><div class="m"><div class="mn">15k</div><div class="ml">workers</div></div><div class="m"><div class="mn">967</div><div class="ml">sites</div></div></div></div>
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.3s"><div class="ch"><span class="cn">Reliance Retail</span><span class="ct">Retail · 18,918 stores</span></div><p>One integrated system for 300K+ workers across 3,000+ vendors on the goBetter rule engine.</p><div class="cm"><div class="m"><div class="mn">90%</div><div class="ml">↓ payroll leakage</div></div><div class="m"><div class="mn">7×</div><div class="ml">faster customisation</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Spoof-proof attendance is the foundation of leakage-free payroll — <b>the two ship as one system.</b></div>
    </div>`,
  },
  {
    id: 'at6', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Pilot one site. Watch the leakage stop.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>One-site pilot, your rules</h4><p>We configure your thresholds, shifts and geo-fences on one site — live in days, not quarters.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Side-by-side month</h4><p>Run one payroll cycle on our attendance data next to your current source and count the difference.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Scale by site, not by contract</h4><p>Add sites, cities and vendors on the same policy engine — one dashboard for all of it.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in · Onkar Vartak — Sales · onkar.vartak@betterplace.co.in</div>
    </div>`,
  },
]

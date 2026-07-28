import type { SlideDef } from '../lib/types'
import { groupSlides } from './group'
import { bframe, fi, icons, outcomeSlide, problemSlides, aiNote } from './html'

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
  ...problemSlides('at1b', 'For the ops leader', 'You already suspect the muster is lying to you.', 'And the exceptions are eating your supervisors’ week.', [
    { pain: 'Buddy punching pays ghosts every month', painDetail: '74% of employers lose to time theft — a colleague swipes for a friend who isn’t on site, and payroll pays reality it never saw.', painStat: '≈2.2% of gross payroll lost · Nucleus Research', fix: 'Face + geo check-in, spoofs queued for review', fixDetail: 'AI face-match with liveness inside a geo-fence; suspect punches land in a "Possible spoofs" approval tab, not in payroll.', fixStat: 'Zepto: 0 spoofs across 967 sites' },
    { pain: 'You learn about no-shows at shift start', painDetail: 'The gap surfaces when the line is already short — then it’s WhatsApp panic and overtime you didn’t budget.', painStat: 'Frontline attrition peaks 23% in festive months', fix: 'Live present/absent by site, roster gaps flagged', fixDetail: 'Real-time dashboards and weekly roster grids show tomorrow’s shortfall today — filled in minutes, not discovered at 9 AM.', fixStat: 'Shortfall fixes: hours → minutes' },
    { pain: 'OT and attendance disputes eat supervisor hours', painDetail: 'Missed punches become arguments; corrections happen in Excel with no trail an auditor will accept.', painStat: 'Manual musters = unauditable corrections', fix: 'Worker self-service with controlled regularisation', fixDetail: 'Workers see hours, earnings and IN/OUT proof on their phone and correct errors through a guided, reasoned, approved flow.', fixStat: 'Every correction logged + approved' },
    { pain: 'Every site runs its own attendance culture', painDetail: 'Thresholds, buffers and holiday rules live in local spreadsheets — policy exists on paper, not in practice.', painStat: 'Multi-site = multi-truth', fix: 'One policy engine across every site and vendor', fixDetail: 'Org-level thresholds, OT caps, edit windows, holiday tables and per-vendor rules — configured once, enforced everywhere.', fixStat: 'Reliance: 3,000+ vendors, one rule engine' },
  ], 'Nucleus Research / APA time-theft studies · BetterPlace Frontline Index FY23 · client deployments'),
  { ...groupAttend, id: 'at2', title: 'Face + geo attendance' },
  {
    id: 'at2c', theme: 'dark', title: 'The worker’s view',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The worker's own phone · latest product design</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Workers see their hours, their pay — and fix errors themselves.</h2>
      <div class="mediasplit" style="align-items:center;">
        <div>
          <div class="featlist" style="margin-top:10px;">
            <div class="fi rise" style="animation-delay:.24s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icons.card}</svg></span><div><h4>Attendance-to-pay transparency</h4><p>The monthly view connects working days, OT and leave to a visible earnings total — "why is my salary short?" calls stop.</p></div></div>
            <div class="fi rise" style="animation-delay:.32s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icons.clock}</svg></span><div><h4>Daily logs with IN/OUT proof</h4><p>Hours, shift, role, site and map on every day — pending approvals visible to the worker, not just HR.</p></div></div>
            <div class="fi rise" style="animation-delay:.40s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icons.check}</svg></span><div><h4>Controlled self-regularisation</h4><p>Missed punch? The worker corrects it in a guided flow — time, shift, structured reason, review, send. Every correction lands in the manager's approval queue.</p></div></div>
          </div>
        </div>
        <div class="rise" style="animation-delay:.3s">
          <div class="phones" style="min-height:clamp(280px,30vw,390px);">
            <div class="phone p1"><img src="assets/product/figma/attendance/daily-attendance-log-pending-approval.png" alt="Daily attendance log"/></div>
            <div class="phone p2"><img src="assets/product/figma/attendance/monthly-attendance-summary.png" alt="Monthly summary with earnings"/></div>
            <div class="phone p3"><img src="assets/product/figma/attendance/regularisation-final-review.png" alt="Regularisation review"/></div>
          </div>
          <div class="phonecap" style="margin-top:12px;">Daily log · monthly summary with earnings · guided regularisation — current product design</div>
        </div>
      </div>
    </div>
    ${aiNote('AI Zara · roster agent', 'Absence, predicted before it happens', 'Models trained on punch history, leave patterns and festive seasonality flag likely no-shows a day ahead — the replacement is confirmed before the shift opens.', 'Absence prediction cuts absenteeism 15–20% (IBM/Humana deployments)')}
    `,
  },
  {
    id: 'at2b', theme: 'light', title: 'Capability map',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The full surface — one system, not a punch clock</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Attendance is the front door. <span style="color:var(--navy)">Behind it sits a workforce OS.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.user}</svg></span><h4>Facial + geo attendance</h4><p>Face recognition with AI spoof detection, geo-fenced marking; faces registered right inside Attend</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.clock}</svg></span><h4>Rostering &amp; shifts</h4><p>Name a shift, set start/end — present &amp; half-day values auto-calculate with a tolerance buffer; roster by grid or Excel</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Demand planning</h4><p>Forecast and plan deployment across sites; shortfall management in minutes</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Leave management</h4><p>Full leave workflows; workers see their quota and apply from the app, managers approve on mobile</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>Vendor / CLMS control</h4><p>Per-vendor deployment rules, work-order tracking, compliance view</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.check}</svg></span><h4>Approvals queue</h4><p>Regularisation, leave, reconciliation, possible spoofs — bulk approve/reject on mobile with SLA counters</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.card}</svg></span><h4>Payslip in the worker app</h4><p>The same app that marks attendance shows each worker their payslip, holidays and salary by month</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Reports, self-serve</h4><p>Muster Roll, Attendance Log &amp; Overtime — the OT report names who worked it, how long, who approved</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">Live dashboards: real-time present/absent by site · exception filter pills: irregularity, no-show, review, weekly-off</div>
    </div>`,
  },
  {
    id: 'at3', theme: 'light', title: 'Rostering console',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">The ops console · rostering &amp; demand</span>
        <h2 class="rise" style="animation-delay:.08s;">Plan a week of shifts for a whole site — <span style="color:var(--navy)">then hit publish.</span></h2>
        <div class="featlist">
          ${fi(icons.clock, 'Shift cards, defined once', 'Name a shift, set the timings and tolerance buffer — reuse it across sites; present and half-day values auto-calculate.', 0.24)}
          ${fi(icons.warn, 'Gaps surface before the shift does', 'The grid flags tomorrow’s unfilled slot today — watch the Thursday gap on the right resolve itself.', 0.32)}
          ${fi(icons.zap, 'Bulk tools with undo', 'Copy a week, paste a pattern, fix one associate’s day — then publish, and everyone is notified on WhatsApp.', 0.40)}
          ${fi(icons.chart, 'Demand planning built in', 'Forecast deployment across sites; shortfall management drops from hours to minutes.', 0.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="conmock rosterviz" data-cycle="2800">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">gobetter · Attend · Roster · Site BLR-04 · Week 32</span><span class="liv">Live</span></div>
          <div class="body">
            <div class="rhead"><span>Associate</span><span>Mon</span><span>Tue</span><span class="today">Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
            <div class="rrow">
              <div class="who"><b>Ravi Kumar</b><span>Security guard</span></div>
              <span class="cellc sh-m" style="--i:0">M</span><span class="cellc sh-m" style="--i:1">M</span><span class="cellc sh-m" style="--i:2">M</span><span class="cellc sh-m" style="--i:3">M</span><span class="cellc sh-e" style="--i:4">E</span><span class="cellc sh-e" style="--i:5">E</span><span class="cellc sh-o" style="--i:6">off</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Sunita Devi</b><span>Housekeeping</span></div>
              <span class="cellc sh-e" style="--i:7">E</span><span class="cellc sh-e" style="--i:8">E</span><span class="cellc sh-o" style="--i:9">off</span>
              <span class="gapcell"><span class="cyc g1">GAP</span><span class="cyc g2">AI: Priya S.</span><span class="cyc g3">Priya S. ✓</span></span>
              <span class="cellc sh-e" style="--i:10">E</span><span class="cellc sh-m" style="--i:11">M</span><span class="cellc sh-m" style="--i:12">M</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Mohan Lal</b><span>Loader · Bay 2</span></div>
              <span class="cellc sh-n" style="--i:13">N</span><span class="cellc sh-n" style="--i:14">N</span><span class="cellc sh-n" style="--i:15">N</span><span class="cellc sh-o" style="--i:16">off</span><span class="cellc sh-n" style="--i:17">N</span><span class="cellc sh-n" style="--i:18">N</span><span class="cellc sh-m" style="--i:19">M</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Asha Kumari</b><span>Store associate</span></div>
              <span class="cellc sh-m" style="--i:20">M</span><span class="cellc sh-o" style="--i:21">off</span><span class="cellc sh-m" style="--i:22">M</span><span class="cellc sh-m" style="--i:23">M</span><span class="cellc sh-m" style="--i:24">M</span><span class="cellc sh-e" style="--i:25">E</span><span class="cellc sh-e" style="--i:26">E</span>
            </div>
            <div class="rfoot">
              <div class="cycpane"><span class="fdot2 r"></span><span><b>1 unfilled shift</b> detected for Thu — housekeeping, evening</span><span class="pubbtn">Publish week</span></div>
              <div class="cycpane"><span class="fdot2 y"></span><span><b>AI Zara suggests Priya S.</b> — 4.8 rating · 2.1 km away · inside OT cap</span><span class="pubbtn">Publish week</span></div>
              <div class="cycpane"><span class="fdot2 g"></span><span><b>Roster published</b> — 27 shifts · 4 associates notified on WhatsApp</span><span class="pubbtn">Published ✓</span></div>
            </div>
          </div>
        </div>
        <div class="bcap">The weekly grid — gaps flagged, AI-suggested, filled and published</div>
      </div>
    </div>
    ${aiNote('Demand forecasting', 'Rosters sized by forecast, not by habit', 'Sales, footfall and order-volume signals size tomorrow’s roster per site — overstaffed valleys and understaffed peaks both shrink.', 'AI scheduling cuts labor waste 18–22% (MIT Sloan)')}
    `,
  },
  {
    id: 'at3b', theme: 'light', title: 'Policy engine',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">The policy engine · what happens on every punch</span>
        <h2 class="rise" style="animation-delay:.08s;">Your attendance policy, <span style="color:var(--navy)">enforced by software — not circulars.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Watch one punch run the gauntlet: every rule you configure — thresholds, buffers, caps, edit windows — fires on every check-in, on every site, identically.</p>
        <div class="tags rise" style="animation-delay:.3s;margin-top:16px;">
          <span class="tag">Full/half-day thresholds</span><span class="tag">Forced logout &amp; elapsed-hour rules</span><span class="tag">OT pre-approval &amp; state caps</span><span class="tag">Self-regularisation limits</span><span class="tag">Holiday tables by region</span><span class="tag">Verify-status checks at marking</span><span class="tag">Per-vendor rules</span>
        </div>
        <p class="lede rise" style="animation-delay:.42s;margin-top:16px;">Configured once at org level, inherited by every site and vendor — <b>Reliance runs 3,000+ vendors on one rule engine.</b></p>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="conmock ruleflow">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">gobetter · Attend · Policy engine</span><span class="liv">Every punch</span></div>
          <div class="body">
            <div class="punch">
              <span class="pav"><svg viewBox="0 0 24 24">${icons.user}</svg></span>
              <div><b>IN punch · Ravi Kumar</b><span>09:04 · BLR-04 main gate</span></div>
              <span class="face">Face match ✓ 99.1%</span>
            </div>
            <div class="rules">
              <div class="rule" style="--i:0"><span class="ri"><svg viewBox="0 0 24 24">${icons.map}</svg></span><b>Geo-fence</b><span class="cfg">150 m radius</span><span class="st ok">✓ Inside fence</span></div>
              <div class="rule" style="--i:1"><span class="ri"><svg viewBox="0 0 24 24">${icons.clock}</svg></span><b>Shift match</b><span class="cfg">Morning 09:00–18:00</span><span class="st ok">✓ In 20-min buffer</span></div>
              <div class="rule" style="--i:2"><span class="ri"><svg viewBox="0 0 24 24">${icons.check}</svg></span><b>Day threshold</b><span class="cfg">Full 9h · half 5h</span><span class="st ok">✓ Full-day eligible</span></div>
              <div class="rule flag" style="--i:3"><span class="ri"><svg viewBox="0 0 24 24">${icons.warn}</svg></span><b>OT cap watch</b><span class="cfg">State quarterly cap</span><span class="st warn">⚠ 38 of 40h this month</span></div>
              <div class="rule" style="--i:4"><span class="ri"><svg viewBox="0 0 24 24">${icons.lock}</svg></span><b>Edit window</b><span class="cfg">48h regularisation</span><span class="st ok">✓ Locked after approval</span></div>
            </div>
            <div class="verdict"><b>Present · Full day</b> — flows to payroll untouched<span class="arr">Every check logged</span></div>
          </div>
        </div>
        <div class="bcap">One punch, five rules, one auditable verdict — identically on every site</div>
      </div>
    </div>`,
  },
  {
    id: 'at-ot', theme: 'light', title: 'Overtime management',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Blue-collar overtime · cost meets compliance</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:34ch;">Overtime approved <span style="color:var(--navy)">before it’s worked</span> — and paid as the law requires.</h2>
      <div class="capgrid rise" style="animation-delay:.2s;margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.clock}</svg></span><h4>Pre-approved, not post-argued</h4><p>Sanctioned by the plant’s approval chain before the hours are worked — raised by supervisors, approved on mobile</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><h4>Paid at the statutory 2×</h4><p>Twice the ordinary wage — Factories Act §59, carried into the new Labour Codes — computed straight into payroll</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.warn}</svg></span><h4>Held inside statutory caps</h4><p>Daily, weekly and quarterly OT limits per state; a worker nearing the cap is flagged before it’s breached</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>A self-serve OT register</h4><p>The Overtime report names who worked it, how long, which shift and who approved — the audit answer, generated</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.42s;margin-top:14px;"><b style="color:var(--navy)">2× ordinary wage</b> beyond 9 hrs/day or 48 hrs/week · sanctioned before it’s worked · held inside the state quarter cap · hourly plants: OT normalised to days</div>
    </div>
    ${aiNote('Policy engine', 'The cap that enforces itself', 'OT limits, spread-over and rest rules are wired into marking and approval per state — a breach is blocked or escalated at source, not found in a labour-department notice.', 'Factories Act §51 / §59 / §64–65 · state-configurable')}
    `,
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
    </div>
    ${aiNote('Spoof detection', 'Computer vision on every punch', 'Liveness and face-match models score each check-in; suspect punches route to the Possible Spoofs queue instead of payroll.', 'Zepto: 0 spoofs across 967 sites')}
    `,
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
  outcomeSlide('at5b', 'What spoof-proof attendance changes downstream.', [
    { n: '−90%', what: 'Payroll leakage, gone', how: 'Ghost workers and buddy punching stop paying out once attendance is face-verified — on a 10,000-strong contract workforce, that’s crores a year back in your budget.', proof: 'Reliance: 90% ↓ leakage · 300K workers' },
    { n: '−40%', what: 'Cost to run attendance ops', how: 'Rostering grids, bulk approvals and self-regularisation replace supervisors doing attendance arithmetic all morning.', proof: 'Zepto: 40% cost saving · 967 sites' },
    { n: 'Minutes', what: 'Shortfall response time', how: 'Live present/absent by site means today’s gap is filled today — not discovered in next week’s report.', proof: 'Real-time dashboards, every site' },
    { n: '+15%', what: 'HR team capacity back', how: 'Exception queues with Approve All and SLA counters turn a day of chasing into a sitting — HR works on people, not punches.', proof: 'One approvals queue, incl. spoof review' },
  ], 'One month, one site, side-by-side with your current attendance source — then count the difference yourself.'),
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

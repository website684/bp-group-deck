import type { SlideDef } from '../lib/types'
import { fi, icons } from './html'

// JLL India · capabilities deck. JLL asked for: digitised attendance (features), issuing work
// order permits (features), work safe method, induction programme, sign in and sign out.
// Wrapped in the BetterPlace overview, CLMS overview, attendance, onboarding and payroll.
// Vocabulary follows JLL's own: Work Dynamics, IFM, Soft Services, Engineering & Operations,
// EHS, SLA, client site, Corrigo. Permits and safe-work method statements are configured on
// the platform's forms and approval flows and are labelled that way. No prices or SLAs quoted.

const row = (t: string, sub: string, chip: string, cls: string, d: string, hl = false) =>
  `<div class="fm-row${hl ? ' hl' : ''}" style="--d:${d}s"><span><b>${t}</b> <small>${sub}</small></span><span class="fm-chip ${cls}">${chip}</span></div>`

export const jllSlides: SlideDef[] = [
  {
    id: 'j1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">Prepared for JLL India · Work Dynamics · integrated facilities management</span>
      <h1 class="rise" style="animation-delay:.15s;font-size:clamp(30px,3.6vw,54px);">One system for every JLL client site. <span style="color:var(--yellow)">Sign in, permits, induction, attendance and pay.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">The five things you asked about, and the platform underneath them: how a housekeeping associate, an MEP technician or a security guard is onboarded, inducted, permitted, signed in, rostered and paid, with the client able to see it live.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:22px;">
        <div class="stat"><div class="n">15M+</div><div class="l">Verified frontline worker profiles</div></div>
        <div class="stat"><div class="n">500+</div><div class="l">Enterprises live on the platform</div></div>
        <div class="stat"><div class="n">300K</div><div class="l">Workers live at Reliance alone</div></div>
        <div class="stat"><div class="n">10 yrs</div><div class="l">Building for people who work on their feet</div></div>
      </div>
      <div class="mdcover ghost">JLL</div>
    </div>`,
  },
  {
    id: 'j2', theme: 'light', title: 'Who we are',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Who you would be working with</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Ten years building software for frontline workers, <span style="color:var(--navy)">and for the people who manage them.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:16px;">
        <div class="rstage"><div class="rn">2015–17</div><h4>Verify</h4><ul><li>Founded in Bengaluru</li><li>Background verification for frontline hiring</li><li>200 customers</li></ul></div>
        <div class="rstage"><div class="rn">2018–20</div><h4>Onboard, Attend, Skill</h4><ul><li>Digital onboarding and attendance</li><li>Mobile learning in Indian languages</li><li>Gig platform acquired</li></ul></div>
        <div class="rstage"><div class="rn">2021–24</div><h4>goBetter and South-East Asia</h4><ul><li>Payroll and vendor compliance</li><li>Malaysia, Singapore, Indonesia</li><li>Reliance, Zepto, BPCL live</li></ul></div>
        <div class="rstage"><div class="rn">2025–26</div><h4>AI Labs</h4><ul><li>Agents for induction, worker support, reconciliation</li><li>Open-source models on our own cloud in India</li></ul></div>
      </div>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.4s">
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Software · goBetter</span></div><ul class="cl"><li>Hire, verify, onboard, attend, pay, upskill</li><li>Contract labour management for principal employers</li></ul></div>
        <div class="case" style="--pc:#1d7a45"><div class="ch"><span class="cn">Services · staffBetter, gigBetter</span></div><ul class="cl"><li>Full-time staffing with employer-of-record compliance</li><li>On-demand gig deployment, billed on outcome</li></ul></div>
        <div class="case" style="--pc:#FF9518"><div class="ch"><span class="cn">Trust</span></div><ul class="cl"><li>ISO 27001 · SOC 2 · hosted on AWS Mumbai · DPDP Act aligned</li><li>Clients include Reliance, Zepto, BPCL, Titan, PhonePe, Amazon, Accenture, Yokohama</li></ul></div>
      </div>
    </div>`,
  },
  {
    id: 'j3', theme: 'light', title: 'What JLL asked for',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Your five asks, and where each one lives</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:60ch;">Three run today. <span style="color:var(--navy)">Two are configured for JLL.</span></h2>
      <div class="ledger rise" style="animation-delay:.2s;">
        <div class="lrow rise" style="animation-delay:.24s"><div class="ln">01</div><div class="lw"><h4>Digitised attendance management</h4><p>Face and geo capture, shift rules, overtime caps, approvals, live dashboards, payroll feed. Slides 7 to 11.</p></div><div class="lp">Live · Zepto 967 sites</div></div>
        <div class="lrow rise" style="animation-delay:.32s"><div class="ln">02</div><div class="lw"><h4>Sign in and sign out</h4><p>Face tablet, phone inside a geo-fence, hybrid device, open attendance for guards, visitors on the same log. Slide 7.</p></div><div class="lp">Live · BPCL gate</div></div>
        <div class="lrow rise" style="animation-delay:.40s"><div class="ln">03</div><div class="lw"><h4>Induction programme</h4><p>On the worker's phone in his language, with a test and a dated certificate. No certificate, no access. Slides 12 and 13.</p></div><div class="lp">Live · LMS + gate</div></div>
        <div class="lrow rise" style="animation-delay:.48s"><div class="ln">04</div><div class="lw"><h4>Issuing work order permits</h4><p>Work orders stay in Corrigo. The permit per job runs on our custom forms and approval flows, not a separate product, tied to induction and pass. Slide 14.</p></div><div class="lp">Configured for JLL</div></div>
        <div class="lrow rise" style="animation-delay:.56s"><div class="ln">05</div><div class="lw"><h4>Work safe method</h4><p>A step-by-step checklist the worker acknowledges on his phone before the permit opens, with photos. Slide 15.</p></div><div class="lp">Configured for JLL</div></div>
      </div>
    </div>`,
  },
  {
    id: 'j4', theme: 'dark', title: 'One platform, three stakeholders',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">HCM and CLMS on one platform</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Your own staff and your vendors' staff, <span style="color:var(--yellow)">on one system of record.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#FFC401">
          <div class="ch"><span class="cn">JLL site and account teams</span><span class="ct">Facility managers · EHS · account leads</span></div>
          <ul class="cl">
            <li>One view of every person on a client site, on-roll or off-roll</li>
            <li>Compliance liability tracked per vendor: licence, PF, ESI, insurance</li>
            <li>Labour cost, overtime and headcount against the manning norm</li>
            <li>The client gets a dashboard, not a Monday email</li>
          </ul>
        </div>
        <div class="case" style="--pc:#39D2E8">
          <div class="ch"><span class="cn">The worker</span><span class="ct">Housekeeping · technicians · security</span></div>
          <ul class="cl">
            <li>Onboarded from his own phone in his language</li>
            <li>Induction, permits and safety steps on the same phone</li>
            <li>Hours, overtime and payslip visible before payday</li>
            <li>A question answered by an agent, any hour, 24 languages</li>
          </ul>
        </div>
        <div class="case" style="--pc:#3BE8B0">
          <div class="ch"><span class="cn">Vendor partners</span><span class="ct">Housekeeping · pest control · security agencies</span></div>
          <ul class="cl">
            <li>Their own login, seeing only their workers and orders</li>
            <li>Deployment against sanctioned headcount and licence</li>
            <li>Invoices reconciled to attendance, so disputes stop</li>
            <li>Challans matched worker by worker before the bill releases</li>
          </ul>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));"><b>HCM</b> for on-roll staff: hiring, onboarding, BGV, records, attendance, leave, payroll, performance, learning. <b>CLMS</b> for contract staff: vendor onboarding, work orders, statutory compliance, wage and invoice validation, gate-level attendance. Same worker record underneath.</div>
    </div>`,
  },
  {
    id: 'j5', theme: 'light', title: 'The lifecycle',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The complete workforce lifecycle · thirteen modules, one platform</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Hire to exit, configured on one platform. <span style="color:var(--navy)">The modules you asked about are marked.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(5,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Set up and onboard</span></div><ul class="cl"><li>ATS: requisitions, sourcing, interviews, offers</li><li>Background verification: ID, address, criminal, education</li><li>Organisation config: N-level structure across sites</li><li><b>Worker onboarding and induction ◆</b></li></ul></div>
        <div class="case" style="--pc:#1d7a45"><div class="ch"><span class="cn">Time, leave, pay and exit</span></div><ul class="cl"><li><b>Attendance and overtime ◆</b>: face, geo, devices, OT rules</li><li>Leave and holiday by site, role and worker type</li><li>Payroll and statutory: PF, ESIC, reimbursements, exit and F&amp;F</li></ul></div>
        <div class="case" style="--pc:#FF9518"><div class="ch"><span class="cn">Perform and upskill</span></div><ul class="cl"><li>Performance: goals, reviews, appraisal cycles</li><li>LMS: training paths, communication, rewards</li><li><b>Safety induction and safe-work method ◆</b></li></ul></div>
        <div class="case" style="--pc:#D0271D"><div class="ch"><span class="cn">Vendor and compliance</span></div><ul class="cl"><li>Vendor management: onboarding, policies, performance</li><li><b>Work orders, permits and CLRA ◆</b></li><li>Billing and invoicing reconciled to attendance</li></ul></div>
        <div class="case" style="--pc:#8B7CFF"><div class="ch"><span class="cn">Insight and connect</span></div><ul class="cl"><li>Reports and custom forms, no IT dependency</li><li>Business and approval flows, multi-level</li><li>Integrations: SAP, ERP, Corrigo, gate devices</li><li><b>Sign in and sign out at the gate ◆</b></li></ul></div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.45s">
        <span class="fc">Hire</span><span class="fa">→</span><span class="fc">Verify</span><span class="fa">→</span><span class="fc">Onboard</span><span class="fa">→</span><span class="fc hot">Induct</span><span class="fa">→</span><span class="fc hot">Permit</span><span class="fa">→</span><span class="fc hot">Sign in</span><span class="fa">→</span><span class="fc hot">Attend</span><span class="fa">→</span><span class="fc">Pay</span><span class="fa">→</span><span class="fc gold">Upskill and rehire</span>
      </div>
    </div>`,
  },
  {
    id: 'j6', theme: 'dark', title: 'A day on a client site',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">How the five pieces fit · one technician, one shift</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Suresh, MEP technician, chiller plant, 06:00 shift. <span style="color:var(--yellow)">Here is what the system checks before he touches a valve.</span></h2>
      <div class="flowstrip rise" style="animation-delay:.2s;margin-top:18px;">
        <span class="fc">05:55 · Face at the tablet<small>induction valid · pass active</small></span><span class="fa">→</span>
        <span class="fc">Shift rules run<small>fence · shift · buffer</small></span><span class="fa">→</span>
        <span class="fc hot">Permit requested<small>hot work · chiller room</small></span><span class="fa">→</span>
        <span class="fc hot">SWMS acknowledged<small>7 steps · photo of isolation</small></span><span class="fa">→</span>
        <span class="fc">Issuer approves<small>on mobile · 06:12</small></span><span class="fa">→</span>
        <span class="fc">Work · permit closes<small>14:00 · close-out photo</small></span><span class="fa">→</span>
        <span class="fc gold">Sign out<small>8 h · flows to payroll and client view</small></span>
      </div>
      <div class="impacts" style="grid-template-columns:repeat(4,1fr);margin-top:18px;">
        <div class="imp rise" style="animation-delay:.4s"><div class="n">1</div><div class="l">record for Suresh: pass, induction, permit, hours, pay</div></div>
        <div class="imp rise" style="animation-delay:.48s"><div class="n">0</div><div class="l">paper forms between his gate entry and his payslip</div></div>
        <div class="imp rise" style="animation-delay:.56s;background:rgba(255,196,1,.1);border-color:rgba(255,196,1,.35)"><div class="n" style="color:var(--yellow)">Live</div><div class="l">the client's facility head sees him on site at 05:55</div></div>
        <div class="imp rise" style="animation-delay:.64s;background:rgba(59,232,176,.08);border-color:rgba(59,232,176,.3)"><div class="n" style="color:#3BE8B0">Dated</div><div class="l">every approval carries who, when and why for the EHS audit</div></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.7s;color:rgba(255,255,255,.55)">If his induction certificate had lapsed the night before, the tablet would not have let him in, and his supervisor would have been alerted three weeks earlier.</div>
    </div>`,
  },
  {
    id: 'j7', theme: 'light', title: 'Sign in and sign out',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Ask 2 · sign in and sign out · five ways to capture, one record</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Tablet at the entrance, phone in a fence, device for high security. <span style="color:var(--navy)">Same log, same rules, every site.</span></h2>
      <div class="compmap" style="grid-template-columns:repeat(5,1fr);margin-top:14px;">
        <div class="compcell" style="--cc:#1B2D93;--d:.2s"><div class="act">Tablet · face</div><h4>Face at the entrance</h4><p>One-time face registration. Associates look at a wall-mounted tablet and are in. No card to lose, no reader to clean.</p><span class="who ok">Demonstrated to JLL and VOIS</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.28s"><div class="act">Mobile · geo</div><h4>Phone inside a fence</h4><p>The goBetter app marks attendance only inside a 50 to 75 metre geo-fence. Made for sites with fewer than 50 people.</p><span class="who ok">Live · Zepto 967 sites</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.36s"><div class="act">Device · hybrid</div><h4>Fingerprint plus face</h4><p>Godrej and Mantra terminals for critical environments. Both factors on the same punch.</p><span class="who ok">Supported hardware</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.44s"><div class="act">Open · multi-site</div><h4>Guards who move</h4><p>Login and logout across several buildings in a day without device anchoring. For patrol and escort roles.</p><span class="who ok">Configurable</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.52s"><div class="act">Visitors</div><h4>Same door, same muster</h4><p>Visitors and contractors sign in through the same flow. Security runs one system and one evacuation list.</p><span class="who ok">Live · BPCL</span></div>
      </div>
      <div class="capgrid rise" style="animation-delay:.6s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><h4>Liveness on every face punch</h4><p>Suspect punches go to a review queue, not to payroll. Single-user mode for sensitive sites.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.repeat}</svg></span><h4>Works when the network does not</h4><p>Punches cached on the device and synced later. Tablets carry a SIM where client Wi-Fi is not offered.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.lock}</svg></span><h4>Devices managed remotely</h4><p>Tablets enrolled in MDM, updated and locked from our side. Maker-checker on any manual override.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.eye}</svg></span><h4>Gate log per person per day</h4><p>Every in and out kept as evidence of presence and access, and the base for the client's headcount report.</p></div>
      </div>
    </div>`,
  },
  {
    id: 'j8', theme: 'light', title: 'Attendance features',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Ask 1 · digitised attendance management · the feature set</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Attendance is the front door. <span style="color:var(--navy)">Behind it sits the policy, the roster and the payroll.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.clock}</svg></span><h4>Shifts and rosters</h4><p>Shift templates with start, end and tolerance buffer. Weekly roster grid, bulk weekly-off upload, Excel roster that publishes itself.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.check}</svg></span><h4>Configurable thresholds</h4><p>Full-day and half-day hours, late-arrival restrictions, login and logout tolerance, set per organisation and site.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.warn}</svg></span><h4>Overtime with approval layers</h4><p>OT computed from the shift, pre-approved by supervisor and HR if you wish, held under monthly and quarterly caps.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>Regularisation, controlled</h4><p>Worker requests with a reason from a fixed list; manager approves on mobile; limits per person; every change on the trail.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Leave and holidays</h4><p>Quotas by category and location, regional and optional holidays, applied from the app, approved by the manager.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.eye}</svg></span><h4>Live dashboard, direct access</h4><p>Present, late and no-show by site and vendor as punches land. JLL and client managers log in themselves.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Reports</h4><p>Muster roll, attendance log, overtime and vendor-wise utilisation, by date range, exported to Excel or scheduled to inboxes.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.plug}</svg></span><h4>Payroll sync by API</h4><p>Verified days and hours to your payroll or ours. Payable-day logic agreed in design, including weekly offs.</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.5s;margin-top:12px;">Approvals queue with sub-queues for regularisation, leave, reconciliation and possible spoofs · Approve All and Reject All · SLA counter on pending items · bulk log edit inside a set backdating window</div>
    </div>`,
  },
  {
    id: 'j9', theme: 'light', title: 'Policy engine',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">What happens on every punch</span>
        <h2 class="rise" style="animation-delay:.08s;">Your attendance policy, <span style="color:var(--navy)">applied the same way at every client site.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">One punch runs every rule you configure: fence, shift, threshold, overtime cap, edit window. The same way in Hyderabad and in Pune, for JLL staff and for vendor staff.</p>
        <div class="tags rise" style="animation-delay:.3s;margin-top:16px;">
          <span class="tag">Full and half-day thresholds</span><span class="tag">Late-arrival restrictions</span><span class="tag">OT pre-approval and caps</span><span class="tag">Regularisation limits</span><span class="tag">Holiday tables by region</span><span class="tag">Per-vendor rules</span><span class="tag">Verify status before marking</span>
        </div>
        <p class="lede rise" style="animation-delay:.42s;margin-top:16px;">Set once at organisation level, inherited by every site and vendor. <b>Reliance runs 3,000 vendors on one rule engine.</b></p>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="conmock ruleflow">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">goBetter · Attend · policy engine</span><span class="liv">Every punch</span></div>
          <div class="body">
            <div class="punch">
              <span class="pav"><svg viewBox="0 0 24 24">${icons.user}</svg></span>
              <div><b>IN punch · Suresh Yadav · MEP technician</b><span>05:55 · Hyderabad campus · tower B tablet</span></div>
              <span class="face">Face match ✓ 99.1%</span>
            </div>
            <div class="rules">
              <div class="rule" style="--i:0"><span class="ri"><svg viewBox="0 0 24 24">${icons.book}</svg></span><b>Induction</b><span class="cfg">Certificate to 12 Mar 2027</span><span class="st ok">✓ Valid</span></div>
              <div class="rule" style="--i:1"><span class="ri"><svg viewBox="0 0 24 24">${icons.clock}</svg></span><b>Shift match</b><span class="cfg">Morning 06:00–14:00</span><span class="st ok">✓ In 15-min buffer</span></div>
              <div class="rule" style="--i:2"><span class="ri"><svg viewBox="0 0 24 24">${icons.check}</svg></span><b>Day threshold</b><span class="cfg">Full 8h · half 4h</span><span class="st ok">✓ Full-day eligible</span></div>
              <div class="rule flag" style="--i:3"><span class="ri"><svg viewBox="0 0 24 24">${icons.warn}</svg></span><b>OT cap watch</b><span class="cfg">Quarterly cap</span><span class="st warn">⚠ 37 of 40h</span></div>
              <div class="rule" style="--i:4"><span class="ri"><svg viewBox="0 0 24 24">${icons.lock}</svg></span><b>Edit window</b><span class="cfg">48h regularisation</span><span class="st ok">✓ Locked after approval</span></div>
            </div>
            <div class="verdict"><b>Present · Full day</b> · to payroll and the client dashboard<span class="arr">Every check logged</span></div>
          </div>
        </div>
        <div class="bcap">One punch, five rules, one auditable verdict</div>
      </div>
    </div>`,
  },
  {
    id: 'j10', theme: 'light', title: 'Rostering',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Rostering and shortfall · soft services and engineering</span>
        <h2 class="rise" style="animation-delay:.08s;">Plan the week for a whole site, <span style="color:var(--navy)">see the gap before the client does.</span></h2>
        <div class="featlist">
          ${fi(icons.clock, 'Shift cards, defined once', 'Morning, evening, night and cross-midnight shifts as templates. Present and half-day values calculate themselves.', 0.24)}
          ${fi(icons.warn, 'Gaps show up a day early', 'The grid flags tomorrow’s unfilled housekeeping slot today. The vendor sees the same gap and fills it.', 0.32)}
          ${fi(icons.zap, 'Bulk tools with undo', 'Copy a week, upload weekly offs in bulk, fix one associate’s day, publish. Everyone is notified.', 0.40)}
          ${fi(icons.users, 'Demand by shift and vendor', 'Manning norm per client site and shift. Deployed against norm is the number your SLA is written on.', 0.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="conmock rosterviz" data-cycle="2800">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">goBetter · Attend · Roster · Hyderabad campus · Week 38</span><span class="liv">Live</span></div>
          <div class="body">
            <div class="rhead"><span>Associate</span><span>Mon</span><span>Tue</span><span class="today">Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
            <div class="rrow">
              <div class="who"><b>Ravi Kumar</b><span>Security · tower A</span></div>
              <span class="cellc sh-m" style="--i:0">M</span><span class="cellc sh-m" style="--i:1">M</span><span class="cellc sh-m" style="--i:2">M</span><span class="cellc sh-m" style="--i:3">M</span><span class="cellc sh-e" style="--i:4">E</span><span class="cellc sh-e" style="--i:5">E</span><span class="cellc sh-o" style="--i:6">off</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Sunita Devi</b><span>Housekeeping · floors 3–5</span></div>
              <span class="cellc sh-e" style="--i:7">E</span><span class="cellc sh-e" style="--i:8">E</span><span class="cellc sh-o" style="--i:9">off</span>
              <span class="gapcell"><span class="cyc g1">GAP</span><span class="cyc g2">Vendor: Priya S.</span><span class="cyc g3">Priya S. ✓</span></span>
              <span class="cellc sh-e" style="--i:10">E</span><span class="cellc sh-m" style="--i:11">M</span><span class="cellc sh-m" style="--i:12">M</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Suresh Yadav</b><span>MEP technician · chiller plant</span></div>
              <span class="cellc sh-m" style="--i:13">M</span><span class="cellc sh-m" style="--i:14">M</span><span class="cellc sh-m" style="--i:15">M</span><span class="cellc sh-o" style="--i:16">off</span><span class="cellc sh-n" style="--i:17">N</span><span class="cellc sh-n" style="--i:18">N</span><span class="cellc sh-n" style="--i:19">N</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Asha Kumari</b><span>Pantry · tower B</span></div>
              <span class="cellc sh-m" style="--i:20">M</span><span class="cellc sh-o" style="--i:21">off</span><span class="cellc sh-m" style="--i:22">M</span><span class="cellc sh-m" style="--i:23">M</span><span class="cellc sh-m" style="--i:24">M</span><span class="cellc sh-e" style="--i:25">E</span><span class="cellc sh-e" style="--i:26">E</span>
            </div>
            <div class="rfoot">
              <div class="cycpane"><span class="fdot2 r"></span><span><b>1 unfilled shift</b> for Thu · housekeeping, evening · tower A</span><span class="pubbtn">Publish week</span></div>
              <div class="cycpane"><span class="fdot2 y"></span><span><b>Vendor proposes Priya S.</b> · inducted · inside OT cap</span><span class="pubbtn">Publish week</span></div>
              <div class="cycpane"><span class="fdot2 g"></span><span><b>Roster published</b> · 27 shifts · 4 associates notified</span><span class="pubbtn">Published ✓</span></div>
            </div>
          </div>
        </div>
        <div class="bcap">The weekly grid: gap flagged, vendor fills it, week published</div>
      </div>
    </div>`,
  },
  {
    id: 'j11', theme: 'light', title: 'Dashboards',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">What JLL and the client see</span>
        <h2 class="rise" style="animation-delay:.08s;">Your client's facility head logs in <span style="color:var(--navy)">and sees the site as it is now.</span></h2>
        <div class="featlist">
          ${fi(icons.eye, 'Direct dashboard access', 'JLL account teams and client managers see present, absent and late by site and vendor as punches land. What Shell and JLL asked for instead of emailed reports.', 0.22)}
          ${fi(icons.users, 'Vendor-wise utilisation', 'Deployed against the manning norm per vendor and shift. SLA penalties and incentives rest on data both sides see.', 0.3)}
          ${fi(icons.chart, 'Absenteeism patterns', 'Who is absent, on which days, at which sites. Fed back into next week’s roster.', 0.38)}
          ${fi(icons.doc, 'Scheduled reports', 'Muster, overtime and headcount reports to named inboxes on a timer. The Monday email still exists, if you want it.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Client dashboard · Hyderabad campus · today</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>Attend · client view · 4 towers · 14:10</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">412<small>present now</small></span>
              <span class="y">9<small>late today</small></span>
              <span class="r">6<small>no-show · roster gap</small></span>
            </div>
            <div class="fm-rows">
              ${row('Soft services · housekeeping', 'Vendor 1 · 212 of 220 rostered · 96% of norm', 'ON NORM', 'g', '.5')}
              ${row('Engineering · MEP technicians', 'JLL staff · 41 of 44 rostered · 2 on permit now', '93%', 'g', '.65')}
              ${row('Security', 'Vendor 3 · open attendance · 88 of 90 · 2 late', '98%', 'y', '.8')}
              ${row('Pantry and reception', 'Vendor 2 · 71 of 77 · 6 no-show · vendor alerted 06:40', 'SHORT 6', 'r', '.95', true)}
            </div>
          </div>
        </div>
        <div class="mockcap">Illustrative numbers. Present, late and no-show update as punches land; utilisation refreshes on a processing cycle</div>
      </div>
    </div>`,
  },
  {
    id: 'j12', theme: 'dark', title: 'Induction programme',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Ask 3 · induction programme</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">Induction on his phone, in his language. <span style="color:var(--yellow)">No valid certificate, no site access.</span></h2>
        <div class="featlist">
          ${fi(icons.book, 'Generic plus site-specific', 'EHS rules, emergency and evacuation, PPE, then the hazards of this client site. SOP text, video and a test, in the worker’s language with audio.', 0.22)}
          ${fi(icons.check, 'A dated certificate that gates the gate', 'Pass the test and a certificate is issued with an expiry. The gate tablet checks it on every entry. Refresher scheduled before it lapses.', 0.3)}
          ${fi(icons.users, 'Vendor staff on the same standard', 'A 12-person pest-control vendor follows the same induction as a 400-person housekeeping vendor. Completion by vendor, site and role on one screen.', 0.38)}
          ${fi(icons.plug, 'JLL Onsite stays if you want it', 'If contractors keep inducting on JLL Onsite, we take completion status by API and gate access on it. Toolbox talks record attendance by QR.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Induction status · Hyderabad campus</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>skillBetter · induction · site 0421 · by vendor</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">486<small>certified</small></span>
              <span class="y">23<small>expiring in 30 days</small></span>
              <span class="r">7<small>lapsed · access withdrawn</small></span>
            </div>
            <div class="fm-rows">
              ${row('Site EHS induction · v4', 'generic + Hyderabad campus module · 11 min · Hindi, Telugu, English', '97% PASS', 'g', '.5')}
              ${row('Work at height refresher', 'MEP and façade · 18 due this month · 11 done', '11 / 18', 'y', '.65')}
              ${row('Vendor 2 · pantry · 6 new joiners', 'induction assigned on onboarding · 4 complete · 2 pending', 'PENDING', 'y', '.8')}
              ${row('7 associates · certificate lapsed', 'gate refused today · vendor and supervisor alerted 21 days ago', 'BLOCKED', 'r', '.95', true)}
            </div>
          </div>
        </div>
        <div class="mockcap">Mandatory-course enforcement is the mechanism: the worker cannot proceed, and the pass does not open, until the course is complete</div>
      </div>
    </div>`,
  },

  {
    id: 'j12b', theme: 'light', title: 'Skilling',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Beyond induction · skilling the site workforce</span>
        <h2 class="rise" style="animation-delay:.08s;">Training the frontline finishes here. <span style="color:var(--navy)">88% completion against 25% on a typical LMS.</span></h2>
        <div class="featlist">
          ${fi(icons.lang, 'Any content, every language, in 15 minutes', 'Upload the client’s SOP video or PDF; it comes back in Hindi, Telugu, Tamil and 35+ other languages with audio, translated as people speak, not word for word.', 0.22)}
          ${fi(icons.play, 'Short, on the phone, between shifts', 'Reels-style micro-lessons, levels, badges and leaderboards. Built for people who learn on a phone in a break room, not at a desk.', 0.3)}
          ${fi(icons.check, 'Mandatory courses that gate work', 'Fire safety, chemical handling, chiller operation, customer conduct. Proctored tests with face detection. A worker cannot proceed, and a permit does not open, until the course is passed. Zepto gates deployment on training the same way.', 0.38)}
          ${fi(icons.chart, 'Completion by site, vendor and role', 'Who is certified for what, where it lapses next, exported for the client’s EHS review. Records sync to your HRMS by API.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="phones" style="min-height:clamp(280px,30vw,390px);">
          <div class="phone p1"><img src="assets/product/app-home.webp" alt="Learner home"/></div>
          <div class="phone p2"><img src="assets/product/app-gamification.webp" alt="Gamified learning path"/></div>
          <div class="phone p3"><img src="assets/product/app-proctoring.webp" alt="Proctored assessment"/></div>
        </div>
        <div class="phonecap" style="margin-top:12px;">Learner home · gamified path · proctored test. Reliance Retail: 500K+ trained in 14 languages · Amazon: 91% completion · Hindalco: 3× coverage</div>
      </div>
    </div>`,
  },
  {
    id: 'j13', theme: 'light', title: 'Work order permits',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Ask 4 · issuing work order permits · configured for JLL</span>
        <h2 class="rise" style="animation-delay:.08s;">The work order stays in Corrigo. <span style="color:var(--navy)">The permit and the people ride on top of it.</span></h2>
        <div class="featlist">
          ${fi(icons.doc, 'Permit types as forms', 'Hot work, work at height, confined space, electrical isolation and LOTO, lifting. Each a form with the fields your EHS team specifies, built on the platform’s custom forms.', 0.22)}
          ${fi(icons.users, 'Issuer and receiver, on mobile', 'The technician or vendor requests; the site engineer or EHS lead approves from the phone. Multi-level where the client requires it. Every step dated.', 0.3)}
          ${fi(icons.lock, 'Only for people who may do the work', 'A permit opens only for a worker with a valid pass, valid induction and the certificate the job needs. The SWMS must be acknowledged first.', 0.38)}
          ${fi(icons.eye, 'Active permits, live', 'What is open, where, by whom, until when. Close-out with photo. Corrigo work order number carried on every permit for the audit.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Permit to work · on the platform</span></div>
        <div class="wocard">
          <div class="wohead"><b>PTW-2026-HYD-0912 · Hot work</b><span>CORRIGO WO 48213 · CHILLER PLANT · TOWER B</span></div>
          <div class="wogrid">
            <div><div class="k">Receiver</div><div class="v">Suresh Yadav · MEP · Vendor 4</div></div>
            <div><div class="k">Issuer</div><div class="v">R. Menon · site engineer</div></div>
            <div><div class="k">Validity</div><div class="v">18 Sep · 06:15 – 14:00</div></div>
            <div><div class="k">Pass and induction</div><div class="v ok">Valid · height cert valid</div></div>
            <div><div class="k">SWMS</div><div class="v ok">Acknowledged 06:09 · 7 steps</div></div>
            <div><div class="k">Isolation confirmed</div><div class="v warn">Photo pending · permit not open</div></div>
          </div>
          <div class="wofoot">Permit opens when the isolation photo is uploaded and the issuer approves. <b>Closes at 14:00</b> or on close-out, whichever is first.</div>
        </div>
        <div class="mockcap">Built on custom forms and approval flows during implementation. Not a separate permit product today; the permit record, its gating and its audit trail are platform behaviour</div>
      </div>
    </div>`,
  },
  {
    id: 'j14', theme: 'light', title: 'Work safe method',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Ask 5 · work safe method · configured for JLL</span>
        <h2 class="rise" style="animation-delay:.08s;">The safe work method statement, <span style="color:var(--navy)">read and signed on the phone before the permit opens.</span></h2>
        <div class="featlist">
          ${fi(icons.layers, 'Step, hazard, control', 'Each high-risk task as a checklist: the step, the hazard, the control in place. Written by your EHS team, held as a template per task type.', 0.22)}
          ${fi(icons.check, 'Acknowledged, not filed', 'The worker reads it in his language and confirms each control. A “No” on any control flags the supervisor and the permit stays shut.', 0.3)}
          ${fi(icons.cam, 'Photo where it matters', 'Isolation, barricading, harness anchor: a photo attached to the step, timestamped and located.', 0.38)}
          ${fi(icons.book, 'Linked to training', 'The SWMS references the induction module and the certificate the task needs. A lapsed certificate stops the acknowledgement.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag w"><i></i>SWMS · hot work · chiller plant · on the worker’s phone</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>goBetter · SWMS-HW-04 · Suresh Yadav · 06:02</span></div>
          <div class="fm-body">
            <div class="fm-rows">
              ${row('1 · Isolate and tag the chiller supply', 'hazard: electrocution · control: LOTO applied, tag photographed', 'CONFIRMED', 'g', '.45')}
              ${row('2 · Remove flammables 5 m around', 'hazard: fire · control: area cleared, extinguisher at hand', 'CONFIRMED', 'g', '.6')}
              ${row('3 · Fire watch posted', 'hazard: fire · control: named watcher for 30 min after work', 'CONFIRMED', 'g', '.75')}
              ${row('4 · Gas test if hot work near pipes', 'hazard: explosion · control: reading below 10% LEL', 'PHOTO NEEDED', 'y', '.9', true)}
              ${row('5 · PPE: face shield, gloves, apron', 'hazard: burns · control: worn and checked by supervisor', 'CONFIRMED', 'g', '1.05')}
            </div>
          </div>
        </div>
        <div class="mockcap">Steps 6 and 7 follow. Acknowledgement completes when every control is confirmed, and the permit on the previous slide can then open</div>
      </div>
    </div>`,
  },
  {
    id: 'j15', theme: 'light', title: 'Onboarding and verification',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Before any of it · onboarding and background verification</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">A worker verified once, from his own phone, <span style="color:var(--navy)">trusted at every client site he moves to.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Onboarding</span></div>
          <ul class="cl">
            <li>Documents from the worker's phone, validated by API, configured by state and category</li>
            <li>e-Sign on contract, appointment letter and policies</li>
            <li>Bank and statutory captured once. Payroll-ready, no re-entry</li>
            <li>Bulk upload for mobilising a new site; vendor-led onboarding on the same screens</li>
            <li>Induction assigned on completion</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">Verification · six heads</span></div>
          <ul class="cl">
            <li><b>Identity</b>: Aadhaar, PAN, DL, Voter ID, Passport, face match and liveness</li>
            <li><b>Address</b>: physical, postal, digital</li>
            <li><b>Career</b>: education, employment, UAN, references</li>
            <li><b>Financial</b>: bank, credit</li>
            <li><b>Health</b>: medical, fitness</li>
            <li><b>Legal</b>: criminal and FIR records, court records, police verification</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">Why it matters on a client site</span></div>
          <ul class="cl">
            <li>Check packs per role: a security guard and a pantry associate carry different packs</li>
            <li>Red, amber, green portfolio by site and vendor, so the client sees the verification position</li>
            <li>Rehire or transfer between sites draws on the existing record</li>
            <li>Identity checks in minutes; digital case under 24 hours as a target</li>
          </ul>
        </div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Documents on his phone</span><span class="fa">→</span>
        <span class="fc">Verification pack by role</span><span class="fa">→</span>
        <span class="fc">Profile locked</span><span class="fa">→</span>
        <span class="fc hot">Induction assigned</span><span class="fa">→</span>
        <span class="fc hot">Pass issued</span><span class="fa">→</span>
        <span class="fc gold">Moves site, record moves with him</span>
      </div>
    </div>`,
  },
  {
    id: 'j16', theme: 'darker', title: 'Payroll and vendor compliance',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Pay and compliance · what protects JLL as principal employer</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">A vendor's PF challan is not compliance. <span style="color:var(--yellow)">Matching it worker by worker is.</span></h2>
      <div class="reconboard rise" style="animation-delay:.24s">
        <div class="drows">
          <div class="drow"><span class="nm">Workers on Vendor 1's wage register, September</span><span class="vs">220</span></div>
          <div class="drow"><span class="nm">UANs found on the PF challan, read by OCR</span><span class="vs">213</span></div>
          <div class="drow over"><span class="nm">Workers with no deposit against them</span><span class="vs"><em>7 · vendor notified, dated</em></span></div>
          <div class="drow over"><span class="nm">Invoiced shifts with no gate punch</span><span class="vs"><em>131 · held</em></span></div>
        </div>
      </div>
      <div class="capgrid rise" style="animation-delay:.44s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Payroll from attendance</h4><p>Days and hours from verified punches. Minimum wage by state and skill checked at entry. Overtime at the statutory multiple.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Challans read by OCR</h4><p>The vendor uploads. UANs, amounts and periods are extracted and matched to each named worker's computed dues.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.card}</svg></span><h4>Invoice against attendance</h4><p>Billed-but-not-present, rate mismatches and headcount above sanction, as line items you can hold before paying.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.lock}</svg></span><h4>Compliance gates the bill</h4><p>Challan reconciliation as a precondition to invoice release. Due diligence dated and on record for the client and the inspector.</p></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.6s;color:rgba(255,255,255,.55)">Reliance: −90% payroll leakage and −80% vendor non-compliance risk across 3,000+ vendors, measured. Overtime is normalised to days for computation; agreed in design.</div>
    </div>`,
  },
  {
    id: 'j17', theme: 'dark', title: 'Proof',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof · this runs today</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Site access at a PSU oil major, attendance across 967 sites, <span style="color:var(--yellow)">and 300,000 contract workers on one rule engine.</span></h2>
      <div class="cases" style="grid-template-columns:repeat(3,1fr);margin-top:16px;">
        <div class="case rise" style="--pc:#FFC401;animation-delay:.22s"><div class="ch"><span class="cn">Bharat Petroleum</span><span class="ct">Energy · PSU · multiple sites</span></div><ul class="cl"><li>Face and fingerprint at site access, our pass logic behind it</li><li>Gate pass issue, renewal and auto-termination on rules</li><li>Visitor management on the same flow</li><li>Vendors and work orders from SAP</li></ul></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.3s"><div class="ch"><span class="cn">Zepto</span><span class="ct">Quick commerce · 22 cities</span></div><ul class="cl"><li>Geo attendance with AI spoof detection</li><li>Real-time dashboard for the client's ops team</li></ul><div class="cm"><div class="m"><div class="mn">15K</div><div class="ml">workers</div></div><div class="m"><div class="mn">967</div><div class="ml">sites</div></div><div class="m"><div class="mn">40%</div><div class="ml">cost saved</div></div></div></div>
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.38s"><div class="ch"><span class="cn">Reliance Industries</span><span class="ct">Retail · Jio · O2C</span></div><ul class="cl"><li>300K+ workers, 3,000+ vendors, one rule engine</li><li>Sub-vendor capture, bulk onboarding at scale</li></ul><div class="cm"><div class="m"><div class="mn">−90%</div><div class="ml">payroll leakage</div></div><div class="m"><div class="mn">−80%</div><div class="ml">vendor non-compliance</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Also on the platform: <b>Titan · PhonePe · Amazon · Accenture · Yokohama · Hindalco</b>, and attendance already demonstrated with JLL account teams at client sites. We can walk your team through the BPCL gate and the Zepto dashboard live.</div>
    </div>`,
  },
  {
    id: 'j18', theme: 'darker', title: 'How we start',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we would start with JLL</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">One client site, eight weeks, <span style="color:var(--yellow)">all five asks live on it.</span></h2>
      <div class="ledger rise" style="animation-delay:.2s">
        <div class="lrow rise" style="animation-delay:.24s"><div class="ln">01</div><div class="lw"><h4>Design · 2 weeks</h4><p>Pick one site. Configure shifts, thresholds, geo-fences, induction modules, permit forms and SWMS templates with your EHS and account team. Agree the Corrigo and payroll handshake.</p></div><div class="lp">Joint</div></div>
        <div class="lrow rise" style="animation-delay:.33s"><div class="ln">02</div><div class="lw"><h4>Go live · 2 weeks</h4><p>Face registration for JLL and vendor staff, tablets at the entrance, mobile marking for small sites, induction assigned, dashboards for the client.</p></div><div class="lp">BetterPlace</div></div>
        <div class="lrow rise" style="animation-delay:.42s"><div class="ln">03</div><div class="lw"><h4>Run one month · measure</h4><p>Attendance against your current muster, permits and SWMS on live jobs, one payroll cycle from our data, one vendor invoice reconciled. Then count the difference together.</p></div><div class="lp">Measured</div></div>
        <div class="lrow rise" style="animation-delay:.51s"><div class="ln">04</div><div class="lw"><h4>Scale by site</h4><p>Add sites, cities and vendors on the same policy engine. One dashboard for the account, one for each client.</p></div><div class="lp">Staged</div></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:14px;animation-delay:.7s">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`,
  },
]

import type { SlideDef } from '../lib/types'
import { icons } from './html'

// CLMS campaign deck — six pillar slides, one per capability we are taking to market.
// Each slide is written to stand alone: it is also the hero of the matching mailer in
// collateral/clms-mailers.md, so headline + proof must survive being lifted out of the deck.
//
// EVIDENCE DISCIPLINE (see scratchpad CLMS-SCOPE-FACTS.md + PILLAR-EVIDENCE.md):
//  - A, B, C, F are grounded in the Jindal Stainless SOW §4–§13 and live Reliance/BPCL/Zepto proof.
//  - D is scoped to what actually ships (sanctioned strength, work-order caps, OT caps, shortfall
//    analytics, Reliance position codes). The demand forecast is labelled as pilot-built, because
//    the PwC deck labels it that way. Do not promote it to a shipped module.
//  - E is scoped to worker self-service + the live AI worker-support agent. There is no grievance
//    case-management module, no escalation matrix and no engagement/survey product. Do not imply one.
//  - F is written from the principal employer's side, which is what the product does today. The
//    staffing-company cut is framed as the contractor's experience of the same system.
//  - Never quote a price, an uptime figure or a numeric SLA — none exist in the source documents.

export const clmsPillarSlides: SlideDef[] = [
  {
    id: 'cl1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">Contract labour management · for principal employers</span>
      <h1 class="rise" style="animation-delay:.15s;font-size:clamp(30px,3.6vw,54px);">Your contractors' compliance is your liability. <span style="color:var(--yellow)">Today you find out at the audit.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">goBetter CLMS puts the work order, the licence, the gate, the attendance, the payroll and the vendor's PF challan on one worker record. A worker who fails a condition does not get a pass. A contractor who short-pays does not get paid. Six capabilities, in the order plants buy them.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:22px;">
        <div class="stat"><div class="n">300K</div><div class="l">Workers live at Reliance</div></div>
        <div class="stat"><div class="n">3,000+</div><div class="l">Vendors on one rule engine</div></div>
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage, measured</div></div>
        <div class="stat"><div class="n">BPCL</div><div class="l">Gate logic running in SAP</div></div>
      </div>
      <div class="mdcover ghost">CLMS</div>
    </div>`,
  },

  // ─────────────────────────── A · Onboarding & verification ───────────────────────────
  {
    id: 'cl-a', theme: 'light', title: 'A · Onboarding and verification',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Pillar A · onboarding, document collection and verification</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:40ch;">A worker verified once is trusted everywhere. <span style="color:var(--navy)">Including the next time he comes back.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#D0271D">
          <div class="ch"><span class="cn">How it runs today</span></div>
          <ul class="cl">
            <li>The contractor collects documents on paper and sends a scan when he remembers</li>
            <li>Plant HR re-keys the same worker into attendance, then into payroll</li>
            <li>Verification is a spreadsheet of who was sent where, with no dates</li>
            <li>A rehire starts from zero because nobody can find last year's file</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">What we do</span></div>
          <ul class="cl">
            <li>Worker submits documents <b>from his own phone</b>, validated by API, configured by state and worker category</li>
            <li>e-Sign on contract, appointment letter and policy acknowledgement</li>
            <li>Bank and statutory captured once — <b>payroll-ready with no re-entry</b></li>
            <li>Vendor-led onboarding in the same screens, so a 12-worker contractor follows the same standard as a 900-worker one</li>
            <li>Bulk upload returns every error in one file, not one row at a time</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">Verification, six heads</span></div>
          <ul class="cl">
            <li><b>Identity</b> — Aadhaar, PAN, DL, Voter, Passport, with face match and liveness</li>
            <li><b>Address</b> — physical, postal, digital</li>
            <li><b>Career</b> — education, employment, UAN validation, references</li>
            <li><b>Financial</b> — bank account, credit</li>
            <li><b>Health</b> — medical, fitness, drug tests</li>
            <li><b>Legal</b> — criminal, court records, police verification, global screening</li>
          </ul>
        </div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Documents on his phone<small>API-validated</small></span><span class="fa">→</span>
        <span class="fc">Six-head BGV<small>red / amber / green</small></span><span class="fa">→</span>
        <span class="fc">Profile locked<small>change history kept</small></span><span class="fa">→</span>
        <span class="fc hot">Gate pass issued<small>only if all five conditions clear</small></span><span class="fa">→</span>
        <span class="fc gold">Rehire reuses it<small>no second verification</small></span>
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s">Identity checks typically return in minutes; a composite digital case is targeted at under 24 hours. Physical address and court checks follow field and registry timelines. Source: SOW §7–§8.</div>
    </div>`,
  },

  // ─────────────────────────── B · Attendance & rostering ───────────────────────────
  {
    id: 'cl-b', theme: 'dark', title: 'B · Time, attendance and rostering',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Pillar B · time, attendance and rostering</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:42ch;">Zepto runs 15,000 workers across 967 sites on this. <span style="color:var(--yellow)">A photo held to the camera does not open the gate.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Capture — one record, three ways in</span>
          <p class="tpprob" style="color:rgba(255,255,255,.72)">Face match with <b style="color:#fff">AI spoof detection</b> and a review queue for suspected proxies. <b style="color:#fff">Geo-fence per site</b>, so a punch outside the boundary does not register. Biometric terminals at plant gates and mobile marking at project sites feed the same record — not two systems reconciled monthly.</p>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp"><div class="n">967</div><div class="l">Zepto sites, planned vs actual</div></div>
            <div class="imp" style="background:rgba(59,232,176,.08);border-color:rgba(59,232,176,.3)"><div class="n" style="color:#3BE8B0">40%</div><div class="l">Frontline cost saved at Zepto</div></div>
          </div>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s;background:rgba(255,196,1,.08)">
          <span class="panetag w"><i></i>Roster — published, capped, enforced</span>
          <p class="tpprob" style="color:rgba(255,255,255,.72)">Weekly grid by associate and day, with copy, bulk edit, undo and an explicit <b style="color:#fff">publish</b> step. Night and cross-midnight shifts handled. Weekly off, rest day and field designation set per associate per day.</p>
          <p class="tpprob" style="color:rgba(255,255,255,.72);margin-top:8px">Overtime computes from attendance against the shift, with <b style="color:#fff">monthly and quarterly caps</b>, alerts as a cap approaches, optional pre-approval, and automatic disallowance where punches are missing. It pays at the statutory multiple and files itself into the overtime register.</p>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp" style="background:rgba(255,196,1,.1);border-color:rgba(255,196,1,.35)"><div class="n" style="color:var(--yellow)">Capped</div><div class="l">OT pre-approved, not explained later</div></div>
            <div class="imp"><div class="n">Audited</div><div class="l">Every regularisation carries a reason</div></div>
          </div>
        </div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s;color:rgba(255,255,255,.55)">Regularisation asks the worker for a reason from a fixed list and keeps the trail. Approval queues carry an SLA counter. When overtime lives in a supervisor's notebook, none of it is provable. Source: SOW §10; Zepto deployment.</div>
    </div>`,
  },

  // ─────────────────────────── C · Compliance ───────────────────────────
  {
    id: 'cl-c', theme: 'light', title: 'C · Compliance',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Pillar C · CLRA, statutory registers and vendor compliance</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:42ch;">Deploy the 51st worker against a 50-worker licence <span style="color:var(--navy)">and the system stops you, not the inspector.</span></h2>
      <div class="lsmeter rise" style="animation-delay:.24s">
        <div class="lsrow"><span class="nm">Shree Manpower</span><span class="lsbar"><i style="--w:87%;--d:.4s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">174 / 200<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Ganpati Services</span><span class="lsbar"><i style="--w:71%;--d:.55s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">106 / 150<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Bhoomi Facility</span><span class="lsbar over"><i style="--w:100%;--d:.7s"></i><span class="cap" style="--cap:84%"></span></span><span class="vs"><em>63 / 53</em><small>10 over — blocked at gate</small></span></div>
        <div class="lsrow"><span class="nm">Krishna Logistics</span><span class="lsbar"><i style="--w:46%;--d:.85s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">37 / 80<small>within licence</small></span></div>
      </div>
      <div class="capgrid rise" style="animation-delay:.42s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Licence as an object</h4><p>Licensed strength, validity and issuing authority held per contractor. Deployment is measured against it continuously, and a gate pass that would breach it is blocked.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.layers}</svg></span><h4>Registers from live data</h4><p>Register of contractors, register of workmen, employment cards, muster roll and wage register are a view on the data that runs attendance and payroll. Nothing is maintained twice.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><h4>Documents that expire</h4><p>CLRA licence, PF and ESIC registration, GST, Workmen's Compensation cover and shops-and-establishment, each with validity tracking and advance expiry alerts.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.map}</svg></span><h4>Ten states, ten rule sets</h4><p>Minimum wages, holiday calendars, shift patterns and approval hierarchies configured per state inside one tenant. Spreadsheets do not vary by state.</p></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.6s">We supply the data, registers and audit trail. Determining applicability and filing returns stay with you and your advisors — we format the extracts for EPFO, ESIC and state portals. Form numbers follow the CLRA Central Rules 1971; state rules vary. Source: SOW §5, §22.</div>
    </div>`,
  },

  // ─────────────────────────── D · Budget & productivity ───────────────────────────
  {
    id: 'cl-d', theme: 'dark', title: 'D · Budget planning and productivity',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Pillar D · manpower budget, deployment control and productivity</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Headcount, wages and billing tracked against every work order. <span style="color:var(--yellow)">Per contractor, per shift, per site.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#3BE8B0">
          <div class="ch"><span class="cn">Shipping today</span></div>
          <ul class="cl">
            <li><b>Sanctioned headcount by skill category</b> on the work order, with deployed-versus-sanctioned visible per order and per site</li>
            <li>Cost centre and department mapping, so contract labour cost lands where it belongs in finance</li>
            <li><b>Overtime caps</b> at organisation and site level, with pre-approval as a policy switch</li>
            <li>Shortfall analysis by site in the BI layer, filterable by state, city and site</li>
            <li>Position codes and budget reports — the governing masters at Reliance across 300,000 workers</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">Built in the pilot</span></div>
          <ul class="cl">
            <li><b>Demand forecast</b> per shift, area and skill, from the production plan, maintenance calendar, shift pattern and each area's absenteeism history</li>
            <li>Auto-scheduling that deploys the forecast rather than yesterday's number</li>
            <li>Cross-plant and cross-contractor benchmarking, so the best plant sets the bar</li>
            <li>We build and measure these in a pilot plant. We do not sell them as a shipped module.</li>
          </ul>
        </div>
        <div class="case" style="--pc:#D0271D">
          <div class="ch"><span class="cn">What it is worth</span></div>
          <ul class="cl">
            <li>Deployment falls as each gap closes. The diagnostic puts your number on it</li>
            <li>Overtime at premium rates falls once the roster carries the cap</li>
            <li>Billed-but-not-present disappears when the invoice meets verified attendance</li>
            <li>Leakage and vendor gaps cut at the rates measured at Reliance: <b>−90%</b> and <b>−80%</b></li>
          </ul>
        </div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s;color:rgba(255,255,255,.55)">The −90% and −80% figures are measured on comparable deployments across 3,000+ vendors. They depend on your baseline maturity and are not a warranty. Source: SOW §4.2, §5, §10.4, §15; PwC CLMS 2.0 levers 2 and 5.</div>
    </div>`,
  },

  // ─────────────────────────── E · Worker voice ───────────────────────────
  {
    id: 'cl-e', theme: 'light', title: 'E · Grievance and worker engagement',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Pillar E · worker voice, queries and engagement</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:42ch;">A worker who can see his own log <span style="color:var(--navy)">stops raising a ticket about it.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">He can see it himself</span></div>
          <ul class="cl">
            <li>Monthly summary: total earnings, present days against working days, and separate totals for absent, half-day, leave, overtime, week off and holiday</li>
            <li>Day detail and a focused half-day and overtime view</li>
            <li>Payslip by month, leave balance, public holidays</li>
            <li>All of it in his own language, on his own phone</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">He can ask — and get an answer</span></div>
          <ul class="cl">
            <li>Grievance raised from the app, with ticket status visible to him</li>
            <li><b>AI Theo</b> answers PF number, shift timing, payslip, leave balance and claim questions by chat or voice, <b>24 languages, any hour</b>. Status: live</li>
            <li><b>₹0.37</b> per conversation; <b>₹5/min</b> voice against ₹12 industry</li>
            <li>Worker data never leaves our cloud — models run on our own infrastructure in India</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">Where the IR risk actually sits</span></div>
          <ul class="cl">
            <li>Roughly <b>three in four</b> factory accident victims in India are contract or temporary workers</li>
            <li>Safety induction runs on his phone in his language, with an assessment and a dated certificate — and the certificate is what activates his gate access</li>
            <li>Let it expire and access is withdrawn automatically</li>
            <li>Pay disputes drop when hours are visible before payday, not argued after it</li>
          </ul>
        </div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s">Plain about the boundary: this is worker self-service and an answering agent, not an IR case-management suite. There is no escalation matrix, POSH workflow or resolution-SLA engine in the product today. Accident share sourced to Safe in India CRUSHED reports. Source: SOW §16–§17.</div>
    </div>`,
  },

  // ─────────────────────────── F · Payroll & billing reconciliation ───────────────────────────
  {
    id: 'cl-f', theme: 'darker', title: 'F · Payroll and billing reconciliation',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Pillar F · payroll, challan and invoice reconciliation</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">A challan upload is not compliance. <span style="color:var(--yellow)">Matching it worker by worker is.</span></h2>
      <div class="reconboard rise" style="animation-delay:.24s">
        <div class="drows">
          <div class="drow"><span class="nm">Invoiced headcount</span><span class="vs">212 workers</span></div>
          <div class="drow"><span class="nm">Gate-verified attendance for the period</span><span class="vs">196 workers</span></div>
          <div class="drow over"><span class="nm">Billed but not present</span><span class="vs"><em>16 line items held</em></span></div>
          <div class="drow over"><span class="nm">Wage lines below the state minimum</span><span class="vs"><em>3 flagged at entry</em></span></div>
          <div class="drow"><span class="nm">Period PF / ESI challan evidence</span><span class="vs">Pending — invoice not released</span></div>
        </div>
      </div>
      <div class="capgrid rise" style="animation-delay:.44s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Payroll from attendance</h4><p>Computed from verified attendance, with no manual entry of days or hours. Minimum wage is validated per state and skill grade, and a non-compliant structure is blocked at entry.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Challans read by OCR</h4><p>The contractor uploads; the system pulls UANs, amounts and contribution periods without re-keying, then compares deposited against due for each named worker.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.warn}</svg></span><h4>Gaps while you have leverage</h4><p>Short payment, non-payment, wrong UAN and late filing flagged in the same cycle, vendor notified, notice dated. Due diligence on record.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.lock}</svg></span><h4>Compliance gates payment</h4><p>PF and ESI reconciliation can be set as a precondition to invoice approval. The leverage sits before the money moves.</p></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.6s;color:rgba(255,255,255,.55)"><b style="color:#fff">If you are the staffing company, not the plant:</b> your team transacts in the same system and sees only its own workers and orders. Said early, not late — overtime is measured in hours but normalised to days for computation. Source: SOW §12–§13.</div>
    </div>`,
  },

  // ─────────────────────────── Close ───────────────────────────
  {
    id: 'cl-close', theme: 'darker', title: 'How to start',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">How this starts</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">One plant, four to five months, <span style="color:var(--yellow)">and a number you can take to the board.</span></h2>
      <div class="ledger rise" style="animation-delay:.2s">
        <div class="lrow rise" style="animation-delay:.24s"><div class="ln">01</div><div class="lw"><h4>Design — 3 to 4 weeks</h4><p>Your org model, sites, vendors, work orders and state rule sets, configured to your interpretation of the rules.</p></div><div class="lp">Annexure A</div></div>
        <div class="lrow rise" style="animation-delay:.33s"><div class="ln">02</div><div class="lw"><h4>Build — 4 to 6 weeks</h4><p>SAP or ERP master and posting integration, biometric devices at the gates you choose, SSO, API and webhooks.</p></div><div class="lp">Phase 1</div></div>
        <div class="lrow rise" style="animation-delay:.42s"><div class="ln">03</div><div class="lw"><h4>Pilot one plant — 6 to 8 weeks</h4><p>Gate pass conditional on all five checks, attendance and overtime live, vendor challans reconciled worker by worker for a full cycle.</p></div><div class="lp">Measured</div></div>
        <div class="lrow rise" style="animation-delay:.51s"><div class="ln">04</div><div class="lw"><h4>Roll out on your schedule</h4><p>Payroll, billing, leave and training follow in phase 2. AI agents in phase 3, on our own infrastructure in India.</p></div><div class="lp">Staged</div></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:14px;animation-delay:.7s">Reliance runs 300,000 workers and 3,000+ vendors on this. BPCL runs contract labour, vendors and visitors through it, wired into SAP. Durations are indicative, confirmed at initiation. ISO 27001 · SOC 2 · hosted in India · DPDP Act 2023 aligned.</div>
    </div>`,
  },
]

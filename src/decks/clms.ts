import type { SlideDef } from '../lib/types'
import { fi, icons } from './html'

// goBetter CLMS — the product deck for contract labour management, written for a plant or
// facilities head who carries principal-employer liability. Follows the order things happen
// on site: vendor → work order → licence → worker → induction → gate → attendance → overtime →
// payroll → challan → invoice → registers. Every capability traces to the Jindal Stainless SOW
// (v1.0 draft, Aug 2026) or a live deployment (BPCL, Reliance, Zepto). AI agents carry their
// real status. No prices, uptime figures or numeric SLAs are quoted because none exist.

const chk = (t: string, ok: boolean, d: string) =>
  `<div class="fm-row${ok ? '' : ' hl'}" style="--d:${d}s"><span><b>${t}</b></span><span class="fm-chip ${ok ? 'g' : 'r'}">${ok ? 'CLEAR' : 'BLOCKED'}</span></div>`

export const clmsSlides: SlideDef[] = [
  {
    id: 'cm1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter CLMS · contract labour management for principal employers</span>
      <h1 class="rise" style="animation-delay:.15s;font-size:clamp(30px,3.6vw,54px);">Every contract worker on your site, <span style="color:var(--yellow)">from work order to wage slip, on one record.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">The contractor's licence, the work order, the gate pass, the induction certificate, the attendance, the overtime, the PF challan and the invoice. Held together, checked against each other, and visible to you before the inspector or the auditor asks.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:22px;">
        <div class="stat"><div class="n">300K</div><div class="l">Contract workers live at Reliance</div></div>
        <div class="stat"><div class="n">3,000+</div><div class="l">Vendors on one rule engine</div></div>
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage, measured at Reliance</div></div>
        <div class="stat"><div class="n">BPCL</div><div class="l">Gate and vendor control, wired into SAP</div></div>
      </div>
      <div class="mdcover ghost">CLMS</div>
    </div>`,
  },
  {
    id: 'cm2', theme: 'light', title: 'The problem',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Why contract labour is a board-level number now</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">You are liable for people you did not hire, <span style="color:var(--navy)">paid by companies you do not control.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#D0271D">
          <div class="ch"><span class="cn">What the law puts on you</span></div>
          <ul class="cl">
            <li>Under CLRA the principal employer answers for the contractor's wages, PF and ESI if the contractor defaults</li>
            <li>A contractor's licence caps how many workers may be deployed. Cross it and the breach is yours too</li>
            <li>Registers, employment cards and returns have to exist, be current and be producible</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">How most sites run it</span></div>
          <ul class="cl">
            <li>Licences and insurance in a folder; expiry found when someone looks</li>
            <li>Attendance at the gate, wages at the contractor, invoices in finance. Reconciled by hand, monthly, late</li>
            <li>PF challans accepted as a PDF. Nobody matches the deposit to the worker</li>
            <li>Induction on paper. Access on a badge that never expires</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">What it costs</span></div>
          <ul class="cl">
            <li>Billed-but-not-present workers paid every month</li>
            <li>Overtime beyond the cap, paid at single rate, unrecorded</li>
            <li>A contractor's unpaid PF arriving as your notice</li>
            <li>Three to four weeks of audit preparation that should be a download</li>
          </ul>
        </div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Licence file<small>in a folder</small></span><span class="fa">+</span>
        <span class="fc">Gate register<small>at security</small></span><span class="fa">+</span>
        <span class="fc">Wage sheet<small>at the contractor</small></span><span class="fa">+</span>
        <span class="fc">PF challan<small>a PDF in email</small></span><span class="fa">+</span>
        <span class="fc">Invoice<small>in finance</small></span><span class="fa">=</span>
        <span class="fc hot">Five records that never meet<small>until the audit</small></span>
      </div>
    </div>`,
  },
  {
    id: 'cm3', theme: 'dark', title: 'One record',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">What CLMS does · one worker record, in the order things happen on site</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Eight steps, one record. <span style="color:var(--yellow)">Each step checks the ones before it.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:16px;">
        <div class="rstage"><div class="rn">01</div><h4>Vendor</h4><ul><li>Registered with PAN, GST, PF and ESIC codes</li><li>Licence, insurance and registrations tracked to expiry</li><li>Allowed sites, roles and rate cards</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Work order</h4><ul><li>Scope, plant, department</li><li>Sanctioned headcount by skill</li><li>Validity, rate card, billing terms</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Worker</h4><ul><li>Documents from his own phone</li><li>Verification packs by role</li><li>Bank and statutory captured once</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Induction and gate pass</h4><ul><li>Induction in his language, with a test</li><li>Pass issued only if five conditions clear</li><li>Face at the gate, access withdrawn on expiry</li></ul></div>
      </div>
      <div class="rail rise" style="animation-delay:.35s;grid-template-columns:repeat(4,1fr);margin-top:10px;">
        <div class="rstage"><div class="rn">05</div><h4>Attendance and roster</h4><ul><li>Face and geo, spoof review queue</li><li>Weekly roster, published and capped</li><li>Regularisation with a reason</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Overtime</h4><ul><li>Computed from the shift</li><li>Caps, pre-approval, alerts</li><li>Paid at the statutory multiple</li></ul></div>
        <div class="rstage"><div class="rn">07</div><h4>Wages and challans</h4><ul><li>Payroll from verified attendance</li><li>Minimum wage checked at entry</li><li>PF and ESI challans matched per worker</li></ul></div>
        <div class="rstage"><div class="rn">08</div><h4>Invoice and registers</h4><ul><li>Invoice against attendance and rate card</li><li>Release gated on challan reconciliation</li><li>CLRA registers as a view on live data</li></ul></div>
      </div>
    </div>`,
  },
  {
    id: 'cm4', theme: 'light', title: 'Vendor master',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Step 1 · the vendor</span>
        <h2 class="rise" style="animation-delay:.08s;">Every contractor on file, <span style="color:var(--navy)">every document with an expiry date.</span></h2>
        <div class="featlist">
          ${fi(icons.building, 'One registration per vendor', 'Company details, GSTIN, PAN, PF and ESIC establishment codes, bank details and authorised signatories. Entered once, used by every work order.', 0.22)}
          ${fi(icons.doc, 'Documents that expire, tracked', 'CLRA licence, PF and ESIC registration, GST, Workmen’s Compensation cover, shops-and-establishment, and your own safety or quality certifications. Advance alerts before each lapses.', 0.3)}
          ${fi(icons.map, 'Rules per vendor', 'Allowed sites, allowed roles and rate cards. A housekeeping contractor cannot be deployed as riggers by mistake.', 0.38)}
          ${fi(icons.users, 'The vendor works in the system', 'Contractors get their own login and see only their workers and orders. Deployment, documents and invoices stop travelling by email.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Vendor register · compliance view</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>CLMS · vendors · plant 1 · documents</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">41<small>vendors active</small></span>
              <span class="y">4<small>expiring in 30 days</small></span>
              <span class="r">1<small>lapsed · deployment held</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row" style="--d:.5s"><span><b>Shree Manpower</b> <small>CLRA licence · PF · ESIC · WC policy · GST</small></span><span class="fm-chip g">ALL VALID</span></div>
              <div class="fm-row" style="--d:.65s"><span><b>Ganpati Services</b> <small>WC policy expires 07 Oct · renewal requested 3 Sep</small></span><span class="fm-chip y">19 DAYS</span></div>
              <div class="fm-row hl" style="--d:.8s"><span><b>Bhoomi Facility</b> <small>CLRA licence lapsed 31 Aug · 53 workers · new passes blocked</small></span><span class="fm-chip r">LAPSED</span></div>
              <div class="fm-row" style="--d:.95s"><span><b>Krishna Logistics</b> <small>ESIC registration uploaded today · awaiting checker</small></span><span class="fm-chip y">REVIEW</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Illustrative screen. Expiry alerts and the deployment hold are platform behaviour, from SOW §5.1</div>
      </div>
    </div>`,
  },
  {
    id: 'cm5', theme: 'light', title: 'Work orders',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Step 2 · the work order</span>
        <h2 class="rise" style="animation-delay:.08s;">Nothing happens on site <span style="color:var(--navy)">without a work order behind it.</span></h2>
        <div class="featlist">
          ${fi(icons.doc, 'The parent record', 'Scope, plant and department, sanctioned headcount by skill category, rate card, validity and billing terms. Every deployed worker hangs off one.', 0.22)}
          ${fi(icons.repeat, 'A lifecycle with approvals', 'Draft, approval, active, amendment, extension, closure. Multi-level approval you configure. Amendment history kept for audit.', 0.3)}
          ${fi(icons.eye, 'Deployed against sanctioned, live', 'Per order and per site, as it happens. The overshoot shows up on the day, not on the invoice.', 0.38)}
          ${fi(icons.plug, 'From SAP where SAP owns it', 'At BPCL the PO and contract fields come from SAP and are locked on our side. Approved invoices post back.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Work order on the platform</span></div>
        <div class="wocard">
          <div class="wohead"><b>WO-2026-P1-114</b><span>HOUSEKEEPING &amp; UTILITIES · PLANT 1</span></div>
          <div class="wogrid">
            <div><div class="k">Contractor</div><div class="v">Shree Manpower</div></div>
            <div><div class="k">Sanctioned headcount</div><div class="v">180 · 3 skill grades</div></div>
            <div><div class="k">Deployed today</div><div class="v ok">174 · within sanction</div></div>
            <div><div class="k">CLRA licence</div><div class="v ok">200 · valid to 31 Mar 2027</div></div>
            <div><div class="k">Validity</div><div class="v">01 Apr 2026 – 31 Mar 2027</div></div>
            <div><div class="k">WC policy</div><div class="v warn">Expires in 19 days</div></div>
          </div>
          <div class="wofoot">September invoice held: <b>PF challan pending for 6 workers</b>. Releases when the challan reconciles.</div>
        </div>
        <div class="mockcap">One order, one contractor, one set of limits, and every worker underneath it</div>
      </div>
    </div>`,
  },

  {
    id: 'cm5b', theme: 'dark', title: 'Headcount budget and positions',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Headcount budget and position management · illustrative numbers · forecast from the production plan is pilot-built, not a shipped module</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Sanctioned before it is filled. <span style="color:var(--yellow)">Deployed against budget, by site, every day.</span></h2>
      <div class="ajmix rise" style="animation-delay:.2s;margin-top:10px;max-width:1040px;">
        <div class="ajrow"><span class="lb">Plant 1 · housekeeping</span><span class="ajbar"><i style="--w:97%;--bc:#3BE8B0;--d:.3s"></i></span><span class="pc">174 / 180</span></div>
        <div class="ajrow"><span class="lb">Plant 1 · material handling</span><span class="ajbar"><i style="--w:100%;--bc:#FF7A6B;--d:.45s"></i></span><span class="pc">263 / 240 · over</span></div>
        <div class="ajrow"><span class="lb">Plant 2 · maintenance</span><span class="ajbar"><i style="--w:71%;--bc:#39D2E8;--d:.6s"></i></span><span class="pc">85 / 120</span></div>
        <div class="ajrow"><span class="lb">Plant 2 · security</span><span class="ajbar"><i style="--w:94%;--bc:#3BE8B0;--d:.75s"></i></span><span class="pc">47 / 50</span></div>
      </div>
      <div class="capgrid rise" style="animation-delay:.45s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.layers}</svg></span><h4>Position codes as the master</h4><p>Each contract position carries a code, skill grade, cost centre and department. Reliance runs 300,000 workers on position codes and budgets this way.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.card}</svg></span><h4>Sanctioned strength on the order</h4><p>Headcount by skill category sits on the work order. Deployment above it is flagged, or blocked, per your choice.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Budget reports by site</h4><p>Deployed against sanctioned per order, per site, per contractor, with cost landing on the right cost centre in finance.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.warn}</svg></span><h4>Shortfall and overshoot, named</h4><p>Under-deployed lines that risk output and over-deployed lines that cost money, on one screen, filterable by state, city and site.</p></div>
      </div>
    </div>`,
  },
  {
    id: 'cm6', theme: 'light', title: 'CLRA licensed strength',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">CLRA · licensed strength as a ceiling</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Deploy the 51st worker against a 50-worker licence <span style="color:var(--navy)">and the system stops you, not the inspector.</span></h2>
      <div class="lsmeter rise" style="animation-delay:.24s">
        <div class="lsrow"><span class="nm">Shree Manpower</span><span class="lsbar"><i style="--w:87%;--d:.4s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">174 / 200<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Ganpati Services</span><span class="lsbar"><i style="--w:71%;--d:.55s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">106 / 150<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Bhoomi Facility</span><span class="lsbar over"><i style="--w:100%;--d:.7s"></i><span class="cap" style="--cap:84%"></span></span><span class="vs"><em>63 / 53</em><small>10 over · blocked at gate</small></span></div>
        <div class="lsrow"><span class="nm">Krishna Logistics</span><span class="lsbar"><i style="--w:46%;--d:.85s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">37 / 80<small>within licence</small></span></div>
      </div>
      <div class="capgrid rise" style="animation-delay:.42s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Licence as a record</h4><p>Licensed strength, validity and issuing authority per contractor. Deployment is measured against it all the time.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.lock}</svg></span><h4>Block or flag</h4><p>A gate pass that would breach the licence is blocked. You choose block or flag per site.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.layers}</svg></span><h4>Registers from live data</h4><p>Register of contractors, register of workmen, employment cards, muster roll and wage register are views on the data. Nothing is kept twice.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Your position, any time</h4><p>Which contractors are compliant, which are near licence or document expiry, which have open gaps.</p></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.6s">We supply the data, registers and audit trail. Applicability and filing stay with you and your advisors. Form numbers follow the CLRA Central Rules 1971; state rules vary. Source: SOW §5.3.</div>
    </div>`,
  },
  {
    id: 'cm7', theme: 'light', title: 'Worker onboarding and verification',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Step 3 · the worker · onboarding and background verification</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:42ch;">Verified once, from his own phone. <span style="color:var(--navy)">Trusted at every site, including next year.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Onboarding</span></div>
          <ul class="cl">
            <li>Documents submitted from the worker's phone, validated by API, configured by state and category</li>
            <li>e-Sign on contract, appointment letter and policy acknowledgement</li>
            <li>Bank and statutory captured once. <b>Payroll-ready, no re-entry</b></li>
            <li>Bulk upload for mobilisation, with every error returned in one file</li>
            <li>Vendor-led onboarding on the same screens, one standard for every contractor</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">Verification · six heads</span></div>
          <ul class="cl">
            <li><b>Identity</b>: Aadhaar, PAN, DL, Voter ID, Passport, with face match and liveness</li>
            <li><b>Address</b>: physical, postal, digital</li>
            <li><b>Career</b>: education, employment, PF/UAN and ESIC history, references</li>
            <li><b>Financial</b>: bank account, credit</li>
            <li><b>Health</b>: medical, fitness, drug tests</li>
            <li><b>Legal</b>: criminal and FIR records, court records, police verification</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">How it runs</span></div>
          <ul class="cl">
            <li>Check packs per role. A gate worker and a crane operator carry different packs</li>
            <li>Bulk initiation across a batch; red, amber, green portfolio view</li>
            <li>Per-check dates and a downloadable case report</li>
            <li>Rehire draws on the existing verified record</li>
            <li>Identity checks return in minutes; digital case under 24 hours as a target</li>
          </ul>
        </div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Documents on his phone<small>API-validated</small></span><span class="fa">→</span>
        <span class="fc">Verification pack<small>by role</small></span><span class="fa">→</span>
        <span class="fc">Profile locked<small>change history kept</small></span><span class="fa">→</span>
        <span class="fc hot">Gate pass<small>only if five conditions clear</small></span><span class="fa">→</span>
        <span class="fc gold">Rehire reuses it<small>no second verification</small></span>
      </div>
    </div>`,
  },
  {
    id: 'cm8', theme: 'dark', title: 'Gate pass and induction',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Step 4 · gate pass, safety induction and access control</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">The pass opens only when <span style="color:var(--yellow)">everything behind it is true.</span></h2>
        <div class="featlist">
          ${fi(icons.book, 'Induction on his phone, in his language', 'SOP content, video and a test. A dated certificate on completion. The certificate is what activates the pass, and a lapsed certificate withdraws it.', 0.22)}
          ${fi(icons.lock, 'Face at the gate', 'Face registered in the platform, verified on the gate device. At BPCL, workers are admitted through the site access system on this logic.', 0.3)}
          ${fi(icons.clock, 'Expiry is automatic', 'Passes, induction certificates and insurance cover carry dates. Advance alerts, then access withdrawn. At BPCL a pass also lapses after 30 days without a punch.', 0.38)}
          ${fi(icons.users, 'Visitors through the same door', 'Visitor and transporter flows run on the same gate logic, so security runs one system.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Gate pass request · five conditions</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>CLMS · gate pass · Suresh Yadav · Bhoomi Facility</span></div>
          <div class="fm-body">
            <div class="fm-rows">
              ${chk('Work order active · WO-2026-P1-118', true, '.5')}
              ${chk('Headcount within sanction and licence', false, '.65')}
              ${chk('Verification cleared to required level', true, '.8')}
              ${chk('Workmen’s Compensation cover valid', true, '.95')}
              ${chk('Safety induction certificate · valid to 12 Mar 2027', true, '1.1')}
            </div>
          </div>
        </div>
        <div class="mockcap"><b>Pass not issued.</b> Bhoomi Facility is 10 over its licence. The contractor sees why; you see it on the vendor dashboard</div>
      </div>
    </div>`,
  },
  {
    id: 'cm9', theme: 'dark', title: 'Attendance and rostering',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Step 5 · attendance, rostering and exceptions</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Who was inside the plant, and when. <span style="color:var(--yellow)">The layer everything else computes from.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Capture · one record, three ways in</span>
          <ul class="cl" style="color:rgba(255,255,255,.78);margin-top:8px;">
            <li><b style="color:#fff">Face with spoof detection.</b> A photo held to the camera does not register. Suspected proxies go to a review queue</li>
            <li><b style="color:#fff">Geo-fence per site.</b> A punch outside the boundary does not count</li>
            <li><b style="color:#fff">Gate terminals and mobile</b> feed the same record. Nothing is reconciled monthly</li>
          </ul>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp"><div class="n">967</div><div class="l">Zepto sites on this capture</div></div>
            <div class="imp" style="background:rgba(59,232,176,.08);border-color:rgba(59,232,176,.3)"><div class="n" style="color:#3BE8B0">40%</div><div class="l">Frontline cost saved at Zepto</div></div>
          </div>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s;background:rgba(255,196,1,.08)">
          <span class="panetag w"><i></i>Roster and exceptions · governed</span>
          <ul class="cl" style="color:rgba(255,255,255,.78);margin-top:8px;">
            <li><b style="color:#fff">Weekly grid</b> by associate and day. Copy, bulk edit, undo, then an explicit publish. Excel upload publishes itself</li>
            <li><b style="color:#fff">Night and cross-midnight shifts.</b> Weekly off, rest day and field designation per person per day</li>
            <li><b style="color:#fff">Regularisation with a reason</b> from a fixed list, approved by the manager on mobile, kept on the trail</li>
            <li><b style="color:#fff">One approvals queue</b> for regularisation, leave, reconciliation and possible spoofs, with an SLA counter</li>
          </ul>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp" style="background:rgba(255,196,1,.1);border-color:rgba(255,196,1,.35)"><div class="n" style="color:var(--yellow)">3</div><div class="l">Standard reports: muster, log, overtime</div></div>
            <div class="imp"><div class="n">Bulk</div><div class="l">Log edit inside a set backdating window</div></div>
          </div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'cm10', theme: 'light', title: 'Overtime',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Step 6 · overtime</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Overtime is legal, capped, and paid at double. <span style="color:var(--navy)">All three get missed on paper.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.clock}</svg></span><h4>Computed, not claimed</h4><p>Hours beyond the shift and thresholds compute from attendance. No punch record, no overtime.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.check}</svg></span><h4>Approved before it is worked</h4><p>Pre-approval as a policy switch. The supervisor raises it, the approver clears it on mobile, then the hours count.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.warn}</svg></span><h4>Caps that warn first</h4><p>Monthly and quarterly caps at organisation and site level. Alerts as a worker approaches the cap, controls when it is reached.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Paid at the multiple, registered</h4><p>Flows into payroll at the statutory rate. The overtime report names who worked it, how long and who approved it.</p></div>
      </div>
      <div class="otwrap rise" style="animation-delay:.4s;margin-top:16px;">
        <div class="otrow" style="grid-template-columns:190px 1fr 230px;"><span class="nm">Ravi K. · fitter</span><span class="otbar"><i style="--w:55%"></i></span><span class="vs">22 h of 40 h quarterly cap</span></div>
        <div class="otrow" style="grid-template-columns:190px 1fr 230px;"><span class="nm">Sunita D. · housekeeping</span><span class="otbar hot"><i style="--w:92%"></i></span><span class="vs">37 h of 40 h · alert sent</span></div>
        <div class="otrow" style="grid-template-columns:190px 1fr 230px;"><span class="nm">Mohan L. · loader</span><span class="otbar over"><i style="--w:100%"></i></span><span class="vs">40 h of 40 h · further OT blocked</span></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s">Said early: overtime is measured in hours and normalised to days for computation. If your model is genuinely hourly, we discuss it in design, not after go-live. Source: SOW §10.4.</div>
    </div>`,
  },
  {
    id: 'cm11', theme: 'darker', title: 'Wages and challans',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Step 7 · wages and the vendor's PF and ESI challans</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">A challan upload is not compliance. <span style="color:var(--yellow)">Matching it worker by worker is.</span></h2>
      <div class="reconboard rise" style="animation-delay:.24s">
        <div class="drows">
          <div class="drow"><span class="nm">Workers on Shree Manpower's wage register, September</span><span class="vs">174</span></div>
          <div class="drow"><span class="nm">UANs found on the PF challan, read by OCR</span><span class="vs">168</span></div>
          <div class="drow over"><span class="nm">Workers with no deposit against them</span><span class="vs"><em>6 · vendor notified, dated</em></span></div>
          <div class="drow over"><span class="nm">Deposits short of computed dues</span><span class="vs"><em>2 · ₹2,100 gap</em></span></div>
        </div>
      </div>
      <div class="capgrid rise" style="animation-delay:.44s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Payroll from attendance</h4><p>Computed from verified attendance, no manual days or hours. Minimum wage validated per state and skill grade at entry.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Challans read by OCR</h4><p>The contractor uploads. UANs, amounts and periods are extracted and compared with computed dues for each named worker.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.warn}</svg></span><h4>Gaps in the same cycle</h4><p>Short payment, non-payment, wrong UAN and late filing flagged while the bill is still with you. Notice dated, due diligence on record.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.lock}</svg></span><h4>Compliance gates payment</h4><p>Challan reconciliation can be set as a precondition to releasing the invoice.</p></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.6s;color:rgba(255,255,255,.55)">Reliance: −90% payroll leakage, −80% vendor non-compliance risk, measured across 3,000+ vendors. Minimum wage is checked at entry. Reconciliation AI agent: Beta; the OCR-and-match flow is live. Source: SOW §12, §17.</div>
    </div>`,
  },
  {
    id: 'cm12', theme: 'light', title: 'Invoice reconciliation',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Step 8 · vendor billing and invoice reconciliation</span>
        <h2 class="rise" style="animation-delay:.08s;">You pay for shifts that happened, <span style="color:var(--navy)">at the rate on the order.</span></h2>
        <div class="featlist">
          ${fi(icons.card, 'Invoice against the work order', 'Generated or uploaded against the governing order. Manpower billed is reconciled with verified attendance for the period and the rate card.', 0.22)}
          ${fi(icons.search, 'Variances named', 'Billed-but-not-present, rate mismatches, and headcount above sanctioned strength, as line items you can hold.', 0.3)}
          ${fi(icons.layers, 'Deductions handled', 'Advances, penalties, recoveries and statutory withholdings applied on the invoice, not in a side ledger.', 0.38)}
          ${fi(icons.plug, 'Approved, then posted', 'Your authorisation matrix, then posting to finance. At BPCL, into SAP.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Invoice check · September · Shree Manpower</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>CLMS · invoices · INV-0919 · WO-2026-P1-114</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">4,872<small>shifts invoiced</small></span>
              <span class="g">4,701<small>shifts gate-verified</small></span>
              <span class="r">171<small>shifts held</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row hl" style="--d:.5s"><span><b>Billed but not present</b> <small>16 workers · 148 shifts · no gate punch on the billed days</small></span><span class="fm-chip r">HELD</span></div>
              <div class="fm-row" style="--d:.65s"><span><b>Rate mismatch</b> <small>3 workers billed skilled, deployed semi-skilled on the order</small></span><span class="fm-chip y">₹8,400</span></div>
              <div class="fm-row" style="--d:.8s"><span><b>Above sanction</b> <small>23 shifts beyond 180 sanctioned on 4 days</small></span><span class="fm-chip y">REVIEW</span></div>
              <div class="fm-row" style="--d:.95s"><span><b>PF challan for period</b> <small>6 workers unmatched · release condition not met</small></span><span class="fm-chip r">GATED</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Illustrative numbers. The checks are platform behaviour, from SOW §13</div>
      </div>
    </div>`,
  },
  {
    id: 'cm13', theme: 'light', title: 'Registers, MIS and the worker app',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">What comes out · registers, reports and the worker's own view</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">The audit answer is a download. <span style="color:var(--navy)">The worker's question is answered on his phone.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Statutory registers</span></div>
          <ul class="cl">
            <li>Register of contractors, register of workmen, employment cards</li>
            <li>Muster roll and wage register</li>
            <li>Overtime register from the overtime report</li>
            <li>Extracts for half-yearly and annual returns</li>
            <li>All views on live data, nothing kept twice</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">Reports and dashboards</span></div>
          <ul class="cl">
            <li>Muster roll, attendance log, overtime: date range, filters, Excel export</li>
            <li>Self-serve report builder, no IT ticket</li>
            <li>Custom forms for site-specific data</li>
            <li>BI dashboards by state, city and site: attendance, payroll, shortfall</li>
            <li>Scheduled distribution to named people</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">The worker app</span></div>
          <ul class="cl">
            <li>Attendance marking and a calendar of hours, in and out times</li>
            <li>Monthly summary: earnings, present days, overtime, leave, holidays</li>
            <li>Payslip by month, leave balance and application</li>
            <li>Induction and training modules, certificates</li>
            <li>Grievance raised from the app, ticket status visible. In his language</li>
          </ul>
        </div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.5s">Operational screens are near real time. BI dashboards refresh on a processing cycle and can lag by a short interval. Where you need a metric strictly live, we put it on an operational screen. Source: SOW §15–§16.</div>
    </div>`,
  },
  {
    id: 'cm14', theme: 'light', title: 'Integrations and AI',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">How it connects · and where AI helps</span>
        <h2 class="rise" style="animation-delay:.08s;">Sits on your SAP, your gates and your payroll. <span style="color:var(--navy)">Agents do the checking that never scales.</span></h2>
        <div class="featlist">
          ${fi(icons.plug, 'SAP or ERP', 'Vendor, PO and cost-centre masters in; approved invoices out. Done at BPCL. A file interface goes first if your ERP calendar is busy.', 0.22)}
          ${fi(icons.lock, 'Gate and biometric devices', 'Face and fingerprint terminals at the gate, our roster and pass logic behind them. Fifty-plus device makes supported.', 0.3)}
          ${fi(icons.bot, 'AI agents, with their real status', 'Rostering, backfilling, notification and calling agents, and the induction and worker-support agents: live. Statutory reconciliation and verification agents: Beta. Open-source models on our own cloud in India; worker data stays there.', 0.38)}
          ${fi(icons.shield, 'Security', 'ISO 27001, SOC 2, hosted on AWS Mumbai, DPDP Act 2023 aligned. Role-based access; vendors see only their own workers and orders.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>One record, six connections</span></div>
        <div class="hub">
          <svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <line x1="320" y1="210" x2="110" y2="80"/><line x1="320" y1="210" x2="530" y2="80"/>
            <line x1="320" y1="210" x2="80" y2="230"/><line x1="320" y1="210" x2="560" y2="230"/>
            <line x1="320" y1="210" x2="200" y2="360"/><line x1="320" y1="210" x2="440" y2="360"/>
            <circle cx="320" cy="210" r="78" fill="#1B2D93"/>
            <text class="hc" x="320" y="204" text-anchor="middle">goBetter CLMS</text>
            <text class="hcs" x="320" y="224" text-anchor="middle">ONE WORKER RECORD</text>
            <rect class="spoke" x="40" y="50" width="140" height="60" rx="12"/><text class="hn" x="110" y="76" text-anchor="middle">SAP / ERP</text><text class="hs" x="110" y="94" text-anchor="middle">PO · vendor · cost centre</text>
            <rect class="spoke" x="460" y="50" width="140" height="60" rx="12"/><text class="hn" x="530" y="76" text-anchor="middle">Gate devices</text><text class="hs" x="530" y="94" text-anchor="middle">face · fingerprint · pass</text>
            <rect class="spoke" x="10" y="200" width="140" height="60" rx="12"/><text class="hn" x="80" y="226" text-anchor="middle">Vendors</text><text class="hs" x="80" y="244" text-anchor="middle">own login · challans · invoices</text>
            <rect class="spoke" x="490" y="200" width="140" height="60" rx="12"/><text class="hn" x="560" y="226" text-anchor="middle">Payroll</text><text class="hs" x="560" y="244" text-anchor="middle">verified hours out</text>
            <rect class="spoke" x="130" y="330" width="140" height="60" rx="12"/><text class="hn" x="200" y="356" text-anchor="middle">Worker app</text><text class="hs" x="200" y="374" text-anchor="middle">logs · payslip · induction</text>
            <rect class="spoke" x="370" y="330" width="140" height="60" rx="12"/><text class="hn" x="440" y="356" text-anchor="middle">BI warehouse</text><text class="hs" x="440" y="374" text-anchor="middle">attendance · leave views</text>
          </svg>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'cm15', theme: 'dark', title: 'Proof',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof · running today</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">A PSU oil major, a 300,000-worker conglomerate <span style="color:var(--yellow)">and a 967-site quick-commerce network run on this.</span></h2>
      <div class="cases" style="grid-template-columns:repeat(3,1fr);margin-top:16px;">
        <div class="case rise" style="--pc:#FFC401;animation-delay:.22s"><div class="ch"><span class="cn">Bharat Petroleum</span><span class="ct">Energy · PSU</span></div><ul class="cl"><li>Vendors, contracts and work orders from SAP, locked on our side</li><li>Labour licence and EC policy per contract; licence created past 20 workers</li><li>Gate pass issue, renewal and auto-termination on rules</li><li>Visitor management, debarring and delegation workflows</li></ul></div>
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.3s"><div class="ch"><span class="cn">Reliance Industries</span><span class="ct">Retail · Jio · O2C</span></div><ul class="cl"><li>Measured outcomes on 300K+ workers and 3,000+ vendors; today 4 lakh+ contract workmen across 4,000+ sites</li><li>Position codes and budgets as governing masters</li><li>Sub-vendor capture, bulk onboarding at scale</li></ul><div class="cm"><div class="m"><div class="mn">−90%</div><div class="ml">payroll leakage</div></div><div class="m"><div class="mn">−80%</div><div class="ml">vendor non-compliance</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.38s"><div class="ch"><span class="cn">Zepto</span><span class="ct">Quick commerce · 22 cities</span></div><ul class="cl"><li>Geo attendance with AI spoof detection</li><li>Planned versus actual, live, per site</li></ul><div class="cm"><div class="m"><div class="mn">15K</div><div class="ml">workers</div></div><div class="m"><div class="mn">967</div><div class="ml">sites</div></div><div class="m"><div class="mn">40%</div><div class="ml">cost saved</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Also on the platform: <b>Hindalco · Yokohama · AGI Glaspac · Titan · Amazon · Accenture · JLL</b>. We can walk you through the BPCL and Reliance systems live.</div>
    </div>`,
  },
  {
    id: 'cm16', theme: 'darker', title: 'How to start',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How this starts</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">One plant, four to five months, <span style="color:var(--yellow)">and a number you can take to the board.</span></h2>
      <div class="ledger rise" style="animation-delay:.2s">
        <div class="lrow rise" style="animation-delay:.24s"><div class="ln">01</div><div class="lw"><h4>Design · 3 to 4 weeks</h4><p>Your org model, sites, vendors, work orders and state rule sets, configured to your interpretation of the rules.</p></div><div class="lp">Joint</div></div>
        <div class="lrow rise" style="animation-delay:.33s"><div class="ln">02</div><div class="lw"><h4>Build · 4 to 6 weeks</h4><p>SAP or ERP master and posting integration, devices at the gates you choose, SSO, API and webhooks.</p></div><div class="lp">BetterPlace</div></div>
        <div class="lrow rise" style="animation-delay:.42s"><div class="ln">03</div><div class="lw"><h4>Pilot one plant · 6 to 8 weeks</h4><p>Gate pass conditional on all five checks, attendance and overtime live, vendor challans reconciled worker by worker for a full cycle.</p></div><div class="lp">Measured</div></div>
        <div class="lrow rise" style="animation-delay:.51s"><div class="ln">04</div><div class="lw"><h4>Roll out on your schedule</h4><p>Payroll, billing, leave and training follow in phase 2. AI agents in phase 3, on our own infrastructure in India.</p></div><div class="lp">Staged</div></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:14px;animation-delay:.7s">Durations are indicative and confirmed at initiation. Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`,
  },
]

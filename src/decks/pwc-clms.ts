import type { SlideDef } from '../lib/types'
import { fi, icons } from './html'

// CLMS 2.0 — proposal deck for PwC India partners to carry to large industrial clients.
// Two client use cases: (1) cut daily contract-labour deployment ~30% to ~25,000 without
// losing output, safety or compliance; (2) automate the work of 155+ time-office staff.
// Every capability claim traces to a live deployment (BPCL IOWMS, Reliance CWMS) or the
// platform as it ships today. Client cost inputs are left as placeholders on purpose.

export const pwcClmsSlides: SlideDef[] = [
  {
    id: 'pc1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">For PwC India · contract labour management · joint proposal</span>
      <h1 class="rise" style="animation-delay:.15s;font-size:clamp(30px,3.6vw,54px);">Cut contract-labour deployment 30%. <span style="color:var(--yellow)">Keep output, safety and compliance whole.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">An AI-driven upgrade to the client's existing CLMS — one master, predictive demand planning, auto-scheduling, benchmarking, integrations — plus the automation that lifts repetitive time-office work off 155+ people. Already running contract workforces at BPCL and Reliance.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:22px;">
        <div class="stat"><div class="n">36K → 25K</div><div class="l">Daily deployment, target</div></div>
        <div class="stat"><div class="n">155+</div><div class="l">Time-office staff, manual today</div></div>
        <div class="stat"><div class="n">300K+</div><div class="l">Workers live at Reliance</div></div>
        <div class="stat"><div class="n">BPCL</div><div class="l">Contract workforce, live</div></div>
      </div>
      <div class="mdcover ghost">CLMS</div>
    </div>`,
  },
  {
    id: 'pc2', theme: 'light', title: 'Executive summary',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Executive summary · the answer first</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">The 30% is not in the headcount. <span style="color:var(--navy)">It is in the gap between what each shift needs and what gets deployed.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:16px;animation-delay:.2s">
        <div class="case" style="--pc:#D0271D">
          <div class="ch"><span class="cn">What the client has</span></div>
          <p>Around 36,000 contract workers deployed a day, planned largely by habit and vendor rosters, on master data that names the same job five ways across plants. Attendance, time and Wage-Board queries handled by 155+ time-office staff, mostly by hand, across systems that do not talk to each other.</p>
        </div>
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">What we propose</span></div>
          <p>Upgrade the existing CLMS in four moves: one clean master for positions, skills, vendors and work orders; a demand forecast per shift and area from the production plan; auto-scheduling that deploys exactly the plan and no more, enforced at the gate; and benchmarking across plants and contractors. In parallel, worker self-service and AI agents absorb the repetitive time-office load.</p>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">What it is worth</span></div>
          <p>Roughly 11,000 fewer worker-days a day at the client's cost per worker-day; 60–70% of time-office queries and reports handled without a person; payroll leakage and vendor compliance gaps reduced at the rates we have measured elsewhere (−90% and −80% at Reliance). Delivered by redeploying people, not removing them.</p>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s">Everything on the next slides is either live at a client today or ships in the platform as it stands. <b>Where a number depends on the client's data, it is marked as an input, not a promise.</b></div>
    </div>`,
  },
  {
    id: 'pc3', theme: 'dark', title: 'Two problems',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The two problems, as stated by the client</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">One is about how many people show up. <span style="color:var(--yellow)">The other is about what 155 people do all day.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Use case 1 · deployment</span>
          <p class="tpprob" style="color:rgba(255,255,255,.72)"><b style="color:#fff">Target:</b> reduce daily contract-labour deployment by about 30%, to roughly 25,000, with no drop in work output and no compromise on safety or compliance.</p>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp"><div class="n">~36K</div><div class="l">deployed per day today</div></div>
            <div class="imp" style="background:rgba(59,232,176,.08);border-color:rgba(59,232,176,.3)"><div class="n" style="color:#3BE8B0">~25K</div><div class="l">target, same output</div></div>
          </div>
          <p class="tpprob" style="color:rgba(255,255,255,.62);margin-top:10px"><b style="color:#fff">The client's own diagnosis:</b> unstandardised master data, demand planned without a forecast, scheduling done by contractors, no benchmarking, and key systems not integrated.</p>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s;background:rgba(255,196,1,.08)">
          <span class="panetag w"><i></i>Use case 2 · time office</span>
          <p class="tpprob" style="color:rgba(255,255,255,.72)"><b style="color:#fff">Situation:</b> 155+ time-office staff handle attendance and time-and-attendance queries for contract labour and employees — Wage-Board cases especially. The work is heavy, repetitive and almost entirely manual.</p>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp"><div class="n">155+</div><div class="l">staff on queries, data entry, reports</div></div>
            <div class="imp" style="background:rgba(255,196,1,.1);border-color:rgba(255,196,1,.35)"><div class="n" style="color:var(--yellow)">IR</div><div class="l">politically sensitive — redeploy, don't remove</div></div>
          </div>
          <p class="tpprob" style="color:rgba(255,255,255,.62);margin-top:10px"><b style="color:#fff">The client's own framing:</b> the single biggest controllable opex lever, and the most sensitive one.</p>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'pc4', theme: 'light', title: 'Root causes',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Why deployment runs high · what we see in every large plant</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Nobody decided to deploy 36,000. <span style="color:var(--navy)">Five small gaps add up to it.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s;grid-template-columns:repeat(5,1fr);margin-top:16px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.layers}</svg></span><h4>Master data drift</h4><p>The same job carries different names, grades and rates across plants and contractors. You cannot count what you cannot name consistently.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.clock}</svg></span><h4>Demand set by habit</h4><p>Tomorrow's requirement is yesterday's deployment. Production plan, maintenance calendar and absenteeism never enter the number.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>Contractor-built rosters</h4><p>Vendors are paid on deployed heads, so rosters carry a buffer. Nobody inside the plant sees planned versus actual per shift.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>No benchmark</h4><p>Workers per tonne, per line or per shift is not compared across plants or contractors, so the best-run unit never sets the standard.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.plug}</svg></span><h4>Disconnected systems</h4><p>SAP holds the PO, the gate holds entries, attendance holds punches, payroll holds hours. Reconciling them is a person's job — 155 people, in fact.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s">Fix these five and the deployment number falls on its own — <b>because for the first time the plan, the gate and the bill agree with each other.</b></div>
    </div>`,
  },
  {
    id: 'pc5', theme: 'dark', title: 'Value tree',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Where the 11,000 comes from · illustrative split, confirmed in the diagnostic</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">From 36,000 to 25,000, <span style="color:var(--yellow)">one lever at a time.</span></h2>
      <div class="ajmix rise" style="animation-delay:.2s;margin-top:14px;max-width:1040px;">
        <div class="ajrow"><span class="lb">Today's deployment</span><span class="ajbar"><i style="--w:100%;--bc:#8A93B8;--d:.3s"></i></span><span class="pc">36,000</span></div>
        <div class="ajrow"><span class="lb">− Master data clean-up</span><span class="ajbar"><i style="--w:93%;--bc:#39D2E8;--d:.45s"></i></span><span class="pc">−2,500</span></div>
        <div class="ajrow"><span class="lb">− Demand forecast vs habit</span><span class="ajbar"><i style="--w:82%;--bc:#3BE8B0;--d:.6s"></i></span><span class="pc">−4,000</span></div>
        <div class="ajrow"><span class="lb">− Auto-scheduling &amp; gate control</span><span class="ajbar"><i style="--w:74%;--bc:#8B7CFF;--d:.75s"></i></span><span class="pc">−3,000</span></div>
        <div class="ajrow"><span class="lb">− Benchmark to best contractor</span><span class="ajbar"><i style="--w:69%;--bc:#FF9518;--d:.9s"></i></span><span class="pc">−1,500</span></div>
        <div class="ajrow"><span class="lb">Target deployment</span><span class="ajbar"><i style="--w:69%;--bc:#FFC401;--d:1.05s"></i></span><span class="pc">25,000</span></div>
      </div>
      <div class="modelrow rise" style="animation-delay:.5s;margin-top:16px;">
        <div class="mstat"><div class="n">11,000 × ₹/day</div><div class="l">Deployment saving · client's worker-day cost is the input</div></div>
        <div class="mstat"><div class="n">60–70%</div><div class="l">Time-office queries &amp; reports handled without a person</div></div>
        <div class="mstat"><div class="n">−90%</div><div class="l">Payroll leakage · measured at Reliance</div></div>
        <div class="mstat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk · measured at Reliance</div></div>
      </div>
    </div>`,
  },
  {
    id: 'pc6', theme: 'light', title: 'Target architecture',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">CLMS 2.0 · the target picture</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Six layers on one worker record — <span style="color:var(--navy)">the client's existing CLMS upgraded, not replaced.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(6,1fr);margin-top:20px;">
        <div class="rstage"><div class="rn">01</div><h4>Master data</h4><ul><li>One position &amp; skill master</li><li>Vendor, licence, work order</li><li>Site, zone, wage master</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Demand plan</h4><ul><li>Forecast per shift &amp; area</li><li>Production + maintenance</li><li>Absenteeism learned</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Auto-schedule</h4><ul><li>Skill-matched roster</li><li>Caps: WO &amp; licence</li><li>Published to vendors</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Deploy &amp; gate</h4><ul><li>Pass only if planned</li><li>Face + biometric</li><li>Induction &amp; policy checks</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Time office, automated</h4><ul><li>Self-service &amp; agents</li><li>Rules engine incl. Wage Board</li><li>Auto OT, auto reports</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Benchmark &amp; MIS</h4><ul><li>Workers per unit output</li><li>Plant vs plant, vendor vs vendor</li><li>Live compliance position</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s">Underneath: SAP for PO, contract and cost centre; the plant's biometric and access systems; the production planning system; payroll; and the analytics warehouse. <b>Each already integrated at least once at BPCL or Reliance.</b></div>
    </div>`,
  },
  {
    id: 'pc7', theme: 'light', title: 'Lever 1 · master data',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Lever 1 · standardised master data</span>
        <h2 class="rise" style="animation-delay:.08s;">Before you can plan 25,000, <span style="color:var(--navy)">every one of them needs a name the system agrees on.</span></h2>
        <div class="featlist">
          ${fi(icons.layers, 'One position and skill master', 'Legacy job titles across plants and contractors mapped to a single position code with skill grade and wage category — the way Reliance runs position codes and budgets across 3,000+ vendors.', 0.22)}
          ${fi(icons.doc, 'Vendor, licence and work order as parents', 'Every worker hangs off a work order; every work order off a vendor with a licence and EC policy on file. At BPCL, PO and contract fields come straight from SAP and cannot be edited on our side.', 0.3)}
          ${fi(icons.map, 'Site, zone and wage master', 'Zone-wise minimum wage by skill category, built as a central master — the same artefact we built with BPCL when their state wage data lived in files.', 0.38)}
          ${fi(icons.check, 'Data-completeness enforced', 'A record missing what payroll or compliance needs says so on the profile and blocks the step. No silent gaps.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Position master · mapping view</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>master data · positions · legacy → standard</span></div>
          <div class="fm-body">
            <div class="fm-rows">
              <div class="fm-row hl" style="--d:.5s"><span><b>HLP-02 · Helper, Grade II</b><br/><small>← "Helper", "Asst. Helper", "Khalasi", "Helper-B", "General Labour" · 5 legacy names · 3 plants</small></span><span class="fm-chip g">MAPPED</span></div>
              <div class="fm-row" style="--d:.7s"><span><b>RGR-01 · Rigger</b> <small>← 3 legacy names · skill: semi-skilled · zone wage applied</small></span><span class="fm-chip g">MAPPED</span></div>
              <div class="fm-row" style="--d:.9s"><span><b>CRN-OP · Crane operator</b> <small>← 2 names · licence required · certificate tracked</small></span><span class="fm-chip g">MAPPED</span></div>
              <div class="fm-row" style="--d:1.1s"><span><b>"Misc. worker"</b> <small>412 workers · no skill, no rate category — cannot be planned</small></span><span class="fm-chip r">UNMAPPED</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Unmapped workers are the first place deployment hides · <b>the diagnostic starts here</b></div>
      </div>
    </div>`,
  },
  {
    id: 'pc8', theme: 'dark', title: 'Lever 2 · demand planning',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Lever 2 · predictive demand planning</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Tomorrow's requirement, computed from tomorrow's plan — <span style="color:var(--yellow)">not from yesterday's deployment.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:4px;max-width:104ch;">Production plan, maintenance calendar, shift pattern and each area's learned absenteeism produce a required headcount per shift, area and skill. Vendors see the requirement, not a standing order. One shift, one plant, required against deployed:</p>
      <div class="ajmix rise" style="animation-delay:.24s;margin-top:8px;max-width:1040px;">
        <div class="ajrow"><span class="lb">Steel melting shop · A shift</span><span class="ajbar"><i style="--w:70%;--bc:#3BE8B0;--d:.35s"></i></span><span class="pc">1,120 req · 1,480 dep</span></div>
        <div class="ajrow"><span class="lb">Hot rolling · A shift</span><span class="ajbar"><i style="--w:78%;--bc:#3BE8B0;--d:.5s"></i></span><span class="pc">860 req · 1,100 dep</span></div>
        <div class="ajrow"><span class="lb">Material handling</span><span class="ajbar"><i style="--w:61%;--bc:#FF9518;--d:.65s"></i></span><span class="pc">640 req · 1,050 dep</span></div>
        <div class="ajrow"><span class="lb">Housekeeping &amp; utilities</span><span class="ajbar"><i style="--w:56%;--bc:#FF7A6B;--d:.8s"></i></span><span class="pc">390 req · 700 dep</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Bar = required as a share of deployed. <b>Where the bar is short, that is the 30%.</b> The roster agent (AI Zara) chases confirmations and re-plans shortfalls before the shift, not after.</div>
    </div>`,
  },
  {
    id: 'pc9', theme: 'light', title: 'Lever 3 · auto-scheduling',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Lever 3 · auto-scheduling and deployment control</span>
        <h2 class="rise" style="animation-delay:.08s;">Deploy exactly the plan. <span style="color:var(--navy)">The gate makes sure of it.</span></h2>
        <div class="featlist">
          ${fi(icons.clock, 'Roster generated from the forecast', 'Required headcount per shift and skill becomes a published roster — shift cards, weekly grid, bulk upload — with vendors filling names against it, not above it.', 0.22)}
          ${fi(icons.shield, 'Hard caps, not guidelines', 'Work-order sanctioned strength and CLRA licensed strength cap every roster. The 51st worker against a 50-worker licence is refused, not reconciled later.', 0.3)}
          ${fi(icons.lock, 'The gate enforces the roster', 'A gate pass is valid only for a rostered worker with induction, verification and EC cover in place. Unplanned deployment does not enter. This is the BPCL gate-pass and auto-termination logic, applied to a plan.', 0.38)}
          ${fi(icons.eye, 'Planned vs actual, live', 'Plant leadership sees required, rostered and inside-the-gate per area, per shift, as it happens — the number the 155 people used to assemble by hand.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Shift control · live</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>deployment control · plant 1 · A shift · 06:40</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">3,220<small>required</small></span>
              <span class="g">3,214<small>rostered</small></span>
              <span class="y">3,188<small>inside gate</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row" style="--d:.5s"><span><b>Ganpati Services · SMS</b> <small>rostered 640 · in 638 · within licence 700</small></span><span class="fm-chip g">ON PLAN</span></div>
              <div class="fm-row hl" style="--d:.7s"><span><b>Bhoomi Facility · housekeeping</b> <small>tried to deploy 61 against roster 48</small></span><span class="fm-chip r">13 REFUSED AT GATE</span></div>
              <div class="fm-row" style="--d:.9s"><span><b>Krishna Logistics · yard</b> <small>26 no-shows · 22 replacements confirmed by 06:20</small></span><span class="fm-chip y">SHORT 4</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Zepto runs planned-vs-actual gate control across <b>967 sites</b> · BPCL gate passes renew and expire on rules</div>
      </div>
    </div>`,
  },
  {
    id: 'pc10', theme: 'dark', title: 'Lever 4 · benchmarking',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Lever 4 · benchmarking</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Once every plant counts the same way, <span style="color:var(--yellow)">the best-run one sets the standard.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:6px;max-width:104ch;">Workers per unit of output, by plant, by area, by contractor, on one definition. The yellow marker is the internal best. Everything to its right is a conversation with a plant head or a contractor — with the number already agreed.</p>
      <div class="lsmeter rise" style="animation-delay:.24s;margin-top:14px;">
        <div class="lsrow"><span class="nm">Plant 2 · hot rolling</span><span class="lsbar"><i style="--w:64%;--d:.4s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs">0.94<small>workers / 100 t · best</small></span></div>
        <div class="lsrow"><span class="nm">Plant 1 · hot rolling</span><span class="lsbar"><i style="--w:81%;--d:.55s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs">1.19<small>+27% vs best</small></span></div>
        <div class="lsrow"><span class="nm">Plant 3 · hot rolling</span><span class="lsbar over"><i style="--w:100%;--d:.7s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs"><em>1.47</em><small>+56% vs best</small></span></div>
        <div class="lsrow"><span class="nm">Contractor A vs B · same area</span><span class="lsbar"><i style="--w:88%;--d:.85s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs">1.29 vs 0.94<small>same job, same plant</small></span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:1s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Reliance runs 3,000+ vendors on one rule engine — <b>the benchmark is a filter, not a study.</b> Illustrative numbers above; the diagnostic produces the real ones.</div>
    </div>`,
  },
  {
    id: 'pc11', theme: 'light', title: 'Use case 2 · time office',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Use case 2 · time-office automation</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">What 155 people do today, <span style="color:var(--navy)">and what takes it off them.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e"><i></i>Today · manual</span>
          <div class="funmock" style="margin-top:6px;">
            <div class="fm-bar"><i></i><i></i><i></i><span>a time-office day · observed pattern</span></div>
            <div class="fm-body">
              <div class="fm-rows">
                <div class="fm-row" style="--d:.4s"><span><b>Worker queries</b> <small>"my punch is missing", "why is OT not paid", "leave balance?" — by phone, at the window</small></span><span class="fm-chip r">~40%</span></div>
                <div class="fm-row" style="--d:.55s"><span><b>Regularisations &amp; corrections</b> <small>missed punches, wrong shift, wrong site — keyed by hand</small></span><span class="fm-chip r">~20%</span></div>
                <div class="fm-row" style="--d:.7s"><span><b>Wage-Board rule application</b> <small>category, rate, OT multiple, holiday pay — looked up and applied case by case</small></span><span class="fm-chip r">~15%</span></div>
                <div class="fm-row" style="--d:.85s"><span><b>Report compilation</b> <small>muster, OT, contractor headcount — assembled from three systems</small></span><span class="fm-chip r">~15%</span></div>
                <div class="fm-row" style="--d:1s"><span><b>Coordination</b> <small>chasing vendors, security, payroll for the same data</small></span><span class="fm-chip r">~10%</span></div>
              </div>
            </div>
          </div>
          <div class="mockcap">Shares are typical for plants we have studied · confirmed by an activity study in week 2</div>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s">
          <span class="panetag w"><i></i>After · absorbed by the platform</span>
          <div class="funmock" style="margin-top:6px;">
            <div class="fm-bar"><i></i><i></i><i></i><span>what handles it instead</span></div>
            <div class="fm-body">
              <div class="fm-rows">
                <div class="fm-row" style="--d:.5s"><span><b>Worker app + AI Theo</b> <small>logs, payslip, OT and leave visible in the app; questions answered by an agent on a phone call or chat, 24 languages, any hour</small></span><span class="fm-chip g">QUERIES</span></div>
                <div class="fm-row" style="--d:.65s"><span><b>Self-service regularisation</b> <small>worker raises it with a reason code; supervisor approves on mobile; audit trail automatic</small></span><span class="fm-chip g">CORRECTIONS</span></div>
                <div class="fm-row" style="--d:.8s"><span><b>Rules engine</b> <small>Wage-Board categories, OT multiples, holiday and shift rules configured once, applied every time, no judgement call</small></span><span class="fm-chip g">WAGE BOARD</span></div>
                <div class="fm-row" style="--d:.95s"><span><b>Reports that write themselves</b> <small>muster roll, OT register, contractor headcount — scheduled, filtered, exported</small></span><span class="fm-chip g">REPORTS</span></div>
                <div class="fm-row" style="--d:1.1s"><span><b>One record</b> <small>gate, attendance, payroll and SAP agree, so nobody reconciles them</small></span><span class="fm-chip g">COORDINATION</span></div>
              </div>
            </div>
          </div>
          <div class="mockcap"><b>60–70% of the load</b> handled without a person · the rest becomes exception handling</div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'pc12', theme: 'dark', title: 'Wage Board and IR',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Wage Board cases and the IR question</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">Redeploy the people. <span style="color:var(--yellow)">Automate the work.</span></h2>
        <div class="featlist">
          ${fi(icons.book, 'Wage Board as configuration, not judgement', 'Each Wage-Board category, its rate, OT multiple, holiday and shift rules sit in the rules engine. Every computation is the same, every time, and carries its own audit trail — which is also what a union asks to see.', 0.22)}
          ${fi(icons.users, 'A redeployment plan, not a headcount plan', 'Of 155+, roughly a third remain as exception handlers and plant time-office leads. The rest move to work the plant is short of: vendor governance, safety observation, quality checks, contractor audits — roles the new system creates demand for.', 0.3)}
          ${fi(icons.clock, 'Phased by plant, measured by control group', 'One plant first, with a comparison plant running as-is. Numbers are published to the works committee before the next plant moves.', 0.38)}
          ${fi(icons.shield, 'PwC owns the IR and change track', 'Union engagement, communication and the redeployment programme sit with PwC. BetterPlace supplies the system, the data and the evidence.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>155 → where they go</span></div>
        <div class="ajmix" style="margin-top:8px;">
          <div class="ajrow"><span class="lb">Exception &amp; plant T-O leads</span><span class="ajbar"><i style="--w:32%;--bc:#FFC401;--d:.4s"></i></span><span class="pc">~50</span></div>
          <div class="ajrow"><span class="lb">Vendor governance &amp; audit</span><span class="ajbar"><i style="--w:26%;--bc:#39D2E8;--d:.55s"></i></span><span class="pc">~40</span></div>
          <div class="ajrow"><span class="lb">Safety observation</span><span class="ajbar"><i style="--w:19%;--bc:#3BE8B0;--d:.7s"></i></span><span class="pc">~30</span></div>
          <div class="ajrow"><span class="lb">Quality &amp; process checks</span><span class="ajbar"><i style="--w:16%;--bc:#8B7CFF;--d:.85s"></i></span><span class="pc">~25</span></div>
          <div class="ajrow"><span class="lb">Natural attrition, not backfilled</span><span class="ajbar"><i style="--w:7%;--bc:#8A93B8;--d:1s"></i></span><span class="pc">~10</span></div>
        </div>
        <div class="mockcap">Illustrative · the activity study and the client's IR position set the real split</div>
      </div>
    </div>`,
  },
  {
    id: 'pc13', theme: 'light', title: 'Guardrails',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Safety and compliance guardrails · the non-negotiables</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">A 30% cut that breaks compliance is a liability, <span style="color:var(--navy)">not a saving. These stay on.</span></h2>
      <div class="compmap" style="grid-template-columns:repeat(3,1fr);margin-top:14px;">
        <div class="compcell" style="--cc:#1B2D93;--d:.2s"><div class="act">CLRA</div><h4>Licensed strength is a ceiling</h4><p>Deployment can go down freely; it can never exceed a contractor's licence. Enforced at roster and at gate.</p><span class="who ok">Live at BPCL</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.28s"><div class="act">Safety</div><h4>No induction, no pass</h4><p>Induction, PPE sign-off and area-specific certification are conditions of the gate pass, with expiry tracked.</p><span class="who ok">Live at BPCL</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.36s"><div class="act">EC Act</div><h4>Insurance before entry</h4><p>Workmen's / Employee's Compensation cover per contractor checked for validity; expiry warned in advance.</p><span class="who ok">Live at BPCL</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.44s"><div class="act">EPF · ESI</div><h4>Challans reconciled per worker</h4><p>Vendor PF and ESI challans read by OCR and matched worker by worker each month. Short payments surface before the bill is released.</p><span class="who ok">−80% risk at Reliance</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.52s"><div class="act">Factories Act</div><h4>Overtime inside the cap</h4><p>Daily, weekly and quarterly limits configured per state; overtime pre-approved, computed at the statutory multiple, registered automatically.</p><span class="who ok">Platform standard</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.6s"><div class="act">Audit</div><h4>Everything dated</h4><p>Every roster, refusal, regularisation, approval and reconciliation carries who, when and why. An inspector's question is a filter.</p><span class="who ok">Platform standard</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.7s">Output is protected the same way: <b>required headcount is derived from the production plan, so the forecast cannot recommend fewer people than the plan needs.</b></div>
    </div>`,
  },
  {
    id: 'pc14', theme: 'light', title: 'Integrations',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Key system integrations · each done before</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">The upgrade only works if SAP, the gate and payroll <span style="color:var(--navy)">stop needing a person in between.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:16px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">SAP</span></div>
          <p><b>PO, contract and cost centre as the source of truth.</b> At BPCL, PO and contract fields flow from SAP and are locked on our side; labour licence and EC policy stay editable where they belong. Approved invoices post back. Same pattern here.</p>
        </div>
        <div class="case" style="--pc:#39D2E8">
          <div class="ch"><span class="cn">Gate, biometric and access</span></div>
          <p><b>Face and fingerprint at the gate, our roster behind it.</b> BPCL runs contract-worker face and fingerprint access through the site access system with our re-onboarding API; Reliance O2C runs biometric tablets at factory sites. Device health and log re-drive included.</p>
        </div>
        <div class="case" style="--pc:#3BE8B0">
          <div class="ch"><span class="cn">Production plan, payroll, analytics</span></div>
          <p><b>Demand in, hours out, data everywhere.</b> Production and maintenance schedules feed the forecast; verified hours feed payroll; attendance, leave and regularisation views feed the client's warehouse — the data-dictionary and view pattern we built for Reliance Jio and Retail's central dashboard.</p>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s">Where an ERP change is in flight, we run a file-based interface first so the rollout is not held hostage to the ERP calendar. <b>Documented REST APIs and webhooks for everything else.</b></div>
    </div>`,
  },
  {
    id: 'pc15', theme: 'dark', title: 'Credential · BPCL',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Credential · Bharat Petroleum Corporation Limited</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">A public-sector oil major runs its contract workforce <span style="color:var(--yellow)">on this platform today.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:6px;">BPCL's workforce system for contract labour, vendors and visitors — wired into SAP, delivered under PSU change control. Everything below is live or in phased release.</p>
        <div class="featlist">
          ${fi(icons.doc, 'Vendors, contracts and work orders from SAP', 'PO and contract data sourced from SAP and locked; labour licence and EC policy tracked per contract, with licence records auto-created once a contract crosses the 20-worker threshold.', 0.24)}
          ${fi(icons.lock, 'Gate pass, renewal and auto-termination', 'Passes issued and renewed on rules; workers auto-terminated on gate-pass expiry, attendance lapse or stage movement — with persona-specific rules down to transporter drivers and helpers.', 0.32)}
          ${fi(icons.shield, 'Compliance deviation workflows and wage master', 'Deviation approval and resubmission flows, downloadable compliance reports, and a central minimum-wage master by zone and skill category feeding payroll, ESI and full-and-final.', 0.4)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Delivered scope</span></div>
        <div class="compmap" style="grid-template-columns:1fr 1fr;">
          <div class="compcell" style="--cc:#FFC401;--d:.4s"><div class="act">Access</div><h4>Face &amp; fingerprint for contract workers</h4><p>Biometric enrolment and access at BPCL sites, integrated with the site access system.</p></div>
          <div class="compcell" style="--cc:#39D2E8;--d:.48s"><div class="act">Visitors</div><h4>Visitor management</h4><p>Bespoke and FTE visitor flows, bulk upload, approvals — the same gate, one system.</p></div>
          <div class="compcell" style="--cc:#3BE8B0;--d:.56s"><div class="act">Dashboards</div><h4>Licensed vs deployed headcount</h4><p>Vendor and associate dashboards: gate-pass, licence and EC metrics, deployed manpower per contract.</p></div>
          <div class="compcell" style="--cc:#8B7CFF;--d:.64s"><div class="act">Governance</div><h4>Debarring &amp; delegation</h4><p>Vendor debarring and approval delegation workflows, tested end to end by the client before production.</p></div>
        </div>
        <div class="mockcap">Delivered under PSU audit and change-control discipline · six workflows moved to production in one release</div>
      </div>
    </div>`,
  },
  {
    id: 'pc16', theme: 'dark', title: 'Credential · Reliance',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Credential · Reliance Industries</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">300,000 workers, 3,000 vendors, <span style="color:var(--yellow)">one rule engine.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:8px;">The contract workforce management system across Reliance Retail, Jio and O2C — the largest deployment of its kind we know of in India, and the closest analogue to the client's scale.</p>
        <div class="featlist">
          ${fi(icons.layers, 'Position and budget control', 'Position codes and budget detail as governing masters — position dashboards and budget reports at site-admin level, so deployment is planned against sanctioned positions, not requests.', 0.24)}
          ${fi(icons.users, 'Vendor and sub-vendor hierarchy at scale', 'Sub-contractor capture, bulk onboarding cycles at tens of thousands of records, and Kafka-based archival built specifically for attendance volume.', 0.32)}
          ${fi(icons.plug, 'Attendance into the enterprise warehouse', 'Attendance, leave and regularisation views delivered against a shared data dictionary for Jio and Retail’s central analytics dashboard.', 0.4)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Measured outcomes</span></div>
        <div class="modelrow" style="grid-template-columns:1fr 1fr;margin-top:8px;">
          <div class="mstat"><div class="n">−90%</div><div class="l">Payroll leakage</div></div>
          <div class="mstat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk</div></div>
          <div class="mstat"><div class="n">7×</div><div class="l">Faster customisation vs prior systems</div></div>
          <div class="mstat"><div class="n">18,918</div><div class="l">Stores · Reliance Retail</div></div>
        </div>
        <div class="compmap" style="grid-template-columns:1fr;margin-top:12px;">
          <div class="compcell" style="--cc:#FFC401;--d:.6s"><div class="act">Skilling · Samarth</div><h4>500,000+ associates trained in 14 languages</h4><p>Live in eight weeks; India's largest public retail skilling school, 800K+ downloads, feeding a pre-verified talent pool.</p></div>
        </div>
        <div class="mockcap">Manufacturing peers on the same platform: <b>Hindalco · AGI Glaspac · Yokohama</b></div>
      </div>
    </div>`,
  },
  {
    id: 'pc17', theme: 'light', title: 'Roadmap and roles',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Delivery roadmap · and who does what</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Diagnose, prove at one plant with a control, <span style="color:var(--navy)">then scale on evidence.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:18px;">
        <div class="rstage"><div class="rn">Wk 0–6</div><h4>Diagnostic</h4><ul><li>Deployment vs output baseline, by area</li><li>Master-data audit &amp; mapping</li><li>Time-office activity study</li><li>Business case signed off</li></ul></div>
        <div class="rstage"><div class="rn">Wk 6–18</div><h4>Pilot plant</h4><ul><li>Master, forecast, roster, gate live</li><li>Self-service + agents for time office</li><li>Control plant runs as-is</li><li>Weekly benefit tracking</li></ul></div>
        <div class="rstage"><div class="rn">Month 5+</div><h4>Scale</h4><ul><li>Plant by plant on pilot evidence</li><li>Redeployment programme runs alongside</li><li>SAP &amp; warehouse integrations hardened</li></ul></div>
        <div class="rstage"><div class="rn">Ongoing</div><h4>Run &amp; benchmark</h4><ul><li>Quarterly benchmark reviews</li><li>Forecast retrained on actuals</li><li>Compliance position, live</li></ul></div>
      </div>
      <div class="cases rise" style="grid-template-columns:1fr 1fr;margin-top:14px;animation-delay:.42s">
        <div class="case" style="--pc:#D0271D"><div class="ch"><span class="cn">PwC</span></div><p>Business case and benefits tracking · IR strategy, union engagement and redeployment programme · programme management and governance · process redesign for the time office · executive sponsorship.</p></div>
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">BetterPlace</span></div><p>Platform configuration and the CLMS upgrade · demand-forecast and scheduling models · AI agents on our private cloud · SAP, gate and warehouse integrations · data migration and master-data mapping · hypercare and support.</p></div>
      </div>
    </div>`,
  },
  {
    id: 'pc18', theme: 'dark', title: 'Business case and risks',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Business case shape · and the risks we would raise ourselves</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Run-rate savings, a one-time build, <span style="color:var(--yellow)">and four risks with owners.</span></h2>
      <div class="aival" style="grid-template-columns:repeat(3,1fr);margin-top:14px;">
        <div class="vt rise" style="--vc:#FFC401;animation-delay:.2s"><div class="n">11,000 <small>× ₹/day × 300</small></div><div class="w">Deployment run-rate saving</div><p>Client's blended cost per contract worker-day is the input. At ₹700/day, illustratively, that is ₹230 crore a year.</p></div>
        <div class="vt rise" style="--vc:#39D2E8;animation-delay:.28s"><div class="n">~100 <small>FTE</small></div><div class="w">Time-office capacity redeployed</div><p>Value counted as work the plant currently lacks — vendor audit, safety observation — not as salary removed.</p></div>
        <div class="vt rise" style="--vc:#3BE8B0;animation-delay:.36s"><div class="n">−90% <small>leakage</small></div><div class="w">Payroll and billing leakage</div><p>Billed-not-present and unverified overtime at the rates measured at Reliance; sized on the client's vendor spend.</p></div>
      </div>
      <div class="funmock rise" style="animation-delay:.5s;max-width:none;margin-top:14px;">
        <div class="fm-bar"><i></i><i></i><i></i><span>risk register · opening position</span></div>
        <div class="fm-body">
          <div class="fm-rows">
            <div class="fm-row" style="--d:.6s"><span><b>IR pushback on time-office change</b> <small>mitigation: redeployment commitment before the pilot, works-committee reporting, PwC-led engagement</small></span><span class="fm-chip y">PwC</span></div>
            <div class="fm-row" style="--d:.75s"><span><b>Master data too poor to plan on</b> <small>mitigation: the diagnostic maps it first; unmapped workers are quantified before any target is set</small></span><span class="fm-chip y">BetterPlace</span></div>
            <div class="fm-row" style="--d:.9s"><span><b>Output dips as deployment falls</b> <small>mitigation: forecast floors from the production plan, control plant, weekly output tracking, safety incidents as a stop condition</small></span><span class="fm-chip y">Joint</span></div>
            <div class="fm-row" style="--d:1.05s"><span><b>SAP or access-system integration slips</b> <small>mitigation: interim file interfaces; both integrations already delivered at BPCL</small></span><span class="fm-chip y">BetterPlace</span></div>
          </div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'pc19', theme: 'darker', title: 'Partnership and next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Why BetterPlace as PwC's platform partner · and how we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:36ch;">You bring the case and the change. <span style="color:var(--yellow)">We bring a system that is already running.</span></h2>
      <div class="ctacards" style="margin-top:20px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Proven at the client's scale and scrutiny</h4><p>A PSU oil major and a 300,000-worker conglomerate run their contract workforces on this platform. Nothing in this deck is a roadmap item.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>AI you can put in front of a works committee</h4><p>Agents run on open-source models on our own cloud in India — worker data never leaves. Deterministic where the process must not deviate, logged everywhere. ISO 27001, SOC 2.</p></div>
        <div class="ctac rise" style="animation-delay:.4s"><div class="num">03</div><h4>A clean split of roles</h4><p>PwC owns the business case, IR and programme. BetterPlace owns the platform, data and integrations. Joint diagnostic, joint benefits tracking, one governance forum.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));"><b>Proposed next step:</b> a joint six-week diagnostic at one plant — deployment-vs-output baseline, master-data map, time-office activity study — producing the signed business case and the pilot plan. We can walk PwC through the BPCL and Reliance systems live before then.</div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:16px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`,
  },
]

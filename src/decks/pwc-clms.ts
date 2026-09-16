import type { SlideDef } from '../lib/types'
import { fi, icons } from './html'

// CLMS 2.0 — proposal deck for PwC India partners to carry to large industrial clients.
// Two client use cases: cut daily contract-labour deployment ~30% to ~25,000 with output,
// safety and compliance intact; and automate the work of 155+ time-office staff.
// Every capability traces to a live deployment (BPCL IOWMS, Reliance CWMS) or the platform
// as it ships today. Client cost inputs are left as placeholders on purpose.

export const pwcClmsSlides: SlideDef[] = [
  {
    id: 'pc1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">For PwC India · contract labour management · joint proposal</span>
      <h1 class="rise" style="animation-delay:.15s;font-size:clamp(30px,3.6vw,54px);">A way to reach the client's 30% deployment target, <span style="color:var(--yellow)">with output, safety and compliance intact.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">An AI upgrade to the client's existing CLMS: one clean master, a demand forecast, auto-scheduling, overtime control, benchmarking and the integrations between them. Plus the automation that takes repetitive time-office work off 155+ people. These are the processes our clients use to run contract labour tighter; the platform already does this at BPCL and Reliance.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:22px;">
        <div class="stat"><div class="n">36K → 25K</div><div class="l">The client's daily deployment target</div></div>
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
      <span class="eyebrow rise">Executive summary</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Why 36,000 people show up when the plan needs fewer, <span style="color:var(--navy)">and the levers that close the gap.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#D0271D">
          <div class="ch"><span class="cn">Where the client is</span></div>
          <ul class="cl">
            <li>About <b>36,000 contract workers</b> deployed a day</li>
            <li>Planned from last week's numbers and vendor rosters</li>
            <li>The same job named five ways across plants</li>
            <li><b>155+ time-office staff</b> answering queries and keying data by hand</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">What we propose</span></div>
          <ul class="cl">
            <li>One master for positions, skills, vendors, work orders</li>
            <li>A demand forecast per shift and area, from the production plan</li>
            <li>Auto-scheduling that deploys the plan, enforced at the gate, with overtime inside the cap</li>
            <li>Benchmarks across plants and contractors</li>
            <li>Worker self-service and AI agents take the time-office load</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">What it is worth</span></div>
          <ul class="cl">
            <li>Deployment falls as each gap closes. <b>The diagnostic puts a number on it</b> against the 25,000 target</li>
            <li>Overtime paid at premium rates falls once rosters carry a cap</li>
            <li>Most routine time-office queries and reports move to the system</li>
            <li>Leakage and vendor gaps cut at the rates we measured at Reliance (−90%, −80%)</li>
            <li>People redeployed, not removed</li>
          </ul>
        </div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Clean master<small>one name per job</small></span><span class="fa">→</span>
        <span class="fc">Forecast<small>per shift, per area</small></span><span class="fa">→</span>
        <span class="fc">Auto-roster<small>capped by licence</small></span><span class="fa">→</span>
        <span class="fc hot">Gate enforces it<small>plan = deployment</small></span><span class="fa">→</span>
        <span class="fc gold">Benchmark<small>best plant sets the bar</small></span>
      </div>
    </div>`,
  },
  {
    id: 'pc3', theme: 'dark', title: 'Two problems',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The two problems, in the client's words</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:46ch;">Two problems: too many workers deployed each day, <span style="color:var(--yellow)">and 155 people doing manual time-office work.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Use case 1 · deployment</span>
          <p class="tpprob" style="color:rgba(255,255,255,.72)"><b style="color:#fff">Target:</b> about 30% fewer contract workers a day, roughly 25,000, with the same output and no compromise on safety or compliance.</p>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp"><div class="n">~36K</div><div class="l">deployed per day today</div></div>
            <div class="imp" style="background:rgba(59,232,176,.08);border-color:rgba(59,232,176,.3)"><div class="n" style="color:#3BE8B0">~25K</div><div class="l">the client's target, same output</div></div>
          </div>
          <p class="tpprob" style="color:rgba(255,255,255,.62);margin-top:10px"><b style="color:#fff">Their own diagnosis:</b> no standard master data, no forecast, scheduling left to contractors, no benchmarking, systems not integrated.</p>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s;background:rgba(255,196,1,.08)">
          <span class="panetag w"><i></i>Use case 2 · time office</span>
          <p class="tpprob" style="color:rgba(255,255,255,.72)"><b style="color:#fff">Situation:</b> 155+ staff handle attendance and time queries for contract labour and employees, Wage-Board cases most of all. Heavy, repetitive, almost all manual.</p>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp"><div class="n">155+</div><div class="l">staff on queries, data entry, reports</div></div>
            <div class="imp" style="background:rgba(255,196,1,.1);border-color:rgba(255,196,1,.35)"><div class="n" style="color:var(--yellow)">IR</div><div class="l">sensitive: redeploy, don't remove</div></div>
          </div>
          <p class="tpprob" style="color:rgba(255,255,255,.62);margin-top:10px"><b style="color:#fff">Their own framing:</b> the biggest controllable opex lever, and the most sensitive one.</p>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'pc4', theme: 'light', title: 'Root causes',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Why deployment runs high</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Why deployment runs above the plan: <span style="color:var(--navy)">five gaps in how it is made.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s;grid-template-columns:repeat(5,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.layers}</svg></span><h4>Master data drift</h4><p>The same job has different names, grades and rates in each plant and vendor. You cannot count what you name five ways.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.clock}</svg></span><h4>Demand set by habit</h4><p>Tomorrow's requirement is yesterday's deployment. The production plan and maintenance calendar never enter the number.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>Contractor-built rosters</h4><p>Vendors are paid per head deployed, so rosters carry a buffer. Nobody in the plant sees planned against actual per shift.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>No benchmark</h4><p>Workers per tonne or per line is never compared across plants. The best-run unit never sets the standard.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.plug}</svg></span><h4>Disconnected systems</h4><p>SAP has the PO, the gate has entries, attendance has punches, payroll has hours. Reconciling them is a person's job. 155 people, in fact.</p></div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Naming drift<small>ghost and duplicate workers</small></span><span class="fa">+</span>
        <span class="fc">Habit<small>yesterday's number, again</small></span><span class="fa">+</span>
        <span class="fc">Padded rosters<small>paid per head</small></span><span class="fa">+</span>
        <span class="fc">Unplanned overtime<small>hours at 2× rate</small></span><span class="fa">+</span>
        <span class="fc">No benchmark<small>best plant unknown</small></span><span class="fa">=</span>
        <span class="fc hot">More people and premium hours than the plan needs<small>sized in the diagnostic</small></span>
      </div>
    </div>`,
  },
  {
    id: 'pc5', theme: 'dark', title: 'Value tree',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">How the target is reached · each lever, what it removes, and the evidence we have</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Five levers between 36,000 and the client's 25,000. <span style="color:var(--yellow)">The diagnostic sizes each one.</span></h2>
      <div class="compmap" style="grid-template-columns:repeat(5,1fr);margin-top:14px;">
        <div class="compcell" style="--cc:#39D2E8;--d:.2s"><div class="act">Lever 1</div><h4>Clean master data</h4><p>Removes duplicate, ghost and unmapped workers, and workers on the wrong rate.</p><span class="who ok">Reliance: −90% payroll leakage</span></div>
        <div class="compcell" style="--cc:#3BE8B0;--d:.28s"><div class="act">Lever 2</div><h4>Demand forecast</h4><p>Removes the buffer that comes from copying yesterday's number instead of reading the plan.</p><span class="who">Built and measured in the pilot</span></div>
        <div class="compcell" style="--cc:#8B7CFF;--d:.36s"><div class="act">Lever 3</div><h4>Auto-roster and gate</h4><p>Removes contractor padding and billed-not-present. Nobody enters above the roster.</p><span class="who ok">Zepto: planned vs actual at 967 sites</span></div>
        <div class="compcell" style="--cc:#FF9518;--d:.44s"><div class="act">Lever 4</div><h4>Overtime control</h4><p>Removes unplanned hours paid at the statutory 2× rate. Pre-approved, capped, registered.</p><span class="who ok">Platform standard · Factories Act caps</span></div>
        <div class="compcell" style="--cc:#FFC401;--d:.52s"><div class="act">Lever 5</div><h4>Benchmarking</h4><p>Removes the gap between the best-run plant or contractor and the rest, on one definition.</p><span class="who ok">Reliance: 3,000 vendors, one rule engine</span></div>
      </div>
      <div class="modelrow rise" style="animation-delay:.6s;margin-top:16px;">
        <div class="mstat"><div class="n">36K → 25K</div><div class="l">The client's target · we size the path, we do not set the number</div></div>
        <div class="mstat"><div class="n">Wk 0–6</div><div class="l">Diagnostic puts a figure against each lever, by plant and area</div></div>
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
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">What CLMS 2.0 looks like: <span style="color:var(--navy)">six layers added to the client's existing system.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(6,1fr);margin-top:20px;">
        <div class="rstage"><div class="rn">01</div><h4>Master data</h4><ul><li>One position and skill master</li><li>Vendor, licence, work order</li><li>Site, zone, wage master</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Demand plan</h4><ul><li>Forecast per shift and area</li><li>From production and maintenance</li><li>Absenteeism learned</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Auto-schedule</h4><ul><li>Skill-matched roster</li><li>Capped by WO and licence</li><li>Published to vendors</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Deploy and gate</h4><ul><li>Pass only if rostered</li><li>Face and biometric</li><li>Induction and policy checks</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Time office, automated</h4><ul><li>Self-service and agents</li><li>Rules engine incl. Wage Board</li><li>Auto OT, auto reports</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Benchmark and MIS</h4><ul><li>Workers per unit of output</li><li>Plant vs plant, vendor vs vendor</li><li>Live compliance position</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s">Underneath: SAP for PO, contract and cost centre; the plant's gate and biometric systems; the production planning system; payroll; the analytics warehouse. <b>Each integrated at least once before, at BPCL or Reliance.</b></div>
    </div>`,
  },
  {
    id: 'pc7', theme: 'light', title: 'Lever 1 · master data',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Lever 1 · one master</span>
        <h2 class="rise" style="animation-delay:.08s;">Fix 1 · Clean master data: <span style="color:var(--navy)">one name and one code for every job, vendor and rate.</span></h2>
        <div class="featlist">
          ${fi(icons.layers, 'One position and skill master', 'Every legacy job title maps to one position code with a skill grade and wage category. Reliance runs position codes and budgets this way across 3,000+ vendors.', 0.22)}
          ${fi(icons.doc, 'Vendor, licence and work order as parents', 'Every worker hangs off a work order; every work order off a licensed vendor. At BPCL, PO and contract fields come from SAP and cannot be edited on our side.', 0.3)}
          ${fi(icons.map, 'Site, zone and wage master', 'Zone-wise minimum wage by skill category, held centrally. We built this artefact with BPCL when their wage data lived in files.', 0.38)}
          ${fi(icons.check, 'Gaps block the step', 'A record missing what payroll or compliance needs says so on the profile, and the step waits.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Position master · mapping view</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>master data · positions · legacy → standard</span></div>
          <div class="fm-body">
            <div class="fm-rows">
              <div class="fm-row hl" style="--d:.5s"><span><b>HLP-02 · Helper, Grade II</b><br/><small>← "Helper", "Asst. Helper", "Khalasi", "Helper-B", "General Labour" · 5 legacy names · 3 plants</small></span><span class="fm-chip g">MAPPED</span></div>
              <div class="fm-row" style="--d:.7s"><span><b>RGR-01 · Rigger</b> <small>← 3 legacy names · semi-skilled · zone wage applied</small></span><span class="fm-chip g">MAPPED</span></div>
              <div class="fm-row" style="--d:.9s"><span><b>CRN-OP · Crane operator</b> <small>← 2 names · licence required · certificate tracked</small></span><span class="fm-chip g">MAPPED</span></div>
              <div class="fm-row" style="--d:1.1s"><span><b>"Misc. worker"</b> <small>412 workers · no skill, no rate category · cannot be planned</small></span><span class="fm-chip r">UNMAPPED</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Unmapped workers are where deployment hides first · <b>the diagnostic starts here</b></div>
      </div>
    </div>`,
  },
  {
    id: 'pc8', theme: 'dark', title: 'Lever 2 · demand planning',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Lever 2 · predictive demand planning</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Fix 2 · Demand forecast: <span style="color:var(--yellow)">work out how many people each shift needs from the production plan.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:4px;max-width:104ch;">Inputs: production plan, maintenance calendar, shift pattern, each area's absenteeism history. Output: required headcount per shift, area and skill. Vendors see the requirement, not a standing order. One shift at one plant, required against deployed:</p>
      <div class="ajmix rise" style="animation-delay:.24s;margin-top:8px;max-width:1040px;">
        <div class="ajrow"><span class="lb">Steel melting shop · A shift</span><span class="ajbar"><i style="--w:70%;--bc:#3BE8B0;--d:.35s"></i></span><span class="pc">1,120 req · 1,480 dep</span></div>
        <div class="ajrow"><span class="lb">Hot rolling · A shift</span><span class="ajbar"><i style="--w:78%;--bc:#3BE8B0;--d:.5s"></i></span><span class="pc">860 req · 1,100 dep</span></div>
        <div class="ajrow"><span class="lb">Material handling</span><span class="ajbar"><i style="--w:61%;--bc:#FF9518;--d:.65s"></i></span><span class="pc">640 req · 1,050 dep</span></div>
        <div class="ajrow"><span class="lb">Housekeeping and utilities</span><span class="ajbar"><i style="--w:56%;--bc:#FF7A6B;--d:.8s"></i></span><span class="pc">390 req · 700 dep</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Bar = required as a share of deployed. <b>The gap between the bars is where deployment can fall.</b> The roster agent (AI Zara) chases confirmations and re-plans shortfalls before the shift starts.</div>
    </div>`,
  },
  {
    id: 'pc9', theme: 'light', title: 'Lever 3 · auto-scheduling',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Lever 3 · auto-scheduling and deployment control</span>
        <h2 class="rise" style="animation-delay:.08s;">Fix 3 · Auto-scheduling: <span style="color:var(--navy)">roster only the forecast, and let the gate enforce it.</span></h2>
        <div class="featlist">
          ${fi(icons.clock, 'Roster built from the forecast', 'Required headcount per shift and skill becomes a published roster. Vendors fill names against it, not above it.', 0.22)}
          ${fi(icons.shield, 'Hard caps', 'Work-order strength and CLRA licensed strength cap every roster. The 51st worker on a 50-worker licence is refused, not reconciled later.', 0.3)}
          ${fi(icons.lock, 'The gate enforces the roster', 'A pass works only for a rostered worker with induction, verification and EC cover in place. This is the BPCL gate-pass logic, applied to a plan.', 0.38)}
          ${fi(icons.eye, 'Planned vs actual, live', 'Plant leadership sees required, rostered and inside-the-gate per area, per shift, as it happens.', 0.46)}
          ${fi(icons.clock, 'Overtime inside the roster', 'Extra hours need approval before the shift, sit under the Factories Act cap, and are paid at the statutory multiple. Unplanned overtime is a cost line, not a habit.', 0.54)}
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
              <div class="fm-row" style="--d:.5s"><span><b>Ganpati Services · SMS</b> <small>rostered 640 · in 638 · licence 700</small></span><span class="fm-chip g">ON PLAN</span></div>
              <div class="fm-row hl" style="--d:.7s"><span><b>Bhoomi Facility · housekeeping</b> <small>tried to deploy 61 against a roster of 48</small></span><span class="fm-chip r">13 REFUSED AT GATE</span></div>
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
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Fix 4 · Benchmarking: <span style="color:var(--yellow)">compare plants and contractors, and hold everyone to the best.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:6px;max-width:104ch;">Workers per unit of output, by plant, area and contractor, on one definition. The yellow marker is the internal best. Everything to its right is a conversation with a plant head or a contractor, with the number already agreed.</p>
      <div class="lsmeter rise" style="animation-delay:.24s;margin-top:14px;">
        <div class="lsrow"><span class="nm">Plant 2 · hot rolling</span><span class="lsbar"><i style="--w:64%;--d:.4s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs">0.94<small>workers / 100 t · best</small></span></div>
        <div class="lsrow"><span class="nm">Plant 1 · hot rolling</span><span class="lsbar"><i style="--w:81%;--d:.55s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs">1.19<small>+27% vs best</small></span></div>
        <div class="lsrow"><span class="nm">Plant 3 · hot rolling</span><span class="lsbar over"><i style="--w:100%;--d:.7s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs"><em>1.47</em><small>+56% vs best</small></span></div>
        <div class="lsrow"><span class="nm">Contractor A vs B · same area</span><span class="lsbar"><i style="--w:88%;--d:.85s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs">1.29 vs 0.94<small>same job, same plant</small></span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:1s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Reliance runs 3,000+ vendors on one rule engine, so <b>a benchmark is a filter you apply, not a study you commission.</b> Numbers above are illustrative; the diagnostic produces the real ones.</div>
    </div>`,
  },
  {
    id: 'pc11', theme: 'light', title: 'Use case 2 · time office',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Use case 2 · time-office automation</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Time office: what 155 people do today, <span style="color:var(--navy)">and which of it the system can take over.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e"><i></i>Today · manual</span>
          <div class="funmock" style="margin-top:6px;">
            <div class="fm-bar"><i></i><i></i><i></i><span>a time-office day · typical pattern</span></div>
            <div class="fm-body">
              <div class="fm-rows">
                <div class="fm-row" style="--d:.4s"><span><b>Worker queries</b> <small>"my punch is missing", "why no OT", "leave balance?" — by phone and at the window</small></span><span class="fm-chip r">~40%</span></div>
                <div class="fm-row" style="--d:.55s"><span><b>Regularisations</b> <small>missed punches, wrong shift, wrong site, keyed by hand</small></span><span class="fm-chip r">~20%</span></div>
                <div class="fm-row" style="--d:.7s"><span><b>Wage-Board rules</b> <small>category, rate, OT multiple, holiday pay, looked up case by case</small></span><span class="fm-chip r">~15%</span></div>
                <div class="fm-row" style="--d:.85s"><span><b>Report compilation</b> <small>muster, OT, contractor headcount, pulled from three systems</small></span><span class="fm-chip r">~15%</span></div>
                <div class="fm-row" style="--d:1s"><span><b>Coordination</b> <small>chasing vendors, security and payroll for the same data</small></span><span class="fm-chip r">~10%</span></div>
              </div>
            </div>
          </div>
          <div class="mockcap">Shares are typical of plants we have studied · confirmed by an activity study in week 2</div>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s">
          <span class="panetag w"><i></i>After · handled by the system</span>
          <div class="funmock" style="margin-top:6px;">
            <div class="fm-bar"><i></i><i></i><i></i><span>what handles it instead</span></div>
            <div class="fm-body">
              <div class="fm-rows">
                <div class="fm-row" style="--d:.5s"><span><b>Worker app + AI Theo</b> <small>logs, payslip, OT and leave in the app; an agent answers questions by phone or chat, 24 languages, any hour</small></span><span class="fm-chip g">QUERIES</span></div>
                <div class="fm-row" style="--d:.65s"><span><b>Self-service regularisation</b> <small>worker raises it with a reason; supervisor approves on mobile; audit trail automatic</small></span><span class="fm-chip g">CORRECTIONS</span></div>
                <div class="fm-row" style="--d:.8s"><span><b>Rules engine</b> <small>Wage-Board categories, OT multiples, holiday and shift rules set once, applied every time</small></span><span class="fm-chip g">WAGE BOARD</span></div>
                <div class="fm-row" style="--d:.95s"><span><b>Scheduled reports</b> <small>muster roll, OT register, contractor headcount: filtered, exported, on a timer</small></span><span class="fm-chip g">REPORTS</span></div>
                <div class="fm-row" style="--d:1.1s"><span><b>One record</b> <small>gate, attendance, payroll and SAP agree, so nobody reconciles them</small></span><span class="fm-chip g">COORDINATION</span></div>
              </div>
            </div>
          </div>
          <div class="mockcap"><b>Routine queries, corrections and reports</b> move to the system · people keep the exceptions · the activity study sizes the share</div>
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
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">Wage Board and unions: <span style="color:var(--yellow)">automate the work, move the people to other roles.</span></h2>
        <div class="featlist">
          ${fi(icons.book, 'Wage Board as configuration', 'Each category, rate, OT multiple and holiday rule sits in the rules engine. Every computation is the same every time and carries its own audit trail, which is what a union asks to see.', 0.22)}
          ${fi(icons.users, 'A redeployment plan, not a headcount plan', 'About a third of the 155 stay as exception handlers and plant leads. The rest move to work the plant is short of: vendor governance, safety observation, quality checks.', 0.3)}
          ${fi(icons.clock, 'Phased by plant, with a control', 'One plant first, a comparison plant left as-is. Numbers go to the works committee before the next plant moves.', 0.38)}
          ${fi(icons.shield, 'PwC owns IR and change', 'Union engagement, communication and the redeployment programme sit with PwC. BetterPlace supplies the system, the data and the evidence.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>155 → where they go</span></div>
        <div class="ajmix" style="margin-top:8px;">
          <div class="ajrow"><span class="lb">Exception and plant leads</span><span class="ajbar"><i style="--w:32%;--bc:#FFC401;--d:.4s"></i></span><span class="pc">~50</span></div>
          <div class="ajrow"><span class="lb">Vendor governance and audit</span><span class="ajbar"><i style="--w:26%;--bc:#39D2E8;--d:.55s"></i></span><span class="pc">~40</span></div>
          <div class="ajrow"><span class="lb">Safety observation</span><span class="ajbar"><i style="--w:19%;--bc:#3BE8B0;--d:.7s"></i></span><span class="pc">~30</span></div>
          <div class="ajrow"><span class="lb">Quality and process checks</span><span class="ajbar"><i style="--w:16%;--bc:#8B7CFF;--d:.85s"></i></span><span class="pc">~25</span></div>
          <div class="ajrow"><span class="lb">Attrition, not backfilled</span><span class="ajbar"><i style="--w:7%;--bc:#8A93B8;--d:1s"></i></span><span class="pc">~10</span></div>
        </div>
        <div class="mockcap">Illustrative · the activity study and the client's IR position set the real split</div>
      </div>
    </div>`,
  },
  {
    id: 'pc13', theme: 'light', title: 'Guardrails',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Safety and compliance guardrails</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Safety and compliance: <span style="color:var(--navy)">six checks that stay on while deployment falls.</span></h2>
      <div class="compmap" style="grid-template-columns:repeat(3,1fr);margin-top:14px;">
        <div class="compcell" style="--cc:#1B2D93;--d:.2s"><div class="act">CLRA</div><h4>Licensed strength is a ceiling</h4><p>Deployment can fall freely. It can never exceed a contractor's licence. Enforced at roster and at gate.</p><span class="who ok">Live at BPCL</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.28s"><div class="act">Safety</div><h4>No induction, no pass</h4><p>Induction, PPE sign-off and area certification are conditions of the pass, with expiry tracked.</p><span class="who ok">Live at BPCL</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.36s"><div class="act">EC Act</div><h4>Insurance before entry</h4><p>Compensation cover per contractor checked for validity; expiry warned in advance.</p><span class="who ok">Live at BPCL</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.44s"><div class="act">EPF · ESI</div><h4>Challans matched per worker</h4><p>Vendor PF and ESI challans read by OCR and matched worker by worker each month. Short payments surface before the bill is released.</p><span class="who ok">−80% risk at Reliance</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.52s"><div class="act">Factories Act</div><h4>Overtime inside the cap</h4><p>Daily, weekly and quarterly limits set per state. Overtime pre-approved, computed at the statutory multiple, registered on its own.</p><span class="who ok">Platform standard</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.6s"><div class="act">Audit</div><h4>Everything dated</h4><p>Every roster, refusal, regularisation, approval and reconciliation carries who, when and why.</p><span class="who ok">Platform standard</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.7s">Output is protected the same way. <b>Required headcount comes from the production plan, so the forecast cannot ask for fewer people than the plan needs.</b></div>
    </div>`,
  },
  {
    id: 'pc14', theme: 'light', title: 'Integrations',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Key system integrations · each done before</span>
        <h2 class="rise" style="animation-delay:.08s;">Integrations: <span style="color:var(--navy)">how CLMS 2.0 connects to SAP, the gate, payroll and the warehouse.</span></h2>
        <div class="featlist">
          ${fi(icons.doc, 'SAP', 'PO, contract and cost centre are the source of truth. At BPCL these fields flow from SAP and are locked on our side; approved invoices post back.', 0.22)}
          ${fi(icons.lock, 'Gate, biometric and access', 'Face and fingerprint at the gate, our roster behind it. Live at BPCL through the site access system; biometric tablets at Reliance O2C sites.', 0.3)}
          ${fi(icons.clock, 'Production plan', 'Production and maintenance schedules feed the demand forecast.', 0.38)}
          ${fi(icons.chart, 'Payroll and analytics', 'Verified hours feed payroll. Attendance, leave and regularisation views feed the client warehouse, as built for Reliance Jio and Retail.', 0.46)}
        </div>
        <div class="clientline rise" style="animation-delay:.55s;margin-top:10px;">If an ERP change is in flight, a file interface goes first so rollout does not wait on the ERP calendar.</div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>How it connects</span></div>
        <div class="hub">
          <svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <line x1="320" y1="210" x2="110" y2="80"/><line x1="320" y1="210" x2="530" y2="80"/>
            <line x1="320" y1="210" x2="80" y2="230"/><line x1="320" y1="210" x2="560" y2="230"/>
            <line x1="320" y1="210" x2="200" y2="360"/><line x1="320" y1="210" x2="440" y2="360"/>
            <circle cx="320" cy="210" r="78" fill="#1B2D93"/>
            <text class="hc" x="320" y="204" text-anchor="middle">CLMS 2.0</text>
            <text class="hcs" x="320" y="224" text-anchor="middle">ONE WORKER RECORD</text>
            <rect class="spoke" x="40" y="50" width="140" height="60" rx="12"/><text class="hn" x="110" y="76" text-anchor="middle">SAP</text><text class="hs" x="110" y="94" text-anchor="middle">PO · contract · cost centre</text>
            <rect class="spoke" x="460" y="50" width="140" height="60" rx="12"/><text class="hn" x="530" y="76" text-anchor="middle">Gate &amp; biometric</text><text class="hs" x="530" y="94" text-anchor="middle">face · fingerprint · pass</text>
            <rect class="spoke" x="10" y="200" width="140" height="60" rx="12"/><text class="hn" x="80" y="226" text-anchor="middle">Production plan</text><text class="hs" x="80" y="244" text-anchor="middle">demand forecast input</text>
            <rect class="spoke" x="490" y="200" width="140" height="60" rx="12"/><text class="hn" x="560" y="226" text-anchor="middle">Payroll</text><text class="hs" x="560" y="244" text-anchor="middle">verified hours out</text>
            <rect class="spoke" x="130" y="330" width="140" height="60" rx="12"/><text class="hn" x="200" y="356" text-anchor="middle">Analytics warehouse</text><text class="hs" x="200" y="374" text-anchor="middle">attendance · leave views</text>
            <rect class="spoke" x="370" y="330" width="140" height="60" rx="12"/><text class="hn" x="440" y="356" text-anchor="middle">Vendors</text><text class="hs" x="440" y="374" text-anchor="middle">roster · challans · invoices</text>
          </svg>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'pc15', theme: 'dark', title: 'Credential · BPCL',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Credential · Bharat Petroleum</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">See how Bharat Petroleum Corporation Limited <span style="color:var(--yellow)">manages its entire contract workforce on our platform.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:6px;">Contract labour, vendors and visitors on one system, wired into SAP, delivered under PSU change control. Everything here is live or in phased release.</p>
        <div class="featlist">
          ${fi(icons.doc, 'Vendors, contracts and work orders from SAP', 'PO and contract data come from SAP and are locked. Labour licence and EC policy tracked per contract; a licence record is created once a contract passes 20 workers.', 0.24)}
          ${fi(icons.lock, 'Gate pass, renewal, auto-termination', 'Passes issued and renewed on rules. Workers auto-terminated on pass expiry, attendance lapse or stage change, with persona rules down to transporter drivers.', 0.32)}
          ${fi(icons.shield, 'Compliance workflows and wage master', 'Deviation approval and resubmission flows, downloadable compliance reports, and a central minimum-wage master by zone and skill feeding payroll and settlements.', 0.4)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Delivered scope</span></div>
        <div class="compmap" style="grid-template-columns:1fr 1fr;">
          <div class="compcell" style="--cc:#FFC401;--d:.4s"><div class="act">Access</div><h4>Face and fingerprint at sites</h4><p>Contract workers enrolled and admitted through the site access system.</p></div>
          <div class="compcell" style="--cc:#39D2E8;--d:.48s"><div class="act">Visitors</div><h4>Visitor management</h4><p>Bespoke and FTE visitor flows, bulk upload, approvals. Same gate, one system.</p></div>
          <div class="compcell" style="--cc:#3BE8B0;--d:.56s"><div class="act">Dashboards</div><h4>Licensed vs deployed headcount</h4><p>Gate-pass, licence and EC metrics; deployed manpower per contract.</p></div>
          <div class="compcell" style="--cc:#8B7CFF;--d:.64s"><div class="act">Governance</div><h4>Debarring and delegation</h4><p>Vendor debarring and approval delegation, tested end to end by the client before production.</p></div>
        </div>
        <div class="mockcap">Six workflows moved to production in one release, under PSU audit discipline</div>
      </div>
    </div>`,
  },
  {
    id: 'pc16', theme: 'dark', title: 'Credential · Reliance',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Credential · Reliance Industries</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">See how Reliance Industries runs 300,000 workers and 3,000 vendors <span style="color:var(--yellow)">on one rule engine.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:6px;">Contract workforce management across Reliance Retail, Jio and O2C. The largest deployment of its kind we know of in India, and the closest to the client's scale.</p>
        <div class="featlist">
          ${fi(icons.layers, 'Position and budget control', 'Position codes and budgets as governing masters. Position dashboards and budget reports at site-admin level, so deployment is planned against sanctioned positions.', 0.24)}
          ${fi(icons.users, 'Vendor and sub-vendor hierarchy', 'Sub-contractor capture, bulk onboarding in the tens of thousands, and Kafka-based archival built for attendance volume.', 0.32)}
          ${fi(icons.plug, 'Attendance into the enterprise warehouse', 'Attendance, leave and regularisation views delivered against a shared data dictionary for Jio and Retail’s central dashboard.', 0.4)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Measured outcomes</span></div>
        <div class="modelrow" style="grid-template-columns:1fr 1fr;margin-top:8px;">
          <div class="mstat"><div class="n">−90%</div><div class="l">Payroll leakage</div></div>
          <div class="mstat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk</div></div>
          <div class="mstat"><div class="n">7×</div><div class="l">Faster customisation than before</div></div>
          <div class="mstat"><div class="n">18,918</div><div class="l">Stores · Reliance Retail</div></div>
        </div>
        <div class="compmap" style="grid-template-columns:1fr;margin-top:12px;">
          <div class="compcell" style="--cc:#FFC401;--d:.6s"><div class="act">Skilling · Samarth</div><h4>500,000+ associates trained in 14 languages</h4><p>Live in eight weeks. India's largest public retail skilling school, 800K+ downloads, feeding a pre-verified talent pool.</p></div>
        </div>
        <div class="mockcap">Manufacturing peers on the same platform: <b>Hindalco · AGI Glaspac · Yokohama</b></div>
      </div>
    </div>`,
  },
  {
    id: 'pc17', theme: 'light', title: 'Roadmap and roles',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Delivery roadmap, and who does what</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">How we deliver: <span style="color:var(--navy)">diagnose, prove it at one plant, then scale plant by plant.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:18px;">
        <div class="rstage"><div class="rn">Wk 0–6</div><h4>Diagnostic</h4><ul><li>Deployment vs output baseline, by area</li><li>Master-data audit and mapping</li><li>Time-office activity study</li><li>Business case signed off</li></ul></div>
        <div class="rstage"><div class="rn">Wk 6–18</div><h4>Pilot plant</h4><ul><li>Master, forecast, roster, gate live</li><li>Self-service and agents for time office</li><li>Control plant runs as-is</li><li>Weekly benefit tracking</li></ul></div>
        <div class="rstage"><div class="rn">Month 5+</div><h4>Scale</h4><ul><li>Plant by plant, on pilot evidence</li><li>Redeployment programme alongside</li><li>SAP and warehouse integrations hardened</li></ul></div>
        <div class="rstage"><div class="rn">Ongoing</div><h4>Run and benchmark</h4><ul><li>Quarterly benchmark reviews</li><li>Forecast retrained on actuals</li><li>Compliance position, live</li></ul></div>
      </div>
      <div class="cases rise" style="grid-template-columns:1fr 1fr;margin-top:14px;animation-delay:.42s">
        <div class="case" style="--pc:#D0271D"><div class="ch"><span class="cn">PwC</span></div><ul class="cl"><li>Business case and benefits tracking</li><li>IR strategy, union engagement, redeployment programme</li><li>Programme management and governance</li><li>Time-office process redesign</li></ul></div>
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">BetterPlace</span></div><ul class="cl"><li>Platform configuration and the CLMS upgrade</li><li>Demand-forecast and scheduling models; AI agents on our private cloud</li><li>SAP, gate and warehouse integrations</li><li>Data migration, master-data mapping, hypercare</li></ul></div>
      </div>
    </div>`,
  },
  {
    id: 'pc18', theme: 'dark', title: 'Business case and risks',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Business case shape, and the risks we would raise ourselves</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">What the business case is built from, <span style="color:var(--yellow)">and the four risks we would raise ourselves.</span></h2>
      <div class="aival" style="grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="vt rise" style="--vc:#FFC401;animation-delay:.2s"><div class="n">Days <small>removed × ₹/day</small></div><div class="w">Deployment saving</div><p>Worker-days removed, at the client's blended cost per day. The diagnostic sets the number; the client's 30% target is the upper case.</p></div>
        <div class="vt rise" style="--vc:#FF9518;animation-delay:.28s"><div class="n">Hours <small>above roster × 2×</small></div><div class="w">Overtime premium</div><p>Unplanned hours above the roster, paid at the statutory multiple. Sized on the client's current overtime bill.</p></div>
        <div class="vt rise" style="--vc:#39D2E8;animation-delay:.36s"><div class="n">FTE <small>redeployed</small></div><div class="w">Time-office capacity</div><p>Counted as work the plant lacks today (vendor audit, safety observation), not as salary removed. The activity study sizes it.</p></div>
        <div class="vt rise" style="--vc:#3BE8B0;animation-delay:.44s"><div class="n">−90% <small>leakage</small></div><div class="w">Billing leakage</div><p>Billed-not-present and unverified overtime, at the rate measured at Reliance, applied to the client's vendor spend.</p></div>
      </div>
      <div class="funmock rise" style="animation-delay:.5s;max-width:none;margin-top:14px;">
        <div class="fm-bar"><i></i><i></i><i></i><span>risk register · opening position</span></div>
        <div class="fm-body">
          <div class="fm-rows">
            <div class="fm-row" style="--d:.6s"><span><b>IR pushback on time-office change</b> <small>redeployment commitment before the pilot; works-committee reporting; PwC-led engagement</small></span><span class="fm-chip y">PwC</span></div>
            <div class="fm-row" style="--d:.75s"><span><b>Master data too poor to plan on</b> <small>the diagnostic maps it first; unmapped workers are counted before any target is set</small></span><span class="fm-chip y">BetterPlace</span></div>
            <div class="fm-row" style="--d:.9s"><span><b>Output dips as deployment falls</b> <small>forecast floors from the production plan; control plant; weekly output tracking; a safety incident stops the rollout</small></span><span class="fm-chip y">Joint</span></div>
            <div class="fm-row" style="--d:1.05s"><span><b>SAP or access-system integration slips</b> <small>interim file interfaces; both integrations already delivered at BPCL</small></span><span class="fm-chip y">BetterPlace</span></div>
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
      <span class="eyebrow rise">Why BetterPlace as the platform partner, and how we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:36ch;">Why BetterPlace, and the next step: <span style="color:var(--yellow)">a six-week diagnostic at one plant.</span></h2>
      <div class="ctacards" style="margin-top:20px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Proven at the client's scale</h4><p>A PSU oil major and a 300,000-worker conglomerate run their contract workforces on this platform. Every process in this deck is running for a client today; the forecast and scheduling models are built in the pilot.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>AI a works committee can accept</h4><p>Agents run on open-source models on our own cloud in India. Worker data stays there. Deterministic where the process must not deviate; logged everywhere. ISO 27001, SOC 2.</p></div>
        <div class="ctac rise" style="animation-delay:.4s"><div class="num">03</div><h4>A clean split of roles</h4><p>PwC owns the business case, IR and programme. BetterPlace owns the platform, data and integrations. One governance forum, joint benefits tracking.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));"><b>Next step:</b> a joint six-week diagnostic at one plant. Deployment-vs-output baseline, master-data map, time-office activity study, signed business case, pilot plan. We can walk PwC through the BPCL and Reliance systems live before then.</div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:16px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`,
  },
]

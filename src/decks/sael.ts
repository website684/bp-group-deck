import type { SlideDef } from '../lib/types'
import { fi, icons } from './html'

// SAEL demo deck — contract labour, work order, vendor compliance, CLRA, overtime.
// Plain language. Every claim either sourced or drawn from our own deployments.

export const saelSlides: SlideDef[] = [
  {
    id: 'sl1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">Prepared for SAEL · contract workforce &amp; plant compliance</span>
      <h1 class="rise" style="animation-delay:.15s">Every contract worker on your sites, <span style="color:var(--yellow)">on one record.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Work orders, CLRA licences, vendor PF and ESI, gate passes, attendance and overtime — run as one system across every plant, project site and biomass yard. This is what we already run for Bharat Petroleum.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">3,000+</div><div class="l">Vendors on one engine (Reliance)</div></div>
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage</div></div>
        <div class="stat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk</div></div>
        <div class="stat"><div class="n">10+</div><div class="l">Years on frontline compliance</div></div>
      </div>
      <div class="mdcover ghost">CLRA</div>
    </div>`,
  },
  {
    id: 'sl2', theme: 'dark', title: 'Your three workforces',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">What we understand about SAEL</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:36ch;">Three businesses. <span style="color:var(--yellow)">Three very different workforces.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:18px;animation-delay:.2s">
        <div class="case" style="--pc:#FFC401">
          <div class="ch"><span class="cn">Solar manufacturing</span></div>
          <p><b>Fixed plants, shift work.</b> TOPCon cell and module lines in Rajasthan and Punjab, and the new 5 GW plant coming up in Greater Noida. Contract workers on production lines, housekeeping, material handling and security — running three shifts against a takt time.</p>
          <div class="cm"><div class="m"><div class="mn">Shifts</div><div class="ml">round the clock</div></div><div class="m"><div class="mn">One state</div><div class="ml">per plant, per rule set</div></div></div>
        </div>
        <div class="case" style="--pc:#39D2E8">
          <div class="ch"><span class="cn">Solar EPC &amp; IPP sites</span></div>
          <p><b>Moving sites, many contractors.</b> Project sites across ten states and a union territory. Crews arrive, build, and move on — every mobilisation is a fresh set of contractors, licences, inductions and gate passes, under a different state's rules.</p>
          <div class="cm"><div class="m"><div class="mn">10+ states</div><div class="ml">different wage floors</div></div><div class="m"><div class="mn">Mobilise</div><div class="ml">and demobilise, repeatedly</div></div></div>
        </div>
        <div class="case" style="--pc:#3BE8B0">
          <div class="ch"><span class="cn">Biomass · paddy straw</span></div>
          <p><b>Seasonal surges.</b> Eleven plants running on stubble, with collection, baling and transport crews that spike hard around the harvest and shrink again. Headcount that triples for a season is the hardest kind to keep compliant.</p>
          <div class="cm"><div class="m"><div class="mn">Seasonal</div><div class="ml">surge staffing</div></div><div class="m"><div class="mn">Rural</div><div class="ml">supply chains</div></div></div>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">One thing is common to all three: <b>most of the people on site are not on your payroll.</b> They work for contractors — and the law still treats them as your responsibility.</div>
    </div>`,
  },
  {
    id: 'sl2b', theme: 'dark', title: 'Where it breaks at scale',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">What we see in every plant at this size</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">At one plant this is manageable. <span style="color:var(--yellow)">Across plants, shifts and vendors it becomes a control problem.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:16px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.eye}</svg></span><h4>You cannot see who is deployed</h4><p>No live view of which workers are on which site and shift right now, across plants and contractors.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.repeat}</svg></span><h4>The numbers never agree</h4><p>Attendance, payroll and the vendor's invoice each tell a different story, so someone reconciles them by hand every month.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.clock}</svg></span><h4>Overtime runs unchecked</h4><p>Hours approved verbally, paid at the wrong rate, and past the quarterly cap before anyone notices.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><h4>Filings are taken on trust</h4><p>PF and ESI are assumed to be deposited because the contractor says so. The proof only gets tested at an audit.</p></div>
      </div>
      <div class="impacts rise" style="animation-delay:.4s">
        <div class="imp"><div class="n">18%</div><div class="l">of overtime cost leaks away when OT is uncontrolled</div></div>
        <div class="imp"><div class="n">8%</div><div class="l">of total labour cost lost to manual process inefficiency</div></div>
        <div class="imp"><div class="n">3–4 wks</div><div class="l">to prepare for an audit — work that should take hours</div></div>
      </div>
    </div>`,
  },
  {
    id: 'sl3', theme: 'light', title: 'Why now',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Why this matters more this year than last</span>
        <h2 class="rise" style="animation-delay:.08s;">Contract labour just became <span style="color:var(--navy)">a board-level number.</span></h2>
        <div class="featlist">
          ${fi(icons.chart, 'A listing puts labour data on the record', 'Once you file, workforce numbers stop being an internal matter. BRSR reporting asks for contract worker counts, safety incidents, wages and welfare — reported, audited and compared year on year.', 0.22)}
          ${fi(icons.globe, 'Development finance asks harder questions', 'An investor like Norfund brings international labour standards into diligence — contractor practices, safety, and how you prove any of it.', 0.3)}
          ${fi(icons.map, 'Ten states means ten rule sets', 'Minimum wages, CLRA rules, factory rules and overtime limits all vary by state. Spreadsheets do not vary by state.', 0.38)}
          ${fi(icons.building, 'The next plant multiplies it', 'A 5 GW plant means a construction phase, then a production phase — hundreds of contractor workers onboarded twice over, at one site.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>What an auditor asks for</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>the questions that are hard to answer today</span></div>
          <div class="fm-body">
            <div class="fm-rows">
              <div class="fm-row" style="--d:.5s"><span><b>How many contract workers were on site last March?</b> <small>by plant, by contractor, by day</small></span><span class="fm-chip y">?</span></div>
              <div class="fm-row" style="--d:.7s"><span><b>Did every contractor stay inside licensed strength?</b> <small>every day, every site</small></span><span class="fm-chip y">?</span></div>
              <div class="fm-row" style="--d:.9s"><span><b>Was PF deposited for each of them?</b> <small>worker by worker, not vendor total</small></span><span class="fm-chip y">?</span></div>
              <div class="fm-row" style="--d:1.1s"><span><b>Show the overtime register for Q2.</b> <small>hours, approvals, double-rate payment</small></span><span class="fm-chip y">?</span></div>
              <div class="fm-row" style="--d:1.3s"><span><b>Prove every worker cleared safety induction.</b> <small>dated, per worker</small></span><span class="fm-chip y">?</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Each of these is a screen in our platform, answerable in seconds</div>
      </div>
    </div>`,
  },
  {
    id: 'sl4', theme: 'dark', title: 'What you owe',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The obligation map · what a principal employer carries</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">Twelve obligations. <span style="color:var(--yellow)">Most companies track them in twelve different places.</span></h2>
      <div class="compmap">
        <div class="compcell" style="--cc:#FFC401;--d:.2s"><div class="act">CLRA · Sec 7</div><h4>Your registration</h4><p>The plant registers as principal employer once contract workers cross the threshold.</p><span class="who ok">Held by you</span></div>
        <div class="compcell" style="--cc:#FFC401;--d:.26s"><div class="act">CLRA · Sec 12</div><h4>Contractor licence</h4><p>Every contractor licensed against your Form V, for a fixed maximum headcount.</p><span class="who">Vendor gap = your gap</span></div>
        <div class="compcell" style="--cc:#FFC401;--d:.32s"><div class="act">CLRA · registers</div><h4>Forms XII, XIII, XIV</h4><p>Register of contractors, register of workmen, an employment card for each worker.</p><span class="who">Usually paper</span></div>
        <div class="compcell" style="--cc:#FFC401;--d:.38s"><div class="act">CLRA · returns</div><h4>Half-yearly &amp; annual</h4><p>Contractor files Form XXIV twice a year; you file Form XXV by 15 February.</p><span class="who">Deadline-driven</span></div>
        <div class="compcell" style="--cc:#39D2E8;--d:.44s"><div class="act">EPF · Sec 8A</div><h4>Provident fund</h4><p>If a contractor does not deposit PF for their workers, the liability lands on you.</p><span class="who">12% interest · 1%/month damages</span></div>
        <div class="compcell" style="--cc:#39D2E8;--d:.5s"><div class="act">ESI · Sec 40</div><h4>State insurance</h4><p>You pay contribution for anyone employed through a contractor who is not independently compliant.</p><span class="who">Yours by default</span></div>
        <div class="compcell" style="--cc:#39D2E8;--d:.56s"><div class="act">CLRA · Sec 21</div><h4>Wages, if they fail</h4><p>When a contractor short-pays wages, you pay in full and recover later. No clause changes that.</p><span class="who">Strict liability</span></div>
        <div class="compcell" style="--cc:#39D2E8;--d:.62s"><div class="act">State rules</div><h4>Minimum wage</h4><p>Different floor per state and per skill grade, revised twice a year.</p><span class="who">Varies by site</span></div>
        <div class="compcell" style="--cc:#3BE8B0;--d:.68s"><div class="act">Factories Act · 51–59</div><h4>Hours &amp; overtime</h4><p>9 hours a day, 48 a week, overtime at twice the ordinary rate, with a register.</p><span class="who">Quarterly caps apply</span></div>
        <div class="compcell" style="--cc:#3BE8B0;--d:.74s"><div class="act">EC Act 1923</div><h4>Workmen's compensation</h4><p>Cover for injury or death. If the contractor has none, it attaches to you.</p><span class="who">Check expiry dates</span></div>
        <div class="compcell" style="--cc:#3BE8B0;--d:.8s"><div class="act">Safety</div><h4>Induction &amp; gate control</h4><p>No one on the floor without induction, PPE sign-off and a valid gate pass.</p><span class="who">ISO 45001 expects proof</span></div>
        <div class="compcell" style="--cc:#8B7CFF;--d:.86s"><div class="act">Labour codes</div><h4>What's coming</h4><p>The four codes fold CLRA into the OSH Code and lift the threshold to 50 workers. States are notifying at different speeds, so multi-state operators will run both regimes for a while.</p><span class="who">Plan for both</span></div>
      </div>
    </div>`,
  },
  {
    id: 'sl5', theme: 'light', title: 'Work order',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Where it starts · the work order</span>
        <h2 class="rise" style="animation-delay:.08s;">Nothing happens on site <span style="color:var(--navy)">without a work order behind it.</span></h2>
        <div class="featlist">
          ${fi(icons.doc, 'The work order is the parent record', 'Scope, sanctioned headcount, rate card, duration and billing all sit on it. Every worker a contractor deploys is attached to one.', 0.22)}
          ${fi(icons.users, 'Headcount is capped, not assumed', 'Sanctioned strength is set on the order and checked against the contractor\\u2019s CLRA licence. Deploy the 51st worker against a 50-worker licence and the system stops you, not the inspector.', 0.3)}
          ${fi(icons.card, 'Billing reconciles to attendance', 'The invoice is checked against verified attendance on that work order. You pay for shifts that happened.', 0.38)}
          ${fi(icons.shield, 'Compliance gates payment', 'PF and ESI challans for the period become a condition of releasing the bill. The leverage sits where it works.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Work order on the platform</span></div>
        <div class="wocard">
          <div class="wohead"><b>WO-2026-SLR-114</b><span>MODULE LINE 2 · RAJASTHAN</span></div>
          <div class="wogrid">
            <div><div class="k">Contractor</div><div class="v">Shree Manpower</div></div>
            <div><div class="k">Sanctioned headcount</div><div class="v">180</div></div>
            <div><div class="k">Deployed today</div><div class="v ok">174 · within licence</div></div>
            <div><div class="k">CLRA licence</div><div class="v ok">Valid to 31 Mar 2027</div></div>
            <div><div class="k">Rate card</div><div class="v">Skilled / semi / unskilled</div></div>
            <div><div class="k">WC policy</div><div class="v warn">Expires in 19 days</div></div>
          </div>
          <div class="wofoot">April invoice held: <b>PF challan pending</b> for 6 workers. Bill releases when the challan reconciles.</div>
        </div>
        <div class="mockcap">One order, one contractor, one set of limits — and every worker underneath it</div>
      </div>
    </div>`,
  },
  {
    id: 'sl6', theme: 'light', title: 'CLRA licensed strength',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">CLRA · licensed strength</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:40ch;">A contractor's licence sets a ceiling. <span style="color:var(--navy)">Most plants find out they crossed it much later.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:8px;max-width:100ch;">Each licence fixes the maximum workers that contractor may deploy at your establishment. Cross it and the licence can be suspended and work stopped. Here is the same view for one plant, updated as people badge in.</p>
      <div class="lsmeter rise" style="animation-delay:.24s">
        <div class="lsrow"><span class="nm">Shree Manpower</span><span class="lsbar"><i style="--w:87%;--d:.4s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">174 / 200<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Ganpati Services</span><span class="lsbar"><i style="--w:71%;--d:.55s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">106 / 150<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Bhoomi Facility</span><span class="lsbar over"><i style="--w:100%;--d:.7s"></i><span class="cap" style="--cap:84%"></span></span><span class="vs"><em>63 / 53</em><small>10 over — blocked at gate</small></span></div>
        <div class="lsrow"><span class="nm">Krishna Logistics</span><span class="lsbar"><i style="--w:46%;--d:.85s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">37 / 80<small>within licence</small></span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:1s">The gate does the enforcing. <b>Worker 54 from Bhoomi Facility cannot get a pass</b> until the contractor raises licensed strength or another worker stands down — and the whole trail is dated for the inspector.</div>
    </div>`,
  },
  {
    id: 'sl7', theme: 'light', title: 'Vendor compliance',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Vendor statutory compliance · the flagship</span>
        <h2 class="rise" style="animation-delay:.08s;">A vendor skips PF. <span style="color:var(--navy)">The bill reaches you.</span></h2>
        <div class="featlist">
          ${fi(icons.search, 'Challans read automatically', 'Vendors upload PF and ESI challans. OCR pulls out UANs, amounts and the period — no one retypes anything.', 0.22)}
          ${fi(icons.check, 'Matched worker by worker', 'Paid is compared against what was due for each named worker, not against a vendor total. That is where short payments hide.', 0.3)}
          ${fi(icons.warn, 'Gaps surface the same month', 'Short payments, missing deposits and wrong UANs are flagged while you can still hold a bill — instead of at an audit, with interest running at 12% a year and damages on top.', 0.38)}
          ${fi(icons.doc, 'Due diligence, on the record', 'Every check is dated and stored. If a contractor defaults anyway, you can show exactly what you did and when.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Vendor compliance console</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>vendor compliance · april · 44 vendors</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">41<small>clear</small></span>
              <span class="y">1<small>filed late</small></span>
              <span class="r">2<small>short</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row" style="--d:.5s"><span><b>Shree Manpower</b> <small>174 workers matched, challan verified</small></span><span class="fm-chip g">CLEAR</span></div>
              <div class="fm-row hl" style="--d:.7s"><span><b>Bhoomi Facility</b> <small>PF short ₹48,210 · 61 workers · bill held</small></span><span class="fm-chip r">PF SHORT</span></div>
              <div class="fm-row" style="--d:.9s"><span><b>Krishna Logistics</b> <small>ESI not deposited · 24 workers</small></span><span class="fm-chip r">ESI SHORT</span></div>
              <div class="fm-row" style="--d:1.1s"><span><b>Ganpati Services</b> <small>challan filed 6 days late — noted</small></span><span class="fm-chip y">LATE</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Reliance runs <b>3,000+ vendors</b> this way · <b>−80%</b> non-compliance risk, <b>−90%</b> payroll leakage</div>
      </div>
    </div>`,
  },
  {
    id: 'sl8', theme: 'light', title: 'Attendance',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Attendance · the layer everything else computes from</span>
        <h2 class="rise" style="animation-delay:.08s;">Who was actually inside the plant, <span style="color:var(--navy)">and when.</span></h2>
        <div class="featlist">
          ${fi(icons.eye, 'Face at the gate, no proxies', 'Face verification with spoof detection. A photo held to the camera does not open the gate, and neither does a friend with someone else\\u2019s card.', 0.22)}
          ${fi(icons.map, 'Inside the fence, or it does not count', 'Attendance marks within the plant boundary. For biomass yards and project sites, each location gets its own fence.', 0.3)}
          ${fi(icons.clock, 'Shifts as your plant runs them', 'Three shifts, night shifts crossing midnight, seasonal rosters for the harvest — set as rules, not chased in a register.', 0.38)}
          ${fi(icons.plug, 'Works with the hardware you have', 'Face and fingerprint terminals at gates, or phones for crews in the field. Both feed the same record.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Gate view · live</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>attendance · module plant · shift A · 07:04</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">612<small>inside</small></span>
              <span class="y">14<small>late</small></span>
              <span class="r">5<small>blocked</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row" style="--d:.5s"><span><b>Ramesh P.</b> <small>06:58 · face matched · Shree Manpower · WO-114</small></span><span class="fm-chip g">IN</span></div>
              <div class="fm-row hl" style="--d:.7s"><span><b>Suresh K.</b> <small>safety induction expired 3 days ago</small></span><span class="fm-chip r">BLOCKED</span></div>
              <div class="fm-row" style="--d:.9s"><span><b>Manoj T.</b> <small>contractor over licensed strength</small></span><span class="fm-chip r">BLOCKED</span></div>
              <div class="fm-row" style="--d:1.1s"><span><b>Vijay S.</b> <small>marked from outside the plant boundary</small></span><span class="fm-chip r">REJECTED</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Zepto runs this across <b>967 sites</b> for 15,000 workers · <b>40%</b> cost saved</div>
      </div>
    </div>`,
  },
  {
    id: 'sl9', theme: 'light', title: 'Overtime',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Overtime · the quiet liability</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:42ch;">Overtime is legal, capped, and paid at double. <span style="color:var(--navy)">All three get missed.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:8px;max-width:104ch;">The Factories Act allows 9 hours a day and 48 a week, with overtime beyond that paid at twice the ordinary rate and recorded in a register. Quarterly limits apply and vary by state. When overtime lives in a supervisor's notebook, none of it is provable.</p>
      <div class="otwrap rise" style="animation-delay:.24s">
        <div class="otrow"><span class="nm">Module Line 1</span><span class="otbar"><i style="--w:42%;--d:.4s"></i></span><span class="val">21 hrs<small>of quarter cap</small></span></div>
        <div class="otrow"><span class="nm">Module Line 2</span><span class="otbar hot"><i style="--w:78%;--d:.55s"></i></span><span class="val">39 hrs<small>approaching cap</small></span></div>
        <div class="otrow"><span class="nm">Packing &amp; dispatch</span><span class="otbar over"><i style="--w:100%;--d:.7s"></i></span><span class="val"><em>52 hrs</em><small>over — approvals frozen</small></span></div>
        <div class="otrow"><span class="nm">Biomass yard · Bhadra</span><span class="otbar hot"><i style="--w:66%;--d:.85s"></i></span><span class="val">33 hrs<small>harvest season</small></span></div>
      </div>
      <div class="capgrid rise" style="animation-delay:1s;grid-template-columns:repeat(3,1fr);margin-top:16px;">
        <div class="cap"><h4>Approved before it is worked</h4><p>Supervisor raises it, the plant's approval chain clears it, and the worker knows before the shift. No retrospective arguments.</p></div>
        <div class="cap"><h4>Paid at the right rate</h4><p>Overtime hours flow into payroll at twice the ordinary rate on their own, so the calculation is not somebody's judgement call.</p></div>
        <div class="cap"><h4>The register writes itself</h4><p>Hours, approvals and payment sit in one dated record you can hand to an inspector.</p></div>
      </div>
    </div>`,
  },
  {
    id: 'sl10', theme: 'dark', title: 'Gate pass and safety',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Gate pass &amp; safety induction</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">The pass only opens <span style="color:var(--yellow)">when everything behind it is true.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:8px;">Roughly three in four factory accidents in India involve contract or temporary workers — the people your induction reaches least. So we made the pass conditional.</p>
        <div class="featlist">
          ${fi(icons.check, 'Five conditions, checked together', 'A valid work order, room inside licensed strength, a cleared background check, current WC cover, and a passed safety induction. Miss one and no pass is issued.', 0.26)}
          ${fi(icons.book, 'Induction in the worker\\u2019s language', 'SOP, a short video and a quiz on their phone, in Hindi, Punjabi or whatever they speak. A certificate is issued and dated.', 0.34)}
          ${fi(icons.clock, 'Passes expire, and so do policies', 'Induction validity and WC expiry are tracked. The system warns before someone works uninsured or un-inducted, not after.', 0.42)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Gate pass · issue check</span></div>
        <div class="jobmock">
          <div class="jm-screen">
            <div class="jm-top"><h5>Gate pass · Suresh K.</h5><p>Bhoomi Facility · <b>WO-2026-SLR-118</b></p></div>
            <div class="jm-checks">
              <div class="jm-check" style="--d:.5s"><span class="tick">✓</span><div>Work order valid<small>Housekeeping · Line 2</small></div></div>
              <div class="jm-check" style="--d:.75s"><span class="tick">✓</span><div>Background check clear<small>Verified 12 Mar</small></div></div>
              <div class="jm-check" style="--d:1s"><span class="tick">✓</span><div>WC policy active<small>Valid to 30 Sep</small></div></div>
              <div class="jm-check" style="--d:1.25s"><span class="tick" style="background:rgba(208,39,29,.14);color:#c02417;">✕</span><div>Safety induction expired<small>Lapsed 3 days ago — refresher pushed to his phone</small></div></div>
            </div>
            <div class="jm-verdict" style="--d:1.6s;background:#c02417;">Pass withheld · 4 of 5 clear</div>
            <div class="jm-foot"><em></em>Reinstates the moment the quiz is passed</div>
          </div>
        </div>
        <div class="mockcap">The same gate logic runs at BPCL today</div>
      </div>
    </div>`,
  },
  {
    id: 'sl11', theme: 'light', title: 'One record',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">How the pieces hold together</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:38ch;">Six systems for most plants. <span style="color:var(--navy)">One record here.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(6,1fr);margin-top:20px;">
        <div class="rstage"><div class="rn">01</div><h4>Vendor</h4><ul><li>Onboarded once</li><li>Licence on file</li><li>WC policy tracked</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Work order</h4><ul><li>Scope &amp; headcount</li><li>Rate card</li><li>Billing terms</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Worker</h4><ul><li>Verified, inducted</li><li>Mapped to the order</li><li>Gate pass issued</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Attendance</h4><ul><li>Face at the gate</li><li>Inside the fence</li><li>Shift &amp; overtime</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Pay</h4><ul><li>From verified hours</li><li>Minimum wage checked</li><li>Overtime at 2×</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Compliance</h4><ul><li>Challans reconciled</li><li>Registers &amp; returns</li><li>Audit file, always current</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s">Because it is one record, a question like <b>"show me every worker of this contractor, on this order, in March, with their PF status"</b> is a filter — not a three-week reconciliation exercise.</div>
    </div>`,
  },
  {
    id: 'sl11b', theme: 'light', title: 'Eleven modules',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The full surface · hire to pay</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Eleven modules, configured on one platform — <span style="color:var(--navy)">not eleven tools that need stitching.</span></h2>
      <div class="modgrid rise" style="animation-delay:.2s">
        <div class="modcol" style="--gc:#1B2D93">
          <div class="gh">Set up &amp; onboard</div>
          <div class="modit"><h4>Organisation config</h4><p>Parent–child hierarchy and N-level structures that mirror your plants, units and reporting lines.</p></div>
          <div class="modit"><h4>Worker onboarding</h4><p>Document collection, policy acknowledgement and induction workflows you configure.</p></div>
          <div class="modit"><h4>Business &amp; approval flows</h4><p>Multi-level approvals mapped to how your plant actually signs off.</p></div>
        </div>
        <div class="modcol" style="--gc:#39D2E8">
          <div class="gh">Time, pay &amp; exit</div>
          <div class="modit"><h4>Attendance &amp; overtime</h4><p>Biometric and mobile geo-fenced capture, with overtime computed and alerted automatically.</p></div>
          <div class="modit"><h4>Leave &amp; holiday</h4><p>Leave policies, holiday calendars and approvals set by site, role and worker type.</p></div>
          <div class="modit"><h4>Payroll &amp; statutory</h4><p>Payroll, PF and ESIC filings, reimbursements, exit and full-and-final — reconciled for audit.</p></div>
        </div>
        <div class="modcol" style="--gc:#3BE8B0">
          <div class="gh">Vendor &amp; compliance</div>
          <div class="modit"><h4>Vendor management</h4><p>Vendor onboarding, policies and performance across every manpower vendor, on one dashboard.</p></div>
          <div class="modit"><h4>Work orders &amp; CLRA</h4><p>Work order creation and management with CLRA tracking built in.</p></div>
          <div class="modit"><h4>Billing &amp; invoicing</h4><p>Vendor invoices reconciled against attendance and the work order they belong to.</p></div>
        </div>
        <div class="modcol" style="--gc:#8B7CFF">
          <div class="gh">Insight &amp; connect</div>
          <div class="modit"><h4>Reports &amp; custom forms</h4><p>The MIS and forms each stakeholder needs, configured without waiting on IT.</p></div>
          <div class="modit"><h4>Integrations</h4><p>API integrations with SAP, ERP and the plant systems already in your ecosystem.</p></div>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s">Every module here is configured, connected and reconciled on one platform — which is what ends the fragmentation between vendor systems, plant systems and spreadsheets.</div>
    </div>`,
  },
  {
    id: 'sl12', theme: 'darker', title: 'AI Labs',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">AI Labs · the layer underneath</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:38ch;">The checking is the part that never scales. <span style="color:var(--yellow)">So agents do it.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:8px;max-width:104ch;">These run on open-source models on our own cloud, so worker data stays with us and never goes to an outside AI service. ISO 27001 and SOC 2 certified.</p>
      <div class="agents rise" style="animation-delay:.26s;margin-top:16px;grid-template-columns:repeat(4,1fr);">
        <div class="ag" style="--ac:#FFC401"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Statutory watch</div><h4>AI Dev</h4><p>Reads every vendor challan, matches it worker by worker, and flags what is short — the same night it is uploaded.</p></div>
        <div class="ag" style="--ac:#39D2E8"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Verification</div><h4>AI Cole</h4><p>Runs identity, document and face checks on new contractor workers before they reach the gate.</p></div>
        <div class="ag" style="--ac:#3BE8B0"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Safety induction</div><h4>AI Rhea</h4><p>Takes a worker through the SOP, video and quiz in their own language, then issues the certificate that activates the pass.</p></div>
        <div class="ag" style="--ac:#8B7CFF"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Questions</div><h4>AI Theo</h4><p>Answers "what is my PF number", "when is my shift", "how do I claim" — on a phone call or chat, at any hour, in 24 languages.</p></div>
      </div>
      <div class="modelrow rise" style="animation-delay:.44s;margin-top:16px;">
        <div class="mstat"><div class="n">₹0.37</div><div class="l">Per conversation</div></div>
        <div class="mstat"><div class="n">₹5/min</div><div class="l">Voice calls, against ₹12 industry</div></div>
        <div class="mstat"><div class="n">24</div><div class="l">Languages</div></div>
        <div class="mstat"><div class="n">0</div><div class="l">Worker data leaving our cloud</div></div>
      </div>
    </div>`,
  },
  {
    id: 'sl13', theme: 'dark', title: 'BPCL proof',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Proof · this is not a prototype</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">We run exactly this today for <span style="color:var(--yellow)">Bharat Petroleum.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">BPCL runs its contract workforce on our platform — the vendor and workforce management system that sits across their sites. A public sector oil company, with the audit scrutiny that comes with it, chose this stack and still runs on it.</p>
        <div class="featlist">
          ${fi(icons.building, 'Vendors and work orders', 'Contractors onboarded, work orders issued, deployment tracked against them, invoices reconciled to attendance.', 0.26)}
          ${fi(icons.lock, 'Gate and visitor control', 'Contract workmen enrolled with biometrics, gate passes issued against valid orders, visitors handled in the same flow.', 0.34)}
          ${fi(icons.plug, 'Wired into SAP', 'Vendors become selectable once SAP integration and the PO are in place, with identity handled through their own data vault.', 0.42)}
          ${fi(icons.trophy, 'Incentives on the same platform', 'The same system carries their incentive programme for the field workforce.', 0.5)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Also running on this stack</span></div>
        <div class="compmap" style="grid-template-columns:1fr 1fr;">
          <div class="compcell" style="--cc:#FFC401;--d:.4s"><div class="act">Retail · 300K+ workers</div><h4>Reliance</h4><p>3,000+ vendors on one rule engine. Payroll leakage down 90%, vendor non-compliance down 80%.</p><span class="who ok">Live</span></div>
          <div class="compcell" style="--cc:#39D2E8;--d:.48s"><div class="act">Metals · Aditya Birla</div><h4>Hindalco</h4><p>Shop-floor skilling across plants — 1,000+ workers, 60+ technical modules.</p><span class="who ok">Live</span></div>
          <div class="compcell" style="--cc:#3BE8B0;--d:.56s"><div class="act">Glass manufacturing</div><h4>AGI Glaspac</h4><p>Plant workforce running on the same attendance and compliance spine.</p><span class="who ok">Live</span></div>
          <div class="compcell" style="--cc:#8B7CFF;--d:.64s"><div class="act">Auto components</div><h4>Yokohama</h4><p>Plant operations, contract workforce managed on platform.</p><span class="who ok">Live</span></div>
        </div>
        <div class="mockcap">Ten years · 1,100+ enterprises · 500+ cities. These compliance features exist because customers like these asked for them.</div>
      </div>
    </div>`,
  },
  {
    id: 'sl14', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we would start with SAEL</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:32ch;">One plant. Sixty days. <span style="color:var(--yellow)">Then decide.</span></h2>
      <div class="ctacards" style="margin-top:22px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Pick the hardest site</h4><p>One manufacturing plant with its full contractor set. We load your work orders, contractor licences and rate cards, and map the workers already on site.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Run the gate and the ledger</h4><p>Face attendance at the gate, gate passes conditional on induction and licence room, and one full month of vendor challan reconciliation against your actual deployment.</p></div>
        <div class="ctac rise" style="animation-delay:.4s"><div class="num">03</div><h4>Read the numbers together</h4><p>Compliance gaps caught, hours corrected, invoice variance found, overtime brought inside the cap. Then extend to the EPC sites and the biomass plants, which need the same spine with different rhythms.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Bring your last quarter's contractor invoices and one plant's register to the next session. <b>We will reconcile them live and show you what the platform finds.</b></div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:18px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`,
  },
]

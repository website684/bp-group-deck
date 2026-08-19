import type { SlideDef } from '../lib/types'
import { fi, icons } from './html'

// "Why BetterPlace exists" — the story deck.
// One rider, Ravi, 30 days. Every product enters as a character in his story.
// Written for a first-principles reader: short sentences, sourced numbers, authored mocks.

// Journey tracker — the metro line rides along the top of every story slide.
const STATIONS: Array<[string, string]> = [
  ['Hire', 'staffBetter · gigBetter'],
  ['Verify', 'verifyBetter'],
  ['Onboard', 'goBetter Onboard'],
  ['Attend', 'goBetter Attend'],
  ['Pay', 'Payroll · Incentives'],
  ['Upskill & engage', 'skillBetter'],
]
const jstrip = (active: number) => `
      <div class="jstrip rise">${STATIONS.map(([name, prod], i) => `<div class="js-st${i + 1 < active ? ' done' : ''}${i + 1 === active ? ' act' : ''}"><i></i><span>${name}</span><span class="prod">${prod}</span></div>`).join('')}</div>`

export const nkStorySlides: SlideDef[] = [
  {
    id: 'ns1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">BetterPlace · the story of one rider, and 30 million</span>
      <h1 class="rise" style="animation-delay:.15s">India runs on people its software <span style="color:var(--yellow)">has never met.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Around 300 million Indians ride, lift, sell, guard, build and deliver for a living. This is the story of the platform they never had — told through one rider's first thirty days.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">30M+</div><div class="l">Worker profiles on the platform</div></div>
        <div class="stat"><div class="n">1,100+</div><div class="l">Enterprises</div></div>
        <div class="stat"><div class="n">500+</div><div class="l">Cities</div></div>
        <div class="stat"><div class="n">2015</div><div class="l">Building since</div></div>
      </div>
      <div class="mdcover ghost">WHY</div>
    </div>`,
  },
  {
    id: 'ns2', theme: 'dark', title: 'The invisible workforce',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Start with a basic question</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:32ch;">Who shows up when India orders groceries at 11 pm?</h2>
      <div class="capgrid rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:20px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.map}</svg></span><h4>No desk. No desktop.</h4><p>Frontline work happens on feet. 95% of India's internet runs on a smartphone, yet enterprise software still assumes a chair.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.lang}</svg></span><h4>Not in English</h4><p>98% of India's internet users read and watch in an Indian language. The HR software their employer bought speaks one.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>Hired, but not known</h4><p>Hired through vendors and contractors, a worker exists as a row in someone's Excel. No record, no history, nothing that belongs to them.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.book}</svg></span><h4>Trained by luck</h4><p>About 5% of India's workforce has had formal skill training, while the WEF expects 40% of today's skills to be obsolete by 2030.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.42s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Roughly <b>300 million people</b>. The software industry spent thirty years building for the people at desks — and built them nothing. <b>One of them just got off a train in Bengaluru →</b></div>
    </div>`,
  },
  {
    id: 'ns2r', theme: 'darker', title: 'Meet Ravi',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">The supply side · and the demand side</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:38ch;">Meet Ravi. <span style="color:var(--yellow)">Everyone on the right wants to hire him.</span> They have no way to find him.</h2>
      <div class="meetgrid">
        <div class="heroavatar rise" style="animation-delay:.2s">
          <div class="frame">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#131c4f"/>
              <circle cx="50" cy="118" r="50" fill="#1B2D93"/>
              <rect x="26" y="86" width="48" height="8" rx="3" fill="#FFC401" opacity=".92"/>
              <circle cx="50" cy="46" r="21" fill="#e8a66b"/>
              <path d="M27 44 A23 23 0 0 1 73 44 L73 36 A23 21 0 0 0 27 36 Z" fill="#FFC401"/>
              <rect x="25" y="41" width="50" height="4" rx="2" fill="#d9a400"/>
              <circle cx="43" cy="50" r="2.4" fill="#1c1c2e"/>
              <circle cx="57" cy="50" r="2.4" fill="#1c1c2e"/>
              <path d="M44 58 Q50 63 56 58" stroke="#1c1c2e" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="hv-name">Ravi Kumar, 23</div>
          <div class="hv-sub">Reached Bengaluru yesterday</div>
          <div class="hv-chips"><span>3 yrs driving, Kanpur</span><span>Own bike</span><span>Smartphone</span><span>हिंदी</span><span>No CV</span><span>No references</span></div>
        </div>
        <div>
          <div class="demandhead rise" style="animation-delay:.3s">Hiring Ravi&rsquo;s profile, right now, in his city</div>
          <div class="drows">
            <div class="drow" style="--dc:#FFC401;--d:.4s"><span class="di"><svg viewBox="0 0 24 24">${icons.zap}</svg></span><div><h4>Quick commerce</h4><p>Zepto, Blinkit, Instamart — 10-minute promises on 3.5-month rider tenure. The fleet is rebuilt three times a year</p></div><div class="dn">3×<small>fleet rebuilt / year</small></div></div>
            <div class="drow" style="--dc:#39D2E8;--d:.55s"><span class="di"><svg viewBox="0 0 24 24">${icons.building}</svg></span><div><h4>E-commerce &amp; logistics</h4><p>Amazon- and Flipkart-scale warehouses and last mile — festive surges double the floor overnight</p></div><div class="dn">Lakhs<small>seasonal roles / year</small></div></div>
            <div class="drow" style="--dc:#3BE8B0;--d:.7s"><span class="di"><svg viewBox="0 0 24 24">${icons.users}</svg></span><div><h4>Organised retail</h4><p>Reliance Retail alone runs 1.5 lakh hires a year through its stores</p></div><div class="dn">1.5L+<small>hires / yr · one chain</small></div></div>
            <div class="drow" style="--dc:#8B7CFF;--d:.85s"><span class="di"><svg viewBox="0 0 24 24">${icons.mic}</svg></span><div><h4>BFSI &amp; field sales</h4><p>Feet-on-street teams backfilling 40–50% attrition, every single year</p></div><div class="dn">40–50%<small>annual attrition</small></div></div>
          </div>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:1s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Demand was never the problem. <b>The two sides have no shared infrastructure</b> — no common identity, no trusted record, no pipe between them. That gap is the company.</div>
    </div>`,
  },
  {
    id: 'ns2m', theme: 'darker', title: 'The map',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">So that's the company we built · the whole path, on one map</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;font-size:clamp(21px,2.1vw,32px);">Six stations. Two supply lines. One express underneath. <span style="color:var(--yellow)">Ravi is about to ride all of them.</span></h2>
      <div class="metro rise" style="animation-delay:.2s;margin-top:4px;max-width:1020px;">
        <svg viewBox="0 0 1140 470" xmlns="http://www.w3.org/2000/svg">
          <path class="supply" d="M 40 40 C 90 40 110 96 160 104"/>
          <path class="supply" d="M 40 168 C 90 168 110 118 160 108"/>
          <text class="line-label" x="14" y="30">STAFFBETTER · 23K ON OUR PAYROLL</text>
          <text class="line-label" x="14" y="196">GIGBETTER · DEPLOY &lt;24 HR</text>
          <path class="mainline" d="M 160 106 H 980 C 1060 106 1060 130 1060 175 V 245 C 1060 300 1020 316 950 316 H 190 C 120 316 100 350 100 400"/>
          <path class="loopline" d="M 100 418 C 100 452 210 452 400 452 H 900"/>
          <text class="line-label loop" x="430" y="443">THE REHIRE LOOP — A VERIFIED WORKER COMES BACK IN MINUTES, NOT WEEKS</text>
          <path class="express" d="M 160 212 H 1000"/>
          <text class="line-label v" x="392" y="200">AI LABS EXPRESS · AGENTS RUN EVERY STATION · ₹0.37 A CONVERSATION</text>
          <g>
            <circle class="halo" cx="160" cy="106" r="19"/><circle class="station" cx="160" cy="106" r="12"/><circle class="ichg" cx="160" cy="106" r="4"/>
            <text class="st-num" x="132" y="46">01</text><text class="st-name" x="132" y="70">Hire</text>
            <rect class="st-statc" x="128" y="128" rx="9" width="150" height="22"/><text class="st-stat" x="140" y="143">−60% time-to-hire</text>
          </g>
          <g>
            <circle class="halo" cx="560" cy="106" r="19"/><circle class="station" cx="560" cy="106" r="12"/>
            <text class="st-num" x="532" y="46">02</text><text class="st-name" x="532" y="70">Verify</text>
            <rect class="st-statc" x="528" y="128" rx="9" width="212" height="22"/><text class="st-stat" x="540" y="143">CRC · eFIR · docs · &lt;24 hr</text>
          </g>
          <g>
            <circle class="halo" cx="900" cy="106" r="19"/><circle class="station" cx="900" cy="106" r="12"/>
            <text class="st-num" x="872" y="46">03</text><text class="st-name" x="872" y="70">Onboard</text>
            <rect class="st-statc" x="868" y="128" rx="9" width="176" height="22"/><text class="st-stat" x="880" y="143">45 min, on the phone</text>
          </g>
          <g>
            <circle class="halo" cx="900" cy="316" r="19"/><circle class="station" cx="900" cy="316" r="12"/>
            <text class="st-num" x="872" y="366">04</text><text class="st-name" x="872" y="390">Attend</text>
            <rect class="st-statc" x="846" y="252" rx="9" width="200" height="22"/><text class="st-stat" x="858" y="267">geo-fenced · spoof-proof</text>
          </g>
          <g>
            <circle class="halo" cx="560" cy="316" r="19"/><circle class="station" cx="560" cy="316" r="12"/>
            <text class="st-num" x="532" y="366">05</text><text class="st-name" x="532" y="390">Pay &amp; comply</text>
            <rect class="st-statc" x="528" y="252" rx="9" width="190" height="22"/><text class="st-stat" x="540" y="267">−90% payroll leakage</text>
          </g>
          <g>
            <circle class="halo" cx="190" cy="316" r="19"/><circle class="station" cx="190" cy="316" r="12"/>
            <text class="st-num" x="162" y="366">06</text><text class="st-name" x="162" y="390">Upskill &amp; engage</text>
            <rect class="st-statc" x="158" y="252" rx="9" width="200" height="22"/><text class="st-stat" x="170" y="267">88% training completion</text>
          </g>
        </svg>
      </div>
    </div>`,
  },
  {
    id: 'ns3', theme: 'dark', title: 'The machine Ravi is about to enter',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">First, the machine Ravi is about to enter</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:36ch;">Hire 100 riders in January. <span style="color:var(--yellow)">Count again in June.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:8px;max-width:100ch;">Average delivery-partner tenure is about 3.5 months — Swiggy's own COO said so on stage. Roughly a quarter of the fleet walks out every month:</p>
      <div class="ajmix rise" style="animation-delay:.24s;margin-top:16px;max-width:960px;">
        <div class="ajrow"><span class="lb">January</span><span class="ajbar"><i style="--w:100%;--bc:#FFC401;--d:.3s"></i></span><span class="pc">100</span></div>
        <div class="ajrow"><span class="lb">February</span><span class="ajbar"><i style="--w:75%;--bc:#FFB020;--d:.45s"></i></span><span class="pc">75</span></div>
        <div class="ajrow"><span class="lb">March</span><span class="ajbar"><i style="--w:56%;--bc:#FF9518;--d:.6s"></i></span><span class="pc">56</span></div>
        <div class="ajrow"><span class="lb">April</span><span class="ajbar"><i style="--w:42%;--bc:#FF7A6B;--d:.75s"></i></span><span class="pc">42</span></div>
        <div class="ajrow"><span class="lb">May</span><span class="ajbar"><i style="--w:32%;--bc:#E85B4B;--d:.9s"></i></span><span class="pc">32</span></div>
        <div class="ajrow"><span class="lb">June</span><span class="ajbar"><i style="--w:24%;--bc:#D0271D;--d:1.05s"></i></span><span class="pc">24</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">A 10,000-rider fleet is rebuilt <b>about three times a year, in every city, forever</b>. Someone has to source, verify, onboard, track, pay and train that river of people. That's the job we do — <b>the next six slides watch it happen to Ravi.</b></div>
    </div>`,
  },
  {
    id: 'ns5', theme: 'light', title: 'Day 1 · Ravi applies',
    html: `
    <div class="slidebody split">${jstrip(1)}
      <div>
        <span class="eyebrow rise">Day 1 · 6:10 pm · a rented room in Marathahalli</span>
        <h2 class="rise" style="animation-delay:.08s;">Ravi taps "apply." <span style="color:var(--navy)">At 8 pm, his phone rings — in Hindi.</span></h2>
        <div class="featlist">
          ${fi(icons.users, 'He was never a stranger', 'Ravi is one of 30M+ profiles on the platform — the moment he applies, his history starts working for him instead of against him.', 0.24)}
          ${fi(icons.mic, 'The 8 pm call is an AI agent', 'It screens him in his own language, scores fit against the role, and shortlists him overnight. No recruiter queue, no "we will call back."', 0.32)}
          ${fi(icons.building, 'If the client wants payroll, not vendors', 'Our staffing arm hires Ravi onto our books — 23,000+ people work this way today, with the compliance carried by us.', 0.40)}
          ${fi(icons.zap, 'If the client wants surge, not headcount', 'The gig engine deploys 1 to 500+ verified workers in under 24 hours, billed only on completed, GPS-proven tasks.', 0.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag w"><i></i>Ravi&rsquo;s screen</span></div>
        <div class="jobmock">
          <div class="jm-screen">
            <div class="jm-top"><h5>Ravi, 3 roles match you</h5><p>Sorted by fit — <b>one tap, no CV</b> · हिंदी ✓</p></div>
            <div class="jm-card hot" style="--d:.6s">
              <div class="jm-row">
                <div><div class="jm-org">Quick commerce · HSR hub</div><div class="jm-role">Delivery Partner</div><div class="jm-pay">₹22–28,000<small>/mo + incentives</small></div></div>
                <div class="jm-score"><b>94</b><span>match</span></div>
              </div>
              <div class="jm-chips"><i class="ok">1.2 km from room</i><i class="ok">Own bike ✓</i><i class="ok">हिंदी ✓</i><i>Evening shifts</i></div>
              <span class="jm-apply">Apply now →</span>
            </div>
            <div class="jm-card" style="--d:.95s">
              <div class="jm-row">
                <div><div class="jm-org">Fulfilment centre · Marathahalli</div><div class="jm-role">Warehouse Associate</div><div class="jm-pay">₹16,500<small>/mo</small></div></div>
                <div class="jm-score"><b>78</b><span>match</span></div>
              </div>
              <div class="jm-chips"><i class="ok">3 km away</i><i>No experience needed</i></div>
            </div>
            <div class="jm-foot"><em></em>Verified profile · 30M+ pool · BGV-ready</div>
          </div>
        </div>
        <div class="mockcap">What Ravi sees · 3–4K join like this every month · <b>apply → shortlist in &lt;24 hr</b></div>
      </div>
    </div>`,
  },
  {
    id: 'ns6', theme: 'light', title: 'Night 1 · while Ravi sleeps',
    html: `
    <div class="slidebody split">${jstrip(2)}
      <div>
        <span class="eyebrow rise">Night 1 · while Ravi sleeps, four checks run</span>
        <h2 class="rise" style="animation-delay:.08s;">By 9 am his file says one word: <span style="color:var(--navy)">green.</span></h2>
        <div class="featlist">
          ${fi(icons.shield, 'Criminal record check', 'Pan-India court records, read by AI overnight. Relevant hits surface in minutes, not a manual backlog.', 0.24)}
          ${fi(icons.doc, 'eFIR check', 'Police complaint records checked digitally against his name — the check most vendors quietly skip.', 0.32)}
          ${fi(icons.check, 'Document matching', 'His Aadhaar verified over API and face-matched to the person who applied. Ravi is Ravi.', 0.40)}
          ${fi(icons.map, 'Physical address verification', 'Someone actually visits the address he gave. The customer whose door he will knock on deserves that.', 0.48)}
        </div>
        <div class="clientline rise" style="animation-delay:.55s;margin-top:10px;">5.6% of gig checks surface a discrepancy — at 10,000 riders, <b>560 doors you were right to check.</b></div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>The employer&rsquo;s screen</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>gobetter · verify · Monday batch (42)</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">38<small>green</small></span>
              <span class="y">2<small>yellow · review</small></span>
              <span class="r">2<small>red · rejected</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row hl" style="--d:.5s"><span><b>Ravi K.</b><br/><small>Criminal ✓ · eFIR ✓ · Docs 98.4% ✓ · Address visited ✓</small></span><span class="fm-chip g">GREEN · 8:41 AM</span></div>
              <div class="fm-row" style="--d:.8s"><span><b>Suresh M.</b> <small>address mismatch — re-verification sent</small></span><span class="fm-chip y">YELLOW</span></div>
              <div class="fm-row" style="--d:1s"><span><b>Amit D.</b> <small>court record matched — case file attached</small></span><span class="fm-chip r">RED</span></div>
              <div class="fm-row" style="--d:1.2s"><span><b>Vikram S.</b> <small>face match failed at 61% — not the applicant</small></span><span class="fm-chip r">RED</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">What the ops team wakes up to · every case dated &amp; audit-ready · <b>turnaround &lt;24 hr</b></div>
      </div>
    </div>`,
  },
  {
    id: 'ns7', theme: 'light', title: 'Day 2 · Ravi joins from a tea stall',
    html: `
    <div class="slidebody split">${jstrip(3)}
      <div>
        <span class="eyebrow rise">Day 2 · 11 am · a tea stall, not an office</span>
        <h2 class="rise" style="animation-delay:.08s;">Ravi joins a company <span style="color:var(--navy)">without visiting it.</span></h2>
        <div class="featlist">
          ${fi(icons.doc, 'Documents, collected in chat', 'Licence, bank details, KYC — photographed at the tea stall, checked over API, e-signed with his thumb.', 0.24)}
          ${fi(icons.layers, 'His 40 batchmates, one file', 'Bulk onboarding takes the whole batch in one upload. Errors are flagged per row and fixed in one round, not a week of email.', 0.32)}
          ${fi(icons.repeat, 'Hired via a vendor? Same door', 'Every contractor onboards through the same interface — one standard, however many vendors supply the fleet.', 0.40)}
          ${fi(icons.zap, 'By lunch, payroll knows him', 'His record lands in attendance and payroll untouched. Nothing is typed twice, so nothing breaks later.', 0.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>The employer&rsquo;s screen</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>gobetter · onboarding · Monday batch (42)</span></div>
          <div class="fm-body">
            <div class="fm-stage"><div class="lb"><span>Documents collected</span><b>42 / 42</b></div><div class="bar"><i style="--w:100%;--d:.4s"></i></div></div>
            <div class="fm-stage"><div class="lb"><span>Verified</span><span><b>40</b> &nbsp;<span class="fl">2 flagged</span></span></div><div class="bar"><i style="--w:95%;--d:.65s"></i></div></div>
            <div class="fm-stage"><div class="lb"><span>E-signed</span><b>39</b></div><div class="bar"><i style="--w:93%;--d:.9s"></i></div></div>
            <div class="fm-stage"><div class="lb"><span>Payroll-ready</span><b>39</b></div><div class="bar"><i style="--w:93%;--d:1.15s"></i></div></div>
            <div class="fm-ravi">✓ &nbsp;<b>Ravi K.</b>&nbsp; payroll-ready · 11:47 am · 45 minutes end to end</div>
          </div>
        </div>
        <div class="mockcap">What the ops team sees · who is stuck, and where · <b>0 office visits, 0 photocopies</b></div>
      </div>
    </div>`,
  },
  {
    id: 'ns8', theme: 'light', title: 'Day 3 · first shift',
    html: `
    <div class="slidebody split">${jstrip(4)}
      <div>
        <span class="eyebrow rise">Day 3 · 6:58 am · outside the dark store</span>
        <h2 class="rise" style="animation-delay:.08s;">Ravi looks at his phone. <span style="color:var(--navy)">His phone looks back.</span></h2>
        <div class="featlist">
          ${fi(icons.map, 'The gate is a geo-fence', 'His attendance marks only inside the zone around his hub. Present means present at the right place, on the right shift.', 0.24)}
          ${fi(icons.eye, 'His face is the punch card', 'AI face verification with spoof detection — a photo of a photo does not clock in, and neither does a friend.', 0.32)}
          ${fi(icons.clock, 'The roster knows quick commerce', 'Night shifts, split shifts, rain-surge windows. The schedule bends the way the business actually runs.', 0.40)}
        </div>
        <div class="clientline rise" style="animation-delay:.5s;margin-top:12px;">This layer runs at Zepto today: <b>15,000 workers, 967 geo-fenced sites, 40% measured cost savings.</b> Everything downstream — pay, incentives, compliance — computes from it.</div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>The employer&rsquo;s screen</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>gobetter · attend · HSR hub · live · 7:04 am</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">128<small>present</small></span>
              <span class="y">6<small>late</small></span>
              <span class="r">3<small>geo-fail</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row hl" style="--d:.5s"><span><b>Ravi K.</b><br/><small>6:58 am · inside the zone (38 m) · face matched · real person ✓</small></span><span class="fm-chip g">IN</span></div>
              <div class="fm-row" style="--d:.8s"><span><b>Priya N.</b> <small>7:02 am · inside the zone · face matched</small></span><span class="fm-chip g">IN</span></div>
              <div class="fm-row" style="--d:1s"><span><b>Deepak R.</b> <small>tried to mark from 2.4 km away</small></span><span class="fm-chip r">WRONG PLACE</span></div>
              <div class="fm-row" style="--d:1.2s"><span><b>Mohan T.</b> <small>held a photo up to the camera</small></span><span class="fm-chip r">FAKE PHOTO</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">The hub manager&rsquo;s live view while Ravi punches in · <b>no card, no register, no buddy-punching</b></div>
      </div>
    </div>`,
  },
  {
    id: 'ns9', theme: 'light', title: 'Day 30 · salary day',
    html: `
    <div class="slidebody split">${jstrip(5)}
      <div>
        <span class="eyebrow rise">Day 30 · 6:04 pm · the message that rarely comes on time</span>
        <h2 class="rise" style="animation-delay:.08s;">Salary credited. Correct. On time. <span style="color:var(--navy)">Explained.</span></h2>
        <div class="featlist">
          ${fi(icons.card, 'Paid on time, from verified shifts', 'Vendor spreadsheets pay late and pay wrong. Here pay computes from face-verified attendance the day the cycle closes — minimum wage checked first.', 0.2)}
          ${fi(icons.trophy, 'The number that changes Ravi&rsquo;s week', 'Live incentives after every order — "₹1.1L more this month unlocks +₹2,500."', 0.28)}
        </div>
        <div class="demandhead rise" style="animation-delay:.34s;color:var(--navy);margin-top:4px;">The employer&rsquo;s screen — every vendor&rsquo;s PF &amp; ESI, checked monthly</div>
        <div class="funmock rise" style="animation-delay:.4s;max-width:none;">
          <div class="fm-bar"><i></i><i></i><i></i><span>gobetter · payroll · vendor compliance · April · 44 vendors</span></div>
          <div class="fm-body">
            <div class="fm-rows">
              <div class="fm-row" style="--d:.55s"><span><b>Om Manpower Services</b> <small>challan verified, worker-by-worker</small></span><span class="fm-chip g">CLEAR</span></div>
              <div class="fm-row hl" style="--d:.8s"><span><b>Shree Staffing Co.</b> <small>PF short by ₹48,210 across 61 workers — caught now, not at the audit</small></span><span class="fm-chip r">PF SHORT</span></div>
              <div class="fm-row" style="--d:1.05s"><span><b>Balaji Facility Mgmt</b> <small>ESI challan late — escalation sent</small></span><span class="fm-chip y">LATE</span></div>
            </div>
            <div class="fm-ravi" style="animation-delay:1.3s;">⚠<span>The law bills the <b>principal employer</b> for these — Reliance runs 3,000+ vendors here: <b>−90% leakage</b></span></div>
          </div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag w"><i></i>Ravi&rsquo;s screen</span></div>
        <div class="jobmock">
          <div class="jm-screen">
            <div class="jm-top"><h5>Salary credited 🎉</h5><p>30 Apr · 6:04 pm · <b>UTR N104…8821</b></p></div>
            <div class="jm-pane" style="--d:.55s">
              <div class="jm-salline"><span>Base · 26 verified shifts</span><b>₹16,500</b></div>
              <div class="jm-salline"><span>Order incentives</span><b class="plus">+₹5,612</b></div>
              <div class="jm-salline"><span>Rain-surge bonus</span><b class="plus">+₹2,500</b></div>
              <div class="jm-salline"><span>PF (deposited <span class="ok">✓ challan verified</span>)</span><b>−₹1,980</b></div>
              <div class="jm-salline total"><span>In your account</span><b>₹22,632</b></div>
            </div>
            <div class="jm-pane" style="--d:1s">
              <div class="jm-salline" style="border:0;padding:0;"><span><b>This month&rsquo;s goal</b></span><b class="plus">+₹2,500</b></div>
              <div class="jm-prog"><i style="--w:78%;--d:1.3s"></i></div>
              <div class="jm-note">78% there — <b>412 more orders unlock the next slab.</b></div>
            </div>
            <div class="jm-foot"><em></em>Every rupee traceable to a verified shift</div>
          </div>
        </div>
        <div class="mockcap">Ravi&rsquo;s first payslip — <b>the first financial document he has ever owned</b></div>
      </div>
    </div>`,
  },
  {
    id: 'ns10', theme: 'light', title: 'Month 2 · Ravi gets ambitious',
    html: `
    <div class="slidebody split">${jstrip(6)}
      <div>
        <span class="eyebrow rise">Month 2 · 10:40 pm · Ravi watches reels. The right ones.</span>
        <h2 class="rise" style="animation-delay:.08s;">The 3.5-month rider <span style="color:var(--navy)">decides to stay.</span></h2>
        <div class="featlist">
          ${fi(icons.play, 'Training that looks like Instagram', 'Reel-style lessons in his own language, watchable between orders. 88% completion, against 25% on a traditional LMS.', 0.24)}
          ${fi(icons.check, 'Certificates that unlock work', 'At Zepto, only trained, certified riders go live — Ravi&rsquo;s new certificate opens the better-paying surge shifts.', 0.32)}
          ${fi(icons.trophy, 'A record that compounds', 'Every shift, certificate and verification lives on Ravi&rsquo;s own profile and travels with him to the next job.', 0.40)}
        </div>
        <div class="clientline rise" style="animation-delay:.5s;margin-top:12px;">At a 3.5-month baseline, retention is the biggest lever in the business. <b>Every month of tenure saved is a hiring cycle never paid for</b> — where this runs, attrition drops 15%.</div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag w"><i></i>Ravi&rsquo;s screen</span></div>
        <div class="jobmock">
          <div class="jm-screen">
            <div class="jm-top"><h5>🔥 12-day streak</h5><p>2,340 XP · rank <b>#4</b> at HSR hub</p></div>
            <div class="jm-card" style="--d:.55s">
              <div class="jm-org">Tonight&rsquo;s reel · 3 min · हिंदी</div>
              <div class="jm-role">Rain-day delivery, done safely</div>
              <div class="jm-prog"><i style="--w:64%;--d:.9s"></i></div>
              <div class="jm-note">2 of 3 cards watched</div>
            </div>
            <div class="jm-card hot" style="--d:.95s">
              <div class="jm-row">
                <div><div class="jm-org">Certificate earned</div><div class="jm-role">Surge-shift certified ✓</div></div>
                <div class="jm-score"><b>+₹</b><span>better shifts</span></div>
              </div>
              <div class="jm-note"><b>Unlocked:</b> evening surge windows — the shifts that pay the bonus slab.</div>
            </div>
            <div class="jm-foot"><em></em>Skills live on Ravi&rsquo;s own record</div>
          </div>
        </div>
        <div class="mockcap">Training between orders · <b>88% finish, against 25% industry</b></div>
      </div>
    </div>`,
  },
  {
    id: 'ns10b', theme: 'light', title: 'What Ravi now carries',
    html: `
    <div class="slidebody split">${jstrip(7)}
      <div>
        <span class="eyebrow rise">Day 60 · every station rode. One thing to show for it.</span>
        <h2 class="rise" style="animation-delay:.08s;">A verified credential <span style="color:var(--navy)">Ravi keeps for life.</span></h2>
        <div class="featlist">
          ${fi(icons.shield, 'A verified identity', 'Background-checked once — criminal, eFIR, documents, address — and trusted everywhere on the platform.', 0.24)}
          ${fi(icons.check, 'Skills that are certified', 'Every course finished and assessment passed becomes a certificate on his record.', 0.32)}
          ${fi(icons.clock, 'A history that is proof', 'Verified shifts, employers, payslips and a PF trail — the frontline&rsquo;s first CV that can&rsquo;t be embellished, and the paper trail banks ask for.', 0.40)}
        </div>
        <div class="clientline rise" style="animation-delay:.55s;margin-top:12px;">It belongs to Ravi and travels with him. For the employer, it&rsquo;s why the rehire loop takes minutes: <b>verify once, trust everywhere.</b></div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag w"><i></i>Ravi&rsquo;s credential</span></div>
        <div class="credcard">
          <div class="cc-head"><span>betterplace · <b>verified worker</b></span><span>BP-30M-118</span></div>
          <div class="cc-me">
            <div class="cc-avatar">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="#131c4f"/>
                <circle cx="50" cy="118" r="50" fill="#1B2D93"/>
                <rect x="26" y="86" width="48" height="8" rx="3" fill="#FFC401" opacity=".92"/>
                <circle cx="50" cy="46" r="21" fill="#e8a66b"/>
                <path d="M27 44 A23 23 0 0 1 73 44 L73 36 A23 21 0 0 0 27 36 Z" fill="#FFC401"/>
                <rect x="25" y="41" width="50" height="4" rx="2" fill="#d9a400"/>
                <circle cx="43" cy="50" r="2.4" fill="#1c1c2e"/>
                <circle cx="57" cy="50" r="2.4" fill="#1c1c2e"/>
                <path d="M44 58 Q50 63 56 58" stroke="#1c1c2e" stroke-width="2" fill="none" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="cc-name">
              <h4>Ravi Kumar</h4>
              <p>Delivery Partner · Bengaluru<br/>On platform since Mar 2026</p>
              <span class="cc-verified"><i></i>BGV GREEN · 4/4 CHECKS</span>
            </div>
          </div>
          <div class="cc-grid">
            <div class="cc-cell">Verified shifts<b>52</b></div>
            <div class="cc-cell">On-time rate<b>98.2%</b></div>
            <div class="cc-cell">PF trail<b>2 months ✓</b></div>
            <div class="cc-cell">Languages<b>हिंदी · ಕನ್ನಡ</b></div>
          </div>
          <div class="cc-badges"><span class="cc-badge">Surge-shift certified</span><span class="cc-badge">Road safety ✓</span><span class="cc-badge">Customer basics ✓</span></div>
          <div class="cc-foot">Verified once · trusted everywhere · owned by the worker</div>
        </div>
        <div class="mockcap">One of <b>30 million</b> records like this — the asset under the whole company</div>
      </div>
    </div>`,
  },
  {
    id: 'ns11', theme: 'dark', title: 'Retail Samarth',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Meanwhile, 1,000 km away · the same loop, opened to everyone</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">Retail Samarth — India's largest <span style="color:var(--yellow)">public retail skilling school.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Built with Reliance Retail, free and open: anyone in India can learn retail skills in their own language, earn a certificate, and walk out with a pre-verified talent profile that 18,000+ stores hire from. No fees. No connections needed. A door, where there wasn't one.</p>
        <div class="stats rise" style="animation-delay:.3s;margin-top:22px;gap:18px 34px;">
          <div class="stat"><div class="n">800K+</div><div class="l">Downloads · free &amp; open</div></div>
          <div class="stat"><div class="n">14</div><div class="l">Languages</div></div>
          <div class="stat"><div class="n">8 weeks</div><div class="l">Idea to live</div></div>
          <div class="stat"><div class="n">1.5L+</div><div class="l">Annual hires through the funnel</div></div>
        </div>
        <div class="clientline rise" style="animation-delay:.45s;color:rgba(255,255,255,.65);margin-top:16px;">Skill someone publicly, verify them once, and they carry a record of their own into a job — the same loop Ravi rode, opened to anyone with a phone.</div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag w"><i></i>Ravi&rsquo;s screen</span></div>
        <div class="jobmock">
          <div class="jm-screen">
            <div class="jm-top"><h5>Retail Samarth</h5><p>मुफ़्त retail skilling · <b>certificate + job profile</b></p></div>
            <div class="jm-card" style="--d:.55s">
              <div class="jm-org">Course 1 · ग्राहक सेवा</div>
              <div class="jm-role">Customer service basics ✓</div>
              <div class="jm-note">Completed · certificate issued</div>
            </div>
            <div class="jm-card" style="--d:.9s">
              <div class="jm-org">Course 2 · billing</div>
              <div class="jm-role">POS &amp; billing</div>
              <div class="jm-prog"><i style="--w:45%;--d:1.2s"></i></div>
              <div class="jm-note">In progress · 45%</div>
            </div>
            <div class="jm-verdict" style="--d:1.5s">Profile visible to 18,000+ stores</div>
            <div class="jm-foot"><em></em>Free · open · 14 languages</div>
          </div>
        </div>
        <div class="mockcap">A door, where there wasn&rsquo;t one · <b>800K+ downloads</b></div>
      </div>
    </div>`,
  },
  {
    id: 'ns12', theme: 'darker', title: 'The colleagues Ravi never met',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">One more thing about Ravi's month</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:34ch;">Five of the people who handled him <span style="color:var(--yellow)">weren't people.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:100ch;">We won't lead with "AI" — everyone uses it. But look back at the story: the 8 pm call, the overnight checks, the 45-minute joining, the answers at 2 am. Agents did that — real phone calls in 24 languages, on open-source models on our own cloud, so worker data never leaves.</p>
      <div class="agents rise" style="animation-delay:.28s;margin-top:18px;grid-template-columns:repeat(5,1fr);">
        <div class="ag" style="--ac:#7C6BF0"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Screening</div><h4>AI Jack</h4><p>Made the 8 pm call. Screens every applicant, overnight.</p></div>
        <div class="ag" style="--ac:#FFC401"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Verification</div><h4>AI Cole</h4><p>Ran the document and face checks while Ravi slept.</p></div>
        <div class="ag" style="--ac:#FF7A59"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Onboarding</div><h4>AI Mia</h4><p>Ran the 45-minute joining from the tea stall.</p></div>
        <div class="ag" style="--ac:#3DBE7B"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Tutor</div><h4>AI Theo</h4><p>Answers his "how do I…" questions at 2 am, with citations.</p></div>
        <div class="ag" style="--ac:#32CAD4"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Sales coach</div><h4>AI Max</h4><p>Coaches ~30,000 salespeople at IFFCO Tokio today.</p></div>
      </div>
      <div class="modelrow rise" style="animation-delay:.44s;margin-top:16px;">
        <div class="mstat"><div class="n">₹0.37</div><div class="l">Per agent conversation</div></div>
        <div class="mstat"><div class="n">₹5/min</div><div class="l">Real phone calls, vs ₹12 industry</div></div>
        <div class="mstat"><div class="n">10 min</div><div class="l">To build a new agent, no code</div></div>
        <div class="mstat"><div class="n">0</div><div class="l">Bytes of worker data leave our cloud</div></div>
      </div>
    </div>`,
  },
  {
    id: 'ns12b', theme: 'light', title: 'Who trusts us',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof · who runs on this</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:34ch;">Names you know. <span style="color:var(--navy)">Frontlines we run.</span></h2>
      <div class="rise" style="animation-delay:.22s;background:#fff;border-radius:18px;padding:20px 24px;box-shadow:0 18px 44px rgba(11,18,55,.1);border:1px solid rgba(11,18,55,.06);max-width:960px;margin:14px auto 0;">
        <img src="assets/product/client-logo-wall.jpg" alt="Enterprises running on BetterPlace" style="display:block;width:100%;height:auto;" loading="lazy"/>
      </div>
      <div class="mockcap" style="margin-top:12px;">1,100+ enterprises · retail, e-commerce, quick commerce, BFSI, manufacturing, hospitality · <b>&gt;95% stay</b></div>
    </div>`,
  },
  {
    id: 'ns13', theme: 'dark', title: 'Why we exist',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Why we exist</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:32ch;">Ravi is one of <span style="color:var(--yellow)">30 million.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:12px;max-width:96ch;">Ten years in: 30M+ worker profiles, 1,100+ enterprises, 500+ cities, 8 markets across India, Southeast Asia and the Gulf. And a real business underneath — the staffing arm alone does $105M+ in annual gross revenue.</p>
      <div class="modelrow rise" style="animation-delay:.28s;margin-top:18px;">
        <div class="mstat"><div class="n">30M+</div><div class="l">Workers with a record of their own</div></div>
        <div class="mstat"><div class="n">1,100+</div><div class="l">Enterprises on the platform</div></div>
        <div class="mstat"><div class="n">$105M+</div><div class="l">Annual gross revenue, staffing alone</div></div>
        <div class="mstat"><div class="n">2.35 cr</div><div class="l">Gig workers by 2030 — the wave underneath</div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">The next hundred million jobs in India will be frontline jobs. <b>We intend to be the system they run on.</b></div>
    </div>`,
  },
]

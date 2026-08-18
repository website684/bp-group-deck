import type { SlideDef } from '../lib/types'
import { fi, icons } from './html'

// "Why BetterPlace exists" — the story deck, told through basic questions.
// Written for a first-principles reader: short sentences, sourced numbers, no jargon.

export const nkStorySlides: SlideDef[] = [
  {
    id: 'ns1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">BetterPlace · the story, in thirteen slides</span>
      <h1 class="rise" style="animation-delay:.15s">India runs on people its software <span style="color:var(--yellow)">has never met.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Around 300 million Indians ride, lift, sell, guard, build and deliver for a living. This is the story of the platform they never had — and why 1,100+ enterprises now run on it.</p>
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
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.map}</svg></span><h4>No desk. No desktop.</h4><p>Frontline work happens on feet. 95% of India's internet runs on a smartphone — yet enterprise software still assumes a chair.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.lang}</svg></span><h4>Not in English</h4><p>98% of India's internet users consume content in an Indian language. The HR software their employer bought speaks one.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>Hired, but not known</h4><p>Hired through vendors and contractors, they exist as a row in someone's Excel — no record, no history, no identity of their own.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.book}</svg></span><h4>Trained by luck</h4><p>Only ~5% of India's workforce has ever received formal skill training — while 40% of today's skills go obsolete by 2030 (WEF). A career becomes a lottery.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.42s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));"><b>~300 million people.</b> The world's software industry built them nothing — it was busy building for the people at desks.</div>
    </div>`,
  },
  {
    id: 'ns3', theme: 'light', title: 'The thesis',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">So that's the company we built</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:32ch;">One record for the worker. <span style="color:var(--navy)">One platform for everyone who employs them.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:100ch;">For the worker: a verified identity, skills that are certified, earnings they can see, a work history that travels with them between employers. For the enterprise: the entire lifecycle of that worker on one system, instead of five vendors and a spreadsheet.</p>
      <div class="rail rise" style="animation-delay:.26s;grid-template-columns:repeat(6,1fr);margin-top:20px;">
        <div class="rstage"><div class="rn">01</div><h4>Source</h4><ul><li>30M+ verified pool</li><li>Staffing + gig supply</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Verify</h4><ul><li>Criminal · eFIR · docs</li><li>Physical address</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Onboard</h4><ul><li>On their phone</li><li>Bulk + vendor flows</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Attend</h4><ul><li>Geo-tagged, zoned</li><li>Face-verified</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Pay &amp; reward</h4><ul><li>Compliant payroll</li><li>Live incentives</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Grow</h4><ul><li>Vernacular training</li><li>Careers that travel</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s">Three businesses feed this loop: <b>goBetter</b> (the software), <b>staffBetter</b> (full-time staffing) and <b>gigBetter</b> (on-demand gig) — one worker record underneath all three.</div>
    </div>`,
  },
  {
    id: 'ns4', theme: 'dark', title: 'The lens',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The easiest way to explain it is one company</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:34ch;">Take quick commerce. Ten-minute deliveries. <span style="color:var(--yellow)">Ten thousand riders.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:100ch;">The average delivery partner stays about 3.5 months. So a fleet of ten thousand riders isn't hired once — it's rebuilt roughly three times a year, in every city, forever. Every stage of that machine is a product we run.</p>
      <div class="modelrow rise" style="animation-delay:.28s;margin-top:18px;">
        <div class="mstat"><div class="n">3.5 <em>mo</em></div><div class="l">Average rider tenure (Swiggy COO, 2024)</div></div>
        <div class="mstat"><div class="n">~65%</div><div class="l">Annual delivery attrition (Zomato, 2024)</div></div>
        <div class="mstat"><div class="n">1 cr</div><div class="l">Gig workers today (NITI Aayog)</div></div>
        <div class="mstat"><div class="n">2.35 cr</div><div class="l">By 2030 — the fastest-growing job type in India</div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">The next six slides walk that rider's journey — <b>source → verify → onboard → attend → pay → grow</b> — with what we run at each step.</div>
    </div>`,
  },
  {
    id: 'ns5', theme: 'light', title: 'Source',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Question one · where do ten thousand riders come from?</span>
        <h2 class="rise" style="animation-delay:.08s;">A pool of 30 million — <span style="color:var(--navy)">and two staffing businesses on top.</span></h2>
        <div class="featlist">
          ${fi(icons.users, 'The verified pool', '30M+ worker profiles with history — sourcing starts from a shortlist, not a job post.', 0.24)}
          ${fi(icons.building, 'Full-time staffing (Aasaanjobs)', '23,000+ people on our payroll working for clients — we are the employer of record, the compliance is ours.', 0.32)}
          ${fi(icons.zap, 'Gig supply (gigBetter · OkayGo)', 'From 1 to 500+ workers deployed in under 24 hours — billed only on verified task outcomes, with GPS and photo proof.', 0.40)}
          ${fi(icons.mic, 'AI screening on a phone call', 'Voice agents call every applicant in their language the day they apply, score fit, and shortlist overnight.', 0.48)}
        </div>
      </div>
      <div class="prodpanel rise" style="animation-delay:.35s">
        <div class="pminihead">What the supply engine does in a month</div>
        <div class="stats" style="margin-top:14px;gap:16px 26px;">
          <div class="stat"><div class="n">3–4K</div><div class="l">Joinings / month (India staffing)</div></div>
          <div class="stat"><div class="n">&lt;24 hr</div><div class="l">Gig deployment, any metro</div></div>
          <div class="stat"><div class="n">&lt;4%</div><div class="l">Gig no-show rate</div></div>
          <div class="stat"><div class="n">&gt;95%</div><div class="l">Staffing client retention</div></div>
        </div>
        <div class="clientline">Supply without verification is a liability — which is the next question.</div>
      </div>
    </div>`,
  },
  {
    id: 'ns6', theme: 'light', title: 'Verify',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Question two · who is entering your customer's home?</span>
        <h2 class="rise" style="animation-delay:.08s;">Every rider verified <span style="color:var(--navy)">before the first delivery.</span></h2>
        <div class="featlist">
          ${fi(icons.shield, 'Criminal record check', 'Pan-India court records, read by AI — relevant hits surface in minutes, not a manual backlog.', 0.24)}
          ${fi(icons.doc, 'eFIR check', 'Police-complaint records checked digitally against the candidate — the check most vendors skip.', 0.32)}
          ${fi(icons.check, 'Document matching', 'Aadhaar and ID verified via API, face-matched to the person actually onboarding.', 0.40)}
          ${fi(icons.map, 'Physical address verification', 'Someone actually goes to the address. Digital and postal routes when speed matters.', 0.48)}
        </div>
      </div>
      <div class="prodpanel rise" style="animation-delay:.35s">
        <div class="pminihead">Why this is arithmetic, not paranoia</div>
        <div class="stats" style="margin-top:14px;gap:16px 26px;">
          <div class="stat"><div class="n">5.6%</div><div class="l">Of gig background checks surface a discrepancy</div></div>
          <div class="stat"><div class="n">9.7%</div><div class="l">Address discrepancies alone, in gig hiring</div></div>
          <div class="stat"><div class="n">&lt;24 hr</div><div class="l">Our verification turnaround</div></div>
        </div>
        <div class="clientline">At 10,000 riders, 5.6% means <b>560 people you're glad you checked</b> — red / yellow / green on one dashboard.</div>
      </div>
    </div>`,
  },
  {
    id: 'ns7', theme: 'light', title: 'Onboard',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Question three · can 500 people join on a Monday?</span>
        <h2 class="rise" style="animation-delay:.08s;">Onboarding on the rider's phone, <span style="color:var(--navy)">not in your office.</span></h2>
        <div class="featlist">
          ${fi(icons.doc, 'Documents, collected in chat', 'KYC, bank details, licences — uploaded from the rider’s phone, checked by API, e-signed.', 0.24)}
          ${fi(icons.layers, 'Bulk onboarding', '500 joiners in one file — errors flagged per row and fixed in one round, not a week of email.', 0.32)}
          ${fi(icons.repeat, 'Vendor management built in', 'Every contractor onboards workers through the same interface — one standard, however many vendors.', 0.40)}
          ${fi(icons.zap, 'Payroll-ready on arrival', 'The record lands in attendance and payroll untouched. No re-entry, no reconciliation later.', 0.48)}
        </div>
      </div>
      <div class="prodpanel rise" style="animation-delay:.35s">
        <div class="pminihead">What it feels like</div>
        <div class="stats" style="margin-top:14px;gap:16px 26px;">
          <div class="stat"><div class="n">45 min</div><div class="l">Agent-run onboarding that took 3 days</div></div>
          <div class="stat"><div class="n">10 min</div><div class="l">Offer to payroll-ready, self-serve</div></div>
        </div>
        <div class="clientline">The rider never visits an office. The ops team never touches a photocopy.</div>
      </div>
    </div>`,
  },
  {
    id: 'ns8', theme: 'light', title: 'Attend',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Question four · did they actually show up?</span>
        <h2 class="rise" style="animation-delay:.08s;">Attendance that knows <span style="color:var(--navy)">where the dark store is.</span></h2>
        <div class="featlist">
          ${fi(icons.map, 'Geo-tagged, zone-aware', 'Riders mark attendance inside a geo-fence around their hub — presence means present at the right place.', 0.24)}
          ${fi(icons.eye, 'Face-verified, spoof-proof', 'AI face verification with spoof detection — a photo of a photo doesn’t clock in.', 0.32)}
          ${fi(icons.clock, 'Shifts that match reality', 'Night shifts, split shifts, surge windows — the roster engine handles how quick commerce actually runs.', 0.40)}
        </div>
      </div>
      <div class="prodpanel rise" style="animation-delay:.35s">
        <div class="pminihead">Running today at Zepto</div>
        <div class="stats" style="margin-top:14px;gap:16px 26px;">
          <div class="stat"><div class="n">15,000</div><div class="l">Workers tracked live</div></div>
          <div class="stat"><div class="n">967</div><div class="l">Sites, geo-fenced</div></div>
          <div class="stat"><div class="n">40%</div><div class="l">Cost savings measured</div></div>
        </div>
        <div class="clientline">Attendance is the trust layer — everything downstream (pay, incentives, compliance) computes from it.</div>
      </div>
    </div>`,
  },
  {
    id: 'ns9', theme: 'light', title: 'Pay, comply, reward',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Question five · when a vendor underpays PF, whose problem is it?</span>
        <h2 class="rise" style="animation-delay:.08s;">Yours — that's the law. <span style="color:var(--navy)">So we built for it.</span></h2>
        <div class="featlist">
          ${fi(icons.shield, 'Principal-employer protection', 'Every vendor’s PF/ESI challan read automatically and reconciled worker-by-worker, monthly — gaps flagged before they become an audit finding.', 0.24)}
          ${fi(icons.card, 'Payroll from verified attendance', 'No punch, no pay. Minimum-wage floors validated on every structure before a rupee moves.', 0.32)}
          ${fi(icons.trophy, 'Incentives the rider can see', 'Live earnings in their pocket after every order — "₹1.1L more this month unlocks +₹2,500." Motivation as a product, not a month-end surprise.', 0.40)}
        </div>
      </div>
      <div class="prodpanel rise" style="animation-delay:.35s">
        <div class="pminihead">Measured where it runs</div>
        <div class="stats" style="margin-top:14px;gap:16px 26px;">
          <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage (Reliance)</div></div>
          <div class="stat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk</div></div>
          <div class="stat"><div class="n">3,000+</div><div class="l">Vendors on one rule engine</div></div>
        </div>
        <div class="clientline">The worker gets paid right and sees why. The CFO stops inheriting other people's liabilities.</div>
      </div>
    </div>`,
  },
  {
    id: 'ns10', theme: 'light', title: 'Grow',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Question six · why would they stay?</span>
        <h2 class="rise" style="animation-delay:.08s;">Because staying <span style="color:var(--navy)">finally pays.</span></h2>
        <div class="featlist">
          ${fi(icons.play, 'Training that looks like Instagram', 'Reel-style lessons in the rider’s own language — 88% completion versus 25% on a traditional LMS.', 0.24)}
          ${fi(icons.check, 'Certification gates deployment', 'At Zepto, only trained, certified riders go live — training is wired into dispatch, not requested politely.', 0.32)}
          ${fi(icons.trophy, 'A career that compounds', 'Skills, certificates and work history live on the worker’s own record — and travel with them to the next job.', 0.40)}
        </div>
      </div>
      <div class="prodpanel rise" style="animation-delay:.35s">
        <div class="pminihead">What retention looks like</div>
        <div class="stats" style="margin-top:14px;gap:16px 26px;">
          <div class="stat"><div class="n">88%</div><div class="l">Training completion vs 25% industry</div></div>
          <div class="stat"><div class="n">−15%</div><div class="l">Frontline attrition where deployed</div></div>
          <div class="stat"><div class="n">+19.7%</div><div class="l">Week-on-week retention (Meesho)</div></div>
        </div>
        <div class="clientline">Every month of tenure saved is a hiring cycle never paid for — at 3.5-month baselines, this is the biggest lever there is.</div>
      </div>
    </div>`,
  },
  {
    id: 'ns11', theme: 'dark', title: 'Retail Samarth',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">One story we're especially proud of</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:34ch;">Retail Samarth — India's largest <span style="color:var(--yellow)">public retail skilling school.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:100ch;">Built with Reliance Retail: a free, open app where anyone in India can learn retail skills in their own language — and walk out with a certificate and a pre-verified talent profile that stores actually hire from.</p>
      <div class="modelrow rise" style="animation-delay:.28s;margin-top:18px;">
        <div class="mstat"><div class="n">800K+</div><div class="l">Downloads — public, free, open</div></div>
        <div class="mstat"><div class="n">500K+</div><div class="l">Reliance associates trained · 14 languages</div></div>
        <div class="mstat"><div class="n">8 weeks</div><div class="l">Idea to live, 18,000+ stores</div></div>
        <div class="mstat"><div class="n">1.5L+</div><div class="l">Annual hires flowing through the funnel</div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">This is the loop we exist for: <b>skill someone publicly → verify them once → they carry a record of their own into a job.</b> The worker gets a career door; the employer gets a pre-verified pipeline.</div>
    </div>`,
  },
  {
    id: 'ns12', theme: 'darker', title: 'The AI turn',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Question seven · what has AI actually changed here?</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">Not a feature. <span style="color:var(--yellow)">Headcount.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:100ch;">We won't lead with "AI" — everyone uses it. What matters is what it replaced: agents that make real phone calls in 24 languages, read documents, see photos and follow processes that cannot skip a step. Open-source models on our own cloud, so worker data never leaves. These five are working shifts today:</p>
      <div class="capgrid rise" style="animation-delay:.26s;grid-template-columns:repeat(5,1fr);margin-top:16px;">
        <div class="cap"><h4>AI Jack</h4><p>Calls and screens every applicant, overnight</p></div>
        <div class="cap"><h4>AI Cole</h4><p>Face-matches and API-checks documents before day one</p></div>
        <div class="cap"><h4>AI Mia</h4><p>Runs the 45-minute onboarding, end to end</p></div>
        <div class="cap"><h4>AI Theo</h4><p>Answers policy and how-to questions, 24×7, cited</p></div>
        <div class="cap"><h4>AI Max</h4><p>Coaches ~30,000 salespeople at IFFCO Tokio today</p></div>
      </div>
      <div class="modelrow rise" style="animation-delay:.4s;margin-top:16px;">
        <div class="mstat"><div class="n">₹0.37</div><div class="l">Per agent conversation</div></div>
        <div class="mstat"><div class="n">₹5/min</div><div class="l">Real phone calls, vs ₹12 industry</div></div>
        <div class="mstat"><div class="n">10 min</div><div class="l">To build a new agent, no code</div></div>
        <div class="mstat"><div class="n">0</div><div class="l">Bytes of worker data leave our cloud</div></div>
      </div>
    </div>`,
  },
  {
    id: 'ns13', theme: 'dark', title: 'Why we exist',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Why we exist</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">Software finally met <span style="color:var(--yellow)">30 million workers.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:12px;max-width:96ch;">Ten years in: 30M+ worker profiles, 1,100+ enterprises, 500+ cities, 8 markets across India, Southeast Asia and the Gulf — and a real business underneath: the staffing arm alone does $105M+ in annual gross revenue. The frontline is the fastest-growing kind of job in India, and it finally has a system of record.</p>
      <div class="modelrow rise" style="animation-delay:.28s;margin-top:18px;">
        <div class="mstat"><div class="n">30M+</div><div class="l">Workers with a record of their own</div></div>
        <div class="mstat"><div class="n">1,100+</div><div class="l">Enterprises on the platform</div></div>
        <div class="mstat"><div class="n">8</div><div class="l">Markets · India, SEA, GCC</div></div>
        <div class="mstat"><div class="n">2.35 cr</div><div class="l">Gig workers by 2030 — the wave underneath</div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">The next hundred million jobs in India will be frontline jobs. <b>We intend to be the system they run on.</b></div>
    </div>`,
  },
]

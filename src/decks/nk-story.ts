import type { SlideDef } from '../lib/types'
import { bframe, fi, icons } from './html'

// "Why BetterPlace exists" — the story deck.
// One rider, Ravi, 30 days. Every product enters as a character in his story.
// Written for a first-principles reader: short sentences, sourced numbers, real screenshots.

export const nkStorySlides: SlideDef[] = [
  {
    id: 'ns1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">BetterPlace · the story, in twelve slides</span>
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
      <div class="probfoot rise" style="animation-delay:.42s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Roughly <b>300 million people</b>. One of them is <b>Ravi, 23</b>, who reached Bengaluru last week with a bike, a phone, and no CV. The rest of this deck is his first month.</div>
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
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">A 10,000-rider fleet is rebuilt <b>about three times a year, in every city, forever</b>. Someone has to source, verify, onboard, track, pay and train that river of people. That someone is us. Watch it work — on Ravi.</div>
    </div>`,
  },
  {
    id: 'ns5', theme: 'light', title: 'Day 1 · Ravi applies',
    html: `
    <div class="slidebody split">
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
        ${bframe('assets/product/hire-journey/subway-job-matches.png', 'The worker&rsquo;s side of hiring · ranked matches', 'Fit-scored roles with pay bands, <b>one tap, no CV</b> — shown here for a food-retail client', true)}
        <div class="stats" style="margin-top:16px;gap:16px 26px;">
          <div class="stat"><div class="n">3–4K</div><div class="l">Ravis join every month, India staffing</div></div>
          <div class="stat"><div class="n">&lt;24 hr</div><div class="l">Apply to shortlist</div></div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'ns6', theme: 'light', title: 'Night 1 · while Ravi sleeps',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Night 1 · while Ravi sleeps, four checks run</span>
        <h2 class="rise" style="animation-delay:.08s;">By 9 am his file says one word: <span style="color:var(--navy)">green.</span></h2>
        <div class="featlist">
          ${fi(icons.shield, 'Criminal record check', 'Pan-India court records, read by AI overnight. Relevant hits surface in minutes, not a manual backlog.', 0.24)}
          ${fi(icons.doc, 'eFIR check', 'Police complaint records checked digitally against his name — the check most vendors quietly skip.', 0.32)}
          ${fi(icons.check, 'Document matching', 'His Aadhaar verified over API and face-matched to the person who applied. Ravi is Ravi.', 0.40)}
          ${fi(icons.map, 'Physical address verification', 'Someone actually visits the address he gave. The customer whose door he will knock on deserves that.', 0.48)}
        </div>
        <div class="clientline rise" style="animation-delay:.55s;margin-top:12px;">This isn't ceremony. 5.6% of gig background checks surface a discrepancy — on a 10,000-rider fleet, that's <b>560 doors you were right to check before they were knocked on.</b></div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${bframe('assets/product/gobetter/verify/bgv-insights-red-yellow-green.jpg', 'What the ops team sees · verification portfolio', 'The whole fleet at a glance — <b>red / yellow / green</b>, live', true)}
      </div>
    </div>`,
  },
  {
    id: 'ns7', theme: 'light', title: 'Day 2 · Ravi joins from a tea stall',
    html: `
    <div class="slidebody split">
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
        ${bframe('assets/product/gobetter/hire/onboarding-status-funnel.jpg', 'What the ops team sees · onboarding funnel', 'Ravi&rsquo;s batch moving through the funnel — <b>who is stuck, and where</b>', true)}
        <div class="stats" style="margin-top:16px;gap:16px 26px;">
          <div class="stat"><div class="n">45 min</div><div class="l">Ravi's onboarding. It used to take 3 days</div></div>
          <div class="stat"><div class="n">0</div><div class="l">Office visits, photocopies, queues</div></div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'ns8', theme: 'light', title: 'Day 3 · first shift',
    html: `
    <div class="slidebody split">
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
        ${bframe('assets/product/gobetter/attendance/roster-weekly-grid.jpg', 'What the ops team sees · the weekly roster', 'A week of shifts across the site — bulk tools, publish step', true)}
      </div>
    </div>`,
  },
  {
    id: 'ns9', theme: 'light', title: 'Day 30 · salary day',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Day 30 · 6:04 pm · the message Ravi has been waiting for</span>
        <h2 class="rise" style="animation-delay:.08s;">Salary credited. Correct. On time. <span style="color:var(--navy)">Explained.</span></h2>
        <div class="featlist">
          ${fi(icons.card, 'Computed from verified shifts', 'No punch, no pay — and no honest shift unpaid. Minimum-wage floors were validated before the structure was ever approved.', 0.24)}
          ${fi(icons.shield, 'The part Ravi never sees', 'His vendor&rsquo;s PF/ESI challan is read automatically and reconciled worker-by-worker, monthly — because when a vendor underpays, the law sends the bill to the principal employer.', 0.32)}
          ${fi(icons.trophy, 'The number that changes his week', 'Live incentives in his pocket after every order: "₹1.1L more this month unlocks +₹2,500." The scheme motivates while there is still a month to act on it.', 0.40)}
        </div>
        <div class="clientline rise" style="animation-delay:.5s;margin-top:12px;">Measured at Reliance: <b>90% less payroll leakage, 80% less vendor non-compliance risk</b> — 3,000+ vendors on one rule engine. Ravi's payslip is the first financial document he has ever owned.</div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${bframe('assets/product/gobetter/payroll/vendor-reconciliation-dashboard.jpg', 'What the CFO sees · vendor reconciliation', 'Every vendor&rsquo;s statutory status — <b>pending · failed · success</b> — before the auditor asks', true)}
      </div>
    </div>`,
  },
  {
    id: 'ns10', theme: 'light', title: 'Month 2 · Ravi gets ambitious',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Month 2 · 10:40 pm · Ravi watches reels. The right ones.</span>
        <h2 class="rise" style="animation-delay:.08s;">The 3.5-month rider <span style="color:var(--navy)">decides to stay.</span></h2>
        <div class="featlist">
          ${fi(icons.play, 'Training that looks like Instagram', 'Reel-style lessons in his own language, watchable between orders. 88% completion, against 25% on a traditional LMS.', 0.24)}
          ${fi(icons.check, 'Certificates that unlock work', 'At Zepto, only trained, certified riders go live — his new certificate is not a PDF, it is access to better shifts.', 0.32)}
          ${fi(icons.trophy, 'A record that compounds', 'Every shift, certificate and verification lives on Ravi&rsquo;s own profile — and travels with him to the next job, the way a LinkedIn never could.', 0.40)}
        </div>
        <div class="clientline rise" style="animation-delay:.5s;margin-top:12px;">At a 3.5-month baseline, retention is the biggest lever in the business: <b>every month of tenure saved is a hiring cycle never paid for.</b> Where this runs: −15% attrition.</div>
      </div>
      <div class="rise" style="animation-delay:.35s;max-width:320px;margin:0 auto;">
        ${bframe('assets/product/app-gamification.webp', 'What Ravi sees · his learning journey', 'Streaks, badges, levels — <b>88% finish</b>')}
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
        <div class="clientline rise" style="animation-delay:.45s;color:rgba(255,255,255,.65);margin-top:16px;">Skill someone publicly. Verify them once. Let them carry a record of their own into a job. That loop is the company.</div>
      </div>
      <div class="rise" style="animation-delay:.35s;max-width:320px;margin:0 auto;">
        ${bframe('assets/product/app-home.webp', 'The learner app · skillBetter engine', 'The engine behind Samarth — courses, certificates, <b>a profile that belongs to the worker</b>')}
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

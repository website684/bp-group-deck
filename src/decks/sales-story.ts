import type { SlideDef } from '../lib/types'
import { bframe, fi, icons, outcomeSlide, problemSlides } from './html'
import { incentivesSlides } from './incentives'

const incAssociateDay = incentivesSlides.find((s) => s.id === 'inc5')!

export const salesStorySlides: SlideDef[] = [
  {
    id: 'ss1', theme: 'dark', title: 'Sales story cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter for sales teams · field &amp; retail</span>
      <h1 class="rise" style="animation-delay:.15s">One partner for the people <span style="color:var(--yellow)">who sell for you.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Field reps, store associates, telesales, channel sellers — hired in days, verified, trained, coached by AI, tracked in the field, and paid incentives they can see live. One platform end to end.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">~30,000</div><div class="l">Sales pros coached by AI Max</div></div>
        <div class="stat"><div class="n">+40%</div><div class="l">Sales uplift at Meesho</div></div>
        <div class="stat"><div class="n">−60%</div><div class="l">Time-to-hire</div></div>
        <div class="stat"><div class="n">1,000+</div><div class="l">Sales execs staffed at Mahindra</div></div>
      </div>
      <div class="mdcover ghost">GO</div>
    </div>`,
  },
  ...problemSlides('ss1b', 'For the sales & revenue leader', 'Your sales machine leaks at every human joint.', 'And the tools you bought were made for desks, not doorsteps.', [
    { pain: 'A rep takes 3 months to reach quota — and leaves in 9', painDetail: 'By the time a field seller is productive, attrition is already circling. The ramp cost never gets repaid.', painStat: '40–50% frontline sales attrition · 3-month ramps', fix: 'Hire in days, ramp in weeks', fixDetail: 'AI voice calls screen candidates the day they apply; reels-based product training and AI roleplay compress the ramp before the first customer visit.', fixStat: '−60% time-to-hire · 3× faster upskilling' },
    { pain: 'Coaching stops at the top 10% of the team', painDetail: 'Managers ride along with a few reps; the other ninety learn by losing customers.', painStat: '1 manager can’t coach 40 reps', fix: 'Every rep practises before every real call', fixDetail: 'AI Max runs live customer roleplays — objection handling, tone, empathy, accuracy — scored and always available.', fixStat: 'IFFCO Tokio: ~30,000 sales pros coached' },
    { pain: 'You can’t see the field force you pay for', painDetail: 'Beat plans on paper, attendance on trust, visits claimed on WhatsApp — the field is a black box between HQ and the customer.', painStat: 'Claimed visits ≠ made visits', fix: 'Face + geo attendance, visits with proof', fixDetail: 'Geo-fenced check-ins at stores and beats; live present/absent by territory; every claim carries a location and timestamp.', fixStat: 'Zepto: 15,000 field workers tracked live' },
    { pain: 'Incentives lag reality by a month', painDetail: 'The single biggest motivator on the floor is a spreadsheet nobody can see — reps discover their earnings weeks after the sale.', painStat: 'Month-end surprise ≠ motivation', fix: 'Earnings live in every seller’s pocket', fixDetail: 'goBetter Incentives shows the number after every bill — with "₹1.1L more unlocks +₹2,500" nudges steering effort where you want it.', fixStat: 'Live payout + leaderboard, per rep' },
  ], 'BetterPlace Frontline Index · IFFCO Tokio & Meesho deployments · McKinsey frontline retention research'),
  {
    id: 'ss2', theme: 'dark', title: 'The lifecycle',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">One platform · the whole selling lifecycle</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">From "we need 200 sellers" to quota — on one record.</h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(6,1fr);margin-top:22px;">
        <div class="rstage"><div class="rn">01</div><h4>Hire</h4><ul><li>WhatsApp-apply, no CV</li><li>AI voice-call screening</li><li>Ranked shortlists</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Verify</h4><ul><li>Six-point BGV &lt;24 hr</li><li>Who reps your brand, checked</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Onboard</h4><ul><li>10 min on their phone</li><li>Straight into payroll</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Train &amp; coach</h4><ul><li>Reels + assessments</li><li>AI Max roleplays</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Track</h4><ul><li>Face + geo in the field</li><li>Beats &amp; visit proof</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Reward</h4><ul><li>Live incentives</li><li>Leaderboards &amp; streaks</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Every stage writes to <b>one seller record</b> — so training gates selling, attendance feeds incentives, and a rehire restarts in minutes.</div>
    </div>`,
  },
  {
    id: 'ss3', theme: 'light', title: 'Hire sellers fast',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Hire · volume selling roles</span>
        <h2 class="rise" style="animation-delay:.08s;">200 sellers before the season? <span style="color:var(--navy)">Post once.</span></h2>
        <div class="featlist">
          ${fi(icons.mic, 'AI screening over a phone call', 'Voice bots call every applicant in their language, score fit against the role rubric and shortlist overnight — at ₹5/min vs ₹12 industry.', 0.24)}
          ${fi(icons.users, 'WhatsApp-apply, no CV, no install', 'Role cards with pay bands, guided profile, progressive documents — built for people who sell, not people who write résumés.', 0.32)}
          ${fi(icons.shield, 'Verified before they carry your card', 'Identity, address, court and employment checks — <24 hr, with a red/yellow/green case file per rep.', 0.40)}
          ${fi(icons.zap, 'Offer to payroll-ready in 10 minutes', 'Docs, e-sign and bank setup on their own phone — the record lands in payroll untouched.', 0.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${bframe('assets/product/hire-journey/subway-job-matches.png', 'Candidate journey · ranked matches', 'Fit-scored, explainable job matches — <b>one-tap apply</b> (experience prototype)')}
      </div>
    </div>`,
  },
  {
    id: 'ss4', theme: 'light', title: 'Train & coach sellers',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Train &amp; coach · skillBetter + AI Max</span>
        <h2 class="rise" style="animation-delay:.08s;">Product knowledge by reels. <span style="color:var(--navy)">Pitch practice by AI.</span></h2>
        <div class="featlist">
          ${fi(icons.play, 'Reels for product knowledge', 'New SKU, new offer, new objection — a 3-minute vernacular reel on every seller’s phone by morning. 88% completion vs 25% industry.', 0.24)}
          ${fi(icons.doc, 'Proctored assessments before the floor', 'Face-detection proctoring and 12+ question types — nobody sells uncertified, the Zepto pattern applied to sales.', 0.32)}
          ${fi(icons.bot, 'AI Max — the roleplay coach', 'Live customer conversations with tone, empathy and accuracy scoring across 20+ scenarios. Reps practise on the bot, not on your customers.', 0.40)}
          ${fi(icons.zap, 'AI Theo — answers mid-pitch', 'Policy detail, spec comparison, price rules — cited answers from your documents in 4 seconds, any language.', 0.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="phones" style="min-height:clamp(280px,30vw,390px);">
          <div class="phone p1"><img src="assets/product/figma/skilling/skillbetter-mobile-image-mcq-feedback.png" alt="Assessment with instant feedback"/></div>
          <div class="phone p2"><img src="assets/product/figma/skilling/mobile-learning-home-new-feed.png" alt="Reels-style learning feed"/></div>
          <div class="phone p3"><img src="assets/product/app-leaderboard.webp" alt="Leaderboard"/></div>
        </div>
        <div class="phonecap" style="margin-top:12px;">Reels feed · assessments · leaderboards — the seller's daily loop</div>
      </div>
    </div>`,
  },
  {
    id: 'ss5', theme: 'darker', title: 'The sales agent bench',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">AI Labs · the agents on your sales floor</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">A bench of AI specialists working your revenue team.</h2>
      <div class="agents" style="margin-top:22px;">
        <div class="ag rise" style="--ac:#FF7A59;animation-delay:.24s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Sales coach</div><h4>AI Max</h4><p>Customer roleplays scored on tone, empathy and accuracy — coaching ~30,000 sales pros at IFFCO Tokio.</p></div>
        <div class="ag rise" style="--ac:#7C6BF0;animation-delay:.31s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Seller screening</div><h4>AI Jack</h4><p>Interviews sales applicants over WhatsApp and voice, ranks by fit — recruiters meet closers, not CVs.</p></div>
        <div class="ag rise" style="--ac:#3DBE7B;animation-delay:.38s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Product tutor</div><h4>AI Theo</h4><p>Specs, offers and policy answered mid-conversation from your own documents — cited, in 24 languages.</p></div>
        <div class="ag rise" style="--ac:#FFC401;animation-delay:.45s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Pitch of the week</div><h4>AI Kai</h4><p>Pushes a 3-minute practice scenario every Monday and shows managers who’s match-fit before the week starts.</p></div>
        <div class="ag rise" style="--ac:#32CAD4;animation-delay:.52s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Incentive copilot</div><h4>Plan copilot</h4><p>Describe a scheme in a sentence — it builds the plan, simulates the cost and flags gaming before launch.</p></div>
        <div class="ag rise" style="--ac:#FF9518;animation-delay:.59s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat soon"><span class="d"></span>Soon</span></div><div class="role">Field assistant</div><h4>AI Zara</h4><p>Confirms tomorrow’s beat plan, chases silent reps and flags territories trending short.</p></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:20px;animation-delay:.68s">All on the AI Labs runtime — deterministic where compliance demands, private LLMs, ₹0.37 per interaction</div>
    </div>`,
  },
  { ...incAssociateDay, id: 'ss6', title: 'Incentives live in pocket' },
  {
    id: 'ss7', theme: 'light', title: 'Field visibility',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Track · the field force, visible</span>
        <h2 class="rise" style="animation-delay:.08s;">Every beat, visit and hour — <span style="color:var(--navy)">with proof attached.</span></h2>
        <div class="featlist">
          ${fi(icons.map, 'Geo-fenced check-ins on the beat', 'Face-verified attendance at stores, dealer points and customer sites — a visit claimed is a visit made.', 0.24)}
          ${fi(icons.chart, 'Territory dashboards, live', 'Present/absent by territory, route coverage and exception queues — area managers steer the day, not the post-mortem.', 0.32)}
          ${fi(icons.card, 'Attendance feeds pay and incentives', 'Days worked adjust incentive payouts automatically — no reconciliation argument at month-end.', 0.40)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${bframe('assets/product/gobetter/attendance/roster-weekly-grid.jpg', 'gobetter · Attend · Roster', 'The same rostering and attendance engine, applied to <b>field teams and territories</b>')}
      </div>
    </div>`,
  },
  {
    id: 'ss8', theme: 'dark', title: 'Proof',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof · sales teams running on BetterPlace</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;">Sales organisations that already run on this.</h2>
      <div class="cases" style="margin-top:16px;">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.2s"><div class="ch"><span class="cn">IFFCO Tokio</span><span class="ct">Insurance · field sales</span></div><p>AI Max coaches ~30,000 sales professionals through live roleplays with tone scoring — always-on coaching at a scale no trainer bench could match.</p><div class="cm"><div class="m"><div class="mn">20+</div><div class="ml">roleplay scenarios</div></div><div class="m"><div class="mn">30K</div><div class="ml">sales pros</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.28s"><div class="ch"><span class="cn">Meesho</span><span class="ct">Social commerce · resellers</span></div><p>2M+ resellers trained on vernacular micro-learning — product knowledge, order management and customer handling.</p><div class="cm"><div class="m"><div class="mn">+40%</div><div class="ml">sales uplift</div></div><div class="m"><div class="mn">85%</div><div class="ml">completion</div></div></div></div>
        <div class="case rise" style="--pc:#FF9518;animation-delay:.36s"><div class="ch"><span class="cn">Mahindra Holidays</span><span class="ct">Hospitality · HNI telesales</span></div><p>Exclusive vendor for telemarketing and field sales pitching ₹2–16L packages — sourced, verified and managed end to end.</p><div class="cm"><div class="m"><div class="mn">1,000+</div><div class="ml">execs today</div></div><div class="m"><div class="mn">300+</div><div class="ml">hires in 3 months</div></div></div></div>
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.44s"><div class="ch"><span class="cn">Reliance Retail</span><span class="ct">Retail · store associates</span></div><p>500K+ store associates skilled in 14 languages on the Samarth platform — interview-ready candidates and standardized onboarding.</p><div class="cm"><div class="m"><div class="mn">500K+</div><div class="ml">associates skilled</div></div><div class="m"><div class="mn">1.5L+</div><div class="ml">annual hires</div></div></div></div>
      </div>
    </div>`,
  },
  outcomeSlide('ss9', 'What one selling platform changes in your revenue math.', [
    { n: 'Weeks', what: 'Ramp time, not months', how: 'Screened by AI calls, trained by reels, rehearsed with AI Max — a rep’s first productive week moves up by a quarter.', proof: '3× faster upskilling · −60% TTH' },
    { n: '+40%', what: 'Sales uplift from trained sellers', how: 'Meesho measured it: sellers who finish training sell more. Completion is the lever — ours is 88% vs 25%.', proof: 'Meesho, measured' },
    { n: 'Live', what: 'Incentives that steer the day', how: 'The "one more sale is worth ₹X" nudge works while the customer is in the store — not in next month’s payslip.', proof: 'goBetter Incentives, per rep' },
    { n: '1', what: 'Record from hire to quota', how: 'Hiring, verification, training, attendance and incentives on one seller record — every system agrees who your best people are.', proof: 'The goBetter platform underneath' },
  ], 'Pick one region’s sales team — we’ll run hire-to-incentive on it for a quarter and report the before/after.'),
  {
    id: 'ss10', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">One region. One quarter. The whole selling lifecycle.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Coach pilot</h4><p>AI Max configured on your top two products — one region's reps roleplay for a fortnight, managers see the scores.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Hiring sprint</h4><p>Your next sales intake run through AI-call screening and 10-minute onboarding — TAT and cost benchmarked against today.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Incentives live</h4><p>One region's schemes on goBetter Incentives — live numbers in seller pockets before the next festive push.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in · Onkar Vartak — Sales · onkar.vartak@betterplace.co.in</div>
    </div>`,
  },
]

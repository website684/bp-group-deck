import type { SlideDef, DeckDef } from '../lib/types'

interface AgentSpec { name: string; role: string; desc: string; color: string; status: 'live' | 'beta' | 'soon' }
interface IndustryDef {
  id: string
  label: string
  headline: string
  sub: string
  stats: [string, string][]
  pains: { h: string; p: string }[]
  agents: AgentSpec[]
  caseHtml: string
  start: { h: string; p: string }[]
}

const agentCard = (a: AgentSpec, d: number) => `
  <div class="ag rise" style="--ac:${a.color};animation-delay:${d}s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat ${a.status}"><span class="d"></span>${a.status === 'live' ? 'Live' : a.status === 'beta' ? 'Beta' : 'Soon'}</span></div><div class="role">${a.role}</div><h4>${a.name}</h4><p>${a.desc}</p></div>`

function industrySlides(def: IndustryDef): SlideDef[] {
  return [
    {
      id: `${def.id}-1`, theme: 'dark', title: `${def.label} cover`,
      html: `
      <div class="glow"></div>
      <div class="mdcover">
        <span class="mdkicker rise" style="animation-delay:.05s">BetterPlace for ${def.label}</span>
        <h1 class="rise" style="animation-delay:.15s">${def.headline}</h1>
        <p class="sub rise" style="animation-delay:.3s">${def.sub}</p>
        <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
          ${def.stats.map(([n, l]) => `<div class="stat"><div class="n">${n}</div><div class="l">${l}</div></div>`).join('')}
        </div>
      </div>`,
    },
    {
      id: `${def.id}-2`, theme: 'light', title: 'Your frontline reality',
      html: `
      <div class="slidebody">
        <span class="eyebrow rise">Your frontline reality → what we run for it</span>
        <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">The problems on your ops review, mapped to the platform.</h2>
        <div class="cases" style="grid-template-columns:repeat(2,1fr);margin-top:16px;">
          ${def.pains.map((x, i) => `<div class="case rise" style="--pc:#1B2D93;animation-delay:${0.2 + i * 0.08}s"><div class="ch"><span class="cn">${x.h}</span></div><p>${x.p}</p></div>`).join('')}
        </div>
      </div>`,
    },
    {
      id: `${def.id}-3`, theme: 'darker', title: 'Agents for this industry',
      html: `
      <div class="slidebody">
        <span class="eyebrow rise">AI Labs · agents built for ${def.label.toLowerCase()}</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Agents that already speak <span style="color:var(--yellow)">your floor's language.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:80ch;">Configured from the same runtime in days — trained on your SOPs, embedded in WhatsApp or your app, deterministic where compliance demands it.</p>
        <div class="agents" style="margin-top:20px;">
          ${def.agents.map((a, i) => agentCard(a, 0.26 + i * 0.07)).join('')}
        </div>
      </div>`,
    },
    {
      id: `${def.id}-4`, theme: 'dark', title: 'Proof & start',
      html: `
      <div class="glow"></div>
      <div class="slidebody">
        <span class="eyebrow rise">Proof nearby · and how we'd start</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Names you know, numbers you can check.</h2>
        <div style="margin-top:16px;" class="rise">${def.caseHtml}</div>
        <div class="ctacards" style="margin-top:20px;">
          ${def.start.map((s, i) => `<div class="ctac rise" style="animation-delay:${0.4 + i * 0.08}s"><div class="num">0${i + 1}</div><h4>${s.h}</h4><p>${s.p}</p></div>`).join('')}
        </div>
      </div>`,
    },
  ]
}

const INDUSTRIES: IndustryDef[] = [
  {
    id: 'ind-retail', label: 'Retail & Q-commerce',
    headline: 'Every store staffed, trained and <span style="color:var(--yellow)">paid right</span> — festive included.',
    sub: 'High-churn store and dark-store workforces: hire in bulk, verify fast, roster tight, and gate work on training.',
    stats: [['18,918', 'Reliance Retail stores on platform'], ['967', 'Zepto sites live'], ['−60%', 'Hiring lead-time']],
    pains: [
      { h: 'Festive ramp: 300 staff in 3 weeks', p: 'Post once; AI screens overnight; recruiters meet a ranked shortlist. Offers, BGV and onboarding run on the workers’ own phones.' },
      { h: 'Attrition eats your training budget', p: 'Reels-style vernacular courses on the worker’s phone — 88% completion, and rehires keep their record and certificates.' },
      { h: 'Dark-store attendance you can’t trust', p: 'Face-verified, geo-fenced check-in with AI spoof detection — Zepto runs 15,000 workers on it across 22 cities.' },
      { h: 'Store staff don’t know today’s offers', p: 'A WhatsApp helpdesk agent answers from your merchandising docs — 24/7, in Hindi, Tamil or Telugu.' },
    ],
    agents: [
      { name: 'AI Nova', role: 'Store helpdesk', desc: 'Answers offers, returns and policy questions from your own docs — 24/7, no human handoff.', color: '#32CAD4', status: 'live' },
      { name: 'AI Mia', role: 'Rider onboarding', desc: 'Docs, ID verification and safety training — riders certified in 45 minutes, delivery gated on completion.', color: '#FF7A59', status: 'live' },
      { name: 'AI Jack', role: 'Bulk screening', desc: 'Screens festive-season applicants over WhatsApp and hands recruiters a ranked shortlist by morning.', color: '#7C6BF0', status: 'beta' },
      { name: 'AI Remy', role: 'Shrink & audit', desc: 'Runs store audit checklists with camera proof inside chat — flags gaps to the area manager.', color: '#FFC401', status: 'soon' },
      { name: 'AI Theo', role: 'Product knowledge', desc: 'Quizzes staff on new SKUs and offers each morning — two minutes, on their phones.', color: '#3DBE7B', status: 'live' },
      { name: 'AI Zara', role: 'Roster & no-shows', desc: 'Fills tomorrow’s shift gaps, chases confirmations and flags likely no-shows before they happen.', color: '#FF9518', status: 'beta' },
    ],
    caseHtml: `<div class="cases"><div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Reliance Retail</span><span class="ct">300K+ workers · 3,000+ vendors</span></div><p>One integrated system replacing manual compliance — plus 500K+ associates trained in 14 languages, live in 8 weeks.</p><div class="cm"><div class="m"><div class="mn">90%</div><div class="ml">↓ payroll leakage</div></div><div class="m"><div class="mn">60%+</div><div class="ml">↓ training cost</div></div></div></div><div class="case" style="--pc:#D0271D"><div class="ch"><span class="cn">Zepto</span><span class="ct">Quick-commerce · 22 cities</span></div><p>Spoof-proof attendance and training-gated dispatch: only certified riders deliver.</p><div class="cm"><div class="m"><div class="mn">40%</div><div class="ml">cost savings</div></div><div class="m"><div class="mn">15k</div><div class="ml">workers</div></div></div></div></div>`,
    start: [
      { h: 'Pilot one region’s stores', p: 'Attendance + training on 20 stores for one quarter — measure leakage and completion yourself.' },
      { h: 'Festive-readiness sprint', p: 'One requisition run end-to-end before your next peak: sourced, screened, verified, onboarded.' },
      { h: 'Store helpdesk agent in a week', p: 'Trained on your merchandising docs; your area managers stop being the FAQ.' },
    ],
  },
  {
    id: 'ind-mfg', label: 'Manufacturing',
    headline: 'Contract labour, <span style="color:var(--yellow)">compliant to the last challan.</span>',
    sub: 'Multi-vendor plants with real statutory exposure: spoof-proof attendance, vendor challan reconciliation and safety training with an audit trail.',
    stats: [['−80%', 'Vendor non-compliance risk'], ['−90%', 'Payroll leakage'], ['100%', 'Induction audit trail']],
    pains: [
      { h: 'Principal-employer liability is yours', p: 'When a contractor underpays PF/ESI, the exposure lands on you. Challan OCR reconciles paid vs due, worker-by-worker, every month.' },
      { h: 'Gate attendance ≠ line attendance', p: 'Face-verified, geo-fenced check-in with AI spoof detection — buddy punching ends, and payroll computes from reality.' },
      { h: 'Safety induction as paperwork', p: 'A deterministic induction agent runs every SOP step with video verification and a quiz — ISO-ready logs, no skipped steps.' },
      { h: 'Technicians’ certifications lapse silently', p: 'Role–skill mapping tracks who is certified for what; ~30% of technical certifications lapse without it. Havells trains field engineers this way.' },
    ],
    agents: [
      { name: 'AI Rhea', role: 'Safety induction', desc: 'Walks every worker through SOP steps with video verification and a quiz — deterministic, audit-ready.', color: '#3DBE7B', status: 'live' },
      { name: 'AI Cole', role: 'Contractor verification', desc: 'Face-match, OCR and API checks on every vendor worker’s documents before they enter the gate.', color: '#32CAD4', status: 'beta' },
      { name: 'AI Dev', role: 'Statutory watchdog', desc: 'Chases vendor challans, reads them by OCR and flags short-payments to the principal employer.', color: '#FFC401', status: 'beta' },
      { name: 'AI Theo', role: 'Technical tutor', desc: 'Answers machine and SOP questions in the operator’s language, citing your manuals — 4 seconds, any shift.', color: '#7C6BF0', status: 'live' },
      { name: 'AI Zara', role: 'Shift & shortfall', desc: 'Spots tomorrow’s shortfalls, messages the vendor SPOC and tracks the replacement to the gate.', color: '#FF9518', status: 'soon' },
      { name: 'AI Max', role: 'Toolbox-talk coach', desc: 'Runs supervisors through incident-response roleplays and scores clarity before they lead the real talk.', color: '#FF7A59', status: 'soon' },
    ],
    caseHtml: `<div class="cases" style="grid-template-columns:1fr;"><div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Reliance Retail (vendor model)</span><span class="ct">3,000+ vendors under one rule engine</span></div><p>The same vendor-compliance machinery manufacturing needs: challan OCR, per-vendor deployment rules and documented due diligence under contract-labour law. Havells runs multilingual technical training for field engineers on skillBetter.</p><div class="cm"><div class="m"><div class="mn">80%</div><div class="ml">↓ vendor non-compliance</div></div><div class="m"><div class="mn">90%</div><div class="ml">↓ payroll leakage</div></div></div></div></div>`,
    start: [
      { h: 'One plant, one quarter', p: 'Attendance + vendor compliance on a single plant; your CFO sees the statutory gap report in month one.' },
      { h: 'Challan health check', p: 'Last month’s vendor challans through our OCR — every short-payment and wrong UAN, itemised.' },
      { h: 'Safety agent pilot', p: 'Your induction SOP as a deterministic agent, with camera proof and certificates, in two weeks.' },
    ],
  },
  {
    id: 'ind-log', label: 'Logistics & Delivery',
    headline: 'Riders on the road in <span style="color:var(--yellow)">45 minutes</span>, not 3 days.',
    sub: 'Hyper-churn fleets across hundreds of cities: verify fast, onboard on the phone, train before dispatch, and scale gig capacity on demand.',
    stats: [['45 min', 'Rider onboarding'], ['<24 hr', 'BGV turnaround'], ['<4%', 'Gig no-show rate']],
    pains: [
      { h: 'Churn means you hire all year', p: 'WhatsApp-apply with no app install, AI screening overnight, and rehires who clear verification in minutes from the 25M-profile pool.' },
      { h: 'An unverified rider is a brand risk', p: '50K+ BGV cases a day with liveness-checked identity — Swiggy and Licious trust every worker from day one.' },
      { h: 'Untrained riders break the promise', p: 'Zepto gates order dispatch on training completion via API — only certified riders deliver against the 10-minute promise.' },
      { h: 'Demand spikes don’t wait for hiring', p: 'gigBetter deploys 1 to 500+ workers in under 24 hours, billed only on GPS-and-photo-verified tasks.' },
    ],
    agents: [
      { name: 'AI Mia', role: 'Rider onboarding', desc: 'DL photo, API verification, safety training and certificate — one WhatsApp thread, 45 minutes.', color: '#FF7A59', status: 'live' },
      { name: 'AI Cole', role: 'Instant re-verification', desc: 'Returning riders re-clear identity and records in minutes — churn stops costing you BGV fees twice.', color: '#32CAD4', status: 'beta' },
      { name: 'AI Zara', role: 'ETA & no-show', desc: 'Confirms tomorrow’s shifts, chases silent riders and flags hubs heading for a shortfall.', color: '#FF9518', status: 'beta' },
      { name: 'AI Theo', role: 'On-road helpdesk', desc: 'COD disputes, app issues, customer-refused-delivery — answered from your SOPs in the rider’s language.', color: '#3DBE7B', status: 'live' },
      { name: 'AI Jack', role: 'Fleet screening', desc: 'Screens thousands of applicants overnight and ranks them by fit, licence and locality.', color: '#7C6BF0', status: 'beta' },
      { name: 'AI Kai', role: 'Hub safety briefing', desc: 'Runs the morning safety brief as a 2-minute quiz with strikes — completion visible per hub.', color: '#FFC401', status: 'soon' },
    ],
    caseHtml: `<div class="cases"><div class="case" style="--pc:#D0271D"><div class="ch"><span class="cn">Zepto</span><span class="ct">22 cities · 967 sites</span></div><p>Attendance, dashboards and training-gated dispatch for 15,000 frontline workers.</p><div class="cm"><div class="m"><div class="mn">40%</div><div class="ml">cost savings</div></div></div></div><div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Amazon · GSF Learning Academy</span><span class="ct">E-commerce &amp; logistics</span></div><p>Role-aware learning with 222 custom audits across two business units, in multiple Indian languages.</p><div class="cm"><div class="m"><div class="mn">91%</div><div class="ml">completion vs &lt;30%</div></div></div></div></div>`,
    start: [
      { h: 'One-hub onboarding pilot', p: 'New riders onboard through AI Mia for two weeks — time each one, then compare with today.' },
      { h: 'BGV speed test', p: '50 riders, all checks, <24-hour reports — benchmarked against your current vendor.' },
      { h: 'Peak-day gig burst', p: 'Your next sale event staffed by outcome-billed gig workers with GPS-verified tasks.' },
    ],
  },
  {
    id: 'ind-bfsi', label: 'BFSI & Field Sales',
    headline: 'A sales force that’s <span style="color:var(--yellow)">coached before every call.</span>',
    sub: 'Distributed agents and field sellers: verified hiring, regulator-proof training records and AI roleplay coaching at IFFCO Tokio scale.',
    stats: [['~30,000', 'Sales pros coached by AI Max'], ['100%', 'Compliance audit trail'], ['<24 hr', 'Agent BGV TAT']],
    pains: [
      { h: 'Compliance training below 40%, regulators watching', p: 'Deterministic assessment flows take every agent through every step — 100% audit trail, exportable for the regulator.' },
      { h: 'New reps take 3 months to reach quota', p: 'AI roleplay across 20+ scenarios scores tone, empathy and accuracy — reps practise on the bot, not on customers.' },
      { h: 'Field attrition wipes out training spend', p: 'Records and certifications live on the worker profile — rehires restart in minutes, not from zero.' },
      { h: 'Who exactly is selling in your name?', p: 'Six-point BGV with liveness-checked identity and EPFO employment history on every field agent.' },
    ],
    agents: [
      { name: 'AI Max', role: 'Sales roleplay coach', desc: 'Live customer roleplays with tone and accuracy scoring — training ~30,000 sales pros at IFFCO Tokio.', color: '#FF7A59', status: 'live' },
      { name: 'AI Vera', role: 'Compliance assessor', desc: 'Runs mandatory certifications as deterministic flows — every step, every agent, regulator-ready logs.', color: '#FFC401', status: 'beta' },
      { name: 'AI Theo', role: 'Product tutor', desc: 'Policy features, exclusions and claim rules answered from your product docs, cited, in 24 languages.', color: '#3DBE7B', status: 'live' },
      { name: 'AI Jack', role: 'Advisor screening', desc: 'Screens advisor applicants over WhatsApp and ranks by fit before your branch managers meet them.', color: '#7C6BF0', status: 'beta' },
      { name: 'AI Cole', role: 'Agent verification', desc: 'Identity, address, court and credit checks on every field agent — red cases triaged on one dashboard.', color: '#32CAD4', status: 'beta' },
      { name: 'AI Kai', role: 'Pitch-of-the-week', desc: 'Pushes a 3-minute practice scenario each Monday and shows managers who’s match-fit.', color: '#FF9518', status: 'soon' },
    ],
    caseHtml: `<div class="cases" style="grid-template-columns:1fr;"><div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">IFFCO Tokio</span><span class="ct">Insurance · pan-India field sales</span></div><p>AI Max coaches ~30,000 sales professionals through live roleplays with tone scoring — and the team is building more agents on the same runtime. Mahindra Holidays runs 1,000+ HNI telesales execs sourced and managed by staffBetter.</p><div class="cm"><div class="m"><div class="mn">20+</div><div class="ml">roleplay scenarios</div></div><div class="m"><div class="mn">Always on</div><div class="ml">coaching</div></div></div></div></div>`,
    start: [
      { h: 'Roleplay pilot for one region', p: 'AI Max configured on your top two products; branch managers see scores in a fortnight.' },
      { h: 'Compliance-flow conversion', p: 'Your most audited certification rebuilt as a deterministic flow with a full trail.' },
      { h: 'Advisor onboarding funnel', p: 'Screen, verify and certify one month’s advisor intake on the platform end-to-end.' },
    ],
  },
  {
    id: 'ind-tech', label: 'Tech & Services',
    headline: 'Field engineers who <span style="color:var(--yellow)">answer from your manual</span> — in 4 seconds.',
    sub: 'Installation, repair and facility teams: verified technicians, certification tracking, and an AI tutor that knows your service manual by heart.',
    stats: [['88%', 'Training completion vs 25%'], ['35+', 'Languages'], ['<15 min', 'Content translation']],
    pains: [
      { h: 'A technician in Madurai, a manual in English', p: 'They ask in Tamil; the answer comes from YOUR service manual in 4 seconds, cited. One upload, every language.' },
      { h: 'Certifications lapse, jobs get re-done', p: 'Role–skill mapping and proctored assessments keep every engineer’s certification current — and visible.' },
      { h: 'Subcontractor techs, your brand on the doorbell', p: 'Six-point BGV plus face-verified attendance for every third-party engineer who represents you.' },
      { h: 'Service demand spikes by season', p: 'gigBetter deploys verified field workers in under 24 hours — audits, installs, activations — outcome-billed.' },
    ],
    agents: [
      { name: 'AI Theo', role: 'Service-manual tutor', desc: 'Cited answers from your manuals and SOPs, any language, 24×7 — the senior engineer who never sleeps.', color: '#3DBE7B', status: 'live' },
      { name: 'AI Rhea', role: 'Install verification', desc: 'Guides the install checklist with camera proof at each step — quality documented before the van leaves.', color: '#32CAD4', status: 'beta' },
      { name: 'AI Mia', role: 'Engineer onboarding', desc: 'Contract, ID, tools checklist and first-job briefing on the engineer’s own phone, in under an hour.', color: '#FF7A59', status: 'live' },
      { name: 'AI Max', role: 'Customer-visit coach', desc: 'Roleplays tricky doorstep conversations — upset customers, upsells — and scores the pitch.', color: '#FFC401', status: 'soon' },
      { name: 'AI Cole', role: 'Subcontractor BGV', desc: 'Verifies every third-party technician before they carry your brand into a home.', color: '#7C6BF0', status: 'beta' },
      { name: 'AI Zara', role: 'Job & roster', desc: 'Confirms tomorrow’s job list, flags overloaded engineers and chases unaccepted assignments.', color: '#FF9518', status: 'soon' },
    ],
    caseHtml: `<div class="cases"><div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Havells</span><span class="ct">Electrical manufacturing · field service</span></div><p>Technical training for field engineers — multilingual delivery, integrated with their PMS.</p><div class="cm"><div class="m"><div class="mn">PMS</div><div class="ml">integrated</div></div></div></div><div class="case" style="--pc:#32CAD4"><div class="ch"><span class="cn">Urban Company ecosystem</span><span class="ct">Services marketplace</span></div><p>Frontline service professionals verified and trained on the same platform primitives.</p><div class="cm"><div class="m"><div class="mn">25M+</div><div class="ml">verified profiles</div></div></div></div></div>`,
    start: [
      { h: 'Manual-to-tutor in a week', p: 'Your service manual becomes an AI tutor; give 50 engineers access and read the query log together.' },
      { h: 'Certification audit', p: 'Map current vs required certifications across one product line — see the lapse rate today.' },
      { h: 'One-city field pilot', p: 'Attendance, jobs and training for one service city, one quarter.' },
    ],
  },
]

export const industryDecks: DeckDef[] = INDUSTRIES.map((d) => ({
  id: d.id,
  title: d.label,
  tagline: d.sub,
  group: 'industry',
  slides: industrySlides(d),
}))

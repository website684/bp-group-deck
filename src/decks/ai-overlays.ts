export interface AIAgentChip { name: string; role: string; status: 'live' | 'beta' | 'soon' }
export interface AILever { n: string; title: string; desc: string }
export interface AIOverlayDef {
  domain: string
  headline: string
  sub: string
  levers: AILever[]
  agents: AIAgentChip[]
}

const OVERLAYS: Record<string, AIOverlayDef> = {
  'skillbetter': {
    domain: 'Learning & skilling',
    headline: 'AI that builds the course, teaches it, and proves it worked.',
    sub: 'Your team sets the brief. The agents draft, translate, tutor, proctor and chase completion — humans approve every stage.',
    levers: [
      { n: '1 afternoon', title: 'Brief → published course', desc: 'AI drafts outline, cards and quiz from your SOP; your L&D approves; translation ships it in 35+ languages the same day.' },
      { n: '10M+', title: 'Questions answered by AI Theo', desc: 'A tutor trained on your content, cited answers 24×7 — and every question becomes a signal of what to train next.' },
      { n: '99.2%', title: 'Proctoring accuracy', desc: 'Face detection with a visible strike system — certificates that survive an audit.' },
      { n: '−38%', title: 'L&D admin time', desc: 'A background agent auto-assigns, reminds, syncs and reports. Your team designs learning instead of chasing it.' },
    ],
    agents: [
      { name: 'AI Theo', role: 'Learning tutor', status: 'live' },
      { name: 'AI Max', role: 'Sales roleplay coach', status: 'live' },
      { name: 'Content studio', role: 'Course authoring', status: 'beta' },
      { name: 'Translation engine', role: '35+ languages', status: 'live' },
    ],
  },
  'hire-onboard': {
    domain: 'Hiring & onboarding',
    headline: 'AI that interviews everyone, ranks the fit, and onboards the hire.',
    sub: 'Every applicant screened the night they apply. Every joiner guided to day-one-ready without an HR chase.',
    levers: [
      { n: '30–50%', title: 'Faster time-to-hire', desc: 'Conversational screening over WhatsApp and voice — LinkedIn/McKinsey benchmark range; our funnels have hit −60%.' },
      { n: '−40%', title: 'Candidate drop-off', desc: '24/7 conversational engagement keeps applicants warm from apply to join.' },
      { n: '45 min', title: 'Rider onboarding', desc: 'AI Mia collects docs, verifies IDs via API, runs safety training and issues the certificate — one WhatsApp thread.' },
      { n: '₹5/min', title: 'Voice screening cost', desc: 'vs ₹12/min industry — screening calls stop being a call-center line item.' },
    ],
    agents: [
      { name: 'AI Jack', role: 'Talent screening', status: 'beta' },
      { name: 'AI Mia', role: 'Onboarding', status: 'live' },
      { name: 'AI Ivy', role: 'Structured interviews', status: 'soon' },
      { name: 'Match models', role: 'Fit scoring', status: 'live' },
    ],
  },
  'verify': {
    domain: 'Verification',
    headline: 'AI that reads court records, spots fake faces, and never builds a backlog.',
    sub: 'The checks that used to take interns and weeks run as models and minutes — with a human-reviewable trail on every case.',
    levers: [
      { n: '50K+', title: 'Cases a day', desc: 'NLP scans pan-India court and police records, matching identity variants and surfacing only relevant hits.' },
      { n: '99.2%', title: 'Face-match accuracy', desc: 'Liveness detection defeats printed photos and screen replays — at enrolment and every re-check.' },
      { n: 'Minutes', title: 'Identity verification', desc: 'Aadhaar, PAN and government-ID validation via API, not paperwork.' },
      { n: 'Minutes', title: 'Rehire re-verification', desc: 'Verified history on the 25M-profile layer means returning workers re-clear instantly.' },
    ],
    agents: [
      { name: 'AI Cole', role: 'Verification', status: 'beta' },
      { name: 'Court-scan NLP', role: 'Criminal checks', status: 'live' },
      { name: 'Liveness models', role: 'Identity', status: 'live' },
    ],
  },
  'attendance': {
    domain: 'Attendance & workforce management',
    headline: 'AI that verifies every punch and predicts tomorrow’s gaps.',
    sub: 'Computer vision guards the check-in; forecasting sizes the roster; prediction fills the gap before the shift opens.',
    levers: [
      { n: '18–22%', title: 'Scheduling waste cut', desc: 'Demand forecasting from sales, footfall and order signals sizes each site’s roster — MIT Sloan measured the range.' },
      { n: '15–20%', title: 'Absenteeism reduction', desc: 'Absence prediction flags likely no-shows a day ahead — IBM/Humana-scale deployments prove the lever.' },
      { n: '0', title: 'Spoofs at Zepto', desc: 'Liveness and face-match models on every punch across 967 sites; suspects route to a review queue, not payroll.' },
      { n: 'Minutes', title: 'Shortfall response', desc: 'AI Zara chases confirmations and flags hubs trending short — replacements move before the gap is real.' },
    ],
    agents: [
      { name: 'AI Zara', role: 'Roster & no-shows', status: 'beta' },
      { name: 'Spoof detection', role: 'Computer vision', status: 'live' },
      { name: 'Demand forecast', role: 'Roster sizing', status: 'soon' },
    ],
  },
  'payroll': {
    domain: 'Payroll & compliance',
    headline: 'AI that reads every challan and screens every pay run.',
    sub: 'Document AI does the statutory drudgery; anomaly models catch the outlier before it becomes a grievance or a notice.',
    levers: [
      { n: '100%', title: 'Challans OCR-read', desc: 'UANs, amounts and periods extracted from every vendor challan and reconciled worker-by-worker, monthly.' },
      { n: '−80%', title: 'Vendor non-compliance', desc: 'AI Dev flags short-payments the month they happen — documented due diligence, automatically.' },
      { n: 'Pre-run', title: 'Anomaly detection', desc: 'Each worker’s computed pay checked against history and cohort — outliers reviewed before disbursement.' },
      { n: '−90%', title: 'Payroll leakage', desc: 'Face-verified attendance in, validated pay out — the Reliance result.' },
    ],
    agents: [
      { name: 'AI Dev', role: 'Statutory watchdog', status: 'beta' },
      { name: 'Challan OCR', role: 'Document AI', status: 'live' },
      { name: 'Anomaly models', role: 'Pay-run screening', status: 'soon' },
    ],
  },
  'hris': {
    domain: 'Workforce intelligence',
    headline: 'AI that answers workforce questions in plain language.',
    sub: 'One worker record underneath means the copilot answers from truth — headcount, gaps, trends, without a BI queue.',
    levers: [
      { n: 'Seconds', title: '"Which sites trend short next week?"', desc: 'Natural-language questions over the single record, answered with the chart.' },
      { n: 'Enforced', title: 'Data quality, patrolled', desc: 'Gap detection deep-links admins to missing fields before they block payroll or BGV.' },
      { n: '0', title: 'BI headcount needed', desc: 'Embedded dashboards plus a copilot — analytics without a data-team project.' },
    ],
    agents: [
      { name: 'Workforce copilot', role: 'NL analytics', status: 'soon' },
      { name: 'Gap banners', role: 'Data quality', status: 'live' },
    ],
  },
  'staffbetter': {
    domain: 'Managed staffing',
    headline: 'AI that finds the right worker in a pool of 25 million.',
    sub: 'Matching models turn requisitions into ranked, verified shortlists — deployment starts in hours, not searches.',
    levers: [
      { n: '24–72 hr', title: 'Deployment', desc: 'Skill, proximity, wage-fit and verified history rank candidates the moment a requisition lands.' },
      { n: '40%', title: 'Faster time-to-hire', desc: 'The shortlist is ready before an agency would have opened the mandate.' },
      { n: '−15%', title: 'Attrition on deployments', desc: 'Retention signals steer matches toward workers who stay.' },
    ],
    agents: [
      { name: 'Match models', role: 'Pool ranking', status: 'live' },
      { name: 'AI Jack', role: 'Screening', status: 'beta' },
    ],
  },
  'gigbetter': {
    domain: 'On-demand gig',
    headline: 'AI that deploys 500 verified workers before tomorrow.',
    sub: 'Real-time matching by skill, proximity and rating — with no-show risk scored and backups pre-assigned.',
    levers: [
      { n: '<24 hr', title: 'Deployment at any scale', desc: '1 to 500+ workers matched from the rated pool in real time.' },
      { n: '<4%', title: 'No-show rate', desc: 'Risk models decide who needs a backup pre-assigned — before the day matters.' },
      { n: '100%', title: 'Verified outcomes', desc: 'GPS check-in and photo proof on every billed task — evidence, not claims.' },
    ],
    agents: [
      { name: 'Deployment engine', role: 'Matching', status: 'live' },
      { name: 'Risk scoring', role: 'No-show prediction', status: 'beta' },
    ],
  },
  'incentives': {
    domain: 'Sales incentives',
    headline: 'AI that builds the scheme, sets fair targets, and catches the gaming.',
    sub: 'Describe an incentive in a sentence and it becomes a working plan — simulated on last month’s real sales before a rupee is committed.',
    levers: [
      { n: '1 sentence', title: 'Scheme → working plan', desc: '"2% on watches, ₹500 per smartwatch, Diwali bonus, cap ₹40K" — the copilot builds it, you review and launch.' },
      { n: 'Fair', title: 'Targets set per person', desc: 'Targets based on what each seller actually sells — reachable, not demoralising.' },
      { n: 'Pre-launch', title: 'Cost simulated on real sales', desc: 'Run any scheme against last month’s data — see total cost and every payout before committing.' },
      { n: 'Caught', title: 'Gaming & mistakes flagged', desc: 'Split bills, month-end spikes and returns-after-payday spotted before they cost you.' },
    ],
    agents: [
      { name: 'Plan copilot', role: 'Scheme authoring', status: 'beta' },
      { name: 'File mapper', role: 'Messy CSV → clean data', status: 'live' },
      { name: 'Gaming detector', role: 'Anomaly flags', status: 'beta' },
    ],
  },
  'sales-story': {
    domain: 'Sales teams',
    headline: 'AI working every seat of your revenue team.',
    sub: 'Screening calls, roleplay coaching, mid-pitch answers, incentive copilots — the selling lifecycle runs on AI Labs agents.',
    levers: [
      { n: '30–50%', title: 'Faster seller hiring', desc: 'AI voice calls screen every applicant in their language the day they apply.' },
      { n: '30,000', title: 'Reps coached by AI Max', desc: 'Live roleplays scored on tone, empathy and accuracy — running today at IFFCO Tokio.' },
      { n: '4 sec', title: 'Mid-pitch answers', desc: 'AI Theo answers spec and policy questions from your documents while the customer is still there.' },
      { n: '1 sentence', title: 'Incentive schemes built by AI', desc: 'The plan copilot turns a description into a simulated, launch-ready scheme.' },
    ],
    agents: [
      { name: 'AI Max', role: 'Sales coach', status: 'live' },
      { name: 'AI Jack', role: 'Screening', status: 'beta' },
      { name: 'AI Theo', role: 'Product tutor', status: 'live' },
      { name: 'Plan copilot', role: 'Incentives', status: 'beta' },
    ],
  },
  'group': {
    domain: 'The whole lifecycle',
    headline: 'One AI runtime working every stage of your frontline.',
    sub: 'Hire, verify, onboard, roster, pay, train — each stage runs an AI Labs agent on the same governed runtime, feeding one worker record.',
    levers: [
      { n: '−70%', title: 'Time-to-hire', desc: 'Screening and scheduling agents work the funnel overnight.' },
      { n: '3×', title: 'Faster upskilling', desc: 'Authoring, translation and tutoring agents on your content.' },
      { n: '₹0.37', title: 'Per interaction', desc: 'Ops that used to be salaried hours become metered credits.' },
      { n: '1', title: 'Runtime to govern', desc: 'Deterministic flows, PII guardrails, token logs — one meter, one audit surface.' },
    ],
    agents: [
      { name: 'AI Mia', role: 'Onboarding', status: 'live' },
      { name: 'AI Max', role: 'Sales coach', status: 'live' },
      { name: 'AI Theo', role: 'Tutor', status: 'live' },
      { name: 'AI Jack', role: 'Screening', status: 'beta' },
      { name: 'AI Cole', role: 'Verification', status: 'beta' },
      { name: 'AI Dev', role: 'Compliance', status: 'beta' },
    ],
  },
}

export function getAIOverlay(deckId: string): AIOverlayDef {
  if (OVERLAYS[deckId]) return OVERLAYS[deckId]
  if (deckId === 'gobetter') return OVERLAYS['group']
  if (deckId.startsWith('ind-')) return OVERLAYS['group']
  return OVERLAYS['group']
}

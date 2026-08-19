import type { SlideDef } from '../lib/types'

// A first-principles BetterPlace story created for a sophisticated investor reader.
// Ravi is explicitly an illustrative composite; customer outcomes are labelled as proof.

const src = (text: string) => `<div class="nk-src">Source: ${text}</div>`

const tracker = (active: number) => {
  const steps = ['Find work', 'Verify', 'Join', 'Show up', 'Get paid', 'Grow']
  return `<div class="nk-track">${steps.map((step, i) => `<span class="${i < active ? 'done' : ''}${i === active ? 'active' : ''}"><i></i>${step}</span>`).join('')}</div>`
}

type JourneyArgs = {
  id: string
  title: string
  eyebrow: string
  active: number
  workerTitle: string
  workerLines: string[]
  employerTitle: string
  employerLines: string[]
  outcome: string
  outcomeLabel: string
  proof: string
  source: string
}

const journey = (a: JourneyArgs): SlideDef => ({
  id: a.id,
  theme: 'light',
  title: a.title,
  html: `
    <div class="slidebody nk-page">
      ${tracker(a.active)}
      <span class="eyebrow rise">${a.eyebrow}</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:38ch;">${a.title}</h2>
      <div class="nk-dual rise" style="animation-delay:.18s;">
        <section class="nk-side worker">
          <div class="nk-side-label"><i></i>Ravi's view</div>
          <h3>${a.workerTitle}</h3>
          <ul>${a.workerLines.map((x) => `<li>${x}</li>`).join('')}</ul>
        </section>
        <div class="nk-bridge"><span>one worker<br/>record</span><i>→</i></div>
        <section class="nk-side employer">
          <div class="nk-side-label"><i></i>Employer view</div>
          <h3>${a.employerTitle}</h3>
          <ul>${a.employerLines.map((x) => `<li>${x}</li>`).join('')}</ul>
        </section>
      </div>
      <div class="nk-outcome rise" style="animation-delay:.32s;">
        <div><span>${a.outcomeLabel}</span><b>${a.outcome}</b></div>
        <p>${a.proof}</p>
      </div>
      ${src(a.source)}
    </div>`,
})

export const nkInvestorStorySlides: SlideDef[] = [
  {
    id: 'nki1', theme: 'darker', title: 'The question',
    html: `
    <div class="glow"></div>
    <div class="slidebody nk-cover">
      <span class="eyebrow rise">BetterPlace · a first-principles view</span>
      <h1 class="rise" style="animation-delay:.1s;">What changes when India's frontline workforce gets a <span>system of record?</span></h1>
      <p class="rise" style="animation-delay:.24s;">One worker. One month. Three businesses sharing the same identity layer. This is the simplest way to understand BetterPlace.</p>
      <div class="nk-cover-proof rise" style="animation-delay:.38s;">
        <div><b>25M+</b><span>verified worker profiles</span></div>
        <div><b>1,100+</b><span>enterprise relationships</span></div>
        <div><b>500+</b><span>cities</span></div>
        <div><b>2015</b><span>year founded</span></div>
      </div>
      ${src('BetterPlace company overview and operating data, Jul-Aug 2026.')}
    </div>`,
  },
  {
    id: 'nki2', theme: 'dark', title: 'The missing infrastructure',
    html: `
    <div class="slidebody nk-page">
      <span class="eyebrow rise">Start with the gap, not the product</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:38ch;">India digitised the consumer. <span style="color:var(--yellow)">It did not digitise the worker serving them.</span></h2>
      <div class="nk-tension rise" style="animation-delay:.2s;">
        <div class="person">
          <span class="nk-avatar">RK</span>
          <h3>For the worker</h3>
          <p>No portable identity. No trusted work history. Every new job starts from zero.</p>
        </div>
        <div class="gap"><b>THE GAP</b><span>identity · trust · workflow</span></div>
        <div class="company">
          <span class="nk-building">▦</span>
          <h3>For the employer</h3>
          <p>High-volume hiring, fragmented vendors, unverifiable attendance and compliance exposure.</p>
        </div>
      </div>
      <div class="nk-thesis rise" style="animation-delay:.34s;">BetterPlace is the shared infrastructure between these two sides.</div>
      ${src('BetterPlace buyer-pain research; platform and customer operating reviews.')}
    </div>`,
  },
  {
    id: 'nki3', theme: 'darker', title: 'The recurring market',
    html: `
    <div class="glow"></div>
    <div class="slidebody nk-page">
      <span class="eyebrow rise">Why this is a recurring market, not a one-time workflow</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:39ch;">A frontline seat can be filled once. <span style="color:var(--yellow)">The workforce has to be rebuilt continuously.</span></h2>
      <div class="nk-decay rise" style="animation-delay:.22s;">
        ${[['Jan','100'],['Feb','75'],['Mar','56'],['Apr','42'],['May','32'],['Jun','24']].map(([m,v],i) => `<div><span>${m}</span><i style="--h:${v}%;--d:${.25+i*.1}s"></i><b>${v}</b></div>`).join('')}
      </div>
      <div class="nk-thesis rise" style="animation-delay:.38s;">At a 3.5-month average rider tenure, the same enterprise demand returns roughly three times a year. Hiring is only the first transaction.</div>
      ${src('Illustrative cohort math using the 3.5-month delivery-partner tenure cited in BetterPlace source materials.')}
    </div>`,
  },
  {
    id: 'nki4', theme: 'light', title: 'Three businesses, one compounding asset',
    html: `
    <div class="slidebody nk-page">
      <span class="eyebrow rise">The company in one picture</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:39ch;">Three revenue engines share <span style="color:var(--navy)">one worker-intelligence layer.</span></h2>
      <div class="nk-engines rise" style="animation-delay:.2s;">
        <div><span>Software</span><h3>goBetter</h3><p>Hire, verify, onboard, attend, train, pay and manage.</p><b>SaaS + usage</b></div>
        <div><span>Managed workforce</span><h3>staffBetter</h3><p>Full-time staffing and employer-of-record compliance.</p><b>Recurring service revenue</b></div>
        <div><span>On-demand workforce</span><h3>gigBetter</h3><p>Workers deployed against measurable tasks and outcomes.</p><b>Outcome-based revenue</b></div>
      </div>
      <div class="nk-core rise" style="animation-delay:.34s;"><b>25M+ verified worker profiles</b><span>Every hire, check, shift, payslip and certificate makes the next match faster and more trustworthy.</span></div>
      ${src('BetterPlace company overview; staffBetter and gigBetter operating model.')}
    </div>`,
  },
  {
    id: 'nki5', theme: 'darker', title: 'Meet Ravi',
    html: `
    <div class="glow"></div>
    <div class="slidebody nk-page">
      <span class="eyebrow rise">An illustrative composite · built from real product workflows</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:38ch;">Meet Ravi. <span style="color:var(--yellow)">The market wants his labour. It cannot yet trust his record.</span></h2>
      <div class="nk-ravi rise" style="animation-delay:.2s;">
        <div class="nk-ravi-id"><span>RK</span><h3>Ravi Kumar, 23</h3><p>New to Bengaluru · owns a bike · speaks Hindi · no CV · no references</p></div>
        <div class="nk-wants">
          <p><b>Quick commerce</b><span>needs riders tonight</span></p>
          <p><b>Warehousing</b><span>needs seasonal workers</span></p>
          <p><b>Retail</b><span>needs store associates</span></p>
          <p><b>Field sales</b><span>needs verified feet on street</span></p>
        </div>
      </div>
      <div class="nk-thesis rise" style="animation-delay:.34s;">The next six slides show the same event twice: what Ravi experiences, and what the enterprise controls.</div>
      ${src('Illustrative composite; BetterPlace Hire, Verify, Onboard, Attend, Payroll and skillBetter workflows.')}
    </div>`,
  },
  journey({
    id: 'nki6', active: 0, eyebrow: 'Day 1 · find work',
    title: 'Ravi sees a nearby job. The employer sees a ranked funnel.',
    workerTitle: 'One tap, no CV, in his language',
    workerLines: ['Roles ranked by fit, pay and distance', 'WhatsApp or mobile application', 'Voice screening in Hindi after hours'],
    employerTitle: 'A live pipeline instead of recruiter callbacks',
    employerLines: ['Role- and city-level requisitions', 'AI-ranked candidates against a rubric', 'Stage conversion, source and turnaround analytics'],
    outcomeLabel: 'Business change', outcome: '~60% faster time-to-hire',
    proof: 'The candidate does less paperwork. The recruiter spends time only where judgment is needed.',
    source: 'BetterPlace Hire product knowledge; AI voice-screening deployment benchmarks.',
  }),
  journey({
    id: 'nki7', active: 1, eyebrow: 'Night 1 · establish trust',
    title: 'Ravi completes one digital check. The employer gets a risk portfolio.',
    workerTitle: 'One identity flow, not four office visits',
    workerLines: ['Government-ID validation and face match', 'Role-specific check pack', 'A reusable verification record'],
    employerTitle: 'Red, yellow and green across the whole workforce',
    employerLines: ['Portfolio-level risk and progress view', 'Case-level court, address and ID evidence', 'Dated, downloadable audit trail'],
    outcomeLabel: 'Operating proof', outcome: '50K+ daily · <24 hr average TAT',
    proof: 'Verification becomes infrastructure: high-volume, configurable and visible.',
    source: 'verifyBetter product knowledge and live-platform review, 22 Jul 2026.',
  }),
  journey({
    id: 'nki8', active: 2, eyebrow: 'Day 2 · join',
    title: 'Ravi joins from his phone. The employer gets a payroll-ready record.',
    workerTitle: 'Documents, bank details and e-sign in one flow',
    workerLines: ['Language-first mobile journey', 'No photocopies or office visit', 'Resumable application tied to his phone'],
    employerTitle: 'One status view for every joiner',
    employerLines: ['Document and approval bottlenecks visible', 'Bulk onboarding for large batches', 'Verified data flows into HR and payroll'],
    outcomeLabel: 'Worker outcome', outcome: 'Under 10 minutes self-serve',
    proof: 'The benefit is not a faster form. It is the removal of re-entry between systems.',
    source: 'BetterPlace Onboard product knowledge; Subway applicant prototype review.',
  }),
  journey({
    id: 'nki9', active: 3, eyebrow: 'Day 3 · show up',
    title: 'Ravi proves he is present. The employer sees the workforce live.',
    workerTitle: 'His face and location become the punch card',
    workerLines: ['Geo-fenced check-in at the right site', 'Liveness prevents photo spoofing', 'Shift and attendance history on his phone'],
    employerTitle: 'Present, absent and suspicious - by site',
    employerLines: ['Live site-level attendance', 'Possible-spoof and exception queues', 'Rosters, approvals and policy rules in one system'],
    outcomeLabel: 'Customer proof', outcome: 'Zepto: 15K workers · 967 sites · 40% cost saving',
    proof: 'Attendance stops being a register. It becomes the trusted input for payroll.',
    source: 'Zepto deployment; BetterPlace Attendance live-platform review, 22 Jul 2026.',
  }),
  journey({
    id: 'nki10', active: 4, eyebrow: 'Day 30 · get paid',
    title: 'Ravi sees every rupee. The employer sees every liability.',
    workerTitle: 'Salary, incentives and deductions explained',
    workerLines: ['Pay tied to verified shifts', 'Payslip and payment trail', 'Incentive progress before payday'],
    employerTitle: 'Payroll plus vendor compliance control',
    employerLines: ['Attendance-to-payroll computation', 'PF and ESI challan OCR', 'Worker-by-worker reconciliation and exceptions'],
    outcomeLabel: 'Customer proof', outcome: 'Reliance: -90% leakage · -80% vendor non-compliance',
    proof: 'The worker gets clarity. The principal employer gets evidence before the audit.',
    source: 'Reliance Retail deployment; BetterPlace payroll and compliance knowledge.',
  }),
  journey({
    id: 'nki11', active: 5, eyebrow: 'Month 2 · grow',
    title: 'Ravi learns between shifts. The employer sees readiness, not logins.',
    workerTitle: 'Short, local-language learning that unlocks work',
    workerLines: ['Reel-style lessons and assessments', 'Certificates attached to his profile', 'Role-based journeys and recognition'],
    employerTitle: 'A measurable readiness layer',
    employerLines: ['Assignment, completion and assessment governance', 'Training can gate deployment', 'AI translation and roleplay at scale'],
    outcomeLabel: 'Platform proof', outcome: '88% completion vs 25% traditional LMS',
    proof: 'Learning is valuable when it changes who can be deployed, retained and trusted.',
    source: 'skillBetter operating data; Zepto, Meesho, Reliance Retail and IFFCO Tokio deployments.',
  }),
  {
    id: 'nki12', theme: 'light', title: 'The compounding loop',
    html: `
    <div class="slidebody nk-page">
      <span class="eyebrow rise">The asset under the products</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:40ch;">The record gets more useful each time Ravi works.</h2>
      <div class="nk-flywheel rise" style="animation-delay:.2s;">
        <div class="credential"><span>VERIFIED WORKER</span><h3>Ravi Kumar</h3><p>Identity ✓ · 52 shifts · 98.2% on-time · 3 certificates · PF trail</p></div>
        <div class="wheel">
          <span>better match</span><i>→</i><span>faster verification</span><i>→</i><span>lower hiring cost</span><i>→</i><span>more work history</span>
        </div>
      </div>
      <div class="nk-thesis rise" style="animation-delay:.34s;">The moat is not a database of phone numbers. It is a verified sequence of work events that improves the next transaction for both sides.</div>
      ${src('BetterPlace worker-profile architecture and hire-to-rehire model.')}
    </div>`,
  },
  {
    id: 'nki13', theme: 'darker', title: 'AI is the operating leverage',
    html: `
    <div class="glow"></div>
    <div class="slidebody nk-page">
      <span class="eyebrow rise">AI, without the theatre</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:38ch;">Agents do the repetitive work. <span style="color:var(--yellow)">Rules keep the consequential work deterministic.</span></h2>
      <div class="nk-ai rise" style="animation-delay:.2s;">
        <div><span>01</span><h3>Converse</h3><p>Screen, explain and support in 24 languages.</p></div>
        <div><span>02</span><h3>Execute</h3><p>Collect documents, call APIs and write back to systems.</p></div>
        <div><span>03</span><h3>Govern</h3><p>Mandatory steps run in order; every action is logged.</p></div>
        <div><span>04</span><h3>Learn</h3><p>Each interaction adds structured data to the worker record.</p></div>
      </div>
      <div class="nk-ai-math rise" style="animation-delay:.34s;"><b>₹0.37</b><span>example chat interaction</span><b>₹5/min</b><span>directed voice pricing</span><b>10 min</b><span>to configure a new agent</span><b>private</b><span>deployment and guardrails</span></div>
      ${src('BetterPlace AI Labs pricing and architecture notes, Jul 2026. Pricing is configuration-dependent.')}
    </div>`,
  },
  {
    id: 'nki14', theme: 'light', title: 'Proof across the loop',
    html: `
    <div class="slidebody nk-page">
      <span class="eyebrow rise">Evidence beats feature breadth</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:38ch;">Different customers validate different parts of the same system.</h2>
      <div class="nk-proof rise" style="animation-delay:.2s;">
        <div><h3>Reliance Retail</h3><section><p>300K+ workers · 3,000+ vendors</p><span><b>-90%</b> payroll leakage</span><span><b>-80%</b> vendor non-compliance</span></section></div>
        <div><h3>Zepto</h3><section><p>15K workers · 967 sites · 22 cities</p><span><b>40%</b> cost saving</span><span>Training gates deployment</span></section></div>
        <div><h3>IFFCO Tokio</h3><section><p>~30K sales professionals</p><span>AI roleplay coaching live</span><span>Structured scoring at scale</span></section></div>
        <div><h3>Meesho</h3><section><p>2M+ resellers trained</p><span><b>85%</b> completion</span><span><b>+19.7%</b> WoW retention</span></section></div>
      </div>
      ${src('BetterPlace proof-point repository and customer deployment records.')}
    </div>`,
  },
  {
    id: 'nki15', theme: 'dark', title: 'The business underneath',
    html: `
    <div class="slidebody nk-page">
      <span class="eyebrow rise">The investor lens</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:42ch;">The story matters because there is a scaled operating business underneath it.</h2>
      <div class="nk-scale rise" style="animation-delay:.2s;">
        <div><b>$105M+</b><span>annual gross revenue<br/>staffing arm alone</span></div>
        <div><b>40K+</b><span>workers managed<br/>per month</span></div>
        <div><b>&gt;95%</b><span>client retention<br/>in staffing</span></div>
        <div><b>8</b><span>markets across<br/>India, SEA and GCC</span></div>
      </div>
      <div class="nk-tests rise" style="animation-delay:.34s;">
        <span>What compounds?</span><b>Verified worker history</b>
        <span>What cross-sells?</span><b>Software ↔ staffing ↔ gig</b>
        <span>What creates leverage?</span><b>AI agents on shared workflows</b>
        <span>What must be underwritten next?</span><b>Segment margins, software mix and cohort economics</b>
      </div>
      ${src('BetterPlace company overview; staffBetter operating data. Margin and profitability data are not asserted in this deck.')}
    </div>`,
  },
  {
    id: 'nki16', theme: 'darker', title: 'The answer',
    html: `
    <div class="glow"></div>
    <div class="slidebody nk-close">
      <span class="eyebrow rise">The answer to the opening question</span>
      <h1 class="rise" style="animation-delay:.1s;">A worker record becomes infrastructure when <span>both sides keep returning to it.</span></h1>
      <p class="rise" style="animation-delay:.24s;">BetterPlace is building that return loop: find work, establish trust, run the shift, explain the pay, improve the next match.</p>
      <div class="nk-final rise" style="animation-delay:.38s;"><b>25M+ records today</b><i>→</i><b>the operating system for India's frontline economy</b></div>
      ${src('BetterPlace company thesis and operating data, Aug 2026.')}
    </div>`,
  },
]

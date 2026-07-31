import type { SlideDef } from '../lib/types'
import { bframe, fi, icons, outcomeSlide } from './html'

export const aasaanjobsSlides: SlideDef[] = [
  {
    id: 'aj1', theme: 'dark', title: 'Aasaanjobs cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">Aasaanjobs · frontline workforce solutions · a BetterPlace company</span>
      <h1 class="rise" style="animation-delay:.15s">23,000 people on our payroll, <span style="color:var(--yellow)">working for you.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">India's leading technology platform for staffing and workforce management — we recruit, onboard, pay and support your frontline workforce end to end, and carry the compliance so you don't.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">23,000+</div><div class="l">Outsourced manpower, live</div></div>
        <div class="stat"><div class="n">25+</div><div class="l">Cities · 6,000+ pin codes</div></div>
        <div class="stat"><div class="n">&gt;95%</div><div class="l">Client retention</div></div>
        <div class="stat"><div class="n">3–4K</div><div class="l">Joinings every month</div></div>
      </div>
      <div class="mdcover ghost">AJ</div>
    </div>`,
  },
  {
    id: 'aj2', theme: 'light', title: 'The BetterPlace ecosystem',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Company overview · the BetterPlace ecosystem</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:32ch;">Part of Asia's largest frontline <span style="color:var(--navy)">workforce platform.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:8px;max-width:96ch;">Aasaanjobs is the staffing arm of BetterPlace — so every worker we deploy runs on the same technology that manages millions of frontline workers for Asia's largest enterprises.</p>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:16px;animation-delay:.24s">
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">goBetter · Platform</span></div><p><b>The software layer.</b> Background verification, onboarding, attendance, payroll &amp; compliance — the HRMS suite our deployments run on.</p></div>
        <div class="case" style="--pc:#FFC401"><div class="ch"><span class="cn">Aasaanjobs · Staffing</span></div><p><b>This deck.</b> End-to-end staffing — recruitment, onboarding and payroll management. 23,000+ outsourced manpower, pan-India.</p></div>
        <div class="case" style="--pc:#32CAD4"><div class="ch"><span class="cn">OkayGo · Gig</span></div><p><b>The flex layer.</b> On-demand blue and grey-collar gig staffing — quick deployment for dynamic, seasonal needs.</p></div>
      </div>
      <div class="modelrow rise" style="animation-delay:.4s;margin-top:18px;">
        <div class="mstat"><div class="n">30M+</div><div class="l">Frontline workers served</div></div>
        <div class="mstat"><div class="n">1,100+</div><div class="l">Enterprise partners</div></div>
        <div class="mstat"><div class="n">India &amp; SEA</div><div class="l">Geographic coverage</div></div>
        <div class="mstat"><div class="n">2015</div><div class="l">Founded · HQ Bengaluru</div></div>
      </div>
    </div>`,
  },
  {
    id: 'aj3', theme: 'light', title: 'Who we are',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Who we are · end-to-end lifecycle</span>
        <h2 class="rise" style="animation-delay:.08s;">Recruitment to retirement, <span style="color:var(--navy)">one partner.</span></h2>
        <div class="featlist">
          ${fi(icons.search, 'Pan-India recruitment', 'Multi-channel sourcing — job boards, 160+ partner agencies, in-house recruiters and job fairs — feeding a 20M+ candidate database.', 0.24)}
          ${fi(icons.doc, 'Digital onboarding', 'Paperless KYC and document collection on the MYHR app — offer letter to appointment letter without a single courier.', 0.32)}
          ${fi(icons.map, 'Geo-fenced attendance', 'Workers mark attendance inside a geo-fence on their own phone — presence you can trust before payroll runs.', 0.40)}
          ${fi(icons.shield, 'Compliance & payroll, 100% automated', 'PF, ESIC, LWF, PT filed on schedule with a 97%+ compliance score — and every payslip on the worker’s phone.', 0.48)}
          ${fi(icons.users, 'Grievance redressal that answers', '94% of tickets resolved within SLA; first response in 8h 35m on average — workers stay because someone picks up.', 0.56)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${bframe('assets/product/aasaanjobs/client-logos.jpg', 'Trusted by industry leaders', 'Amazon · Flipkart · DMart · Nykaa · Nestlé · Reliance · SBI · MakeMyTrip and more — <b>&gt;95% stay with us</b>')}
        <div class="stats" style="margin-top:18px;gap:16px 28px;">
          <div class="stat"><div class="n">70+</div><div class="l">Dedicated recruiters</div></div>
          <div class="stat"><div class="n">3–4K</div><div class="l">Monthly joinings</div></div>
          <div class="stat"><div class="n">20M+</div><div class="l">Candidate database</div></div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'aj4', theme: 'light', title: 'Service portfolio',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Our services · talent discovery to workforce management</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">We find them. We employ them. <span style="color:var(--navy)">You direct the work.</span></h2>
      <div class="cases rise" style="grid-template-columns:1fr 1fr;margin-top:16px;animation-delay:.22s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Recruitment · talent acquisition</span></div>
          <p><b>End-to-end hiring lifecycle.</b> Multi-channel sourcing across job boards, a 160+ agency partner network and our in-house team · AI-powered screening with recruiter review · automated interview scheduling with calling and attendance marking.</p>
          <div class="cm"><div class="m"><div class="mn">70+</div><div class="ml">recruiters</div></div><div class="m"><div class="mn">3–4K</div><div class="ml">monthly joinings</div></div><div class="m"><div class="mn">20M+</div><div class="ml">candidate DB</div></div></div>
        </div>
        <div class="case" style="--pc:#FFC401">
          <div class="ch"><span class="cn">Employment · workforce management</span></div>
          <p><b>Contractual staffing on our payroll.</b> Digital onboarding and KYC via the MYHR app · payrolling and statutory compliance, fully automated · ticket-based grievance redressal with a quick-response team.</p>
          <div class="cm"><div class="m"><div class="mn">100%</div><div class="ml">payroll automation</div></div><div class="m"><div class="mn">90%</div><div class="ml">offer letters in 1 day</div></div><div class="m"><div class="mn">8h 35m</div><div class="ml">first response</div></div></div>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.42s">One contract covers both — <b>seamless integration, full compliance, rapid deployment.</b></div>
    </div>`,
  },
  {
    id: 'aj5', theme: 'dark', title: 'Profiles we serve',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Market coverage · profiles we serve</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:32ch;">Deep where frontline attrition hurts most: <span style="color:var(--yellow)">sales &amp; logistics.</span></h2>
      <div class="ajmix rise" style="animation-delay:.2s">
        <div class="ajrow"><span class="lb">Sales / Business Dev</span><span class="ajbar"><i style="--w:74.6%;--bc:#FFC401;--d:.35s"></i></span><span class="pc">37.3%</span></div>
        <div class="ajrow"><span class="lb">Logistics &amp; Last Mile</span><span class="ajbar"><i style="--w:66.6%;--bc:#FF9518;--d:.5s"></i></span><span class="pc">33.3%</span></div>
        <div class="ajrow"><span class="lb">In-Store Promoters</span><span class="ajbar"><i style="--w:18.2%;--bc:#32CAD4;--d:.65s"></i></span><span class="pc">9.1%</span></div>
        <div class="ajrow"><span class="lb">Fulfilment Centres</span><span class="ajbar"><i style="--w:13.4%;--bc:#7C6BF0;--d:.8s"></i></span><span class="pc">6.7%</span></div>
        <div class="ajrow"><span class="lb">Telecalling &amp; BPO</span><span class="ajbar"><i style="--w:11.8%;--bc:#3DBE7B;--d:.95s"></i></span><span class="pc">5.9%</span></div>
        <div class="ajrow"><span class="lb">Marketing &amp; others</span><span class="ajbar"><i style="--w:15.6%;--bc:#8A93B8;--d:1.1s"></i></span><span class="pc">7.8%</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));"><b>70.6% of our book is sales &amp; logistics</b> — the two highest-churn frontline categories. If we can retain there, we can retain anywhere.</div>
    </div>`,
  },
  {
    id: 'aj6', theme: 'light', title: 'Technology stack',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Technology-enabled delivery · three surfaces</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:32ch;">A screen for the candidate, the client <span style="color:var(--navy)">and the worker.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:16px;animation-delay:.22s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Job board platform</span></div>
          <p><b>Where candidates come from.</b> 2–5M job seekers a month · 20M+ candidate database · 160+ recruitment agency partners · regular pan-India job fairs.</p>
        </div>
        <div class="case" style="--pc:#FFC401">
          <div class="ch"><span class="cn">Client dashboard</span></div>
          <p><b>What you see.</b> Real-time compliance &amp; performance analytics · PF / ESIC / LWF / PT challans · monthly paysheets and master MIS · alerts on upcoming offers and compliance.</p>
        </div>
        <div class="case" style="--pc:#32CAD4">
          <div class="ch"><span class="cn">MYHR employee app</span></div>
          <p><b>What workers hold.</b> Digital onboarding &amp; KYC · salary slips and offer letters · geo-fenced attendance · ticket-based grievance redressal.</p>
        </div>
      </div>
      <div class="modelrow rise" style="animation-delay:.4s;margin-top:18px;">
        <div class="mstat"><div class="n">AI-powered</div><div class="l">Screening &amp; matching</div></div>
        <div class="mstat"><div class="n">Cloud</div><div class="l">Nothing to install</div></div>
        <div class="mstat"><div class="n">Secure</div><div class="l">Worker data protected</div></div>
        <div class="mstat"><div class="n">Real-time</div><div class="l">Compliance visibility</div></div>
      </div>
    </div>`,
  },
  {
    id: 'aj7', theme: 'dark', title: 'Recruitment process',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Our process · requirement to joining</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">Six steps. Seven to fourteen days. <span style="color:var(--yellow)">No black box.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(6,1fr);margin-top:22px;">
        <div class="rstage"><div class="rn">01</div><h4>Requirement</h4><ul><li>Role specs &amp; locations</li><li>Raised on the platform</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Sourcing</h4><ul><li>Job boards + 160+ agencies</li><li>Job fairs &amp; campaigns</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>AI screening</h4><ul><li>Auto-filters on every CV</li><li>Recruiter review on top</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Interviews</h4><ul><li>Automated calling</li><li>Attendance marked</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Offer</h4><ul><li>Auto-generated letters</li><li>90% sent within 1 day</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Joining</h4><ul><li>Digital KYC on MYHR</li><li>Straight into payroll</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Average turnaround: <b>7–14 days from requirement to joining</b> — and you watch every stage move on the dashboard.</div>
    </div>`,
  },
  {
    id: 'aj8', theme: 'light', title: 'Pan-India presence',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Geographic reach · pan-India</span>
        <h2 class="rise" style="animation-delay:.08s;">One partner from metro to <span style="color:var(--navy)">tier-3 town.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Expansion shouldn't mean a new vendor hunt in every city. We operate in 25+ cities across 6,000+ pin codes — one contract, one SLA, one dashboard, wherever the site is.</p>
        <div class="stats rise" style="animation-delay:.3s;margin-top:22px;gap:18px 34px;">
          <div class="stat"><div class="n">25+</div><div class="l">Operational cities</div></div>
          <div class="stat"><div class="n">6,000+</div><div class="l">Pin codes covered</div></div>
          <div class="stat"><div class="n">13 / 12</div><div class="l">Cities north-west / east-south</div></div>
        </div>
      </div>
      <div class="prodpanel rise" style="animation-delay:.35s">
        <div class="pminihead">Key metros · live operations</div>
        <div class="tags">
          <span class="tag hot">Delhi NCR</span><span class="tag hot">Mumbai</span><span class="tag hot">Bengaluru</span><span class="tag hot">Chennai</span><span class="tag hot">Hyderabad</span><span class="tag hot">Pune</span><span class="tag hot">Kolkata</span><span class="tag hot">Ahmedabad</span>
        </div>
        <div class="pminihead" style="margin-top:18px;">Depth of coverage</div>
        <div class="tags">
          <span class="tag">Tier-1 · 8 metros</span><span class="tag">Tier-2 · 12 cities</span><span class="tag">Tier-3 · 5+ cities</span>
        </div>
        <div class="clientline">Recruiters, IR support and compliance ops in every major hub — not just a sourcing desk</div>
      </div>
    </div>`,
  },
  {
    id: 'aj9', theme: 'light', title: 'Onboarding to payroll',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Operational excellence · day one to salary day</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:32ch;">From offer letter to salary credit, <span style="color:var(--navy)">one straight line.</span></h2>
      <div class="cases rise" style="grid-template-columns:1fr 1fr;margin-top:16px;animation-delay:.22s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Onboarding</span></div>
          <p><b>1 · Offer letter</b> — auto-generated on standard templates, 90% within a day.<br/><b>2 · Salary structure</b> — client CTC checked for minimum-wage adherence by the compliance team before approval.<br/><b>3 · Documents</b> — KYC on the MYHR app; appointment letter issues the moment verification and salary approval clear.</p>
        </div>
        <div class="case" style="--pc:#FFC401">
          <div class="ch"><span class="cn">Payroll</span></div>
          <p><b>1 · Attendance cycle</b> — you define the cycle and salary date; payroll follows it.<br/><b>2 · Calculation</b> — computed from attendance, week-offs and leave policy; pay sheet shared for your approval.<br/><b>3 · Invoice &amp; payment</b> — invoice raised on approval; workers get a real-time salary-credit notification with UTR.</p>
        </div>
      </div>
      <div class="modelrow rise" style="animation-delay:.42s;margin-top:18px;">
        <div class="mstat"><div class="n">97%+</div><div class="l">Compliance score</div></div>
        <div class="mstat"><div class="n">100%</div><div class="l">Payroll automation</div></div>
        <div class="mstat"><div class="n">90%</div><div class="l">Offer letters in 1 day</div></div>
        <div class="mstat"><div class="n">UTR</div><div class="l">Real-time salary confirmation</div></div>
      </div>
    </div>`,
  },
  outcomeSlide('aj10', 'The numbers a staffing partner should be judged on.', [
    { n: '>95%', what: 'Client retention', how: 'Clients who start with us stay with us — the only staffing metric that can’t be gamed, because it’s voted with renewals.', proof: 'Across 1,100+ enterprise relationships' },
    { n: '>60%', what: 'Vacancies filled', how: 'An industry-leading fill rate on ~4,600 offers generated a month — requirement to joining in 7–14 days.', proof: '~2,500 successful onboardings monthly' },
    { n: '94%', what: 'Grievances resolved in SLA', how: 'Ticket-based redressal on the MYHR app with a quick-response team — first response in 8h 35m, 78% resolved on the first attempt.', proof: '18-working-hour SLA, measured' },
    { n: '97%+', what: 'Compliance score', how: 'PF, ESIC, LWF and PT filed on schedule with real-time challans on your dashboard — 100% payroll automation underneath.', proof: 'Statutory audit trail, always current' },
  ], 'Ask your current staffing vendor for these four numbers — then ask us for ours in writing.'),
  {
    id: 'aj11', theme: 'light', title: 'Compliance & grievance',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Compliance &amp; support · at scale</span>
        <h2 class="rise" style="animation-delay:.08s;">Statutory adherence you can <span style="color:var(--navy)">watch live.</span></h2>
        <div class="featlist">
          ${fi(icons.shield, 'PF / ESIC', 'Complete filings with real-time challans visible on your dashboard — not a quarterly surprise.', 0.24)}
          ${fi(icons.doc, 'LWF & Professional Tax', 'State-wise slabs, filings and deposits handled across every state you operate in.', 0.32)}
          ${fi(icons.check, 'Minimum wage, verified', 'Every salary structure checked against state and skill-level wage floors before payroll ever runs.', 0.40)}
          ${fi(icons.users, 'IR support on the ground', 'Industrial-relations support across all major hubs — with weekly, biweekly or monthly payroll cycles to match your operation.', 0.48)}
        </div>
      </div>
      <div class="prodpanel rise" style="animation-delay:.35s">
        <div class="pminihead">Grievance management · measured</div>
        <div class="stats" style="margin-top:14px;gap:16px 26px;">
          <div class="stat"><div class="n">8h 35m</div><div class="l">First response</div></div>
          <div class="stat"><div class="n">14h 25m</div><div class="l">Avg. resolution</div></div>
          <div class="stat"><div class="n">78%</div><div class="l">First-attempt resolution</div></div>
          <div class="stat"><div class="n">89%</div><div class="l">Within 18-hr SLA</div></div>
        </div>
        <div class="pminihead" style="margin-top:18px;">How a ticket moves</div>
        <div class="tags">
          <span class="tag hot">1 · Worker raises it on MYHR</span><span class="tag hot">2 · Quick Response Team notified</span><span class="tag hot">3 · Closed with worker confirmation</span>
        </div>
        <div class="clientline">A workforce that gets answers is a workforce that stays — grievance speed is a retention lever, not a cost centre</div>
      </div>
    </div>`,
  },
  {
    id: 'aj12', theme: 'darker', title: 'Why Aasaanjobs',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Partner with us</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Why teams choose Aasaanjobs — <span style="color:var(--yellow)">and stay.</span></h2>
      <div class="ctacards" style="margin-top:22px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Scale &amp; speed</h4><p>23,000+ outsourced manpower across 25+ cities and 6,000+ pin codes — 3–4,000 joinings a month, offers out in a day.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Technology-first</h4><p>AI-powered screening, digital onboarding on MYHR and a real-time client dashboard — you see compliance, not just invoices.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Compliance carried</h4><p>97%+ compliance score, 100% payroll automation, complete statutory coverage — our liability, your visibility.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">www.aasaanjobs.com · part of BetterPlace, Asia's largest frontline workforce platform · www.betterplace.co.in</div>
    </div>`,
  },
]

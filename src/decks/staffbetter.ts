import type { SlideDef } from '../lib/types'
import { groupSlides } from './group'
import { outcomeSlide, problemSlide, aiNote } from './html'

const groupStaff = groupSlides.find((s) => s.id === 's11')!

export const staffbetterSlides: SlideDef[] = [
  {
    id: 'sb1', theme: 'dark', title: 'staffBetter cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">staffBetter · managed staffing, employer of record</span>
      <h1 class="rise" style="animation-delay:.15s">The right frontline talent. <span style="color:var(--yellow)">Compliantly. At speed.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Full-time staffing across India &amp; Southeast Asia, drawn from the verified 25M+ pool. We become the employer of record and carry the full compliance load — you direct the work.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">40K+</div><div class="l">Workers managed / month</div></div>
        <div class="stat"><div class="n">$105M+</div><div class="l">Annual gross revenue</div></div>
        <div class="stat"><div class="n">24–72 hr</div><div class="l">Deployment from verified pool</div></div>
        <div class="stat"><div class="n">200+</div><div class="l">Role categories</div></div>
      </div>
      <div class="mdcover ghost">SB</div>
    </div>`,
  },
  problemSlide('sb1b', 'For HR & operations', 'The agency model gives you bodies. You need a workforce.', [
    { pain: 'Agency quality is a lottery, refreshed monthly', painDetail: 'Unscreened candidates churn out as fast as they arrive — you pay sourcing fees for the same seat several times a year.', painStat: '40–50% of frontline workers switching for pay/balance', fix: 'A verified pool with welfare that retains', fixDetail: 'BGV-verified candidates from the 25M+ pool, kept by insurance, early wage access and upskilling — churn drops because staying pays.', fixStat: 'Mahindra: 1,000+ execs built and kept' },
    { pain: 'Your vendor’s compliance gap is your liability', painDetail: 'When the staffing agency underpays PF or misses ESIC, the principal-employer exposure lands on you.', painStat: '14B damages up to 100% of arrears', fix: 'We are the employer of record', fixDetail: 'PF, ESIC, payroll, gratuity and labour-law compliance sit with us — with real-time reporting so you can see it, not hope it.', fixStat: 'EoR across India · Indonesia · Malaysia' },
    { pain: 'Every city means another vendor hunt', painDetail: 'Multi-city expansion multiplies agencies, contracts, rate cards and compliance standards.', painStat: 'One agency per city = ungovernable', fix: 'One partner, 500+ cities, three markets', fixDetail: 'AasaanJobs, MyRobin and Troopers run on one relationship, one SLA and one platform you can audit.', fixStat: '24–72 hr deployment anywhere' },
  ], 'McKinsey frontline retention research · EPFO 14B · Mahindra Holidays engagement'),
  { ...groupStaff, id: 'sb2', title: 'staffBetter capabilities' },
  {
    id: 'sb3', theme: 'light', title: 'How an engagement runs',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The operating commitments</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">SLAs you can hold us to, <span style="color:var(--navy)">in the contract.</span></h2>
      <div class="modelrow rise" style="animation-delay:.2s;margin-top:16px;">
        <div class="mstat"><div class="n">24–72 hr</div><div class="l">Deployment from the pre-verified pool</div></div>
        <div class="mstat"><div class="n">40%</div><div class="l">Faster time-to-hire than agency routes</div></div>
        <div class="mstat"><div class="n">100%</div><div class="l">Statutory compliance carried by us as EoR</div></div>
        <div class="mstat"><div class="n">Real-time</div><div class="l">Compliance &amp; deployment reporting to you</div></div>
      </div>
      <div class="capgrid three rise" style="animation-delay:.35s;margin-top:18px;">
        <div class="cap"><h4>Employer of record, end to end</h4><p>PF, ESIC, payroll, gratuity, labour-law compliance — our liability, not yours, with real-time reporting</p></div>
        <div class="cap"><h4>Worker welfare that cuts churn</h4><p>Statutory benefits, job-accident insurance, early wage access — the reasons deployed workers stay</p></div>
        <div class="cap"><h4>One partner across markets</h4><p>AasaanJobs (India) · MyRobin (Indonesia) · Troopers (Malaysia) — 500+ cities on one relationship</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.5s;margin-top:14px;">Every deployed worker is BGV-verified and runs on the same goBetter platform — attendance, payroll and training included</div>
    </div>
    ${aiNote('Matching models', 'The right worker from 25M profiles', 'Skill, proximity, wage-fit and verified history rank candidates for every requisition — deployment in 24–72 hours starts with a shortlist, not a search.', '40% faster time-to-hire')}
    `,
  },
  {
    id: 'sb4', theme: 'light', title: 'Proof',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">From HNI sales floors to <span style="color:var(--navy)">1,000-exec teams.</span></h2>
      <div class="cases" style="grid-template-columns:1fr;max-width:860px;margin-top:16px;">
        <div class="case rise" style="--pc:#FF9518;animation-delay:.22s"><div class="ch"><span class="cn">Mahindra Holidays</span><span class="ct">Staffing · hospitality</span></div><p>Exclusive vendor for HNI telemarketing and field sales — luxury packages of ₹2–16L, sourced pan-India, quality-screened and deployed compliantly.</p><div class="cm"><div class="m"><div class="mn">300+</div><div class="ml">quality hires in 3 months</div></div><div class="m"><div class="mn">1,000+</div><div class="ml">execs on the team today</div></div><div class="m"><div class="mn">Exclusive</div><div class="ml">vendor status earned</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.4s">Industries staffed: warehouse &amp; logistics · retail &amp; sales · delivery · F&amp;B &amp; hospitality · security &amp; facilities · manufacturing · BPO · healthcare support</div>
    </div>`,
  },
  outcomeSlide('sb5', 'What staffBetter changes in your operations.', [
    { n: '−40%', what: 'Time-to-fill collapses', how: 'Roles filled from a pre-verified pool in 24–72 hours instead of agency cycles of weeks — sites open on schedule, revenue days stop leaking.', proof: 'Mahindra: 300+ hires in 3 months' },
    { n: '₹0', what: 'Statutory exposure on staffed workers', how: 'As employer of record, PF, ESIC, gratuity and labour-law liability sit with us — the exposure never lands on your books in the first place.', proof: 'EoR across India · Indonesia · Malaysia' },
    { n: '−15%', what: 'Frontline attrition', how: 'Insurance, early wage access and upskilling make deployed workers stay — every point of churn saved is a hiring and training cycle you never pay for.', proof: 'Welfare stack on every deployment' },
    { n: '1', what: 'Vendor, many markets', how: 'One contract replaces a patchwork of city agencies — one SLA, one compliance standard, one dashboard.', proof: '500+ cities · 3 country brands' },
  ], 'Bring us your hardest-to-staff site — we’ll quote fill rate and time-to-deploy against your current agency.'),
  {
    id: 'sb6', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Give us your hardest site to staff.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>A 30-day staffing pilot</h4><p>One city, one role family — measure fill rate, time-to-deploy and 90-day retention against your current agency.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>EoR compliance takeover</h4><p>We become employer of record for your contract workforce — statutory load moves to us, reporting moves to your dashboard.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Scale across markets</h4><p>Extend the same contract to Indonesia and Malaysia through MyRobin and Troopers.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in · Onkar Vartak — Sales · onkar.vartak@betterplace.co.in</div>
    </div>`,
  },
]

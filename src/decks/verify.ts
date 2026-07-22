import type { SlideDef } from '../lib/types'
import { groupSlides } from './group'
import { bframe, icons } from './html'

const groupVerify = groupSlides.find((s) => s.id === 'sv')!

export const verifySlides: SlideDef[] = [
  {
    id: 'vf1', theme: 'dark', title: 'verifyBetter cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">verifyBetter · background verification</span>
      <h1 class="rise" style="animation-delay:.15s">Trust every worker you hire. <span style="color:var(--yellow)">From day one.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">India's first digital frontline BGV — six checks, run at the speed and volume high-churn hiring actually needs.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n"><em>50</em>K+</div><div class="l">Cases processed daily</div></div>
        <div class="stat"><div class="n">&lt;24 hr</div><div class="l">Average TAT · minutes for identity</div></div>
        <div class="stat"><div class="n">25M+</div><div class="l">Verified profiles on platform</div></div>
      </div>
      <div class="mdcover ghost">✓</div>
    </div>`,
  },
  { ...groupVerify, id: 'vf2', title: 'Six checks, one report' },
  {
    id: 'vf2b', theme: 'light', title: 'The six-point check',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">What each check actually covers</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">Six checks. Every worker. <span style="color:var(--navy)">One-click initiation.</span></h2>
      <div class="capgrid three rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.user}</svg></span><h4>Identity</h4><p>Aadhaar, PAN &amp; government-ID validation in seconds, with face-match liveness detection</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.building}</svg></span><h4>Physical / address</h4><p>Current and permanent address, geo-tagged digital or physical confirmation</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>Career</h4><p>Employment history via EPFO integration plus digital reference checks on SMS/WhatsApp</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.card}</svg></span><h4>Financial</h4><p>Bank account validation and credit signals where the role warrants</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.zap}</svg></span><h4>Health</h4><p>Fitness certificates collected and tracked per role requirements</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><h4>Legal</h4><p>AI court-record scan pan-India plus police verification — tamper-proof records</p></div>
      </div>
      <div class="vflow rise" style="animation-delay:.4s;margin-top:20px;">
        <span class="vstep done">Initiate — one click or API</span><span class="varrow">→</span>
        <span class="vstep done">Worker self-serves on phone</span><span class="varrow">→</span>
        <span class="vstep done">Checks run in parallel</span><span class="varrow">→</span>
        <span class="vstep">Red / Yellow / Green report · &lt;24 hr</span>
      </div>
    </div>`,
  },
  {
    id: 'vf3', theme: 'light', title: 'Portfolio & case view',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The live product · red / yellow / green</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Your whole BGV book at a glance — <span style="color:var(--navy)">and every case behind it.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/gobetter/verify/bgv-insights-red-yellow-green.jpg', 'gobetter · Verify · Insights', 'Portfolio health — red/yellow/green progress plus checks-level trend, filterable by site')}
        ${bframe('assets/product/gobetter/verify/bgv-individual-report-red-case.jpg', 'gobetter · Verify · Individual report', 'A red case in full: Aadhaar flag, tenure timeline, <b>downloadable PDF report</b>')}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">Red, yellow and green tabs work as a triage queue. Click any associate and the full case opens — who employed them, when, and exactly which check flagged.</p>
    </div>`,
  },
  {
    id: 'vf4', theme: 'light', title: 'Differentiated checks',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Why it's faster — and harder to fool</span>
        <h2 class="rise" style="animation-delay:.08s;">Built for frontline volume, <span style="color:var(--navy)">not white-collar paperwork.</span></h2>
        <div class="featlist">
          <div class="fi rise" style="animation-delay:.24s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg></span><div><h4>AI criminal-record scan</h4><p>Automated pan-India court-record coverage; AI surfaces the relevant hits instantly — no manual review backlog, fewer false positives.</p></div></div>
          <div class="fi rise" style="animation-delay:.32s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/></svg></span><div><h4>Identity in seconds, with liveness</h4><p>Aadhaar, PAN and government-ID validation plus face-match liveness detection — a photo of a photo doesn't pass.</p></div></div>
          <div class="fi rise" style="animation-delay:.40s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7h-9M14 17H5"/><circle cx="8" cy="7" r="2"/><circle cx="16" cy="17" r="2"/></svg></span><div><h4>Employment history via EPFO</h4><p>Digital reference checks over SMS/WhatsApp, cross-checked against EPFO records.</p></div></div>
          <div class="fi rise" style="animation-delay:.48s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8"/><path d="M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/></svg></span><div><h4>Instant re-verification on rehire</h4><p>Every BGV feeds the shared 25M-profile intelligence layer — returning workers clear in minutes.</p></div></div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${bframe('assets/product/gobetter/verify/bgv-address-legal-verification.jpg', 'gobetter · Verify · Address, Court & Police checks', 'Address, court and police verification detail — <b>all green, dated, audit-ready</b>')}
      </div>
    </div>`,
  },
  {
    id: 'vf5', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Send us 50 hires. Reports back inside 24 hours.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>A 50-case pilot batch</h4><p>Real candidates, all six checks, verified against your current vendor's TAT and cost.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>API into your ATS</h4><p>One-click initiation from your hiring flow — candidates verify themselves on their own phones.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Portfolio dashboard</h4><p>Your compliance team gets the red/yellow/green view across every active case, live.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Trusted by Swiggy · Licious · Royal Orchid Hotels — DPDPA-compliant, 100% digital</div>
    </div>`,
  },
]

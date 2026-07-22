import type { SlideDef } from '../lib/types'
import { bframe, fi, icons } from './html'

export const skillbetterSlides: SlideDef[] = [
  {
    id: 'sk1', theme: 'dark', title: 'skillBetter cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">skillBetter · mobile-first LMS</span>
      <h1 class="rise" style="animation-delay:.15s">Training the frontline <span style="color:var(--yellow)">actually finishes.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Bite-sized, gamified, vernacular learning on the worker's own phone — built for low-literacy, mobile-only, multilingual teams.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n"><em>88</em>%</div><div class="l">Completion vs 25% industry</div></div>
        <div class="stat"><div class="n">35+</div><div class="l">Languages out of the box</div></div>
        <div class="stat"><div class="n">25L+</div><div class="l">Frontline learners</div></div>
      </div>
    </div>
    <div class="chero" style="width:clamp(300px,30vw,420px);top:56%;">
      <div class="phones" style="min-height:auto;">
        <div class="phone p1"><img src="assets/product/app-gamification.webp" alt="Gamified journey"/></div>
        <div class="phone p2"><img src="assets/product/app-home.webp" alt="Learner home"/></div>
        <div class="phone p3"><img src="assets/product/app-leaderboard.webp" alt="Leaderboard"/></div>
      </div>
    </div>`,
  },
  {
    id: 'sk2', theme: 'light', title: 'Why traditional LMS fails',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The problem with the LMS you have</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:26ch;">88% of your team finishes training here. <span style="color:var(--navy)">Today it's 25%.</span></h2>
      <div class="mediasplit" style="align-items:start;">
        <div class="vs rise" style="animation-delay:.2s;grid-template-columns:1fr;margin-top:16px;">
          <div class="col bad">
            <h4>Traditional LMS</h4>
            <ul>
              <li>Desktop-first — field workers never log in</li>
              <li>English-only content for a multilingual workforce</li>
              <li>No hooks to bring lapsed learners back</li>
              <li>10–15% active use; ~30% of certifications lapse — licence fees accrue anyway</li>
            </ul>
          </div>
          <div class="col good">
            <h4>skillBetter</h4>
            <ul>
              <li>Built for the worker's own phone, any language</li>
              <li>Reels, streaks, badges &amp; leaderboards that pull people back</li>
              <li>AI tutor re-engages lapsed learners automatically</li>
              <li>Mandatory courses pushed to the top of the app</li>
            </ul>
          </div>
        </div>
        <div class="rise" style="animation-delay:.35s;margin-top:16px;">
          <div class="pminihead">Workforce that completes assigned training</div>
          <div class="barchart">
            <div class="bc-row"><span class="bl">Traditional LMS</span><span class="track"><span class="fill" style="--w:25%;background:linear-gradient(90deg,#c6cee6,#aab6dd)"></span></span><span class="bv">25%</span></div>
            <div class="bc-row"><span class="bl">skillBetter</span><span class="track"><span class="fill" style="--w:88%;background:linear-gradient(90deg,var(--navy-2),var(--teal))"></span></span><span class="bv">88%</span></div>
          </div>
          <div style="margin-top:14px;"><span class="bc-delta">3.5× more of your workforce, trained</span></div>
          <p class="lede rise" style="animation-delay:.5s;margin-top:18px;">Same people. Same content. A platform designed for how the frontline actually uses a phone.</p>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'sk3', theme: 'light', title: 'Capabilities',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">What your team gets</span>
        <h2 class="rise" style="animation-delay:.08s;">One upload. <span style="color:var(--navy)">Every language your team speaks.</span></h2>
        <div class="featlist">
          ${fi(icons.lang, 'AI translation in under 15 minutes', 'Any video, PDF or PPT into any of 35+ Indian languages — conversational, not literal. Record once in English; your team watches it in Tamil by lunch.', 0.24)}
          ${fi(icons.play, 'Reels for learning', 'Instagram-style micro-content, plus an AI generator that turns your PDFs into reels.', 0.32)}
          ${fi(icons.trophy, 'Gamification that moves numbers', 'Points, badges, streaks, leaderboards — +19.7% week-on-week retention at Meesho.', 0.40)}
          ${fi(icons.book, '250+ ready courses, free', 'POSH, safety, retail selling, last-mile — plus in-house custom content development.', 0.48)}
          ${fi(icons.plug, 'Plugs into PMS / HRMS', 'Assignments, completions and records sync over API. Zepto gates order delivery on training completion.', 0.56)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="phones" style="min-height:clamp(280px,30vw,390px);">
          <div class="phone p1"><img src="assets/product/app-gamification.webp" alt="Gamified journey"/></div>
          <div class="phone p2"><img src="assets/product/app-home.webp" alt="Learner home"/></div>
          <div class="phone p3"><img src="assets/product/app-leaderboard.webp" alt="Leaderboard"/></div>
        </div>
        <div class="phonecap" style="margin-top:14px;">Learner home · gamified journeys · leaderboards — the live app</div>
      </div>
    </div>`,
  },
  {
    id: 'sk4', theme: 'light', title: 'Proctored assessments',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Assessments you can defend</span>
        <h2 class="rise" style="animation-delay:.08s;">No face on camera? <span style="color:var(--navy)">The exam pauses itself.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:12px;">Certificates only mean something if the right person earned them. skillBetter proctors every exam with live face detection, a visible strike system and auto-pause — across 12+ question types.</p>
        <div class="featlist">
          ${fi(icons.eye, 'Live face detection', 'The camera watches for the enrolled learner; absence or a second face pauses the exam instantly.', 0.28)}
          ${fi(icons.warn, 'Visible strike system', 'Learners see strike 1/3 on screen — enforcement is transparent, not a surprise at the end.', 0.36)}
          ${fi(icons.chart, '250+ analytics data points', 'Scores by user, city and partner — exportable, audit-ready.', 0.44)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s;display:flex;flex-direction:column;align-items:center;">
        <div class="phones" style="min-height:auto;">
          <div class="phone p2" style="margin:0;width:clamp(170px,17vw,215px);"><img src="assets/product/proctoring-no-face-detected.png" alt="Live proctoring — no face detected, strike 1 of 3"/></div>
        </div>
        <div class="phonecap" style="margin-top:14px;">Live enforcement in production — <b style="color:var(--navy)">"No face detected · strike 1/3 · exam paused"</b></div>
      </div>
    </div>`,
  },
  {
    id: 'sk5', theme: 'light', title: 'Admin console',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The admin side · goBetter Skilling</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">Your L&amp;D team runs it — <span style="color:var(--navy)">275 courses, one console.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/gobetter/lms/content-hub-course-library-275.jpg', 'gobetter · Skilling · Content Hub', 'The content hub — <b>275 courses</b>, search, tags, drafts &amp; published')}
        ${bframe('assets/product/gobetter/lms/course-builder-wizard-with-preview.jpg', 'gobetter · Course Builder', 'Guided course builder with a <b>live phone preview</b> before publishing')}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:90ch;">Overview → Levels → Cards → Preview: admins see exactly what the learner will see before a course ships. One catalogue serves retail, logistics, sales and corporate teams.</p>
    </div>`,
  },
  {
    id: 'sk6', theme: 'dark', title: 'Proof',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof at enterprise scale</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;">The completion numbers, with names on them.</h2>
      <div class="cases" style="margin-top:16px;">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.2s"><div class="ch"><span class="cn">Amazon · GSF Learning Academy</span><span class="ct">E-commerce &amp; logistics</span></div><p>Role-aware, event-based learning across two business units with 222 custom audits, in multiple Indian languages.</p><div class="cm"><div class="m"><div class="mn">91%</div><div class="ml">completion vs &lt;30% industry</div></div><div class="m"><div class="mn">222</div><div class="ml">custom audits</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.28s"><div class="ch"><span class="cn">Meesho</span><span class="ct">Social commerce</span></div><p>Reels, peer video and gamified challenges for a 1.5-lakh workforce and reseller base.</p><div class="cm"><div class="m"><div class="mn">2M+</div><div class="ml">resellers trained</div></div><div class="m"><div class="mn">+19.7%</div><div class="ml">WoW retention</div></div></div></div>
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.36s"><div class="ch"><span class="cn">Reliance Retail</span><span class="ct">Retail · 18,000+ stores</span></div><p>500K+ associates trained in 14 languages — live in 8 weeks.</p><div class="cm"><div class="m"><div class="mn">60%+</div><div class="ml">training cost reduction</div></div><div class="m"><div class="mn">8 wks</div><div class="ml">to go live</div></div></div></div>
        <div class="case rise" style="--pc:#FF9518;animation-delay:.44s"><div class="ch"><span class="cn">Zepto</span><span class="ct">Quick-commerce</span></div><p>Order delivery gated on training completion via deep API integration — only certified riders deploy.</p><div class="cm"><div class="m"><div class="mn">100%</div><div class="ml">certified before first order</div></div></div></div>
      </div>
    </div>`,
  },
  {
    id: 'sk7', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">See it on your content</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Three demos we can run this week.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Your branded app, live</h4><p>A skillBetter instance with your logo and three of your courses — in your hands, on your phone.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>The translation proof</h4><p>Send us any training video or PDF. It comes back in Hindi and one more language within the hour.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>An AI tutor on your SOPs</h4><p>A chatbot trained on your public website and brochures — ask it anything, in any language.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in · Onkar Vartak — Sales · onkar.vartak@betterplace.co.in</div>
    </div>`,
  },
]

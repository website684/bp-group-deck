import type { SlideDef } from '../lib/types'
import { bframe, fi, icons, outcomeSlide, aiNote } from './html'

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
        <div class="stat"><div class="n">25L+</div><div class="l">Active monthly learners</div></div>
        <div class="stat"><div class="n">100M+</div><div class="l">Learning minutes delivered</div></div>
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
    id: 'sk1b', theme: 'darker', title: 'Voices from the frontline',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Real voices · 300M+ frontline workers</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Your workers already told you why training fails.</h2>
      <div class="quotes rise" style="animation-delay:.2s">
        <div class="quote"><p>I received minimal training before starting — it slowed me down for weeks.</p><span class="qtag">20% churn in 90 days</span></div>
        <div class="quote"><p>The materials are in English. Most of us understand our own language far better.</p><span class="qtag">70% prefer vernacular</span></div>
        <div class="quote"><p>There's no ongoing training. We figure everything out ourselves.</p><span class="qtag">Low skill retention</span></div>
        <div class="quote"><p>We don't get regular feedback, so it's hard to know how to improve.</p><span class="qtag">Performance gaps</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">The business bill: high churn · inconsistent customer experience · compliance risk · <b>₹15K+ training cost per head that nobody finishes.</b></div>
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
              <li>45+ days to onboard; 50–70% frontline attrition</li>
              <li>10–15% active use; ~30% of certifications lapse — licence fees accrue anyway</li>
            </ul>
          </div>
          <div class="col good">
            <h4>skillBetter</h4>
            <ul>
              <li>Built for the worker's own phone, low bandwidth, any language</li>
              <li>Reels, streaks, badges &amp; leaderboards that pull people back</li>
              <li>AI tutor re-engages lapsed learners automatically</li>
              <li>Mandatory courses enforced — 30% lower compliance risk</li>
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
    id: 'sk3', theme: 'light', title: 'Core capabilities',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">What your team gets</span>
        <h2 class="rise" style="animation-delay:.08s;">One upload. <span style="color:var(--navy)">Every language your team speaks.</span></h2>
        <div class="featlist">
          ${fi(icons.lang, 'AI translation in under 15 minutes', 'Any video, PDF or PPT into any of 35+ languages — context-aware and conversational, not literal. 500K+ translations delivered. Record once in English; your team watches it in Tamil by lunch.', 0.24)}
          ${fi(icons.play, 'Reels for learning', 'Instagram-style micro-content, plus an AI generator that turns your PDFs into reels.', 0.32)}
          ${fi(icons.trophy, 'Gamification that moves numbers', 'Coins, badges, streaks, leaderboards and role-specific journeys — +65% voluntary participation, +19.7% week-on-week retention at Meesho.', 0.40)}
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
    </div>
    ${aiNote('Translation engine', 'One master course, every language', 'Speech and text models localise video, voice and quizzes together — tone-controlled, industry-aware, reviewed by humans.', '500K+ translations · <15 min per course')}
    `,
  },
  {
    id: 'sk3c', theme: 'dark', title: 'The learner experience',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The learner experience · latest product design</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">A feed they scroll, chapters they finish, quizzes that answer back.</h2>
      <div class="mediasplit" style="align-items:center;">
        <div>
          <div class="featlist" style="margin-top:10px;">
            ${fi(icons.play, 'New Feed — reel-style learning', 'Short-form portrait video cards on the learner home: training that looks like the apps they already scroll.', 0.24)}
            ${fi(icons.book, 'Chaptered courses with resume', 'Mandatory markers, language selector, chapter states and a Resume CTA — progress never gets lost.', 0.32)}
            ${fi(icons.check, 'Quizzes that teach', 'Image MCQs with hints and instant feedback on wrong answers — assessment as a learning moment.', 0.40)}
            ${fi(icons.doc, 'Offline downloads', 'Chapters download for low-network field days — learning survives the warehouse basement.', 0.48)}
          </div>
        </div>
        <div class="rise" style="animation-delay:.3s">
          <div class="phones" style="min-height:clamp(280px,30vw,390px);">
            <div class="phone p1"><img src="assets/product/figma/skilling/skillbetter-mobile-course-overview-chapter-states.png" alt="Course overview with chapter states"/></div>
            <div class="phone p2"><img src="assets/product/figma/skilling/mobile-learning-home-new-feed.png" alt="Learner home with New Feed"/></div>
            <div class="phone p3"><img src="assets/product/figma/skilling/skillbetter-mobile-image-mcq-feedback.png" alt="Image MCQ with instant feedback"/></div>
          </div>
          <div class="phonecap" style="margin-top:12px;">Course overview · New Feed home · image MCQ — current product design</div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'sk3b', theme: 'light', title: 'Platform capabilities grid',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The complete platform</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Everything L&amp;D needs to run frontline training at scale.</h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.doc}</svg></span><h4>Assessments &amp; surveys</h4><p>12+ question types with auto-scoring</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.search}</svg></span><h4>One-click discovery</h4><p>Folder-based catalogues, instant relevant content</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.cam}</svg></span><h4>In-app live classes</h4><p>ILT without Zoom or Meet</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Analytics dashboard</h4><p>250+ real-time data points — user, city, partner</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>In-app chat</h4><p>Direct messaging and learner support</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.zap}</svg></span><h4>Event-based learning</h4><p>Trigger training on business moments — new SKU, audit, incident</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.trophy}</svg></span><h4>Leaderboards &amp; rewards</h4><p>Team and regional rankings, coins and badges</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><h4>Certifications</h4><p>Auto-generated, tamper-proof, audit-ready</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.play}</svg></span><h4>Social feeds</h4><p>Updates, recognition, peer content</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.chart}</svg></span><h4>Performance tracking</h4><p>KPIs, goals and progress in the learner app</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.lock}</svg></span><h4>Mandatory enforcement</h4><p>Critical courses pinned to the top of the app</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.book}</svg></span><h4>QR classroom attendance</h4><p>In-person training, digitally recorded</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">250+ ready courses in the library · custom content built in-house · works in low-bandwidth field conditions</div>
    </div>`,
  },
  {
    id: 'sk4', theme: 'light', title: 'Proctored assessments',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Assessments you can defend</span>
        <h2 class="rise" style="animation-delay:.08s;">No face on camera? <span style="color:var(--navy)">The exam pauses itself.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:12px;">Certificates only mean something if the right person earned them. skillBetter proctors every exam with live face detection, a visible strike system and auto-pause.</p>
        <div class="featlist">
          ${fi(icons.eye, '99.2% face-detection accuracy', 'The camera watches for the enrolled learner; absence or a second face pauses the exam instantly.', 0.28)}
          ${fi(icons.warn, 'Visible strike system', 'Learners see strike 1/3 on screen — enforcement is transparent, not a surprise at the end. Three strikes ends the exam.', 0.36)}
          ${fi(icons.shield, 'Tamper-proof certification', 'Digital certificates with audit-ready records — multi-factor checks stop proxy test-takers.', 0.44)}
        </div>
        <div class="modelrow rise" style="grid-template-columns:repeat(3,1fr);animation-delay:.52s;margin-top:16px;">
          ${'' /* integrity stats */}
          <div class="mstat"><div class="n">99.2%</div><div class="l">Face-detection accuracy</div></div>
          <div class="mstat"><div class="n">12+</div><div class="l">Question types, auto-scored</div></div>
          <div class="mstat"><div class="n">24/7</div><div class="l">Real-time integrity alerts</div></div>
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
    id: 'sk4b', theme: 'darker', title: 'AI inside the LMS',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">AI that works for your workforce</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">A tutor that never sleeps, in every language you employ.</h2>
      <div class="mediasplit" style="align-items:center;">
        <div class="featlist" style="margin-top:14px;">
          ${fi(icons.bot, '24/7 AI chatbot — voice and text', 'Trained on your SOPs, answers in 35+ languages with citations. 10M+ queries answered. A technician in Madurai asks in Tamil; the answer comes from your service manual in 4 seconds.', 0.24)}
          ${fi(icons.lang, 'AI translation engine', 'Entire courses translated in minutes — context-aware, industry-specific, meaning preserved. 500K+ translations shipped.', 0.34)}
          ${fi(icons.zap, 'AI re-engagement', 'Lapsed learners get nudged back automatically — the platform chases completion so your L&D team doesn’t.', 0.44)}
          ${fi(icons.shield, 'Patent-protected, enterprise-grade', 'SOC 2 compliant, private deployment options, 100M+ AI interactions to date.', 0.54)}
        </div>
        <div class="rise" style="animation-delay:.3s">
          ${bframe('assets/product/figma/skilling/ai-course-translation-management.jpg', 'gobetter · Skilling · AI Translation', 'The translation console — <b>AI or manual per language</b>, voice &amp; tone choices, retry &amp; edit')}
        </div>
      </div>
    </div>`,
  },
  {
    id: 'sk4c', theme: 'light', title: 'AI content studio',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">AI content studio · human-approved</span>
        <h2 class="rise" style="animation-delay:.08s;">Your SME gives it an hour. <span style="color:var(--navy)">The course ships the same afternoon.</span></h2>
        <div class="featlist">
          ${fi(icons.doc, 'Brief in, course out', 'Drop a SOP, PPT or video and a topic brief — the studio drafts the outline, chapters, quiz and reels-style cards.', 0.24)}
          ${fi(icons.check, 'A human approves every stage', 'Your L&D team reviews the outline, edits the cards and signs off before anything reaches a learner — AI does the heavy lifting, people keep control.', 0.32)}
          ${fi(icons.lang, 'Then 35+ languages, automatically', 'The approved course goes through the translation console — voice and tone per language, live the same day.', 0.40)}
          ${fi(icons.layers, 'Every depth, one workflow', 'Nano cards for daily briefs (3–5 min), full courses, or multi-course journeys — reels, video, 12+ quiz types, AI roleplay and live classes.', 0.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="aistudio">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">gobetter · Skilling · Create with AI</span></div>
          <div class="body">
            <div class="brief"><span class="bi">✦</span><span class="bt">Brief: <em>"Festive-season upselling for store associates — from the attached playbook"</em><span class="cursor"></span></span></div>
            <div class="gen">
              <div class="gline"><span class="gi">1</span><span><b>Outline drafted</b> — 5 chapters · 14 cards · 8-question quiz</span><span class="gs">✓ Generated</span></div>
              <div class="gline hitl"><span class="gi">2</span><span><b>L&amp;D review</b> — 2 cards edited, 1 example replaced</span><span class="gs">Priya · approved</span></div>
              <div class="gline"><span class="gi">3</span><span><b>Reels &amp; quiz built</b> — portrait video cards + image MCQs</span><span class="gs">✓ Generated</span></div>
              <div class="gline"><span class="gi">4</span><span><b>Translated</b> — Hindi · Tamil · Telugu · Bengali · Marathi</span><span class="gs">✓ 5 languages</span></div>
            </div>
            <div class="formats"><span>Reels</span><span>Video</span><span>12+ quiz types</span><span>AI roleplay</span><span>Live class</span><span>Nano · Course · Journey</span></div>
            <div class="prog">Published to 4,200 store associates — <b>brief to live in one afternoon</b></div>
          </div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'sk4d', theme: 'light', title: 'Skills intelligence',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Skills intelligence · on the worker record</span>
        <h2 class="rise" style="animation-delay:.08s;">Know exactly who can do what — <span style="color:var(--navy)">before you roster them.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Every course, assessment and certification writes back to the role–skill map. Gaps trigger journeys automatically; expiring certifications resurface before they lapse.</p>
        <div class="featlist">
          ${fi(icons.chart, 'Role–skill mapping, live', 'Coverage by role, site and skill — the treemap your L&D reviews and your ops team plans against.', 0.28)}
          ${fi(icons.zap, 'Gaps auto-assign learning', 'A skill below threshold pushes the journey to exactly the workers who need it — nobody audits spreadsheets.', 0.36)}
          ${fi(icons.shield, 'And here’s the part nobody else has', 'Skills sit on the same worker record as attendance, BGV and payroll — so certification can gate rostering and dispatch, the way Zepto gates deliveries.', 0.44)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="skillmap">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">gobetter · Skilling · Role–skill coverage · Mumbai region</span></div>
          <table>
            <thead><tr><th>Role</th><th>Safety</th><th>POSH</th><th>Product</th><th>Selling</th><th>SOP</th></tr></thead>
            <tbody>
              <tr><td>Store associate</td><td><span class="cell c-hi">96%</span></td><td><span class="cell c-hi">99%</span></td><td><span class="cell c-md">71%</span></td><td><span class="cell c-lo">54%</span></td><td><span class="cell c-hi">92%</span></td></tr>
              <tr><td>Picker · dark store</td><td><span class="cell c-hi">98%</span></td><td><span class="cell c-hi">97%</span></td><td><span class="cell c-hi">94%</span></td><td><span class="cell c-md">—</span></td><td><span class="cell c-md">76%</span></td></tr>
              <tr><td>Field engineer</td><td><span class="cell c-md">82%</span></td><td><span class="cell c-hi">95%</span></td><td><span class="cell c-lo">61%</span></td><td><span class="cell c-md">70%</span></td><td><span class="cell c-hi">91%</span></td></tr>
              <tr><td>Telesales rep</td><td><span class="cell c-hi">99%</span></td><td><span class="cell c-hi">98%</span></td><td><span class="cell c-md">78%</span></td><td><span class="cell c-hi">88%</span></td><td><span class="cell c-md">80%</span></td></tr>
            </tbody>
          </table>
          <div class="foot"><span><b>2 gaps flagged</b> — Selling (store associates), Product (field engineers)</span><span class="act">Journeys auto-assigned → 1,340 workers</span></div>
        </div>
        <div class="bcap">Live coverage by role and region — gaps close themselves</div>
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
    </div>
    ${aiNote('AI Theo · learning tutor', 'Answers from your SOPs, cited', 'Retrieval over your approved content means Theo teaches your way — and every question asked becomes a signal of what to train next.', '10M+ queries answered')}
    `,
  },
  {
    id: 'sk5b', theme: 'light', title: 'Journeys & assessment governance',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Journeys &amp; governance · the admin side, continued</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Onboarding journeys and compliance assessments <span style="color:var(--navy)">run themselves.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/figma/skilling/playlist-library-onboarding-journeys.jpg', 'gobetter · Skilling · Playlist Library', 'Learning journeys at scale — <b>298 playlists</b> with status, language, distribution &amp; scheduling', true)}
        ${bframe('assets/product/figma/skilling/assessment-advanced-settings.jpg', 'gobetter · Skilling · Assessment Settings', 'Recurring compliance assessments — schedule, occurrences, <b>automated reminders &amp; push cadence</b>', true)}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">Set a quarterly POSH assessment once: it re-runs, reminds and reports on its own. Your L&amp;D team stops being the follow-up department.</p>
    </div>`,
  },
  {
    id: 'sk6', theme: 'dark', title: 'Proof',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Proof at enterprise scale</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;">The completion numbers, with names on them.</h2>
      <div class="cases" style="margin-top:16px;">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.2s"><div class="ch"><span class="cn">Reliance Retail Skill Academy</span><span class="ct">Retail · 18,000+ stores</span></div><p>India's largest skilled talent pool on the Samarth platform — skills repository, AI course recommendations, standardized onboarding. 4.7★ on Play Store, 1.7L+ downloads.</p><div class="cm"><div class="m"><div class="mn">500K+</div><div class="ml">people skilled</div></div><div class="m"><div class="mn">60%</div><div class="ml">cost savings</div></div><div class="m"><div class="mn">1.5L+</div><div class="ml">annual hires</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.28s"><div class="ch"><span class="cn">Meesho Reseller Academy</span><span class="ct">Social commerce</span></div><p>Vernacular micro-learning in 10+ languages for resellers — product knowledge, order management, customer handling.</p><div class="cm"><div class="m"><div class="mn">2M+</div><div class="ml">resellers trained</div></div><div class="m"><div class="mn">85%</div><div class="ml">completion vs 30%</div></div><div class="m"><div class="mn">+40%</div><div class="ml">sales uplift</div></div></div></div>
        <div class="case rise" style="--pc:#FF9518;animation-delay:.36s"><div class="ch"><span class="cn">Hindalco · Aditya Birla Group</span><span class="ct">Manufacturing · $26B metals</span></div><p>E-Karyashala: self-paced, gamified shop-floor training with mandatory completion tracking — 60+ technical modules, 50+ assessments.</p><div class="cm"><div class="m"><div class="mn">3×</div><div class="ml">training coverage</div></div><div class="m"><div class="mn">1,200+</div><div class="ml">training hours</div></div><div class="m"><div class="mn">1,000+</div><div class="ml">workers upskilled</div></div></div></div>
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.44s"><div class="ch"><span class="cn">Amazon · GSF Learning Academy</span><span class="ct">E-commerce &amp; logistics</span></div><p>Role-aware, event-based learning across two business units with 222 custom audits, in multiple Indian languages.</p><div class="cm"><div class="m"><div class="mn">91%</div><div class="ml">completion vs &lt;30%</div></div><div class="m"><div class="mn">222</div><div class="ml">custom audits</div></div></div></div>
      </div>
      <div class="testimonial rise" style="animation-delay:.55s"><p>"The skillBetter team is agile, responsive, and turns customer feedback into reality by co-creating solutions."</p><div class="who">Dr. Mayuk Dasgupta — Digital Culture &amp; Capability Building, Hindalco</div></div>
    </div>`,
  },
  {
    id: 'sk6b', theme: 'light', title: 'Enterprise-grade',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Enterprise-ready &amp; globally backed</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">Built for your security review, <span style="color:var(--navy)">not just your L&amp;D team.</span></h2>
      <div class="capgrid three rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.lock}</svg></span><h4>Enterprise security</h4><p>SOC 2 Type II · ISO 27001 · data localization in India &amp; SEA · enterprise-grade encryption</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.plug}</svg></span><h4>Plugs into your stack</h4><p>Pre-built connectors for Workday, Salesforce and SAP · API-first · no re-entry between systems</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.globe}</svg></span><h4>Global footprint</h4><p>Operations across India, SEA and GCC · multi-timezone support · local-language teams</p></div>
      </div>
      <div class="rise" style="animation-delay:.35s;margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
        <div class="tblock"><div class="h">Certified &amp; compliant</div><div class="certs" style="margin-top:6px;"><img src="assets/compliance/iso-27001.svg" alt="ISO 27001" style="height:42px"/><img src="assets/compliance/soc-2.svg" alt="SOC 2" style="height:42px"/><img src="assets/compliance/gdpr.svg" alt="GDPR" style="height:42px"/><img src="assets/compliance/dpdpa.svg" alt="DPDPA" style="height:42px"/></div></div>
        <div class="tblock" style="border-left:1px solid var(--border);padding-left:24px;"><div class="h">Backed by</div><div class="v" style="margin-top:8px;">British International Investment · Macquarie · Jungle Ventures · 3one4 Capital · CX Partners</div></div>
      </div>
    </div>`,
  },
  outcomeSlide('sk6c', 'What 88% completion actually buys you.', [
    { n: '−60%', what: 'Training cost per certified worker', how: 'AI translation replaces per-language content production; 250+ ready courses replace vendor commissions; completion means the spend lands.', proof: 'Reliance: 60% cost saving · 14 languages' },
    { n: 'Weeks → days', what: 'Time-to-productive for new joiners', how: '3× faster onboarding: a hire sells, picks or repairs sooner — every day earlier is a day of output you currently lose.', proof: 'Meesho: 3× faster · +40% sales uplift' },
    { n: '−15%', what: 'Attrition in the first 90 days', how: 'Workers who feel invested in stay; gamified journeys and recognition are retention levers, not toys.', proof: '+19.7% WoW retention at Meesho' },
    { n: '100%', what: 'Compliance you can show an auditor', how: 'Mandatory enforcement, proctored exams and tamper-proof certificates — when the auditor asks, you pull up the record instead of pulling a late night.', proof: '91% completion on 222 Amazon audits' },
  ], 'Put your own numbers in: workforce size × attrition × ₹15K training cost — we’ll model the saving in the first call.'),
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

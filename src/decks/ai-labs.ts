import type { SlideDef } from '../lib/types'
import { bframe, fi, icons } from './html'

export const aiLabsSlides: SlideDef[] = [
  {
    id: 'ai1', theme: 'darker', title: 'AI Labs cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">AI Labs · the flagship</span>
      <h1 class="rise" style="animation-delay:.15s">You don't buy software.<br/>You <span style="color:var(--yellow)">hire agents.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Build an AI worker for your frontline in 10 minutes — chat, voice and step-by-step workflows, trained on your documents, connected to your systems. Without code.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:34px;">
        <div class="stat"><div class="n">10 <em>min</em></div><div class="l">To a working agent</div></div>
        <div class="stat"><div class="n">24</div><div class="l">Languages, live</div></div>
        <div class="stat"><div class="n">₹0.37</div><div class="l">Per interaction, typical</div></div>
        <div class="stat"><div class="n">0</div><div class="l">Data-science hires needed</div></div>
      </div>
    </div>
    <div class="chero" style="width:clamp(240px,26vw,360px);">
      <div class="cring spin"></div><div class="cring r2"></div>
      <div class="boteye rise" style="animation-delay:.4s;position:absolute;inset:0;margin:auto;width:62%;"><span class="ring"></span><video src="assets/product/bot_eye_video.mp4" poster="assets/product/bot_eye_static_square.jpeg" autoplay muted loop playsinline></video></div>
    </div>
    <div class="mdcover ghost">AI</div>`,
  },
  {
    id: 'ai2', theme: 'light', title: 'The Studio',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">The studio · ai-labs.betterplace.ai</span>
        <h2 class="rise" style="animation-delay:.08s;">Name it, give it a brain, switch it on. <span style="color:var(--navy)">Ten minutes.</span></h2>
        <div class="featlist">
          ${fi(icons.bot, 'Pick the brain', 'Choose a frontier model, toggle what the agent can do — see, hear, speak, read — and watch it answer in the live preview.', 0.24)}
          ${fi(icons.doc, 'Feed it your documents', 'SOPs, product manuals, HR policies — the agent answers from your content, with citations, in 24 languages.', 0.32)}
          ${fi(icons.plug, 'Embed it anywhere', 'Your app, WhatsApp, or a web widget. Live write-back into your systems through MCP tools.', 0.40)}
          ${fi(icons.lock, 'Private by design', 'Private LLMs — your data never leaves the platform. ISO 27001 · SOC 2 · data stays in India.', 0.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${bframe('assets/website-sections/ailabs-hero.png', 'ai-labs.betterplace.ai/build', 'The agent studio — <b>build an AI worker for your frontline in 10 minutes</b>')}
      </div>
    </div>`,
  },
  {
    id: 'ai3', theme: 'light', title: 'Deterministic vs chatbots',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Why enterprises trust it</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:26ch;">A chatbot might skip step 5. <span style="color:var(--navy)">Our workflows can't.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">ChatGPT-style bots are probabilistic — helpful, but free to improvise. AI Labs runs deterministic workflows when the process matters: every mandatory step runs, every time, in order.</p>
      <div class="vs rise" style="animation-delay:.28s">
        <div class="col bad">
          <h4>Generic chatbot</h4>
          <ul>
            <li>May skip or reorder steps in an 8-step onboarding</li>
            <li>No proof any given worker completed the flow</li>
            <li>Answers from the open internet — your SOPs optional</li>
            <li>A compliance risk in BFSI, pharma, manufacturing</li>
          </ul>
        </div>
        <div class="col good">
          <h4>AI Labs deterministic workflow</h4>
          <ul>
            <li>Every mandatory step runs, in order, every time</li>
            <li>Audit trail per worker — regulator-ready logs</li>
            <li>Answers only from your documents, with citations</li>
            <li>Guardrails: PII masking, injection & hallucination checks</li>
          </ul>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s">Safe enough for banks and factories: <b>a breach pauses the agent and raises an event for human review.</b></div>
    </div>`,
  },
  {
    id: 'ai4', theme: 'darker', title: 'The roster',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">One runtime · many agents</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Build the brain once. Give it a new job every week.</h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:80ch;">Every agent runs on the same conversational runtime — only the persona, data sources and scoring change. And every conversation ships structured data back into one worker profile.</p>
      <div class="ailwrap" style="margin-top:18px;">
        <div class="rise" style="animation-delay:.24s">
          <div class="boteye"><span class="ring"></span><video src="assets/product/bot_eye_video.mp4" poster="assets/product/bot_eye_static_square.jpeg" autoplay muted loop playsinline></video></div>
          <div class="eyecap"><div class="t">The goBetter roster</div><div class="s">−70% time-to-hire · 3× faster upskilling<br/>Every chat feeds one worker record</div></div>
        </div>
        <div class="agents">
          <div class="ag rise" style="--ac:#FF7A59;animation-delay:.30s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Onboarding</div><h4>AI Mia</h4><p>Docs, ID checks &amp; safety induction in the joiner's language — under an hour, end to end.</p></div>
          <div class="ag rise" style="--ac:#7C6BF0;animation-delay:.37s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Sales coach</div><h4>AI Max</h4><p>Live customer roleplays with tone &amp; accuracy scoring — training ~30,000 sales pros at IFFCO Tokio.</p></div>
          <div class="ag rise" style="--ac:#3DBE7B;animation-delay:.44s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Learning tutor</div><h4>AI Theo</h4><p>Turns SOPs into an always-on tutor that teaches, quizzes and certifies — cited answers, 24×7.</p></div>
          <div class="ag rise" style="--ac:#32CAD4;animation-delay:.51s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Talent screening</div><h4>AI Jack</h4><p>Screens applicants over WhatsApp, scores fit against the role, auto-shortlists the best.</p></div>
          <div class="ag rise" style="--ac:#FFC401;animation-delay:.58s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Verification</div><h4>AI Cole</h4><p>Face-match, OCR and live API checks on IDs and documents — mismatches flagged instantly.</p></div>
          <div class="ag rise" style="--ac:#FF9518;animation-delay:.65s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat soon"><span class="d"></span>Soon</span></div><div class="role">Interview</div><h4>AI Ivy</h4><p>Structured first-round interviews with a ready scorecard for every recruiter.</p></div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'ai5', theme: 'light', title: 'Hooks — apps inside the chat',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Hooks · in-chat apps</span>
        <h2 class="rise" style="animation-delay:.08s;">It's not a chat window. <span style="color:var(--navy)">It's an app inside a chat.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Agents trigger real interfaces inside the conversation — no separate app to install, nothing for a frontline worker to learn.</p>
        <div class="tags rise" style="animation-delay:.26s;margin-top:16px;">
          <span class="tag hot">MCQ &amp; quizzes · live</span><span class="tag hot">Camera proof · live</span><span class="tag hot">Document upload · live</span><span class="tag hot">Location picker · live</span><span class="tag hot">Rating / NPS · live</span><span class="tag">Map view</span><span class="tag">Scheduling</span><span class="tag">Number input</span><span class="tag">20+ hooks in development</span>
        </div>
        <p class="lede rise" style="animation-delay:.36s;margin-top:18px;">A rider photographs their ID, picks their hub on a map, passes the safety quiz and gets certified — all inside one WhatsApp thread.</p>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="chat">
          <div class="chd"><span class="cav">🤖</span><b>AI Mia · Onboarding</b><span>Live</span></div>
          <div class="cbody">
            <div class="msg bot">Welcome aboard, Ravi! Let's get you ready for your first shift. First — a photo of your driving licence, please.</div>
            <div class="hook"><div class="ht">📷 Camera · ID capture</div><div class="opt on">✓ DL_ravi.jpg captured · verified</div></div>
            <div class="msg bot">Verified. Last step: two quick safety questions.</div>
            <div class="hook"><div class="ht">Quiz · 1 of 2</div><div class="opt">Park inside the marked bay</div><div class="opt on">✓ Helmet on before ignition</div></div>
            <div class="msg me">Done! What's next?</div>
            <div class="msg bot">That's it — certificate issued. See you Monday, 9 AM, Bhiwandi hub. 🎉</div>
          </div>
        </div>
        <div class="bcap">One thread · docs verified · quiz passed · <b>45-minute onboarding</b></div>
      </div>
    </div>`,
  },
  {
    id: 'ai6', theme: 'light', title: 'Use cases with outcomes',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Where agents earn their keep</span>
      <h2 class="rise" style="animation-delay:.08s;">Six problems, six agents, six numbers.</h2>
      <div class="cases" style="grid-template-columns:repeat(3,1fr);margin-top:16px;">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.20s"><div class="ch"><span class="cn">Day-1 onboarding</span></div><p>Delivery partner onboarding took 3 days of paperwork. The agent collects docs, verifies via API, runs safety training and issues the certificate.</p><div class="cm"><div class="m"><div class="mn">45 min</div><div class="ml">average onboarding</div></div></div></div>
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.27s"><div class="ch"><span class="cn">Store helpdesk</span></div><p>Staff don't know today's offers or the returns policy. A WhatsApp agent answers from your merchandising docs.</p><div class="cm"><div class="m"><div class="mn">24/7</div><div class="ml">Hindi · Tamil · Telugu</div></div></div></div>
        <div class="case rise" style="--pc:#3DBE7B;animation-delay:.34s"><div class="ch"><span class="cn">Safety induction</span></div><p>Induction was a paperwork exercise. The agent walks SOP steps with video verification, quiz and certificate.</p><div class="cm"><div class="m"><div class="mn">Audit-ready</div><div class="ml">ISO 27001 logs</div></div></div></div>
        <div class="case rise" style="--pc:#FF9518;animation-delay:.41s"><div class="ch"><span class="cn">Compliance assessment</span></div><p>Completion sat below 40% with regulators watching. A deterministic flow takes every worker through every step.</p><div class="cm"><div class="m"><div class="mn">100%</div><div class="ml">audit trail</div></div></div></div>
        <div class="case rise" style="--pc:#7C6BF0;animation-delay:.48s"><div class="ch"><span class="cn">L&D back office</span></div><p>Admin ate 60% of the L&D team's time. A background agent auto-assigns, reminds, syncs and reports.</p><div class="cm"><div class="m"><div class="mn">−38%</div><div class="ml">L&D ops time</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.55s"><div class="ch"><span class="cn">Sales roleplay</span></div><p>New reps took 3 months to reach quota. The agent runs 20+ scenarios and scores tone, empathy and accuracy.</p><div class="cm"><div class="m"><div class="mn">Always on</div><div class="ml">scenario coaching</div></div></div></div>
      </div>
    </div>`,
  },
  {
    id: 'ai7', theme: 'darker', title: 'Pricing',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Pricing · pay for what you use</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Credits, not licences. <span style="color:var(--yellow)">₹0.37 per interaction, typical.</span></h2>
      <div class="tiers rise" style="animation-delay:.2s">
        <div class="tier"><div class="tname">Included</div><div class="tfor">With every skillBetter plan</div><ul><li>Free monthly credits</li><li>2 agents, chat only</li><li>Your first agent is 10 minutes away — no setup fee</li></ul></div>
        <div class="tier hot"><div class="tname">Growth</div><div class="tfor">Scaling teams</div><ul><li>Rollover credits &amp; analytics</li><li>Voice agents + 20+ hooks</li><li>Voice at ₹5/min vs ₹12/min industry — ~58% saving</li></ul></div>
        <div class="tier"><div class="tname">Enterprise</div><div class="tfor">Dedicated &amp; private</div><ul><li>Custom credit pool, SLA</li><li>Private deployment, white-label</li><li>Per-agent, per-team cost limits &amp; token logs</li></ul></div>
      </div>
      <div class="databar rise" style="animation-delay:.4s;margin-top:18px;">
        <div class="dbtop"><span class="dbn">Worked example</span><span class="dbt">5,000 workers on a multi-step chat agent ≈ 12,400 credits ≈ <b style="color:var(--yellow)">₹1,860 a month</b>. Built by your L&amp;D team — no data-science hires.</span></div>
      </div>
    </div>`,
  },
  {
    id: 'ai8', theme: 'dark', title: 'Proof + next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Already in production</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Agents are working shifts today.</h2>
      <div class="modelrow rise" style="animation-delay:.2s;margin-top:16px;">
        <div class="mstat"><div class="n">IFFCO Tokio</div><div class="l">AI Max coaching ~30,000 sales professionals</div></div>
        <div class="mstat"><div class="n">Subway</div><div class="l">Hiring agent live; HRMS integration shipped in one day</div></div>
        <div class="mstat"><div class="n">Reliance</div><div class="l">700K MAU · recruitment &amp; onboarding agents deployed</div></div>
        <div class="mstat"><div class="n">Meesho</div><div class="l">goBetter bot in enterprise validation</div></div>
      </div>
      <div class="ctacards" style="margin-top:22px;">
        <div class="ctac rise" style="animation-delay:.4s"><div class="num">01</div><h4>A 30-minute build call</h4><p>Bring one painful process. We build the agent on the call, on your documents, and you talk to it before we hang up.</p></div>
        <div class="ctac rise" style="animation-delay:.47s"><div class="num">02</div><h4>A two-week pilot</h4><p>One site or team, one agent, real workers. You see completion, cost per interaction and the audit trail.</p></div>
        <div class="ctac rise" style="animation-delay:.54s"><div class="num">03</div><h4>Scale on credits</h4><p>Add agents and languages as they earn it — the meter, the logs and the limits are all yours to see.</p></div>
      </div>
    </div>`,
  },
]

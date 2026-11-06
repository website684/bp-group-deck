import type { SlideDef } from '../lib/types'
import { icons } from './html'
import { svg, makeRail, bar, row, problemSlide, plainSlide, coverRing } from './story-kit'
import { clmsSlides } from './clms'

// DTSS (SIS Group) · skillBetter LMS, final call with leadership (Nov 2026).
// Built on the CLMS story grammar. Order follows the DTSS requirement mail ("MOM & Next Steps"):
// two users (trainer and employee), integration, content upgrade with AI, evaluation and
// certification, content management, trainer management, gamification, nudges, reports.
// Grounded in the DTSS demo org on the platform (8 DTSS housekeeping reels, catalogues by role,
// offline classes with trainer feedback) and the DTSS-branded app (AI reels in Hindi/English).
// Status words: Live = runs today; Configured = set up per client on live features.

const STEPS = ['Integrate', 'Assign', 'Content', 'Learn', 'Trainers', 'Certify', 'Engage', 'Nudge', 'Reports']
const rail = makeRail(STEPS, [3, 6, 9], false)
const Q = 'On site today'

export const dtssCss = `<style>
.dt-tl { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; position: relative; margin-top: 10px; }
.dt-tl::before { content: ""; position: absolute; left: 4%; right: 4%; top: 15px; height: 3px; background: linear-gradient(90deg, var(--yellow), #F39200); border-radius: 3px; }
.dt-tl .e { position: relative; padding: 38px 10px 0; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.dt-tl .e::before { content: ""; position: absolute; left: 10px; top: 7px; width: 18px; height: 18px; border-radius: 50%; background: #fff; border: 4px solid var(--yellow); box-shadow: 0 0 0 4px rgba(255,196,1,.18); }
.dt-tl .e .d { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--yellow); }
.dt-tl .e b { display: block; font-family: var(--disp); font-size: .98rem; color: #fff; margin: 4px 0 6px; line-height: 1.25; }
.dt-tl .e p { margin: 0; font-size: .8rem; line-height: 1.45; color: rgba(255,255,255,.78); }
.dt-sites { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
.dt-sites .c { background: #fff; border: 1px solid var(--border); border-top: 4px solid var(--sc); border-radius: 14px; padding: 13px 14px; display: flex; flex-direction: column; gap: 7px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.dt-sites .c h4 { margin: 0; font-family: var(--disp); font-size: 1rem; color: var(--ink); }
.dt-sites .c .k { font-family: var(--mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: #6b7280; }
.dt-sites .c p { margin: 0; font-size: .78rem; line-height: 1.42; color: var(--text); }
.dt-sites .c .pk { display: flex; flex-wrap: wrap; gap: 4px; }
.dt-sites .c .pk span { font-size: 10.5px; background: #f3f4f6; border-radius: 999px; padding: 3px 8px; color: #1f2937; }
.dt-sites .c .ce { margin-top: auto; font-size: .76rem; font-weight: 600; color: #1a8f52; border-top: 1px dashed var(--border); padding-top: 7px; }
.dt-days { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
.dt-days .s { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 8px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.dt-days .s .w { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--yellow); }
.dt-days .s h4 { margin: 0; font-family: var(--disp); font-size: 1rem; color: #fff; }
.dt-days .s .x { font-size: .78rem; line-height: 1.4; color: #ffb4ae; background: rgba(208,39,29,.14); border-radius: 8px; padding: 7px 8px; }
.dt-days .s .y { font-size: .78rem; line-height: 1.4; color: #c8f5dc; background: rgba(61,190,123,.14); border-radius: 8px; padding: 7px 8px; flex: 1; }
.dt-why { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 18px; }
.dt-why .r { display: grid; grid-template-columns: 1fr 26px 1.25fr; gap: 10px; align-items: center; background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 11px 14px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.dt-why .r .p { font-size: .84rem; color: #b91c1c; font-weight: 600; line-height: 1.35; }
.dt-why .r .a { color: var(--navy); font-weight: 700; text-align: center; }
.dt-why .r .f { font-size: .82rem; color: var(--text); line-height: 1.4; }
.dt-why .r .f b { color: var(--ink); }
.dt-asks { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.dt-asks .a { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 13px 15px; display: flex; flex-direction: column; gap: 6px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.dt-asks .a .n { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--navy); display: flex; justify-content: space-between; }
.dt-asks .a .n em { font-style: normal; color: #1a8f52; } .dt-asks .a .n em.c { color: #8a6d00; }
.dt-asks .a b { font-family: var(--disp); font-size: .98rem; color: var(--ink); }
.dt-asks .a p { margin: 0; font-size: .8rem; line-height: 1.42; color: var(--text); }
.dt-two { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.dt-two .u { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); border-radius: 16px; padding: 20px 22px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.dt-two .u .r { font-family: var(--mono); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--yellow); }
.dt-two .u h4 { margin: 6px 0 10px; font-family: var(--disp); font-size: 1.35rem; color: #fff; }
.dt-two .u li { list-style: none; display: flex; gap: 10px; font-size: .92rem; line-height: 1.45; color: rgba(255,255,255,.85); margin: 0 0 9px; }
.dt-two .u ul { padding: 0; margin: 0; }
.dt-two .u li::before { content: "✓"; color: var(--yellow); font-weight: 700; }
.dt-reels { display: grid; grid-template-columns: 210px 1fr; gap: 16px; align-items: start; }
.dt-reels .ph { border-radius: 26px; overflow: hidden; border: 7px solid #0b1030; box-shadow: 0 30px 60px -24px rgba(0,0,0,.5); background: #000; }
.dt-reels .ph img { display: block; width: 100%; height: 400px; object-fit: cover; object-position: top; }
.dt-tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 9px; }
.dt-tiles .t { height: 150px; border-radius: 12px; padding: 10px; color: #fff; display: flex; flex-direction: column; justify-content: flex-end; background: linear-gradient(165deg, var(--c1), var(--c2)); position: relative; animation: telpop .45s var(--ease) both; animation-delay: var(--d); box-shadow: 0 12px 24px -14px rgba(0,0,0,.5); }
.dt-tiles .t::before { content: "▶"; position: absolute; top: 9px; left: 10px; font-size: 11px; opacity: .9; }
.dt-tiles .t::after { content: "AI"; position: absolute; top: 8px; right: 9px; font-family: var(--mono); font-size: 9.5px; background: rgba(255,255,255,.22); padding: 2px 6px; border-radius: 999px; }
.dt-tiles .t b { font-family: var(--disp); font-size: .9rem; line-height: 1.2; }
.dt-tiles .t small { font-size: 10.5px; opacity: .85; margin-top: 3px; }
.dt-cal { display: grid; grid-template-columns: 120px repeat(5, 1fr); gap: 6px; font-size: 11.5px; }
.dt-cal .h { font-family: var(--mono); font-size: 10.5px; color: #6b7280; text-transform: uppercase; letter-spacing: .06em; padding: 4px 2px; }
.dt-cal .tr { font-weight: 600; color: #111827; padding: 8px 4px; }
.dt-cal .tr small { display: block; font-weight: 400; color: #6b7280; font-size: 10.5px; }
.dt-cal .s { border-radius: 8px; padding: 7px 8px; line-height: 1.3; background: var(--sb, #eef2ff); color: #1e2a6e; border-left: 3px solid var(--sl, #1B2D93); }
.dt-cal .s small { display: block; color: #4b5563; font-size: 10px; }
.dt-cal .e { border-radius: 8px; background: #f7f8fb; }
.dt-rep { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.dt-rep .p { background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 14px 16px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.dt-rep .p .k { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--navy); }
.dt-rep .p h4 { margin: 4px 0 10px; font-family: var(--disp); font-size: 1.02rem; color: var(--ink); }
.dt-rep .p .ln { display: grid; grid-template-columns: 1fr 70px 44px; gap: 8px; align-items: center; font-size: .78rem; color: #111827; padding: 6px 0; border-bottom: 1px solid #eef0f4; }
.dt-rep .p .ln .b { height: 7px; border-radius: 9px; background: #eef0f4; overflow: hidden; }
.dt-rep .p .ln .b i { display: block; height: 100%; width: var(--w); background: var(--bc, #3dbe7b); border-radius: 9px; }
.dt-rep .p .ln .v { font-family: var(--mono); font-size: 10.5px; text-align: right; }
.dt-rep .p .ft { margin-top: 10px; font-size: .76rem; color: #6b7280; }
.dt-cust { display: grid; grid-template-columns: 1.1fr .9fr; gap: 14px; }
.dt-cert { background: linear-gradient(135deg, #fff, #fff8e1); border: 2px solid var(--yellow); border-radius: 14px; padding: 16px 18px; text-align: center; color: #111827; }
.dt-cert .k { font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: #8a6d00; }
.dt-cert h4 { margin: 6px 0 2px; font-family: var(--disp); font-size: 1.2rem; }
.dt-cert p { margin: 0; font-size: .8rem; color: #4b5563; }
.dt-ph2 { display: flex; gap: 14px; justify-content: center; }
.dt-ph2 .ph { width: 220px; border-radius: 26px; border: 7px solid #0b1030; background: #f3f4f6; overflow: hidden; box-shadow: 0 30px 60px -24px rgba(0,0,0,.5); }
.dt-ph2 .ph .top { background: #F39200; color: #fff; padding: 22px 12px 10px; font-weight: 700; font-size: 12.5px; }
.dt-ph2 .ph .top small { display: block; font-weight: 400; opacity: .9; font-size: 10.5px; }
.dt-ph2 .ph .bd { padding: 10px; display: flex; flex-direction: column; gap: 7px; min-height: 300px; }
.dt-ph2 .ph .it { background: #fff; border-radius: 10px; padding: 8px 10px; font-size: 11px; color: #111827; display: flex; justify-content: space-between; align-items: center; gap: 6px; box-shadow: 0 1px 2px rgba(0,0,0,.06); }
.dt-ph2 .ph .it small { display: block; color: #6b7280; font-size: 10px; }
.dt-ph2 .ph .ok { color: #1a8f52; font-weight: 700; font-size: 11px; } .dt-ph2 .ph .no { color: #b91c1c; font-weight: 700; font-size: 11px; }
.dt-ph2 .ph .btn { margin-top: auto; background: #1B2D93; color: #fff; text-align: center; border-radius: 10px; padding: 9px; font-size: 11.5px; font-weight: 600; }
.dt-ph2 .cap { text-align: center; font-family: var(--mono); font-size: 10.5px; color: rgba(255,255,255,.6); margin-top: 8px; }
</style>`

const assignUI = `
<div class="tm">
  ${bar('skillBetter · Assignment rules · DTSS', 'Live')}
  <div class="tm-body">
    <div class="tm-rows">
      ${row('Compulsory · onboarding path', 'Every new joiner · by role: Housekeeping, Security, Landscaping, F&B/Pantry · due in 7 days', 'Compulsory', 'r')}
      ${row('Refresher · chemical safety', 'All housekeeping staff · every 6 months · auto-reassigned on expiry', 'Refresher', 'y')}
      ${row('Industry pack · hospitals', 'Staff mapped to hospital sites · infection control, biomedical waste', 'Industry', 'b')}
      ${row('Level 2 · supervisor readiness', 'Housekeeping staff with Level 1 complete and 6 months on site', 'Level', 'g')}
    </div>
    <div class="tm-h" style="margin:12px 0 6px"><b>Catalogue · DTSS by role</b><span>live in your org</span></div>
    <div class="tm-gate3"><span>Housekeeping</span><span>Security</span><span>Gardening · Landscaping</span><span>F&amp;B · Pantry</span><span>Sales</span><span>Supervisor</span></div>
  </div>
</div>`

const integUI = `
<div class="tm">
  ${bar('skillBetter · Integrations · onboarding app and ERP', 'Live')}
  <div class="tm-body">
    <div class="tm-rows">
      ${row('Onboarding app · new joiner', 'Ramesh K. · Housekeeping · joined today · enrolled in the compulsory path in their language', 'Enrolled', 'g')}
      ${row('ERP · employee-site mapping', 'Moved to a hospital site · hospital industry pack assigned automatically', 'Assigned', 'b')}
      ${row('ERP · site master', 'New customer site added · site appears in trainer schedules and reports', 'Synced', 'g')}
      ${row('ERP ← completion status', 'Certificates and completions written back, so both systems show the same picture', 'Synced', 'g')}
      ${row('ERP · employee exit', 'Access closed, learning record kept for customer and audit reports', 'Closed', 'y')}
    </div>
    <div class="tm-h" style="margin:12px 0 0"><b>How it connects</b><span>API · webhooks · SSO</span></div>
  </div>
</div>`

const trainerCal = `
<div class="tm">
  ${bar('skillBetter · Trainer schedule · week of 9 Nov · North zone', 'Live')}
  <div class="tm-body">
    <div class="dt-cal">
      <div class="h">Trainer</div><div class="h">Mon</div><div class="h">Tue</div><div class="h">Wed</div><div class="h">Thu</div><div class="h">Fri</div>
      <div class="tr">Sunil M.<small>Housekeeping · fire safety</small></div>
      <div class="s">Hospital, Gurugram<small>Chemical safety · 24</small></div><div class="e"></div>
      <div class="s">Tech park, Noida<small>Spot the hazard · 31</small></div><div class="e"></div>
      <div class="s" style="--sb:#ecfdf5;--sl:#1a8f52">Mall, Delhi<small>Refresher · 18</small></div>
      <div class="tr">Priya R.<small>F&amp;B · pantry hygiene</small></div>
      <div class="e"></div><div class="s">Corporate office<small>Pantry hygiene · 12</small></div>
      <div class="s">Hotel, Aerocity<small>Food safety · 20</small></div>
      <div class="s" style="--sb:#fff7ed;--sl:#FF9518">Airport lounge<small>Induction · 9</small></div><div class="e"></div>
      <div class="tr">Arif K.<small>Security · soft skills</small></div>
      <div class="s">Bank branch<small>Customer handling · 14</small></div><div class="e"></div><div class="e"></div>
      <div class="s">Factory, Manesar<small>Emergency drill · 40</small></div><div class="e"></div>
    </div>
    <div class="tm-rows" style="margin-top:10px">
      ${row('Offline class · Housekeeping Safety &amp; Hygiene', 'Site address, trainer, mandatory flag and a feedback form after the session', 'Published', 'g')}
    </div>
  </div>
</div>`

export const trainerPhones = `
<div class="dt-ph2">
  <div><div class="ph"><div class="top">Trainer · Sunil M.<small>Hospital, Gurugram · Chemical safety</small></div><div class="bd">
    <div class="it"><div>Ramesh K.<small>Housekeeping</small></div><span class="ok">Present</span></div>
    <div class="it"><div>Sunita D.<small>Housekeeping</small></div><span class="ok">Present</span></div>
    <div class="it"><div>Manoj P.<small>Pantry</small></div><span class="no">Absent</span></div>
    <div class="it"><div>Scan QR · 21 more<small>participants check in from their phone</small></div><span class="ok">21</span></div>
    <div class="btn">Start the questionnaire</div>
  </div></div><div class="cap">1 · attendance at the site</div></div>
  <div><div class="ph"><div class="top">Ramesh K.<small>Chemical safety · after the session</small></div><div class="bd">
    <div class="it"><div>Which two chemicals must never be mixed?<small>✓ Bleach and acid cleaner</small></div></div>
    <div class="it"><div>First step if a chemical splashes in the eye?<small>✓ Rinse with clean water</small></div></div>
    <div class="it"><div>Score<small>5 of 5 · certificate issued</small></div><span class="ok">Pass</span></div>
    <div class="it"><div>Rate the session<small>★★★★★ · clear and practical</small></div></div>
    <div class="btn">Done</div>
  </div></div><div class="cap">2 · questionnaire on their phone</div></div>
</div>`

const nudgeUI = `
<div class="tm">
  ${bar('skillBetter · Nudges and escalation · compulsory onboarding path', 'Live')}
  <div class="tm-body">
    <div class="tm-rows">
      ${row('Day 0 · assigned', 'Push notification and in-app banner, in their language', 'Push', 'b')}
      ${row('Day 2 · not started', 'Reminder with a 60-second reel to restart', 'Reminder', 'b')}
      ${row('Day 5 · still pending', 'Site supervisor alerted with the names on that site', 'Supervisor', 'y', 'warn')}
      ${row('Day 7 · overdue', 'Escalated to the area manager; shows on your internal dashboard only', 'Escalated', 'r', 'hot')}
    </div>
    <div class="tm-h" style="margin:12px 0 0"><b>Cadence and escalation levels are set by you</b><span>per path</span></div>
  </div>
</div>`

export const custReport = `
<div class="tm">
  ${bar('skillBetter · Customer training report · City Hospital, Gurugram · October', 'Shareable')}
  <div class="tm-body">
    <div class="tm-stats" style="--n:4;margin:0"><div><div class="n">142</div><div class="l">DTSS staff deployed</div></div><div><div class="n g">100%</div><div class="l">Compulsory training done</div></div><div><div class="n">6</div><div class="l">Trainer sessions on site</div></div><div><div class="n g">4.6 / 5</div><div class="l">Session feedback</div></div></div>
    <div class="tm-rows" style="margin-top:10px">
      ${row('Infection control · hospital pack', '138 of 142 certified · 4 new joiners due this week', '97%', 'g')}
      ${row('Chemical safety refresher', 'Trainer-led on 14 Oct · 41 attended · average score 4.4 of 5', 'Done', 'g')}
      ${row('Self-learning this month', '1,260 lessons and reels completed on the app', 'Active', 'b')}
    </div>
  </div>
</div>`

const repPanels = `
<div class="dt-rep">
  <div class="p" style="--d:.1s"><div class="k">Trainers</div><h4>Who trained what, and how well</h4>
    <div class="ln"><span>Sunil M. · housekeeping</span><span class="b"><i style="--w:92%"></i></span><span class="v">22 sess.</span></div>
    <div class="ln"><span>Priya R. · F&amp;B</span><span class="b"><i style="--w:78%"></i></span><span class="v">18 sess.</span></div>
    <div class="ln"><span>Arif K. · security</span><span class="b"><i style="--w:55%;--bc:#FF9518"></i></span><span class="v">11 sess.</span></div>
    <div class="ft">Sessions, people trained, average score and feedback per trainer; subjects each one is certified to teach.</div></div>
  <div class="p" style="--d:.2s"><div class="k">Employees</div><h4>Who has finished what was assigned</h4>
    <div class="ln"><span>Compulsory onboarding</span><span class="b"><i style="--w:94%"></i></span><span class="v">94%</span></div>
    <div class="ln"><span>Refreshers on time</span><span class="b"><i style="--w:81%"></i></span><span class="v">81%</span></div>
    <div class="ln"><span>Industry packs</span><span class="b"><i style="--w:68%;--bc:#FF9518"></i></span><span class="v">68%</span></div>
    <div class="ft">By site, region, role and level, with a list to push and a list of who is cleared to deploy where.</div></div>
  <div class="p" style="--d:.3s"><div class="k">Career path</div><h4>Who is eligible for the next role</h4>
    <div class="ln"><span>Housekeeping → Supervisor</span><span class="b"><i style="--w:46%"></i></span><span class="v">46</span></div>
    <div class="ln"><span>Guard → Head guard</span><span class="b"><i style="--w:38%"></i></span><span class="v">38</span></div>
    <div class="ln"><span>Pantry → F&amp;B lead</span><span class="b"><i style="--w:21%"></i></span><span class="v">21</span></div>
    <div class="ft">The pool of people whose completed training and levels make them eligible, by region.</div></div>
</div>`

const nodes: [number, number, string, string, string][] = [
  [200, 50, 'M200,50 A150,150 0 0,1 350,200', 'Join', 'and assign'],
  [350, 200, 'M350,200 A150,150 0 0,1 200,350', 'Learn', 'on the app'],
  [200, 350, 'M200,350 A150,150 0 0,1 50,200', 'Train', 'on site'],
  [50, 200, 'M50,200 A150,150 0 0,1 200,50', 'Prove', 'to customers'],
]
const ringG = nodes.map(([x, y, a, l1, l2], i) => `<g class="cyc fnode2"><path class="arc" d="${a}"/><circle cx="${x}" cy="${y}" r="44"/><text x="${x}" y="${y - 12}" text-anchor="middle" class="nn">0${i + 1}</text><text x="${x}" y="${y + 5}" text-anchor="middle" class="nl">${l1}</text><text x="${x}" y="${y + 20}" text-anchor="middle" class="nl">${l2}</text></g>`).join('')
const ringPanes = [
  ['01 · Join and assign', 'A new joiner arrives from your onboarding app; the ERP says which site and industry. The right compulsory path is assigned the same day.', 'Nobody starts on site untrained'],
  ['02 · Learn on the app', 'Reels of a minute or two, lessons and site instructions in Hindi or their own language, on their phone, between shifts.', 'Learning that actually gets finished'],
  ['03 · Train on site', 'Trainers are scheduled to customer sites, mark attendance there, and run a questionnaire on each participant’s phone.', 'Proof of every session, and how well it landed'],
  ['04 · Prove to customers', 'Each customer sees that the people on their premises are trained, and kept trained, every month.', 'A report you can put in front of any customer'],
].map(([t, d, p]) => `<div class="cycpane fpane"><div class="t">${t}</div><p>${d}</p><div class="pr"><span>Proof</span>${p}</div></div>`).join('')

const SITE_RISK = [
  ['a wrong mop in an ICU spreads infection; waste in the wrong bin is a violation.', 'the trainer demonstrates colour-coded mops and bins, then a quiz on every phone.'],
  ['a dirty washroom or a rude reply reaches the client’s admin head the same day.', 'grooming check and a washroom walk-through with the supervisor.'],
  ['a wet floor without a sign means a fall and a claim.', 'spill drill at the store, with the wet-floor sign and the reporting step.'],
  ['a room not ready on time costs a guest complaint.', 'room readiness checklist practised on a real room, timed.'],
  ['a missed PPE step on an industrial floor is an incident.', 'PPE check and hazard walk before the first shift, certificate issued.'],
]

const cred = clmsSlides.find((s) => s.id === 'cmA')!

export const dtssFeatureSlides: SlideDef[] = [
  {
    id: 'dt1', theme: 'darker', title: 'Cover',
    html: `${dtssCss}
    <div class="glow"></div>
    <div class="tel center" style="padding-top:0">
      <div class="tel-coverwrap">
        <div class="tel-covertext">
          <span class="kick">BetterPlace × DTSS and SMC · SIS Group · skillBetter · November 2026</span>
          <h1>Every person on every customer site, <em>trained, and able to prove it.</em></h1>
          <p>Built for 75,000 facility staff across DTSS and SMC. One app for your trainers and your people. Content upgraded with AI into reels they finish, trainer sessions recorded at the site, and a report every customer can see.</p>
          <div class="tel-nums" style="margin-top:24px">
            <div><div class="n">75,000</div><div class="l">DTSS and SMC staff, each brand on its own app</div></div>
            <div><div class="n">88%</div><div class="l">Course completion, against ~25% in the industry</div></div>
            <div><div class="n">35<em>+</em></div><div class="l">Languages, from one upload</div></div>
          </div>
        </div>
        ${coverRing(['Integrate', 'Assign', 'Content', 'Learn', 'Trainers', 'Certify', 'Engage', 'Reports'], ['trained', 'and proven'], false)}
      </div>
    </div>`,
  },

  plainSlide('dt2', 'light', 'What you asked for',
    'What you asked for · and where each one is answered today',
    'Nine areas from your brief. <em>Each one runs on the platform today, or is set up for you on what does.</em>',
    `<div class="dt-asks">
      ${[
        ['01 · Two users', 'Live', 'Trainers and employees, one app', 'Trainers run site sessions; employees learn on their own.'],
        ['02 · Integration', 'Live', 'Onboarding app and ERP', 'Joiners, sites, site mapping and exits flow in by API.'],
        ['03 · Content upgrade', 'Live', 'AI reels, new videos, site instructions', 'Existing content cut into reels; new 1–3 minute AI videos.'],
        ['04 · Evaluation', 'Live', 'In-content tests and trainer-led quizzes', 'Certificates on completion; effectiveness from every session.'],
        ['05 · Content management', 'Live', 'By topic, role and industry', 'Compulsory, refresher, industry and level rules.'],
        ['06 · Trainers', 'Live', 'Site schedules and attendance', 'Offline classes with site, trainer, attendance and feedback.'],
        ['07 · Gamification', 'Live', 'Simple, for your people', 'Points, badges, site leaderboards and recognition.'],
        ['08 · Nudges', 'Configured', 'Reminders, then escalation', 'Push reminders; overdue goes to supervisor, then manager.'],
        ['09 · Reports', 'Configured', 'Customer, trainer, employee, career', 'Dashboards set up to your format, on live data.'],
      ].map(([n, st, b, p], i) => `<div class="a" style="--d:${0.05 + i * 0.05}s"><div class="n">${n}<em${st === 'Live' ? '' : ' class="c"'}>${st}</em></div><b>${b}</b><p>${p}</p></div>`).join('')}
    </div>`),

  plainSlide('dt2b', 'darker', 'Built with you since July',
    'What we have built together · since our first demo in July',
    'Four months of working on your content, <em>so today you are judging a platform already shaped for DTSS and SMC.</em>',
    `<div><div class="dt-tl">
      ${[
        ['2 Jul', 'First demo', 'Reels, live classes, AI content, white-labelling for DTSS and SMC separately.'],
        ['8 Jul', 'Your scripts, made into courses', 'AIDET Process and Hand Hygiene, built from SMC’s scripts, on your demo app.'],
        ['13 Jul', 'Your SCORM, cut into bite-size', '“Wet and Dry Vacuum Cleaners” reused and broken into short lessons.'],
        ['28 Jul', 'Realistic AI video', 'A first cut using SMC staff in your uniform, for learning by watching.'],
        ['24 Aug', 'Your requirement list', 'Integration, assessments, journeys by site type, nudges, client reports, classroom training.'],
        ['Nov', 'DTSS reels live', 'Eight housekeeping reels, a DTSS catalogue by role and on-site classes in your org.'],
      ].map(([d, b, t], i) => `<div class="e" style="--d:${0.1 + i * 0.1}s"><div class="d">${d}</div><b>${b}</b><p>${t}</p></div>`).join('')}
    </div>
    <div class="tel-band ghost" style="margin-top:22px"><span class="bl">Your feedback, applied</span><p>You asked for content your people relate to, assessments at intervals, and journeys that follow the customer site. Every one of those is in the slides that follow.</p></div></div>`, { glow: true }),

  { ...cred },

  plainSlide('dt3', 'darker', 'How it comes together',
    'How it comes together · one app, two users, proof at every step',
    'Your people learn on their phones; your trainers teach at the site. <em>Every step leaves proof.</em>',
    `<div class="fr-wrap" data-cycle="2600">
      <div class="fr-ring"><svg viewBox="-10 -10 420 420"><circle class="orbit" cx="200" cy="200" r="150"/>${ringG}<circle class="core" cx="200" cy="200" r="62"/><text x="200" y="194" text-anchor="middle" class="cn">Proof</text><text x="200" y="216" text-anchor="middle" class="cs">one learning record</text></svg></div>
      <div class="fr-side">${ringPanes}
        <div class="fr-thread">Your customers buy trained people. <b>So every hour of training, on the app or on site, has to show up as proof.</b></div>
      </div>
    </div>`, { glow: true }),

  plainSlide('dt4', 'dark', 'Two users',
    'Two users, one app · the trainer and the employee',
    'Trainers who travel to customer sites, and people who learn on their own. <em>Both on the same app.</em>',
    `<div class="dt-two">
      <div class="u" style="--d:.15s"><div class="r">The trainer</div><h4>Teaches at the customer site</h4><ul>
        <li>Sees the week’s schedule: which site, which topic, how many people</li>
        <li>Shows the content on the app, then demonstrates on the floor</li>
        <li>Marks attendance at the site, or people check in by QR</li>
        <li>Starts a short questionnaire on every participant’s phone</li>
      </ul></div>
      <div class="u" style="--d:.3s"><div class="r">The employee</div><h4>Learns on their own phone</h4><ul>
        <li>Opens the app to reels of a minute or two, in Hindi or their own language</li>
        <li>Finishes the compulsory path, refreshers and site instructions</li>
        <li>Takes the test inside the content and gets a certificate</li>
        <li>Earns points and sees their team on the leaderboard</li>
      </ul></div>
    </div>`, { glow: true }),

  plainSlide('dt4b', 'dark', 'A housekeeping associate’s first 90 days',
    'The problem we are solving · a housekeeping associate’s first 90 days',
    'The first 90 days decide whether a new joiner stays. <em>Training decides whether they stay, and whether the customer is happy.</em>',
    `<div class="dt-days">
      ${[
        ['Day 0', 'Joins through the onboarding app', 'Training starts when a trainer is free, maybe weeks later.', 'Compulsory path assigned the day they join, in Hindi or their language.'],
        ['Day 1', 'Deployed to a hospital site', 'Told the site rules verbally. Infection control is a guess.', 'Hospital pack and site instructions on their phone before the shift.'],
        ['Week 2', 'First chemical spill', 'Mixes cleaners because nobody showed him the label.', '“Never Mix Chemicals” reel, then a trainer demo on site with a quiz.'],
        ['Month 2', 'Customer audit', 'Supervisor cannot prove who was trained on what.', 'Customer report: everyone on site certified, with dates.'],
        ['Month 3', 'Thinking of leaving', 'No recognition, no sense of a future.', 'Badges, team leaderboard, and a visible path to supervisor.'],
      ].map(([w, h, x, y], i) => `<div class="s" style="--d:${0.1 + i * 0.1}s"><div class="w">${w}</div><h4>${h}</h4><div class="x">${x}</div><div class="y">${y}</div></div>`).join('')}
    </div>`, { glow: true }),

  plainSlide('dt4c', 'light', 'Training follows the site',
    'Use cases · the customer site decides the training',
    'A hospital, a mall and a corporate office need different housekeeping. <em>The ERP says where each person works; the right pack follows.</em>',
    `<div class="dt-sites">
      ${[
        ['#d9452f', 'Hospital', 'Infection risk, patient areas', ['Infection control', 'Biomedical waste', 'Hand hygiene', 'AIDET'], 'Certified before entering patient areas'],
        ['#1B2D93', 'Corporate office', 'Visible, customer-facing', ['Washroom SOP', 'Pantry hygiene', 'Grooming', 'Single disc machine'], 'Customer service sign-off'],
        ['#F39200', 'Retail and malls', 'High footfall, public spaces', ['Spill response', 'Wet floor safety', 'Crowd courtesy', 'Common areas'], 'Safety test every 6 months'],
        ['#0d6b4f', 'Hotel and airport', 'Guest experience, strict standards', ['Room readiness', 'Guest courtesy', 'Fire response', 'Lost and found'], 'Ready Before They Arrive, certified'],
        ['#3b2a8a', 'Factory and campus', 'Industrial hazards', ['PPE', 'Chemical safety', 'Spot the hazard', 'Emergency drill'], 'Safety induction certificate'],
      ].map(([c, h, k, pk, ce], i) => `<div class="c" style="--sc:${c};--d:${0.08 + i * 0.08}s"><h4>${h}</h4><div class="k">${k}</div><div class="pk">${(pk as string[]).map((x) => `<span>${x}</span>`).join('')}</div><p><b>Risk:</b> ${SITE_RISK[i][0]}</p><p><b>On site:</b> ${SITE_RISK[i][1]}</p><div class="ce">✓ ${ce}</div></div>`).join('')}
    </div>
    <div class="tel-band light" style="margin-top:12px"><span class="bl">Same for every role</span><p>Security, landscaping and F&amp;B staff get their own packs on the same rules. A move from a mall to a hospital re-assigns training automatically.</p></div>`),

  problemSlide({
    id: 'dt5', theme: 'light', title: 'Integration', rail, step: 1, demo: 'Live · integrations',
    kick: 'Integrate · your onboarding app and your ERP',
    h2: 'A new joiner is enrolled the day they join, <em>and their training follows them from site to site.</em>',
    qLabel: Q, quote: 'Joiners, site moves and exits live in other systems. Training lists are updated by hand, late.',
    changes: [
      { ic: icons.plug, b: 'From the onboarding app.', t: 'A new joiner arrives with role and language, and the compulsory path is assigned the same day.' },
      { ic: icons.building, b: 'From the ERP.', t: 'Site details and employee-site mapping drive the industry pack and the trainer schedule. A site move changes the assignment.' },
      { ic: icons.repeat, b: 'Both ways.', t: 'Completion status goes back to your ERP; an exit closes access and keeps the record for audits.' },
    ],
    proof: { n: 'Zepto', p: 'ties deployment to training through a deep API link: only trained riders get orders.' },
    vis: integUI, wide: true,
    foot: 'API-based sync with HRMS and onboarding systems is live; the DTSS ERP mapping is configured in the first weeks. Names illustrative.',
  }),

  problemSlide({
    id: 'dt6', theme: 'light', title: 'Assign', rail, step: 2, demo: 'Live · catalogues and rules',
    kick: 'Assign · content by topic, role and industry',
    h2: 'The right course reaches the right person, <em>by role, site and industry, without anyone sending lists.</em>',
    qLabel: Q, quote: 'Content sits in folders. Who should do what is decided site by site, on spreadsheets.',
    changes: [
      { ic: icons.layers, b: 'Catalogues by role.', t: 'Housekeeping, security, landscaping, F&amp;B and pantry, sales and supervisor, already set up for DTSS.' },
      { ic: icons.check, b: 'Rules, not lists.', t: 'Compulsory for onboarding, refreshers that repeat, industry packs by site, and levels that unlock in order.' },
      { ic: icons.repeat, b: 'Kept current.', t: 'When someone moves site or role, the rules re-assign on their own.' },
    ],
    proof: { n: '500K+', p: 'associates at <b>Reliance Retail</b> trained on role-based paths in 14 languages, live in 8 weeks.' },
    vis: assignUI, wide: true,
    foot: 'Catalogues, playlists and assignment are live; the DTSS catalogue by role is already in your demo org. Rules shown are examples.',
  }),

  problemSlide({
    id: 'dt7', theme: 'dark', title: 'Content upgrade with AI', rail, step: 3, demo: 'Live · AI content',
    kick: 'Content · your existing material, upgraded with AI',
    h2: 'Your SOPs and training decks become reels of a minute or two, <em>in Hindi, English or any language your people speak.</em>',
    qLabel: Q, quote: 'Long videos and slide decks that nobody finishes on a phone, mostly in English.',
    changes: [
      { ic: icons.play, b: 'Existing content into reels.', t: 'A 40-minute deck becomes a set of short reels, each with one idea and a question at the end.' },
      { ic: icons.zap, b: 'New AI videos.', t: '1–3 minute videos in 2D, 3D or realistic style, with your staff in your uniform, as in the SMC first cut, with questions at intervals.' },
      { ic: icons.lang, b: 'Every language from one upload.', t: 'Any video, PDF or PPT translated into 35+ languages in under 15 minutes, conversational, not literal.' },
    ],
    proof: { n: '<15 min', p: 'to translate a course into another language with AI. 500K+ translations done on the platform.' },
    vis: `<div class="dt-reels"><div class="ph"><img src="assets/product/dtss/reel-housekeeping-role.jpg" alt="DTSS housekeeping reel"/></div>
      <div><div class="tm" style="margin:0">${bar('skillBetter · AI content studio · DTSS', 'Live')}<div class="tm-body"><div class="tm-rows">
        ${row('Housekeeping SOP · 38 slides', 'Cut into 7 reels of 60–90 seconds · Hindi and English', 'Done', 'g')}
        ${row('Fire in the pantry · new topic', 'AI video, 2 minutes, realistic style', 'Done', 'g')}
        ${row('Site instructions · City Hospital', 'One-page instruction and 5 questions, generated from the site SOP', 'Draft', 'y')}
        ${row('Translate · Tamil, Bengali, Odia', 'Voice and tone set per language', 'Running', 'b')}
      </div></div></div></div></div>`,
    foot: 'The reel shown is live in the DTSS app today. AI reels, translation and AI video are live; site-instruction generation is configured on your SOPs.',
  }),

  plainSlide('dt7b', 'light', 'How content gets made and approved',
    'Content governance · who writes, who checks, who approves',
    'Your SMEs stay in charge of what your people learn. <em>AI does the heavy lifting in between.</em>',
    `<div>
      <div class="dt-days" style="grid-template-columns:repeat(5,1fr)">
        ${[
          ['01 · Brief', 'Your SME shares the source', 'An SOP, a SCORM file, a long video or a 5-line idea.'],
          ['02 · Draft', 'We draft the script', 'Steps, scenes and questions, in your words and uniforms.'],
          ['03 · Review', 'Your SME checks the script', 'Fixes are cheapest here, before any video is made.'],
          ['04 · Produce', 'Video, reels and quiz made', '2D, 3D or realistic; translated into your languages.'],
          ['05 · Approve', 'You approve, then publish', 'Nothing reaches your people without your sign-off.'],
        ].map(([w, h, y], i) => `<div class="s" style="--d:${0.08 + i * 0.08}s;background:var(--surface,#f7f8fb);border-color:var(--border)"><div class="w" style="color:var(--navy)">${w}</div><h4 style="color:var(--ink)">${h}</h4><div class="y" style="color:var(--text);background:#fff">${y}</div></div>`).join('')}
      </div>
      <div class="tel-close" style="margin-top:14px;grid-template-columns:1fr 1fr">
        <div class="tel-band light" style="margin:0"><span class="bl">Your content stays yours</span><p>Everything made for DTSS and SMC belongs to you, and exports in standard formats if you ever leave. One to two revision rounds are built into every video.</p></div>
        <div class="tel-band light" style="margin:0"><span class="bl">Ready from day one</span><p>250+ ready courses come with the platform: safety, communication, financial literacy, workplace basics. Your library list is in the pack.</p></div>
      </div>
    </div>`),

  plainSlide('dt8', 'light', 'Already built for DTSS',
    'Sample content · already built for DTSS and live in your app',
    'We did not wait for the contract. <em>These DTSS housekeeping reels are already on the platform.</em>',
    `<div class="dt-reels"><div class="ph"><img src="assets/product/dtss/reel-housekeeping-role.jpg" alt="Your role as a housekeeping assistant"/></div>
      <div>
        <div class="dt-tiles">
          ${[
            ['Ready Before They Arrive', 'Housekeeping', '#1B2D93', '#2142B9'],
            ['Common Area Cleaning', 'Housekeeping', '#0d6b4f', '#1a9a6c'],
            ['The Single Disc Machine', 'Equipment', '#7a1f5c', '#c2397d'],
            ['Golden Rules of Cleaning', 'Housekeeping', '#8a5a00', '#d68a00'],
            ['Germs Travel', 'Hygiene', '#0d7d85', '#18a7b0'],
            ['Fire in the Pantry', 'Safety', '#a12b1f', '#d9452f'],
            ['Never Mix Chemicals', 'Safety', '#3b2a8a', '#5b48c2'],
            ['Spot the Hazard', 'Safety', '#1f3b52', '#32607f'],
          ].map(([t, s, a, b], i) => `<div class="t" style="--c1:${a};--c2:${b};--d:${0.05 + i * 0.05}s"><b>${t}</b><small>${s}</small></div>`).join('')}
        </div>
        <div class="tel-band ghost" style="margin-top:12px"><span class="bl">In your app</span><p>“Your Role as a Housekeeping Assistant” plays in Hindi and English, with DTSS branding. Also on your demo app: AIDET and Hand Hygiene from SMC’s scripts, and your SCORM vacuum-cleaner course cut into bite-size lessons.</p></div>
      </div>
    </div>`),

  problemSlide({
    id: 'dt9', theme: 'light', title: 'Learn on the app', rail, step: 4, demo: 'Live · learner app',
    kick: 'Learn · on their phone, in their language, between shifts',
    h2: 'An app your people open on their own, <em>and finish what they start.</em>',
    qLabel: Q, quote: 'Training means a classroom day off the floor, or a link nobody opens.',
    changes: [
      { ic: icons.play, b: 'Reels first.', t: 'A reel feed on the home screen leads into lessons, assessments, events and catalogues.' },
      { ic: icons.lang, b: 'Their language.', t: 'Each person picks the language before starting; progress and coins stay with them.' },
      { ic: icons.check, b: 'Works on any phone, offline too.', t: 'Download at the site office, finish on the bus.' },
    ],
    proof: { n: '88%', p: 'course completion across our clients, against about 25% in the industry. <b>Amazon</b> reached 91%.' },
    vis: `<div class="tm-fan">
      <div class="ph"><img src="assets/product/figma/skilling/mobile-learning-home-new-feed.png" alt="Learning home"/><em>Home and reels</em></div>
      <div class="ph"><img src="assets/product/figma/skilling/skillbetter-mobile-course-overview-chapter-states.png" alt="Course"/><em>Compulsory course</em></div>
      <div class="ph"><img src="assets/product/figma/skilling/skillbetter-mobile-offline-downloads-sheet.png" alt="Offline"/><em>Works offline</em></div>
      <div class="chipf" style="left:0;top:16%;animation-delay:0s,.8s"><b>हिंदी</b>language chosen per course</div>
      <div class="chipf" style="right:0;top:40%;animation-delay:1.5s,1s"><b>3 of 5</b>chapters done</div>
    </div>`,
    foot: 'Production app screens. The DTSS-branded app is live with your logo and reels.',
  }),

  problemSlide({
    id: 'dt10', theme: 'light', title: 'Trainer schedule', rail, step: 5, demo: 'Live · live classes',
    kick: 'Trainers · 1 of 2 · schedules by customer site',
    h2: 'Every trainer’s week, site by site, <em>planned in one calendar.</em>',
    qLabel: Q, quote: 'Trainer visits are planned on phone calls. Nobody can say which site was covered last month.',
    changes: [
      { ic: icons.clock, b: 'Sessions by site.', t: 'Each offline class carries the site address, trainer, topic, time and whether it is mandatory.' },
      { ic: icons.users, b: 'The right people invited.', t: 'Staff mapped to that site and role are added; they see it under Events on the app.' },
      { ic: icons.layers, b: 'Bulk planning.', t: 'Create a month of sessions across sites in one go.' },
    ],
    proof: { n: '39', p: 'live and offline classes already set up in your demo org, including “Housekeeping Safety &amp; Hygiene · on-site training”.' },
    vis: trainerCal, wide: true,
    foot: 'Live classes (online and offline), calendar and bulk create are live. Trainer names and sites illustrative.',
  }),

  problemSlide({
    id: 'dt11', theme: 'dark', title: 'Trainer attendance and quiz', rail, step: 5, demo: 'Live · attendance and feedback',
    kick: 'Trainers · 2 of 2 · attendance at the site, and a quiz on every phone',
    h2: 'Attendance marked at the site, <em>and a quiz on every phone that proves the session worked.</em>',
    qLabel: Q, quote: 'A signed sheet is the only proof that training happened. Whether anyone learned is a guess.',
    changes: [
      { ic: icons.check, b: 'Attendance at the site.', t: 'The trainer marks present or absent, or people check in by scanning a QR code.' },
      { ic: icons.doc, b: 'Questionnaire on their phones.', t: 'A short quiz right after the session gives a score per person: proof of training and of effectiveness.' },
      { ic: icons.chart, b: 'Feedback on the trainer.', t: 'A feedback form after each session, mandatory if you choose, feeds the trainer report.' },
    ],
    proof: { n: 'QR', p: 'check-in for classroom training and feedback after each session are live on the platform today.' },
    vis: trainerPhones,
    foot: 'Classroom attendance, post-session feedback and assessments are live. Screens are authored views of the same flows.',
  }),

  plainSlide('dt11b', 'dark', 'No signal, shared phones',
    'Trainers · when the site has no signal and not everyone has a phone',
    'A basement, a factory floor, three people to one phone. <em>The session still counts, and you can prove it happened.</em>',
    `<div class="dt-days" style="grid-template-columns:repeat(4,1fr);align-items:start">
      ${[
        ['No signal', 'Trainer’s phone works offline', 'Roster for the session downloaded beforehand; attendance and scores saved on the phone and synced when back on the network.'],
        ['No smartphone', 'Trainer marks it for them', 'For anyone without a phone, the trainer asks the questions aloud and records each answer on their own device.'],
        ['Shared phones', 'One phone, many learners', 'Each person signs in by number on the same phone in turn; results stay with the right person.'],
        ['Proof of visit', 'Time, place and a group photo', 'Session start time and location captured, with a group photo attached to the record your customer report uses.'],
      ].map(([w, h, y], i) => `<div class="s" style="--d:${0.1 + i * 0.1}s"><div class="w">${w}</div><h4>${h}</h4><div class="y">${y}</div></div>`).join('')}
    </div>
    <div class="foot" style="margin-top:12px">Offline learning, QR check-in and post-session quizzes are live. Trainer-side offline sync, assisted marking and photo proof are set up and tested on your sites in the pilot.</div>`, { glow: true }),

  problemSlide({
    id: 'dt12', theme: 'light', title: 'Evaluation and certification', rail, step: 6, demo: 'Live · assessments',
    kick: 'Certify · tests inside the content, certificates on completion',
    h2: 'Every course ends with a test, <em>and every pass ends with a certificate.</em>',
    qLabel: Q, quote: 'Completion means someone clicked through. Nobody knows if they understood.',
    changes: [
      { ic: icons.doc, b: 'Tests in the content.', t: 'Questions inside reels and lessons, and a final assessment: 12+ question types, including picture questions.' },
      { ic: icons.shield, b: 'Fair and controlled.', t: 'Random order, pass marks, retakes and due dates; face-checked proctoring for exams that matter.' },
      { ic: icons.trophy, b: 'A certificate they keep.', t: 'Issued on passing, with a refresher date. Customers can see it in their report.' },
    ],
    proof: { n: '12+', p: 'question types, including picture questions that work for staff who read little. Face-checked proctoring is optional, for exams that need it.' },
    vis: `<div class="dt-cust"><div class="tm-fan" style="height:420px"><div class="ph" style="left:20%"><img src="assets/product/figma/skilling/skillbetter-mobile-image-mcq-feedback.png" alt="Picture question"/><em>Picture question</em></div></div>
      <div style="display:flex;flex-direction:column;gap:12px;justify-content:center">
        <div class="dt-cert"><div class="k">Certificate · DTSS</div><h4>Chemical Safety</h4><p>Ramesh K. · Housekeeping<br/>Passed 5 of 5 · 14 Oct 2026 · refresher due Apr 2027</p></div>
        <div class="tm" style="margin:0">${bar('Assessment settings', 'Live')}<div class="tm-body"><div class="tm-rows">${row('Pass mark 80% · 2 retakes', 'Random order · due in 7 days', 'Set', 'g')}</div></div></div>
      </div></div>`,
    foot: 'Assessments, certificates and proctoring are live. Certificate shown is an authored example.',
  }),

  problemSlide({
    id: 'dt13', theme: 'dark', title: 'Gamification', rail, step: 7, demo: 'Live · gamification',
    kick: 'Engage · gamification that suits your people',
    h2: 'Points, badges and a site leaderboard. <em>Simple, fair, and nothing fancy.</em>',
    qLabel: Q, quote: 'Field staff have no reason to open a training app after the first day.',
    changes: [
      { ic: icons.trophy, b: 'Stars, badges and certificates.', t: 'As you asked: stars and ratings for finishing paths, passing tests and keeping refreshers on time.' },
      { ic: icons.users, b: 'Site and team leaderboards.', t: 'Sites compete, not just individuals, so supervisors push their teams.' },
      { ic: icons.eye, b: 'Recognition on the feed.', t: 'Employee of the month and best performer posts on the app’s home screen, already used in your demo org.' },
    ],
    proof: { n: '+19.7%', p: 'week-on-week retention at <b>Meesho</b> with gamified learning; +65% voluntary participation across clients.' },
    vis: `<div class="tm">${bar('skillBetter · Team leaderboard · North zone · October', 'Live')}<div class="tm-body"><div class="tm-gauges" style="margin-top:0">
      <div class="gg"><b>Team Gurugram · hospitals</b><span class="tr"><i style="--w:96%;--d:.3s"></i></span><span class="v">9,420 pts</span></div>
      <div class="gg"><b>Team Noida · offices</b><span class="tr"><i style="--w:84%;--d:.4s"></i></span><span class="v">8,210 pts</span></div>
      <div class="gg"><b>Team Aerocity · hotels</b><span class="tr"><i style="--w:71%;--d:.5s"></i></span><span class="v">6,940 pts</span></div>
      <div class="gg"><b>Team Delhi · retail</b><span class="tr"><i style="--w:52%;--bc:#FF9518;--d:.6s"></i></span><span class="v">5,080 pts</span></div>
    </div><div class="tm-rows" style="margin-top:12px">
      ${row('Badge · Safety Champion', 'All four safety reels and the test passed', '312 earned', 'g')}
      ${row('Recognition · Employee of the month', 'Posted to the app feed for the whole region', 'Live', 'b')}
    </div></div></div>`,
    foot: 'Points, badges, leaderboards and feed posts are live. Sites and numbers illustrative.',
  }),

  plainSlide('dt13b', 'light', 'Why they stop, what brings them back',
    'Engagement · why facility staff stop learning, and what brings them back',
    'Your people do not lack time or interest. <em>They lack a reason, a format that fits a shift, and someone noticing.</em>',
    `<div class="dt-why">
      ${[
        ['“It’s in English.”', '<b>Their language.</b> Hindi or any of 35, chosen per course.'],
        ['“It’s too long.”', '<b>Reels of a minute or two.</b> One idea each, between tasks.'],
        ['“No data on my phone.”', '<b>Download at the site office,</b> finish offline on the bus.'],
        ['“Nobody notices.”', '<b>Recognition on the feed,</b> employee of the month, site leaderboard.'],
        ['“Why should I?”', '<b>A path to supervisor,</b> visible in the app, unlocked by training.'],
        ['“I forgot.”', '<b>Reminders, then the supervisor,</b> then an AI call if it is compulsory.'],
      ].map(([p, f], i) => `<div class="r" style="--d:${0.06 + i * 0.06}s"><div class="p">${p}</div><div class="a">→</div><div class="f">${f}</div></div>`).join('')}
    </div>
    <div class="tel-band light" style="margin-top:12px"><span class="bl">Proof</span><p><b>Meesho:</b> +19.7% week-on-week retention with gamified reels. <b>Across clients:</b> 88% completion against about 25% in the industry. WhatsApp campaigns can carry the first nudge.</p></div>`),

  problemSlide({
    id: 'dt14', theme: 'light', title: 'Nudges and escalation', rail, step: 8, demo: 'Live · notifications',
    kick: 'Nudge · reminders that work, then escalation',
    h2: 'Reminders bring people back. <em>If they don’t, their manager hears about it.</em>',
    qLabel: Q, quote: 'Pending training is chased by phone, one supervisor at a time.',
    changes: [
      { ic: icons.zap, b: 'Push and in-app reminders.', t: 'On a cadence you set, in their language, with a short reel to restart.' },
      { ic: icons.warn, b: 'Escalation by level.', t: 'Overdue goes to the site supervisor, then the area manager, with the names to push.' },
      { ic: icons.mic, b: 'An AI call if needed.', t: 'For compulsory training, an AI voice agent can call and walk him through it.' },
    ],
    proof: { n: '+65%', p: 'voluntary participation when reminders and gamification run together, across our clients.' },
    vis: nudgeUI, wide: true,
    foot: 'Push notifications and reminder cadence are live; escalation to supervisors and managers is configured per path. The AI calling agent is live in AI Labs.',
  }),

  problemSlide({
    id: 'dt15', theme: 'light', title: 'Customer report', rail, step: 9, demo: 'Configured · dashboards',
    kick: 'Reports · 1 of 2 · for your customers',
    h2: 'Show every customer that the people on their premises are trained, <em>and kept trained, every month.</em>',
    qLabel: Q, quote: 'Customers ask for training proof at renewal. It takes days to put together, site by site.',
    changes: [
      { ic: icons.building, b: 'One report per customer site.', t: 'Staff deployed, compulsory training done, trainer sessions held, self-learning, feedback.' },
      { ic: icons.check, b: 'Certified people, by name.', t: 'Who is certified for what, with refresher dates, ready for the customer’s audit.' },
      { ic: icons.doc, b: 'Shared on a schedule.', t: 'Sent monthly, or opened by the customer on a link you control.' },
    ],
    proof: { n: '250+', p: 'data points on every learner, by person, site, city and partner, behind every report.' },
    vis: custReport, wide: true,
    foot: 'Reports are built on live platform data and configured to your format in the first weeks. Customer and numbers illustrative.',
  }),

  plainSlide('dt15b', 'dark', 'Who sees what',
    'Access · who sees what, across DTSS, SMC and your customers',
    'A hospital never sees a mall’s staff. <em>DTSS and SMC each see their own, and leadership sees both.</em>',
    `<div class="tel-status tight">
      <div class="h"></div><div class="h">Who</div><div class="h">What they see</div><div class="h">Access</div>
      ${[
        ['SIS leadership', 'DTSS and SMC together, every region and site', 'mix', 'Both brands'],
        ['DTSS or SMC admins', 'Only their own brand: people, content, trainers, reports', 'live', 'One brand'],
        ['Area manager · supervisor', 'Their region or site, and who to push', 'live', 'Their sites'],
        ['Trainer', 'Their schedule, attendees and session results', 'live', 'Own sessions'],
        ['Customer admin head', 'Only the staff deployed at their premises, certified status and visits', 'mix', 'Configured · one site'],
        ['Employee', 'Their own path, scores, certificates and next role', 'live', 'Self'],
      ].map(([b, sp, c, t], i) => `<div class="r" style="--d:${0.05 + i * 0.05}s"><i>·</i><b>${b}</b><span>${sp}</span><em class="${c}">${t}</em></div>`).join('')}
    </div>
    <div class="foot" style="margin-top:10px">Role-based access by brand, region and site is live. Customer access is set up per site as a read-only report or login, agreed with you. Hosted in India.</div>`, { glow: true }),

  plainSlide('dt16', 'light', 'Trainer, employee and career reports',
    'Reports · 2 of 2 · trainers, employees and career paths',
    'Know which trainer is good at what, who is ready to deploy, <em>and who is ready for the next role.</em>',
    `<div>${repPanels}
      <div class="foot" style="margin-top:10px">Dashboards configured to your format on live data. Names and numbers illustrative.</div></div>`),

  plainSlide('dt17', 'darker', 'AI on top',
    'AI Labs · agents on the same learning record',
    'An AI tutor that answers from your SOPs, <em>and agents that do the chasing for your team.</em>',
    `<div>
      <div class="tel-agents tai">
        ${[
          ['Saathi · DTSS coach', 'Pilot', 'Learn', 'Your training and sales coach: answers from your SOPs, runs quizzes and customer role-play, in an Indian voice.'],
          ['Content studio', 'Live', 'Content', 'Turns a deck or a PDF into reels, questions and translations, ready for review.'],
          ['Calling agent', 'Live', 'Nudge', 'Calls people with overdue compulsory training and walks them through it.'],
          ['Induction agent', 'Live', 'Certify', 'Your safety SOP as a fixed flow: every step, a test and photo proof, every time.'],
        ].map(([n, st, a, t], i) => `<div class="ag2" style="--d:${0.1 + i * 0.08}s"><h4>${n} <span class="st2 ${st.toLowerCase()}">${st}</span></h4><div class="ar">${a}</div><p>${t}</p></div>`).join('')}
      </div>
      <div class="tel-band ghost" style="margin-top:14px"><span class="bl">Safe by design</span><p>Private models hosted in India, personal data masked, answers only from your documents, and fixed flows where a step must never be skipped.</p></div>
    </div>`, { glow: true }),

  plainSlide('dt18', 'light', 'Who runs on it',
    'Proof · frontline training at scale, on this platform',
    'The same platform trains the frontline of India’s largest employers, <em>and they finish.</em>',
    `<div class="tel-clients">
      <div class="tel-case" style="--pc:var(--navy);--d:.15s"><div class="who">Retail · 18,000+ stores</div><h4>Reliance Retail</h4><div class="big">500K<em>+</em><small>associates trained</small></div><p>14 languages, live in 8 weeks, more than 60% lower training cost.</p></div>
      <div class="tel-case" style="--pc:#FF9518;--d:.3s"><div class="who">Logistics · GSF Learning Academy</div><h4>Amazon</h4><div class="big">91%<small>completion</small></div><p>222 custom audits across two business units, in several Indian languages.</p></div>
      <div class="tel-case" style="--pc:#0d7d85;--d:.45s"><div class="who">Manufacturing · metals</div><h4>Hindalco</h4><div class="big">3×<small>training coverage</small></div><p>Self-paced, gamified shop-floor training with mandatory completion tracked.</p></div>
    </div>
    <div class="foot" style="margin-top:10px">Outcomes are client-reported.</div>`),

  plainSlide('dt19', 'dark', 'What is live',
    'The honest table · what runs today, and what we set up for you',
    'Almost everything you asked for runs today. <em>Here is exactly what is live and what we configure.</em>',
    `<div class="tel-status tight">
      <div class="h"></div><div class="h">Capability</div><div class="h">What it covers</div><div class="h">Status</div>
      ${[
        ['Learner app, reels, lessons, offline', 'DTSS-branded app with your reels today', 'live', 'Live'],
        ['White-label for DTSS and SMC', 'Each brand on its own app and catalogue, one admin', 'live', 'Live'],
        ['AI reels, AI video, translation', 'Existing content into reels; new 1–3 min videos; 35+ languages', 'live', 'Live'],
        ['Catalogues and assignment rules', 'Topic, role, industry; compulsory, refresher, levels', 'live', 'Live'],
        ['Live and offline classes, attendance, feedback', 'Site sessions, QR check-in, post-session forms', 'live', 'Live'],
        ['Assessments, certificates, proctoring', '12+ question types, pass marks, certificates', 'live', 'Live'],
        ['Gamification and recognition', 'Points, badges, leaderboards, feed posts', 'live', 'Live'],
        ['Integration with onboarding app and ERP', 'API sync live; DTSS field mapping in the first weeks', 'mix', 'Live · mapping configured'],
        ['Escalation to supervisors and managers', 'On live notifications and org hierarchy', 'mix', 'Configured'],
        ['Customer, trainer, employee and career reports', 'Your formats on live data', 'mix', 'Configured'],
      ].map(([b, s, c, t], i) => `<div class="r" style="--d:${0.05 + i * 0.04}s"><i>·</i><b>${b}</b><span>${s}</span><em class="${c}">${t}</em></div>`).join('')}
    </div>`),

  plainSlide('dt20', 'darker', 'How we start',
    'How we start · one region first, then every wave',
    'One region live in eight weeks, <em>then the rest of the 75,000 in waves you control.</em>',
    `<div>
      <div class="tel-phase4">
        <div class="ph4" style="--d:.15s"><div class="w">Weeks 1–3</div><h4>Data and set-up</h4><p>ERP field map and site-type clean-up, a default pack by role where data is missing; onboarding app and ERP connected, catalogues and rules by role and industry, trainers and sites loaded.</p><div class="who">Joint</div></div>
        <div class="ph4" style="--d:.3s"><div class="w">Weeks 2–6</div><h4>Upgrade content</h4><p>Your priority SOPs cut into reels, new AI videos for gaps, translated into your top languages.</p><div class="who">BetterPlace</div></div>
        <div class="ph4" style="--d:.45s"><div class="w">Weeks 4–8</div><h4>First region live</h4><p>Employees on the app, trainers running site sessions with attendance and quizzes, nudges on.</p><div class="who">Joint</div></div>
        <div class="ph4" style="--d:.6s"><div class="w">Then, wave by wave</div><h4>All 75,000</h4><p>Region by region, train-the-trainer at each wave. First customer reports go out from the first region.</p><div class="who">Measured</div></div>
      </div>
      <div class="tel-close" style="margin-top:16px;grid-template-columns:1.2fr .8fr">
        <div class="tel-band ghost" style="margin:0;grid-template-columns:auto 1fr"><span class="bl">What we measure</span><p>Completion of compulsory paths, time from joining to certified, trainer sessions per site, and customers receiving a monthly training report.</p></div>
        <div class="tel-contact"><div class="nm">Anuj Saxena</div><div class="rl">Director, Product · BetterPlace</div><a href="mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent('DTSS · skillBetter')}">anuj.saxena@betterplace.co.in</a></div>
      </div>
    </div>`, { glow: true }),
]

void svg

import type { SlideDef } from '../lib/types'
import { plainSlide } from './story-kit'
import { dtssLmsSlides } from './dtss-story'

// SMC (ServiceMaster Clean, SIS Group) · iLearnSMC LMS demo (26 Nov 2026).
// Re-cut of the DTSS deck around SMC L&D's "iLearnSMC" concept note: 30,000+ staff, 6 regions,
// 4 sectors (Healthcare, Retail, Industrial FM, Corporate). Their asks get their own slides
// (WhatsApp delivery + 3 attempts + certificate, Bronze→Diamond tiers, 6-level escalation,
// Blue Tree onboarding gate → SISCORE Ready, sector tracks, L&D dashboards, org-wide levels,
// M&E next phase). Good DTSS slides are kept with DTSS wording swapped for SMC.

const O = '#F39200'
const css = `<style>
.smc-req .r b { font-size: .92rem; }
.smc-flow { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 6px; }
.smc-flow .s { position: relative; border-radius: 14px; padding: 14px 16px; background: #fff; border: 1px solid #e3e8f4; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.smc-flow .s .n { font-family: var(--mono); font-size: 10.5px; letter-spacing: .12em; color: ${O}; text-transform: uppercase; }
.smc-flow .s h4 { margin: 4px 0 4px; font-size: 1rem; color: #0b1437; }
.smc-flow .s p { margin: 0; font-size: .8rem; color: #4a5578; line-height: 1.4; }
.smc-flow .s.go { background: #0b1437; border-color: #0b1437; } .smc-flow .s.go h4 { color: #FFC727; } .smc-flow .s.go p { color: #c9d0ee; }
.smc-tracks { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 14px; }
.smc-tracks .t { border-radius: 14px; padding: 14px 16px; background: #FFF7EC; border: 1px solid #f7d9b0; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.smc-tracks .t h4 { margin: 0 0 6px; font-size: .98rem; color: #0b1437; }
.smc-tracks .t li { font-size: .78rem; color: #4a5578; margin-bottom: 2px; }
.smc-tracks .t ul { margin: 0; padding-left: 16px; }
.smc-tracks .t.next { background: #f3f5fb; border-style: dashed; border-color: #b8c2df; }
.smc-esc { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin-top: 8px; }
.smc-esc .e { border-radius: 14px; padding: 14px 12px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.14); animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.smc-esc .e .d { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; color: #FFC727; text-transform: uppercase; }
.smc-esc .e h4 { margin: 6px 0 6px; font-size: .95rem; color: #fff; }
.smc-esc .e p { margin: 0; font-size: .76rem; color: #c9d0ee; line-height: 1.4; }
.smc-esc .e.top { background: ${O}; border-color: ${O}; } .smc-esc .e.top h4, .smc-esc .e.top p, .smc-esc .e.top .d { color: #1b1200; }
.smc-tiers { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
.smc-tiers .tr { border-radius: 16px; padding: 16px 14px; text-align: center; color: #fff; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.smc-tiers .tr .st { font-size: 1.1rem; letter-spacing: 2px; }
.smc-tiers .tr h4 { margin: 6px 0 4px; font-size: 1.05rem; color: inherit; }
.smc-tiers .tr p { margin: 0; font-size: .74rem; opacity: .9; }
.smc-steps { display: grid; gap: 8px; }
.smc-steps .p { display: grid; grid-template-columns: 30px 1fr; gap: 10px; align-items: start; padding: 10px 14px; border-radius: 12px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.smc-steps .p i { font-style: normal; font-family: var(--mono); color: #FFC727; font-size: 12px; padding-top: 2px; }
.smc-steps .p b { color: #fff; display: block; font-size: .92rem; } .smc-steps .p span { color: #c9d0ee; font-size: .8rem; }
.smc-lvl { display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; align-items: end; height: 340px; margin-top: 10px; }
.smc-lvl .l { border-radius: 12px 12px 4px 4px; padding: 12px 10px; background: linear-gradient(180deg, #1B2D93, #0b1437); color: #fff; animation: telpop .45s var(--ease) both; animation-delay: var(--d); display: flex; flex-direction: column; justify-content: flex-start; }
.smc-lvl .l h4 { margin: 0 0 4px; font-size: .9rem; color: #FFC727; } .smc-lvl .l p { margin: 0; font-size: .72rem; color: #c9d0ee; line-height: 1.35; }
.smc-lvl .l .c { margin-top: auto; font-size: .7rem; color: #fff; opacity: .85; }
.smc-bars { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; align-items: end; height: 220px; padding: 10px 6px 0; }
.smc-bars .b { display: flex; flex-direction: column; align-items: center; gap: 6px; height: 100%; justify-content: flex-end; }
.smc-bars .b .v { font-family: var(--disp); font-weight: 800; color: #0b1437; font-size: 1.1rem; }
.smc-bars .b .col { width: 100%; border-radius: 10px 10px 4px 4px; background: linear-gradient(180deg, ${O}, #d97a00); animation: telpop .5s var(--ease) both; animation-delay: var(--d); }
.smc-bars .b .k { font-size: .72rem; color: #4a5578; text-align: center; line-height: 1.25; min-height: 2.5em; }
.smc-card { border-radius: 18px; background: #fff; border: 1px solid #e3e8f4; padding: 16px 18px; }
.smc-card .hd { font-family: var(--mono); font-size: 10.5px; letter-spacing: .12em; text-transform: uppercase; color: #2142B9; margin-bottom: 4px; }
</style>`

const tiers: [string, string, string, string][] = [
  ['Bronze', '★', 'linear-gradient(160deg,#a86a3d,#7a4a26)', 'First module cleared'],
  ['Silver', '★★', 'linear-gradient(160deg,#9aa4b5,#6b7487)', 'Core modules for the role'],
  ['Gold', '★★★', 'linear-gradient(160deg,#e0b13a,#b88712)', 'Sector track complete'],
  ['Platinum', '★★★★', 'linear-gradient(160deg,#5d7a9a,#2f4a6a)', 'Multi-skilled · second track'],
  ['Diamond', '★★★★★', 'linear-gradient(160deg,#4f6bff,#2a1a7a)', 'Ready for supervisor'],
]

const smcNew: Record<string, SlideDef> = {
  cover: {
    id: 'sm1', theme: 'darker', title: 'Cover',
    html: `${css}<div class="glow"></div>
    <div class="tel center" style="padding-top:0"><div class="tel-covertext" style="max-width:980px">
      <span class="kick">BetterPlace × SMC India · L&amp;D Division · SIS Group · November 2026</span>
      <h1>iLearnSMC, live for 30,000 people. <em>Every unit, every shift, every region, trained and certified.</em></h1>
      <p>Your concept note, built on a platform that already trains over 10 lakh frontline people a month: WhatsApp delivery, three attempts and a certificate, Bronze to Diamond tiers, escalation to the P&amp;L head, a Blue Tree onboarding gate and audit-ready reports for customers.</p>
      <div class="tel-nums" style="margin-top:24px">
        <div><div class="n">30,000<em>+</em></div><div class="l">SMC workforce covered</div></div>
        <div><div class="n">6</div><div class="l">regions, pan-India</div></div>
        <div><div class="n">4</div><div class="l">sectors: Healthcare, Retail, Industrial FM, Corporate</div></div>
      </div>
    </div></div>`,
  },

  req: plainSlide('smR', 'light', 'Your iLearnSMC brief, met',
    'Your requirements · iLearnSMC concept note, point by point',
    'Everything in iLearnSMC is on our platform today. <em>Here is each ask, and where you see it.</em>',
    `<div class="tel-status tight smc-req">
      <div class="h"></div><div class="h">iLearnSMC asks for</div><div class="h">How BetterPlace delivers it</div><div class="h">Status</div>
      ${[
        ['Training link on WhatsApp', 'Module sent to the employee’s phone on WhatsApp in their language; opens with no app install', 'live', 'Live'],
        ['Module + evaluation, 3 attempts', 'Role- and sector-mapped modules with a built-in test; attempts capped at three, completion mandatory to close', 'live', 'Live'],
        ['Certificate and rating', 'Certificate issued and tier awarded the moment the module is cleared', 'live', 'Live'],
        ['Bronze to Diamond tiers, rewards', 'Five tiers, points and badges; tiers unlock coupons and rewards you choose', 'live', 'Live · tiers configured'],
        ['Escalation up six levels', 'Employee → Supervisor → Facility Exec → Facility Manager → Branch Head → P&L / L&D Head', 'live', 'Live · chain configured'],
        ['No training, no deployment', 'Blue Tree joiners auto-enrolled; orientation + H&S + 5 sector modules gate “SISCORE Ready”', 'cfg', 'Integration, weeks 1–3'],
        ['Sector tracks', 'General Housekeeping, Healthcare, Industrial FM, Retail; Engineering (M&E) next phase', 'live', 'Content built + AI'],
        ['AI video, branded, game-like', 'AI videos with SMC SOPs, uniform and logo; reels, quizzes, challenges', 'live', 'Already made for SMC'],
        ['L&D dashboards, customer reports', 'Real-time completion by unit, region and level; audit-ready certified records', 'live', 'Live'],
        ['Every level, frontline to P&L', 'Paths mapped to role, skill and competency level, all automated', 'live', 'Live'],
      ].map(([b, sp, c, t], i) => `<div class="r" style="--d:${0.04 + i * 0.04}s"><i>${String(i + 1).padStart(2, '0')}</i><b>${b}</b><span>${sp}</span><em class="${c}">${t}</em></div>`).join('')}
    </div>`),

  deliver: plainSlide('smW', 'darker', 'WhatsApp to certificate',
    'Frontline enablement · WhatsApp link to certificate, without leaving the shift',
    'A link on WhatsApp, a two-minute module, a test, a certificate. <em>Trained without being pulled off shift.</em>',
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:22px;align-items:start">
      <div class="smc-steps">
        ${[
          ['Link sent on WhatsApp', 'Assigned by role, sector and site; arrives in the language they chose. Push and SMS as back-up.'],
          ['Module + evaluation', 'AI video or reel of 1–3 minutes, then picture and voice questions. Works on entry-level phones.'],
          ['Up to 3 attempts to pass', 'After each fail, the module replays the parts they missed. Completion is mandatory to close the assignment.'],
          ['Certificate and rating', 'Certificate on the phone and in the record the moment they pass; tier and points updated.'],
        ].map(([b, s], i) => `<div class="p" style="--d:${0.1 + i * 0.1}s"><i>0${i + 1}</i><div><b>${b}</b><span>${s}</span></div></div>`).join('')}
      </div>
      <div>
        <div class="smc-tiers">
          ${tiers.map(([n, st, bg, p], i) => `<div class="tr" style="background:${bg};--d:${0.2 + i * 0.08}s"><div class="st">${st}</div><h4>${n}</h4><p>${p}</p></div>`).join('')}
        </div>
        <div class="tel-band ghost" style="margin-top:14px"><span class="bl">Gamified recognition</span><p>Every module cleared earns points toward the next tier; tiers unlock coupons and rewards SMC chooses. Leaderboards by site and region, employee of the month, and recognition posted to home. <b>+65% voluntary participation</b> across our clients when nudges and recognition run together.</p></div>
      </div>
    </div>`, { glow: true }),

  esc: plainSlide('smE', 'darker', 'Escalation',
    'Frontline enablement · non-completion escalates automatically',
    'Non-completion is never silent. <em>It climbs six levels on its own, until someone closes it.</em>',
    `<div>
      <div class="smc-esc">
        ${[
          ['Day 0', 'Janitor / Employee', 'Module assigned; WhatsApp and push reminders before each shift.'],
          ['Due + 1', 'Supervisor', 'Gets the names and a one-tap nudge to follow up in person.'],
          ['Due + 3', 'Facility Executive', 'Escalated if the gap continues; sees the site list.'],
          ['Due + 5', 'Facility Manager', 'Accountable for unit-level closure; unit score drops.'],
          ['Due + 7', 'Branch Head', 'Branch-level view of every open gap by unit.'],
          ['Due + 10', 'P&L Head / L&D Head', 'Final alert; full visibility in the leadership dashboard.'],
        ].map(([d, h, p], i) => `<div class="e${i === 5 ? ' top' : ''}" style="--d:${0.08 + i * 0.08}s"><div class="d">${d}</div><h4>${h}</h4><p>${p}</p></div>`).join('')}
      </div>
      <div class="tel-band ghost" style="margin-top:16px"><span class="bl">You set the rules</span><p>The days, channels and who gets copied are configured by SMC per module type: fire safety and bio-medical waste can escalate faster than soft skills. The reminder stops the moment the employee passes. Day counts shown are an example.</p></div>
    </div>`, { glow: true }),

  onboard: plainSlide('smO', 'light', 'No training, no deployment',
    'New-hire onboarding · Blue Tree App to SISCORE Ready',
    'No training, no deployment. <em>Every Blue Tree joiner clears iLearnSMC before reaching a unit.</em>',
    `<div>
      <div class="smc-flow">
        ${[
          ['Step 1', 'Onboarded on Blue Tree', 'New joiner created in Blue Tree; we receive them by API or daily file and enrol them automatically.'],
          ['Step 2', 'Orientation + Health & Safety', 'Company orientation, fire safety, hygiene and security, with certification, from day one.'],
          ['Step 3', '5 sector modules assigned', 'Picked by the sector and site they are going to: housekeeping, healthcare, industrial FM or retail.'],
          ['Step 4', 'SISCORE Ready, deployed', 'Status sent back to Blue Tree / ERP. Deployment readiness in 24–48 hours, not a classroom cycle.'],
        ].map(([n, h, p], i) => `<div class="s${i === 3 ? ' go' : ''}" style="--d:${0.08 + i * 0.1}s"><div class="n">${n}</div><h4>${h}</h4><p>${p}</p></div>`).join('')}
      </div>
      <div class="smc-tracks">
        ${[
          ['General Housekeeping', ['Grooming standards', 'Workplace etiquette', 'HK protocols', 'Equipment usage'], ''],
          ['Healthcare', ['Spill management', 'Needle-stick injury', 'Infection control', 'Bio-medical waste'], ''],
          ['Industrial FM', ['Safety, health & environment', '5S, operational excellence', 'Preventive maintenance'], ''],
          ['Retail', ['Washroom management', 'Food court management', 'Floor care, equipment usage'], ''],
        ].map(([h, l], i) => `<div class="t" style="--d:${0.4 + i * 0.07}s"><h4>${h}</h4><ul>${(l as string[]).map((x) => `<li>${x}</li>`).join('')}</ul></div>`).join('')}
      </div>
      <div class="foot" style="margin-top:10px">Engineering &amp; M&amp;E is added as a fifth track in the next phase, on the same platform. AIDET, Hand Hygiene and the wet-and-dry vacuum course are already built from SMC material.</div>
    </div>`),

  report: plainSlide('smD', 'light', 'L&D oversight',
    'L&D oversight and reporting · zero manual tracking',
    'One console for L&amp;D across every unit and region. <em>And the same live data shows customers a certified team.</em>',
    `<div style="display:grid;grid-template-columns:.9fr 1.1fr;gap:20px;align-items:start">
      <div style="display:grid;gap:10px">
        ${[
          ['Real-time monitoring', 'Progress across all units, regions and sectors from a single console, filtered down to one site or one person.'],
          ['Automated alerts', 'Completion reminders trigger against timelines; the escalation chain does the chasing.'],
          ['Audit-ready records', 'Certified, evaluated employee records with date, score and attempts; exported for audits any time.'],
          ['Customer reports', 'Per customer site: staff deployed, certified for that site, refreshers due. Ready for business reviews.'],
        ].map(([h, p]) => `<div class="smc-card"><div class="hd">${h}</div><p style="margin:0;font-size:.84rem;color:#4a5578">${p}</p></div>`).join('')}
      </div>
      <div class="smc-card">
        <div class="hd">Training completion by employee level · illustrative</div>
        <div class="smc-bars">
          ${[['96', 'Janitorial teams'], ['95', 'Supervisors'], ['97', 'Pantry / office boys'], ['94', 'Facility Exec / Manager'], ['98', 'Technical team']].map(([v, k], i) => `<div class="b"><div class="v">${v}%</div><div class="col" style="height:${Number(v) * 1.6}px;--d:${0.2 + i * 0.08}s"></div><div class="k">${k}</div></div>`).join('')}
        </div>
        <p style="margin:10px 0 0;font-size:.78rem;color:#6B7DB3">Same view, live, by region, sector, customer and unit. Figures are illustrative, taken from the iLearnSMC concept note.</p>
      </div>
    </div>`),

  levels: plainSlide('smL', 'darker', 'Every level',
    'Org-wide upskilling · one system, frontline to P&L head',
    'Modules map to role, skill and competency level. <em>Upskilling runs from janitor to P&amp;L head, with no manual work.</em>',
    `<div>
      <div class="smc-lvl">
        ${[
          ['Frontline staff', 'Janitorial and operational teams', 'Sector track, safety, grooming', 120],
          ['Supervisors', 'Team-level oversight', 'Shift planning, coaching, audits', 160],
          ['Facility Executive', 'Site-level oversight', 'Customer handling, compliance', 200],
          ['Facility Manager', 'Unit compliance ownership', 'Unit P&L, people, escalations', 240],
          ['Ops Manager', 'Multi-unit oversight', 'Multi-site operations', 280],
          ['Branch Head', 'Branch accountability', 'Branch growth, client reviews', 310],
          ['P&L Head', 'Business ownership', 'Leadership programmes', 340],
        ].map(([h, p, c, ht], i) => `<div class="l" style="height:${ht}px;--d:${0.06 + i * 0.07}s"><h4>${h}</h4><p>${p}</p><div class="c">${c}</div></div>`).join('')}
      </div>
      <div class="tel-band ghost" style="margin-top:14px"><span class="bl">Career visibility</span><p>Every person sees the next level and what it takes. L&amp;D sees who is ready to move up, so supervisors come from within and attrition falls.</p></div>
    </div>`, { glow: true }),

  next: plainSlide('smN', 'darker', 'Start plan',
    'Next steps · iLearnSMC live in weeks, not quarters',
    'Four tracks live first, M&amp;E next. <em>Your 30,000 people on one standard, everywhere.</em>',
    `<div class="smc-flow" style="grid-template-columns:repeat(4,1fr)">
      ${[
        ['Weeks 1–2', 'Set up', 'Org, regions, units, roles and levels; escalation chain and tiers configured; Blue Tree link agreed.'],
        ['Weeks 2–4', 'Content', 'Orientation, H&S and four sector tracks loaded; SMC SOPs into AI videos in your languages.'],
        ['Weeks 4–6', 'Pilot', 'One region live: WhatsApp delivery, 3 attempts, certificates, escalation, dashboards.'],
        ['Weeks 6–10', 'Pan-India', 'All six regions; customer reports; Engineering & M&E scoped for the next phase.'],
      ].map(([n, h, p], i) => `<div class="s${i === 3 ? ' go' : ''}" style="--d:${0.08 + i * 0.1}s"><div class="n">${n}</div><h4>${h}</h4><p>${p}</p></div>`).join('')}
    </div>
    <div class="tel-band ghost" style="margin-top:18px"><span class="bl">Contact</span><p><b>Anuj Saxena</b>, Director, Product · anuj.saxena@betterplace.co.in</p></div>`, { glow: true }),
}

const swap = (h: string) => h
  .replace(/DTSS and SMC/g, 'SMC')
  .replace(/DTSS &amp; SMC/g, 'SMC')
  .replace(/DTSS/g, 'SMC')
  .replace(/all 75,000/g, 'all 30,000')
  .replace(/75,000/g, '30,000')

const byId = new Map(dtssLmsSlides.map((s) => [s.id, s]))
const keep = (id: string): SlideDef => {
  const s = byId.get(id)
  if (!s) throw new Error(`smc deck: missing ${id}`)
  return { ...s, html: swap(s.html), title: swap(s.title) }
}

// keep DTSS's shared CSS (it lives in the DTSS cover html) by prepending it to our cover
const dtssCover = byId.get('ds1')!
const cssBlocks = (dtssCover.html.match(/<style>[\s\S]*?<\/style>/g) || []).join('')

export const smcLmsSlides: SlideDef[] = [
  { ...smcNew.cover, html: cssBlocks + smcNew.cover.html },
  keep('ds1b'),
  smcNew.req,
  keep('ds2b'),
  smcNew.deliver,
  smcNew.esc,
  smcNew.onboard,
  keep('ds3'),
  keep('ds4'),
  keep('ds7v'),
  smcNew.report,
  smcNew.levels,
  keep('ds9'),
  keep('ds8'),
  keep('ds10'),
  keep('ds11'),
  smcNew.next,
  ...['ds5', 'ds6', 'ds7', 'ds12'].map(keep),
]

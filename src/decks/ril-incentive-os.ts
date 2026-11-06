import type { SlideDef } from '../lib/types'
import { icons } from './html'
import { svg, makeRail, shot, problemSlide, plainSlide } from './story-kit'

// Incentive OS · leadership deck for the Reliance Retail SPOC who signs off adoption (Nov 2026).
// Approved claims, banned phrasing and brand: incentive-os/.../leadership-kit/BRIEF.md.
// Timeline: Reliance_Incentive_OS_Implementation_Plan_v1.3.docx (8-week phase 1, RBL after).
// Screens are masked pilot captures from explainer-pack/img (names and IDs masked), cropped in
// public/assets/product/incentive-os/. Styles: src/styles/ril-incentive-os.css (prefix rio-).
// Do not claim: four-eyes enforcement, a Digital "payable base" setting, HRMS/payroll integration as live.

const IMG = 'assets/product/incentive-os/'
const CAP = ['Configure', 'Monitor', 'Approve and pay', 'Associate app', 'Access']
const rail = makeRail(CAP, [], true)
const P = 'The problem'
const M = '<i class="rio-mark" hidden></i>'

const ok = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>'
const no = '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>'
const xls = (name: string, sub: string, d: number) =>
  `<div class="rio-file" style="--d:${d}s"><span class="x">XLSX</span><div><b>${name}</b><small>${sub}</small></div></div>`

/* ---------------- 1 · cover ---------------- */
const cover: SlideDef = {
  id: 'rio1', theme: 'darker', title: 'Incentive OS for Reliance Retail',
  html: `${M}
  <div class="glow"></div>
  <div class="tel center" style="padding-top:0">
    <div class="rio-cover">
      <div class="tel-covertext">
        <span class="kick">Incentive OS · for Reliance Retail</span>
        <h1>Store incentives for RIL's formats <em>on one engine,</em> not one Excel chain per format.</h1>
        <p>Built around RIL's formats and policies. Digital, F&amp;L and Grocery were piloted on real store data, and the output matched RIL's calculated incentives for March and April. Reliance Brands is configured and follows phase 1.</p>
        <div class="rio-stat">
          <span class="on">${ok}Live in pilot environment</span>
          <span class="on">${ok}Piloted with real store data</span>
          <span class="on">${ok}PO signed</span>
          <span class="wait"><i></i>Business approval pending</span>
        </div>
        <div class="rio-by">Anuj Saxena · BetterPlace</div>
      </div>
      <div class="rio-cvis">
        <div class="tm tm-shot rio-cdash">
          <div class="tm-bar"><span class="d"><i></i><i></i><i></i></span><span class="t">Incentive OS · HQ dashboard · March 2026</span><span class="live">Pilot data</span></div>
          <div class="tm-shotimg" style="height:300px"><img src="${IMG}dash-main.jpg" alt="HQ dashboard" style="object-position:top left"/></div>
        </div>
        <div class="rio-cphone"><img src="${IMG}m-fnl-sa-breakdown.jpg" alt="Associate app, calculation breakdown"/></div>
        <div class="rio-cchip"><b>100% match</b>March and April · Digital, F&amp;L, Grocery</div>
      </div>
    </div>
  </div>`,
}

/* ---------------- 2 · today ---------------- */
const today = plainSlide('rio2', 'light', 'How incentives run today',
  'How incentives run today',
  'Each format closes its incentives in its own Excel chain, <em>stitched together by hand every cycle.</em>',
  `<div class="rio-chainwrap">
    <div class="rio-chain">
      <div class="col">
        <div class="ch">Inputs, each in its own shape</div>
        <div class="rio-in" style="--d:.1s"><b>Sales extract</b><small>bill-level or store totals</small></div>
        <div class="rio-in" style="--d:.18s"><b>Attendance</b><small>daily present, absent, leave, week-off</small></div>
        <div class="rio-in" style="--d:.26s"><b>Store audits</b><small>mystery shopper, POP (point-of-purchase) display, dry shrink</small></div>
        <div class="rio-in" style="--d:.34s"><b>Targets and budgets</b><small>by store and department</small></div>
      </div>
      <div class="arr" style="--d:.45s"><span>copy, paste,<br/>VLOOKUP</span></div>
      <div class="col">
        <div class="ch">One working file per format</div>
        ${xls('Digital_incentive_Mar.xlsx', 'slabs by product family', .5)}
        ${xls('Grocery_Sales_EBITDA_Mar.xlsx', 'role slabs, audit gates', .58)}
        ${xls('FnL_weekly_pool_W1.xlsx', 'every week, not every month', .66)}
        ${xls('RBL_Superdry_Mar.xlsx', 'one per brand', .74)}
      </div>
      <div class="arr" style="--d:.85s"><span>manual checks,<br/>re-runs</span></div>
      <div class="col narrow">
        <div class="ch">Sign-off</div>
        <div class="rio-step" style="--d:.9s"><b>HR review</b><small>by email, on the latest attachment</small></div>
        <div class="rio-step" style="--d:1s"><b>Payroll</b><small>a final figure per employee</small></div>
      </div>
      <div class="arr" style="--d:1.1s"><span>weeks<br/>later</span></div>
      <div class="col narrow">
        <div class="ch">The associate</div>
        <div class="rio-ask" style="--d:1.2s"><div class="amt">₹ on the payslip</div><div class="q">“Why this amount?”</div><small>Asked to the store manager, who asks HQ</small></div>
      </div>
    </div>
    <div class="rio-time"><span>Period closes</span><i></i><span>Files collected</span><i></i><span>Stitched and checked</span><i></i><span>Approved</span><i></i><span>Paid</span><em>weeks to close</em></div>
    <div class="rio-pains">
      <div><b>Four chains, four owners.</b> Digital, Grocery, F&amp;L and Reliance Brands each run different logic in different files.</div>
      <div><b>The rules live in cells.</b> Only the person who built the file knows which cell carries which slab.</div>
      <div><b>No reason reaches the store.</b> Staff see a figure. They don't see the gate or the slab behind it.</div>
    </div>
  </div>${M}`)

/* ---------------- 3 · cost ---------------- */
const cost = plainSlide('rio3', 'darker', 'What it costs',
  'What that costs',
  'The cost shows up as ops hours, disputes, <em>and incentives that land too late to change this week’s selling.</em>',
  `<div>
    <div class="rio-cost">
      <div class="st" style="--d:.15s"><span class="ic">${svg(icons.users)}</span><div class="n">Ops effort</div><p>Every cycle, someone collects files from each format, matches employee IDs across sales, attendance and audits, and re-runs the formulas when a late file lands. For F&amp;L this happens every week.</p></div>
      <div class="st" style="--d:.3s"><span class="ic">${svg(icons.warn)}</span><div class="n">Errors and disputes</div><p>One broken lookup or an old target sheet reaches the payslip. The associate asks the store manager, the manager asks HQ, and the correction waits for the next cycle.</p></div>
      <div class="st" style="--d:.45s"><span class="ic">${svg(icons.clock)}</span><div class="n">Delayed motivation</div><p>Staff learn what they earned weeks after the period closed, with no breakdown. By then the number can't change how anyone sells, and the store can't coach to it.</p></div>
    </div>
    <div class="tel-band ghost rio-size" style="margin-top:18px"><span class="bl">Sizing it together</span><div><p>We have not put a number on this. RIL can count it for one recent cycle, and we size it together:</p><ul><li><b>People-days</b> spent per cycle, per format</li><li><b>Disputes</b> raised per cycle</li><li><b>Days</b> from period close to payout</li></ul></div></div>
  </div>${M}`, { glow: true })

/* ---------------- 4 · one picture ---------------- */
const inputs = [
  ['Sales', 'bill-level CSV upload or Sales API'],
  ['Attendance', 'daily present, absent, leave, week-off · upload or HRMS feed'],
  ['Targets and budgets', 'store, department, role'],
  ['Store audits and compliance', 'mystery shopper, POP display, dry shrink, pilferage index, gross margin'],
  ['Employee inputs', 'overrides, each one approved'],
]
const outputs = [
  ['HQ dashboard', 'sales vs target, payout, stores on hold'],
  ['Approvals and period lock', 'maker-checker, audit log'],
  ['Payroll CSV', 'approved payouts for a locked period'],
  ['Associate app', 'earned, status, the calculation'],
]
const inY = inputs.map((_, i) => 37 + i * 88)
const outY = outputs.map((_, i) => 50 + i * 108)
const engine = plainSlide('rio4', 'light', 'Incentive OS in one picture',
  'Incentive OS in one picture',
  'Sales, attendance, targets and audits go in. <em>Approved payouts come out, each with its reason.</em>',
  `<div class="rio-eng">
    <div class="rio-io">${inputs.map(([b, s], i) => `<div class="it" style="--d:${.1 + i * .08}s"><b>${b}</b><small>${s}</small></div>`).join('')}</div>
    <svg class="rio-wires" viewBox="0 0 120 430" preserveAspectRatio="none">${inY.map((y, i) => `<path class="w" style="--d:${.5 + i * .06}s" d="M0 ${y} C60 ${y} 60 215 120 215"/>`).join('')}<circle class="pulse" r="4"><animateMotion dur="2.4s" repeatCount="indefinite" path="M0 37 C60 37 60 215 120 215"/></circle><circle class="pulse" r="4"><animateMotion dur="2.4s" begin=".8s" repeatCount="indefinite" path="M0 389 C60 389 60 215 120 215"/></circle></svg>
    <div class="rio-core">
      <div class="hd"><span>Rules engine</span><em>one engine · four verticals · versioned plans</em></div>
      <div class="rows">
        <div style="--d:.7s"><b>Eligibility gates</b><span>attendance minimums, department gate, audit and compliance holds</span></div>
        <div style="--d:.8s"><b>Slabs and multipliers</b><span>per unit, per % of target, per role</span></div>
        <div style="--d:.9s"><b>Pools and kitties</b><span>store pool, role splits, service-charge pool</span></div>
        <div style="--d:1s"><b>Pro-rata</b><span>by days present or store open days</span></div>
      </div>
      <div class="ft">When someone earns nothing, the screen shows which rule stopped it.</div>
    </div>
    <svg class="rio-wires" viewBox="0 0 120 430" preserveAspectRatio="none">${outY.map((y, i) => `<path class="w y" style="--d:${1.1 + i * .06}s" d="M0 215 C60 215 60 ${y} 120 ${y}"/>`).join('')}<circle class="pulse y" r="4"><animateMotion dur="2.4s" begin=".4s" repeatCount="indefinite" path="M0 215 C60 215 60 374 120 374"/></circle></svg>
    <div class="rio-io out">${outputs.map(([b, s], i) => `<div class="it" style="--d:${1.2 + i * .08}s"><b>${b}</b><small>${s}</small></div>`).join('')}</div>
  </div>${M}`)

/* ---------------- 5 · four verticals ---------------- */
const vert = (cls: string, name: string, who: string, line: string, f: string, chip: string, tone: string, d: number) => `
  <div class="rio-v ${cls}" style="--d:${d}s">
    <div class="vh"><h4>${name}</h4><small>${who}</small></div>
    <p>${line}</p>
    <code>${f}</code>
    <span class="vchip ${tone}">${chip}</span>
  </div>`
const verticals = plainSlide('rio5', 'dark', 'Built for Reliance’s four verticals',
  'Built for Reliance · four verticals',
  'Four formats, four different incentive models, <em>one rules engine underneath.</em>',
  `<div>
    <div class="rio-vs">
      ${vert('dg', 'Digital', 'Reliance Digital', 'Per-unit slabs by product family and price band, scaled by department achievement. Nothing pays below an 85% department gate.', 'units × ₹/unit by family and price band<br/>× dept multiplier · 0 below 85%', 'Piloted · Mar + Apr matched', 'g', .15)}
      ${vert('gr', 'Grocery', 'Smart, Smart Bazaar, FreshPik', 'Sales and EBITDA slabs by role, gated by store compliance: mystery shopper, POP display and dry shrink.', 'slab(role, sales %)<br/>+ slab(role, EBITDA %)<br/>held when an audit gate fails', 'Piloted · Mar + Apr matched', 'g', .27)}
      ${vert('fl', 'Fashion &amp; Lifestyle', 'Trends and other F&amp;L formats', 'A weekly store pool of 1% of sales, split 60/40 between the sales team and managers, shared among eligible staff. Held on pilferage index (PI) or gross margin (GM).', 'pool = 1% of weekly sales<br/>team 60 / managers 40<br/>÷ eligible staff', 'Piloted · Mar + Apr matched', 'g', .39)}
      ${vert('rb', 'Reliance Brands', 'Superdry, Ferragamo, SGH, Armani Café', 'A % of GSV by achievement slab, kitty splits, a service-charge pool and a bill-level catalogue, brand by brand.', '4 plan modes: brand slab,<br/>kitty split, service-charge<br/>pool, bill catalogue', 'Configured · goes live after phase 1', 'c', .51)}
    </div>
    <div class="tel-band ghost" style="margin-top:16px"><span class="bl">Changing a scheme</span><p>A new slab or gate is a plan edit, saved as a new version and approved before it calculates. There is no new Excel file to build and no code release.</p></div>
  </div>${M}`)

/* ---------------- 6 · pilot ---------------- */
const pilot = plainSlide('rio6', 'darker', 'Pilot results',
  'Pilot results · March and April 2026',
  '100% match against the calculated incentives for March and April, <em>for Digital, F&amp;L and Grocery</em>',
  `<div class="rio-pilot">
    <p class="sub">Same inputs as RIL's sheets. Reliance Brands not part of this comparison.</p>
    <div class="flow">
      <div class="src">
        <div class="pc" style="--d:.15s"><span class="ic">${svg(icons.doc)}</span><div><b>RIL sales files</b><small>the pilot stores, March and April</small></div></div>
        <div class="plus" style="--d:.25s">+</div>
        <div class="pc" style="--d:.3s"><span class="ic">${svg(icons.layers)}</span><div><b>RIL incentive logic</b><small>each format's scheme, as RIL runs it</small></div></div>
      </div>
      <div class="ar" style="--d:.45s"></div>
      <div class="ios" style="--d:.55s"><span class="lg">Incentive OS</span><small>RIL's rules configured as plans</small></div>
      <div class="ar" style="--d:.7s"></div>
      <div class="cmp">
        <div class="pc out" style="--d:.8s"><span class="ic">${svg(icons.chart)}</span><div><b>Incentive OS output</b><small>calculated from those inputs</small></div></div>
        <div class="vs" style="--d:.95s">compared with</div>
        <div class="pc" style="--d:1.05s"><span class="ic">${svg(icons.doc)}</span><div><b>RIL's incentive sheets</b><small>the calculated figures RIL gave us</small></div></div>
      </div>
      <div class="ar" style="--d:1.2s"></div>
      <div class="match" style="--d:1.35s"><div class="n">100%</div><div class="l">match</div></div>
    </div>
    <div class="res">
      ${[['Digital', 'Per-unit slabs, department gate'], ['F&amp;L', 'Weekly pools, PI and GM holds'], ['Grocery', 'Sales and EBITDA slabs, audit gates']].map(([v, s], i) => `
      <div class="rv" style="--d:${1.5 + i * .12}s"><div><b>${v}</b><small>${s}</small></div><span class="mo">${ok}March</span><span class="mo">${ok}April</span></div>`).join('')}
    </div>
    <div class="how">
      <div><span class="bl">How the pilot worked</span><p>We took RIL's sales files and the incentive logic, configured it in Incentive OS, and its output matched the incentive sheets RIL gave us.</p></div>
      <div class="chk"><span class="bl">Check it yourself</span><p>Pick any pilot store and employee for March or April. We open RIL's sheet next to Incentive OS, live.</p></div>
    </div>
    <div class="foot">Pilot environment, March and April 2026.</div>
  </div>${M}`)

/* ---------------- 7 · configure ---------------- */
const configure = problemSlide({
  id: 'rio7', theme: 'light', title: 'Plans and rules', rail, step: 1, demo: 'Live · plan wizard',
  kick: 'Configure · plans and rules',
  h2: 'A new scheme is set up in a guided wizard <em>and calculates nothing until it is approved.</em>',
  qLabel: P, quote: 'Scheme rules sit in formula cells. Changing a slab means finding the right cell in the right file, then hoping next month’s copy picks it up.',
  changes: [
    { ic: icons.layers, b: 'Guided set-up.', t: 'Vertical, plan type, eligible roles and stores, monthly or weekly period, metric and slabs, gates, payout split, then review.' },
    { ic: icons.repeat, b: 'Versioned plans.', t: 'Each change is a new version with an effective date. March payouts stay tied to March rules.' },
    { ic: icons.check, b: 'Draft until approved.', t: 'A new plan is a draft. It is submitted for approval before any calculation uses it.' },
  ],
  proof: { n: '4 modes', p: 'for Reliance Brands alone: brand slab, kitty and role split, service-charge pool, and the SGH bill-level catalogue.' },
  vis: `<div class="rio-stack">
    <div class="tm tm-shot back"><div class="tm-bar"><span class="d"><i></i><i></i><i></i></span><span class="t">Create plan · step 1 · select vertical</span><span class="live">Real screen</span></div><div class="tm-shotimg" style="height:262px"><img src="${IMG}wiz-0-modal.jpg" alt="Select vertical"/></div></div>
    <div class="tm tm-shot front"><div class="tm-bar"><span class="d"><i></i><i></i><i></i></span><span class="t">Create plan · step 3 · Digital slabs and multipliers</span><span class="live">Real screen</span></div><div class="tm-shotimg" style="height:372px"><img src="${IMG}wiz-2-modal.jpg" alt="Digital slabs and multipliers"/></div></div>
    <div class="tm-callout" style="right:-14px;bottom:70px;--ax:-5px;--ay:18px;--d:.9s"><b>Department gate</b>0 to 84.99% achievement sets the multiplier to 0. The 85% gate is one row.</div>
  </div>`,
  wide: true,
  foot: 'Live in the build. Real screens from the pilot environment. Digital slabs shown are the March–April pilot plan.' + M,
})

/* ---------------- 8 · dashboard ---------------- */
const dashboard = problemSlide({
  id: 'rio8', theme: 'light', title: 'HQ dashboard', rail, step: 2, demo: 'Live · dashboard',
  kick: 'Monitor · the HQ dashboard',
  h2: 'HQ sees sales against target, payout and every store on hold, <em>down to the employee.</em>',
  qLabel: P, quote: 'Mid-month, nobody can say what the incentive bill will be or which stores are about to miss out. It shows up after the files close.',
  changes: [
    { ic: icons.chart, b: 'One screen, any vertical.', t: 'Sales against target, potential incentive, amount on hold, payout and active plans, with daily pace against target.' },
    { ic: icons.search, b: 'Drill down.', t: 'City to store to employee. Achievement bands show how many stores sit at each level.' },
    { ic: icons.warn, b: 'Holds with the reason.', t: 'Stores that beat target but were held, and the gate that held them. A checklist shows which inputs are still missing.' },
  ],
  proof: { n: 'Weekly', p: 'view for F&amp;L alongside the monthly view for Digital, Grocery and Reliance Brands, on the same screen.' },
  vis: `<div class="rio-dash">
    ${shot(IMG + 'dash-main.jpg', 'Incentive OS · dashboard · all verticals · March 2026', 'Real screen · pilot data', { h: '250px' })}
    ${shot(IMG + 'dash-holds.jpg', 'Stores on hold · F&amp;L · the gate behind each one', 'Real screen · pilot data', { h: '128px' })}
    <div class="tm-callout" style="right:-16px;top:150px;--ax:30px;--ay:-5px;--d:.9s"><b>The month\u2019s bill</b>Potential, on hold and paid, before the period closes.</div>
  </div>`,
  flip: true, wide: false,
  foot: 'Live in the build. Pilot data for March 2026; employee names and IDs are masked.' + M,
})

/* ---------------- 9 · approvals ---------------- */
const approvals = problemSlide({
  id: 'rio9', theme: 'dark', title: 'Approvals, audit, period lock, payroll', rail, step: 3, demo: 'Live · approvals and lock',
  kick: 'Approve and pay',
  h2: 'Nothing reaches payroll until it is approved, <em>the period is locked and the change is logged.</em>',
  qLabel: P, quote: 'Approvals happen over email, and the final file is whichever version was attached last. Nobody can show who changed a figure, or when.',
  changes: [
    { ic: icons.check, b: 'Maker-checker approvals.', t: 'Inputs, plans and payouts are submitted, then approved by an admin who holds approval rights.' },
    { ic: icons.lock, b: 'Period lock.', t: 'Locking a period stops recalculation and input changes. Payroll exports the locked payouts as a CSV.' },
    { ic: icons.doc, b: 'Audit log.', t: 'Plan, target, input, calculation and lock events, with who and when. Exports to Excel.' },
  ],
  proof: { n: 'Per row', p: 'each payout row shows how the amount was worked out, so HR can answer “why this amount?” from the screen.' },
  vis: `<div class="rio-appr">
    <div class="rio-lane">${['Calculate', 'Submit', 'Approve', 'Lock period', 'Payroll CSV'].map((s, i) => `<span style="--d:${.2 + i * .14}s"><i>${i + 1}</i>${s}</span>`).join('')}</div>
    ${shot(IMG + 'digital-payout.jpg', 'Digital · computed payout · March 2026', 'Real screen · pilot data', { h: '200px' })}
    ${shot(IMG + 'lock-form.jpg', 'Period lock · close a payout period', 'Real screen · pilot data', { h: '84px' })}
  </div>`,
  wide: true,
  foot: 'Live in the build: maker-checker approvals, versioned plans, audit log, period lock, payroll CSV export. Direct HRMS and payroll integration is in the go-live plan, not live today.' + M,
})

/* ---------------- 10 · mobile ---------------- */
const mobile = problemSlide({
  id: 'rio10', theme: 'darker', title: 'Associate app', rail, step: 4, demo: 'Live · associate app',
  kick: 'The associate app',
  h2: 'Every associate sees what they earned, <em>how it was calculated and what held it.</em>',
  qLabel: P, quote: 'Staff learn their incentive from the payslip. When it is lower than they expected, the only way to ask why is through the store manager.',
  changes: [
    { ic: icons.user, b: 'Login by employee ID.', t: 'A home screen per role: associate, store or department manager, brand associate, central team.' },
    { ic: icons.doc, b: 'The calculation, written out.', t: 'Components, formulas and pro-rata line by line, and each eligibility gate in plain language.' },
    { ic: icons.trophy, b: 'Progress during the period.', t: 'Attendance, store progress, leaderboard and sales history by bill. Managers get a team tab and quests.' },
  ],
  proof: { n: 'Same figure', p: 'in the app and on the HQ approval screen, because both read the same calculation.' },
  vis: `<div class="tm-fan rio-fan">
    <div class="ph"><img src="${IMG}m-dig-sa-home.jpg" alt="Digital associate home"/><em>Digital · home</em></div>
    <div class="ph"><img src="${IMG}m-fnl-sa-breakdown.jpg" alt="F&amp;L calculation breakdown"/><em>F&amp;L · how it was calculated</em></div>
    <div class="ph"><img src="${IMG}m-gro-sa-breakdown.jpg" alt="Grocery calculation breakdown"/><em>Grocery · gates and slabs</em></div>
    <div class="chipf" style="left:-6px;top:10%;animation-delay:0s,.8s"><b>Your share</b>of the F&amp;L store pool, worked out</div>
    <div class="chipf" style="right:-6px;top:44%;animation-delay:1.5s,1s"><b>Gate in words</b>store compliance, as the associate reads it</div>
  </div>`,
  flip: true,
  foot: 'Live in the build (pilot app). Single sign-on (SSO) from RIL’s field-sales app is in the go-live plan. Names masked.' + M,
})

/* ---------------- 11 · access and controls ---------------- */
const ctl = (b: string, s: string, st: string, tone: string, d: number) =>
  `<div class="rio-ctl" style="--d:${d}s"><div><b>${b}</b><small>${s}</small></div><span class="status ${tone}">${st}</span></div>`
const access: SlideDef = {
  id: 'rio11', theme: 'light', title: 'Roles, access and controls',
  html: `${M}
  <div class="tel">
    ${rail(5, 'Live · admin users')}
    <div class="tel-head"><div><span class="kick">Access and controls</span><h2>Admins are scoped by vertical, <em>and each right is granted on its own.</em></h2></div></div>
    <div class="tel-body" style="grid-template-columns:minmax(0,.6fr) minmax(0,.4fr)">
      <div class="tel-vis">
        ${shot(IMG + 'admins-top.jpg', 'Admin users · vertical and permissions per admin', 'Real screen · pilot data', { h: '410px' })}
        <div class="tm-callout" style="right:24px;top:62px;--ax:20px;--ay:-5px;--d:.8s"><b>Separate rights</b>View, upload data, edit incentives, submit, approve, manage users.</div>
      </div>
      <div class="tel-say">
        <div class="blk"><div class="lbl">Controls, and where they stand</div>
          <div class="rio-ctls">
            ${ctl('Admins scoped by vertical', 'Digital, Grocery, F&amp;L or RBL, or all for HQ', 'Live', '', .2)}
            ${ctl('Maker-checker approvals', 'submit and approve are separate rights', 'Live', '', .28)}
            ${ctl('Versioned plans', 'effective dates, history per plan', 'Live', '', .36)}
            ${ctl('Audit log', 'who, what, when · export to Excel', 'Live', '', .44)}
            ${ctl('Period lock and payroll CSV', 'locked payouts only', 'Live', '', .52)}
            ${ctl('Approver must differ from maker', 'four-eyes as a hard rule', 'Configurable', 'cfg', .6)}
            ${ctl('HRMS and payroll integration', 'feeds instead of uploads', 'In go-live plan', 'pilot', .68)}
          </div>
        </div>
      </div>
      <div class="foot">Statuses as of November 2026. Today four-eyes is a matter of who you grant approval rights to; enforcing approver ≠ maker in the system is configurable.</div>
    </div>
  </div>`,
}

/* ---------------- 12 · fit ---------------- */
const sor = (sys: string, what: string, now: string, live: string, d: number) =>
  `<div class="r" style="--d:${d}s"><b>${sys}</b><span>${what}</span><span>${now}</span><span>${live}</span></div>`
const fit = plainSlide('rio12', 'dark', 'How it sits on RIL’s systems',
  'How it sits on RIL’s systems',
  'It reads from the systems RIL already runs, <em>and hands approved payouts to RIL payroll.</em>',
  `<div>
    <div class="rio-sor">
      <div class="h">System</div><div class="h">What flows</div><div class="h">In the pilot</div><div class="h">At go-live</div>
      ${sor('Sales system', 'bill-level transactions, store sales', 'CSV upload', 'Sales API feed · built and jointly tested in weeks 2–5', .1)}
      ${sor('HRMS', 'employee master, store and role, joiners and leavers', 'Masters upload', 'HRMS feed · weeks 2–5', .18)}
      ${sor('Attendance', 'daily present, absent, leave, week-off', 'Upload', 'Feed from HRMS or the attendance system · weeks 3–5', .26)}
      ${sor('Targets and audits', 'budgets, mystery shopper, POP display, dry shrink, pilferage index, gross margin', 'Upload or entry per store', 'Same, each batch approved', .34)}
      ${sor('Payroll', 'approved payouts for a locked period', 'CSV export', 'CSV export; disbursement stays in RIL payroll', .42)}
      ${sor('Field-sales app', 'the associate’s incentive view', 'Incentive OS app', 'SSO and incentive APIs inside RIL’s app · weeks 3–6', .5)}
      ${sor('Hosting', 'the whole platform', 'BetterPlace pilot environment', 'Jio Cloud; VAPT (vulnerability assessment and penetration testing) closed before go-live · weeks 1–6', .58)}
    </div>
    <div class="foot" style="margin-top:12px">Week numbers are from the implementation plan v1.3 and count from kickoff. RIL teams own their endpoints; Incentive OS consumes and exposes the agreed APIs.</div>
  </div>${M}`)

/* ---------------- 13 · what changes ---------------- */
const ba = (k: string, a: string, b: string, d: number) =>
  `<div class="r" style="--d:${d}s"><div class="k">${k}</div><div class="a"><span class="mk">${no}</span>${a}</div><div class="b"><span class="mk">${ok}</span>${b}</div></div>`
const changes = plainSlide('rio13', 'light', 'What changes for RIL',
  'What changes for RIL',
  'No files to build each cycle, no Excel, <em>and staff see their number with the reason.</em>',
  `<div class="rio-ba">
    <div class="hd"><span></span><span>Today</span><span>With Incentive OS</span></div>
    ${ba('Running a cycle', 'A team per format collects files and runs formulas, every month and every F&amp;L week', 'No team building files each cycle. Data arrives by feed, a small review team approves, and the system calculates.', .15)}
    ${ba('Excel', 'One working file per format, copied forward each period', 'Plans live in the system as versions. The working files go away.', .27)}
    ${ba('A late file', 'Re-stitch, re-check, re-send', 'Recalculate the period. Each run is kept in the run history.', .39)}
    ${ba('The associate', 'A figure on the payslip, weeks later, with no reason', 'Earned amount, status and the calculation on their phone, during the period', .51)}
    ${ba('An audit question', 'Which cell changed, and who changed it?', 'The audit log answers it, and a locked period can’t be edited', .63)}
  </div>${M}`)

/* ---------------- 14 · data and security (only what plan v1.3 states) ---------------- */
const sec = (ic: string, h: string, st: string, tone: string, p: string, d: number) =>
  `<div class="rio-sec" style="--d:${d}s"><div class="top"><span class="ic">${svg(ic)}</span><span class="status ${tone}">${st}</span></div><h4>${h}</h4><p>${p}</p></div>`
const security = plainSlide('rio14', 'dark', 'Data and security',
  'Data and security',
  'At go-live it runs on Jio Cloud in India, <em>and security clearance gates the go-live date.</em>',
  `<div>
    <div class="rio-secs">
      ${sec(icons.building, 'Hosting and data residency', 'At go-live', 'cfg', 'Staging and production both on Jio Cloud. Data stays in India. Deployment follows Reliance and Jio Cloud security standards.', .1)}
      ${sec(icons.shield, 'Security testing', 'At go-live', 'cfg', 'Vulnerability assessment and penetration testing (VAPT) in weeks 5–6. Findings are fixed before go-live; the slot is booked in week 1.', .18)}
      ${sec(icons.repeat, 'Running it', 'At go-live', 'cfg', 'Containerised deployment, CI/CD, secrets management, monitoring and alerts, backup and disaster recovery, set up in weeks 3–5.', .26)}
      ${sec(icons.lock, 'Access', 'Live in pilot', '', 'Admin rights scoped by vertical and by action, with an audit log of plan, input, calculation and lock events. Single sign-on (SSO) from RIL’s field-sales app at go-live.', .34)}
      ${sec(icons.users, 'Employee data', 'At go-live', 'cfg', 'Access restricted and fields limited to what the incentive calculation needs. Data-retention controls are part of production hardening.', .42)}
      ${sec(icons.plug, 'Data feeds', 'At go-live', 'cfg', 'Sales data by API pull or push, with a scheduled secure-file (SFTP) batch as fallback. Exception queues for missing or late records.', .5)}
    </div>
    <div class="foot" style="margin-top:12px">Source: Reliance Incentive OS implementation plan v1.3. The InfoSec questionnaire starts in week 1.</div>
  </div>${M}`)

/* ---------------- 15 · go-live plan ---------------- */
const gantt: [string, number, number, string][] = [
  ['Requirements workshops and scope freeze', 1, 1, 'req'],
  ['Data feeds: Sales, HRMS, attendance', 2, 5, 'int'],
  ['Plan set-up and build: Digital, Grocery, F&amp;L', 2, 4, 'bld'],
  ['Field-sales app: SSO and incentive APIs', 3, 6, 'int'],
  ['Jio Cloud provisioning, deployment, VAPT', 1, 6, 'cld'],
  ['System test on integrated feeds', 6, 6, 'tst'],
  ['UAT and one-cycle parallel run', 7, 8, 'tst'],
]
const need = (t: string, when: string, d: number) =>
  `<div class="need-it" style="--d:${d}s"><b>${t}</b><span>${when}</span><em>RIL to name</em></div>`
const golive = plainSlide('rio15', 'darker', 'Go-live plan',
  'Go-live plan',
  'Eight weeks from kickoff to go-live for Digital, Grocery and F&amp;L, <em>with a go/no-go gate after the parallel run.</em>',
  `<div class="rio-ready">
    <div class="rio-facts">
      <p><span class="bl">Commercials</span>PO signed; legal and procurement complete; business approval pending.</p>
      <p><span class="bl">Pilot</span>The store and HQ teams who used it in the pilot liked it.</p>
    </div>
    <div class="rio-gl">
      <div class="rio-gantt">
        <div class="gh"><span>Weeks from kickoff</span>${[1, 2, 3, 4, 5, 6, 7, 8].map((w) => `<b>W${w}</b>`).join('')}</div>
        ${gantt.map(([l, a, b, t], i) => `<div class="gr"><span>${l}</span><div class="tr"><i class="${t}" style="--a:${a};--b:${b};--d:${.3 + i * .1}s"></i></div></div>`).join('')}
        <div class="gr gate"><span><b>Go/no-go gate</b><small>UAT sign-off · parallel run within agreed tolerance · VAPT closed · rollback plan approved</small></span><div class="tr"><em class="g" style="--d:1.1s">◆ after parallel run</em></div></div>
        <div class="gr live"><span><b>Go-live: Digital, Grocery and F&amp;L</b></span><div class="tr"><em style="--d:1.25s">★ end of week 8</em></div></div>
      </div>
      <div class="rio-need">
        <div class="hd">What we need from RIL</div>
        ${need('SPOCs per format', 'Digital, Grocery, F&amp;L · week 1', .4)}
        ${need('Sales API and HRMS specs', 'with sandbox access · week 1', .5)}
        ${need('Jio Cloud requisition', 'raised on day 1 · provisioned by week 3', .6)}
        ${need('VAPT slot', 'booked in week 1 · used in weeks 5–6', .7)}
        <p>Jio Cloud and the VAPT slot have no buffer. A week's delay there moves go-live by a week.</p>
      </div>
    </div>
    <div class="foot">Reliance Brands follows on the same platform and feeds, indicatively weeks 9–14. Two weeks of hypercare after go-live. Source: implementation plan v1.3.</div>
  </div>${M}`)

/* ---------------- 16 · the ask ---------------- */
const ask = plainSlide('rio16', 'darker', 'Next steps',
  'Next steps',
  'Three decisions from RIL <em>start the 8-week clock.</em>',
  `<div class="tel-close rio-close">
    <div class="asks">
      <div class="ask" style="--d:.15s"><div class="n">1</div><div><h4>Business approval</h4><p>Business approval is pending. The PO, legal and procurement are done; the InfoSec questionnaire and VAPT are scheduled steps in the go-live plan.</p></div></div>
      <div class="ask" style="--d:.3s"><div class="n">2</div><div><h4>Name the owners</h4><p>A business SPOC for Digital, Grocery and F&amp;L, and IT owners for the Sales, HRMS and attendance feeds and for Jio Cloud.</p></div></div>
      <div class="ask" style="--d:.45s"><div class="n">3</div><div><h4>Fix a kickoff date</h4><p>Week 1 runs requirement workshops with each format, raises the Jio Cloud request and ends in a scope freeze.</p></div></div>
    </div>
    <div class="rio-check">
      <span class="bl">Before you decide</span>
      <ul>
        <li style="--d:.5s"><span class="ic">${svg(icons.eye)}</span><span><b>A live walkthrough</b> on the pilot environment, with a store you pick.</span></li>
        <li style="--d:.6s"><span class="ic">${svg(icons.layers)}</span><span><b>The go-live plan v1.3</b>, section by section with your IT owners.</span></li>
        <li style="--d:.7s"><span class="ic">${svg(icons.play)}</span><span><b>The explainer pack</b>: ten short videos and a written guide to every screen.</span></li>
      </ul>
      <div class="who"><b>Anuj Saxena</b><span>BetterPlace · anuj.saxena@betterplace.co.in</span></div>
    </div>
  </div>${M}`, { glow: true })

export const rilIncentiveOsSlides: SlideDef[] = [
  cover, today, cost, engine, verticals, pilot, configure, dashboard, approvals, mobile, access, fit, changes, security, golive, ask,
]

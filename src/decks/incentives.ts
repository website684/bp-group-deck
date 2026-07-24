// AUTO-PORTED from the Titan incentives deck (de-branded). Edit freely.
import type { SlideDef } from '../lib/types'
import { outcomeSlide } from './html'

const incentivesOutcomes = outcomeSlide('inc11b', 'What live, explained incentives change on the floor.', [
  { n: 'Live', what: 'The scheme motivates every day, not at month-end', how: 'Associates see earnings, target progress and "one more sale is worth ₹X" between customers — the incentive works while the customer is still in the store.', proof: 'Live number in every associate’s pocket' },
  { n: 'Days → hours', what: 'Scheme launch time', how: 'A festive booster goes from idea to live-in-app the same day — config or a plain-language sentence, not an IT ticket.', proof: 'AI copilot + no-code builder' },
  { n: '−80%', what: 'Payout disputes and HR escalations', how: 'Every rupee is explained in plain words with an in-app query thread — held payouts show their reason instead of breeding WhatsApp threads.', proof: 'Reason on every ₹0 · tracked queries' },
  { n: 'Known early', what: 'Festival-month cost, forecast mid-month', how: 'Finance sees the projected bill while there is still time to steer the scheme — no month-end surprise.', proof: 'Run-rate forecast per region' },
], 'A 90-day pilot on one region prices this against your current spreadsheet cycle.')

export const incentivesSlides: SlideDef[] = [
  {
    id: "inc1",
    theme: "dark",
    title: "COVER",
    html: `
    <div class="incd">
    <div class="glow"></div>
    <div style="position:relative;z-index:2;max-width:60%;">
      <span class="eyebrow rise" style="animation-delay:.1s">goBetter Incentives · Product Proposal</span>
      <h1 class="big rise" style="animation-delay:.2s">Every sale rewarded.<br/><span class="tz">Every rupee explained.</span></h1>
      <p class="sub rise" style="animation-delay:.35s">One simple platform to run sales incentives across every store and region — <b style="color:#fff">any brand, any category, any scheme</b>. Set up any scheme, pay accurately, and let every associate see exactly what they've earned.</p>
      <div class="meta rise" style="animation-delay:.5s"><span>Why it matters</span><span>What your team sees</span><span>Build any scheme</span><span>Pay &amp; prove</span></div>
    </div>
    <div class="chero" style="position:absolute;right:clamp(24px,5vw,86px);top:50%;transform:translateY(-50%);width:clamp(300px,34vw,460px);aspect-ratio:1;z-index:1;pointer-events:none;">
      <div style="position:absolute;inset:0;border-radius:50%;border:1px dashed rgba(255,255,255,.14);animation:spinslow 42s linear infinite;"></div>
      <div style="position:absolute;inset:15%;border-radius:50%;border:1px solid rgba(198,161,91,.28);"></div>
      <div style="position:absolute;inset:31%;border-radius:50%;border:1px solid rgba(185,180,245,.28);"></div>
      <div class="rise" style="animation-delay:.4s;position:absolute;inset:0;margin:auto;width:38%;height:38%;border-radius:26px;background:linear-gradient(150deg,var(--titan-2),var(--titan-deep));border:1px solid rgba(255,255,255,.14);display:grid;place-items:center;text-align:center;box-shadow:0 30px 70px -20px rgba(0,0,0,.7),0 0 60px -8px rgba(198,161,91,.4);">
        <div><b style="font-family:var(--disp);font-weight:800;font-size:clamp(.9rem,1.5vw,1.2rem);color:#fff;line-height:1.1;">goBetter<br/><em style="font-style:normal;color:var(--gold);">Incentives</em></b><span style="display:block;font-family:var(--mono);font-size:8px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold-soft);margin-top:8px;">by BetterPlace</span></div>
      </div>
      <div class="cpill p1 rise" style="animation-delay:.6s;position:absolute;top:1%;left:-8%;background:rgba(20,15,64,.78);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.14);border-radius:13px;padding:9px 14px;animation:floaty 6s ease-in-out infinite;"><div style="font-family:var(--disp);font-weight:800;font-size:1.2rem;color:#fff;line-height:1;"><em style="font-style:normal;color:var(--gold);">50K</em>+</div><div style="font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.6);margin-top:4px;">Associates, one platform</div></div>
      <div class="cpill p2 rise" style="animation-delay:.75s;position:absolute;top:-2%;right:-4%;background:rgba(20,15,64,.78);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.14);border-radius:13px;padding:9px 14px;animation:floaty 6s ease-in-out infinite 1.3s;"><div style="font-family:var(--disp);font-weight:800;font-size:1.2rem;color:#fff;line-height:1;"><em style="font-style:normal;color:var(--gold);">Millions</em></div><div style="font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.6);margin-top:4px;">Sales counted / month</div></div>
      <div class="cpill p3 rise" style="animation-delay:.9s;position:absolute;bottom:7%;left:-11%;background:rgba(20,15,64,.78);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.14);border-radius:13px;padding:9px 14px;animation:floaty 6s ease-in-out infinite .7s;"><div style="font-family:var(--disp);font-weight:800;font-size:1.2rem;color:#fff;line-height:1;">To the <em style="font-style:normal;color:var(--gold);">rupee</em></div><div style="font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.6);margin-top:4px;">Accurate &amp; explained</div></div>
      <div class="cpill p4 rise" style="animation-delay:1.05s;position:absolute;bottom:0;right:-6%;background:rgba(20,15,64,.78);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.14);border-radius:13px;padding:9px 14px;animation:floaty 6s ease-in-out infinite 2s;"><div style="font-family:var(--disp);font-weight:800;font-size:1.05rem;color:#fff;line-height:1.15;">Retail · BFSI<br/>Insurance · Pharma</div><div style="font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--gold-soft);margin-top:4px;">One engine, any industry</div></div>
    </div>
  
    </div>`,
  },
  {
    id: "inc2",
    theme: "light",
    title: "WHO WE ARE",
    html: `
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">Who's behind it · BetterPlace</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:24ch;">The frontline-workforce platform you already know — now with incentives.</h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:12px;">BetterPlace already helps 1,000+ companies across Asia hire, onboard, train, manage and pay their frontline teams. <b style="color:var(--titan)">goBetter Incentives</b> is the newest part of that platform — made for large store and field-sales teams.</p>
      <div class="stats rise" style="animation-delay:.24s;gap:20px 46px;margin-top:26px;">
        <div class="stat"><div class="n"><em>25</em>M+</div><div class="l">Worker profiles</div></div>
        <div class="stat"><div class="n">1,000+</div><div class="l">Enterprises powered</div></div>
        <div class="stat"><div class="n">500+</div><div class="l">Cities across Asia</div></div>
        <div class="stat"><div class="n">10+</div><div class="l">Years on the frontline</div></div>
      </div>
      <div class="pillars rise" style="animation-delay:.34s;grid-template-columns:repeat(3,1fr);margin-top:26px;">
        <div class="pcard" style="--pc:var(--navy)"><div class="pic"><svg viewBox="0 0 24 24"><path d="M3 3h18v4H3zM3 10h18v11H3z"/><path d="M8 14h8"/></svg></div><div class="tag">Manage &amp; pay</div><h3>goBetter</h3><p>Attendance, payroll &amp; compliance for the frontline — the suite enterprise retailers run their stores on.</p></div>
        <div class="pcard" style="--pc:var(--titan);box-shadow:0 16px 44px rgba(51,47,135,.16)"><div class="pic" style="background:#EEEBFB;color:var(--titan)"><svg viewBox="0 0 24 24"><path d="M12 2v20M5 7l7-4 7 4M5 7v10l7 4 7-4V7"/></svg></div><div class="tag" style="color:var(--titan)">In this proposal</div><h3>goBetter Incentives <span class="module-badge" style="vertical-align:middle;">Module</span></h3><p>Config-driven, AI-led incentive calculation, communication &amp; payout — for every associate on the floor.</p></div>
        <div class="pcard" style="--pc:var(--navy)"><div class="pic"><svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg></div><div class="tag">Also available</div><h3>verifyBetter · skillBetter</h3><p>AI background verification &amp; a vernacular LMS — the rest of the frontline stack, ready when you are.</p></div>
      </div>
    </div>
  
    </div>`,
  },
  {
    id: "inc3",
    theme: "light",
    title: "THE PROBLEM (retail salesperson POV)",
    html: `
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">The floor today</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:26ch;">Your team makes the sale — then waits weeks to find out what they earned.</h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Incentives are the biggest day-to-day lever you have on the floor. But across hundreds of stores they're still worked out on spreadsheets — and that costs you where it hurts most: your team's motivation.</p>
      <div class="probgrid rise" style="animation-delay:.24s;margin-top:20px;">
        <div class="prob"><h4><svg viewBox="0 0 24 24"><path d="M4 4h16v4H4zM4 12h16M4 18h10"/></svg>Endless spreadsheets</h4><p>Hundreds of stores and dozens of schemes across brands and categories — added up by hand, every single month.</p></div>
        <div class="prob"><h4><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>No live visibility</h4><p>Staff can't see what they've earned or how close they are to the next reward — so the scheme quietly stops motivating them.</p></div>
        <div class="prob"><h4><svg viewBox="0 0 24 24"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 17l-5.5 2.3 1-6.1L3 8.9 9 8z"/></svg>Festival-month chaos</h4><p>Diwali, Dhanteras and wedding season pile up short special schemes — at the busiest, highest-pressure time of the year.</p></div>
        <div class="prob"><h4><svg viewBox="0 0 24 24"><path d="M8 12h8M12 8v8"/><circle cx="12" cy="12" r="9"/></svg>Disputes &amp; returns</h4><p>Split credit, exchanges and returns after payday — every one turns into a back-and-forth with no clear record to point to.</p></div>
        <div class="prob"><h4><svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>Owned &amp; franchise gaps</h4><p>Company and franchise stores run the same schemes differently, with no single view across the whole network.</p></div>
        <div class="prob"><h4><svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 5-6"/></svg>Managers flying blind</h4><p>Store and area managers can't see who to push or what the month will cost — until the money's already been spent.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.4s;">The same tool that works out the number should also <b>show every associate their number, live — and prove it.</b></div>
    </div>
  
    </div>`,
  },
  {
    id: "inc4",
    theme: "dark",
    title: "MEET THE PRODUCT",
    html: `
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">Meet goBetter Incentives</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:24ch;">One place to set up, calculate, pay — and explain — every incentive.</h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:82ch;">Most tools only do the maths. goBetter Incentives does the whole job: set up any scheme, pull in your sales automatically, pay accurately, and put a live, clearly-explained number in every associate's pocket.</p>
      <div class="pillars rise" style="animation-delay:.26s;grid-template-columns:repeat(4,1fr);margin-top:24px;">
        <div class="pcard" style="--pc:var(--titan);background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);box-shadow:none;">
          <div class="pic" style="background:rgba(255,255,255,.08);color:var(--gold-soft)"><svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10"/><circle cx="18" cy="18" r="2.5"/></svg></div>
          <h3 style="color:#fff;font-size:1.15rem;">Configure</h3><p style="color:rgba(255,255,255,.72)">Any plan as pure config — studded spiffs, gold-grammage slabs, festive boosters. No code, no engineering ticket.</p>
        </div>
        <div class="pcard" style="--pc:var(--gold);background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);box-shadow:none;">
          <div class="pic" style="background:rgba(255,255,255,.08);color:var(--gold-soft)"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18z"/><path d="M12 7v5l3 2"/><path d="M3 3l2 2M21 3l-2 2"/></svg></div>
          <h3 style="color:#fff;font-size:1.15rem;">AI-led</h3><p style="color:rgba(255,255,255,.72)">Describe a scheme in plain language → a working plan. AI sets fair targets, simulates cost, flags gaming.</p>
        </div>
        <div class="pcard" style="--pc:var(--navy-2);background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);box-shadow:none;">
          <div class="pic" style="background:rgba(255,255,255,.08);color:var(--gold-soft)"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></div>
          <h3 style="color:#fff;font-size:1.15rem;">Calculate &amp; pay</h3><p style="color:rgba(255,255,255,.72)">Compute at fleet scale, approve with maker-checker, export to payroll, lock the period. Returns handled as clawbacks.</p>
        </div>
        <div class="pcard" style="--pc:var(--teal);background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);box-shadow:none;">
          <div class="pic" style="background:rgba(255,255,255,.08);color:var(--gold-soft)"><svg viewBox="0 0 24 24"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M11 18h2"/></svg></div>
          <h3 style="color:#fff;font-size:1.15rem;">Communicate</h3><p style="color:rgba(255,255,255,.72)">Every associate sees a live, gamified, fully-explained number — and can query it. Managers see the whole floor.</p>
        </div>
      </div>
      <div class="kicker rise" style="animation-delay:.44s;background:linear-gradient(90deg,var(--titan),var(--titan-deep));"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg><span>Multi-tenant &amp; industry-agnostic — the same engine already runs retail, BFSI, insurance &amp; pharma fleets. <b>Your brands are configurations, not custom builds.</b></span></div>
    </div>
  
    </div>`,
  },
  {
    id: "inc5",
    theme: "dark",
    title: "THE ASSOCIATE'S DAY (mobile)",
    html: `
    <div class="incd">
    <div class="slidebody">
      <div class="split narrowviz">
        <div>
          <span class="eyebrow rise">A day for Arjun · Sales Associate</span>
          <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:20ch;">Their earnings — live in their pocket, and explained.</h2>
          <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">No waiting for month-end. Between customers, they open the app and see exactly where they stand — and what one more sale is worth today.</p>
          <div class="featlist rise" style="animation-delay:.26s;margin-top:18px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18z"/><path d="M12 7v5l3 2"/></svg></div><div><h4 style="color:#fff">This month's earnings, live</h4><p>Their earnings, target progress and today's sales update the moment a bill is rung — no month-end surprise.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg></div><div><h4 style="color:#fff">"₹1.1L more unlocks +₹2,500"</h4><p>A gentle nudge turns the scheme into a clear goal for the shift — and pushes the products you want to sell.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 15l-5 3 2-6-5-4h6l2-6 2 6h6l-5 4 2 6z"/></svg></div><div><h4 style="color:#fff">Streaks, levels &amp; store leaderboard</h4><p>A bit of friendly competition on the floor — and recognition for the store's top sellers each month.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg></div><div><h4 style="color:#fff">Every ₹0 explained — and easy to question</h4><p>If something's held, they see the reason in plain words and can ask about it in one tap. Fewer escalations to HR.</p></div></div>
          </div>
        </div>
        <div class="phonewrap rise" style="animation-delay:.3s;">
          <div class="phone">
            <div class="pscr">
              <div class="rhero">
                <div class="abar"><span>9:41</span><span class="dotrow"><i></i><i></i><i></i></span></div>
                <div class="rh-top">
                  <div><div class="rh-name">Hi Arjun · Sales Associate</div><div class="rh-loc"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>Flagship store · Pune</div></div>
                  <span class="streak"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6l-1 8 10-13h-7z"/></svg>9-day streak</span>
                </div>
                <div class="rh-mid">
                  <div class="ring">
                    <svg width="96" height="96" viewBox="0 0 96 96"><circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="8"/><circle cx="48" cy="48" r="42" fill="none" stroke="#C6A15B" stroke-width="8" stroke-linecap="round" stroke-dasharray="264" stroke-dashoffset="58"/></svg>
                    <div class="rc-lbl"><span class="rc-pct">78%</span><span class="rc-cap">of target</span></div>
                  </div>
                  <div><div class="rh-amt-cap">July incentive</div><div class="rh-amt">₹18,400</div><div class="rh-sub">₹9.4L sold of ₹12L target</div><div class="rh-today"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l6-6 4 4 8-8"/></svg>Today: ₹1.6L · 4 sales</div></div>
                </div>
                <svg class="wave" viewBox="0 0 300 60" fill="none" preserveAspectRatio="none"><path d="M0 35 C60 10 110 55 180 30 C240 8 270 38 300 22" stroke="#C6A15B" stroke-width="9" stroke-linecap="round"/></svg>
              </div>
              <div class="rbody">
                <div class="rcard nudge">
                  <div class="rc-row"><span class="ic gold"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg></span><div><div class="rc-t">₹1.1L more in sales unlocks +₹2,500</div><div class="rc-d">Reach 100% under "Diwali booster" and your payout steps up.</div></div></div>
                </div>
                <div class="rgrid">
                  <div class="rmini"><div class="rm-h"><span class="rm-ic" style="background:var(--gold)"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M8 21l4-3 4 3"/></svg></span><div><div class="rm-t">Gold tier</div><div class="rm-s">₹1.9L lifetime</div></div></div><div class="rm-bar"><i style="width:64%"></i></div><div class="rm-note">64% to Platinum</div></div>
                  <div class="rmini"><div class="rm-h"><span class="rm-ic" style="background:var(--navy)"><svg viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M6 4h12v5a6 6 0 01-12 0z"/></svg></span><div><div class="rm-t">Rank #4</div><div class="rm-s">of 38 · store</div></div></div><div class="rm-bar"><i style="width:88%;background:var(--navy)"></i></div><div class="rm-note">Top 7% this month</div></div>
                </div>
                <div class="rcard"><div class="rc-row"><span class="ic rose"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg></span><div><div class="rc-t">1 held payout — here's why</div><div class="rc-d">"Diwali booster": 2 smartwatches returned within 7 days. Tap to see the adjustment.</div></div></div></div>
              </div>
              <div class="anav">
                <div class="ni on"><svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg>Home<span class="u"></span></div>
                <div class="ni"><svg viewBox="0 0 24 24"><path d="M6 4h12v5a6 6 0 01-12 0z"/><path d="M12 15v4M8 21h8"/></svg>Ranks</div>
                <div class="ni"><svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h5"/></svg>Earnings</div>
                <div class="ni"><svg viewBox="0 0 24 24"><path d="M4 4h16v12H5.2L4 18z"/></svg>Inbox</div>
              </div>
            </div>
          </div>
          <div class="phone small r" style="align-self:flex-end;">
            <div class="pscr">
              <div class="lbhero">
                <div class="abar"><span>9:41</span><span class="dotrow"><i></i><i></i><i></i></span></div>
                <h4>Leaderboard</h4><p>July · Flagship store, Pune · 38 associates</p>
              </div>
              <div class="podium">
                <div class="pod"><div class="av sm">RK</div><div class="card rank2"><div class="nm">Ravi</div><div class="amt">₹24.1K</div><div class="rk">#2</div></div></div>
                <div class="pod first"><div class="crown"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 7l5 4 4-6 4 6 5-4-2 12H5z"/></svg></div><div class="av">AS</div><div class="card"><div class="nm">Anjali</div><div class="amt">₹26.8K</div><div class="rk">#1</div></div></div>
                <div class="pod"><div class="av sm">MP</div><div class="card rank3"><div class="nm">Meera</div><div class="amt">₹22.0K</div><div class="rk">#3</div></div></div>
              </div>
              <div class="lbrows">
                <div class="lbrow me"><span class="rn">4</span><span class="av2">PS</span><span class="nm">You</span><span class="amt">₹18.4K</span></div>
                <div class="lbrow"><span class="rn">5</span><span class="av2">DV</span><span class="nm">Deepak V.</span><span class="amt">₹17.2K</span></div>
                <div class="lbrow"><span class="rn">6</span><span class="av2">SN</span><span class="nm">Sneha N.</span><span class="amt">₹15.9K</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vizcap rise" style="animation-delay:.5s">The goBetter Incentives associate app · the same experience across every brand you run</div>
    </div>
  
    </div>`,
  },
  {
    id: "inc6",
    theme: "light",
    title: "THE PLAN BUILDER (animated, multi-brand)",
    html: `
    <div class="incd">
    <div class="slidebody">
      <div class="split narrowviz">
        <div>
          <span class="eyebrow rise">Build any scheme, in minutes</span>
          <h2 class="rise" style="animation-delay:.08s;max-width:20ch;">Any brand. Any reward. No IT project.</h2>
          <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Your team sets up a new incentive the way they'd fill a form — pick the business, pick the brand, pick how the reward works, and it's live. The same builder covers every brand and format you run.</p>
          <div class="featlist rise" style="animation-delay:.24s;margin-top:16px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg></div><div><h4>Pick the brand &amp; category</h4><p>Every business, brand and store format — or run one scheme across all of them.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10"/></svg></div><div><h4>Choose how the reward works</h4><p>Ready-made choices in plain words — % of sales, ₹ per item, a target bonus, a festival booster, or a team reward.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 17l-5.5 2.3 1-6.1L3 8.9 9 8z"/></svg></div><div><h4>Or just describe it — AI builds it</h4><p>Type the scheme in a sentence and it's set up for you, ready to review. No formulas to write.</p></div></div>
          </div>
        </div>
        <div class="rise" style="animation-delay:.3s">
          <div class="win" id="builder" data-step="0">
            <div class="wbar"><span class="wd"><i></i><i></i><i></i></span><span class="wt"><b>goBetter Incentives</b> · New scheme</span></div>
            <div class="wbody">
              <div class="bsteps">
                <div class="bstep"><span class="bn">1</span>Business</div>
                <div class="bstep"><span class="bn">2</span>Brand</div>
                <div class="bstep"><span class="bn">3</span>Reward</div>
                <div class="bstep"><span class="bn">4</span>Done</div>
              </div>
              <div class="bcrumbs">
                <span class="bcrumb">Watches</span><span class="bcrumb"><span class="sep">›</span>Flagship</span><span class="bcrumb"><span class="sep">›</span>Festival booster</span>
              </div>
              <div class="bstagewrap">
                <!-- Stage 1 · Business -->
                <div class="bstage">
                  <div class="bq">Which business is this scheme for?</div>
                  <div class="btiles c5">
                    <div class="btile sel"><span class="bchk"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></span><span class="bi"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 9v3l2 1"/></svg></span><div class="bt">Watches</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M12 3l3 5 5 .7-3.6 3.5.9 5-5.3-2.6L6.7 17l.9-5L4 8.7 9 8z"/></svg></span><div class="bt">Jewellery</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><circle cx="7" cy="14" r="4"/><circle cx="17" cy="14" r="4"/><path d="M11 13h2M2 10l3 1M22 10l-3 1"/></svg></span><div class="bt">Eyewear</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="3"/><path d="M11 7h2"/></svg></span><div class="bt">Wearables</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M9 3h6v3H9zM8 6h8l1 15H7z"/></svg></span><div class="bt">Fragrances</div></div>
                  </div>
                </div>
                <!-- Stage 2 · Brand -->
                <div class="bstage">
                  <div class="bq">Which brand?</div>
                  <div class="btiles c4">
                    <div class="btile sel"><span class="bchk"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></span><div class="bt" style="margin-top:6px">Flagship</div><div class="bts">Own stores</div></div>
                    <div class="btile"><div class="bt" style="margin-top:6px">Youth brand</div><div class="bts">Smart · casual</div></div>
                    <div class="btile"><div class="bt" style="margin-top:6px">Value brand</div><div class="bts">Mass market</div></div>
                    <div class="btile"><div class="bt" style="margin-top:6px">Multi-brand</div><div class="bts">Franchise</div></div>
                  </div>
                  <div style="font-size:9.5px;color:var(--muted);margin-top:10px;text-align:center;">…or tick several brands to run one scheme across them</div>
                </div>
                <!-- Stage 3 · Reward type -->
                <div class="bstage">
                  <div class="bq">How should the reward work?</div>
                  <div class="btiles c3">
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M19 5L5 19M8 6a2 2 0 100 4 2 2 0 000-4zM16 14a2 2 0 100 4 2 2 0 000-4z"/></svg></span><div class="bt">% of sales</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z"/><path d="M9 13h6M9 17h4"/></svg></span><div class="bt">₹ per item</div></div>
                    <div class="btile sel"><span class="bchk"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></span><span class="bi"><svg viewBox="0 0 24 24"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 17l-5.5 2.3 1-6.1L3 8.9 9 8z"/></svg></span><div class="bt">Festival booster</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18z"/><path d="M12 7v5l3 2"/></svg></span><div class="bt">Target bonus</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0"/><circle cx="18" cy="9" r="2"/></svg></span><div class="bt">Team reward</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M12 4v16M4 12h16"/></svg></span><div class="bt">Something custom</div></div>
                  </div>
                  <div class="airibbon"><span class="ai-ic"><svg viewBox="0 0 24 24"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 17l-5.5 2.3 1-6.1L3 8.9 9 8z"/></svg></span><div><div class="ai-t">Or just describe it — AI builds it for you</div><div class="ai-s">"Give store staff a Diwali bonus on watches &amp; smartwatches"</div></div></div>
                </div>
                <!-- Stage 4 · Done -->
                <div class="bstage">
                  <div class="planready">
                    <div class="pr-h"><div><div class="pr-t">Diwali booster · flagship stores</div><div class="pr-s">Watches &amp; smartwatches · this festive month</div></div><span class="pr-badge"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Ready</span></div>
                    <ul>
                      <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>2% on watch sales, ₹500 for every smartwatch</li>
                      <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Extra bonus once the store beats its Diwali target</li>
                      <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Adjusted for days worked · capped at ₹40,000</li>
                    </ul>
                    <div class="pr-foot"><div class="pr-stat"><div class="n">62</div><div class="l">associates</div></div><div class="pr-stat"><div class="n">₹4.2L</div><div class="l">projected cost</div></div><div class="pr-stat"><div class="n">1 tap</div><div class="l">to go live</div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="vizcap" style="margin-top:12px;">The real scheme builder · animated walkthrough</div>
        </div>
      </div>
    </div>
  
    </div>`,
  },
  {
    id: "inc7",
    theme: "dark",
    title: "AI-LED",
    html: `
    <div class="incd">
    <div class="slidebody">
      <div class="split rev">
        <div class="rise" style="animation-delay:.28s">
          <div class="copilot">
            <div class="ct-in"><div class="ct-lbl">AI plan copilot</div><div class="ct-q">"Give store staff 2% on watches and ₹500 for every smartwatch, with a Diwali bonus. Cap it at ₹40,000 and adjust for days worked."</div></div>
            <div class="ct-out">
              <span class="ct-tag"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>Scheme ready to review</span>
              <div class="ct-r">Set up as a <b>watch commission</b> plus a per-smartwatch reward and a <b>Diwali bonus</b> — adjusted for days worked and capped at ₹40,000. No formulas to write; just review and launch.</div>
              <div class="ct-chips">
                <span class="ct-chip"><svg viewBox="0 0 24 24"><path d="M19 5L5 19M8 6a2 2 0 100 4 2 2 0 000-4zM16 14a2 2 0 100 4 2 2 0 000-4z"/></svg>2% on watches</span>
                <span class="ct-chip"><svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="3"/></svg>₹500 / smartwatch</span>
                <span class="ct-chip"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h10"/></svg>Cap ₹40,000</span>
              </div>
            </div>
          </div>
          <div class="vizcap" style="margin-top:12px;">Describe the scheme → a working, editable plan</div>
        </div>
        <div>
          <span class="eyebrow rise">What the AI does for you</span>
          <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:20ch;">AI handles the hard parts of incentives.</h2>
          <div class="featlist rise" style="animation-delay:.18s;margin-top:16px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/></svg></div><div><h4 style="color:#fff">Describe it, don't build it</h4><p>Type any scheme in a sentence and it's set up for you — ready to review. No formulas, no waiting on IT.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 5-6"/></svg></div><div><h4 style="color:#fff">Fair targets, set for you</h4><p>Targets based on what each person actually sells — so the scheme feels reachable, not demoralising.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 3l9 4-9 4-9-4 9-4z"/><path d="M3 12l9 4 9-4M3 17l9 4 9-4"/></svg></div><div><h4 style="color:#fff">Try it before you launch</h4><p>Test any scheme on last month's real sales — see the cost and every payout before you commit a rupee.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 2a9 9 0 019 9c0 5-4 8-9 11-5-3-9-6-9-11a9 9 0 019-9z"/><path d="M9 11l2 2 4-4"/></svg></div><div><h4 style="color:#fff">Catches mistakes &amp; gaming</h4><p>Spots split bills, sudden month-end spikes and returns-after-payday — before they cost you.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  
    </div>`,
  },
  {
    id: "inc8",
    theme: "light",
    title: "CONNECT YOUR SALES DATA",
    html: `
    <div class="incd">
    <div class="slidebody">
      <div class="split">
        <div>
          <span class="eyebrow rise">Your sales data, automatically</span>
          <h2 class="rise" style="animation-delay:.08s;max-width:22ch;">Every sale flows in on its own.</h2>
          <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Connect your billing once. Every sale — from any store, any brand — comes in automatically. A <b style="color:var(--titan)">watch, a ring and a pair of frames</b> are all counted the same simple way.</p>
          <div class="featlist rise" style="animation-delay:.24s;margin-top:16px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 7h16v13H4zM4 7l3-4h10l3 4"/></svg></div><div><h4>Works with what you have</h4><p>Your billing systems, scheduled file uploads and goBetter attendance — for company <b>and</b> franchise stores alike.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 9v11"/></svg></div><div><h4>Messy store file? AI sorts it</h4><p>Drop in a store's Excel and AI lines up the columns for you — no manual clean-up needed.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 3v18M5 10l7-7 7 7"/></svg></div><div><h4>Nothing double-counts</h4><p>Load the same file twice and it won't pay twice. Every upload is on record — clean for audit.</p></div></div>
          </div>
        </div>
        <div class="rise" style="animation-delay:.3s">
          <div class="win">
            <div class="wbar"><span class="wd"><i></i><i></i><i></i></span><span class="wt"><b>goBetter Incentives</b> · Data</span></div>
            <div class="wbody">
              <div style="font-family:var(--mono);font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:9px;">Connected sources</div>
              <div class="conngrid">
                <div class="conn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M4 7h16v13H4zM4 7l3-4h10l3 4"/></svg></span><div><div class="cn">Store POS feed</div><div class="cs">Bill-level · hourly</div></div><span class="cst on">Connected</span></div>
                <div class="conn"><span class="ci"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8v6H8z"/></svg></span><div><div class="cn">SAP billing</div><div class="cs">Nightly extract</div></div><span class="cst on">Connected</span></div>
                <div class="conn"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0M16 4a3 3 0 010 6M21 20a6 6 0 00-4-5.6"/></svg></span><div><div class="cn">goBetter HRMS</div><div class="cs">Attendance · roster</div></div><span class="cst on">Connected</span></div>
                <div class="conn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M4 9h16"/></svg></span><div><div class="cn">Franchise CSV</div><div class="cs">Weekly upload</div></div><span class="cst cfg">Mapping</span></div>
              </div>
              <div class="upl"><span class="doc"><svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg></span><div class="um"><div class="ufn">store_sales_july.xlsx</div><div class="ux">4,812 rows · AI matching columns…</div></div><span class="uok">98% matched</span></div>
              <div style="margin-top:10px;background:#fff;border:1px solid var(--border);border-radius:11px;padding:11px 12px;">
                <div style="font-family:var(--mono);font-size:8px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">Suggested mapping</div>
                <div class="maprow"><span class="src">Bill_No</span><span class="arr">→</span><span class="dst">Bill number</span><span class="aibadge">AI · 99%</span></div>
                <div class="maprow"><span class="src">Product_Category</span><span class="arr">→</span><span class="dst">Category</span><span class="aibadge">AI · 97%</span></div>
                <div class="maprow" style="border-bottom:0;"><span class="src">Item_Value</span><span class="arr">→</span><span class="dst" style="color:var(--titan)">Sale value</span><span class="aibadge">AI · 98%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </div>`,
  },
  {
    id: "inc9",
    theme: "light",
    title: "CALCULATE, APPROVE, PAY",
    html: `
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">Calculate · approve · pay · prove</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">From approved to paid — with a record of every rupee.</h2>
      <div class="rail rise" style="animation-delay:.16s;">
        <div class="rstage" style="--rc:var(--teal)"><div class="rn">01</div><h4>Collect</h4><ul><li>Sales &amp; attendance</li><li>Automatic &amp; on record</li></ul></div>
        <div class="rstage" style="--rc:var(--navy-2)"><div class="rn">02</div><h4>Calculate</h4><ul><li>Across every store</li><li>Test, then run</li></ul></div>
        <div class="rstage" style="--rc:var(--titan)"><div class="rn">03</div><h4>Review</h4><ul><li>Check &amp; approve</li><li>Then it's locked</li></ul></div>
        <div class="rstage" style="--rc:var(--amber)"><div class="rn">04</div><h4>Pay</h4><ul><li>Straight to payroll</li><li>Marked as paid</li></ul></div>
        <div class="rstage" style="--rc:var(--green)"><div class="rn">05</div><h4>Adjust</h4><ul><li>Returns adjust</li><li>Questions closed</li></ul></div>
      </div>
      <div class="split" style="margin-top:20px;align-items:stretch;">
        <div class="rise" style="animation-delay:.3s">
          <div class="win">
            <div class="wbar"><span class="wd"><i></i><i></i><i></i></span><span class="wt"><b>Payouts</b> · West region · July 2026 · <span style="color:var(--green)">Approved</span></span></div>
            <div class="wbody">
              <div class="kpi-row" style="grid-template-columns:repeat(4,1fr);">
                <div class="kpi"><div class="kl">Associates</div><div class="kn">61</div><div class="ks">1 store</div></div>
                <div class="kpi"><div class="kl">Eligible</div><div class="kn">57</div><div class="ks">93%</div></div>
                <div class="kpi"><div class="kl">Held</div><div class="kn" style="color:var(--red)">4</div><div class="ks">with reasons</div></div>
                <div class="kpi"><div class="kl">Total payout</div><div class="kn">₹8.6L</div><div class="ks">this period</div></div>
              </div>
              <table class="dtable" style="margin-top:12px;">
                <thead><tr><th>Associate</th><th>Ach.</th><th>Final</th><th>Status</th><th>Why</th></tr></thead>
                <tbody>
                  <tr><td><div class="pname">Anjali S.</div><div class="psub">EMP-2214 · Watches</div></td><td class="num">142%</td><td class="num">₹26,800</td><td><span class="pill ok">Approved</span></td><td><span class="rchip info">Bonus +10%</span></td></tr>
                  <tr><td><div class="pname">Rohan M.</div><div class="psub">EMP-2231 · Watches</div></td><td class="num">108%</td><td class="num">₹18,400</td><td><span class="pill ok">Approved</span></td><td><span class="rchip warn">Adjusted · days worked</span></td></tr>
                  <tr><td><div class="pname">Karan D.</div><div class="psub">EMP-2240 · Sales</div></td><td class="num">61%</td><td class="num">₹0</td><td><span class="pill bad">Held</span></td><td><span class="rchip block">Below target</span></td></tr>
                  <tr><td><div class="pname">Suresh R.</div><div class="psub">EMP-2258 · Smartwatch</div></td><td class="num">—</td><td class="num" style="color:var(--red)">−₹2,100</td><td><span class="pill gold">Return adjust</span></td><td><span class="rchip warn">2 smartwatches returned</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="rise" style="animation-delay:.38s">
          <div class="featlist" style="gap:15px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7H3V5h11"/></svg></div><div><h4>Review, approve, done</h4><p>One person prepares, another approves, then it's locked. Nothing changes quietly after — clean for audit.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1015-6.7L21 3"/><path d="M21 3v6h-6"/></svg></div><div><h4>Returns adjust automatically</h4><p>A return or exchange after payday is handled on its own — the adjustment carries into the next payout. No manual rework.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 4h16v13H5.2L4 19z"/><path d="M8 9h8M8 12h5"/></svg></div><div><h4>Questions handled in the app</h4><p>Every held payout shows its reason; the associate asks in-app; the manager replies on a tracked thread. Far fewer HR escalations.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><path d="M9 17h6M9 13h6"/></svg></div><div><h4>One click to payroll</h4><p>A single payroll file with every adjustment already included — and a clear status from calculated to paid.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  
    </div>`,
  },
  {
    id: "inc10",
    theme: "dark",
    title: "MANAGER VISIBILITY & ANALYTICS",
    html: `
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">Visibility · for managers &amp; HO</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Store managers coach. Head office sees cost before it's spent.</h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:82ch;">The same numbers that motivate the associate roll up for everyone above them — a team view for store managers, and a dashboard for head office that compares stores fairly and forecasts the festival-month bill early.</p>
      <div class="split" style="margin-top:20px;align-items:stretch;">
        <div class="rise" style="animation-delay:.26s">
          <div class="win" style="box-shadow:0 30px 70px -20px rgba(0,0,0,.5)">
            <div class="wbar" style="background:#0e1330;border-color:rgba(255,255,255,.08)"><span class="wd"><i style="background:#3a4370"></i><i style="background:#3a4370"></i><i style="background:#3a4370"></i></span><span class="wt" style="color:rgba(255,255,255,.6)"><b style="color:#fff">Analytics</b> · West region</span></div>
            <div class="wbody" style="background:#141a3a;">
              <div style="font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.5);">Payout trend · last 6 months</div>
              <div class="trendbars">
                <div class="tb"><div class="bv" style="color:#fff">₹6.1L</div><div class="bar" style="height:44%"></div><div class="bm" style="color:rgba(255,255,255,.5)">Feb</div></div>
                <div class="tb"><div class="bv" style="color:#fff">₹6.8L</div><div class="bar" style="height:50%"></div><div class="bm" style="color:rgba(255,255,255,.5)">Mar</div></div>
                <div class="tb"><div class="bv" style="color:#fff">₹11.4L</div><div class="bar" style="height:82%;background:linear-gradient(180deg,#E4CE9A,#C6A15B)"></div><div class="be">Festival</div><div class="bm" style="color:rgba(255,255,255,.5)">Apr</div></div>
                <div class="tb"><div class="bv" style="color:#fff">₹7.2L</div><div class="bar" style="height:53%"></div><div class="bm" style="color:rgba(255,255,255,.5)">May</div></div>
                <div class="tb"><div class="bv" style="color:#fff">₹7.9L</div><div class="bar" style="height:58%"></div><div class="bm" style="color:rgba(255,255,255,.5)">Jun</div></div>
                <div class="tb"><div class="bv" style="color:#fff">₹8.6L</div><div class="bar" style="height:63%"></div><div class="bm" style="color:rgba(255,255,255,.5)">Jul</div></div>
              </div>
              <div style="display:flex;gap:10px;margin-top:14px;">
                <div style="flex:1;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:11px;padding:11px 12px;"><div style="font-family:var(--mono);font-size:8px;color:rgba(255,255,255,.5);text-transform:uppercase;">Festival forecast</div><div style="font-family:var(--disp);font-weight:800;font-size:1.15rem;color:var(--gold-soft);margin-top:5px;">₹13.9L</div><div style="font-size:8.5px;color:rgba(255,255,255,.6);margin-top:2px;">projected · run-rate</div></div>
                <div style="flex:1;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:11px;padding:11px 12px;"><div style="font-family:var(--mono);font-size:8px;color:rgba(255,255,255,.5);text-transform:uppercase;">Payout / assoc.</div><div style="font-family:var(--disp);font-weight:800;font-size:1.15rem;color:#fff;margin-top:5px;">₹14,100</div><div style="font-size:8.5px;color:rgba(255,255,255,.6);margin-top:2px;">size-normalised</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="rise" style="animation-delay:.34s">
          <div class="featlist" style="gap:15px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0"/><circle cx="18" cy="9" r="2.5"/><path d="M16.5 20a5 5 0 015-4"/></svg></div><div><h4 style="color:#fff">Manager team view</h4><p>Every store manager sees their team's live progress, projected payout and <b>who's one push from their target</b> — on the same app.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg></div><div><h4 style="color:#fff">Fair store comparison</h4><p>Compares payout per associate, not raw totals — so a flagship and a small-town store are judged on effort, not footfall.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18z"/><path d="M12 7v5l3 2"/></svg></div><div><h4 style="color:#fff">Festival cost, known early</h4><p>See what Diwali or the wedding season will cost mid-month — no month-end surprises for Finance.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 8l-5 5-3-3-4 4"/></svg></div><div><h4 style="color:#fff">Is the scheme working?</h4><p>See how many are earning, how targets are spread, and whether the scheme is lifting the sales you care about.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  
    </div>`,
  },
  {
    id: "inc11",
    theme: "dark",
    title: "SCALE & TRUST",
    html: `
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">Built for enterprise scale &amp; trust</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:22ch;">Every brand, every store, every associate — in one place.</h2>
      <div class="impact rise" style="animation-delay:.18s;grid-template-columns:repeat(4,1fr);margin-top:22px;">
        <div class="icard"><div class="n">50K+</div><div class="l">Associates handled with no slowdown</div></div>
        <div class="icard"><div class="n">Millions</div><div class="l">Sales a month, handled with ease</div></div>
        <div class="icard"><div class="n">1 platform</div><div class="l">Every brand · every format · one login</div></div>
        <div class="icard"><div class="n">Owned &amp;<br/>franchise</div><div class="l">Each store &amp; brand kept separate and secure</div></div>
      </div>
      <div class="two rise" style="animation-delay:.3s;margin-top:22px;">
        <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:20px 22px;">
          <h4 style="font-family:var(--disp);font-weight:700;color:#fff;font-size:1.05rem;margin-bottom:10px;">Enterprise-grade &amp; secure</h4>
          <p style="font-size:.86rem;line-height:1.6;color:rgba(255,255,255,.78);">Controlled access, a full record of every change, each brand's data kept separate, and India <b style="color:var(--gold-soft)">DPDPA</b>-ready handling of staff details. Every payout accurate to the rupee.</p>
          <div class="certs" style="margin-top:16px;"><img src="assets/compliance/iso-27001.svg" alt="ISO 27001"/><img src="assets/compliance/soc-2.svg" alt="SOC 2"/><img src="assets/compliance/dpdpa.svg" alt="DPDPA"/><img src="assets/compliance/gdpr.svg" alt="GDPR"/></div>
        </div>
        <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:20px 22px;">
          <h4 style="font-family:var(--disp);font-weight:700;color:#fff;font-size:1.05rem;margin-bottom:10px;">The platform behind it</h4>
          <p style="font-size:.86rem;line-height:1.6;color:rgba(255,255,255,.78);">goBetter Incentives rides the BetterPlace platform already trusted by 1,000+ enterprises across Asia — backed by Jungle Ventures, Macquarie &amp; BII, and a Microsoft cloud &amp; AI partner.</p>
          <div class="logowall" style="grid-template-columns:repeat(4,1fr);margin-top:14px;"><div class="lc"><img src="assets/logo/c-tata.png" alt="tata" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-tcs.png" alt="tcs" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-flipkart.png" alt="flipkart" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-swiggy.png" alt="swiggy" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-zomato.png" alt="zomato" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-nykaa.png" alt="nykaa" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-muthoot-finance.png" alt="muthoot-finance" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-urbancompany.png" alt="urbancompany" loading="lazy"/></div></div>
        </div>
      </div>
    </div>
  
    </div>`,
  },
  incentivesOutcomes,
  {
    id: "inc12",
    theme: "darker",
    title: "HOW WE START",
    html: `
    <div class="incd">
    <div class="glow" style="position:absolute;right:-6%;top:6%;width:54%;height:74%;background:radial-gradient(circle at 60% 40%,rgba(198,161,91,.16),transparent 62%),radial-gradient(circle at 30% 70%,rgba(74,63,158,.3),transparent 60%);filter:blur(30px);pointer-events:none;z-index:0;"></div>
    <div class="slidebody" style="position:relative;z-index:2;">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;font-size:clamp(2rem,4.4vw,3.4rem);">A 90-day pilot on one region — <span style="color:var(--gold)">live before the next festive season.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:80ch;">Prove it where it matters: one brand in one region, running your real schemes on real sales, with associates on the app. Then scale across every brand and the franchise network.</p>
      <div class="ctacards" style="margin-top:22px;">
        <div class="ctac rise" style="animation-delay:.5s"><div class="num">01</div><h4>Set up</h4><p>We load your current schemes, connect one region's sales &amp; attendance, and test against last quarter so the numbers match your books.</p></div>
        <div class="ctac rise" style="animation-delay:.57s"><div class="num">02</div><h4>Go live</h4><p>Associates get the app; managers get the team view; one full month runs end-to-end — calculate, approve, pay — with your team.</p></div>
        <div class="ctac rise" style="animation-delay:.64s"><div class="num">03</div><h4>Scale</h4><p>Roll out across every brand and into the franchise network — each new brand is just a setting, not a new build.</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.72s;color:rgba(255,255,255,.62);margin-top:22px;font-size:1rem;">Let's pick the region — and put real numbers on it together. <b style="color:var(--gold-soft)">goBetter Incentives · by BetterPlace.</b></div>
    </div>
  
    </div>`,
  },
]

import type { SlideDef } from '../lib/types'
import { icons } from './html'
import { svg, makeRail, bar, row, problemSlide, plainSlide, coverRing } from './story-kit'

// ITC HOTELS · goBetter for one property (demo 25 Nov 2026, presented by Hardik).
// Scope: one hotel, the full associate journey (hire → verify → onboard → learn → roster →
// attend → leave → pay → exit) plus the GM/HR dashboard and AI. ITC Hotels is on-roll at its core
// ("over 8,200 direct employees, excluding contractual employees", ITC Hotels Information
// Memorandum, Jan 2025), with service providers in support functions, so agency staff get one
// light slide. Hotel proof is Royal Orchid Hotels: scale and adoption only (our platform data,
// Jun 2026); they have stated no measured outcomes, so we claim none. Hire ATS and BGV are still
// in implementation at Royal Orchid, so they are not cited as Royal Orchid proof.
// Every slide carries a presenter cue in `notes` (press N in the player).
// Mocks use a fictional "Demo Property, Bengaluru"; names and numbers are illustrative and
// agree with the clickable prototype at /studio/itchotels.

const STEPS = ['Hire', 'Verify', 'Onboard', 'Learn', 'Roster', 'Attend', 'Leave', 'Pay', 'Exit']
const rail = makeRail(STEPS, [5, 8, 9])
const Q = 'The problem'
const PROTO = 'https://www.betterplace.co.in/studio/itchotels'

const n = (lines: string[]) => `<ul>${lines.map((l) => `<li>${l}</li>`).join('')}</ul>`

export const ihCss = `<style>
.ih-agenda { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
.ih-agenda .a { background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 18px; display: flex; flex-direction: column; gap: 8px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.ih-agenda .t { font-family: var(--mono); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--navy); }
.ih-agenda h4 { margin: 0; font-family: var(--disp); font-size: 1.1rem; color: var(--ink); }
.ih-agenda p { margin: 0; font-size: .84rem; line-height: 1.48; color: var(--text); flex: 1; }
.ih-agenda .a.live { border: 2px solid var(--yellow); }
.ih-fun { display: flex; flex-direction: column; gap: 6px; margin-bottom: 10px; }
.ih-fun .f { display: grid; grid-template-columns: 120px 1fr 44px; gap: 10px; align-items: center; font-size: 11.5px; color: var(--ink); }
.ih-fun .f .b { height: 14px; border-radius: 6px; background: rgba(33,66,185,.08); overflow: hidden; }
.ih-fun .f .b i { display: block; height: 100%; width: var(--w); background: var(--bc, var(--navy)); transform-origin: left; animation: telgrow .9s var(--ease) both; animation-delay: var(--d, .3s); }
.ih-fun .f .v { font-family: var(--mono); font-size: 11px; font-weight: 700; text-align: right; }
.ih-heat { display: grid; grid-template-columns: 118px repeat(6, 1fr); gap: 4px; align-items: center; }
.ih-heat .hd { font-family: var(--mono); font-size: 10.5px; color: var(--muted); text-align: center; line-height: 1.2; }
.ih-heat .hl { font-size: 11.5px; font-weight: 600; color: var(--ink); }
.ih-heat .c { height: 26px; border-radius: 6px; display: grid; place-items: center; font-family: var(--mono); font-size: 11px; font-weight: 700; animation: telpop .4s var(--ease) both; animation-delay: var(--d, 0s); }
.ih-heat .c.g { background: rgba(61,190,123,.2); color: #1a8f52; } .ih-heat .c.y { background: rgba(255,196,1,.3); color: #7a5f00; } .ih-heat .c.r { background: rgba(208,39,29,.14); color: var(--red); } .ih-heat .c.na { background: repeating-linear-gradient(135deg, var(--surface) 0 5px, #fff 5px 10px); color: var(--muted); font-weight: 500; }
.ih-ros { display: grid; grid-template-columns: 128px repeat(7, 1fr); gap: 4px; align-items: stretch; }
.ih-ros .rh { font-family: var(--mono); font-size: 10.5px; color: var(--muted); text-align: center; padding-bottom: 2px; }
.ih-ros .rh.today { color: var(--navy); font-weight: 700; }
.ih-ros .rh.peak { color: var(--red); font-weight: 700; }
.ih-ros .nm { font-size: 11.5px; font-weight: 600; color: var(--ink); line-height: 1.2; display: flex; flex-direction: column; justify-content: center; }
.ih-ros .nm small { font-family: var(--mono); font-size: 10.5px; font-weight: 500; color: var(--muted); }
.ih-ros .s { min-height: 34px; border-radius: 7px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: var(--mono); font-size: 10.5px; font-weight: 700; animation: telpop .35s var(--ease) both; animation-delay: var(--d, 0s); }
.ih-ros .s small { font-weight: 500; font-size: 10px; opacity: .8; }
.ih-ros .M { background: rgba(33,66,185,.12); color: var(--navy); } .ih-ros .E { background: rgba(124,58,237,.12); color: #6d28d9; } .ih-ros .N { background: #1f2937; color: #e5e7eb; } .ih-ros .G { background: rgba(13,125,133,.14); color: #0d6b72; }
.ih-ros .BR { background: linear-gradient(180deg, rgba(255,149,24,.25) 0 45%, #fff 45% 55%, rgba(255,149,24,.25) 55%); color: #9a4d00; }
.ih-ros .OFF { background: repeating-linear-gradient(135deg, var(--surface) 0 5px, #fff 5px 10px); color: var(--muted); font-weight: 500; }
.ih-ros .LV { background: rgba(208,39,29,.1); color: var(--red); }
.ih-ros .dem { font-family: var(--mono); font-size: 10.5px; text-align: center; padding: 4px 0; border-radius: 6px; background: var(--surface); color: var(--ink); }
.ih-ros .dem.gap { background: rgba(208,39,29,.1); color: var(--red); font-weight: 700; }
.ih-ros .lab { font-family: var(--mono); font-size: 10.5px; color: var(--muted); display: flex; align-items: center; }
.ih-leg { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; font-family: var(--mono); font-size: 10.5px; color: var(--muted); }
.ih-leg i { display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-right: 4px; vertical-align: -1px; }
.ih-dash { display: grid; grid-template-columns: 1.1fr .9fr; gap: 14px; }
.ih-dash .kp { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 12px; }
.ih-dash .kp > div { background: var(--surface); border-radius: 10px; padding: 9px 10px; }
.ih-dash .kp .n { font-family: var(--disp); font-weight: 800; font-size: 20px; color: var(--navy); line-height: 1; }
.ih-dash .kp .n.hot { color: var(--red); }
.ih-dash .kp .l { font-family: var(--mono); font-size: 10.5px; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); margin-top: 4px; }
.ih-dash h6 { margin: 0 0 6px; font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); font-weight: 600; }
.ih-roc { display: grid; grid-template-columns: 1.25fr .75fr; gap: 16px; }
.ih-roc .facts { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.ih-roc .fx { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 14px 16px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.ih-roc .fx .n { font-family: var(--disp); font-weight: 800; font-size: 2rem; color: var(--navy); line-height: 1; letter-spacing: -.02em; }
.ih-roc .fx .l { font-size: .84rem; color: var(--text); margin-top: 6px; line-height: 1.4; }
.ih-roc .side { background: #f7f8fb; border: 1px solid var(--border); border-radius: 14px; padding: 16px 18px; }
.ih-roc .side .lbl { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--navy); margin-bottom: 8px; }
.ih-roc .side .it { padding: 8px 0; border-top: 1px solid var(--border); font-size: .84rem; line-height: 1.45; color: var(--text); }
.ih-roc .side .it b { color: var(--ink); display: block; }
.ih-demo { display: grid; grid-template-columns: .9fr 1.1fr; gap: 22px; align-items: start; }
.ih-demo .go { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.14); border-radius: 18px; padding: 22px 24px; }
.ih-demo .go .u { font-family: var(--mono); font-size: 13px; color: var(--yellow); word-break: break-all; margin: 8px 0 14px; }
.ih-demo .go p { margin: 0; font-size: .86rem; line-height: 1.5; color: rgba(255,255,255,.8); }
.ih-demo .go a { display: inline-block; margin-top: 14px; font-family: var(--disp); font-weight: 700; font-size: .9rem; color: var(--ink); background: var(--yellow); border-radius: 10px; padding: 10px 16px; text-decoration: none; }
.ih-demo ol { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; counter-reset: s; }
.ih-demo li { counter-increment: s; display: grid; grid-template-columns: 30px 1fr; gap: 10px; align-items: start; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); border-radius: 12px; padding: 10px 14px; font-size: .86rem; line-height: 1.45; color: rgba(255,255,255,.85); animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.ih-demo li::before { content: counter(s); font-family: var(--disp); font-weight: 800; color: var(--yellow); font-size: 1.15rem; }
.ih-demo li b { color: #fff; }
.ih-ag { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
.ih-ag .x { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 14px 16px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.ih-ag .x h4 { margin: 0 0 6px; font-family: var(--disp); font-size: .98rem; color: var(--ink); display: flex; justify-content: space-between; gap: 8px; align-items: center; }
.ih-ag .x p { margin: 0; font-size: .82rem; line-height: 1.45; color: var(--text); }
.ih-ag .x .q { margin-top: 8px; font-family: var(--mono); font-size: 10.5px; color: var(--navy); background: var(--surface); border-radius: 8px; padding: 6px 8px; }
.ih-ag .st { font-family: var(--mono); font-size: 10px; letter-spacing: .06em; text-transform: uppercase; padding: 3px 7px; border-radius: 999px; white-space: nowrap; }
.ih-ag .st.live { background: rgba(61,190,123,.18); color: #1a8f52; } .ih-ag .st.pilot { background: rgba(255,196,1,.3); color: #7a5f00; }
.tm-util.wd .u { grid-template-columns: 100px 1fr auto; }
.ih-wf { display: grid; grid-template-columns: 1.05fr .95fr; gap: 16px; }
.ih-wf .col { background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 16px 18px; }
.ih-wf .col.on { border: 2px solid var(--yellow); }
.ih-wf .lbl { font-family: var(--mono); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--navy); margin-bottom: 8px; }
.ih-wf .it { padding: 8px 0; border-top: 1px solid var(--border); font-size: .84rem; line-height: 1.45; color: var(--text); }
.ih-wf .it b { color: var(--ink); }
</style>`

/* ---------------- mocks (Demo Property, Bengaluru · illustrative) ---------------- */

const hireMock = `
<div class="tm">
  ${bar('goBetter Hire · Demo Property, Bengaluru · open requisitions', 'Live')}
  <div class="tm-body">
    <div class="ih-fun">
      <div class="f"><span>Applied</span><span class="b"><i style="--w:100%"></i></span><span class="v">186</span></div>
      <div class="f"><span>Screened</span><span class="b"><i style="--w:58%;--d:.4s"></i></span><span class="v">108</span></div>
      <div class="f"><span>Trade test</span><span class="b"><i style="--w:31%;--d:.5s"></i></span><span class="v">57</span></div>
      <div class="f"><span>Offer</span><span class="b"><i style="--w:15%;--d:.6s;--bc:#FF9518"></i></span><span class="v">28</span></div>
      <div class="f"><span>Joined</span><span class="b"><i style="--w:10%;--d:.7s;--bc:#3dbe7b"></i></span><span class="v">19</span></div>
    </div>
    <div class="tm-rows">
      ${row('Commis II · Culinary · 3 positions', 'Raised by the Executive Chef · approved by HR and GM · trade test on Thursday', '11 in test', 'b')}
      ${row('Room Attendant · Housekeeping · 4 positions', 'Referral and QR poster at the staff entrance · 2 offers out', 'Offer', 'y')}
      ${row('Wedding-season banquet casuals · 40 needed by 5 Dec', 'WhatsApp link shared with hotel-school alumni and past casuals · 23 returning faces', '31 of 40', 'g')}
      ${row('Guest Service Associate · Front Office', 'Interview with the Front Office Manager booked from the app · candidate confirmed', 'Today 15:00', 'b')}
    </div>
  </div>
</div>`

const bgvMock = `
<div class="tm">
  ${bar('goBetter Verify · checks by role · Demo Property', 'Live')}
  <div class="tm-body">
    <div class="tm-rows">
      ${row('Priya N. · Butler · guest-facing, room access', 'Identity ✓ · address ✓ · court records ✓ · previous employer: reply pending from a Goa resort', 'Day 4', 'y')}
      ${row('Arjun S. · Cashier · In-room dining', 'Identity ✓ · address ✓ · court records ✓ · previous employment ✓ · credit check per role pack', 'Clear', 'g')}
      ${row('Mahesh K. · Steward · returning casual', 'Verified last season · only expired items asked again · cleared in minutes', 'Reused', 'b')}
      ${row('Ravi T. · Banquet casual · 3-day contract', 'Identity and court records only, as the casual pack says · access card limited to banquet floors', 'Clear', 'g')}
      ${row('Discrepancy · address mismatch', 'Raised to HR with evidence · you decide; the check never decides for you', 'Review', 'r', 'hot')}
    </div>
    <div class="note"><b>Role packs</b> Guest-facing and room-access roles get the full pack. Casuals get the short pack. You set both.</div>
  </div>
</div>`

const waPhonesHotel = `
<div class="wa-row">
  <div class="wa" style="--d:.1s" data-cycle="4200">
    <div class="scr">
      <div class="top"><i>M</i><div>Mia<small>Demo Property joining · verified</small></div></div>
      <div class="langbar"><div class="lang"><span class="cyc">English</span><span class="cyc">हिन्दी</span></div></div>
      <div class="chat">
        <div class="cycpane">
          <div class="m">Hi Kavya, I’m Mia. I’ll handle your joining at the Demo Property, Bengaluru. You’ve been offered <b>Guest Service Associate.</b><div class="doc">Offer_Letter_Kavya.pdf</div><div class="btns"><span>Accept offer</span></div></div>
          <div class="m me">Accept offer</div>
          <div class="m">I’ll collect a few details to finish your joining. Do you consent?<div class="btns"><span>Yes, I consent</span></div></div>
        </div>
        <div class="cycpane">
          <div class="m">नमस्ते कव्या, मैं मिया हूँ। आपको <b>गेस्ट सर्विस एसोसिएट</b> का ऑफ़र मिला है।<div class="doc">Offer_Letter_Kavya.pdf</div><div class="btns"><span>ऑफ़र स्वीकार करें</span></div></div>
          <div class="m me">ऑफ़र स्वीकार करें</div>
          <div class="m">क्या आप अपनी जानकारी साझा करने की सहमति देती हैं?<div class="btns"><span>हाँ, मैं सहमत हूँ</span></div></div>
        </div>
      </div>
    </div>
    <div class="wa-cap">1 · Offer, consent, details</div>
  </div>
  <div class="wa" style="--d:.3s">
    <div class="scr">
      <div class="top"><i>M</i><div>Mia<small>Demo Property joining · verified</small></div></div>
      <div class="chat">
        <div class="m" style="--d:.5s">Please upload your Aadhaar and a cancelled cheque.</div>
        <div class="m me" style="--d:.8s"><div class="img">Aadhaar · XXXX XXXX 2291</div></div>
        <div class="m sys" style="--d:1.1s">Aadhaar verified · name matches · bank account verified</div>
        <div class="m" style="--d:1.4s">Your uniform size? Shirt and trouser.<div class="btns"><span>M · 30</span></div></div>
        <div class="m sys" style="--d:1.8s">Uniform and locker requested from Housekeeping · ID card photo taken</div>
      </div>
    </div>
    <div class="wa-cap">2 · Documents, bank, uniform, locker</div>
  </div>
  <div class="wa" style="--d:.5s">
    <div class="scr">
      <div class="top"><i>M</i><div>Mia<small>Demo Property joining · verified</small></div></div>
      <div class="chat">
        <div class="m" style="--d:.7s">Three short videos before day 1:<div class="reels"><span style="--rc1:#262524;--rc2:#5c5e60">Welcome to the property<small>2 min</small></span><span style="--rc1:#7a5a1e;--rc2:#D2AC67">Grooming standards<small>4 min</small></span><span style="--rc1:#7a1f1f;--rc2:#c2392b">Fire exits and assembly<small>3 min</small></span></div></div>
        <div class="m" style="--d:1.1s">Where is your floor’s assembly point?<div class="btns"><span>✓ Staff car park, gate 2</span></div></div>
        <div class="m" style="--d:1.5s">See you Monday, 9:00 at the time office. Your shift: Front Office, morning.<div class="btns"><span>I’ll be there</span></div></div>
      </div>
    </div>
    <div class="wa-cap">3 · Induction videos, quiz, day-1 slot</div>
  </div>
</div>`

const C = (v: string, d = 0) => {
  if (v === '–') return `<div class="c na" style="--d:${d}s">n/a</div>`
  const x = parseInt(v, 10)
  return `<div class="c ${x >= 90 ? 'g' : x >= 75 ? 'y' : 'r'}" style="--d:${d}s">${v}%</div>`
}
const heatRow = (dept: string, vals: string[], i: number) =>
  `<div class="hl">${dept}</div>${vals.map((v, k) => C(v, .15 + i * .05 + k * .02)).join('')}`

const learnMock = `
<div class="tm">
  ${bar('skillBetter · course completion by department · Demo Property · November', 'Live')}
  <div class="tm-body">
    <div class="ih-heat">
      <div></div><div class="hd">Grooming</div><div class="hd">Service standards</div><div class="hd">Food safety</div><div class="hd">Allergens</div><div class="hd">Fire safety</div><div class="hd">POSH</div>
      ${heatRow('F&B Service', ['96', '91', '88', '84', '93', '97'], 0)}
      ${heatRow('Culinary', ['94', '–', '72', '86', '90', '95'], 1)}
      ${heatRow('Stewarding', ['92', '–', '84', '–', '88', '94'], 2)}
      ${heatRow('Housekeeping', ['97', '93', '–', '–', '95', '98'], 3)}
      ${heatRow('Front Office', ['98', '95', '–', '–', '96', '99'], 4)}
      ${heatRow('Banquet casuals', ['82', '76', '64', '70', '74', '–'], 5)}
    </div>
    <div class="tm-rows" style="margin-top:12px">
      ${row('Food safety · 17 overdue, 11 in Culinary', 'Mandatory for food handlers · reminder sent on WhatsApp in Hindi and Kannada · Executive Chef copied', 'Overdue', 'r', 'hot')}
      ${row('Fire drill · Banquets level 2', 'Practical sign-off recorded by the Security Manager with photos · 41 of 44 present', 'Done', 'g')}
    </div>
  </div>
</div>`

const S = (c: string, t: string, s = '', d = 0) => `<div class="s ${c}" style="--d:${d}s">${t}${s ? `<small>${s}</small>` : ''}</div>`
const rosterMock = `
<div class="tm">
  ${bar('goBetter Roster · F&B Service · All-day dining · week of 23 Nov', 'Live')}
  <div class="tm-body">
    <div class="ih-ros">
      <div class="lab">Covers forecast</div><div class="dem">310</div><div class="dem">340</div><div class="dem">380</div><div class="dem">360</div><div class="dem">420</div><div class="dem">560</div><div class="dem">520</div>
      <div class="lab">Staff needed / rostered</div><div class="dem">14/14</div><div class="dem">15/15</div><div class="dem">16/16</div><div class="dem">16/16</div><div class="dem">18/18</div><div class="dem gap">23/21</div><div class="dem">22/22</div>
      <div></div><div class="rh">Mon 23</div><div class="rh">Tue 24</div><div class="rh today">Wed 25</div><div class="rh">Thu 26</div><div class="rh">Fri 27</div><div class="rh peak">Sat 28</div><div class="rh">Sun 29</div>
      <div class="nm">Anil R.<small>Captain</small></div>${S('M', 'M', '07–16', .1)}${S('M', 'M', '07–16', .12)}${S('OFF', 'Off', '', .14)}${S('E', 'E', '15–24', .16)}${S('E', 'E', '15–24', .18)}${S('E', 'E', '15–24', .2)}${S('M', 'M', '07–16', .22)}
      <div class="nm">Sneha D.<small>Associate</small></div>${S('BR', 'BR', '7–11 · 18–22', .12)}${S('BR', 'BR', '7–11 · 18–22', .14)}${S('BR', 'BR', '7–11 · 18–22', .16)}${S('OFF', 'Off', '', .18)}${S('BR', 'BR', '7–11 · 18–22', .2)}${S('E', 'E', '15–24', .22)}${S('E', 'E', '15–24', .24)}
      <div class="nm">Imran K.<small>Associate</small></div>${S('E', 'E', '15–24', .14)}${S('E', 'E', '15–24', .16)}${S('M', 'M', '07–16', .18)}${S('M', 'M', '07–16', .2)}${S('OFF', 'Off', '', .22)}${S('LV', 'Leave', 'approved', .24)}${S('M', 'M', '07–16', .26)}
      <div class="nm">Deepa J.<small>Hostess</small></div>${S('G', 'G', '10–19', .16)}${S('G', 'G', '10–19', .18)}${S('G', 'G', '10–19', .2)}${S('G', 'G', '10–19', .22)}${S('G', 'G', '10–19', .24)}${S('BR', 'BR', '7–11 · 18–22', .26)}${S('OFF', 'Off', '', .28)}
    </div>
    <div class="ih-leg"><span><i style="background:rgba(33,66,185,.25)"></i>Morning</span><span><i style="background:rgba(124,58,237,.25)"></i>Evening</span><span><i style="background:rgba(255,149,24,.45)"></i>Break shift · two windows a day</span><span><i style="background:rgba(13,125,133,.3)"></i>General</span><span><i style="background:rgba(208,39,29,.25)"></i>Leave</span></div>
    <div class="note"><b>Sat 28 · short by 2</b> Wedding brunch pushes covers to 560. Two banquet casuals cross-trained for the restaurant are offered the shift on WhatsApp.</div>
  </div>
</div>`

const attendMock = `
<div class="tm">
  ${bar('goBetter Attend · present now · Demo Property · Wed 25 Nov, 10:30', 'Live')}
  <div class="tm-body">
    <div class="tm-kpis" style="margin-top:0;grid-template-columns:repeat(4,1fr)">
      <div><div class="n">272</div><div class="l">On duty now</div></div>
      <div><div class="n">8</div><div class="l">On leave</div></div>
      <div><div class="n hot">16</div><div class="l">Absent, no leave</div></div>
      <div><div class="n">14</div><div class="l">Missed punches</div></div>
    </div>
    <div class="tm-util wd">
      <div class="u"><span>Housekeeping</span><span class="b"><i style="--w:93%"></i></span><span class="v">26 / 28 RA</span></div>
      <div class="u"><span>F&amp;B Service</span><span class="b"><i style="--w:89%;--d:.5s"></i></span><span class="v">49 / 55</span></div>
      <div class="u"><span>Culinary</span><span class="b"><i style="--w:93%;--d:.6s"></i></span><span class="v">41 / 44</span></div>
      <div class="u"><span>Stewarding</span><span class="b"><i style="--w:82%;--d:.7s;--bc:#FF9518"></i></span><span class="v">18 / 22</span></div>
      <div class="u"><span>Front Office</span><span class="b"><i style="--w:100%;--d:.8s"></i></span><span class="v">21 / 21</span></div>
      <div class="u"><span>Engineering</span><span class="b"><i style="--w:94%;--d:.9s"></i></span><span class="v">19 / 20</span></div>
    </div>
    <div class="tm-rows" style="margin-top:10px">
      ${row('Sneha D. · break shift · 2nd window', 'Morning window 07:02–11:04 · evening window opens 18:00 · counted as one day, two punches each', 'On track', 'g')}
      ${row('Banquets · 6 servers short for today', 'Corporate lunch 190 covers short 2 · wedding sangeet 450 covers short 4 · casuals offered the shift', 'Short', 'r', 'hot')}
    </div>
  </div>
</div>`

const leaveMock = `
<div class="tm">
  ${bar('goBetter Leave · approvals · F&B and Banquets · December', 'Live')}
  <div class="tm-body">
    <div class="tm-rows">
      ${row('Rahul M. · Banquet Captain · 30–31 Dec · earned leave', 'Banquets already has 7 on leave on 31 Dec (12%), above your 10% warning level · New Year gala', 'Peak date', 'r', 'hot')}
      ${row('Fatima S. · Commis III · 8–9 Dec · casual leave', 'Balance 4 days · kitchen roster covered · auto-approved under your rule', 'Approved', 'g')}
      ${row('Vikram P. · worked on 25 Dec (holiday)', 'Comp-off credited automatically, usable within 60 days, as your policy says', 'Comp-off', 'b')}
      ${row('Ananya R. · Front Office · maternity leave', '26 weeks from 2 Jan · payroll and roster updated · return date on the calendar', 'Approved', 'g')}
    </div>
    <div class="note"><b>Peak-date guard</b> The system warns when a department crosses your leave threshold on a banquet-heavy date. The HOD still decides.</div>
  </div>
</div>`

const payMock = `
<div class="tm">
  ${bar('goBetter Payroll · November · Demo Property · 522 people', 'Live')}
  <div class="tm-body" data-cycle="1500">
    <div class="tm-steps">
      <div class="st cyc"><span class="dot"><span>1</span></span><div><h5>Attendance locked</h5><p>From punches, leave and approved corrections</p></div><span class="tm-t">25 Nov</span></div>
      <div class="st cyc"><span class="dot"><span>2</span></span><div><h5>Inputs</h5><p>Overtime, night allowance, arrears, incentives</p></div><span class="tm-t">26 Nov</span></div>
      <div class="st cyc"><span class="dot"><span>3</span></span><div><h5>Computed and checked</h5><p>Minimum wage, PF, ESI, PT, LWF, overtime at 2×</p></div><span class="tm-t">27 Nov</span></div>
      <div class="st cyc"><span class="dot"><span>4</span></span><div><h5>Approved, payslips, bank file</h5><p>Payslip on the associate’s phone</p></div><span class="tm-t">30 Nov</span></div>
    </div>
    <div class="tm-rows" style="margin-top:10px">
      ${row('Overtime · 38 associates · 212 hours', 'Paid at twice the ordinary rate, from punches, with consent recorded', 'Checked', 'g')}
      ${row('3 associates · bank account not verified', 'Held from the bank file until HR verifies · listed for the time office', 'Hold', 'y', 'warn')}
      ${row('Registers · muster roll, wages, overtime', 'Generated from the same record · ready for the labour inspector', 'Ready', 'g')}
    </div>
  </div>
</div>`

const exitMock = `
<div class="tm">
  ${bar('goBetter Exit · clearance · Demo Property · November', 'Configured')}
  <div class="tm-body">
    <div class="tm-rows">
      ${row('Karthik V. · CDP, Pan-Asian · last day 30 Nov', 'Uniform and linen ✓ · locker ✓ · kitchen tools ✓ · IT access removed on the last day · F&amp;F in December payroll', '4 of 5', 'y')}
      ${row('Meera L. · GSA · resigned · notice 30 days', 'Handover list from the Front Office Manager · exit survey on her phone', 'In notice', 'b')}
      ${row('Exit reasons · F&amp;B · last 90 days', 'Better pay elsewhere 9 · higher studies 4 · relocation 3 · shift timings 3', '19 exits', 'b')}
      ${row('Rehire eligible · banquet casuals', '23 of last season’s casuals are rehire-eligible with profiles and training intact', 'Pool', 'g')}
    </div>
  </div>
</div>`

const dashMock = `
<div class="tm">
  ${bar('goBetter · GM and HR view · Demo Property, Bengaluru · Wed 25 Nov', 'Live')}
  <div class="tm-body">
    <div class="ih-dash">
      <div>
        <div class="kp">
          <div><div class="n">522</div><div class="l">People</div></div>
          <div><div class="n">84%</div><div class="l">Occupancy tonight</div></div>
          <div><div class="n">640</div><div class="l">Banquet covers today</div></div>
          <div><div class="n hot">6</div><div class="l">Banquet servers short</div></div>
        </div>
        <h6>Present now by department</h6>
        <div class="tm-util wd" style="margin-top:0">
          <div class="u"><span>Housekeeping</span><span class="b"><i style="--w:93%"></i></span><span class="v">26 / 28 RA</span></div>
          <div class="u"><span>F&amp;B Service</span><span class="b"><i style="--w:89%;--d:.5s"></i></span><span class="v">49 / 55</span></div>
          <div class="u"><span>Culinary</span><span class="b"><i style="--w:93%;--d:.6s"></i></span><span class="v">41 / 44</span></div>
          <div class="u"><span>Stewarding</span><span class="b"><i style="--w:82%;--d:.7s;--bc:#FF9518"></i></span><span class="v">18 / 22</span></div>
          <div class="u"><span>Front Office</span><span class="b"><i style="--w:100%;--d:.8s"></i></span><span class="v">21 / 21</span></div>
        </div>
      </div>
      <div>
        <h6>Needs attention today</h6>
        <div class="tm-rows">
          ${row('Housekeeping · 336 rooms tonight', '28 room attendants needed at 12 rooms each · 26 on the floor', 'Short 2', 'r', 'hot')}
          ${row('Food safety · 17 overdue', '11 of them in Culinary · 18 medical certificates expire in 30 days', 'Overdue', 'y', 'warn')}
          ${row('Background checks · 17 pending', '16 open positions · new joiners start after clearance', 'Pending', 'b')}
          ${row('November payroll', '14 missed punches to clear before attendance locks at 18:00', 'On track', 'g')}
          ${row('Attrition · Stewarding · 90 days', '15.4%, the highest of any department', 'Watch', 'y', 'warn')}
        </div>
      </div>
    </div>
  </div>
</div>`

/* ---------------- slides ---------------- */

export const itcHotelsSlides: SlideDef[] = [
  {
    id: 'ih1', theme: 'darker', title: 'Cover',
    notes: n([
      '<b>Open (30 s):</b> “Thank you for the time. In the next 30 minutes we’ll show you how one hotel can run its people operations on one record, from the offer letter to the full and final.”',
      'Point at the ring: these are the nine moments in an associate’s life at a hotel. We’ll walk them in this order, then show it live.',
      'Say the scope plainly: one property today, small and practical.',
    ]),
    html: `${ihCss}
    <div class="glow"></div>
    <div class="tel center" style="padding-top:0">
      <div class="tel-coverwrap">
        <div class="tel-covertext">
          <span class="kick">goBetter · for ITC Hotels · one property</span>
          <h1>Every associate in the hotel, <em>from offer letter to full and final,</em> on one record.</h1>
          <p>Hiring, checks, joining, grooming and food-safety training, rosters with break shifts, attendance, leave, payroll and exit. One system for HR, the HODs and the GM, and one app for the associate.</p>
          <div class="tel-nums" style="margin-top:24px">
            <div><div class="n">36</div><div class="l">Royal Orchid hotels on goBetter today</div></div>
            <div><div class="n">2,900</div><div class="l">Hotel associates on the same record</div></div>
            <div><div class="n">500K</div><div class="l">Workers a month at Reliance</div></div>
          </div>
        </div>
        ${coverRing(['Hire', 'Verify', 'Onboard', 'Learn', 'Roster', 'Attend', 'Leave', 'Pay', 'Exit'], ['one', 'associate record'], false)}
      </div>
    </div>`,
  },

  {
    ...plainSlide('ih2', 'light', 'Today',
      'Today · 30 minutes, five parts',
      'A short story, the associate’s journey step by step, <em>then the property live on screen.</em>',
      `<div>
        <div class="ih-agenda">
          <div class="a" style="--d:.1s"><div class="t">2 min</div><h4>Who we are</h4><p>BetterPlace and the hotels and enterprises that run on goBetter today.</p></div>
          <div class="a" style="--d:.2s"><div class="t">3 min</div><h4>What a hotel has to get right</h4><p>Peaks, break shifts, food safety, grooming, payroll, all for people the guest meets.</p></div>
          <div class="a" style="--d:.3s"><div class="t">12 min</div><h4>The journey, step by step</h4><p>Hire, verify, onboard, learn, roster, attend, leave, pay, exit. One slide each.</p></div>
          <div class="a live" style="--d:.4s"><div class="t">8 min · live</div><h4>The demo property</h4><p>The GM’s dashboard, then click through one associate’s journey.</p></div>
          <div class="a" style="--d:.5s"><div class="t">5 min</div><h4>How one property starts</h4><p>A pilot plan, what we need from you, and questions.</p></div>
        </div>
        <div class="tel-band light"><span class="bl">How to read the slides</span><p>Each step shows <b>the problem</b> hotels tell us about, <b>what changes</b>, one <b>proof</b> point, and the <b>product</b> on the right. Product views use a fictional “Demo Property, Bengaluru”: <b>demo data, not ITC figures.</b> The footer on each slide says what is live and what we configure for you.</p></div>
      </div>`),
    notes: n([
      'Set expectations: 30 minutes, demo in the middle-to-end.',
      'Say once: “All the screens use a demo property with made-up numbers. None of this is ITC data.”',
      'Invite interruptions: “Stop me at any step that matters more to you.”',
    ]),
  },

  {
    id: 'ih3', theme: 'dark', title: 'Who we are',
    notes: n([
      '<b>Keep to 2 minutes.</b> BetterPlace has worked with frontline workforces since 2015: verification first, then onboarding, attendance, payroll and learning.',
      'Name the hotel proof now: Royal Orchid Hotels run onboarding, attendance, payroll, performance and learning on goBetter, about 2,900 associates across 36 hotels.',
      'If asked “any five-star chain?”: be straight. Royal Orchid is our hotel reference today; ITC would be our first luxury chain at this scale.',
    ]),
    html: `
    <div class="tel norail">
      <div class="tel-head"><div><span class="kick">Who we are</span><h2>Ten years with frontline teams, and hotels already on the platform, <em>so a property is not our first.</em></h2></div></div>
      <div class="tel-cred">
        <div>
          <div class="tel-nums">
            <div><div class="n">15M<em>+</em></div><div class="l">Worker profiles on the platform</div></div>
            <div><div class="n">4</div><div class="l">Markets · India, Malaysia, Singapore, Indonesia</div></div>
            <div><div class="n">36</div><div class="l">Royal Orchid hotels live on goBetter</div></div>
            <div><div class="n">500K</div><div class="l">Workers a month at Reliance on one record</div></div>
          </div>
          <div class="tel-badges"><img src="assets/compliance/iso-27001.svg" alt="ISO 27001"/><img src="assets/compliance/soc-2.svg" alt="SOC 2"/><span>ISO 27001 · SOC 2 · data hosted in India · consent in the associate’s language</span></div>
        </div>
        <div class="tel-time">
          <div class="ev" style="--d:.2s"><b>2015</b><span>Founded. Background verification for frontline hiring.</span></div>
          <div class="ev" style="--d:.3s"><b>2018</b><span>Onboarding and attendance. Face and geo punches at scale.</span></div>
          <div class="ev" style="--d:.4s"><b>2019–20</b><span>skillBetter, the learning platform, in the associate’s language.</span></div>
          <div class="ev" style="--d:.5s"><b>2023–24</b><span>goBetter platform. Reliance live with 500K workers a month. Royal Orchid Hotels signs; live from July 2024.</span></div>
          <div class="ev" style="--d:.6s"><b>2026</b><span>AI agents for rostering, joining and associate questions, inside the same record.</span></div>
        </div>
      </div>
    </div>`,
  },

  {
    ...plainSlide('ih4', 'darker', 'What a hotel must get right',
      'What a hotel has to get right · every day, for people the guest meets',
      'In a hotel, the people are the product. <em>Every gap in HR shows up in front of a guest.</em>',
      `<div class="tel-stakes">
        <div class="st" style="--d:.15s"><div class="n">Peaks</div><div class="l">wedding season, New Year, conferences</div><p>Occupancy and banquet covers swing week to week. Rosters, casual hiring and leave have to follow the forecast, not last month’s plan.</p><div class="src">Nov to Feb is the wedding season</div></div>
        <div class="st" style="--d:.3s"><div class="n">Break shifts</div><div class="l">outlets open for breakfast and dinner</div><p>Restaurant teams work two windows a day; banquets, night audit and in-room dining run around the clock. Attendance and pay must read them right.</p><div class="src">Every F&amp;B outlet</div></div>
        <div class="st" style="--d:.45s"><div class="n">Proof</div><div class="l">food safety, fire safety, grooming</div><p>Food handlers trained and medically fit, fire drills done, grooming and service standards taught. Audits and licence inspections ask for the record, by name.</p><div class="src">FSSAI licence conditions · fire safety · brand audits</div></div>
        <div class="st" style="--d:.6s"><div class="n">One view</div><div class="l">for the GM and HR, by department</div><p>Who is on duty now, who is short tonight, who is overdue on training, whether payroll will close on time, without asking six HODs.</p><div class="src">What the GM sees in the demo</div></div>
      </div>`, { glow: true }),
    notes: n([
      'This is the “why it matters” slide. Pause on each card for 20 seconds.',
      'Peaks: ask them “How far ahead do you plan staffing for a big wedding weekend?” Let them answer; it gives you the hook for the roster slide.',
      'Do not quote numbers about ITC here. Use their words if they offer any.',
    ]),
  },

  {
    ...plainSlide('ih5', 'light', 'The journey',
      'The associate’s journey · one record, in the order things happen',
      'Nine moments in an associate’s life at the hotel. <em>Each step reads from the one before it.</em>',
      `<div>
        <div class="tel-map" style="--cols:9">
          <div class="mp" data-n="1" style="--d:.1s"><div class="ph">Before day 1</div><h4>Hire</h4><p>Requisitions from HODs, pipelines, casuals for peaks.</p><span class="ic">${svg(icons.search)}</span></div>
          <div class="mp" data-n="2" style="--d:.15s"><div class="ph">Before day 1</div><h4>Verify</h4><p>Checks by role: room access, cash, kitchen.</p><span class="ic">${svg(icons.shield)}</span></div>
          <div class="mp" data-n="3" style="--d:.2s"><div class="ph">Day 1</div><h4>Onboard</h4><p>Offer, documents, bank, uniform, locker on WhatsApp.</p><span class="ic">${svg(icons.user)}</span></div>
          <div class="mp" data-n="4" style="--d:.25s"><div class="ph">Day 1 onward</div><h4>Learn</h4><p>Grooming, service, food safety, fire safety.</p><span class="ic">${svg(icons.book)}</span></div>
          <div class="mp" data-n="5" style="--d:.3s"><div class="ph">Every week</div><h4>Roster</h4><p>By outlet and department, from the forecast.</p><span class="ic">${svg(icons.layers)}</span></div>
          <div class="mp" data-n="6" style="--d:.35s"><div class="ph">Every shift</div><h4>Attend</h4><p>Face punches, break shifts, live headcount.</p><span class="ic">${svg(icons.clock)}</span></div>
          <div class="mp" data-n="7" style="--d:.4s"><div class="ph">Every week</div><h4>Leave</h4><p>Balances, holidays, comp-off, peak dates.</p><span class="ic">${svg(icons.map)}</span></div>
          <div class="mp" data-n="8" style="--d:.45s"><div class="ph">Every month</div><h4>Pay</h4><p>Payroll from attendance, statutory checks.</p><span class="ic">${svg(icons.card)}</span></div>
          <div class="mp" data-n="9" style="--d:.5s"><div class="ph">The last day</div><h4>Exit</h4><p>Clearance, full and final, rehire pool.</p><span class="ic">${svg(icons.repeat)}</span></div>
        </div>
        <div class="tel-phases" style="grid-template-columns:4fr 3fr 1fr 1fr"><span>Before and on day 1</span><span>Every shift and week</span><span>Every month</span><span>Exit</span></div>
        <div class="tel-band light"><span class="bl">The point</span><p>Today these steps usually live in different places: a hiring sheet, a verification vendor, paper joining forms, a training register, a roster in Excel, a punch machine, leave by email and a payroll file. <b>goBetter keeps them on one associate record</b>, so payroll reads the roster and the roster knows who is trained.</p></div>
      </div>`),
    notes: n([
      'The map for the rest of the deck. The rail at the top of each next slide shows where we are.',
      'Line to use: “Each step feeds the next. Payroll reads the punches, the roster knows who is trained, exit hands the associate back to the rehire pool.”',
    ]),
  },

  {
    ...problemSlide({
      id: 'ih6', theme: 'light', title: 'Hire', rail, step: 1, demo: 'Live · requisitions and pipeline',
      kick: 'step 1 · hire',
      h2: 'A wedding weekend needs forty extra hands by Friday. <em>Hiring runs from the HOD’s request, not a spreadsheet.</em>',
      qLabel: Q, quote: 'HODs ask HR on email or WhatsApp. Candidates sit in personal phones and sheets, and banquet casuals are called one by one every season.',
      changes: [
        { ic: icons.doc, b: 'Requisition from the HOD.', t: 'The Executive Chef raises three Commis II; HR and the GM approve in the app; the opening goes out with the property and outlet on it.' },
        { ic: icons.search, b: 'Candidates from every channel.', t: 'Referral, hotel-school links, job boards and a QR poster at the staff entrance. Candidates apply on WhatsApp without installing an app.' },
        { ic: icons.repeat, b: 'Casuals who come back.', t: 'Last season’s banquet casuals keep their profile and checks, so a returning steward is ready in minutes.' },
      ],
      proof: { n: '−60%', p: 'hiring lead time reported by clients on goBetter Hire, against their own prior year.' },
      vis: hireMock,
      foot: 'Requisitions, pipelines, WhatsApp apply and QR drives are live. Trade-test scheduling is configured per role. Demo data, not ITC figures.',
    }),
    notes: n([
      'Start with the problem block: read it in your own words.',
      'Then the mock: point at the banquet-casuals row: “31 of 40 already, 23 of them came back from last season.”',
      'If asked about Royal Orchid: hiring is being rolled out there now; do not cite it as live proof.',
    ]),
  },

  {
    ...problemSlide({
      id: 'ih7', theme: 'light', title: 'Verify', rail, step: 2, demo: 'Live · checks by role',
      kick: 'step 2 · verify',
      h2: 'Anyone with a room key or a cash drawer is checked <em>before the first shift, at the depth the role needs.</em>',
      qLabel: Q, quote: 'Checks go to an outside vendor by email. Results come back weeks later, and nobody tracks who started work before they cleared.',
      changes: [
        { ic: icons.shield, b: 'Role packs.', t: 'Butlers, room attendants and cashiers get identity, address, court records and previous employment. A three-day banquet casual gets the short pack.' },
        { ic: icons.eye, b: 'Status on the record.', t: 'HR sees every check per associate. Room-access and cash roles can wait on clearance if your policy says so.' },
        { ic: icons.repeat, b: 'Reused on rehire.', t: 'A returning associate keeps verified items. Only what has expired is checked again.' },
      ],
      proof: { n: '2015', p: 'is when BetterPlace began as a verification business. Checks run through our own verification arm, inside the same record.' },
      vis: bgvMock, flip: true,
      foot: 'Background verification and role packs are live. Turnaround depends on the check and the source; we share expected times per check in the pilot. Names illustrative.',
    }),
    notes: n([
      'Key line: “Checks are set by role. A butler and a three-day casual don’t need the same pack.”',
      'Be honest if asked about turnaround: court and previous-employer checks depend on outside sources; we track and chase them, we don’t control them.',
      'Point at the red row: the system flags; HR decides.',
    ]),
  },

  {
    id: 'ih8', theme: 'dark', title: 'Onboard',
    notes: n([
      'Let the phones animate for a few seconds before talking.',
      '“Kavya accepts the offer, consents, uploads Aadhaar and bank details, picks her uniform size and watches three short videos, all on WhatsApp, before she reaches the hotel.”',
      'Language: show the Hindi switch on the first phone. We support many Indian languages.',
      'Royal Orchid onboards associates on goBetter across its hotels today.',
    ]),
    html: `
    <div class="tel">
      ${rail(3, 'Live · WhatsApp joining')}
      <div class="tel-head"><div><span class="kick">step 3 · onboard</span><h2>Joining forms, bank details, uniform and locker, done on her phone <em>before she reaches the time office.</em></h2></div></div>
      <div class="tel-body" style="grid-template-columns:minmax(0,.36fr) minmax(0,.64fr)">
        <div class="tel-say">
          <div class="blk"><div class="lbl">${Q}</div><div class="tq">Day 1 starts with paper forms, photocopies and a queue at HR. Uniform and locker wait until someone remembers.</div></div>
          <div class="blk"><div class="lbl">What changes</div><ul>
            <li><span class="ic">${svg(icons.user)}</span><span><b>Offer to day 1 on WhatsApp.</b> Consent, Aadhaar, bank, emergency contact and uniform size, in her language.</span></li>
            <li><span class="ic">${svg(icons.check)}</span><span><b>Departments get their tasks.</b> Housekeeping gets the uniform and locker request; IT gets the access request.</span></li>
            <li><span class="ic">${svg(icons.play)}</span><span><b>Induction starts early.</b> Welcome, grooming and fire-exit videos with a quick check.</span></li>
          </ul></div>
          <div class="proof"><div class="n">36</div><p>Royal Orchid hotels onboard associates on goBetter today.</p></div>
        </div>
        <div class="tel-vis">${waPhonesHotel}</div>
        <div class="foot">WhatsApp onboarding, document checks and induction videos are live. Uniform and locker tasks are configured per property. Names illustrative.</div>
      </div>
    </div>`,
  },

  {
    ...problemSlide({
      id: 'ih9', theme: 'light', title: 'Learn', rail, step: 4, demo: 'Live · skillBetter',
      kick: 'step 4 · learn',
      h2: 'Grooming, service standards, food safety and fire safety, <em>with proof of who passed, by name.</em>',
      qLabel: Q, quote: 'Training lives in attendance sheets and a register in the training room. Before an audit, someone counts who is due.',
      changes: [
        { ic: icons.play, b: 'Short courses on the phone.', t: 'Four-to-six-minute modules with a quiz, in the associate’s language. Grooming, sequence of service, food safety, allergens, fire safety, POSH.' },
        { ic: icons.layers, b: 'Mandatory by role.', t: 'Food safety for culinary, stewarding and F&B service; fire safety for everyone. Overdue lists go to the HOD.' },
        { ic: icons.check, b: 'Classroom and drills too.', t: 'Trainers mark attendance and practical sign-offs, such as a fire drill, on the same record.' },
      ],
      proof: { n: '88%', p: 'course completion across our clients, against about 25% in the industry.' },
      practice: { who: 'Royal Orchid', t: 'Courses by department (F&B service, housekeeping, front office, food production), then by level, with a mandatory induction course for every joiner.' },
      vis: learnMock,
      foot: 'skillBetter LMS is live. Your own SOP content can be uploaded or built with us. Completion values are demo data, not ITC figures.',
    }),
    notes: n([
      'Point at the heat map: red is overdue, green is done. “Culinary is behind on food safety: 11 of the 17 overdue. The Executive Chef already has the list.”',
      'Royal Orchid runs learning by department and level, with a mandatory induction. Say it as how they run it, not as an outcome.',
      'If asked “can we use our own brand standards?”: yes, their content goes in; we can also help build short videos.',
    ]),
  },

  {
    ...problemSlide({
      id: 'ih10', theme: 'dark', title: 'Roster', rail, step: 5, demo: 'Live · roster by outlet',
      kick: 'step 5 · roster',
      h2: 'Rosters by outlet and department, with break shifts, <em>built against the covers and occupancy forecast.</em>',
      qLabel: Q, quote: 'Each outlet manager keeps a roster in Excel. A big banquet or a festival week means phone calls the night before.',
      changes: [
        { ic: icons.layers, b: 'Every shift pattern a hotel uses.', t: 'Morning, evening, general, night audit, 24-hour roles and break shifts with two windows a day, with weekly offs that rotate.' },
        { ic: icons.chart, b: 'Demand on top of the grid.', t: 'Covers and occupancy forecast for the week sit above the roster, so the gap on a wedding Saturday shows on Monday.' },
        { ic: icons.repeat, b: 'Gaps filled from the right pool.', t: 'Cross-trained associates and returning casuals are offered the shift on WhatsApp. Leave already approved is never rostered over.' },
      ],
      proof: { n: '19', p: 'shift patterns configured across Royal Orchid hotels, including break shifts and 24-hour open shifts.' },
      vis: rosterMock, wide: true,
      foot: 'Rosters, shift patterns, break shifts and weekly offs are live. The covers and occupancy feed is configured in the pilot (daily upload or from your systems). Demo data, not ITC figures.',
    }),
    notes: n([
      'This slide usually lands. Point at Saturday 28: covers 560, needed 23, rostered 21, so two short, and the system offers the shift.',
      'Break shift = the orange two-band cell: 7 to 11 and 18 to 22, one day, two windows.',
      'Honest line if asked “does it read our occupancy automatically?”: in the pilot we start with a daily upload; a direct feed is set up after.',
    ]),
  },

  {
    ...problemSlide({
      id: 'ih11', theme: 'light', title: 'Attend', rail, step: 6, demo: 'Live · present now',
      kick: 'step 6 · attend',
      h2: 'Know who is on duty in each department right now, <em>not when the time office reconciles the month.</em>',
      qLabel: Q, quote: 'Punches sit in a machine at the staff entrance. Missed punches and break shifts are fixed by hand before payroll.',
      changes: [
        { ic: icons.cam, b: 'Face at the staff entrance, or on the phone.', t: 'Face devices at the time office, or geo-fenced face punches on the associate’s phone inside the property boundary.' },
        { ic: icons.clock, b: 'Break shifts read right.', t: 'Two windows, four punches, one working day. Late marks and early exits follow your grace rules.' },
        { ic: icons.check, b: 'Corrections with a reason.', t: 'A missed punch is fixed from the phone with a reason, approved by the HOD, kept on the trail.' },
      ],
      proof: { n: '1,850+', p: 'associates mark attendance on goBetter across Royal Orchid hotels.' },
      vis: attendMock, flip: true,
      foot: 'Face and geo attendance, live headcount and regularisation are live. Device choice is agreed per property. Demo data, not ITC figures.',
    }),
    notes: n([
      'Point at the KPI row, then the banquets row: “6 servers short across today’s lunch and sangeet, and the casuals have already been offered the shift.”',
      'If asked about face-punch speed: be honest. Royal Orchid gave us feedback on punch speed on phones; devices at the staff entrance are the faster option, and we choose per property in the pilot.',
    ]),
  },

  {
    ...problemSlide({
      id: 'ih12', theme: 'light', title: 'Leave', rail, step: 7, demo: 'Live · leave and holidays',
      kick: 'step 7 · leave',
      h2: 'Leave, holidays and comp-offs on one calendar, <em>with a warning before a peak date goes short.</em>',
      qLabel: Q, quote: 'Leave is approved on paper or chat. On New Year’s Eve, HR finds out how many banquet captains are off.',
      changes: [
        { ic: icons.check, b: 'Apply and approve on the phone.', t: 'Earned, casual, sick, maternity and comp-off, with balances the associate can see.' },
        { ic: icons.map, b: 'Holidays and comp-off.', t: 'National and festival holidays by state; working a holiday credits a comp-off under your policy.' },
        { ic: icons.warn, b: 'Peak-date guard.', t: 'When a department crosses your threshold on a banquet-heavy date, the HOD sees a warning before approving. The HOD still decides.' },
      ],
      proof: { n: '1', p: 'calendar for roster, leave and payroll, so approved leave is never rostered and always paid right.' },
      vis: leaveMock,
      foot: 'Leave policies, holidays, comp-off and approvals are live. The peak-date warning is configured from your event calendar. Names illustrative.',
    }),
    notes: n([
      'Read the red row: “Seven banquet staff already off on 31 December, above the 10% warning level. The HOD sees that before approving another.”',
      'The tool warns, the HOD decides. Never say it blocks leave.',
    ]),
  },

  {
    ...problemSlide({
      id: 'ih13', theme: 'darker', title: 'Pay', rail, step: 8, demo: 'Live · pay run',
      kick: 'step 8 · pay and statutory compliance',
      h2: 'Payroll from the punches the hotel already trusts, <em>with statutory checks before anyone is paid.</em>',
      qLabel: Q, quote: 'Attendance is exported, cleaned and keyed into payroll. Overtime and night allowances are argued over every month.',
      changes: [
        { ic: icons.clock, b: 'Payroll reads attendance.', t: 'Present days, leave, overtime and night allowances come from the same record. No retyping.' },
        { ic: icons.shield, b: 'Checks built in.', t: 'Minimum wage by skill, PF, ESI, professional tax and labour welfare fund, and overtime at twice the ordinary rate, set to the rules you confirm.' },
        { ic: icons.doc, b: 'Payslips and registers.', t: 'Payslip on the associate’s phone; muster roll, wage and overtime registers from the same data.' },
      ],
      proof: { n: '−90%', p: 'payroll leakage reported by <b>Reliance</b> once pay ran from verified attendance (client-reported).' },
      vis: payMock,
      foot: 'Payroll, statutory computation and registers are live. Royal Orchid runs payroll on goBetter at its hotels. Rules are configured to your interpretation; values are demo data.',
    }),
    notes: n([
      'The mock steps animate: locked, inputs, computed and checked, approved.',
      'Key line: “Payroll is only as good as attendance. Here they’re one record.”',
      'Royal Orchid runs payroll on goBetter; adoption is still growing hotel by hotel. If pushed, say that plainly.',
      'Never mention prices. If asked: “Commercials come in a separate proposal after we agree the pilot scope.”',
    ]),
  },

  {
    ...problemSlide({
      id: 'ih14', theme: 'light', title: 'Exit', rail, step: 9, demo: 'Configured · clearance',
      kick: 'step 9 · exit',
      h2: 'A clean last day, a correct full and final, <em>and good people kept in the rehire pool.</em>',
      qLabel: Q, quote: 'Clearance is a paper form carried from department to department. Exit reasons are never counted.',
      changes: [
        { ic: icons.check, b: 'Clearance across departments.', t: 'Uniform and linen, locker, kitchen tools, cash and IT access, each signed off in the app.' },
        { ic: icons.card, b: 'Full and final from the record.', t: 'Last month’s attendance, leave encashment and recoveries feed the settlement.' },
        { ic: icons.chart, b: 'Why people leave, by department.', t: 'A short exit survey on the phone; reasons counted by department and season.' },
      ],
      proof: { n: 'Minutes', p: 'to bring back a rehire-eligible associate: profile, checks and training history return with them.' },
      vis: exitMock, flip: true,
      foot: 'Rehire with a reused profile is live. The clearance checklist and exit survey are configured per property in the pilot. Names illustrative.',
    }),
    notes: n([
      'Short slide. Main point: exit feeds the rehire pool, so next season’s banquet casuals are one tap away.',
      'This screen is configured for each client, so say “we set up your clearance list in the pilot”.',
    ]),
  },

  {
    ...plainSlide('ih15', 'light', 'Agency staff',
      'Staff from service providers · one light layer, only if you need it',
      'Most of your team is on your rolls. <em>Where a service provider supplies people, the same checks apply.</em>',
      `<div class="ih-wf">
        <div class="col">
          <div class="lbl">What we understand</div>
          <div class="it"><b>An on-roll core.</b> ITC Hotels reports over 8,200 direct employees, excluding contractual staff.</div>
          <div class="it"><b>Service providers in support roles.</b> In Indian hotels these are usually public-area cleaning, kitchen stewarding, security, engineering and banquet casuals in peak season.</div>
          <div class="it"><b>The principal employer answers for them.</b> Under the OSH Code and the Code on Social Security, wages, PF and ESI fall back on the hotel if a provider defaults.</div>
        </div>
        <div class="col on">
          <div class="lbl">What goBetter does for that layer</div>
          <div class="it"><b>Same onboarding, checks and training.</b> Agency staff join on WhatsApp, are verified by role and take food-safety and fire-safety courses.</div>
          <div class="it"><b>Same attendance.</b> They punch on the same devices, so the agency bill can be checked against real shifts.</div>
          <div class="it"><b>PF and ESI matched per person.</b> The provider uploads its monthly challans; we flag anyone short or missing. You decide what to do.</div>
        </div>
      </div>
      <div class="foot" style="margin-top:10px">Direct-employee figure from the ITC Hotels Information Memorandum, January 2025. Agency management, challan matching and bill checks are live at our contract-workforce clients (Reliance, BPCL). Interpretation of labour rules stays with you and your advisors.</div>`),
    notes: n([
      'Keep this to one minute unless they lean in.',
      'Ask: “Which functions at this property come through service providers today?” Note the answer for the follow-up.',
      'If they say “none”, move on. The core of today is the on-roll journey.',
    ]),
  },

  {
    ...problemSlide({
      id: 'ih16', theme: 'dark', title: 'GM and HR dashboard', demo: 'Live · GM view',
      kick: 'all nine steps, on one screen',
      h2: 'The GM’s morning view: who is on duty, who is short tonight, <em>and what needs a decision today.</em>',
      qLabel: Q, quote: 'The morning meeting runs on reports each HOD prepares. By the time they agree, the lunch service has started.',
      changes: [
        { ic: icons.chart, b: 'One view of the property.', t: 'Present by department, occupancy and banquet covers against staffing, joiners, training due and payroll status.' },
        { ic: icons.warn, b: 'Exceptions first.', t: 'Short departments, overdue mandatory training and pending checks come to the top, each linked to the person who can act.' },
        { ic: icons.layers, b: 'Property today, cluster tomorrow.', t: 'The same view rolls up across properties when you add them.' },
      ],
      proof: { n: '9', p: 'steps feeding one dashboard, so every number on it can be clicked down to a named associate.' },
      vis: dashMock, wide: true,
      foot: 'Dashboards are live and refresh on a short processing cycle; live headcount sits on the attendance screen. Demo data, not ITC figures.',
    }),
    notes: n([
      'This is the climax: every earlier slide shows up here.',
      'Read two items aloud: housekeeping two room attendants short for 336 rooms tonight; 17 food handlers overdue on food safety.',
      '<b>Then switch to the live demo</b>: “Let me show you this property live.”',
    ]),
  },

  {
    ...plainSlide('ih17', 'darker', 'Live demo',
      'Live demo · the Demo Property, Bengaluru',
      'Now the same property, live. <em>One GM view, then one associate’s journey.</em>',
      `<div class="ih-demo">
        <div class="go">
          <div class="lbl" style="font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.6)">Open in the browser</div>
          <div class="u">betterplace.co.in/studio/itchotels</div>
          <p>A clickable prototype of goBetter, set up as one luxury property with thirteen departments and seven F&amp;B outlets. Demo data, not ITC figures.</p>
          <a href="${PROTO}" target="_blank" rel="noopener">Open the demo property →</a>
        </div>
        <ol>
          <li style="--d:.1s"><span><b>Dashboard.</b> Housekeeping against occupancy, and today’s banquet table.</span></li>
          <li style="--d:.18s"><span><b>Click the food-safety alert.</b> Learning opens filtered; click a name to see that associate’s whole journey.</span></li>
          <li style="--d:.26s"><span><b>Rosters.</b> Switch to Banquets: break shifts, the short days, approve a missed punch.</span></li>
          <li style="--d:.34s"><span><b>Hire &amp; Onboard.</b> The banquet-casual drive and the WhatsApp phone in Hindi or Kannada.</span></li>
          <li style="--d:.42s"><span><b>Leave.</b> The 31 December warning, then approve one request.</span></li>
          <li style="--d:.5s"><span><b>Payroll &amp; Compliance.</b> The pay-run steps, the checks, the agencies panel.</span></li>
        </ol>
      </div>`),
    notes: n([
      '<b>8 minutes.</b> Open the link in a new tab. Follow the six steps on the slide; don’t explore beyond them.',
      'Each tab has a one-line hint at the top saying what the screen shows. Read it if you lose your place.',
      '“Ask goBetter” in the prototype is a <b>pilot</b> feature. Show it only if there’s time and call it a pilot.',
      'Come back to the deck for the next slide when done.',
    ]),
  },

  {
    ...plainSlide('ih18', 'light', 'AI that helps today',
      'AI · what helps a hotel team today, and what is still a pilot',
      'Agents take the chasing out of HR work. <em>People still make the decisions.</em>',
      `<div>
        <div class="ih-ag">
          <div class="x" style="--d:.1s"><h4>Joining assistant <span class="st live">Live</span></h4><p>Runs the WhatsApp joining flow, collects documents and answers the joiner’s questions.</p><div class="q">“Which documents do I bring on Monday?”</div></div>
          <div class="x" style="--d:.18s"><h4>Associate helpdesk <span class="st live">Live</span></h4><p>Answers pay, leave and attendance questions in the associate’s language, from their own record.</p><div class="q">“How many leaves do I have left?”</div></div>
          <div class="x" style="--d:.26s"><h4>Rostering and backfill <span class="st live">Live</span></h4><p>Finds who can fill a short shift and offers it on WhatsApp.</p><div class="q">Sat 28 · 2 F&amp;B associates short</div></div>
          <div class="x" style="--d:.34s"><h4>Reminders and calls <span class="st live">Live</span></h4><p>Chases overdue courses, missing documents and no-shows.</p><div class="q">17 food handlers · food safety overdue</div></div>
          <div class="x" style="--d:.42s"><h4>Induction <span class="st live">Live</span></h4><p>Your SOP as a guided flow with a short test.</p><div class="q">Fire exits · assembly point quiz</div></div>
          <div class="x" style="--d:.5s"><h4>Ask goBetter <span class="st pilot">Pilot</span></h4><p>HR and the GM ask questions in plain English or Hindi and get an answer from the record.</p><div class="q">“Who is short in housekeeping tonight?”</div></div>
        </div>
        <div class="foot" style="margin-top:12px">Agents run on our infrastructure in India with personal data masked and every action logged. Agents suggest and chase; approvals stay with your HR team and HODs.</div>
      </div>`),
    notes: n([
      'Say “live” and “pilot” exactly as shown. Ask goBetter is a pilot.',
      'Do not promise anything that “monitors” or “audits” automatically. If asked, say: agents chase and suggest, people approve.',
    ]),
  },

  {
    ...plainSlide('ih19', 'light', 'Royal Orchid Hotels',
      'Hotel proof · Royal Orchid Hotels on goBetter',
      'A hotel group running its people on goBetter today, <em>property by property.</em>',
      `<div class="ih-roc">
        <div>
          <div class="facts">
            <div class="fx" style="--d:.1s"><div class="n">36</div><div class="l">hotels live, each set up as its own unit with its own shifts and geo-fence</div></div>
            <div class="fx" style="--d:.2s"><div class="n">~2,900</div><div class="l">active associates on the platform</div></div>
            <div class="fx" style="--d:.3s"><div class="n">1,850+</div><div class="l">associates marking attendance on goBetter</div></div>
            <div class="fx" style="--d:.4s"><div class="n">Jul 2024</div><div class="l">live; signed October 2023, extended in February 2026</div></div>
          </div>
          <div class="foot" style="margin-top:10px">Figures from BetterPlace platform data, June 2026. Royal Orchid has not published outcome numbers, so we quote none. A reference conversation can be arranged on request.</div>
        </div>
        <div class="side">
          <div class="lbl">What they run on goBetter</div>
          <div class="it"><b>Onboarding and attendance</b>Every hotel, with break shifts and 24-hour open shifts among 19 shift patterns.</div>
          <div class="it"><b>Payroll</b>Running hotel by hotel as each unit moves over.</div>
          <div class="it"><b>Performance and learning</b>Courses by department and level, with a mandatory induction.</div>
          <div class="it"><b>Hiring and verification</b>Being rolled out now.</div>
        </div>
      </div>`),
    notes: n([
      'Say exactly what is on the slide. No outcome numbers: Royal Orchid hasn’t given us any to quote.',
      'If asked “how did the rollout go?”: honest answer. It took time to stabilise across many small units with their own setups; we learned to set up each hotel as its own unit, which is why we suggest starting with one ITC property.',
      'Reference call: offer it, don’t promise a date. Anuj confirms.',
    ]),
  },

  {
    ...plainSlide('ih20', 'dark', 'What is live',
      'The honest table · what runs today and what we set up for you',
      'Most of the journey runs at clients today. <em>Here is exactly what is live, and what we configure.</em>',
      `<div class="tel-status tight">
        <div class="h"></div><div class="h">Capability</div><div class="h">Where it runs today</div><div class="h">Status</div>
        <div class="r" style="--d:.05s"><i>·</i><b>Hiring: requisitions, pipelines, WhatsApp apply</b><span>goBetter Hire at enterprise clients; rolling out at Royal Orchid.</span><em class="live">Live</em></div>
        <div class="r" style="--d:.1s"><i>·</i><b>Background verification by role</b><span>Our own verification business, since 2015.</span><em class="live">Live</em></div>
        <div class="r" style="--d:.15s"><i>·</i><b>WhatsApp onboarding and documents</b><span>Onboarding at Royal Orchid hotels; WhatsApp joining at Reliance and Zepto.</span><em class="live">Live</em></div>
        <div class="r" style="--d:.2s"><i>·</i><b>Learning: courses, quizzes, certificates</b><span>skillBetter; Royal Orchid runs courses by department.</span><em class="live">Live</em></div>
        <div class="r" style="--d:.25s"><i>·</i><b>Rosters, break shifts, attendance</b><span>19 shift patterns at Royal Orchid; face and geo punches.</span><em class="live">Live</em></div>
        <div class="r" style="--d:.3s"><i>·</i><b>Covers and occupancy on the roster</b><span>Daily upload in the pilot, then a feed from your systems.</span><em class="mix">Configured for you</em></div>
        <div class="r" style="--d:.35s"><i>·</i><b>Leave, holidays, comp-off</b><span>Policies, balances and approvals; peak-date warning set from your calendar.</span><em class="live">Live · warning configured</em></div>
        <div class="r" style="--d:.4s"><i>·</i><b>Payroll and statutory computation</b><span>Royal Orchid hotels; Reliance at 500K workers a month.</span><em class="live">Live</em></div>
        <div class="r" style="--d:.45s"><i>·</i><b>Exit clearance and survey</b><span>Checklist and survey set up per property; rehire reuse is live.</span><em class="mix">Configured for you</em></div>
        <div class="r" style="--d:.5s"><i>·</i><b>Ask goBetter (plain-language questions)</b><span>Answers from your record, in English and Hindi.</span><em class="pilot">Pilot</em></div>
      </div>`),
    notes: n([
      'This slide builds trust. Read the two “Configured” rows and the “Pilot” row out loud yourself, before anyone asks.',
      '“Configured for you” means we set it up in your pilot, not that it’s unfinished software.',
    ]),
  },

  {
    ...plainSlide('ih21', 'darker', 'Next steps',
      'How one property starts · and three asks for today',
      'One property, one full payroll cycle, <em>and a result you can take to the cluster.</em>',
      `<div>
        <div class="tel-phase4">
          <div class="ph4" style="--d:.15s"><div class="w">Weeks 1 to 2</div><h4>Design</h4><p>Departments, outlets, shift patterns, leave and pay policies, role packs for checks, mandatory courses.</p><div class="who">Joint</div></div>
          <div class="ph4" style="--d:.3s"><div class="w">Weeks 3 to 6</div><h4>Set up</h4><p>Associate data loaded, devices at the staff entrance, your courses uploaded, payroll rules tested on last month.</p><div class="who">BetterPlace</div></div>
          <div class="ph4" style="--d:.45s"><div class="w">Weeks 7 to 12</div><h4>Run one property</h4><p>Rosters, attendance, leave and one full payroll in parallel with today’s process, then cut over.</p><div class="who">Measured</div></div>
          <div class="ph4" style="--d:.6s"><div class="w">Then</div><h4>Your cluster plan</h4><p>Hiring, verification and exit added; more properties on your schedule.</p><div class="who">Staged</div></div>
        </div>
        <div class="tel-close" style="margin-top:16px;grid-template-columns:1.2fr .8fr">
          <div class="asks">
            <div class="ask" style="--d:.2s"><span class="n">1</span><div><h4>Pick the pilot property</h4><p>One hotel with a busy F&amp;B and banquet calendar shows the most.</p></div></div>
            <div class="ask" style="--d:.3s"><span class="n">2</span><div><h4>Name two owners</h4><p>The property HR manager and one HOD from F&amp;B or Housekeeping.</p></div></div>
            <div class="ask" style="--d:.4s"><span class="n">3</span><div><h4>Share policies and one sample month</h4><p>Shift, leave and pay policies, and an anonymised month of attendance to test payroll on.</p></div></div>
          </div>
          <div class="tel-contact"><div class="nm">Anuj Saxena</div><div class="rl">Director, Product · BetterPlace</div><a href="mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent('ITC Hotels · goBetter one-property pilot')}">anuj.saxena@betterplace.co.in</a><p>Commercials come in a separate proposal once the pilot scope is agreed. Durations are indicative and confirmed at kick-off.</p></div>
        </div>
      </div>`, { glow: true }),
    notes: n([
      'Close by asking for the three things. Write down what they say.',
      'If asked about cost: “It’s priced per active associate per month; we’ll send a proposal once the pilot property is chosen.” No numbers.',
      'If asked about timelines being firm: they are indicative; confirmed at kick-off.',
      'End: “Thank you. I’ll send the deck link and the demo link today.”',
    ]),
  },
]

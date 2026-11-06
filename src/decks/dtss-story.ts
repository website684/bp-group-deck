import type { SlideDef } from '../lib/types'
import { plainSlide, bar, row } from './story-kit'
import { dtssFeatureSlides, dtssCss, trainerPhones, custReport } from './dtss-lms'

// DTSS and SMC (SIS Group) · skillBetter, CEO cut (Nov 2026).
// Problem first, from the ground: a trainer responsible for thousands of facility staff across
// sites and languages. Each problem is answered with a working app prototype (language, enforcement,
// WhatsApp/push nudges, practice between visits, proof on site). Then "built for Bharat", the brand
// wall, two case-study slides, what we already built for DTSS, reports and the start plan.
// Feature-by-feature slides follow as an appendix. Persona and screens are illustrative composites.

const pick = (id: string) => {
  const s = dtssFeatureSlides.find((x) => x.id === id)
  if (!s) throw new Error(`dtss feature slide ${id} missing`)
  return s
}

const css = `<style>
.pp { width: 236px; flex: none; border-radius: 34px; background: #0b1030; padding: 8px; box-shadow: 0 36px 70px -26px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.08) inset; position: relative; animation: telpop .6s var(--ease) both; animation-delay: var(--d, 0s); }
.pp::before { content: ""; position: absolute; top: 13px; left: 50%; transform: translateX(-50%); width: 68px; height: 16px; border-radius: 10px; background: #0b1030; z-index: 6; }
.pp .scr { height: 452px; border-radius: 27px; overflow: hidden; background: #f4f5f8; position: relative; display: flex; flex-direction: column; font-family: var(--body, system-ui); }
.pp .sb { height: 30px; flex: none; }
.pp .ah { background: #F2B33D; padding: 6px 14px 14px; color: #1d1d1d; }
.pp .ah b { font-family: var(--disp); font-size: 15px; }
.pp .ah .row { display: flex; gap: 8px; margin-top: 10px; }
.pp .ah .row span { flex: 1; background: #fff; border-radius: 10px; font-size: 9.5px; text-align: center; padding: 7px 2px; font-weight: 600; }
.pp .bd { padding: 10px; display: flex; flex-direction: column; gap: 8px; flex: 1; min-height: 0; }
.pp .card { background: #fff; border-radius: 12px; padding: 9px 10px; font-size: 11px; color: #1f2937; box-shadow: 0 1px 2px rgba(0,0,0,.06); }
.pp .card small { display: block; color: #6b7280; font-size: 10px; }
.pp .thumb { height: 92px; border-radius: 10px; background: linear-gradient(160deg, var(--c1, #1B2D93), var(--c2, #2142B9)); color: #fff; padding: 9px; font-size: 11px; font-weight: 700; display: flex; align-items: flex-end; position: relative; }
.pp .thumb::before { content: "▶"; position: absolute; top: 8px; left: 10px; font-size: 11px; }
.pp .dim { position: absolute; inset: 0; background: rgba(10,14,30,.62); z-index: 3; }
.pp .modal { position: absolute; left: 12px; right: 12px; top: 28%; z-index: 4; background: #fff; border-radius: 16px; padding: 14px; box-shadow: 0 20px 40px -10px rgba(0,0,0,.5); animation: ppup .6s var(--ease) .5s both; }
@keyframes ppup { from { transform: translateY(30px) scale(.94); opacity: 0 } to { transform: none; opacity: 1 } }
.pp .modal .tag { display: inline-block; font-size: 9.5px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #b91c1c; background: #fee2e2; padding: 3px 8px; border-radius: 99px; }
.pp .modal h5 { margin: 8px 0 4px; font-family: var(--disp); font-size: 14.5px; color: #111827; line-height: 1.25; }
.pp .modal p { margin: 0; font-size: 11px; color: #4b5563; line-height: 1.4; }
.pp .modal .go { margin-top: 12px; background: #1B2D93; color: #fff; border-radius: 10px; text-align: center; font-size: 12px; font-weight: 700; padding: 10px; }
.pp .modal .meta { display: flex; gap: 10px; margin-top: 8px; font-size: 10px; color: #6b7280; }
.pp .ann { background: #1B2D93; color: #fff; border-radius: 12px; padding: 10px; font-size: 11px; line-height: 1.35; }
.pp .ann b { display: block; color: #F2B33D; font-size: 9.5px; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 3px; }
.pp.lock .scr { background: linear-gradient(170deg, #233a72, #0d1630); }
.pp.lock .time { color: #fff; text-align: center; font-family: var(--disp); font-size: 44px; font-weight: 700; margin-top: 18px; line-height: 1; }
.pp.lock .date { color: rgba(255,255,255,.75); text-align: center; font-size: 11px; margin-top: 4px; }
.pp .note { margin: 0 10px; background: rgba(255,255,255,.9); border-radius: 14px; padding: 9px 11px; font-size: 11px; color: #111827; animation: telpop .5s var(--ease) both; animation-delay: var(--d); }
.pp .note .ap { display: flex; justify-content: space-between; font-size: 9.5px; color: #6b7280; margin-bottom: 2px; }
.pp .note b { display: block; font-size: 11.5px; }
.pp.wa .scr { background: #ece5dd; }
.pp.wa .top { background: #075e54; color: #fff; padding: 30px 12px 9px; display: flex; gap: 9px; align-items: center; font-size: 12.5px; font-weight: 600; }
.pp.wa .top i { width: 26px; height: 26px; border-radius: 50%; background: #F2B33D; color: #1d1d1d; display: grid; place-items: center; font-style: normal; font-size: 10px; font-weight: 800; }
.pp.wa .top small { display: block; font-weight: 400; opacity: .8; font-size: 10px; }
.pp.wa .chat { padding: 10px 9px; display: flex; flex-direction: column; gap: 6px; justify-content: flex-end; flex: 1; }
.pp.wa .m { max-width: 86%; background: #fff; color: #111b21; font-size: 11px; line-height: 1.38; padding: 7px 9px; border-radius: 10px; border-top-left-radius: 2px; animation: telpop .4s var(--ease) both; animation-delay: var(--d); }
.pp.wa .m.me { align-self: flex-end; background: #d9fdd3; border-top-left-radius: 10px; border-top-right-radius: 2px; }
.pp.wa .m .btn { margin-top: 6px; border-top: 1px solid #e9edef; padding-top: 5px; text-align: center; color: #027eb5; font-weight: 600; }
.pp.wa .m .thumb { height: 70px; margin: 4px 0; }
.pp .lang { display: flex; flex-wrap: wrap; gap: 5px; }
.pp .lang span { font-size: 10.5px; background: #fff; border: 1px solid #e5e7eb; border-radius: 99px; padding: 3px 9px; }
.pp .lang span.on { background: #1B2D93; color: #fff; border-color: #1B2D93; }
.pp .reel { flex: 1; border-radius: 12px; background: linear-gradient(170deg, #2a6f97, #13324a); position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; padding: 12px; color: #fff; }
.pp .reel .cap { font-family: var(--disp); font-size: 15px; font-weight: 700; text-align: center; text-shadow: 0 2px 6px rgba(0,0,0,.5); line-height: 1.3; }
.pp .reel .pic { position: absolute; inset: 14px 30px 90px; border-radius: 10px; background: radial-gradient(circle at 50% 35%, #f3c79b 0 16%, transparent 17%), linear-gradient(180deg, transparent 50%, #1f7a8c 50% 80%, transparent 80%); opacity: .9; }
.pp .reel .q { margin-top: 10px; background: rgba(255,255,255,.95); color: #111827; border-radius: 10px; padding: 8px; font-size: 10.5px; }
.pp .reel .q b { display: block; margin-bottom: 4px; }
.pp .reel .q span { display: inline-block; background: #eef2ff; border-radius: 6px; padding: 3px 7px; margin: 2px 2px 0 0; }
.pp .cycpane { display: none; } .pp .cycpane.on { display: flex; flex-direction: column; flex: 1; min-height: 0; gap: 8px; }
.pp-row { display: flex; gap: 22px; justify-content: center; align-items: flex-start; }
.pp-cap { text-align: center; font-family: var(--mono); font-size: 10.5px; letter-spacing: .05em; color: var(--muted); margin-top: 10px; }
.dark .pp-cap, .darker .pp-cap { color: rgba(255,255,255,.6); }
.persona { display: grid; grid-template-columns: 300px 1fr; gap: 18px; align-items: start; }
.persona .who { background: #fff; border: 1px solid var(--border); border-radius: 18px; padding: 18px; animation: telpop .45s var(--ease) both; }
.persona .av { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #F2B33D, #F39200); display: grid; place-items: center; font-family: var(--disp); font-weight: 800; font-size: 22px; color: #1d1d1d; }
.persona .who h4 { margin: 10px 0 2px; font-family: var(--disp); font-size: 1.2rem; color: var(--ink); }
.persona .who .r { font-size: .84rem; color: var(--text); }
.persona .who .k { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px; }
.persona .who .k div { background: var(--surface, #f7f8fb); border-radius: 10px; padding: 8px 10px; }
.persona .who .k b { display: block; font-family: var(--disp); font-size: 1.25rem; color: var(--navy); }
.persona .who .k span { font-size: .72rem; color: var(--text); }
.persona .qs { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.persona .q { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 12px 14px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.persona .q .n { font-family: var(--mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: var(--navy); }
.persona .q p { margin: 5px 0 0; font-size: .9rem; line-height: 1.42; color: var(--ink); font-weight: 500; }
.persona .q p::before { content: "\\201C"; color: #F39200; font-weight: 800; margin-right: 2px; }
.persona .q p::after { content: "\\201D"; color: #F39200; font-weight: 800; }
.bharat { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.bharat .t { border-radius: 16px; padding: 16px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); animation: telpop .45s var(--ease) both; animation-delay: var(--d); display: flex; flex-direction: column; gap: 6px; }
.bharat .t .ic { font-size: 22px; line-height: 1; }
.bharat .t h4 { margin: 4px 0 0; font-family: var(--disp); font-size: 1.02rem; color: #fff; }
.bharat .t p { margin: 0; font-size: .8rem; line-height: 1.45; color: rgba(255,255,255,.78); }
.bharat-who { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; align-items: center; }
.bharat-who .l { font-family: var(--mono); font-size: 10.5px; letter-spacing: .1em; text-transform: uppercase; color: var(--yellow); margin-right: 6px; }
.bharat-who span { font-size: .82rem; color: #fff; background: rgba(255,196,1,.12); border: 1px solid rgba(255,196,1,.35); border-radius: 99px; padding: 5px 12px; }
.wall { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
.wall .b { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 14px 14px 12px; display: flex; flex-direction: column; gap: 8px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.wall .lg { height: 46px; display: flex; align-items: center; }
.wall .lg img { max-height: 46px; max-width: 150px; object-fit: contain; }
.wall .lg .wm { font-family: var(--disp); font-weight: 800; font-size: 1.35rem; letter-spacing: -.02em; }
.wall .b .w { font-family: var(--mono); font-size: 9.5px; letter-spacing: .08em; text-transform: uppercase; color: #6b7280; }
.wall .b p { margin: 0; font-size: .78rem; line-height: 1.4; color: var(--text); }
.cs2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.cs { background: #fff; border: 1px solid var(--border); border-radius: 18px; padding: 18px 20px; display: flex; flex-direction: column; gap: 12px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.cs .hd { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.cs .hd img { max-height: 36px; max-width: 120px; object-fit: contain; }
.cs .hd .ind { font-family: var(--mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: #6b7280; text-align: right; }
.cs h4 { margin: 0; font-family: var(--disp); font-size: 1.15rem; color: var(--ink); line-height: 1.3; }
.cs .rows { display: grid; gap: 8px; }
.cs .rw { display: grid; grid-template-columns: 92px 1fr; gap: 10px; font-size: .84rem; line-height: 1.42; color: var(--text); }
.cs .rw b { font-family: var(--mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: var(--navy); padding-top: 3px; }
.cs .nums { display: flex; gap: 10px; border-top: 1px dashed var(--border); padding-top: 12px; margin-top: auto; }
.cs .nums div { flex: 1; }
.cs .nums b { display: block; font-family: var(--disp); font-size: 1.6rem; color: var(--navy); letter-spacing: -.02em; line-height: 1; }
.cs .nums span { font-size: .74rem; color: var(--text); }
.cs .fm { font-size: .78rem; font-weight: 600; color: #8a5a00; background: #fff6e0; border-radius: 8px; padding: 7px 10px; }
.appx { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.appx div { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); border-radius: 12px; padding: 12px 14px; color: rgba(255,255,255,.85); font-size: .86rem; }
.appx div b { display: block; color: #fff; font-family: var(--disp); margin-bottom: 2px; }
</style>`

const homeBg = `
  <div class="sb"></div>
  <div class="ah"><b>Namaste, Sunita</b><div class="row"><span>Lessons</span><span>Events</span><span>Reels</span><span>Journey</span></div></div>
  <div class="bd">
    <div class="thumb" style="--c1:#0d6b4f;--c2:#1a9a6c">Common Area Cleaning</div>
    <div class="card">POSH training<small>Compulsory · 2 levels · 1 min</small></div>
    <div class="card">Cash handling<small>3 chapters</small></div>
  </div>`

const enforcePhones = `
<div class="pp-row">
  <div><div class="pp" style="--d:.1s"><div class="scr">${homeBg}<div class="dim"></div>
    <div class="modal"><span class="tag">Before your shift</span><h5>Chemical safety check for City Hospital</h5><p>3 questions, 2 minutes. You need this before you start in the ICU wing today.</p><div class="meta"><span>हिंदी</span><span>· 2 min</span><span>· Compulsory</span></div><div class="go">Start now</div></div>
  </div></div><div class="pp-cap">Enforcement · on top of everything</div></div>
  <div><div class="pp" style="--d:.3s"><div class="scr">
    <div class="sb"></div>
    <div class="ah"><b>Namaste, Sunita</b><div class="row"><span>Lessons</span><span>Events</span><span>Reels</span><span>Journey</span></div></div>
    <div class="bd">
      <div class="ann"><b>Announcement · City Hospital</b>From Monday: red mop and red bucket only in the ICU. Watch the 60-second reel.</div>
      <div class="ann" style="background:#0d6b4f"><b>Well done</b>Sunita, you are Safety Champion of the month at your site. 🏅</div>
      <div class="thumb" style="--c1:#a12b1f;--c2:#d9452f">Never Mix Chemicals</div>
    </div>
  </div></div><div class="pp-cap">Announcements · at the top of home</div></div>
</div>`

const nudgePhones = `
<div class="pp-row">
  <div><div class="pp lock" style="--d:.1s"><div class="scr"><div class="sb"></div><div class="time">7:12</div><div class="date">Monday, 9 November</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-top:22px">
      <div class="note" style="--d:.5s"><div class="ap"><span>DTSS Learning</span><span>now</span></div><b>Sunita, 2 minutes before your shift</b>Your chemical safety check is waiting.</div>
      <div class="note" style="--d:.8s"><div class="ap"><span>DTSS Learning</span><span>yesterday</span></div><b>New reel: Germs Travel 🎬</b>Watch in Hindi, earn 20 points.</div>
      <div class="note" style="--d:1.1s"><div class="ap"><span>DTSS Learning</span><span>Fri</span></div><b>Your site is No. 2 this week</b>3 more people to finish and you are top.</div>
    </div></div></div><div class="pp-cap">Push · timed before the shift</div></div>
  <div><div class="pp wa" style="--d:.3s"><div class="scr">
    <div class="top"><i>DT</i><div>DTSS Training<small>Official business account</small></div></div>
    <div class="chat">
      <div class="m" style="--d:.5s">नमस्ते सुनीता 🙏 आज का 1 मिनट का वीडियो:<div class="thumb" style="--c1:#7a1f5c;--c2:#c2397d">Golden Rules of Cleaning</div><div class="btn">देखें</div></div>
      <div class="m me" style="--d:.9s">देख लिया ✅</div>
      <div class="m" style="--d:1.2s">शाबाश! 2 सवाल और, फिर आपका सर्टिफिकेट।<div class="btn">शुरू करें</div></div>
    </div></div></div><div class="pp-cap">WhatsApp · where they already are</div></div>
</div>`

const langs: [string, string, string, string[]][] = [
  ['हिंदी', 'केमिकल कभी न मिलाएँ', 'कौन से दो केमिकल नहीं मिलाने चाहिए?', ['ब्लीच + एसिड', 'पानी + साबुन']],
  ['বাংলা', 'রাসায়নিক কখনও মেশাবেন না', 'কোন দুটি রাসায়নিক মেশানো উচিত নয়?', ['ব্লিচ + অ্যাসিড', 'জল + সাবান']],
  ['தமிழ்', 'ரசாயனங்களை ஒருபோதும் கலக்காதீர்கள்', 'எந்த இரண்டு ரசாயனங்களை கலக்கக்கூடாது?', ['ப்ளீச் + அமிலம்', 'நீர் + சோப்பு']],
  ['ଓଡ଼ିଆ', 'ରାସାୟନିକ କେବେ ମିଶାନ୍ତୁ ନାହିଁ', 'କେଉଁ ଦୁଇଟି ରାସାୟନିକ ମିଶାଇବା ଉଚିତ ନୁହେଁ?', ['ବ୍ଲିଚ୍ + ଏସିଡ୍', 'ପାଣି + ସାବୁନ']],
  ['English', 'Never mix chemicals', 'Which two chemicals must never be mixed?', ['Bleach + acid', 'Water + soap']],
]
const langPhone = `
<div class="pp-row">
  <div><div class="pp" style="--d:.1s"><div class="scr" data-cycle="2200">
    <div class="sb"></div>
    <div style="padding:0 10px 8px"><div class="lang">${langs.map(([l]) => `<span class="cyc">${l}</span>`).join('')}</div></div>
    <div class="bd" style="padding-top:0">
      ${langs.map(([, cap, q, a]) => `<div class="cycpane"><div class="reel"><div class="pic"></div><div class="cap">${cap}</div><div class="q"><b>${q}</b>${a.map((x) => `<span>${x}</span>`).join('')}</div></div></div>`).join('')}
    </div>
  </div></div><div class="pp-cap">Same reel · voice and words in their language</div></div>
</div>`

const saathiPhone = `
<div class="pp-row">
  <div><div class="pp wa" style="--d:.1s"><div class="scr">
    <div class="top" style="background:#1B2D93"><i>सा</i><div>Saathi · DTSS coach<small>Speaks Hindi · answers from DTSS SOPs</small></div></div>
    <div class="chat">
      <div class="m me" style="--d:.4s">🎤 ICU में कौन सा पोछा लगाना है?</div>
      <div class="m" style="--d:.8s">ICU में सिर्फ़ लाल पोछा और लाल बाल्टी। हर कमरे के बाद पानी बदलें।<small style="display:block;color:#6b7280;margin-top:4px">Source: DTSS Hospital SOP, page 4</small></div>
      <div class="m" style="--d:1.2s">चलो प्रैक्टिस करें: मरीज़ पूछे "कमरा कब साफ़ होगा?" आप क्या कहेंगे?<div class="btn">🎤 बोलकर जवाब दें</div></div>
    </div></div></div><div class="pp-cap">Saathi · a coach in their pocket</div></div>
  <div><div class="pp" style="--d:.3s"><div class="scr">
    <div class="sb"></div>
    <div class="ah"><b>Reels for you</b><div class="row"><span>Hospital</span><span>Safety</span><span>Grooming</span></div></div>
    <div class="bd">
      <div class="thumb" style="--c1:#1B2D93;--c2:#2142B9">Ready Before They Arrive · 1:10</div>
      <div class="thumb" style="--c1:#0d7d85;--c2:#18a7b0">Germs Travel · 0:55</div>
      <div class="thumb" style="--c1:#3b2a8a;--c2:#5b48c2">Spot the Hazard · 1:20</div>
    </div>
  </div></div><div class="pp-cap">Reels · picked for their site and role</div></div>
</div>`

const probSlide = (id: string, theme: 'light' | 'dark' | 'darker', title: string, kick: string, h2: string, problem: string, fixes: [string, string][], proof: [string, string], vis: string) => plainSlide(id, theme, title, kick, h2, `
  <div class="tel-body" style="grid-template-columns:minmax(0,.44fr) minmax(0,.56fr);align-items:center">
    <div class="tel-say">
      <div class="blk"><div class="lbl">On the ground today</div><div class="tq">${problem}</div></div>
      <div class="blk"><div class="lbl">What changes for your people</div><ul>${fixes.map(([b, t]) => `<li><span class="ic" style="font-size:13px;font-weight:800;color:#F39200">✓</span><span><b>${b}</b> ${t}</span></li>`).join('')}</ul></div>
      <div class="proof"><div class="n">${proof[0]}</div><p>${proof[1]}</p></div>
    </div>
    <div class="tel-vis">${vis}</div>
  </div>`)

const logo = (src: string | null, word: string, color = '#111827') => src ? `<img src="${src}" alt="${word}"/>` : `<span class="wm" style="color:${color}">${word}</span>`

export const dtssLmsSlides: SlideDef[] = [
  {
    id: 'ds1', theme: 'darker', title: 'Cover',
    html: `${dtssCss}${css}
    <div class="glow"></div>
    <div class="tel center" style="padding-top:0">
      <div class="tel-coverwrap">
        <div class="tel-covertext">
          <span class="kick">BetterPlace × DTSS and SMC · SIS Group · November 2026</span>
          <h1>75,000 people, many languages, thousands of sites. <em>Every one of them good at the job.</em></h1>
          <p>How your trainers reach every person on every shift, in the language they think in, and how you prove it to every customer.</p>
          <div class="tel-nums" style="margin-top:24px">
            <div><div class="n">1M<em>+</em></div><div class="l">Frontline people learning on our app every month</div></div>
            <div><div class="n">35<em>+</em></div><div class="l">Languages, voice and text</div></div>
            <div><div class="n">88%</div><div class="l">Completion, against ~25% in the industry</div></div>
          </div>
        </div>
        <div style="display:flex;justify-content:center">${enforcePhones.replace('<div class="pp-row">', '<div class="pp-row" style="transform:scale(.92)">').split('<div><div class="pp" style="--d:.3s">')[0]}</div></div>
      </div>
    </div>`,
  },

  plainSlide('ds1b', 'darker', 'Who we are',
    'BetterPlace · India’s frontline learning platform',
    'Over 10 lakh frontline workers learn on BetterPlace every month. <em>Across India’s largest employers and every major industry.</em>',
    `<div>
      <div class="tel-stakes">
        <div class="st" style="--d:.1s"><div class="n">1M<em>+</em></div><div class="l">frontline users every month</div><p>Housekeepers, guards, store staff, delivery partners, drivers and plant workers, on their own phones.</p><div class="src">Monthly active users</div></div>
        <div class="st" style="--d:.2s"><div class="n">1,000<em>+</em></div><div class="l">companies on the platform</div><p>Retail, energy, facility management, logistics, quick commerce, insurance and manufacturing.</p><div class="src">Enterprise clients</div></div>
        <div class="st" style="--d:.3s"><div class="n">1.2L</div><div class="l">monthly users at Meesho alone</div><p>Their entire delivery fleet trained on our app. <b>Bharat Petroleum:</b> about 45,000 people.</p><div class="src">Client deployments</div></div>
        <div class="st" style="--d:.4s"><div class="n">35<em>+</em></div><div class="l">Indian languages, voice and text</div><p>Every reel, quiz and screen in the language your people think in.</p><div class="src">On the platform today</div></div>
      </div>
      <div class="tel-band ghost" style="margin-top:14px"><span class="bl">Facility teams already</span><p><b>JLL</b> trains the facility staff it deploys to clients like Accenture and Google on BetterPlace. <b>Reliance</b> trains its housekeeping and facility staff across manufacturing.</p></div>
    </div>`, { glow: true }),

  plainSlide('ds2', 'light', 'Your trainer’s reality',
    'The problem · seen from the ground, through one of your trainers',
    'One trainer, forty sites, six languages. <em>By the time they reach site forty, site one has new joiners.</em>',
    `<div class="persona">
      <div class="who"><div class="av">RK</div><h4>Rajesh, regional trainer</h4><div class="r">North region · housekeeping and safety · travels by metro and bus</div>
        <div class="k"><div><b>40</b><span>customer sites</span></div><div><b>1,800</b><span>people to train</span></div><div><b>6</b><span>languages in his batches</span></div><div><b>3</b><span>shifts he never sees all of</span></div></div></div>
      <div class="qs">
        ${[
          ['Reach', 'Half the night shift has never met me. New joiners start before I can get to their site.'],
          ['Language', 'I teach in Hindi. Half my batch thinks in Bengali or Odia. They nod, and they don’t follow.'],
          ['Attention', 'When a hospital changes a rule, I have no way to make sure everyone sees it today.'],
          ['Practice', 'They understand in class. Two weeks later on the floor, they mix the chemicals anyway.'],
          ['Proof', 'The customer asks who is trained. All I have is a signed sheet and my word.'],
          ['Churn', 'I train a batch, a third of them leave, and I start again. Nobody tells them where this job can go.'],
        ].map(([n, p], i) => `<div class="q" style="--d:${0.08 + i * 0.07}s"><div class="n">${n}</div><p>${p}</p></div>`).join('')}
      </div>
    </div>
    <div class="foot" style="margin-top:10px">Rajesh is a composite drawn from how facility training works on the ground. The next slides answer each problem in turn.</div>`),

  plainSlide('ds2b', 'darker', 'What is at stake',
    'Why it matters to SIS · the business behind every training session',
    'Training is not an HR line item here. <em>It is how you keep customers, pass audits and grow supervisors.</em>',
    `<div class="tel-stakes">
      <div class="st" style="--d:.15s"><div class="n">~95%</div><div class="l">customer retention, as SIS reports it</div><p>Renewals ride on what a customer sees on the floor. A trained, certified team on their premises is the easiest renewal argument you have.</p><div class="src">SIS facility management, 2023</div></div>
      <div class="st" style="--d:.3s"><div class="n">Every year</div><div class="l">hospital staff must be trained, with records</div><p>Bio-medical waste rules require training at joining and every year; NABH auditors ask for housekeeping training records, even when outsourced.</p><div class="src">BMW Rules 2016 · NABH</div></div>
      <div class="st" style="--d:.45s"><div class="n">Thin margins</div><div class="l">every hour off the floor costs</div><p>Classroom days pull people off billable shifts. Two minutes on a phone before a shift does not.</p><div class="src">Facility services economics</div></div>
      <div class="st" style="--d:.6s"><div class="n">Next role</div><div class="l">supervisors from within</div><p>Knowing which housekeepers are ready to lead fills supervisor roles faster and gives people a reason to stay.</p><div class="src">Your career-path ask</div></div>
    </div>
    <div class="tel-band ghost" style="margin-top:14px"><span class="bl">Fits what you run</span><p>Works alongside your onboarding app, ERP, e-attendance and M-trainer: we take who joined and where they work, and send back who is trained.</p></div>`, { glow: true }),

  probSlide('ds3', 'dark', 'Language',
    'Problem 1 · language',
    'People learn in the language they think in. <em>So every reel speaks it, in voice and in words.</em>',
    'Training is in Hindi or English. A Bengali-speaking housekeeper nods along, understands half, and is too shy to ask.',
    [['One upload, every language.', 'An SOP or a video becomes Hindi, Bengali, Tamil, Odia and more in under 15 minutes, with a natural voice, not just subtitles.'],
     ['They choose.', 'Each person picks their language once; the app, the reels and the questions all follow.'],
     ['Pictures over paragraphs.', 'Picture questions and voice for people who read little.']],
    ['35+', 'languages on the platform. <b>Reliance Retail</b> trains in 14 languages across 18,000+ stores.'],
    langPhone),

  probSlide('ds4', 'light', 'Attention',
    'Problem 2 · attention',
    'When something matters, <em>it is the first thing they see when they open the app.</em>',
    'A hospital changes its ICU rule on Friday. By Monday, a third of the shift still hasn’t heard.',
    [['Enforcement.', 'A compulsory check pops up over everything the moment they open the app, and stays until it is done.'],
     ['Announcements.', 'A site rule, a recognition or a reminder pinned at the top of home, for one site or all 75,000.'],
     ['Before the shift.', 'Set it to appear before they start at a site, so nobody walks in untrained.']],
    ['100%', 'of the target group sees an enforced item on their next app open. Nothing to scroll past.'],
    enforcePhones),

  probSlide('ds5', 'dark', 'Reach and nudges',
    'Problem 3 · reach',
    'They don’t need to remember to learn. <em>We remind them on WhatsApp, where they already are.</em>',
    'An app link sent once and forgotten. The trainer chases people on the phone, one supervisor at a time.',
    [['WhatsApp and push.', 'A one-minute reel on WhatsApp in their language, push reminders timed before the shift.'],
     ['A cadence, not spam.', 'You set when and how often; it stops the moment they finish.'],
     ['Then the supervisor.', 'Still pending? The site supervisor gets the names, then the area manager.']],
    ['+65%', 'voluntary participation across our clients when nudges and recognition run together.'],
    nudgePhones),

  probSlide('ds6', 'light', 'Practice between visits',
    'Problem 4 · practice between visits',
    'The trainer visits once a month. <em>A coach in their pocket keeps the lesson alive in between.</em>',
    'They understand in class. Two weeks later, under pressure on the floor, they fall back to old habits.',
    [['Saathi, a coach that speaks Hindi.', 'Ask by voice “which mop in the ICU?” and get the answer from your SOP, with the page.'],
     ['Practice, not just answers.', 'Short role-plays with a patient or a guest, spoken and scored.'],
     ['Reels for their site.', 'A hospital housekeeper sees hospital reels; a mall guard sees mall reels.']],
    ['100M+', 'AI interactions on the platform, in Indian languages, voice and text.'],
    saathiPhone),

  probSlide('ds7', 'dark', 'Proof on site',
    'Problem 5 · proof',
    'Every session proven, <em>and every customer shown that their people are trained.</em>',
    'A signed sheet is the only proof that training happened. Whether anyone learned is a guess.',
    [['Attendance at the site.', 'The trainer marks it, or people scan a QR; works with no signal and syncs later.'],
     ['A quiz on every phone.', 'Two minutes after the session: proof of training and of what landed.'],
     ['Straight to the customer report.', 'Who is certified for that site, refreshed every month.']],
    ['QR', 'check-in and post-session quizzes are live on the platform today.'],
    trainerPhones),

  plainSlide('ds7v', 'dark', 'Video generation',
    'Problem 6 · content people relate to · AI video generation',
    'Your SOPs become videos your people recognise themselves in. <em>Your staff, your uniform, your sites, in their language.</em>',
    `<div class="tel-body" style="grid-template-columns:minmax(0,.44fr) minmax(0,.56fr);align-items:center">
      <div class="tel-say">
        <div class="blk"><div class="lbl">On the ground today</div><div class="tq">Training videos are long, in English, and show people who don’t look like your staff. Nobody relates, nobody finishes.</div></div>
        <div class="blk"><div class="lbl">What changes</div><ul>
          <li><span class="ic" style="font-size:13px;font-weight:800;color:#F39200">✓</span><span><b>Script to video.</b> An SOP, a SCORM file or five lines become a 1–3 minute video, with questions at intervals.</span></li>
          <li><span class="ic" style="font-size:13px;font-weight:800;color:#F39200">✓</span><span><b>Three styles.</b> 2D animation for scale, 3D, or realistic video with DTSS and SMC staff in uniform.</span></li>
          <li><span class="ic" style="font-size:13px;font-weight:800;color:#F39200">✓</span><span><b>Every language from one video.</b> Voice and captions in Hindi, Bengali, Tamil and more.</span></li>
        </ul></div>
        <div class="proof"><div class="n">Already made</div><p>AIDET and Hand Hygiene from SMC’s scripts, your vacuum-cleaner SCORM cut into lessons, and a realistic first cut with SMC staff.</p></div>
      </div>
      <div class="tel-vis"><div class="dt-reels"><div class="ph"><img src="assets/product/dtss/reel-housekeeping-role.jpg" alt="DTSS AI video"/></div>
        <div class="tm" style="margin:0">${bar('skillBetter · AI video studio · DTSS', 'Live')}<div class="tm-body"><div class="tm-rows">
          ${row('1 · Script', 'From your SOP · your SME edits it', 'Approved', 'g')}
          ${row('2 · Style', 'Realistic · SMC uniform · hospital ward', 'Chosen', 'b')}
          ${row('3 · Video', '2 min 10 s · 3 questions in between', 'Ready', 'g')}
          ${row('4 · Languages', 'Hindi, Bengali, Tamil, Odia', 'Voicing', 'y')}
          ${row('5 · Publish', 'As a reel and a course, to hospital staff', 'Scheduled', 'g')}
        </div></div></div></div></div>
    </div>`),

  pick('dt4b'),
  pick('dt4c'),

  plainSlide('ds8', 'darker', 'Built for Bharat',
    'Why BetterPlace · built for Bharat, and already used by Bharat',
    'Built for the people who keep India’s buildings, stores and roads running. <em>Not adapted for them. Built for them.</em>',
    `<div>
      <div class="bharat">
        ${[
          ['🗣️', 'Their language first', '35+ Indian languages in voice and text. They choose, everything follows.'],
          ['📱', 'Any phone, little data', 'Runs on entry-level Android phones. Download at the site office, learn offline on the bus.'],
          ['🎬', 'Reels, not lectures', 'One idea in a minute or two. The format they already watch every day.'],
          ['🖼️', 'Pictures and voice', 'Picture questions and spoken answers for people who read little.'],
          ['📌', 'Enforcement', 'What matters pops up over everything, until it is done.'],
          ['📣', 'Announcements', 'Site rules, recognition and news at the top of home, for one site or all.'],
          ['💬', 'Nudges that work', 'WhatsApp, push and SMS on a cadence you set, then the supervisor.'],
          ['🏅', 'Recognition', 'Stars, badges and employee of the month. Being noticed keeps people.'],
        ].map(([ic, h, p], i) => `<div class="t" style="--d:${0.06 + i * 0.05}s"><div class="ic">${ic}</div><h4>${h}</h4><p>${p}</p></div>`).join('')}
      </div>
      <div class="bharat-who"><span class="l">Used every month by</span><span>delivery partners</span><span>store associates</span><span>housekeepers</span><span>security guards</span><span>drivers and fleets</span><span>field sales</span><span>factory operators</span></div>
    </div>`, { glow: true }),

  plainSlide('ds9', 'light', 'Who learns with us',
    'Who learns with us · the frontline of India’s largest employers',
    'From refineries to delivery fleets to facility teams, <em>their frontline learns on BetterPlace.</em>',
    `<div class="wall">
      ${[
        [`<img src="assets/logo/t-reliance.png" alt="" style="max-height:40px"/><span class="wm" style="color:#1d3c6e;margin-left:8px">Reliance</span>`, 'Retail · O2C · manufacturing', 'Store associates, and housekeeping and facility staff across manufacturing.'],
        [logo('assets/logo/t-jll.png', 'JLL'), 'Facility management', 'Safety training for vendor and sub-vendor staff across client sites.'],
        [logo('assets/logo/t-bpcl.png', 'Bharat Petroleum'), 'Energy · refineries', 'Contract workforce across refineries, on the same platform.'],
        [logo(null, 'zepto', '#5b1a99'), 'Quick commerce', 'Riders deployed only after training is complete.'],
        [logo('assets/logo/t-accenture.png', 'Accenture'), 'Drivers and fleets', 'Training for drivers and fleet staff.'],
        [logo('assets/logo/c-meesho.svg', 'Meesho'), 'Delivery partners', 'Delivery partners trained end to end.'],
        [logo(null, 'EJADAH', '#0b3d5c'), 'Dubai Holding · facilities', 'Training for their entire staff.'],
        [logo('assets/logo/c-iffco-tokio.svg', 'IFFCO Tokio'), 'Insurance', 'India’s largest composite insurer; ~30,000 sales staff coached by AI.'],
        [logo(null, 'purplle', '#d61f69'), 'Beauty retail', 'Retail sales associates in stores.'],
        [`<span class="wm" style="color:#111">amazon</span><img src="assets/logo/t-amazon.png" alt="" style="max-height:30px;margin-left:6px"/>`, 'Logistics', 'GSF Learning Academy across two business units.'],
      ].map(([l, w, p], i) => `<div class="b" style="--d:${0.04 + i * 0.04}s"><div class="lg">${l}</div><div class="w">${w}</div><p>${p}</p></div>`).join('')}
    </div>
    <div class="foot" style="margin-top:10px">Logos shown with the work we do for each. Outcomes on the next slides are client-reported.</div>`),

  plainSlide('ds10', 'light', 'Case studies · facility and frontline',
    'Case studies · 1 of 2 · facility teams at scale',
    'The two closest to DTSS and SMC: <em>a facility manager’s vendor network, and a retailer’s entire frontline.</em>',
    `<div class="cs2">
      <div class="cs" style="--d:.1s"><div class="hd"><img src="assets/logo/t-jll.png" alt="JLL"/><div class="ind">Facility management<br/>vendors and sub-vendors</div></div>
        <h4>One safety curriculum, delivered through every vendor to every person on site</h4>
        <div class="rows">
          <div class="rw"><b>Challenge</b><span>Thousands of staff employed by vendors and sub-vendors, across client sites, in many languages. JLL answers to the client for all of them.</span></div>
          <div class="rw"><b>What we did</b><span>An HSSE playlist in several languages, distributed by vendor; each person can belong to JLL, the client and their vendor at once, and each sees only their own people.</span></div>
          <div class="rw"><b>Reported</b><span>Weekly analytics by vendor and site to the JLL team: who received it, who started, who finished.</span></div>
        </div>
        <div class="nums"><div><b>8,500+</b><span>vendor and sub-vendor staff reached</span></div><div><b>Weekly</b><span>vendor-wise report</span></div></div>
        <div class="fm">Closest to your model: you are the vendor; your customer wants the proof.</div></div>
      <div class="cs" style="--d:.25s"><div class="hd"><span style="display:flex;align-items:center;gap:8px"><img src="assets/logo/t-reliance.png" alt=""/><span style="font-family:var(--disp);font-weight:800;font-size:1.3rem;color:#1d3c6e">Reliance</span></span><div class="ind">Retail · manufacturing<br/>stores and plants</div></div>
        <h4>India’s largest retailer’s frontline, trained in their own languages</h4>
        <div class="rows">
          <div class="rw"><b>Challenge</b><span>Hundreds of thousands of store associates and facility staff, high churn, 14 languages, and training that never reached the floor.</span></div>
          <div class="rw"><b>What we did</b><span>Role-based paths on the phone, reels and quizzes in 14 languages, mandatory items enforced, housekeeping and facility staff across manufacturing included.</span></div>
          <div class="rw"><b>Result</b><span>Live in 8 weeks across 18,000+ stores; training cost down by more than 60%.</span></div>
        </div>
        <div class="nums"><div><b>500K+</b><span>associates trained</span></div><div><b>14</b><span>languages</span></div><div><b>−60%</b><span>training cost</span></div></div></div>
    </div>`),

  plainSlide('ds11', 'light', 'Case studies · logistics and delivery',
    'Case studies · 2 of 2 · high-churn frontline at national scale',
    'Two workforces that turn over as fast as yours, <em>and still finish their training.</em>',
    `<div class="cs2">
      <div class="cs" style="--d:.1s"><div class="hd"><span style="font-family:var(--disp);font-weight:800;font-size:1.4rem;color:#111">amazon</span><div class="ind">Logistics<br/>GSF Learning Academy</div></div>
        <h4>Audits and training that warehouse and delivery teams actually complete</h4>
        <div class="rows">
          <div class="rw"><b>Challenge</b><span>Two business units, multiple languages, and completion on a traditional LMS below 30%.</span></div>
          <div class="rw"><b>What we did</b><span>222 custom audits and role-aware courses, triggered by events in the job, on the phone.</span></div>
          <div class="rw"><b>Result</b><span>91% completion, three times the industry norm.</span></div>
        </div>
        <div class="nums"><div><b>91%</b><span>completion</span></div><div><b>222</b><span>custom audits</span></div><div><b>2</b><span>business units</span></div></div></div>
      <div class="cs" style="--d:.25s"><div class="hd"><img src="assets/logo/c-meesho.svg" alt="Meesho"/><div class="ind">Social commerce<br/>delivery partners</div></div>
        <h4>Delivery partners trained end to end, and coming back every week</h4>
        <div class="rows">
          <div class="rw"><b>Challenge</b><span>A 1.5 lakh workforce spread across the country, with little reason to open a training app.</span></div>
          <div class="rw"><b>What we did</b><span>Reels, peer videos and gamified challenges, in their languages, built into their week.</span></div>
          <div class="rw"><b>Result</b><span>85% completion and +19.7% week-on-week retention; 2M+ resellers trained.</span></div>
        </div>
        <div class="nums"><div><b>85%</b><span>completion</span></div><div><b>+19.7%</b><span>weekly retention</span></div><div><b>1.5L</b><span>workforce</span></div></div></div>
    </div>
    <div class="foot" style="margin-top:10px">Outcomes are client-reported.</div>`),

  pick('dt2b'),
  pick('dt8'),

  plainSlide('ds12', 'light', 'Reports your customers see',
    'Reports · what your leadership and your customers see',
    'Every customer sees that the people on their premises are trained. <em>Leadership sees every site at once.</em>',
    `<div class="tel-body" style="grid-template-columns:minmax(0,.4fr) minmax(0,.6fr);align-items:center">
      <div class="tel-say"><div class="blk"><div class="lbl">Five reports, on live data</div><ul>
        <li><span class="ic" style="color:#F39200;font-weight:800">✓</span><span><b>Leadership overview.</b> Every site ranked by compulsory training, with the ones to push.</span></li>
        <li><span class="ic" style="color:#F39200;font-weight:800">✓</span><span><b>Customer report.</b> Staff deployed, certified for that site, trainer visits, refreshers.</span></li>
        <li><span class="ic" style="color:#F39200;font-weight:800">✓</span><span><b>Trainers.</b> Who taught what, where, and how well it landed.</span></li>
        <li><span class="ic" style="color:#F39200;font-weight:800">✓</span><span><b>Employees and career.</b> Who to push, who is cleared to deploy, who is ready to move up.</span></li>
      </ul></div><div class="proof"><div class="n">Live</div><p>We open the dashboard next, with DTSS and SMC filters.</p></div></div>
      <div class="tel-vis">${custReport}</div>
    </div>`),

  pick('dt20'),

  plainSlide('ds13', 'darker', 'More the platform does',
    'Appendix · the rest of the platform, for when you want the detail',
    'Everything else you asked about, <em>one slide each, after this.</em>',
    `<div class="appx">
      ${[['Your brief, point by point', 'All nine areas, live or configured'], ['Credentials', 'Ten years, 25M+ profiles'], ['How it comes together', 'Join, learn, train, prove'], ['Two users', 'Trainer and employee'], ['Integration', 'Onboarding app and ERP, both ways'], ['Assignment', 'Role, site and industry rules'], ['AI content', 'Reels, videos, translation'], ['Content governance', 'Your SMEs approve'], ['Learner app', 'Offline, any phone'], ['Trainer schedules', 'Sites and sessions'], ['No signal, shared phones', 'Trainer flow'], ['Certification', 'Tests and certificates'], ['Gamification and engagement', 'Stars, badges, teams'], ['Nudges and escalation', 'The full ladder'], ['Who sees what', 'Access by role'], ['AI agents and status', 'Saathi, what is live']].map(([b, t]) => `<div><b>${b}</b>${t}</div>`).join('')}
    </div>`, { glow: true }),

  ...['dt2', 'cmA', 'dt3', 'dt4', 'dt5', 'dt6', 'dt7', 'dt7b', 'dt9', 'dt10', 'dt11', 'dt11b', 'dt12', 'dt13', 'dt13b', 'dt14', 'dt15', 'dt15b', 'dt16', 'dt17', 'dt18', 'dt19'].map(pick),
]

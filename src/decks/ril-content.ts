import type { SlideDef } from '../lib/types'
import { fi, icons } from './html'

// Reliance O2C · skilling content pitch and commercials. Built from the Skilling_Content Deck
// (credentials, library playlists, tailor-made samples, add-on rates) with the new per-minute
// price list: AI 2D simple ₹500, AI 2D advanced ₹900, AI 3D ₹2,100, camera-shot ₹4,500,
// SCORM ₹5,500. Software ₹5 per user per month, aligned with RIL procurement, PO in place.
// Video placeholders carry a slot id; Anuj drops the links in. Budget scenario is illustrative.

const vid = (slot: string, title: string, sub: string, tag: string, sm = false, href = '') =>
  `<${href ? `a href="${href}" target="_blank" rel="noopener"` : 'div'} class="vidph${sm ? ' sm' : ''}" data-slot="${slot}"><span class="tag">${tag}</span><div><div class="play"></div><div class="vt">${title}</div><div class="vs">${sub}</div></div><span class="slot">${href ? 'opens sample' : 'video link · slot ' + slot}</span></${href ? 'a' : 'div'}>`

const lc = (href: string, title: string, sub: string, em: string, pc: string) =>
  `<a class="linkcard" href="${href}" target="_blank" rel="noopener" style="--pc:${pc}"><b>${title}</b><span>${sub}</span><em>${em} ↗</em></a>`

export const rilContentSlides: SlideDef[] = [
  {
    id: 'rc1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">For Reliance Industries · O2C · skilling content and commercials</span>
      <h1 class="rise" style="animation-delay:.15s;font-size:clamp(30px,3.6vw,54px);">Every trade, every skill, every language. <span style="color:var(--yellow)">Content built for the people who run your plants.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Two hundred and fifty trades, five skills each, across the O2C sites. This deck shows how we produce that content at the quality each skill needs, from AI-generated animation to camera crews inside your facilities, what each minute costs, and the software it runs on, which is already on a Reliance purchase order.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:22px;">
        <div class="stat"><div class="n">250</div><div class="l">Trades in scope · 5 skills each</div></div>
        <div class="stat"><div class="n">₹500</div><div class="l">Per minute, from · AI 2D animation</div></div>
        <div class="stat"><div class="n">35+</div><div class="l">Languages · 12+ with human voice</div></div>
        <div class="stat"><div class="n">₹5</div><div class="l">Per user per month · PO in place</div></div>
      </div>
      <div class="mdcover ghost">O2C</div>
    </div>`,
  },
  {
    id: 'rc2', theme: 'light', title: 'The scale of the need',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">What 250 trades actually means in content</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:46ch;">About 1,250 skills to teach. <span style="color:var(--navy)">Each needs a short module a shift worker will finish.</span></h2>
      <div class="flowstrip rise" style="animation-delay:.2s;margin-top:14px;">
        <span class="fc">250 trades<small>welder · fitter · rigger · operator…</small></span><span class="fa">×</span>
        <span class="fc">5 skills each<small>procedure · safety · equipment · quality · conduct</small></span><span class="fa">=</span>
        <span class="fc hot">~1,250 skill modules<small>one video + one assessment each</small></span><span class="fa">×</span>
        <span class="fc">~3 minutes<small>the length a worker finishes on a phone</small></span><span class="fa">=</span>
        <span class="fc gold">~3,750 minutes<small>of finished content, in the first language</small></span>
      </div>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:16px;animation-delay:.4s">
        <div class="case" style="--pc:#D0271D"><div class="ch"><span class="cn">Why it cannot all be shot on camera</span></div><ul class="cl"><li>3,750 minutes of camera production is years of shoot days across sites</li><li>A procedure changes; a shot video is re-shot, an animation is re-rendered</li><li>Many skills are the same across sites; the difference is the language</li></ul></div>
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Why it cannot all be AI either</span></div><ul class="cl"><li>Confined-space entry, hot work and lifting need the real equipment, the real site, a real person</li><li>Certification content for audit needs SCORM packaging and tracked interaction</li><li>Your SMEs have to approve every frame that goes to a worker</li></ul></div>
        <div class="case" style="--pc:#1d7a45"><div class="ch"><span class="cn">So the answer is a mix</span></div><ul class="cl"><li>AI animation for the volume: fast, cheap to change, re-rendered per language</li><li>Camera crews at your facilities for the skills where realism matters</li><li>SCORM for what the auditor will ask about</li><li>One pipeline, your SMEs in the loop, one platform to deliver it</li></ul></div>
      </div>
    </div>`,
  },
  {
    id: 'rc3', theme: 'dark', title: 'Credentials',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Who you would be working with · content as a professional service</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:46ch;">A decade of making frontline training people finish. <span style="color:var(--yellow)">Including five lakh of your own retail associates.</span></h2>
      <div class="modelrow rise" style="animation-delay:.2s;margin-top:14px;grid-template-columns:repeat(6,1fr);">
        <div class="mstat"><div class="n">1 lakh+</div><div class="l">Courses created</div></div>
        <div class="mstat"><div class="n">10,000</div><div class="l">Minutes of content recorded a year</div></div>
        <div class="mstat"><div class="n">50+</div><div class="l">Enterprises on co-created content</div></div>
        <div class="mstat"><div class="n">250+</div><div class="l">Library micro-courses · rated 4.3 / 5</div></div>
        <div class="mstat"><div class="n">12+</div><div class="l">Languages with human voice-over</div></div>
        <div class="mstat"><div class="n">88%</div><div class="l">Completion on our LMS · 25% on a typical one</div></div>
      </div>
      <div class="cases" style="grid-template-columns:repeat(3,1fr);margin-top:16px;">
        <div class="case rise" style="--pc:#FFC401;animation-delay:.35s"><div class="ch"><span class="cn">Reliance Retail · Samarth</span><span class="ct">The programme you already know</span></div><ul class="cl"><li>500,000+ associates trained in 14 languages</li><li>Live in eight weeks across 18,000+ stores</li><li>60%+ reduction in training cost</li><li>4.7 stars on the Play Store, 1.7 lakh+ downloads</li></ul></div>
        <div class="case rise" style="--pc:#39D2E8;animation-delay:.43s"><div class="ch"><span class="cn">Hindalco · E-Karyashala</span><span class="ct">Shop floor · Aditya Birla Group</span></div><ul class="cl"><li>60+ technical modules, 50+ assessments</li><li>3× training coverage, 1,000+ workers upskilled</li><li>"Turns customer feedback into reality by co-creating solutions." Dr Mayuk Dasgupta, Hindalco</li></ul></div>
        <div class="case rise" style="--pc:#3BE8B0;animation-delay:.51s"><div class="ch"><span class="cn">Amazon · Zepto · Meesho</span><span class="ct">Scale and completion</span></div><ul class="cl"><li>Amazon GSF Learning Academy: 91% completion against under 30% industry</li><li>Zepto: order delivery gated on training completion for 15,000 riders</li><li>Meesho: 2M+ resellers trained, 85% completion</li></ul></div>
      </div>
    </div>`,
  },
  {
    id: 'rc4', theme: 'light', title: 'How content gets made',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The production pipeline · AI does the volume, your SMEs approve every module</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:48ch;">From a trade's SOP to an approved module in a worker's language. <span style="color:var(--navy)">Nothing goes live without a Reliance sign-off.</span></h2>
      <div class="flowstrip rise" style="animation-delay:.2s;margin-top:14px;">
        <span class="fc">1 · Brief<small>SOP, photos, the skill's pass criteria</small></span><span class="fa">→</span>
        <span class="fc">2 · Script<small>our instructional designer · 3-minute structure</small></span><span class="fa">→</span>
        <span class="fc hot">3 · SME review<small>your trade expert corrects the script</small></span><span class="fa">→</span>
        <span class="fc">4 · Produce<small>AI animation · 3D · camera · SCORM</small></span><span class="fa">→</span>
        <span class="fc hot">5 · Approve<small>Reliance L&amp;D and safety sign off</small></span><span class="fa">→</span>
        <span class="fc">6 · Translate<small>AI into 35+ languages · human voice where chosen</small></span><span class="fa">→</span>
        <span class="fc gold">7 · Publish<small>assessment attached · assigned by trade</small></span>
      </div>
      <div class="capgrid rise" style="animation-delay:.4s;grid-template-columns:repeat(4,1fr);margin-top:16px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.bot}</svg></span><h4>AI inside, people in charge</h4><p>Scripts, storyboards, animation and voice are generated; an instructional designer and your SME review and change them before anything renders.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.lang}</svg></span><h4>One module, every language</h4><p>Approved once in the base language, then translated as people speak, with audio. Human voice artists for the languages you choose.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.check}</svg></span><h4>Assessment with every module</h4><p>Eight to ten questions per skill, pass criteria set by your SME, proctoring available where certification matters.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.repeat}</svg></span><h4>Changes are cheap</h4><p>An SOP revision means a script edit and a re-render for animation, not a new shoot. Versions are tracked per module.</p></div>
      </div>
    </div>`,
  },
  {
    id: 'rc5', theme: 'light', title: 'Five formats',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Five formats · one pipeline · pick per skill, not per programme</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:48ch;">Three AI-generated formats for the volume, <span style="color:var(--navy)">two human-made formats where realism and certification matter.</span></h2>
      <div class="compmap" style="grid-template-columns:repeat(5,1fr);margin-top:14px;">
        <div class="compcell" style="--cc:#39D2E8;--d:.2s"><div class="act">AI · ₹500 / min</div><h4>2D simple animation</h4><p>Characters, icons and motion text with voice-over. Awareness, conduct, basic procedure steps.</p><span class="who ok">e.g. PPE check</span></div>
        <div class="compcell" style="--cc:#39D2E8;--d:.28s"><div class="act">AI · ₹900 / min</div><h4>2D advanced animation</h4><p>Detailed equipment drawings, cutaways, sequenced procedures, on-screen call-outs.</p><span class="who ok">e.g. valve line-up</span></div>
        <div class="compcell" style="--cc:#39D2E8;--d:.36s"><div class="act">AI · ₹2,100 / min</div><h4>3D animation</h4><p>Modelled equipment and plant spaces, camera moves inside the unit, highest visual fidelity without a crew on site.</p><span class="who ok">e.g. confined space</span></div>
        <div class="compcell" style="--cc:#FFC401;--d:.44s"><div class="act">Human · ₹4,500 / min</div><h4>Camera-shot at your facilities</h4><p>Our crew films the real equipment, the real site and your own expert, edited with graphics and 3D inserts.</p><span class="who ok">e.g. hot-work permit</span></div>
        <div class="compcell" style="--cc:#FFC401;--d:.52s"><div class="act">Human · ₹5,500 / min</div><h4>SCORM packages</h4><p>Interactive modules built on Storyline: branching, drag-and-drop, tracked scoring. For certification and audit.</p><span class="who ok">e.g. LOTO certification</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.6s">Every format includes the custom script, AI voice-over, an eight-to-ten question assessment and set-up on the platform. Human voice-over, translation and external SMEs are priced separately on slide 12. Sample videos for each format follow.</div>
    </div>`,
  },
  {
    id: 'rc6', theme: 'dark', title: 'AI · 2D simple',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Format 1 · AI-generated · 2D simple animation · ₹500 per minute</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">The workhorse. <span style="color:var(--yellow)">Most of the 1,250 skills can be taught this way.</span></h2>
        <div class="featlist">
          ${fi(icons.play, 'What it looks like', 'Animated characters in your uniform, icons, motion text and a clear voice-over. A scene changes every few seconds so attention holds on a phone.', 0.22)}
          ${fi(icons.check, 'Best for', 'Awareness and conduct, PPE and housekeeping, basic sequences, do-and-don’t lists, policy and reporting procedures.', 0.3)}
          ${fi(icons.zap, 'Why it is ₹500', 'Script to first cut in days, not weeks. Re-rendered per language. A change to the SOP is a script edit, not a new production.', 0.38)}
          ${fi(icons.lang, 'Languages', 'Base language plus AI translation into any of 35+ languages with audio. Human voice artists as an add-on.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${vid('AI-2D-SIMPLE', 'Sample · 2D simple animation', 'an O2C skill in this format', 'AI · 2D simple')}
        <div class="mockcap" style="margin-top:10px;">Link to be added · one sample skill, Hindi and English, with its assessment</div>
      </div>
    </div>`,
  },
  {
    id: 'rc7', theme: 'dark', title: 'AI · 2D advanced',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Format 2 · AI-generated · 2D advanced animation · ₹900 per minute</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">When the worker needs to see the equipment, <span style="color:var(--yellow)">not a character pointing at it.</span></h2>
        <div class="featlist">
          ${fi(icons.layers, 'What it looks like', 'Detailed equipment drawings and cutaways, numbered procedure steps, call-outs on the exact component, tool and torque values on screen.', 0.22)}
          ${fi(icons.check, 'Best for', 'Equipment operation and maintenance sequences, start-up and shutdown, inspection checklists, quality checks with tolerances.', 0.3)}
          ${fi(icons.doc, 'What we need from Reliance', 'The SOP, drawings or photographs of the actual equipment, and an SME hour to correct the sequence. We draw the rest.', 0.38)}
          ${fi(icons.repeat, 'Reuse', 'The same pump, valve or exchanger drawn once is reused across every trade that touches it, so later modules cost less effort.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${vid('AI-2D-ADVANCED', 'Sample · 2D advanced animation', 'equipment cutaway and procedure', 'AI · 2D advanced')}
        <div class="mockcap" style="margin-top:10px;">Link to be added · one equipment procedure with on-screen call-outs</div>
      </div>
    </div>`,
  },
  {
    id: 'rc8', theme: 'dark', title: 'AI · 3D',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Format 3 · AI-generated · 3D animation · ₹2,100 per minute</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">Inside the vessel or up the column, <span style="color:var(--yellow)">without a camera crew there.</span></h2>
        <div class="featlist">
          ${fi(icons.cam, 'What it looks like', 'Modelled equipment and plant spaces with camera moves a crew could not make: inside a confined space, through a flange, along a flare line.', 0.22)}
          ${fi(icons.shield, 'Best for', 'Safety-critical procedures where the hazard has to be seen: confined-space entry, work at height, gas release scenarios, lifting plans, emergency response.', 0.3)}
          ${fi(icons.building, 'Site realism', 'Built from your drawings and photographs so the unit on screen is the unit the worker will stand in. Site-specific variants from the same model.', 0.38)}
          ${fi(icons.clock, 'Lead time', 'Longer than 2D because the model is built first. Once a unit is modelled, every skill set in it moves at 2D speed.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${vid('AI-3D', 'Sample · 3D animation', 'safety-critical procedure, modelled unit', 'AI · 3D')}
        <div class="mockcap" style="margin-top:10px;">Link to be added · one safety-critical procedure inside a modelled unit</div>
      </div>
    </div>`,
  },
  {
    id: 'rc9', theme: 'light', title: 'Human-made formats',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Formats 4 and 5 · human-made · camera crews at your facilities and SCORM packages</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:48ch;">Where the real site and the real expert carry the lesson, <span style="color:var(--navy)">and where the auditor needs a tracked, interactive module.</span></h2>
      <div class="rise" style="animation-delay:.2s;display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:12px;">
        <div>
          ${vid('CAMERA-SHOT', 'Sample · camera-shot, edited', 'live shoot with graphics and 3D inserts', 'Human · ₹4,500 / min', true, 'https://drive.google.com/drive/folders/1Nc0lYHfLEciGb_qNwcx9N5qebAsRf6pg')}
          <ul class="cl" style="margin-top:10px;">
            <li><b>Shot inside Reliance facilities</b> by our crew, with your own expert on camera where you want him</li>
            <li>Edited with graphics and 3D inserts; raw footage handed over; shoot days per site in batches, travel at actuals</li>
            <li>Best for site-specific SOP walk-throughs, permit procedures, rigging and signalling</li>
          </ul>
        </div>
        <div>
          ${vid('SCORM', 'Sample · SCORM package', 'interactive, scored, tracked', 'Human · ₹5,500 / min', true, 'https://drive.google.com/drive/folders/1fdhO0PuxZi5kWySOo9LzIyCUki6JhWqa')}
          <ul class="cl" style="margin-top:10px;">
            <li><b>Built on Storyline</b>: branching scenarios, drag-and-drop, simulations, scored interactions</li>
            <li>Runs on our LMS or any SCORM system Reliance has; completion, score and attempts tracked per worker</li>
            <li>Best for certification that must be evidenced: permit-to-work, LOTO, emergency roles</li>
          </ul>
        </div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.5s">Frames link to existing samples; Reliance-specific ones replace them once the first modules are approved.</div>
    </div>`,
  },
  {
    id: 'rc10', theme: 'light', title: 'What we have already made',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Work you can watch now · tailor-made content and the library · links open the videos</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:48ch;">Four tailor-made examples <span style="color:var(--navy)">and a library of 250+ micro-courses across eight playlists.</span></h2>
      <div class="linkcards rise" style="animation-delay:.2s;margin-top:12px;">
        ${lc('http://drive.google.com/file/d/1gNkz4JVSEEAElUcpAJ1BNTnZ4RP4ASVA/view', 'Machine operators on SOPs', 'Content to train machine operators on standard operating procedures, shot and animated for a manufacturing client.', 'Watch sample', '#1B2D93')}
        ${lc('http://drive.google.com/file/d/1qrn06QoVnF0SiGJK3JqiCvIQLkadQdTr/view', 'Delivery partner app training', 'New features, processes and benefits explained to delivery partners in short animated modules.', 'Watch sample', '#D0271D')}
        ${lc('http://drive.google.com/file/d/1Xm97yUfOI_AqmV1-IJoP6jlzTXTZEqvz/view', 'Facility manager safety refresher', 'Refresher course for facility managers built from the client’s own safety manual.', 'Watch sample', '#1d7a45')}
        ${lc('http://drive.google.com/file/d/1DB9IwVHN1PhEJUKanpfA9RPE61VhbX_H/view', 'App training · home services, Dubai', 'App training videos for a Dubai-based home services provider, multilingual.', 'Watch sample', '#FF9518')}
      </div>
      <div class="linkcards rise" style="animation-delay:.4s;margin-top:12px;grid-template-columns:repeat(8,1fr);">
        ${lc('https://www.youtube.com/playlist?list=PL_0NHLYgHzhvwvEFviVTkSQeWeZKFT-Os', 'Manufacturing &amp; technicians', '', 'Playlist', '#1B2D93')}
        ${lc('https://www.youtube.com/playlist?list=PL_0NHLYgHzhuSLQrY3fpnZ2ShNnU61N66', 'Facility &amp; hospitality', '', 'Playlist', '#1B2D93')}
        ${lc('https://www.youtube.com/playlist?list=PL_0NHLYgHzhu8oXcQAaZgTKf6DBAOuEn9', 'Soft skills', '', 'Playlist', '#1B2D93')}
        ${lc('https://www.youtube.com/playlist?list=PL_0NHLYgHzhujD6fXr8Naq0E9Cn2IEwgi', 'Digital skills', '', 'Playlist', '#1B2D93')}
        ${lc('https://www.youtube.com/playlist?list=PL_0NHLYgHzhuwQPLFEzZYPUM_sp_cq9ka', 'Sales &amp; retail', '', 'Playlist', '#1B2D93')}
        ${lc('https://www.youtube.com/playlist?list=PL_0NHLYgHzhsuesSBH-6uUXmJkXOpD9_U', 'E-commerce &amp; delivery', '', 'Playlist', '#1B2D93')}
        ${lc('https://www.youtube.com/playlist?list=PL_0NHLYgHzhs4f4culyemSo-8FMBqBVjH', 'BPO &amp; customer support', '', 'Playlist', '#1B2D93')}
        ${lc('https://www.youtube.com/playlist?list=PL_0NHLYgHzhtP1UpKZAEyJl0eKMTlMtDi', 'Admin &amp; office', '', 'Playlist', '#1B2D93')}
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s">Library courses are role, skill and awareness modules of 10 to 15 minutes with assessments, built with SMEs from each industry. Rated 4.3 out of 5 by learners. Useful for the shared skills across trades, such as safety conduct, communication and digital basics.</div>
    </div>`,
  },
  {
    id: 'rc11', theme: 'light', title: 'Which format for which skill',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Matching format to skill · how we would classify the 1,250 with your L&amp;D and safety teams</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:48ch;">The format follows the risk and the realism the skill needs. <span style="color:var(--navy)">Most skills sit in the cheapest two rows.</span></h2>
      <table class="rtable" style="margin-top:12px;">
        <tr><th style="width:22%">Skill type</th><th>Examples across O2C trades</th><th style="width:18%">Format</th><th style="width:11%">Per minute</th><th style="width:14%">Illustrative share</th></tr>
        <tr><td style="white-space:normal"><b>Awareness and conduct</b></td><td style="white-space:normal">PPE discipline, housekeeping and 5S, reporting a near miss, behaviour in hazardous areas, hygiene, communication on shift</td><td>AI · 2D simple</td><td>₹500</td><td class="ok">~45%</td></tr>
        <tr><td style="white-space:normal"><b>Equipment and procedure</b></td><td style="white-space:normal">Pump and compressor start-up, valve line-ups, exchanger cleaning, instrument checks, welding parameters, painting prep</td><td>AI · 2D advanced</td><td>₹900</td><td class="ok">~30%</td></tr>
        <tr><td style="white-space:normal"><b>Safety-critical and spatial</b></td><td style="white-space:normal">Confined-space entry, work at height, gas release and evacuation, lifting plans, column and vessel internals</td><td>AI · 3D</td><td>₹2,100</td><td class="warn">~12%</td></tr>
        <tr><td style="white-space:normal"><b>Site-specific, person-led</b></td><td style="white-space:normal">Permit-to-work on a named unit, rigging signals with your crew, SOP walk-throughs where your expert should be on screen</td><td>Camera-shot</td><td>₹4,500</td><td class="warn">~7%</td></tr>
        <tr><td style="white-space:normal"><b>Certification for audit</b></td><td style="white-space:normal">Permit-to-work certification, LOTO, fire-team and emergency roles, anything a regulator or auditor will ask evidence for</td><td>SCORM</td><td>₹5,500</td><td class="warn">~6%</td></tr>
      </table>
      <div class="pmfoot rise" style="animation-delay:.5s">Shares are our starting assumption from comparable plant programmes. The classification is done trade by trade with your SMEs in the first two weeks, and the mix sets the budget on slide 14.</div>
    </div>`,
  },
  {
    id: 'rc12', theme: 'darker', title: 'Commercials · content',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Commercials · content · per finished minute, one-time cost, no licence fee on co-created content</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:48ch;">Five rates. <span style="color:var(--yellow)">Each includes script, voice-over, assessment and set-up.</span></h2>
      <div class="pricegrid">
        <div class="pricecard ai rise" style="animation-delay:.2s"><div class="pk">AI-generated</div><h4>2D simple animation</h4><div class="pr">₹500<small>/ min</small></div><ul><li>Custom script</li><li>AI voice-over</li><li>8–10 question assessment</li><li>Set-up on platform</li><li>Re-render per language</li></ul></div>
        <div class="pricecard ai rise" style="animation-delay:.28s"><div class="pk">AI-generated</div><h4>2D advanced animation</h4><div class="pr">₹900<small>/ min</small></div><ul><li>Everything in 2D simple</li><li>Equipment drawings and cutaways</li><li>Sequenced call-outs</li><li>Asset reuse across trades</li></ul></div>
        <div class="pricecard ai rise" style="animation-delay:.36s"><div class="pk">AI-generated · highest quality</div><h4>3D animation</h4><div class="pr">₹2,100<small>/ min</small></div><ul><li>Everything in 2D advanced</li><li>Modelled equipment and spaces</li><li>Camera moves inside the unit</li><li>Site variants from one model</li></ul></div>
        <div class="pricecard hu rise" style="animation-delay:.44s"><div class="pk">Human-generated</div><h4>Camera-shot, edited</h4><div class="pr">₹4,500<small>/ min</small></div><ul><li>Crew at Reliance facilities</li><li>Videography and equipment</li><li>Edit with graphics and 3D inserts</li><li>Raw footage handed over</li><li>Travel and stay at actuals</li></ul></div>
        <div class="pricecard hu rise" style="animation-delay:.52s"><div class="pk">Human-generated</div><h4>SCORM package</h4><div class="pr">₹5,500<small>/ min</small></div><ul><li>Built on Storyline</li><li>Interactions and scoring</li><li>Runs on any SCORM LMS</li><li>Assessment and set-up</li></ul></div>
      </div>
      <table class="rtable" style="margin-top:14px;">
        <tr><th>Add-on</th><th>Rate</th><th>Add-on</th><th>Rate</th></tr>
        <tr><td style="white-space:normal">Human voice-over, per artist, per Indian language · 0–15 min</td><td>₹4,500</td><td style="white-space:normal">Script translation, Indian language</td><td>₹2 per word</td></tr>
        <tr><td style="white-space:normal">Human voice-over · 15–30 min</td><td>₹7,500</td><td style="white-space:normal">Voice-over sync to an existing video</td><td>₹1,000 per min</td></tr>
        <tr><td style="white-space:normal">Human voice-over · 30–60 min</td><td>₹15,000</td><td style="white-space:normal">Voice-over sync with on-screen text change</td><td>50% of base video cost</td></tr>
      </table>
      <div class="pmfoot rise" style="animation-delay:.6s;color:rgba(255,255,255,.55)">Co-created content is a one-time cost with no licence or recurring fee. An external SME, if Reliance wants one beyond its own experts, is onboarded at additional cost. Taxes extra.</div>
    </div>`,
  },
  {
    id: 'rc13', theme: 'darker', title: 'Commercials · software',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Commercials · software · skillBetter LMS · aligned with RIL procurement</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:48ch;">₹5 per user per month. <span style="color:var(--yellow)">Already aligned with Reliance procurement, with a purchase order in place.</span></h2>
      <div class="aival" style="grid-template-columns:repeat(3,1fr);margin-top:14px;">
        <div class="vt rise" style="--vc:#FFC401;animation-delay:.2s"><div class="n">₹5 <small>per user per month</small></div><div class="w">The platform the content runs on</div><p>Priced per active user per month. The same rate card agreed with the RIL procurement team; the purchase order for the software is already in place, so content can go live on it without a new commercial cycle.</p></div>
        <div class="vt rise" style="--vc:#39D2E8;animation-delay:.28s"><div class="n">35+ <small>languages</small></div><div class="w">What a user gets</div><p>Worker app in his language, reels-style feed, courses by trade, assessments with proctoring, certificates, leaderboards, offline-friendly playback, AI tutor on your SOPs.</p></div>
        <div class="vt rise" style="--vc:#3BE8B0;animation-delay:.36s"><div class="n">250+ <small>data points</small></div><div class="w">What L&amp;D and safety get</div><p>Content hub, AI translation workspace, mandatory-course enforcement, rule-based assignment by trade and site, completion and score analytics, certification tracking with expiry and refreshers.</p></div>
      </div>
      <div class="capgrid rise" style="animation-delay:.5s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.check}</svg></span><h4>Mandatory gating</h4><p>A worker cannot proceed until the trade's mandatory modules are passed. The same mechanism gates deployment at Zepto.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.plug}</svg></span><h4>Integrations</h4><p>API-first; pre-built connectors for SAP and Workday. Completions and certificates flow to your HRMS and attendance.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><h4>Enterprise grade</h4><p>SOC 2 Type II, ISO 27001, data in India. AI runs on our own infrastructure; your SOPs do not leave it.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${icons.users}</svg></span><h4>Proven at your scale</h4><p>Samarth: 500,000+ Reliance Retail associates, 14 languages, live in eight weeks. 25 lakh+ monthly learners across clients.</p></div>
      </div>
    </div>`,
  },
  {
    id: 'rc14', theme: 'light', title: 'Budget scenario',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">What a 250-trade programme costs · illustrative, from the mix on slide 11 · the classification sets the real number</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:48ch;">About ₹46 lakh of content for 1,250 skills in the base language. <span style="color:var(--navy)">Languages and software on top, both small against it.</span></h2>
      <div class="ajmix rise" style="animation-delay:.2s;margin-top:12px;max-width:1080px;">
        <div class="ajrow"><span class="lb">2D simple · 45% · 1,688 min × ₹500</span><span class="ajbar"><i style="--w:82%;--bc:#39D2E8;--d:.3s"></i></span><span class="pc">₹8.4 L</span></div>
        <div class="ajrow"><span class="lb">2D advanced · 30% · 1,125 min × ₹900</span><span class="ajbar"><i style="--w:98%;--bc:#39D2E8;--d:.42s"></i></span><span class="pc">₹10.1 L</span></div>
        <div class="ajrow"><span class="lb">3D · 12% · 450 min × ₹2,100</span><span class="ajbar"><i style="--w:92%;--bc:#8B7CFF;--d:.54s"></i></span><span class="pc">₹9.5 L</span></div>
        <div class="ajrow"><span class="lb">Camera-shot · 7% · 263 min × ₹4,500</span><span class="ajbar"><i style="--w:100%;--bc:#FFC401;--d:.66s"></i></span><span class="pc">₹11.8 L</span></div>
        <div class="ajrow"><span class="lb">SCORM · 6% · 225 min × ₹5,500</span><span class="ajbar"><i style="--w:100%;--bc:#FF9518;--d:.78s"></i></span><span class="pc">₹12.4 L</span></div>
      </div>
      <div class="modelrow rise" style="animation-delay:.6s;margin-top:14px;grid-template-columns:repeat(4,1fr);">
        <div class="mstat"><div class="n">₹46 L</div><div class="l">Content, 3,750 minutes, base language · one-time</div></div>
        <div class="mstat"><div class="n">+ AI translation</div><div class="l">Included per language for AI formats · script translation at ₹2 a word where human-reviewed</div></div>
        <div class="mstat"><div class="n">+ ₹4,500 / artist</div><div class="l">Human voice where you choose it · per 15-minute slot per language</div></div>
        <div class="mstat"><div class="n">₹5 × users × 12</div><div class="l">Software per year · 50,000 users would be ₹30 L · on the existing PO</div></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.7s">Illustrative. Minutes assume three minutes per skill; the mix is the slide 11 starting point. Moving 10% of skills from 2D simple to camera-shot adds about ₹15 lakh; moving it the other way saves about ₹2 lakh. The classification exercise is where this number gets set, with you.</div>
    </div>`,
  },
  {
    id: 'rc15', theme: 'light', title: 'Delivery plan',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">How we would deliver 1,250 skills · batches by trade, your SMEs in the loop from week one</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:50ch;">Classify in two weeks, then produce in fortnightly batches. <span style="color:var(--navy)">First trades live inside the first month.</span></h2>
      <div class="ghead" style="margin-top:12px;"><span></span><div class="wk"><span>Wk 1–2</span><span>Wk 3–4</span><span>Wk 5–6</span><span>Wk 7–8</span><span>Wk 9–10</span><span>Wk 11–12</span><span>Wk 13–14</span><span>Wk 15+</span></div></div>
      <div class="gantt">
        <div class="grow rise" style="animation-delay:.2s"><span class="nm">Trade and skill classification<small>with Reliance L&amp;D, safety and trade SMEs</small></span><span class="gtrack"><span class="gbar" style="--l:0%;--w:12.5%;--d:.3s">Weeks 1–2</span></span></div>
        <div class="grow rise" style="animation-delay:.26s"><span class="nm">Sample set · one skill per format<small>approved before the first batch is ordered</small></span><span class="gtrack"><span class="gbar teal" style="--l:6%;--w:12.5%;--d:.38s">Weeks 2–3</span></span></div>
        <div class="grow rise" style="animation-delay:.32s"><span class="nm">Scripts and SME review<small>rolling, two weeks ahead of production</small></span><span class="gtrack"><span class="gbar" style="--l:12.5%;--w:87.5%;--d:.46s">Rolling · 100 skills a fortnight</span></span></div>
        <div class="grow rise" style="animation-delay:.38s"><span class="nm">AI production · 2D and 3D<small>batches of 100 skills · priority trades first</small></span><span class="gtrack"><span class="gbar" style="--l:25%;--w:75%;--d:.54s">Fortnightly batches · ~1,100 skills</span></span></div>
        <div class="grow rise" style="animation-delay:.44s"><span class="nm">Camera shoots<small>scheduled per site · 3 to 5 shoot days per visit</small></span><span class="gtrack"><span class="gbar gold" style="--l:31%;--w:50%;--d:.62s">Site visits by region</span></span></div>
        <div class="grow rise" style="animation-delay:.5s"><span class="nm">SCORM builds<small>certification modules</small></span><span class="gtrack"><span class="gbar gold" style="--l:37.5%;--w:50%;--d:.7s">Parallel · ~75 modules</span></span></div>
        <div class="grow rise" style="animation-delay:.56s"><span class="nm">Translation and voice<small>per approved module · languages you pick</small></span><span class="gtrack"><span class="gbar teal" style="--l:31%;--w:69%;--d:.78s">Follows approval by one week</span></span></div>
        <div class="grow rise" style="animation-delay:.62s"><span class="nm">Publish and assign<small>by trade, site, mandatory status</small></span><span class="gtrack"><span class="gbar hot" style="--l:31%;--w:69%;--d:.86s">First trades live in week 5</span></span></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.8s">Throughput depends on SME review turnaround; we plan on 48 hours per script. Priority order is yours: the trades with the highest incident rate or the largest headcount go first. A dashboard shows skills classified, scripted, approved, produced and live, per trade, every week.</div>
    </div>`,
  },
  {
    id: 'rc16', theme: 'dark', title: 'Why it works for O2C workers',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Why this finishes where training usually does not</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:48ch;">Three minutes, on his phone, in his language, between shifts. <span style="color:var(--yellow)">With a question at the end that counts.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>For the worker</span>
          <ul class="cl" style="color:rgba(255,255,255,.78);margin-top:8px;">
            <li>Reels-style feed on the home screen; a module takes a tea break, not a classroom day</li>
            <li>His language, with audio. Seventy percent of frontline workers prefer vernacular over English material</li>
            <li>Points, badges and a leaderboard by trade and site. Voluntary participation rises about 65% with it</li>
            <li>A certificate he can show, and an AI tutor that answers questions on the SOP at 2 a.m.</li>
          </ul>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s;background:rgba(255,196,1,.08)">
          <span class="panetag w"><i></i>For L&amp;D and safety</span>
          <ul class="cl" style="color:rgba(255,255,255,.78);margin-top:8px;">
            <li>Completion by trade, site, contractor and skill, with scores. Who is certified for what, and where it lapses next</li>
            <li>Mandatory modules gate progress; certification can gate deployment through the same worker record</li>
            <li>An SOP change is re-scripted and re-rendered, with version history per module</li>
            <li>Proctored assessments with 99.2% face-detection accuracy where the certificate has to mean something</li>
          </ul>
        </div>
      </div>
      <div class="modelrow rise" style="animation-delay:.5s;margin-top:14px;grid-template-columns:repeat(4,1fr);">
        <div class="mstat"><div class="n">88%</div><div class="l">Completion on our LMS · 25% on a typical one</div></div>
        <div class="mstat"><div class="n">500K+</div><div class="l">Reliance Retail associates · 14 languages · 8 weeks</div></div>
        <div class="mstat"><div class="n">3×</div><div class="l">Training coverage at Hindalco shop floors</div></div>
        <div class="mstat"><div class="n">91%</div><div class="l">Completion at Amazon GSF Learning Academy</div></div>
      </div>
    </div>`,
  },
  {
    id: 'rc17', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">Pick ten trades. <span style="color:var(--yellow)">We bring back one skill in each of the five formats.</span></h2>
      <div class="ctacards" style="margin-top:20px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Ten priority trades</h4><p>You name the ten trades that matter most, by incident rate or headcount, and give us their SOPs and one SME hour each.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Five samples in three weeks</h4><p>One skill in each format, 2D simple to SCORM, in Hindi and English with assessments, on the platform your users are already on.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Classify, then order by batch</h4><p>We classify the 1,250 skills together, agree the mix, and the first fortnightly batch goes into production on the content rate card.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">The software is on the existing purchase order at ₹5 per user per month. Content is a one-time cost per finished minute, no licence fee, priced on slide 12.</div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:16px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`,
  },
]

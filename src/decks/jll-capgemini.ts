import type { SlideDef } from '../lib/types'
import { fi, icons } from './html'

// Response deck for JLL, who are evaluating BetterPlace attendance for Capgemini (CG) and WNS
// sites, PAN India, go-live by 15 Nov 2026. Answers the six items in JLL's requirement mail:
// write-up (workflow, sample reports, network backup, timeline incl. UAT), risk assessment,
// data storage and retrieval, hardware specifications, liability, and SIM-only network clarity.
// Hardware specs are indicative until the commercial quote; liability positions are proposals
// for the MSA. No price, uptime figure or numeric SLA is quoted because none is agreed.

const row = (t: string, sub: string, chip: string, cls: string, d: string, hl = false) =>
  `<div class="fm-row${hl ? ' hl' : ''}" style="--d:${d}s"><span><b>${t}</b> <small>${sub}</small></span><span class="fm-chip ${cls}">${chip}</span></div>`

export const jllCapgeminiSlides: SlideDef[] = [
  {
    id: 'jc1', theme: 'darker', title: 'Cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">For JLL · Capgemini and WNS sites · attendance management system · response to requirements</span>
      <h1 class="rise" style="animation-delay:.15s;font-size:clamp(30px,3.6vw,54px);">Attendance for every CG and WNS site by 15 November. <span style="color:var(--yellow)">On SIM, off the client network.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Answers to the six items from the client connect: how the system works, what the reports look like, what happens when the network drops, the plan to 15 Nov including UAT, the risks we have met before and how we handled them, where data lives, what hardware is needed, and how liability and compliance are covered.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:22px;">
        <div class="stat"><div class="n">15 Nov</div><div class="l">PAN India go-live, CG and WNS</div></div>
        <div class="stat"><div class="n">SIM</div><div class="l">Devices carry their own connectivity</div></div>
        <div class="stat"><div class="n">967</div><div class="l">Sites on this attendance at Zepto</div></div>
        <div class="stat"><div class="n">ISO · SOC 2</div><div class="l">27001 and SOC 2 · AWS Mumbai · DPDP</div></div>
      </div>
      <div class="mdcover ghost">JLL</div>
    </div>`,
  },
  {
    id: 'jc2', theme: 'light', title: 'Your six items',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The six items from the client connect, and where each is answered</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:60ch;">Six asks. <span style="color:var(--navy)">Six answers, in your order.</span></h2>
      <div class="ledger rise" style="animation-delay:.2s;gap:7px;margin-top:8px;">
        <div class="lrow rise" style="animation-delay:.24s;padding:9px 20px;"><div class="ln">01</div><div class="lw"><h4>Write-up on BetterPlace</h4><p>Who we are, workflow, sample reports, network backup, timeline to 15 Nov with UAT. Slides 3 to 11.</p></div><div class="lp">Answered</div></div>
        <div class="lrow rise" style="animation-delay:.32s;padding:9px 20px;"><div class="ln">02</div><div class="lw"><h4>Risk assessment</h4><p>Risks met on live deployments, how we fixed them, and the mitigation here. Slides 12 and 13.</p></div><div class="lp">Answered · from live deployments</div></div>
        <div class="lrow rise" style="animation-delay:.40s;padding:9px 20px;"><div class="ln">03</div><div class="lw"><h4>Data storage and retrieval</h4><p>Where data sits, how it is protected and kept, how you get it back. Slide 14.</p></div><div class="lp">Answered</div></div>
        <div class="lrow rise" style="animation-delay:.48s;padding:9px 20px;"><div class="ln">04</div><div class="lw"><h4>Hardware specifications</h4><p>Face tablet, hybrid terminal, mounting, power, SIM, mobile fallback. Slide 15.</p></div><div class="lp">Indicative · final with quote</div></div>
        <div class="lrow rise" style="animation-delay:.56s;padding:9px 20px;"><div class="ln">05</div><div class="lw"><h4>Liability</h4><p>Secure storage of staff details, disclosure terms, regulations. Proposed for the MSA. Slide 16.</p></div><div class="lp">Proposed for MSA</div></div>
        <div class="lrow rise" style="animation-delay:.64s;padding:9px 20px;"><div class="ln">06</div><div class="lw"><h4>Network clarity</h4><p>No CG network needed. Devices run on their own SIM, cache offline, sync when back. Slides 8 and 9.</p></div><div class="lp">Confirmed</div></div>
      </div>
    </div>`,
  },
  {
    id: 'jc3', theme: 'light', title: 'About BetterPlace',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Item 1 · write-up · who you would be working with</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Ten years of software for frontline workers, <span style="color:var(--navy)">attendance running at 967 sites for one client alone.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">The company</span></div><ul class="cl"><li>BetterPlace Safety Solutions Pvt. Ltd., Bengaluru, founded 2015</li><li>Frontline workforce platform: hire, verify, onboard, attend, pay, upskill</li><li>500+ enterprises live · 15M+ worker profiles</li><li>India, Malaysia, Singapore, Indonesia</li></ul></div>
        <div class="case" style="--pc:#1d7a45"><div class="ch"><span class="cn">Attendance at scale</span></div><ul class="cl"><li><b>Zepto</b>: 15,000 workers, 967 sites, geo attendance with spoof detection, live client dashboard</li><li><b>Reliance</b>: 300K+ workers and 3,000+ vendors on one attendance and payroll rule engine</li><li><b>BPCL</b>: face and fingerprint site access with visitor management</li><li>Attendance demonstrated with JLL account teams at client sites</li></ul></div>
        <div class="case" style="--pc:#FF9518"><div class="ch"><span class="cn">Trust</span></div><ul class="cl"><li>ISO 27001 and SOC 2 certified</li><li>Hosted on AWS Mumbai; data stays in India</li><li>DPDP Act 2023 aligned; IT Act 2000 and SPDI Rules</li><li>Also on the platform: Accenture, Titan, PhonePe, Amazon, Yokohama, Hindalco</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s">For CG and WNS sites this is the <b>Attend module</b> of the goBetter platform: face and mobile capture, shift and roster rules, exceptions and approvals, reports, and a payroll or billing feed. Nothing else needs to be switched on for this scope.</div>
    </div>`,
  },
  {
    id: 'jc4', theme: 'dark', title: 'Workflow',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Item 1 · workflow · from face registration to the client report</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Register once. Punch on the tablet. <span style="color:var(--yellow)">Everything after that is automatic.</span></h2>
      <div class="flowstrip rise" style="animation-delay:.2s;margin-top:16px;">
        <span class="fc">1 · Register<small>face once, in the app · supervised drive</small></span><span class="fa">→</span>
        <span class="fc">2 · Punch IN<small>tablet at entrance · or phone in fence</small></span><span class="fa">→</span>
        <span class="fc">3 · Rules run<small>shift · buffer · liveness · fence</small></span><span class="fa">→</span>
        <span class="fc hot">4 · Log written<small>time · site · photo · device</small></span><span class="fa">→</span>
        <span class="fc">5 · Punch OUT<small>hours computed · OT flagged</small></span><span class="fa">→</span>
        <span class="fc">6 · Exceptions<small>missed punch → regularisation with reason</small></span><span class="fa">→</span>
        <span class="fc gold">7 · Reports and feed<small>dashboard · muster · OT · billing</small></span>
      </div>
      <div class="twopane" style="margin-top:16px;">
        <div class="tp emp rise" style="animation-delay:.35s">
          <span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>What the staff member does</span>
          <ul class="cl" style="color:rgba(255,255,255,.78);margin-top:8px;">
            <li>Registers face once with a supervisor present, about a minute</li>
            <li>Looks at the wall tablet on the way in and out. No card, no PIN</li>
            <li>Sees hours, shifts and pending approvals in the app, in his language</li>
            <li>Missed a punch? Raises a correction with a reason from a fixed list</li>
          </ul>
        </div>
        <div class="tp wrk rise" style="animation-delay:.45s;background:rgba(255,196,1,.08)">
          <span class="panetag w"><i></i>What the JLL site team does</span>
          <ul class="cl" style="color:rgba(255,255,255,.78);margin-top:8px;">
            <li>Sets shifts, thresholds and weekly offs once per site; uploads rosters in bulk</li>
            <li>Approves regularisations and overtime on mobile, one queue, SLA counter</li>
            <li>Reviews the Possible Spoofs queue; nothing suspect reaches payroll</li>
            <li>Opens the dashboard; exports muster, log and OT reports; schedules them to the client</li>
          </ul>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'jc5', theme: 'light', title: 'Rules on every punch',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Item 1 · workflow · what the system checks on each punch</span>
        <h2 class="rise" style="animation-delay:.08s;">The same policy, <span style="color:var(--navy)">applied the same way at every CG and WNS site.</span></h2>
        <div class="featlist">
          ${fi(icons.shield, 'Liveness and face match', 'A photo or video held to the camera does not register. Suspect punches go to a review queue, not to the muster.', 0.22)}
          ${fi(icons.clock, 'Shift and buffer', 'Punch matched to the rostered shift with a tolerance buffer you set. Late arrival and early exit rules per site.', 0.3)}
          ${fi(icons.check, 'Day thresholds and overtime', 'Full and half-day hours, monthly and quarterly OT caps, pre-approval as a switch. OT is disallowed where a punch is missing.', 0.38)}
          ${fi(icons.lock, 'Edit window and maker-checker', 'Corrections only inside a set backdating window, only with a reason, only after approval. Every change carries who, when and why.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="conmock ruleflow">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">goBetter · Attend · policy engine</span><span class="liv">Every punch</span></div>
          <div class="body">
            <div class="punch">
              <span class="pav"><svg viewBox="0 0 24 24">${icons.user}</svg></span>
              <div><b>IN punch · Priya S. · housekeeping</b><span>08:56 · CG Airoli · tower 3 tablet · SIM online</span></div>
              <span class="face">Face match ✓ 99.2%</span>
            </div>
            <div class="rules">
              <div class="rule" style="--i:0"><span class="ri"><svg viewBox="0 0 24 24">${icons.shield}</svg></span><b>Liveness</b><span class="cfg">Single-user mode off</span><span class="st ok">✓ Live person</span></div>
              <div class="rule" style="--i:1"><span class="ri"><svg viewBox="0 0 24 24">${icons.clock}</svg></span><b>Shift match</b><span class="cfg">General 09:00–18:00</span><span class="st ok">✓ In 15-min buffer</span></div>
              <div class="rule" style="--i:2"><span class="ri"><svg viewBox="0 0 24 24">${icons.check}</svg></span><b>Day threshold</b><span class="cfg">Full 8h · half 4h</span><span class="st ok">✓ Full-day eligible</span></div>
              <div class="rule flag" style="--i:3"><span class="ri"><svg viewBox="0 0 24 24">${icons.warn}</svg></span><b>OT cap watch</b><span class="cfg">Monthly cap</span><span class="st warn">⚠ 34 of 40h</span></div>
              <div class="rule" style="--i:4"><span class="ri"><svg viewBox="0 0 24 24">${icons.lock}</svg></span><b>Edit window</b><span class="cfg">48h regularisation</span><span class="st ok">✓ Locked after approval</span></div>
            </div>
            <div class="verdict"><b>Present · Full day</b> · to muster and client dashboard<span class="arr">Every check logged</span></div>
          </div>
        </div>
        <div class="bcap">One punch, five rules, one auditable verdict</div>
      </div>
    </div>`,
  },
  {
    id: 'jc6', theme: 'light', title: 'Sample reports · muster and log',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Item 1 · sample attendance reports · standard, self-serve, Excel export · illustrative data</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:50ch;">Muster roll and attendance log. <span style="color:var(--navy)">Date range, filters, one click.</span></h2>
      <div class="rise" style="animation-delay:.2s;display:grid;grid-template-columns:1.05fr .95fr;gap:22px;margin-top:12px;">
        <div>
          <table class="rtable">
            <caption>Muster roll · CG Airoli · 1–7 Sep 2026 · vendor: all</caption>
            <tr><th>Emp ID</th><th>Name</th><th>Role</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th><th>P</th><th>OT h</th></tr>
            <tr><td class="mono">CG-HK-0412</td><td>Priya S.</td><td>Housekeeping</td><td>P</td><td>P</td><td>P</td><td>P</td><td>P</td><td>WO</td><td>P</td><td>6</td><td>2.0</td></tr>
            <tr><td class="mono">CG-HK-0418</td><td>Sunita D.</td><td>Housekeeping</td><td>P</td><td>P</td><td class="warn">HD</td><td>P</td><td>P</td><td>WO</td><td>P</td><td>5.5</td><td>0</td></tr>
            <tr><td class="mono">CG-SC-0071</td><td>Ravi K.</td><td>Security</td><td>P</td><td>P</td><td>P</td><td class="bad">A</td><td>P</td><td>P</td><td>WO</td><td>5</td><td>4.0</td></tr>
            <tr><td class="mono">CG-TE-0033</td><td>Suresh Y.</td><td>MEP technician</td><td>P</td><td>WO</td><td>P</td><td>P</td><td>P</td><td>P</td><td>P</td><td>6</td><td>3.5</td></tr>
            <tr><td class="mono">CG-PT-0109</td><td>Asha K.</td><td>Pantry</td><td class="warn">L</td><td>P</td><td>P</td><td>P</td><td>P</td><td>WO</td><td>P</td><td>5</td><td>0</td></tr>
          </table>
          <div class="mockcap" style="text-align:left;">P present · HD half day · A absent · L leave · WO weekly off · filters: site, vendor, function, role, gender</div>
        </div>
        <div>
          <table class="rtable">
            <caption>Attendance log · CG Airoli · Wed 3 Sep 2026</caption>
            <tr><th>Name</th><th>Shift</th><th>IN</th><th>OUT</th><th>Hours</th><th>Method</th><th>Status</th></tr>
            <tr><td>Priya S.</td><td>09:00–18:00</td><td class="mono">08:56</td><td class="mono">18:04</td><td>9.1</td><td>Face · tablet T3</td><td class="ok">Present</td></tr>
            <tr><td>Sunita D.</td><td>09:00–18:00</td><td class="mono">09:02</td><td class="mono">13:40</td><td>4.6</td><td>Face · tablet T3</td><td class="warn">Half day</td></tr>
            <tr><td>Ravi K.</td><td>06:00–14:00</td><td class="mono">05:58</td><td class="mono">—</td><td>—</td><td>Face · tablet G1</td><td class="warn">OUT missing</td></tr>
            <tr><td>Suresh Y.</td><td>14:00–22:00</td><td class="mono">13:51</td><td class="mono">22:20</td><td>8.5</td><td>Face · tablet T3</td><td class="ok">Present · OT 0.3</td></tr>
            <tr><td>Asha K.</td><td>09:00–18:00</td><td class="mono">09:31</td><td class="mono">18:00</td><td>8.5</td><td>Mobile · geo</td><td class="warn">Late · regularised</td></tr>
          </table>
          <div class="mockcap" style="text-align:left;">Method shows tablet or mobile and the device ID · offline-synced punches carry the original punch time</div>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'jc7', theme: 'light', title: 'Sample reports · OT, utilisation, exceptions',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Item 1 · sample attendance reports · overtime register, vendor utilisation, exceptions · illustrative data</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:50ch;">Overtime, vendor utilisation and exceptions. <span style="color:var(--navy)">What the client asks for on a Monday.</span></h2>
      <div class="rise" style="animation-delay:.2s;display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:12px;">
        <div>
          <table class="rtable">
            <caption>Overtime report · Sep 2026 · CG Airoli</caption>
            <tr><th>Name</th><th>Role</th><th>OT hours</th><th>Shifts</th><th>Approved by</th><th>Cap</th></tr>
            <tr><td>Ravi K.</td><td>Security</td><td>18.0</td><td>7</td><td>S. Nair</td><td class="ok">40 h</td></tr>
            <tr><td>Suresh Y.</td><td>MEP technician</td><td>34.5</td><td>11</td><td>R. Menon</td><td class="warn">40 h · alert</td></tr>
            <tr><td>Priya S.</td><td>Housekeeping</td><td>6.0</td><td>3</td><td>S. Nair</td><td class="ok">40 h</td></tr>
            <tr><td>Mohan L.</td><td>Security</td><td>40.0</td><td>14</td><td>S. Nair</td><td class="bad">Cap reached</td></tr>
          </table>
          <div class="mockcap" style="text-align:left;">Who worked it, how long, who approved it · supports the statutory overtime register</div>
        </div>
        <div>
          <table class="rtable">
            <caption>Vendor utilisation · week 36 · all CG sites</caption>
            <tr><th>Vendor</th><th>Service</th><th>Rostered</th><th>Present</th><th>Util.</th><th>No-show</th></tr>
            <tr><td>Vendor 1</td><td>Housekeeping</td><td>1,540</td><td>1,478</td><td class="ok">96%</td><td>62</td></tr>
            <tr><td>Vendor 2</td><td>Pantry</td><td>539</td><td>497</td><td class="warn">92%</td><td>42</td></tr>
            <tr><td>Vendor 3</td><td>Security</td><td>630</td><td>619</td><td class="ok">98%</td><td>11</td></tr>
            <tr><td>JLL</td><td>Engineering</td><td>308</td><td>301</td><td class="ok">98%</td><td>7</td></tr>
          </table>
          <div class="mockcap" style="text-align:left;">Present against rostered per vendor and site · the number an SLA credit is written on</div>
        </div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.45s;margin-top:14px;">
        <span class="fc">Exception report<small>missed punch · late · early · no-show</small></span><span class="fa">·</span>
        <span class="fc">Regularisation log<small>who asked, reason, who approved</small></span><span class="fa">·</span>
        <span class="fc">Possible spoofs<small>reviewed and disposed</small></span><span class="fa">·</span>
        <span class="fc">Device health<small>online · last sync · pending punches</small></span><span class="fa">·</span>
        <span class="fc gold">Scheduled to inboxes<small>daily or weekly, Excel</small></span>
      </div>
    </div>`,
  },
  {
    id: 'jc8', theme: 'dark', title: 'Backup on network unavailability',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Item 1 and item 6 · backup plan when the network is unavailable</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">The punch is never lost. <span style="color:var(--yellow)">Stored on the device, synced when the signal returns.</span></h2>
      <div class="flowstrip rise" style="animation-delay:.2s;margin-top:16px;">
        <span class="fc">Signal drops<small>SIM or Wi-Fi</small></span><span class="fa">→</span>
        <span class="fc hot">Tablet keeps working<small>face match runs on the device</small></span><span class="fa">→</span>
        <span class="fc hot">Punch cached<small>encrypted, with original time</small></span><span class="fa">→</span>
        <span class="fc">Signal returns<small>auto-retry, no action needed</small></span><span class="fa">→</span>
        <span class="fc gold">Punches sync<small>original timestamps kept</small></span><span class="fa">→</span>
        <span class="fc">Ops alerted<small>if a device is silent beyond a set time</small></span>
      </div>
      <div class="compmap" style="grid-template-columns:repeat(4,1fr);margin-top:16px;">
        <div class="compcell" style="--cc:#FFC401;--d:.35s"><div class="act">Layer 1</div><h4>Own SIM on every tablet</h4><p>Primary connectivity is a 4G SIM in the device. No dependency on the CG or WNS network. Two carriers across the estate so one outage does not take a region down.</p></div>
        <div class="compcell" style="--cc:#39D2E8;--d:.43s"><div class="act">Layer 2</div><h4>Offline caching on the device</h4><p>Punches, with photo and timestamp, are stored on the tablet when there is no signal and uploaded when it returns. Retention window agreed with you; the same design confirmed for Accenture.</p></div>
        <div class="compcell" style="--cc:#3BE8B0;--d:.51s"><div class="act">Layer 3</div><h4>Mobile app fallback</h4><p>If a tablet is down, staff mark attendance on the goBetter app inside the site geo-fence, with a photo. Same record, flagged as mobile.</p></div>
        <div class="compcell" style="--cc:#8B7CFF;--d:.59s"><div class="act">Layer 4</div><h4>Device health and MDM</h4><p>Every tablet reports online status, last sync and pending punches. Silent devices raise an alert. Tablets are enrolled in MDM and can be restarted, updated or locked remotely.</p></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.7s;color:rgba(255,255,255,.55)">Manual register is the last resort, and it is entered into the platform as a regularisation with a reason, so the audit trail stays whole. Dashboards show synced data; a device that has been offline for hours shows as pending, not as absent.</div>
    </div>`,
  },
  {
    id: 'jc9', theme: 'light', title: 'Network clarity',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Item 6 · network clarity · CG network will not be provided</span>
        <h2 class="rise" style="animation-delay:.08s;">Understood. <span style="color:var(--navy)">Nothing we install touches the CG network.</span></h2>
        <div class="featlist">
          ${fi(icons.globe, 'SIM in every device', 'Each face tablet carries a 4G SIM. Data goes from the device over the carrier network to our cloud on AWS Mumbai. No LAN port, no Wi-Fi credentials, no firewall rules on the client side.', 0.22)}
          ${fi(icons.repeat, 'Two carriers, chosen per site', 'Jio or Vodafone Idea depending on signal at each location, checked during the site survey. Dual-SIM devices where both are weak.', 0.3)}
          ${fi(icons.chart, 'Light on data', 'A punch is a small record plus a compressed photo. A busy entrance typically uses well under a gigabyte a month. We size the data plan per site from the survey.', 0.38)}
          ${fi(icons.zap, 'From CG we need three things', 'A power socket near the entrance, a wall position at face height, and permission to mount. Nothing else from Santosh’s team.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>How data moves · no client network in the path</span></div>
        <div class="hub">
          <svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <line x1="120" y1="210" x2="320" y2="210"/><line x1="320" y1="210" x2="520" y2="210"/>
            <line x1="520" y1="210" x2="520" y2="80"/><line x1="520" y1="210" x2="520" y2="340"/><line x1="120" y1="210" x2="120" y2="340"/>
            <rect class="spoke" x="40" y="180" width="160" height="60" rx="12"/><text class="hn" x="120" y="206" text-anchor="middle">Face tablet</text><text class="hs" x="120" y="224" text-anchor="middle">4G SIM · offline cache</text>
            <circle cx="320" cy="210" r="70" fill="#1B2D93"/>
            <text class="hc" x="320" y="204" text-anchor="middle">Carrier 4G</text>
            <text class="hcs" x="320" y="224" text-anchor="middle">JIO · VI · TLS 1.2+</text>
            <rect class="spoke" x="440" y="180" width="160" height="60" rx="12"/><text class="hn" x="520" y="206" text-anchor="middle">goBetter cloud</text><text class="hs" x="520" y="224" text-anchor="middle">AWS Mumbai · encrypted at rest</text>
            <rect class="spoke" x="440" y="40" width="160" height="60" rx="12"/><text class="hn" x="520" y="66" text-anchor="middle">JLL and client dashboards</text><text class="hs" x="520" y="84" text-anchor="middle">browser · role-based login</text>
            <rect class="spoke" x="440" y="320" width="160" height="60" rx="12"/><text class="hn" x="520" y="346" text-anchor="middle">Payroll and billing feed</text><text class="hs" x="520" y="364" text-anchor="middle">API or scheduled file</text>
            <rect class="spoke" x="40" y="320" width="160" height="60" rx="12"/><text class="hn" x="120" y="346" text-anchor="middle">Staff phone (fallback)</text><text class="hs" x="120" y="364" text-anchor="middle">goBetter app · geo-fence</text>
            <rect x="240" y="300" width="160" height="40" rx="8" fill="rgba(208,39,29,.08)" stroke="#d0271d" stroke-dasharray="5 4"/><text class="hs" x="320" y="325" text-anchor="middle" fill="#b01f16">CG network · not used</text>
          </svg>
        </div>
      </div>
    </div>`,
  },
  {
    id: 'jc10', theme: 'light', title: 'Timeline to 15 Nov',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Item 1 · detailed timeline · PAN India rollout, CG and WNS sites, go-live 15 Nov 2026 · UAT included</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:50ch;">Seven weeks from site list to last site live. <span style="color:var(--navy)">UAT signed off before the first wave.</span></h2>
      <div class="ghead" style="margin-top:12px;"><span></span><div class="wk"><span>29 Sep</span><span>6 Oct</span><span>13 Oct</span><span>20 Oct</span><span>27 Oct</span><span>3 Nov</span><span>10 Nov</span><span>17 Nov</span></div></div>
      <div class="gantt">
        <div class="grow rise" style="animation-delay:.2s"><span class="nm">Site list, survey, design sign-off<small>JLL · CG · WNS · BetterPlace</small></span><span class="gtrack"><span class="gbar" style="--l:0%;--w:12.5%;--d:.3s">Week 1</span></span></div>
        <div class="grow rise" style="animation-delay:.26s"><span class="nm">Hardware and SIM procurement<small>order on LOI · staged delivery</small></span><span class="gtrack"><span class="gbar gold" style="--l:0%;--w:37.5%;--d:.38s">Weeks 1–3 · deliveries by wave</span></span></div>
        <div class="grow rise" style="animation-delay:.32s"><span class="nm">Configuration<small>org, sites, shifts, policies, reports, users</small></span><span class="gtrack"><span class="gbar" style="--l:0%;--w:25%;--d:.46s">Weeks 1–2</span></span></div>
        <div class="grow rise" style="animation-delay:.38s"><span class="nm">Pilot · 2 CG sites + 1 WNS site<small>tablets live · face registration · dashboards</small></span><span class="gtrack"><span class="gbar teal" style="--l:25%;--w:12.5%;--d:.54s">Week 3</span></span></div>
        <div class="grow rise" style="animation-delay:.44s"><span class="nm">UAT<small>scenarios on slide 11 · fixes · sign-off</small></span><span class="gtrack"><span class="gbar teal" style="--l:25%;--w:25%;--d:.62s">Weeks 3–4 · sign-off by 24 Oct</span></span></div>
        <div class="grow rise" style="animation-delay:.5s"><span class="nm">Wave 1 · West and South<small>registration drives · devices mounted</small></span><span class="gtrack"><span class="gbar" style="--l:50%;--w:12.5%;--d:.7s">Week 5</span></span></div>
        <div class="grow rise" style="animation-delay:.56s"><span class="nm">Wave 2 · North and East<small>same runbook</small></span><span class="gtrack"><span class="gbar" style="--l:62.5%;--w:12.5%;--d:.78s">Week 6</span></span></div>
        <div class="grow rise" style="animation-delay:.62s"><span class="nm">Wave 3 · remaining CG + all WNS<small>last site live by 15 Nov</small></span><span class="gtrack"><span class="gbar hot" style="--l:75%;--w:10.5%;--d:.86s">Week 7</span><span class="gmile" style="--l:85.5%"></span></span></div>
        <div class="grow rise" style="animation-delay:.68s"><span class="nm">Hypercare and handover<small>daily calls · device health · first payroll cycle</small></span><span class="gtrack"><span class="gbar gold" style="--l:75%;--w:25%;--d:.94s">Weeks 7–8</span></span></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.8s">Red line is 15 Nov. Two dependencies set the pace: the final site list with headcounts by 3 Oct, and hardware ordered on LOI so wave 1 devices land by 24 Oct. Each wave runs the pilot runbook: mount, register faces, verify first punches, hand the dashboard to the site lead.</div>
    </div>`,
  },
  {
    id: 'jc11', theme: 'light', title: 'UAT',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Item 1 · UAT · what is tested, by whom, and what sign-off means</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:50ch;">Twelve scenarios on live sites, <span style="color:var(--navy)">signed by JLL and the client before wave 1 starts.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Capture</span></div><ul class="cl"><li>Face registration for a batch of staff, including glasses, masks off, low light</li><li>Punch IN and OUT on tablet; same person on two tablets</li><li>Photo and video held to camera: rejected, queued as possible spoof</li><li>Mobile punch inside and outside the geo-fence</li></ul></div>
        <div class="case" style="--pc:#1d7a45"><div class="ch"><span class="cn">Rules and exceptions</span></div><ul class="cl"><li>Late, early, half day and full day against the configured thresholds</li><li>Overtime computed, pre-approved, capped, blocked at cap</li><li>Missed punch raised, approved, rejected; edit window enforced</li><li>Weekly off and holiday handling in payable days</li></ul></div>
        <div class="case" style="--pc:#FF9518"><div class="ch"><span class="cn">Resilience and outputs</span></div><ul class="cl"><li>SIM removed for an hour: punches cached, synced, timestamps intact</li><li>Tablet powered off: alert raised; mobile fallback used</li><li>Muster, log, OT and utilisation reports match the test punches</li><li>Payroll or billing file accepted by the client's system</li></ul></div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.45s">
        <span class="fc">Scripts agreed<small>week 2</small></span><span class="fa">→</span>
        <span class="fc">Run on pilot sites<small>weeks 3–4 · JLL, CG, WNS users</small></span><span class="fa">→</span>
        <span class="fc">Defects logged<small>severity 1 fixed before sign-off</small></span><span class="fa">→</span>
        <span class="fc hot">Sign-off<small>JLL and client · by 24 Oct</small></span><span class="fa">→</span>
        <span class="fc gold">Wave 1 begins<small>27 Oct</small></span>
      </div>
    </div>`,
  },
  {
    id: 'jc12', theme: 'dark', title: 'Risk assessment · 1',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Item 2 · risk assessment · risks we have met on live deployments and how we handled them</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:46ch;">Five things that went wrong before, <span style="color:var(--yellow)">and what we changed so they do not here.</span></h2>
      <table class="rtable" style="margin-top:12px;">
        <tr><th style="width:19%">Risk</th><th style="width:27%">Where we met it</th><th style="width:30%">What we did</th><th>Mitigation for CG and WNS</th></tr>
        <tr><td style="white-space:normal"><b>Liveness bypassed</b></td><td style="white-space:normal">A large IT services client's security team defeated the liveness check in their own tests during evaluation.</td><td style="white-space:normal">Retrained the liveness model, added a high-security single-user mode, tuned thresholds per site with the client's team.</td><td style="white-space:normal">Liveness tuned and tested with JLL and CG security in UAT. Suspect punches never reach the muster; they queue for review.</td></tr>
        <tr><td style="white-space:normal"><b>Payable days wrong</b></td><td style="white-space:normal">A manufacturing client's payroll counted weekly offs incorrectly after attendance auto-sync.</td><td style="white-space:normal">Rewrote the payable-day logic with the client; ran one payroll cycle in parallel before cutover.</td><td style="white-space:normal">Weekly off, holiday and half-day rules signed off in week 2; one parallel cycle in hypercare before the feed is relied on.</td></tr>
        <tr><td style="white-space:normal"><b>Network not available</b></td><td style="white-space:normal">Sites where client Wi-Fi was refused or unreliable; punches at risk of being lost.</td><td style="white-space:normal">Moved to SIM-first tablets with offline caching and defined retention; device health alerts.</td><td style="white-space:normal">Every device on its own SIM, two carriers, offline cache, mobile fallback. Slides 8 and 9.</td></tr>
        <tr><td style="white-space:normal"><b>Queues at shift start</b></td><td style="white-space:normal">High-security mode slowed entry at a site with one device for several hundred staff.</td><td style="white-space:normal">Added devices per entrance; standard mode where security allows; staggered registration.</td><td style="white-space:normal">Device count sized per entrance from the survey; single-user mode only where CG asks for it.</td></tr>
        <tr><td style="white-space:normal"><b>Location consent</b></td><td style="white-space:normal">A client raised DPDP concerns on geo-location for mobile marking.</td><td style="white-space:normal">Consent notice in the app in the worker's language; geo used only inside the fence check.</td><td style="white-space:normal">Tablets are the primary method and carry no location. Mobile fallback shows a consent notice before first use.</td></tr>
      </table>
    </div>`,
  },
  {
    id: 'jc13', theme: 'dark', title: 'Risk assessment · 2',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Item 2 · risk assessment · risks specific to this rollout, with owners</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:46ch;">Five risks specific to a seven-week PAN India rollout, <span style="color:var(--yellow)">each with an owner and a trigger.</span></h2>
      <table class="rtable" style="margin-top:12px;">
        <tr><th style="width:22%">Risk</th><th style="width:10%">Likelihood</th><th style="width:10%">Impact</th><th>Mitigation</th><th style="width:12%">Owner</th></tr>
        <tr><td style="white-space:normal"><b>Hardware lead time</b> slips wave 1</td><td class="warn">Medium</td><td class="bad">High</td><td style="white-space:normal">Order on LOI in week 1; staged deliveries by wave; buffer stock of 5% devices; mobile fallback live from day one at any site whose tablet is late.</td><td>BetterPlace</td></tr>
        <tr><td style="white-space:normal"><b>Site list and headcounts</b> arrive late</td><td class="warn">Medium</td><td class="bad">High</td><td style="white-space:normal">Site list with headcount and entrance count needed by 3 Oct. Waves are re-cut weekly; sites confirmed later join the last wave.</td><td>JLL</td></tr>
        <tr><td style="white-space:normal"><b>Face registration incomplete</b> at go-live</td><td class="warn">Medium</td><td class="warn">Medium</td><td style="white-space:normal">Supervised registration drives per site over two days; vendors register their staff in the same app; unregistered staff use mobile until registered, flagged on the dashboard.</td><td>JLL + vendors</td></tr>
        <tr><td style="white-space:normal"><b>Weak signal</b> at a specific entrance</td><td class="ok">Low</td><td class="warn">Medium</td><td style="white-space:normal">Carrier chosen per site from the survey; dual-SIM device where both are weak; offline cache covers gaps; external antenna as last option.</td><td>BetterPlace</td></tr>
        <tr><td style="white-space:normal"><b>Device damage or theft</b></td><td class="ok">Low</td><td class="ok">Low</td><td style="white-space:normal">Wall-mounted in a lockable enclosure; MDM remote lock and wipe; no data readable off the device; spare swapped from buffer stock.</td><td>BetterPlace</td></tr>
      </table>
      <div class="pmfoot rise" style="animation-delay:.5s;color:rgba(255,255,255,.55)">Reviewed weekly in the rollout call with JLL. A new risk is added with an owner the week it appears; a closed one stays on the register with what closed it.</div>
    </div>`,
  },
  {
    id: 'jc14', theme: 'light', title: 'Data storage and retrieval',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Item 3 · data storage and retrieval</span>
        <h2 class="rise" style="animation-delay:.08s;">Stored in India, encrypted, <span style="color:var(--navy)">and yours to take out at any time.</span></h2>
        <div class="featlist">
          ${fi(icons.lock, 'Where and how it is stored', 'Attendance records, face templates and photos on AWS Mumbai. Encrypted in transit and at rest. Tenant-isolated from every other client.', 0.22)}
          ${fi(icons.users, 'Who can see it', 'Role-based: a site lead sees his site, JLL sees its sites, the client sees its own, vendors see their own staff. Every view and export is logged.', 0.3)}
          ${fi(icons.clock, 'How long it is kept', 'Attendance and muster data kept for the statutory period you specify, default three years, then archived or deleted. Face templates deleted on exit.', 0.38)}
          ${fi(icons.doc, 'How you get it back', 'Dashboards and reports, self-serve. Bulk export to Excel or CSV. API or scheduled file to payroll and billing. Full return on contract exit, then deletion with a certificate.', 0.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Data lifecycle · one record</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>data lifecycle · CG Airoli · one staff record</span></div>
          <div class="fm-body">
            <div class="fm-rows">
              ${row('Captured', 'punch time, site, device, photo, face match score · on device, encrypted', 'DEVICE', 'y', '.45')}
              ${row('Stored', 'encrypted at rest · tenant-isolated · daily backups · India region only', 'AT REST', 'g', '.75')}
              ${row('Used', 'dashboards · reports · payroll and billing feed · access logged', 'RBAC', 'g', '.9')}
              ${row('Retained', 'statutory period as configured · default 3 years', 'POLICY', 'g', '1.05')}
              ${row('Returned and deleted', 'export on request · full return on exit · deletion certificate', 'ON EXIT', 'g', '1.2')}
            </div>
          </div>
        </div>
        <div class="mockcap">Operational screens are near real time; BI dashboards refresh on a processing cycle and may lag by a short interval</div>
      </div>
    </div>`,
  },
  {
    id: 'jc15', theme: 'light', title: 'Hardware specifications',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Item 4 · hardware specifications · indicative, final models and counts in the commercial quote</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:50ch;">One tablet per entrance, on a SIM. <span style="color:var(--navy)">A hybrid terminal where CG wants two factors.</span></h2>
      <table class="rtable" style="margin-top:12px;">
        <tr><th style="width:18%">Item</th><th>Face tablet · standard entrances</th><th>Hybrid terminal · high-security sites</th><th style="width:20%">Mobile fallback</th></tr>
        <tr><td><b>Device</b></td><td style="white-space:normal">Android tablet, 8 to 10 inch, Android 11 or later, 4 GB RAM, 64 GB storage</td><td style="white-space:normal">Face plus fingerprint terminal (Mantra or Godrej class), Android based</td><td style="white-space:normal">Staff member's own phone, Android 9+ or iOS 14+</td></tr>
        <tr><td><b>Camera</b></td><td style="white-space:normal">Front camera 8 MP or better, autofocus; works in indoor lighting; IR illumination optional for dim lobbies</td><td style="white-space:normal">Dual camera with IR for liveness; optical fingerprint sensor</td><td style="white-space:normal">Front camera, GPS</td></tr>
        <tr><td><b>Connectivity</b></td><td style="white-space:normal">4G LTE SIM slot (dual-SIM preferred); Wi-Fi present but not used at CG</td><td style="white-space:normal">4G LTE SIM; Ethernet present but not used</td><td style="white-space:normal">Staff mobile data</td></tr>
        <tr><td><b>Offline</b></td><td style="white-space:normal">Face matching on device; punches cached encrypted until sync</td><td style="white-space:normal">Same; local template store</td><td style="white-space:normal">Cached in app until online</td></tr>
        <tr><td><b>Mounting and power</b></td><td style="white-space:normal">Wall mount at 1.4 to 1.5 m in a lockable enclosure; 5 V/2 A adapter from a standard socket; optional battery backup</td><td style="white-space:normal">Wall or stand mount; 12 V adapter; optional UPS</td><td style="white-space:normal">None</td></tr>
        <tr><td><b>Management</b></td><td style="white-space:normal">Enrolled in MDM: remote update, restart, lock, wipe; health beacon every few minutes</td><td style="white-space:normal">Vendor management console plus our device health view</td><td style="white-space:normal">App updates via store</td></tr>
        <tr><td><b>Sizing</b></td><td style="white-space:normal">One device per entrance per 150 to 200 staff at peak; second device where the peak is tighter</td><td style="white-space:normal">As specified by CG security per site</td><td style="white-space:normal">All staff, as backup</td></tr>
      </table>
      <div class="pmfoot rise" style="animation-delay:.5s">Devices are supplied, configured and MDM-enrolled by BetterPlace and shipped by wave. Site survey confirms entrance count, mounting point, socket and carrier per site. Data plan sized per site; a typical entrance uses well under a gigabyte a month.</div>
    </div>`,
  },
  {
    id: 'jc16', theme: 'darker', title: 'Liability and compliance',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">Item 5 · liability · secure storage of staff details, disclosure terms, regulatory compliance · proposed positions for the MSA</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:46ch;">We hold staff data as a processor on your instruction. <span style="color:var(--yellow)">Disclosed to nobody else without a lawful order.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#FFC401"><div class="ch"><span class="cn">Secure storage of staff details</span></div><ul class="cl"><li>BetterPlace acts as data processor; JLL and the client remain data fiduciaries under the DPDP Act 2023</li><li>ISO 27001 and SOC 2 controls: encryption, access control, logging, vulnerability management, incident response</li><li>Data in India only, AWS Mumbai; sub-processors listed in the MSA</li><li>Face templates and photos held only for attendance; deleted on exit</li></ul></div>
        <div class="case" style="--pc:#39D2E8"><div class="ch"><span class="cn">Disclosure terms</span></div><ul class="cl"><li>No disclosure to third parties except sub-processors named in the MSA, or under a lawful order, with notice to you where the law allows</li><li>Staff data used for no purpose other than attendance and the reports you configure</li><li>Confidentiality survives termination; data returned and deleted on exit with a certificate</li><li>Security incident affecting your data notified within the period agreed in the MSA</li></ul></div>
        <div class="case" style="--pc:#3BE8B0"><div class="ch"><span class="cn">Regulatory compliance</span></div><ul class="cl"><li>DPDP Act 2023: notice and consent in the staff member's language at registration; purpose limitation; erasure on request or exit</li><li>IT Act 2000 and SPDI Rules 2011 for biometric data as sensitive personal data</li><li>Statutory registers: muster roll and overtime register generated from platform data for the applicable labour laws</li><li>Right to audit for JLL and the client on reasonable notice</li></ul></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.5s;color:rgba(255,255,255,.55)">Indemnity, limitation of liability and insurance are set in the MSA between the parties; the positions above are what we propose and have agreed with comparable enterprise clients. Determination of statutory applicability stays with the employer and its advisors; we configure the platform to your stated interpretation.</div>
    </div>`,
  },
  {
    id: 'jc17', theme: 'darker', title: 'Next steps',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">What we need from JLL and CG to hold 15 November</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">Three things by 3 October, <span style="color:var(--yellow)">and the first tablets go on the wall on 13 October.</span></h2>
      <div class="ctacards" style="margin-top:20px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Site list with headcounts</h4><p>Every CG and WNS site, staff count by vendor, number of entrances, a site contact. This sets device counts and the waves.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Policy inputs</h4><p>Shift patterns, weekly-off rules, OT policy, who approves what, the report formats the client wants and the payroll or billing file layout.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>LOI for hardware</h4><p>So devices and SIMs are ordered in week 1 and wave 1 lands by 24 October. UAT sign-off follows on the pilot sites.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));"><b>Offer:</b> a live walkthrough of the tablet, the offline sync and the client dashboard on a running deployment, this week, for the CG and WNS evaluation teams.</div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:16px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`,
  },
]

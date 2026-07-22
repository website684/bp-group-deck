import type { SlideDef } from '../lib/types'
import { bframe } from './html'

export const hrisSlides: SlideDef[] = [
  {
    id: 'hr1', theme: 'dark', title: 'HRIS cover',
    html: `
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter · the frontline HRIS core</span>
      <h1 class="rise" style="animation-delay:.15s">One worker record. <span style="color:var(--yellow)">Every module reads it.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Onboarding, verification, attendance, payroll and skilling share a single associate record on one control plane — no exports, no re-entry, no version arguments.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">7</div><div class="l">Modules on one dashboard</div></div>
        <div class="stat"><div class="n">360°</div><div class="l">Profile per associate</div></div>
        <div class="stat"><div class="n">1 login</div><div class="l">For everything above</div></div>
      </div>
      <div class="mdcover ghost">go</div>
    </div>`,
  },
  {
    id: 'hr2', theme: 'light', title: 'Control plane',
    html: `
    <div class="slidebody">
      <span class="eyebrow rise">The control plane · real product</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">Your whole workforce, <span style="color:var(--navy)">on one screen.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${bframe('assets/product/gobetter/hris/module-dashboard.jpg', 'gobetter · Organisation dashboard', 'Onboard, Verify, Attend, Payroll, Upskill, Vendors &amp; Reports — one control plane')}
        ${bframe('assets/product/gobetter/hris/employee-master-card-grid.jpg', 'gobetter · All Associates', 'The employee master — <b>1,014 associates</b> with role, site and hierarchy, searchable')}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">Sites follow one hierarchy — country → state → city → site — and a configurable workflow engine (Business Flow) runs your processes, with real role-based access control.</p>
    </div>`,
  },
  {
    id: 'hr3', theme: 'light', title: '360° profile & governance',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Data completeness, enforced</span>
        <h2 class="rise" style="animation-delay:.08s;">The record tells you <span style="color:var(--navy)">what's missing — and for which module.</span></h2>
        <div class="featlist">
          <div class="fi rise" style="animation-delay:.24s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><h4>Missing-info banners with deep links</h4><p>"Missing information for BGV / Payroll" takes the admin straight to the exact gap — completeness is enforced, not hoped for.</p></div></div>
          <div class="fi rise" style="animation-delay:.32s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span><div><h4>Profile lock &amp; log history</h4><p>Finalised records lock against edits; every change is on the log. Auditors get answers, not shrugs.</p></div></div>
          <div class="fi rise" style="animation-delay:.40s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg></span><div><h4>BI dashboards built in</h4><p>Embedded QuickSight analytics — attendance trends, shortfall treemaps by site, payroll metrics — filterable by state, city and site.</p></div></div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${bframe('assets/product/gobetter/hris/analytics-bi-dashboard-attendance.jpg', 'gobetter · Analytics', 'Live BI: donuts, monthly trends, shortfall treemap — <b>18,026 face-registered employees</b> in this one org')}
      </div>
    </div>`,
  },
  {
    id: 'hr3b', theme: 'light', title: 'The 360° record',
    html: `
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">One associate, one record · real product</span>
        <h2 class="rise" style="animation-delay:.08s;">Open any worker. <span style="color:var(--navy)">See everything that touches them.</span></h2>
        <div class="featlist">
          <div class="fi rise" style="animation-delay:.24s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/></svg></span><div><h4>Full profile with tenure timeline</h4><p>Role, site, hierarchy, BPSS reference, employment history across client, vendor and subvendor.</p></div></div>
          <div class="fi rise" style="animation-delay:.32s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><h4>Cross-module gap banners</h4><p>"Missing information for BGV / Payroll" deep-links to the exact field — the platform polices its own data quality.</p></div></div>
          <div class="fi rise" style="animation-delay:.40s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span><div><h4>Lock &amp; log</h4><p>Profile Locked blocks edits once finalised; Log History shows who changed what, when.</p></div></div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${bframe('assets/product/gobetter/hris/employee-360-profile.jpg', 'gobetter · Associate 360° profile', 'A live associate record — missing-info banner, profile lock, log history, module tabs')}
      </div>
    </div>`,
  },
  {
    id: 'hr4', theme: 'darker', title: 'Why it matters',
    html: `
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Why one record beats five systems</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Point tools each hold a fragment. <span style="color:var(--yellow)">We hold the worker.</span></h2>
      <div class="forces" style="margin-top:24px;">
        <div class="force rise" style="animation-delay:.22s"><h4>Hired → paid, one thread</h4><ul><li>The record created at hiring is the one payroll pays</li><li>No CSV exports between vendors, ever</li></ul></div>
        <div class="force rise" style="animation-delay:.30s"><h4>Compliance reads it too</h4><ul><li>BGV status, attendance and statutory dues on the same profile</li><li>Gaps surface as banners, not audit findings</li></ul></div>
        <div class="force rise" style="animation-delay:.38s"><h4>And it compounds</h4><ul><li>Every module adds data the next one uses</li><li>Rehires clear verification in minutes, not days</li></ul></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:26px;">This is the layer the 25M-profile worker-intelligence moat lives on.</div>
    </div>`,
  },
]

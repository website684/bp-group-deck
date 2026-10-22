import type { SlideDef } from '../lib/types'
import { icons } from './html'
import { svg, plainSlide, coverRing } from './story-kit'
import { aiLabsSlides } from './ai-labs'

// BPCL · AI Labs use cases (Oct 2026). BPCL already runs IOWMS on goBetter (with Godrej & Boyce):
// vendors and POs from SAP/VAMS, contract-workman onboarding with Aadhaar into BPCL's data vault,
// biometric enrolment, gate passes with renewal and auto-termination, labour licence and EC policy,
// vendor reconciliation and the incentive file. Pain points come from CS call notes
// (knowledge/12-customer-voice-issues.md). Agents map to AI Labs' live roster; Beta ones say so.
// Closes with the AI Labs capability slides from the ai-labs deck.

const agentCard = (name: string, status: 'live' | 'beta', process: string, does: string, outcome: string, d: number) => `
  <div class="bp-ag" style="--d:${d}s">
    <div class="h"><b>${name}</b><span class="st2 ${status}">${status === 'live' ? 'Live' : 'Beta'}</span></div>
    <div class="p">${process}</div>
    <p>${does}</p>
    <div class="o">${outcome}</div>
  </div>`

const chat = (title: string, msgs: [string, string][]) => `
  <div class="wa" style="--d:.2s"><div class="scr" style="height:420px">
    <div class="top"><i>AI</i><div>${title}<small>BPCL · AI Labs agent</small></div></div>
    <div class="chat">${msgs.map(([who, t], i) => `<div class="m${who === 'me' ? ' me' : who === 'sys' ? ' sys' : ''}" style="--d:${0.3 + i * 0.3}s">${t}</div>`).join('')}</div>
  </div></div>`

const css = `<style>
.bp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.bp-ag { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 12px 14px; display: flex; flex-direction: column; gap: 6px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.dark .bp-ag, .darker .bp-ag { background: rgba(255,255,255,.05); border-color: rgba(255,255,255,.12); }
.bp-ag .h { display: flex; justify-content: space-between; align-items: center; gap: 6px; }
.bp-ag .h b { font-family: var(--disp); font-size: .95rem; color: var(--ink); }
.dark .bp-ag .h b, .darker .bp-ag .h b { color: #fff; }
.bp-ag .p { font-family: var(--mono); font-size: 10.5px; letter-spacing: .06em; text-transform: uppercase; color: var(--navy); }
.dark .bp-ag .p, .darker .bp-ag .p { color: var(--yellow); }
.bp-ag p { margin: 0; font-size: .8rem; line-height: 1.42; color: var(--text); flex: 1; }
.dark .bp-ag p, .darker .bp-ag p { color: rgba(255,255,255,.78); }
.bp-ag .o { font-size: .78rem; font-weight: 600; color: #1a8f52; border-top: 1px dashed var(--border); padding-top: 6px; }
.dark .bp-ag .o, .darker .bp-ag .o { color: #7ee6ac; border-color: rgba(255,255,255,.15); }
.bp-ag .st2 { font-family: var(--mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; padding: 3px 8px; border-radius: 999px; }
.bp-ag .st2.live { background: rgba(61,190,123,.18); color: #1a8f52; } .bp-ag .st2.beta { background: rgba(255,196,1,.25); color: #8a6d00; }
.bp-flow { display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; }
.bp-flow .s { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 11px 12px; animation: telpop .45s var(--ease) both; animation-delay: var(--d); }
.bp-flow .s .k { font-family: var(--mono); font-size: 10px; color: var(--navy); letter-spacing: .08em; text-transform: uppercase; }
.bp-flow .s h4 { margin: 4px 0 0; font-family: var(--disp); font-size: .92rem; color: var(--ink); }
.bp-flow .s p { margin: 5px 0 0; font-size: .76rem; line-height: 1.4; color: var(--text); }
.bp-flow .s .x { margin-top: 8px; font-size: .74rem; line-height: 1.35; color: var(--red); background: rgba(208,39,29,.06); border-radius: 7px; padding: 6px 7px; }
</style>`

export const bpclAiSlides: SlideDef[] = [
  {
    id: 'bp1', theme: 'darker', title: 'Cover',
    html: `${css}
    <div class="glow"></div>
    <div class="tel center" style="padding-top:0">
      <div class="tel-coverwrap">
        <div class="tel-covertext">
          <span class="kick">BetterPlace × Bharat Petroleum · AI Labs · October 2026</span>
          <h1>Your IOWMS processes, <em>run by AI agents that never sleep.</em></h1>
          <p>BPCL already runs vendors, onboarding, gate passes and compensation for its contract workforce on goBetter. AI Labs adds agents on top of the same record: they chase, check, guide and answer, in every language your workforce speaks.</p>
          <div class="meta"><span>Use-case session</span><span>Built on the live IOWMS record</span><span>Confidential</span></div>
        </div>
        ${coverRing(['Vendors', 'Onboard', 'Verify', 'Induct', 'Gate', 'Pay', 'Support', 'Insight'], ['AI agents', 'on IOWMS'], false)}
      </div>
    </div>`,
  },

  plainSlide('bp2', 'light', 'Your processes today',
    'Your processes today · the contract-workforce journey on IOWMS',
    'Seven processes run on IOWMS every day. <em>Each one still waits on a person to chase, check or answer.</em>',
    `<div class="bp-flow">
      ${[
        ['01', 'Vendor and PO', 'Vendor from SAP and VAMS; selectable only after the PO is issued.', 'Vendors stall until SAP, PO and licences line up'],
        ['02', 'Workman onboarding', 'Aadhaar into BPCL’s data vault, 20+ fields per worker.', 'Entry errors and long forms slow every joiner'],
        ['03', 'Verification', 'Checks by role before a pass is issued.', 'Tasks and status changes wait in queues'],
        ['04', 'Safety induction', 'Refinery safety rules before site entry.', 'Proof of who was inducted is paper'],
        ['05', 'Biometric and gate pass', 'Face enrolment, pass issue, renewal, auto-termination.', 'Face not detected; renewals missed'],
        ['06', 'Pay and incentives', 'Vendor reconciliation and the incentive file.', 'When the file is wrong, nobody knows whose fault'],
        ['07', 'Access and support', 'Vendors, supervisors and workmen across regions.', '“User ID not found” and access tickets pile up'],
      ].map(([k, h, p, x], i) => `<div class="s" style="--d:${0.08 + i * 0.07}s"><div class="k">${k}</div><h4>${h}</h4><p>${p}</p><div class="x">${x}</div></div>`).join('')}
    </div>`),

  plainSlide('bp3', 'dark', 'Agents for BPCL',
    'The agents · one per process, on the same IOWMS record',
    'Eight agents, each taking the chasing, checking and answering <em>out of one IOWMS process.</em>',
    `<div class="bp-grid">
      ${agentCard('Vendor readiness agent', 'live', 'Vendor and PO', 'Checks every vendor’s licence, EC policy, PF and ESI codes and SAP PO status, and chases the vendor on WhatsApp until the gaps close.', 'Vendors ready before the work order starts', 0.1)}
      ${agentCard('Onboarding agent', 'live', 'Workman onboarding', 'Workmen onboard themselves on WhatsApp in their language: Aadhaar read by OCR, the 20+ fields filled from documents, errors fixed in the chat.', 'Joiners ready same day, no retyping', 0.16)}
      ${agentCard('Verification agent', 'beta', 'Verification', 'Pre-checks documents, chases missing items, moves status the moment a check returns, and flags only real exceptions to your team.', 'No case waiting in a queue', 0.22)}
      ${agentCard('Safety induction agent', 'live', 'Safety induction', 'Your refinery SOP as a deterministic flow: short videos, a test, a PPE photo, a dated certificate that activates the pass.', 'Audit-ready proof for every workman', 0.28)}
      ${agentCard('Gate and enrolment agent', 'live', 'Biometric and gate pass', 'Guides face enrolment when a face is not detected, reminds vendors before passes expire, and explains auto-terminations.', 'Fewer failed enrolments, no lapsed passes', 0.34)}
      ${agentCard('Reconciliation agent', 'beta', 'Pay and incentives', 'Reads PF and ESI challans and the incentive file, matches them worker by worker, and tells each region exactly which row is wrong and why.', 'Errors owned, not argued about', 0.4)}
      ${agentCard('Workforce helpdesk', 'live', 'Access and support', 'Answers vendors, supervisors and workmen 24/7 in Hindi, Marathi, Tamil and more: access, pass status, pay, incentives. Raises a ticket only when needed.', 'Support load down, answers in seconds', 0.46)}
      ${agentCard('Operations copilot', 'live', 'Insight', 'Ask in plain words: how many are inside the refinery now, which vendors are over licence, whose passes expire this week.', 'Answers from live data, not reports', 0.52)}
    </div>`),

  plainSlide('bp4', 'light', 'Agents in action',
    'Three agents in action · on WhatsApp and inside IOWMS',
    'Workmen, vendors and your team just talk to it. <em>The agent does the work on the IOWMS record.</em>',
    `<div class="wa-row">
      <div>${chat('Onboarding agent', [
        ['bot', 'Namaste Ramesh. Your vendor Shree Services has added you for Mumbai Refinery. Please send your Aadhaar.'],
        ['me', '📎 Aadhaar.jpg'],
        ['sys', 'Aadhaar read · name, DOB, address filled · stored in BPCL data vault'],
        ['bot', 'Done. 18 of 22 fields filled from your documents. Your bank passbook next, please.'],
      ])}<div class="wa-cap">Workman onboarding</div></div>
      <div>${chat('Vendor readiness agent', [
        ['bot', 'Shree Services: your labour licence for Mumbai Refinery expires in 12 days. 46 passes depend on it.'],
        ['me', 'Renewal applied, uploading now'],
        ['sys', 'Licence uploaded · checker notified · passes protected'],
        ['bot', 'Also: SAP PO 4500018822 is approved. You can now add workmen to WO-114.'],
      ])}<div class="wa-cap">Vendor and PO</div></div>
      <div>${chat('Operations copilot', [
        ['me', 'How many contract workmen are inside Mumbai Refinery right now?'],
        ['bot', '2,418 inside. 1,960 on day shift, 412 maintenance turnaround crew, 46 visitors.'],
        ['me', 'Any vendor over its licence?'],
        ['bot', '2 vendors. Bhoomi Facility 63 of 53, new passes blocked. Want the list?'],
      ])}<div class="wa-cap">Plant operations</div></div>
    </div>`),

  plainSlide('bp5', 'dark', 'How we start',
    'How we start · three agents, one refinery, six weeks',
    'Start with the three agents that remove the most chasing, <em>on one refinery, in six weeks.</em>',
    `<div class="tel-phase4">
      <div class="ph4" style="--d:.15s"><div class="w">Weeks 1–2</div><h4>Pick and configure</h4><p>Onboarding agent, workforce helpdesk and vendor readiness agent, on your IOWMS data and policies, in the languages your workmen speak.</p><div class="who">Joint</div></div>
      <div class="ph4" style="--d:.3s"><div class="w">Weeks 3–4</div><h4>Go live at one refinery</h4><p>Vendors and workmen use WhatsApp; your team sees every action on the IOWMS audit log.</p><div class="who">BetterPlace</div></div>
      <div class="ph4" style="--d:.45s"><div class="w">Weeks 5–6</div><h4>Measure</h4><p>Onboarding time, tickets avoided, vendor gaps closed, renewals on time.</p><div class="who">Measured</div></div>
      <div class="ph4" style="--d:.6s"><div class="w">Then</div><h4>Add agents</h4><p>Safety induction, gate and enrolment, reconciliation and the operations copilot across refineries and depots.</p><div class="who">Staged</div></div>
    </div>
    <div class="tel-band ghost" style="margin-top:14px"><span class="bl">Guardrails</span><p>Private models, data stays in India, PII masked, deterministic flows where steps are mandatory, every agent action on the audit log. Pay per use with credits.</p></div>`),

  ...aiLabsSlides.filter((s) => ['ai1w', 'ai2', 'ai3', 'ai4', 'ai5', 'ai6b'].includes(s.id)),
]

void svg; void icons

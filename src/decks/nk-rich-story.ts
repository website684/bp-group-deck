import type { SlideDef } from '../lib/types'
import { nkStorySlides } from './nk-story'

// Nikhil cut v2: preserve the original, product-rich Ravi narrative and improve it
// through tighter audience framing, clearer worker/employer labels and a more
// finished visual treatment. The original nkStorySlides array remains untouched.

const COPY_EDITS: Record<string, Array<[string, string]>> = {
  ns1: [
    ['BetterPlace · the story of one rider, and 30 million', 'BetterPlace · a first-principles story for Nikhil Kamath'],
    ['This is the story of the platform they never had — told through one rider\'s first thirty days.', 'This is the story of the infrastructure they never had — seen through one illustrative worker and the enterprise operating around him.'],
  ],
  ns2r: [
    ['The supply side · and the demand side', 'An illustrative composite · the supply side and the demand side'],
    ['Meet Ravi.', 'Meet Ravi.'],
  ],
  ns5: [
    ['Ravi&rsquo;s screen', 'Worker view · discovery without a CV'],
    ['What Ravi sees · 3–4K join like this every month · <b>apply → shortlist in &lt;24 hr</b>', 'Worker benefit: a nearby, credible job in his language · <b>Employer benefit: a qualified funnel in &lt;24 hr</b>'],
  ],
  ns6: [
    ['The employer&rsquo;s screen', 'Employer view · risk before deployment'],
    ['What the ops team wakes up to · every case dated &amp; audit-ready · <b>turnaround &lt;24 hr</b>', 'Worker benefit: one reusable verification · <b>Employer benefit: a dated, audit-ready risk portfolio in &lt;24 hr</b>'],
  ],
  ns7: [
    ['The employer&rsquo;s screen', 'Employer view · one joining control room'],
    ['What the ops team sees · who is stuck, and where · <b>0 office visits, 0 photocopies</b>', 'Worker benefit: join from anywhere · <b>Employer benefit: every bottleneck visible, 0 re-entry</b>'],
  ],
  ns8: [
    ['The employer&rsquo;s screen', 'Employer view · the workforce, live'],
    ['The hub manager&rsquo;s live view while Ravi punches in · <b>no card, no register, no buddy-punching</b>', 'Worker benefit: a trusted shift history · <b>Employer benefit: live presence without cards, registers or buddy-punching</b>'],
  ],
  ns9: [
    ['The employer&rsquo;s screen — every vendor&rsquo;s PF &amp; ESI, checked monthly', 'Employer view · every vendor liability, before the audit'],
    ['Ravi&rsquo;s screen', 'Worker view · every rupee explained'],
    ['Ravi&rsquo;s first payslip — <b>the first financial document he has ever owned</b>', 'Worker benefit: pay he can understand and prove · <b>Employer benefit: leakage and statutory exposure caught before payout</b>'],
  ],
  ns10: [
    ['Ravi&rsquo;s screen', 'Worker view · learning that unlocks earnings'],
    ['Training between orders · <b>88% finish, against 25% industry</b>', 'Worker benefit: credentials that unlock better shifts · <b>Employer benefit: 88% completion and deployment readiness</b>'],
  ],
  ns10b: [
    ['Ravi&rsquo;s credential', 'The shared asset · owned by the worker, trusted by employers'],
    ['One of <b>30 million</b> records like this — the asset under the whole company', 'One of <b>30 million</b> compounding records — portable for Ravi, lower-friction for every next employer'],
  ],
  ns11: [
    ['Ravi&rsquo;s screen', 'Worker view · a public path into retail'],
  ],
  ns12: [
    ['We won\'t lead with "AI" — everyone uses it.', 'AI is not the story by itself.'],
  ],
  ns13: [
    ['And a real business underneath — the staffing arm alone does $105M+ in annual gross revenue.', 'And there is a scaled operating business underneath — the staffing arm alone does $105M+ in annual gross revenue; segment margins, software mix and cohort economics remain the next underwriting questions.'],
  ],
}

const applyCopy = (html: string, edits: Array<[string, string]>) =>
  edits.reduce((out, [from, to]) => out.replace(from, to), html)

const addRichScope = (html: string) => html
  .replace('class="slidebody split"', 'class="slidebody split nk-rich"')
  .replace('class="slidebody"', 'class="slidebody nk-rich"')
  .replace('class="mdcover"', 'class="mdcover nk-rich"')

export const nkRichStorySlides: SlideDef[] = nkStorySlides.map((slide, index) => ({
  ...slide,
  id: `nkr${index + 1}`,
  html: addRichScope(applyCopy(slide.html, COPY_EDITS[slide.id] ?? [])),
}))

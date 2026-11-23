// Decks built for a named client. Listed on the #/clients page (seller view only, never in a
// client share link). Add a row here whenever a new client deck is registered.
// colour = the client accent used in the share link (?for=…&c=…).

export interface ClientDeck { id: string; client: string; colour: string; topic: string; when: string; note: string }

export const clientDecks: ClientDeck[] = [
  { id: 'syrma', client: 'Syrma SGS', colour: '0B3D91', topic: 'CLMS', when: 'Nov 2026', note: 'EMS, 14 plants, ~8,250 contract workers, 48% women: scale-up for new plants, women on shift, customer audits.' },
  { id: 'dtss-lms', client: 'DTSS (SIS Group)', colour: 'F39200', topic: 'LMS', when: 'Nov 2026', note: 'Final leadership call: their nine asks answered, AI reels built for DTSS, trainer site sessions, certification, nudges and customer training reports.' },
  { id: 'ril-incentive-os', client: 'Reliance Retail', colour: '0A2D6E', topic: 'Incentives', when: 'Nov 2026', note: 'Leadership deck for the new SPOC: Excel chain today, four verticals on one engine, 100% pilot match for March and April, controls, system fit, 8-week go-live.' },
  { id: 'skh', client: 'SKH', colour: 'C8102E', topic: 'CLMS', when: 'Oct 2026', note: 'Second meeting with the CHRO: their numbers, his five questions answered, 12-hour overtime at 2×, worker voice, references and commercials.' },
  { id: 'bpcl-ai', client: 'Bharat Petroleum', colour: '0B4EA2', topic: 'AI Labs', when: 'Oct 2026', note: 'IOWMS processes, eight agents mapped to them, three agents in action, how to start, then AI Labs capabilities.' },
  { id: 'hyundai', client: 'Hyundai Motor India', colour: '002C5F', topic: 'CLMS', when: 'Nov 2026', note: 'Evaluation panel deck in their agenda order (overview, 13 feature areas, demo, Q&A), plus clickable prototype at /studio/hyundai: vendors and work orders, float pool, access and integrations.' },
  { id: 'hyundai-brief', client: 'Hyundai Motor India', colour: '002C5F', topic: 'CLMS', when: 'Nov 2026', note: 'Read-through leave-behind after the 23 Nov panel: 21 slides plus appendix.' },
  { id: 'tata-electronics', client: 'Tata Electronics', colour: '1B3F8B', topic: 'CLMS', when: 'Oct 2026', note: 'Working session: roster, absence, payroll, attrition, vendors, compliance and hire, with Tamil onboarding.' },
  { id: 'ril-content', client: 'Reliance O2C', colour: '0A2D6E', topic: 'Skilling', when: '2026', note: 'Skilling content and commercials: 250 trades, five formats, per-minute rate card.' },
  { id: 'jll-capgemini', client: 'JLL × Capgemini', colour: 'E30613', topic: 'Attendance', when: '2026', note: 'Response to the six requirement items: workflow, reports, network backup, timeline, hardware, liability.' },
  { id: 'jll', client: 'JLL India', colour: 'E30613', topic: 'CLMS', when: '2026', note: 'Sign in and out, attendance, induction, permits and safe work method on CLMS and HCM.' },
  { id: 'pwc-clms', client: 'PwC India', colour: 'D04A02', topic: 'CLMS', when: '2026', note: 'Joint proposal: AI-driven contract-labour deployment optimisation and time-office automation.' },
  { id: 'sael', client: 'SAEL', colour: '1F7A3A', topic: 'CLMS', when: '2026', note: 'Work orders, licensed strength, PF/ESI reconciliation, gate passes, attendance and overtime.' },
]

export const clientDeckUrl = (d: ClientDeck) =>
  `${window.location.origin}${window.location.pathname}?for=${encodeURIComponent(d.client)}&c=${d.colour}#/deck/${d.id}`

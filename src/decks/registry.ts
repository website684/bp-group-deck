import type { DeckDef, SlideDef } from '../lib/types'
import { groupSlides } from './group'
import { aiLabsSlides } from './ai-labs'
import { skillbetterSlides } from './skillbetter'
import { attendanceSlides } from './attendance'
import { payrollSlides } from './payroll'
import { verifySlides } from './verify'
import { hireOnboardSlides } from './hire-onboard'
import { hrisSlides } from './hris'
import { staffingSlides } from './staffing'
import { industryDecks } from './industries'

export const decks: DeckDef[] = [
  {
    id: 'group', title: 'The BetterPlace Group Story', group: 'story',
    tagline: 'The full company pitch — problem, model, every product, proof and how to start. The one to open the meeting with.',
    slides: groupSlides,
  },
  {
    id: 'ai-labs', title: 'AI Labs', group: 'ai',
    tagline: 'The flagship. Build an AI worker in 10 minutes — the studio, the agent roster, deterministic workflows, in-chat apps, pricing and live proof.',
    slides: aiLabsSlides,
  },
  {
    id: 'skillbetter', title: 'skillBetter · LMS', group: 'product',
    tagline: '88% completion vs 25% industry — translation in 15 minutes, reels, gamification, proctored assessments, admin console.',
    slides: skillbetterSlides,
  },
  {
    id: 'hire-onboard', title: 'Hire & Onboard', group: 'product',
    tagline: 'Full ATS + digital onboarding: WhatsApp-apply, AI screening, 10-minute self-onboarding straight into payroll.',
    slides: hireOnboardSlides,
  },
  {
    id: 'verify', title: 'verifyBetter · BGV', group: 'product',
    tagline: 'India’s first digital frontline BGV — 50K cases/day, <24hr TAT, red/yellow/green portfolio view.',
    slides: verifySlides,
  },
  {
    id: 'attendance', title: 'Attendance · manageBetter', group: 'product',
    tagline: 'Face-verified, geo-fenced, spoof-proof attendance with rostering, approvals and a policy engine.',
    slides: attendanceSlides,
  },
  {
    id: 'payroll', title: 'Payroll & Compliance', group: 'product',
    tagline: 'Never inherit a vendor’s PF/ESI liability — challan OCR, worker-by-worker reconciliation, audit-ready.',
    slides: payrollSlides,
  },
  {
    id: 'hris', title: 'goBetter HRIS Core', group: 'product',
    tagline: 'One worker record every module reads — employee master, 360° profiles, embedded BI.',
    slides: hrisSlides,
  },
  {
    id: 'staffing', title: 'staffBetter & gigBetter', group: 'services',
    tagline: 'Managed staffing with EoR compliance, and outcome-billed gig deployment in under 24 hours.',
    slides: staffingSlides,
  },
  ...industryDecks,
]

export function getDeck(id: string): DeckDef | undefined {
  return decks.find((d) => d.id === id)
}

/** Modules that can be stitched into a custom flow */
export const COMPOSABLE = ['ai-labs', 'skillbetter', 'hire-onboard', 'verify', 'attendance', 'payroll', 'hris', 'staffing']

export function composeCustom(mods: string[]): SlideDef[] {
  const opening = groupSlides.filter((s) => ['s1', 's2', 's3', 's5'].includes(s.id))
  const closing = groupSlides.filter((s) => ['s13', 's15', 'sclose'].includes(s.id))
  const middle = mods
    .filter((m) => COMPOSABLE.includes(m))
    .flatMap((m) => getDeck(m)?.slides ?? [])
  // de-dupe by id in case module decks share group slides
  const seen = new Set<string>()
  return [...opening, ...middle, ...closing].filter((s) => {
    if (seen.has(s.id)) return false
    seen.add(s.id)
    return true
  })
}

export function buildCustomDeck(mods: string[]): DeckDef {
  return {
    id: 'custom',
    title: 'Custom flow',
    tagline: 'Stitched for this meeting',
    group: 'story',
    slides: composeCustom(mods),
  }
}

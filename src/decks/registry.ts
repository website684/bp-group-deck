import type { DeckDef, SlideDef } from '../lib/types'
import { groupSlides } from './group'
import { aiLabsSlides } from './ai-labs'
import { skillbetterSlides } from './skillbetter'
import { attendanceSlides } from './attendance'
import { payrollSlides } from './payroll'
import { verifySlides } from './verify'
import { hireOnboardSlides } from './hire-onboard'
import { hrisSlides } from './hris'
import { staffbetterSlides } from './staffbetter'
import { gigbetterSlides } from './gigbetter'
import { industryDecks } from './industries'
import { incentivesSlides } from './incentives'
import { salesStorySlides } from './sales-story'
import { mfgStorySlides } from './mfg-story'
import { gobetterSlides } from './gobetter'

export const decks: DeckDef[] = [
  {
    id: 'group', next: 'ai-labs', title: 'The BetterPlace Group Story', group: 'story',
    tagline: 'The executive pitch in 16 slides — problem, cost, model, every product, proof and how to start. The one to open the meeting with.',
    // Executive cut: cover → problem → cost → buyer value → model → lifecycle →
    // products → AI → services → outcomes → why us → start. Deep decks carry the rest.
    slides: ['s1', 's2', 's13b', 's2b', 's5', 's6', 's7', 's8', 's8b', 's9', 's10', 's11', 's12', 's14', 's14b', 'sclose']
      .map((id) => groupSlides.find((s) => s.id === id)!),
  },
  {
    id: 'sales-story', next: 'mfg-story', title: 'goBetter for Sales Teams', group: 'story',
    tagline: 'The story for revenue leaders — field and retail sellers hired, trained, coached, tracked and incentivised on one platform.',
    slides: salesStorySlides,
  },
  {
    id: 'mfg-story', next: 'gobetter', title: 'goBetter for Manufacturing', group: 'story',
    tagline: 'The story for plant leaders — contract labour sourced, verified, gate-passed, attended, paid, kept compliant and safety-trained on one platform.',
    slides: mfgStorySlides,
  },
  {
    id: 'ai-labs', next: 'skillbetter', title: 'AI Labs', group: 'ai',
    tagline: 'The flagship. Build an AI worker in 10 minutes — the studio, the agent roster, deterministic workflows, in-chat apps, pricing and live proof.',
    slides: aiLabsSlides,
  },
  {
    id: 'gobetter', next: 'ai-labs', title: 'goBetter · The Full Suite', group: 'product',
    tagline: 'All eight software modules in one deck — hire, onboard, verify, attend, payroll, incentives, LMS and the HRIS core they share.',
    slides: gobetterSlides,
  },
  {
    id: 'skillbetter', next: 'hire-onboard', title: 'skillBetter · LMS', group: 'product',
    tagline: '88% completion vs 25% industry — translation in 15 minutes, reels, gamification, proctored assessments, admin console.',
    slides: skillbetterSlides,
  },
  {
    id: 'hire-onboard', next: 'verify', title: 'Hire & Onboard', group: 'product',
    tagline: 'Full ATS + digital onboarding: WhatsApp-apply, AI screening, 10-minute self-onboarding straight into payroll.',
    slides: hireOnboardSlides,
  },
  {
    id: 'verify', next: 'attendance', title: 'verifyBetter · BGV', group: 'product',
    tagline: 'India’s first digital frontline BGV — 50K cases/day, <24hr TAT, red/yellow/green portfolio view.',
    slides: verifySlides,
  },
  {
    id: 'attendance', next: 'payroll', title: 'Attendance · manageBetter', group: 'product',
    tagline: 'Face-verified, geo-fenced, spoof-proof attendance with rostering, approvals and a policy engine.',
    slides: attendanceSlides,
  },
  {
    id: 'incentives', next: 'hris', title: 'goBetter Incentives', group: 'product',
    tagline: 'Every sale rewarded, every rupee explained — AI-built schemes, live earnings in the associate’s pocket, disputes that close themselves.',
    slides: incentivesSlides,
  },
  {
    id: 'payroll', next: 'incentives', title: 'Payroll & Compliance', group: 'product',
    tagline: 'Never inherit a vendor’s PF/ESI liability — challan OCR, worker-by-worker reconciliation, audit-ready.',
    slides: payrollSlides,
  },
  {
    id: 'hris', next: 'staffbetter', title: 'goBetter HRIS Core', group: 'product',
    tagline: 'One worker record every module reads — employee master, 360° profiles, embedded BI.',
    slides: hrisSlides,
  },
  {
    id: 'staffbetter', next: 'gigbetter', title: 'staffBetter · Managed Staffing', group: 'services',
    tagline: 'Full-time frontline staffing with employer-of-record compliance — deployed in 24–72 hours from the verified 25M+ pool.',
    slides: staffbetterSlides,
  },
  {
    id: 'gigbetter', next: 'ai-labs', title: 'gigBetter · On-demand Gig', group: 'services',
    tagline: 'Outcome-billed gig deployment in under 24 hours — GPS + photo proof on every task, <4% no-shows.',
    slides: gigbetterSlides,
  },
  ...industryDecks,
]

export function getDeck(id: string): DeckDef | undefined {
  return decks.find((d) => d.id === id)
}

/** Modules that can be stitched into a custom flow */
export const COMPOSABLE = ['ai-labs', 'skillbetter', 'hire-onboard', 'verify', 'attendance', 'payroll', 'incentives', 'hris', 'staffbetter', 'gigbetter']

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

import { useState } from 'react'
import type { ClientConfig, DeckDef } from '../lib/types'
import { decks, composeCustom, COMPOSABLE } from '../decks/registry'
import { buildShareUrl } from '../lib/share'

interface Props {
  client: ClientConfig | null
  shareMode?: boolean
  onOpen: (deckId: string, custom?: string[]) => void
  onEditClient: () => void
}

export default function Hub({ client, shareMode = false, onOpen, onEditClient }: Props) {
  const [picking, setPicking] = useState(false)
  const [picked, setPicked] = useState<string[]>([])
  const [copied, setCopied] = useState(false)
  const accent = client?.color || '#FFC401'

  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(buildShareUrl(client))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      prompt('Copy this client link:', buildShareUrl(client))
    }
  }

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  const byGroup = (g: DeckDef['group']) => decks.filter((d) => d.group === g)
  const card = (d: DeckDef, extra = '') => (
    <button key={d.id} className={`deck-card ${extra}`} onClick={() => onOpen(d.id)}>
      <span className="dc-count">{d.slides.length} slides</span>
      <h3>{d.title}</h3>
      <p>{d.tagline}</p>
      <span className="dc-go">Open deck →</span>
    </button>
  )

  return (
    <div className="hubpage" style={{ ['--client' as never]: accent }}>
      <header className="hubpage-top">
        <div className="marks">
          <img src="assets/logo/bp-white.png" alt="BetterPlace" className="hub-bp" />
          {client && (client.logo || client.name) && (
            <>
              <span className="x">✕</span>
              {client.logo ? <img className="hub-clogo" src={client.logo} alt={client.name} /> : <span className="hub-cname">{client.name}</span>}
            </>
          )}
        </div>
        {!shareMode && (
          <div style={{ display: 'flex', gap: 10 }}>
            {(client?.name || client?.logo) && (
              <button className="btn-ghost small" onClick={copyShareLink}>{copied ? '✓ Link copied' : 'Copy client link'}</button>
            )}
            <button className="btn-primary small-cta" onClick={onEditClient}>
              {(client?.name || client?.logo) ? '✎ Client branding' : '✎ Customize for a client'}
            </button>
          </div>
        )}
      </header>

      <div className="hub-hero">
        <span className="eyebrow-h">BetterPlace · the frontline workforce platform</span>
        <h1>{client?.name ? `BetterPlace, presented for ${client.name}.` : 'Everything we do, ready to present.'}</h1>
        <p>
          BetterPlace helps large companies run their frontline teams — we <b>hire, verify, onboard,
          train, manage, pay and staff</b> blue-collar workers, with AI agents working underneath.
          This site is our pitch: every deck below opens like a slideshow in your browser.
          Present it in a meeting, or send someone the link.
        </p>
        <div className="hub-cta-row">
          <button className="btn-primary big" onClick={() => onOpen('group')}>▶ The 15-minute company story <span>{decks.find((d) => d.id === 'group')!.slides.length} slides</span></button>
          <button className="btn-ghost" onClick={() => onOpen('sales-story')}>For sales teams →</button>
          <button className="btn-ghost" onClick={() => { window.location.hash = '/roi' }}>💰 What you'd save</button>
          <button className="btn-ghost" onClick={() => { setPicking(!picking); setPicked([]) }}>
            {picking ? 'Cancel' : 'Mix your own deck'}
          </button>
        </div>
        {picking && (
          <div className="picker">
            <p>Pick the topics for this meeting — we'll stitch one deck with the company opening, your topics, and the proof close.</p>
            <div className="picker-chips">
              {COMPOSABLE.map((id) => {
                const d = decks.find((x) => x.id === id)!
                return (
                  <button key={id} className={`f-chip${picked.includes(id) ? ' on' : ''}`} onClick={() => toggle(id)}>
                    {d.title}
                  </button>
                )
              })}
            </div>
            <button className="btn-primary" disabled={!picked.length} onClick={() => onOpen('custom', picked)}>
              Present {picked.length ? `${composeCustom(picked).length} slides` : 'selection'} →
            </button>
          </div>
        )}
      </div>

      <section className="hub-section">
        <h2><i>01</i> Pick a solution</h2>
        <p className="hub-section-sub">Each product has its own deep-dive deck — problems it solves, real screenshots, outcomes, and how a pilot starts.</p>
        <div className="hub-grid wide" style={{ marginBottom: 14 }}>
          {byGroup('ai').map((d) => card(d, 'flag'))}
        </div>
        <div className="hub-grid">
          {byGroup('product').map((d) => card(d))}
          {byGroup('services').map((d) => card(d))}
        </div>
      </section>

      <section className="hub-section">
        <h2><i>02</i> Or start from what's bothering you</h2>
        <p className="hub-section-sub">Five problems we hear most often — each opens the deck that answers it.</p>
        <div className="hub-grid problems">
          <button className="deck-card lead" onClick={() => onOpen('custom', ['staffbetter', 'gigbetter'])}>
            <h3>"I can't fill workforce demand"</h3>
            <p>Verified workers deployed in 24–72 hours — full-time or on-demand gig.</p>
            <span className="dc-go">staffBetter + gigBetter →</span>
          </button>
          <button className="deck-card lead" onClick={() => onOpen('attendance')}>
            <h3>"I can't trust our attendance"</h3>
            <p>Face-verified punches, live rosters, exceptions in one queue.</p>
            <span className="dc-go">Attendance →</span>
          </button>
          <button className="deck-card lead" onClick={() => onOpen('payroll')}>
            <h3>"Payroll & compliance keep me up at night"</h3>
            <p>Challan reconciliation, wage validation, an audit file that's always ready.</p>
            <span className="dc-go">Payroll & Compliance →</span>
          </button>
          <button className="deck-card lead" onClick={() => onOpen('skillbetter')}>
            <h3>"Nobody finishes our training"</h3>
            <p>88% completion in 35+ languages — proctored, measured, gamified.</p>
            <span className="dc-go">skillBetter →</span>
          </button>
          <button className="deck-card lead" onClick={() => onOpen('hris')}>
            <h3>"Five systems, five different headcounts"</h3>
            <p>Every module reading one worker record — with built-in analytics.</p>
            <span className="dc-go">goBetter HRIS →</span>
          </button>
        </div>
      </section>

      <section className="hub-section">
        <h2><i>03</i> Or see it through your industry</h2>
        <p className="hub-section-sub">The same platform, told in your sector's language — with AI agents framed for your floor.</p>
        <div className="hub-grid">
          {byGroup('industry').map((d) => card(d))}
        </div>
      </section>

      <footer className="hub-foot">
        <span>BetterPlace · 25M+ workers · 1,000+ enterprises · 8 markets across India, SEA & GCC</span>
        <span>Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</span>
      </footer>
    </div>
  )
}

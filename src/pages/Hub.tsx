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

const groupLabels: Record<string, string> = {
  story: 'The story',
  ai: 'AI Labs — the flagship',
  product: 'Go deeper by product',
  services: 'Managed workforce services',
  industry: 'Industry lenses',
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
            <button className="btn-ghost small" onClick={copyShareLink}>{copied ? '✓ Link copied' : 'Copy client link'}</button>
            <button className="btn-ghost small" onClick={onEditClient}>Edit client branding</button>
          </div>
        )}
      </header>

      <div className="hub-hero">
        <span className="eyebrow-h">Enterprise sales studio</span>
        <h1>{client?.name ? `Present BetterPlace to ${client.name}.` : 'Present BetterPlace.'}</h1>
        <p>One platform for the frontline — hire, verify, manage, train, pay and staff. Open the full story, or go as deep as the room wants on any product.</p>
        <div className="hub-cta-row">
          <button className="btn-primary big" onClick={() => onOpen('group')}>▶ Present the group story <span>{decks.find((d) => d.id === 'group')!.slides.length} slides · 15 min</span></button>
          <button className="btn-ghost" onClick={() => { setPicking(!picking); setPicked([]) }}>
            {picking ? 'Cancel custom flow' : 'Build a custom flow'}
          </button>
          <button className="btn-ghost" onClick={() => { window.location.hash = '/roi' }}>
            💰 See what you'd save
          </button>
        </div>
        {picking && (
          <div className="picker">
            <p>Pick the modules for this room — we'll stitch a deck with the group opening, your modules, and the proof close.</p>
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

      {(['ai', 'product', 'services', 'industry'] as const).map((g) => (
        <section key={g} className="hub-section">
          <h2>{groupLabels[g]}</h2>
          <div className={`hub-grid ${g === 'ai' ? 'wide' : ''}`}>
            {byGroup(g).map((d) => (
              <button key={d.id} className={`deck-card ${g === 'ai' ? 'flag' : ''}`} onClick={() => onOpen(d.id)}>
                <span className="dc-count">{d.slides.length} slides</span>
                <h3>{d.title}</h3>
                <p>{d.tagline}</p>
                <span className="dc-go">Present →</span>
              </button>
            ))}
          </div>
        </section>
      ))}

      <footer className="hub-foot">
        <span>BetterPlace · Asia's frontline workforce platform · 25M+ workers · 1,000+ enterprises · 8 markets</span>
        <span>Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</span>
      </footer>
    </div>
  )
}

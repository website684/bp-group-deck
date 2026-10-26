import { useState } from 'react'
import { getDeck } from '../decks/registry'
import { clientDecks, clientDeckUrl } from '../decks/client-decks'

interface Props { onBack: () => void }

export default function ClientDecks({ onBack }: Props) {
  const [q, setQ] = useState('')
  const [copied, setCopied] = useState('')
  const rows = clientDecks.filter((d) => `${d.client} ${d.topic} ${d.note}`.toLowerCase().includes(q.toLowerCase()))

  const copy = async (id: string, url: string) => {
    try { await navigator.clipboard.writeText(url) } catch { prompt('Copy this client link:', url) }
    setCopied(id)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="hubpage">
      <header className="hubpage-top">
        <div className="marks"><img src="assets/logo/bp-white.png" alt="BetterPlace" className="hub-bp" /></div>
        <button className="btn-ghost small" onClick={onBack}>← All decks</button>
      </header>

      <div className="hub-hero">
        <span className="eyebrow-h">Deck Studio · client decks</span>
        <h1>Every deck we built for a client.</h1>
        <p>Open one to present, or copy the client link: it opens branded for that client with the seller controls hidden. These decks are link-only and never appear on the main page or in a client&rsquo;s link.</p>
        <input className="cd-search" placeholder="Search by client or topic" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>

      <section className="hub-section">
        <div className="hub-grid">
          {rows.map((d) => {
            const deck = getDeck(d.id)
            if (!deck) return null
            const url = clientDeckUrl(d)
            return (
              <div key={d.id} className="deck-card cd-card" style={{ ['--cd' as never]: `#${d.colour}` }}>
                <span className="dc-count">{d.topic} · {d.when} · {deck.slides.length} slides</span>
                <h3>{d.client}</h3>
                <p>{d.note}</p>
                <div className="cd-actions">
                  <a className="btn-primary small-cta" href={url}>Open deck →</a>
                  <button className="btn-ghost small" onClick={() => copy(d.id, url)}>{copied === d.id ? '✓ Copied' : 'Copy client link'}</button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

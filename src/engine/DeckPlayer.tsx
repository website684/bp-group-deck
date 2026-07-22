import { useEffect, useRef, useState } from 'react'
import type { DeckDef, ClientConfig, SlideDef } from '../lib/types'
import { getAIOverlay } from '../decks/ai-overlays'

function countUp(section: HTMLElement) {
  section.querySelectorAll<HTMLElement>('[data-t]').forEach((el) => {
    if (el.dataset.done === '1') return
    el.dataset.done = '1'
    const t = Number(el.dataset.t)
    if (!Number.isFinite(t)) return
    let v = 0
    const step = Math.max(1, Math.round(t / 26))
    const iv = window.setInterval(() => {
      v += step
      if (v >= t) {
        v = t
        window.clearInterval(iv)
      }
      el.textContent = v.toLocaleString('en-US')
    }, 28)
  })
}

interface Props {
  deck: DeckDef
  client: ClientConfig | null
  initialSlide?: number
  shareMode?: boolean
  onExit: () => void
}

export default function DeckPlayer({ deck, client, initialSlide = 0, shareMode = false, onExit }: Props) {
  const [cur, setCur] = useState(Math.min(Math.max(initialSlide, 0), deck.slides.length - 1))
  const [aiMode, setAiMode] = useState(false)
  const [aiOpen, setAiOpen] = useState(false)
  const deckRef = useRef<HTMLDivElement>(null)
  const curRef = useRef(0)
  curRef.current = cur
  const n = deck.slides.length

  const go = (i: number) => {
    if (i < 0 || i >= n) return
    setCur(i)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') go(curRef.current + 1)
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(curRef.current - 1)
      if (e.key === 'Home') go(0)
      if (e.key === 'End') go(n - 1)
      if (e.key === 'Escape') onExit()
    }
    let sx = 0
    const onTS = (e: TouchEvent) => { sx = e.touches[0].clientX }
    const onTE = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - sx
      if (Math.abs(dx) > 60) go(dx < 0 ? curRef.current + 1 : curRef.current - 1)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('touchstart', onTS, { passive: true })
    document.addEventListener('touchend', onTE, { passive: true })
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('touchstart', onTS)
      document.removeEventListener('touchend', onTE)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n])

  useEffect(() => {
    const root = deckRef.current
    if (!root) return
    const active = root.children[cur] as HTMLElement | undefined
    if (active) {
      active.scrollTop = 0
      countUp(active)
      active.querySelectorAll<HTMLVideoElement>('video').forEach((v) => { v.play().catch(() => {}) })
    }
  }, [cur])

  const slide: SlideDef = deck.slides[cur]
  const darkStrip = slide.theme !== 'light'
  const accent = client?.color || '#FFC401'

  return (
    <div className={`player${aiMode ? ' ai-mode' : ''}`} style={{ ['--client' as never]: accent }}>
      <div className="deck" ref={deckRef}>
        {deck.slides.map((s, i) => (
          <section
            key={s.id}
            className={`slide ${s.theme}${i === cur ? ' active' : ''}`}
            id={s.id}
            dangerouslySetInnerHTML={{ __html: s.html }}
          />
        ))}
      </div>

      <div className={`brandstrip topstrip ${darkStrip ? 'on-dark' : 'on-light'}`}>
        <div className="marks">
          <img className="bp" src={darkStrip ? 'assets/logo/bp-white.png' : 'assets/logo/bp-blue.png'} alt="BetterPlace" />
          {client && (client.logo || client.name) && (
            <>
              <span className="x">✕</span>
              {client.logo
                ? <img className="clogo" src={client.logo} alt={client.name || 'Client'} />
                : <span className="cname" style={{ borderColor: accent }}>{client.name}</span>}
            </>
          )}
        </div>
        <span className="conf">
          {client?.name ? `Prepared for ${client.name} · ` : ''}Confidential · {String(cur + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="nav">
        <button className="arrow" aria-label="Menu" title="Back to menu (Esc)" onClick={onExit}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        </button>
        <button className="arrow" aria-label="Previous" onClick={() => go(cur - 1)}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div className="dots">
          {deck.slides.map((s, i) => (
            <div key={s.id} className={`nd${i === cur ? ' on' : ''}`} title={s.title} onClick={() => go(i)} />
          ))}
        </div>
        <span className="pageno">{String(cur + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
        <button className="arrow" aria-label="Next" onClick={() => go(cur + 1)}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6"/></svg>
        </button>
        <button className={`ai-toggle${aiMode ? ' on' : ''}`} title="Show how AI Labs powers each capability" onClick={() => setAiMode(!aiMode)}>
          <span className="d" />✦ AI
        </button>
        {aiMode && (
          <button className="ai-toggle" title="The full AI picture for this area" onClick={() => setAiOpen(true)}>
            What AI does here →
          </button>
        )}
        <button className="arrow" aria-label="Download PDF" title="Download as PDF (print)" onClick={() => window.print()}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 21h16"/></svg>
        </button>
        {cur === n - 1 && deck.next && (
          <button className="nextdeck" onClick={() => { window.location.hash = `/deck/${deck.next}` }}>
            Next: {deck.next.replace(/-/g, ' ')} →
          </button>
        )}
      </div>

      {aiOpen && (() => {
        const ov = getAIOverlay(deck.id)
        return (
          <div className="ai-overlay" onClick={(e) => { if (e.target === e.currentTarget) setAiOpen(false) }}>
            <div className="ai-poster">
              <button className="ai-close" onClick={() => setAiOpen(false)}>✕ Close</button>
              <span className="ai-kicker">✦ AI Labs × {ov.domain}{client?.name ? ` · for ${client.name}` : ''}</span>
              <h1>{ov.headline}</h1>
              <p className="ai-sub">{ov.sub}</p>
              <div className="ai-levers">
                {ov.levers.map((l) => (
                  <div key={l.title} className="ai-lever">
                    <div className="ln">{l.n}</div>
                    <h4>{l.title}</h4>
                    <p>{l.desc}</p>
                  </div>
                ))}
              </div>
              <div className="ai-roster">
                <span className="ai-roster-label">The agents on this job</span>
                {ov.agents.map((a) => (
                  <span key={a.name} className={`ai-chip ${a.status}`}><i />{a.name} <em>· {a.role}</em></span>
                ))}
              </div>
              <div className="ai-rail">
                <span><b>1</b> AI does the heavy lifting</span><i>→</i>
                <span><b>2</b> Your team reviews</span><i>→</i>
                <span><b>3</b> Deterministic where it must be</span><i>→</i>
                <span><b>4</b> Every action on the audit log</span>
              </div>
              <div className="ai-poster-foot">
                <span>Private LLMs · data stays in India · ISO 27001 · SOC 2 · credits from ₹0.37/interaction</span>
                <div className="ai-poster-ctas">
                  {deck.id !== 'ai-labs' && (
                    <button className="btn-primary" onClick={() => { window.location.hash = '/deck/ai-labs' }}>Open the AI Labs deck →</button>
                  )}
                  <a className="btn-ghost" href={`mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent(`AI in ${ov.domain}${client?.name ? ' — ' + client.name : ''}`)}`}>Talk AI with us</a>
                </div>
              </div>
            </div>
          </div>
        )
      })()}

      {shareMode && (
        <a
          className="demo-cta"
          href={`mailto:anuj.saxena@betterplace.co.in,onkar.vartak@betterplace.co.in?subject=${encodeURIComponent(`Demo request${client?.name ? ' — ' + client.name : ''} (via BetterPlace deck)`)}&body=${encodeURIComponent('Hi — we went through the BetterPlace deck and would like a 30-minute demo. Areas of interest: ')}`}
        >
          Book a 30-min demo →
        </a>
      )}
    </div>
  )
}

import { useEffect, useState } from 'react'
import Setup from './pages/Setup'
import Hub from './pages/Hub'
import Roi from './pages/Roi'
import DeckPlayer from './engine/DeckPlayer'
import { loadClient } from './lib/client'
import { parseShare } from './lib/share'
import { getDeck, buildCustomDeck } from './decks/registry'

const share = parseShare()

function parseHash(): { route: string; id?: string; mods?: string[]; slide?: number } {
  const h = window.location.hash.replace(/^#\/?/, '')
  if (!h) return { route: 'root' }
  const [path, query] = h.split('?')
  const parts = path.split('/').filter(Boolean)
  if (parts[0] === 'setup') return { route: 'setup' }
  if (parts[0] === 'hub') return { route: 'hub' }
  if (parts[0] === 'roi') return { route: 'roi' }
  if (parts[0] === 'deck' && parts[1]) {
    const q = new URLSearchParams(query || '')
    const mods = q.get('mods')?.split(',').filter(Boolean)
    const slide = Number(q.get('s')) || 0
    return { route: 'deck', id: parts[1], mods, slide }
  }
  return { route: 'root' }
}

export default function App() {
  const [hash, setHash] = useState(parseHash())
  const [, bump] = useState(0) // re-read client after setup saves

  useEffect(() => {
    const onHash = () => setHash(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Share mode: the link a client opens — branded from URL params, seller tools hidden.
  const client = share.active ? share.client : loadClient()
  const nav = (to: string) => { window.location.hash = to }

  // The front page is the hub; client setup is opt-in via the top-right button.
  if (!share.active && hash.route === 'setup') {
    return <Setup initial={client} onDone={() => { bump((x) => x + 1); nav('/hub') }} />
  }

  if (hash.route === 'roi') {
    return <Roi client={client} onBack={() => nav('/hub')} />
  }

  if (hash.route === 'deck' && hash.id) {
    const deck = hash.id === 'custom' && hash.mods?.length
      ? buildCustomDeck(hash.mods)
      : getDeck(hash.id)
    if (deck) {
      return <DeckPlayer key={window.location.hash} deck={deck} client={client} initialSlide={hash.slide ?? 0} shareMode={share.active} onExit={() => nav('/hub')} />
    }
  }

  return (
    <Hub
      client={client}
      shareMode={share.active}
      onOpen={(id, custom) => nav(custom?.length ? `/deck/custom?mods=${custom.join(',')}` : `/deck/${id}`)}
      onEditClient={() => nav('/setup')}
    />
  )
}

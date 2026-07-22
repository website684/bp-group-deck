import type { ClientConfig } from './types'

/** Share mode: ?for=Client%20Name&c=0057B8&ind=Retail opens the branded hub
 *  directly with seller controls hidden. Params live in the query string
 *  (before the hash) so they survive hash routing. */
export function parseShare(): { active: boolean; client: ClientConfig | null } {
  const q = new URLSearchParams(window.location.search)
  const name = q.get('for')?.trim()
  const c = q.get('c')?.replace(/[^0-9a-fA-F]/g, '')
  if (!name && !c) return { active: false, client: null }
  return {
    active: true,
    client: {
      name: name || '',
      color: c && (c.length === 6 || c.length === 3) ? `#${c}` : '#FFC401',
      logo: null,
      industry: q.get('ind') || 'General',
    },
  }
}

export function buildShareUrl(client: ClientConfig | null): string {
  const base = window.location.origin + window.location.pathname
  const q = new URLSearchParams()
  if (client?.name) q.set('for', client.name)
  if (client?.color) q.set('c', client.color.replace('#', ''))
  if (client?.industry && client.industry !== 'General') q.set('ind', client.industry)
  const qs = q.toString()
  return `${base}${qs ? '?' + qs : ''}#/hub`
}

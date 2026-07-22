import type { ClientConfig } from './types'

const KEY = 'bp-one-client'

export function loadClient(): ClientConfig | null {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const c = JSON.parse(raw) as ClientConfig
    if (!c.name && !c.logo) return null
    return c
  } catch {
    return null
  }
}

export function saveClient(c: ClientConfig) {
  localStorage.setItem(KEY, JSON.stringify(c))
}

export function clearClient() {
  localStorage.removeItem(KEY)
}

export type SlideTheme = 'light' | 'dark' | 'darker'

export interface SlideDef {
  id: string
  theme: SlideTheme
  title: string
  html: string
}

export interface DeckDef {
  id: string
  title: string
  tagline: string
  group: 'story' | 'product' | 'services' | 'industry' | 'ai'
  slides: SlideDef[]
  /** id of the deck to suggest when this one ends ("Where next?") */
  next?: string
}

export interface ClientConfig {
  name: string
  color: string
  logo: string | null // data URI
  industry: string
}

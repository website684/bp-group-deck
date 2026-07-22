import { useRef, useState } from 'react'
import type { ClientConfig } from '../lib/types'
import { saveClient } from '../lib/client'

const PRESETS = ['#FFC401', '#D0271D', '#E4002B', '#0057B8', '#5A31F4', '#00A82D', '#FF6900', '#7C1F87']
const INDUSTRIES = ['General', 'Retail & Q-commerce', 'Manufacturing', 'Logistics & Delivery', 'BFSI & Field Sales', 'Tech & Services']

interface Props {
  initial: ClientConfig | null
  onDone: () => void
}

export default function Setup({ initial, onDone }: Props) {
  const [name, setName] = useState(initial?.name ?? '')
  const [color, setColor] = useState(initial?.color ?? '#FFC401')
  const [logo, setLogo] = useState<string | null>(initial?.logo ?? null)
  const [industry, setIndustry] = useState(initial?.industry ?? 'General')
  const fileRef = useRef<HTMLInputElement>(null)

  const onFile = (f: File | undefined) => {
    if (!f) return
    if (f.size > 2 * 1024 * 1024) {
      alert('Logo file is over 2MB — please use a smaller PNG/SVG.')
      return
    }
    const r = new FileReader()
    r.onload = () => setLogo(String(r.result))
    r.readAsDataURL(f)
  }

  const start = (skip = false) => {
    if (skip) {
      saveClient({ name: '', color: '#FFC401', logo: null, industry: 'General' })
    } else {
      saveClient({ name: name.trim(), color, logo, industry })
    }
    onDone()
  }

  return (
    <div className="setup">
      <div className="setup-card">
        <img src="assets/logo/bp-white.png" alt="BetterPlace" className="setup-bp" />
        <h1>Set up this pitch</h1>
        <p className="setup-sub">Add the client's brand once — their logo and colour follow you through every slide.</p>

        <label className="f-label">Client name</label>
        <input className="f-input" placeholder="e.g. Reliance Retail" value={name} onChange={(e) => setName(e.target.value)} />

        <label className="f-label">Client logo <span>(PNG / SVG, on transparent if possible)</span></label>
        <div className="f-logo-row">
          <button className="f-upload" onClick={() => fileRef.current?.click()}>
            {logo ? 'Replace logo' : 'Upload logo'}
          </button>
          {logo && <span className="f-logo-preview"><img src={logo} alt="Client logo" /></span>}
          {logo && <button className="f-clear" onClick={() => setLogo(null)}>Remove</button>}
          <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => onFile(e.target.files?.[0])} />
        </div>

        <label className="f-label">Brand colour <span>(used as the partner accent)</span></label>
        <div className="f-colors">
          {PRESETS.map((c) => (
            <button key={c} className={`f-swatch${color === c ? ' on' : ''}`} style={{ background: c }} onClick={() => setColor(c)} aria-label={c} />
          ))}
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="f-picker" title="Custom colour" />
        </div>

        <label className="f-label">Industry lens</label>
        <div className="f-industries">
          {INDUSTRIES.map((i) => (
            <button key={i} className={`f-chip${industry === i ? ' on' : ''}`} onClick={() => setIndustry(i)}>{i}</button>
          ))}
        </div>

        <div className="setup-actions">
          <button className="btn-primary" onClick={() => start(false)}>Open the deck studio →</button>
          <button className="btn-ghost" onClick={() => start(true)}>Skip — present without client branding</button>
        </div>
      </div>
    </div>
  )
}

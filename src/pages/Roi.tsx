import { useState } from 'react'
import type { ClientConfig } from '../lib/types'

interface Props {
  client: ClientConfig | null
  onBack: () => void
}

const fmt = (n: number) => {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(1)} Cr`
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`
  return `₹${Math.round(n).toLocaleString('en-IN')}`
}

export default function Roi({ client, onBack }: Props) {
  const [size, setSize] = useState(5000)
  const [wage, setWage] = useState(18000)
  const [attrition, setAttrition] = useState(15)
  const [trainCost, setTrainCost] = useState(15000)

  const annualPayroll = size * wage * 12
  const annualHires = Math.round(size * (attrition / 100) * 12)

  // Directional model — assumptions shown on screen, refined per client.
  const leakage = annualPayroll * 0.022 * 0.9 // 2.2% of payroll lost (Nucleus Research), ~90% recoverable
  const training = annualHires * trainCost * 0.6 // 60% lower cost per certified worker (Reliance)
  const attritionSave = annualHires * 0.15 * (trainCost + wage * 0.5) // −15% attrition; replacement ≈ training + half-month hiring cost
  const total = leakage + training + attritionSave

  const accent = client?.color || '#FFC401'

  return (
    <div className="hubpage roipage" style={{ ['--client' as never]: accent }}>
      <header className="hubpage-top">
        <div className="marks">
          <img src="assets/logo/bp-white.png" alt="BetterPlace" className="hub-bp" />
          {client?.name && (<><span className="x">✕</span><span className="hub-cname">{client.name}</span></>)}
        </div>
        <button className="btn-ghost small" onClick={onBack}>← Back to decks</button>
      </header>

      <div className="hub-hero">
        <span className="eyebrow-h">The maths · on your numbers</span>
        <h1>{client?.name ? `What ${client.name} would save in a year.` : 'What you would save in a year.'}</h1>
        <p>Move the sliders to your workforce. The model is directional — three savings lines, each anchored to a measured client result. We refine it together on the first call.</p>
      </div>

      <div className="roi-grid">
        <div className="roi-inputs">
          <label className="f-label">Frontline workforce size — <b>{size.toLocaleString('en-IN')}</b></label>
          <input type="range" min={200} max={50000} step={100} value={size} onChange={(e) => setSize(+e.target.value)} />
          <label className="f-label">Average monthly wage — <b>₹{wage.toLocaleString('en-IN')}</b></label>
          <input type="range" min={10000} max={40000} step={500} value={wage} onChange={(e) => setWage(+e.target.value)} />
          <label className="f-label">Monthly attrition — <b>{attrition}%</b> <span>(frontline average is 15%)</span></label>
          <input type="range" min={3} max={30} step={1} value={attrition} onChange={(e) => setAttrition(+e.target.value)} />
          <label className="f-label">Training cost per new hire — <b>₹{trainCost.toLocaleString('en-IN')}</b></label>
          <input type="range" min={3000} max={40000} step={500} value={trainCost} onChange={(e) => setTrainCost(+e.target.value)} />
          <p className="roi-note">Annual payroll ≈ <b>{fmt(annualPayroll)}</b> · hires replaced per year ≈ <b>{annualHires.toLocaleString('en-IN')}</b></p>
        </div>

        <div className="roi-outputs">
          <div className="roi-row"><div className="rn">{fmt(leakage)}</div><div><h4>Payroll leakage recovered</h4><p>Time theft averages 2.2% of gross payroll (Nucleus Research); face-verified attendance recovers ~90% of it — Reliance measured −90%.</p></div></div>
          <div className="roi-row"><div className="rn">{fmt(training)}</div><div><h4>Training cost, cut</h4><p>60% lower cost per certified worker via AI translation and the ready course library — measured at Reliance across 500K associates.</p></div></div>
          <div className="roi-row"><div className="rn">{fmt(attritionSave)}</div><div><h4>Attrition saving</h4><p>Benefits, upskilling and engagement cut attrition ~15% — every avoided exit cancels a hiring and training cycle.</p></div></div>
          <div className="roi-total"><span>Directional annual saving</span><b>{fmt(total)}</b></div>
          <a className="btn-primary big" href={`mailto:anuj.saxena@betterplace.co.in,onkar.vartak@betterplace.co.in?subject=${encodeURIComponent(`ROI model${client?.name ? ' — ' + client.name : ''}: ${fmt(total)}/yr`)}&body=${encodeURIComponent(`Our inputs: ${size} workers · ₹${wage} avg wage · ${attrition}% monthly attrition · ₹${trainCost} training cost/hire.\nDirectional saving: ${fmt(total)}/year.\n\nLet's validate this on a call.`)}`}>
            Send us these numbers → get the detailed model
          </a>
        </div>
      </div>

      <footer className="hub-foot">
        <span>Directional model — not a quote. Anchors: Nucleus Research time-theft study · Reliance Retail deployment (−90% leakage, 60% training cost) · BetterPlace Frontline Index.</span>
      </footer>
    </div>
  )
}

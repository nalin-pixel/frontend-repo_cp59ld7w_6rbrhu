import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Kontakt</h2>
            <p className="mt-2 text-blue-200/80">Melde dich bei uns – wir freuen uns auf dich!</p>

            <div className="mt-8 space-y-4 text-blue-100/90">
              <div className="flex items-center gap-3"><Phone size={18} className="text-cyan-300"/> <span>02364 / 123456</span></div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-cyan-300"/> <span>info@atv-haltern.de</span></div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-cyan-300"/> <span>Sportpark, 45721 Haltern am See</span></div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Vorname" className="rounded-xl bg-slate-900/60 px-4 py-3 text-white ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400"/>
                <input required placeholder="Nachname" className="rounded-xl bg-slate-900/60 px-4 py-3 text-white ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400"/>
                <input type="email" required placeholder="E-Mail" className="rounded-xl bg-slate-900/60 px-4 py-3 text-white ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400 sm:col-span-2"/>
                <textarea required placeholder="Nachricht" rows="4" className="rounded-xl bg-slate-900/60 px-4 py-3 text-white ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400 sm:col-span-2"/>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button type="submit" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 ring-1 ring-white/10">Senden</button>
                {sent && <span className="text-sm text-green-300">Danke! Wir melden uns zeitnah.</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

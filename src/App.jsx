import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divisions from './components/Divisions'
import Schedule from './components/Schedule'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Divisions />
      <Schedule />
      <Contact />

      <footer className="bg-slate-950/80 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} ATV Haltern e.V. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4 text-sm text-blue-200/70">
            <a href="#" className="hover:text-white">Impressum</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

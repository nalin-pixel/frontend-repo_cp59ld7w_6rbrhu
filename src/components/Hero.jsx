import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-28 sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-blue-100/90 ring-1 ring-white/10">
            Sport • Gemeinschaft • Leistung
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.55)]">
            ATV Haltern – Bewegung verbindet.
          </h1>
          <p className="mt-4 text-lg text-blue-100/90 max-w-xl">
            Trainingsangebote für alle Altersklassen. Von Breitensport bis Wettkampf – werde Teil unserer starken Gemeinschaft in Haltern am See.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#divisions" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 ring-1 ring-white/10">
              Abteilungen entdecken
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl bg-white/10 px-5 py-3 text-white font-semibold ring-1 ring-white/20 backdrop-blur hover:bg-white/15">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
    </section>
  );
}

export default function Divisions() {
  const divisions = [
    {
      name: 'Leichtathletik',
      desc: 'Ausdauer, Sprint, Sprung und Wurf – Training für alle Leistungsniveaus.',
    },
    {
      name: 'Turnen',
      desc: 'Gerätturnen und Bodenturnen für Kinder, Jugendliche und Erwachsene.',
    },
    {
      name: 'Fußball',
      desc: 'Mannschaftssport mit Tradition – Training, Spiele und Teamgeist.',
    },
    {
      name: 'Volleyball',
      desc: 'Hallen- und Beachvolleyball – Technik, Taktik und Spaß am Spiel.',
    },
    {
      name: 'Tischtennis',
      desc: 'Schnelligkeit und Präzision – Training für Anfänger bis Vereinsspieler.',
    },
    {
      name: 'Fitness & Kurse',
      desc: 'Kondition, Kraft und Beweglichkeit – Kurse für jedes Alter.',
    },
  ];

  return (
    <section id="divisions" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Abteilungen</h2>
          <p className="mt-2 text-blue-200/80">Vielfältige Angebote – finde deinen Sport.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((d) => (
            <div key={d.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-500/40 blur-2xl" />
              <h3 className="text-white font-semibold text-lg">{d.name}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{d.desc}</p>
              <a href="#contact" className="mt-6 inline-flex text-sm text-cyan-300 hover:text-cyan-200">Mehr erfahren →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

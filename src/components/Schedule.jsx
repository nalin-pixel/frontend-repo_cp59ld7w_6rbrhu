export default function Schedule() {
  const items = [
    { day: 'Montag', time: '18:00 – 20:00', title: 'Leichtathletik Jugend' },
    { day: 'Dienstag', time: '19:00 – 21:00', title: 'Volleyball Herren' },
    { day: 'Mittwoch', time: '17:00 – 19:00', title: 'Turnen Kinder' },
    { day: 'Donnerstag', time: '18:30 – 20:00', title: 'Fitness Zirkel' },
    { day: 'Freitag', time: '18:00 – 20:00', title: 'Fußball Training' },
  ];

  return (
    <section id="schedule" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Trainingszeiten</h2>
          <p className="mt-2 text-blue-200/80">Ein Überblick über unsere wöchentlichen Angebote.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5">
              <div className="text-xs uppercase tracking-wide text-blue-300/80">{i.day}</div>
              <div className="mt-1 text-sm text-blue-200/90">{i.time}</div>
              <div className="mt-3 text-white font-semibold">{i.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

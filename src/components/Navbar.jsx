import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Start" },
    { href: "#about", label: "Über uns" },
    { href: "#divisions", label: "Abteilungen" },
    { href: "#schedule", label: "Training" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 ring-2 ring-white/20 shadow-lg shadow-blue-500/20" />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-semibold">ATV Haltern</span>
                <span className="text-xs text-blue-200/80">Sportverein</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white font-medium shadow-lg shadow-blue-600/30 ring-1 ring-white/10">
                Mitglied werden
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/90"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-2 py-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-blue-100/90 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white font-medium shadow-lg shadow-blue-600/30 ring-1 ring-white/10">
                  Mitglied werden
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

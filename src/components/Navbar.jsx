import { useState } from 'react';
import { Menu, X, Shield, Phone, Mail, Globe } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Бидний тухай', href: '#about' },
    { label: 'Бүтээгдэхүүн', href: '#products' },
    { label: 'Хамрах хүрээ', href: '#coverage' },
    { label: 'Үнэ', href: '#pricing' },
    { label: 'Санал хүсэлт', href: '#testimonials' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#top" className="group inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-amber-400 grid place-items-center shadow-md">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold leading-tight">МонСекюр</p>
                <p className="text-[11px] text-blue-200/70 -mt-1 tracking-wide">Mongolian Insurance</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-blue-100 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+97670000000" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm transition-colors">
                <Phone className="h-4 w-4" /> 7000-0000
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-amber-400 text-slate-900 font-semibold px-4 py-2 text-sm shadow-md">
                Холбогдох
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 pb-6">
              <div className="flex flex-col gap-3 pt-4">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-blue-100 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href="mailto:hello@monsecure.mn" className="inline-flex items-center gap-2 text-blue-100 hover:text-white">
                  <Mail className="h-4 w-4" /> hello@monsecure.mn
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-blue-100 hover:text-white">
                  <Globe className="h-4 w-4" /> mn | en
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

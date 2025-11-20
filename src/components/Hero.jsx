import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[95svh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80svh]">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Ирээдүйн даатгал, өнөөдөр
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl"
            >
              Ухаалаг технологи, дата шинжилгээ болон 24/7 дижитал үйлчилгээтэй Монголын шинэ үеийн даатгалын экосистем.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#quote" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-amber-400 text-slate-900 font-semibold px-6 py-3 shadow-lg">
                Шуурхай санал
              </a>
              <a href="#products" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white px-6 py-3">
                Бүтээгдэхүүнүүдийг харах
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["20+ бүтээгдэхүүн","50k+ харилцагч","99.99% даатгалын нөөц","24/7 үйлчилгээ"].map((stat) => (
                <div key={stat} className="rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-4 text-center text-blue-100">
                  <p className="text-sm">{stat}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">
              <p className="text-blue-100 text-sm">Эрсдэлгүй ирээдүйн төлөвлөгөө</p>
              <h3 className="mt-2 text-white text-2xl font-semibold">AI суурьтай зэхэл, үнэлгээ</h3>
              <p className="mt-2 text-blue-200 text-sm">Холбогдон үнэгүй зөвлөгөө аваарай.</p>
              <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-300/60" placeholder="Нэр" />
                <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-300/60" placeholder="Утас" />
                <input className="sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-300/60" placeholder="И-мэйл" />
                <button type="button" className="sm:col-span-2 rounded-xl bg-gradient-to-r from-blue-500 to-amber-400 text-slate-900 font-semibold px-4 py-3">Илгээх</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

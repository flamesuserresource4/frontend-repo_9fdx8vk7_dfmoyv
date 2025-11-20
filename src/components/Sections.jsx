import { motion } from 'framer-motion';
import SectionShell from './SectionShell';
import ScrollingTicker from './ScrollingTicker';
import { ShieldCheck, Sparkles, CreditCard, Binary, Globe2, LifeBuoy, Clock3, Building2, ChartBar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Sections() {
  return (
    <div>
      {/* 1 About */}
      <SectionShell id="about" eyebrow="About" title="Монголын шинэ үеийн даатгал" description="Бид технологи, дата, хэрэглэгч төвтэй үйлчилгээний загварыг цогцоор нь нэвтрүүлж, даатгалын туршлагыг шинэчлэж байна.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Sparkles className="h-5 w-5 text-amber-300" />, title: 'Инноваци', text: 'AI, автоматжуулалт, шуурхай шийдэл' },
            { icon: <ShieldCheck className="h-5 w-5 text-blue-300" />, title: 'Найдвартай', text: 'Санхүүгийн баталгаа, уян хатан нөхцөл' },
            { icon: <Globe2 className="h-5 w-5 text-cyan-300" />, title: 'Дижитал', text: '24/7 онлайнаар бүх үйлчилгээ' },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/5 grid place-items-center">{f.icon}</div>
                <div>
                  <p className="text-white font-semibold">{f.title}</p>
                  <p className="text-blue-200 text-sm">{f.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* 2 Products */}
      <SectionShell id="products" eyebrow="Products" title="Даатгалын шийдлүүд" description="Хувь хүн, бизнесийн бүх хэрэгцээнд зориулсан иж бүрэн бүтээгдэхүүнүүд.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <CreditCard className="h-5 w-5" />, title: 'Амь нас, эрүүл мэнд', color:'from-blue-500 to-cyan-400' },
            { icon: <Building2 className="h-5 w-5" />, title: 'Авто, үл хөдлөх', color:'from-amber-400 to-orange-500' },
            { icon: <Binary className="h-5 w-5" />, title: 'Кибер эрсдэл', color:'from-violet-500 to-fuchsia-500' },
            { icon: <LifeBuoy className="h-5 w-5" />, title: 'Аялал', color:'from-emerald-500 to-teal-400' },
            { icon: <ChartBar className="h-5 w-5" />, title: 'Бизнесийн тасалдал', color:'from-pink-500 to-rose-500' },
            { icon: <ShieldCheck className="h-5 w-5" />, title: 'Хариуцлага', color:'from-sky-500 to-indigo-500' },
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.06 }} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${p.color} text-white grid place-items-center`}>{p.icon}</div>
              <p className="mt-4 text-white font-semibold">{p.title}</p>
              <button className="mt-3 inline-flex items-center gap-2 text-amber-300 hover:text-white text-sm">Дэлгэрэнгүй <ArrowRight className="h-4 w-4"/></button>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* 3 Coverage */}
      <SectionShell id="coverage" eyebrow="Coverage" title="Хамрах хүрээ" description="Эрсдэл бүрийг датагаар үнэлж, бодитой нөхөн төлбөрийн бодлого баримтална.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Осол, гэмтэл","Өвчин","Хулгай","Гал, усны аюул","Кибер халдлага","Аяллын саатал","Хариуцлага","Бусад"].map((c, i)=> (
            <motion.div key={c} initial={{ opacity:0, y: 10}} whileInView={{opacity:1, y:0}} transition={{delay:i*0.05}} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-blue-100">
              {c}
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* 4 Numbers */}
      <SectionShell id="numbers" eyebrow="Numbers" title="Тойм үзүүлэлтүүд">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{n:'500k+',l:'даатгалын гэрээ'},{n:'98%',l:'сэтгэл ханамж'},{n:'1.2b',l:'₮ нөхөн төлбөр'},{n:'24/7',l:'дэмжлэг'}].map((s,i)=> (
            <motion.div key={i} initial={{scale:0.9, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{delay:i*0.1}} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">{s.n}</p>
              <p className="text-blue-100 mt-2">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* 5 Process */}
      <SectionShell id="process" eyebrow="Process" title="Хэрхэн ажилладаг вэ?">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["Санал авах","Үнэлгээ","Гэрээ","Аппаар хянах"].map((step, i)=> (
            <motion.div key={step} initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:i*0.1}} className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <div className="h-10 w-10 rounded-lg bg-white/10 text-white grid place-items-center font-semibold">{i+1}</div>
              <p className="text-white mt-4 font-semibold">{step}</p>
              <p className="text-blue-200 text-sm mt-1">Товч тайлбар энд орно.</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* 6 Ticker */}
      <SectionShell id="partners" eyebrow="Partners" title="Хамтрагч байгууллагууд">
        <ScrollingTicker items={["Golomt Bank","Khan Bank","TDB","Nomin","Skytel","Unitel","Mobicom","Shangri-La","MIK","BCC"]} />
      </SectionShell>

      {/* 7 Testimonials */}
      <SectionShell id="testimonials" eyebrow="Testimonials" title="Хэрэглэгчдийн үнэлгээ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-blue-100">“Шуурхай, ойлгомжтой, апп маш гоё.”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-amber-400" />
                <div>
                  <p className="text-white text-sm font-semibold">Харилцагч {i}</p>
                  <p className="text-blue-300 text-xs">Улаанбаатар</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* 8 Pricing */}
      <SectionShell id="pricing" eyebrow="Pricing" title="Уян хатан багцууд">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{t:'Basic',p:'₮19,900/сар'},{t:'Plus',p:'₮39,900/сар'},{t:'Pro',p:'₮79,900/сар'}].map((pkg, i)=> (
            <motion.div key={pkg.t} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className={`rounded-2xl border ${i===1? 'border-amber-300/40' : 'border-white/10'} bg-slate-900/60 p-6`}>
              <p className="text-white font-semibold">{pkg.t}</p>
              <p className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent mt-2">{pkg.p}</p>
              <ul className="mt-4 space-y-2 text-blue-100 text-sm">
                {[1,2,3,4].map(j=> (
                  <li key={j} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-300"/> Давуу тал {j}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-500 to-amber-400 text-slate-900 font-semibold py-3">Сонгох</button>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* 9 Claims */}
      <SectionShell id="claims" eyebrow="Claims" title="Нөхөн төлбөрийн шийдэл">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{x:-20, opacity:0}} whileInView={{x:0, opacity:1}} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <p className="text-white font-semibold">Цахим мэдэгдэл</p>
            <p className="text-blue-100 mt-2">Аппаар 3 минутын дотор зарласан тохиолдолд автоматаар үнэлгээ хийгдэнэ.</p>
          </motion.div>
          <motion.div initial={{x:20, opacity:0}} whileInView={{x:0, opacity:1}} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <p className="text-white font-semibold">Шуурхай олголт</p>
            <p className="text-blue-100 mt-2">Баталгаажсан тохиолдолд 24 цагийн дотор данс руу шилжүүлнэ.</p>
          </motion.div>
        </div>
      </SectionShell>

      {/* 10 App */}
      <SectionShell id="app" eyebrow="App" title="Нэг апп – бүх үйлчилгээ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Гэрээний менежмент","Нөхөн төлбөр","24/7 чат","Дижитал карт","Урамшуулал","Аюулгүй байдал"].map((s,i)=> (
            <motion.div key={s} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay:i*0.05}} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5">
              <p className="text-white font-semibold">{s}</p>
              <p className="text-blue-200 text-sm mt-1">Тайлбар</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* 11 FAQ */}
      <SectionShell id="faq" eyebrow="FAQ" title="Түгээмэл асуултууд">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2,3,4,5,6].map(i=> (
            <motion.div key={i} initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-white font-semibold">Асуулт {i}</p>
              <p className="text-blue-200 mt-2 text-sm">Хариулт {i} - товч тайлбар.</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* 12 CTA */}
      <SectionShell id="quote" eyebrow="Get Quote" title="Танд хамгийн тохирсон даатгалыг санал болгоё">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <form className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input placeholder="Нэр" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-300/60"/>
              <input placeholder="Утас" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-300/60"/>
              <input placeholder="И-мэйл" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-300/60"/>
              <select className="sm:col-span-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white/90">
                <option>Бүтээгдэхүүн сонгох</option>
                <option>Амь нас</option>
                <option>Авто</option>
                <option>Кибер</option>
              </select>
              <button type="button" className="sm:col-span-3 rounded-xl bg-gradient-to-r from-blue-500 to-amber-400 text-slate-900 font-semibold px-4 py-3">Санал авах</button>
            </form>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-amber-400/10 p-6">
            <p className="text-white font-semibold">Таны мэдээлэл хамгаалагдсан</p>
            <p className="text-blue-100 mt-2 text-sm">ISO27001 стандарт, шифрлэлт, олон давхар хамгаалалт.</p>
          </div>
        </div>
      </SectionShell>

      {/* 13 Blog/Insights */}
      <SectionShell id="insights" eyebrow="Insights" title="Мэдээлэл, зөвлөмж">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <motion.a key={i} href="#" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 hover:bg-white/10 transition-colors">
              <p className="text-white font-semibold">Даатгалын зөвлөгөө {i}</p>
              <p className="text-blue-200 text-sm mt-2">Эрсдэлийг хэрхэн бууруулах талаар.</p>
            </motion.a>
          ))}
        </div>
      </SectionShell>

      {/* 14 Contact */}
      <SectionShell id="contact" eyebrow="Contact" title="Холбогдох">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <p className="text-white font-semibold">Утас: 7000-0000</p>
            <p className="text-blue-100">И-мэйл: hello@monsecure.mn</p>
            <p className="text-blue-100 mt-2">Хаяг: Улаанбаатар хот</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
            <p className="text-white font-semibold">Чат дэмжлэг</p>
            <p className="text-blue-200 mt-2 text-sm">24/7 чатбот болон мэргэжилтэн.</p>
          </div>
        </div>
      </SectionShell>

      {/* 15 Footer */}
      <footer className="relative py-12">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300/70 text-sm">© {new Date().getFullYear()} MonSecure Insurance</p>
          <div className="flex items-center gap-4 text-blue-100/80 text-sm">
            <a href="#privacy" className="hover:text-white">Нууцлал</a>
            <a href="#terms" className="hover:text-white">Нөхцөл</a>
            <a href="#top" className="hover:text-white">Дээш очих</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

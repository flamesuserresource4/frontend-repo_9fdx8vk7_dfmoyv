import { motion } from 'framer-motion';

export default function SectionShell({ id, eyebrow, title, description, children, gradient = 'from-blue-500/10 via-amber-400/10 to-blue-500/10' }) {
  return (
    <section id={id} className="relative py-24 sm:py-28">
      <div className={`pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(60%_40%_at_80%_120%,rgba(251,191,36,0.12),transparent)]`} />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl"
        >
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-widest text-amber-300/70">{eyebrow}</p>}
          {title && <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">{title}</h2>}
          {description && <p className="mt-3 text-blue-100 text-lg">{description}</p>}
        </motion.div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  );
}

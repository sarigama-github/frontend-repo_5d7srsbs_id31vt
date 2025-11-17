import { motion } from 'framer-motion'

const resources = [
  { title: 'Designing for Motion', desc: 'Principles for motion-first interfaces.' },
  { title: 'SaaS Landing Patterns', desc: 'Layout and component patterns that convert.' },
  { title: 'Analytics Starter', desc: 'Set up meaningful metrics and events.' },
]

export default function Resources() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-50/60">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold tracking-tight text-slate-800"
        >
          Resources
        </motion.h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <motion.a
              key={r.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="block rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-sm backdrop-blur hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-800">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-sky-700">Read more →</span>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  )
}

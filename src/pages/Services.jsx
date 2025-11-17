import { motion } from 'framer-motion'
import { Cog, Layers, Rocket, BarChart } from 'lucide-react'

const services = [
  { icon: Rocket, title: 'Product Launch', desc: 'From concept to launch with motion-first UI.' },
  { icon: Layers, title: 'Design Systems', desc: 'Consistent, scalable components and tokens.' },
  { icon: BarChart, title: 'Growth Analytics', desc: 'Data-informed iteration and insights.' },
  { icon: Cog, title: 'Integrations', desc: 'Seamless APIs and third-party integrations.' },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-50/60">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold tracking-tight text-slate-800"
        >
          Services
        </motion.h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

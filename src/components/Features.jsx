import { motion } from 'framer-motion'
import { Shield, Sparkles, Zap, LineChart } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'Built with modern security best practices and sensible defaults for your peace of mind.',
  },
  {
    icon: Sparkles,
    title: 'Motion-first design',
    desc: 'Subtle micro-interactions and polished animations throughout your journey.',
  },
  {
    icon: Zap,
    title: 'Fast and performant',
    desc: 'Optimized for speed with a lightweight stack and best-in-class tooling.',
  },
  {
    icon: LineChart,
    title: 'Analytics-ready',
    desc: 'Measure growth and iterate quickly with built-in analytics hooks.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-sky-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl"
          >
            Everything you need to ship fast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true, amount: 0.6 }}
            className="mt-3 text-slate-600"
          >
            A focused set of tools and components to help you launch a polished SaaS.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="group rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-sm backdrop-blur hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100 group-hover:bg-sky-100">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

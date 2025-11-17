import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-white via-sky-50 to-sky-100 p-10 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h3 className="text-2xl font-semibold text-slate-800 sm:text-3xl">
              Ready to elevate your product experience?
            </h3>
            <p className="mt-3 text-slate-600">
              Start a free trial and craft a motion-driven SaaS that feels delightful.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
              >
                Start free trial
              </a>
              <a
                href="#"
                className="rounded-lg border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50"
              >
                Book a demo
              </a>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 via-transparent to-white/60" />
        </div>
      </div>
    </section>
  )
}

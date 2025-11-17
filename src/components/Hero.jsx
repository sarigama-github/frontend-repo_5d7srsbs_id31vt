import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[78vh] overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[78vh] flex-col items-center justify-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm backdrop-blur"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
            Modern SaaS UI Kit
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:text-6xl"
          >
            Build, launch, and scale with a clean, motion-first experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg"
          >
            Elegant animations, interactive 3D cover, and a light blue aesthetic to showcase your product.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              Start free trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-sky-200 bg-white/70 px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur transition hover:bg-sky-50"
            >
              View features
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />
    </section>
  )
}

import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-50/60">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold tracking-tight text-slate-800"
        >
          About Nimbus
        </motion.h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          We craft modern, motion-first product experiences. Our team focuses on clarity, speed, and delight.
        </p>
      </section>
    </main>
  )
}

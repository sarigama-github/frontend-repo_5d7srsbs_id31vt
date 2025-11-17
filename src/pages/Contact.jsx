import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <main id="contact" className="min-h-screen bg-gradient-to-b from-white to-sky-50/60">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold tracking-tight text-slate-800"
        >
          Contact Us
        </motion.h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <form className="rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-slate-800 placeholder-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-slate-800 placeholder-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea rows="5" className="mt-1 w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-slate-800 placeholder-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Tell us about your project..." />
              </div>
              <button type="button" className="mt-2 rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700">
                Send message
              </button>
            </div>
          </form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            className="rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-sm backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-slate-800">Where to find us</h3>
            <p className="mt-2 text-slate-600">We operate globally with a remote-first team. Reach out and we’ll get back within 24 hours.</p>
            <div className="mt-6 grid gap-3 text-sm text-slate-600">
              <p><span className="font-medium text-slate-700">Email:</span> hello@nimbus.io</p>
              <p><span className="font-medium text-slate-700">Phone:</span> +1 (555) 123-4567</p>
              <p><span className="font-medium text-slate-700">Address:</span> 123 Cloud Ave, Suite 100, SF</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

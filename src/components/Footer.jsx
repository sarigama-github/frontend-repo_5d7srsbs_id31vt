export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Nimbus, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-sky-700">Privacy</a>
            <a href="#" className="hover:text-sky-700">Terms</a>
            <a href="#" className="hover:text-sky-700">Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

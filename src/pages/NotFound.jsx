export default function NotFound(){
  return (
    <main className="min-h-[60vh] grid place-items-center bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-slate-800">404</h1>
        <p className="mt-2 text-slate-600">Page not found</p>
        <a href="/" className="mt-6 inline-block rounded-lg bg-sky-600 px-4 py-2 text-white">Go Home</a>
      </div>
    </main>
  )
}

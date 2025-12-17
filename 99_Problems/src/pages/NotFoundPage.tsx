import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-bold tracking-tight">404</h1>
      <p className="text-slate-700">That page does not exist.</p>
      <Link
        to="/"
        className="inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        Go home
      </Link>
    </section>
  )
}

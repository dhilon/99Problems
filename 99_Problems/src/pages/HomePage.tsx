export function HomePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">99 Problems</h1>
        <p className="max-w-prose text-slate-700">
          Starter app scaffolded with Vite + React + TypeScript, wired with React Router
          and Tailwind CSS.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-white p-5">
          <h2 className="font-semibold">Routing</h2>
          <p className="mt-1 text-sm text-slate-700">
            This page is <span className="font-mono">/</span>. Try{' '}
            <span className="font-mono">/about</span>.
          </p>
        </div>
        <div className="rounded-lg border bg-white p-5">
          <h2 className="font-semibold">Styling</h2>
          <p className="mt-1 text-sm text-slate-700">
            Tailwind is enabled. Update the UI by editing components in{' '}
            <span className="font-mono">src/</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

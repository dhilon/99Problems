import { NavLink, Outlet } from 'react-router-dom'

function navLinkClassName(isActive: boolean) {
  return [
    'rounded-md px-3 py-2 text-sm font-medium transition',
    isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100',
  ].join(' ')
}

export function RootLayout() {
  return (
    <div className="min-h-full bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-4 py-4">
          <NavLink to="/" className="text-lg font-semibold tracking-tight">
            99 Problems
          </NavLink>
          <nav className="flex items-center gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) => navLinkClassName(isActive)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => navLinkClassName(isActive)}
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <Outlet />
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600">
          Built © {new Date().getFullYear()} by 99 Problems, Inc. |&nbsp;
          <a href="https://github.com/dhilon/99Problems" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GitHub</a>
        </div>
      </footer>
    </div>
  )
}

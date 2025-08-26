import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-muted justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold text-primary hover:underline hover:text-secondary">
          <Link to="/">Home</Link>
        </div>

        <div className="px-2 font-bold text-primary hover:underline hover:text-secondary">
          <Link to="/demo/form/simple">Simple Form</Link>
        </div>

        <div className="px-2 font-bold text-primary hover:underline hover:text-secondary">
          <Link to="/demo/form/address">Address Form</Link>
        </div>

        <div className="px-2 font-bold text-primary hover:underline hover:text-secondary">
          <Link to="/demo/sentry/testing">Sentry</Link>
        </div>

        <div className="px-2 font-bold text-primary hover:underline hover:text-secondary">
          <Link to="/demo/start/server-funcs">Start - Server Functions</Link>
        </div>

        <div className="px-2 font-bold text-primary hover:underline hover:text-secondary">
          <Link to="/demo/start/api-request">Start - API Request</Link>
        </div>

        <div className="px-2 font-bold text-primary hover:underline hover:text-secondary">
          <Link to="/demo/store">Store</Link>
        </div>

        <div className="px-2 font-bold text-primary hover:underline hover:text-secondary">
          <Link to="/demo/table">TanStack Table</Link>
        </div>
      </nav>
    </header>
  )
}

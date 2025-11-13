import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ onOpenSearch, onOpenCart, cartCount }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
        }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setOpen(!open)}>
              <Menu className="h-5 w-5" />
            </button>
            <Link to="/" className="text-xl font-bold tracking-tight">
              ShopEase
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/features', 'Features')}
            {navItem('/shop', 'Shop')}
            {navItem('/contact', 'Contact')}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded hover:bg-gray-100"
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded hover:bg-gray-100"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full grid place-items-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-3">
            <div className="flex flex-col gap-1">
              <Link className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50" to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50" to="/features" onClick={() => setOpen(false)}>Features</Link>
              <Link className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50" to="/shop" onClick={() => setOpen(false)}>Shop</Link>
              <Link className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50" to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

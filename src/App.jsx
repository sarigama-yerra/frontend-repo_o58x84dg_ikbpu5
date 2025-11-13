import { useEffect, useMemo, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Features from './pages/Features'
import Contact from './pages/Contact'
import SearchDrawer from './components/SearchDrawer'
import CartDrawer from './components/CartDrawer'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cart, setCart] = useState([])

  const handleAdd = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const handleRemove = (id) => setCart((prev) => prev.filter((i) => i.id !== id))

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop onAdd={handleAdd} />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <SearchDrawer open={searchOpen} onClose={() => setSearchOpen(false)} onAdd={handleAdd} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onRemove={handleRemove} />
    </div>
  )
}

export default App

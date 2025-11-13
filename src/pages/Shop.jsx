import { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function Shop({ onAdd }) {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/products`)
      const data = await res.json()
      setProducts(data)
    }
    load()
  }, [])

  const filtered = useMemo(() => {
    if (!query.trim()) return products
    return products.filter(p =>
      [p.title, p.description, p.category].join(' ').toLowerCase().includes(query.toLowerCase())
    )
  }, [products, query])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
        <h2 className="text-2xl font-bold">Shop</h2>
        <div className="flex-1 sm:max-w-sm">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </div>
  )
}

import { X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

export default function SearchDrawer({ open, onClose, onAdd }) {
  const [products, setProducts] = useState([])
  const [q, setQ] = useState('')

  useEffect(() => {
    if (!open) return
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/products`)
      const data = await res.json()
      setProducts(data)
    }
    load()
  }, [open])

  const filtered = useMemo(() => {
    if (!q.trim()) return products
    return products.filter(p => [p.title, p.description, p.category].join(' ').toLowerCase().includes(q.toLowerCase()))
  }, [products, q])

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center gap-3 p-4 border-b">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 space-y-3 max-h-[calc(100%-80px)] overflow-y-auto">
          {filtered.length === 0 && <p className="text-sm text-gray-600">No results.</p>}
          {filtered.map((p) => (
            <div key={p.id} className="flex items-center gap-3 border rounded p-3">
              <img src={p.image} alt={p.title} className="w-16 h-16 rounded object-cover" />
              <div className="flex-1">
                <div className="font-medium text-sm line-clamp-1">{p.title}</div>
                <div className="text-xs text-gray-500 line-clamp-2">{p.description}</div>
              </div>
              <button onClick={() => onAdd(p)} className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Add</button>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}

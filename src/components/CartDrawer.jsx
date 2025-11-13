import { X } from 'lucide-react'

export default function CartDrawer({ open, onClose, items, onRemove }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 space-y-4 max-h-[calc(100%-160px)] overflow-y-auto">
          {items.length === 0 && <p className="text-sm text-gray-600">Your cart is empty.</p>}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 items-center">
              <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover" />
              <div className="flex-1">
                <h4 className="text-sm font-medium line-clamp-1">{item.title}</h4>
                <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                <p className="text-sm font-semibold mt-1">${(item.price * item.qty).toFixed(2)}</p>
              </div>
              <button onClick={() => onRemove(item.id)} className="px-3 py-1.5 text-sm border rounded hover:bg-gray-50">Remove</button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700">Checkout</button>
        </div>
      </aside>
    </div>
  )
}

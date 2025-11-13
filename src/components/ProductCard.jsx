export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 line-clamp-1">{product.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <button onClick={() => onAdd(product)} className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Add</button>
        </div>
      </div>
    </div>
  )
}

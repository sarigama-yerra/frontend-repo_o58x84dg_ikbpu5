export default function Features() {
  const features = [
    { title: 'Smart Search', desc: 'Quickly find products by name, category, or description.' },
    { title: 'Cart Drawer', desc: 'Add products to cart and review in a sleek side panel.' },
    { title: 'Responsive Design', desc: 'Looks great on mobile, tablet, and desktop.' },
    { title: 'Fast API', desc: 'Products served from a backend API for reliability.' },
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Features</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="border rounded-lg p-5 bg-white">
            <h3 className="font-semibold text-gray-900">{f.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

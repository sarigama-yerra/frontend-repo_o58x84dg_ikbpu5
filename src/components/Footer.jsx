export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">ShopEase</h3>
          <p className="text-sm text-gray-600">Your one-stop destination for fragrances, fashion, and everyday essentials.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/features" className="hover:text-blue-600">Features</a></li>
            <li><a href="/shop" className="hover:text-blue-600">Shop</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Help</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Support</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Newsletter</h4>
          <p className="text-sm text-gray-600 mb-3">Get updates on new products and special offers.</p>
          <form className="flex gap-2">
            <input className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email address" />
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Join</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} ShopEase. All rights reserved.</div>
    </footer>
  )
}

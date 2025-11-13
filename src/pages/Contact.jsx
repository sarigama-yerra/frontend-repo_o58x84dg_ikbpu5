export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-4">We'd love to hear from you. Send us a message and we'll respond soon.</p>
          <form className="space-y-4">
            <input className="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="Name" />
            <input className="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="Email" />
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-32" placeholder="Message" />
            <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
          </form>
        </div>
        <div className="border rounded-lg p-5 bg-white">
          <h3 className="font-semibold text-gray-900">Head Office</h3>
          <p className="text-sm text-gray-600 mt-2">123 Market Street, Mumbai, India</p>
          <p className="text-sm text-gray-600">support@shopease.com</p>
          <p className="text-sm text-gray-600">+91 98765 43210</p>
        </div>
      </div>
    </div>
  )
}

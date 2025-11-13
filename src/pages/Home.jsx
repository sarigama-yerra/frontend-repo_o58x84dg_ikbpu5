import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Find your everyday essentials with style</h1>
            <p className="mt-4 text-gray-600">Attar, jeans, water bottles, bags and more — curated for quality and value.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/shop" className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Shop Now</Link>
              <Link to="/features" className="px-5 py-3 border border-gray-300 rounded-md hover:bg-gray-50">Explore Features</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-lg shadow-sm" src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=600&auto=format&fit=crop" />
            <img className="rounded-lg shadow-sm" src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=600&auto=format&fit=crop" />
            <img className="rounded-lg shadow-sm" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img className="rounded-lg shadow-sm" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=600&auto=format&fit=crop" />
          </div>
        </div>
      </section>
    </div>
  )
}

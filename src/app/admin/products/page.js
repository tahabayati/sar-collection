'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Link href="/admin/products/create" className="bg-blue-500 text-white px-4 py-2 rounded mb-6 inline-block">+ Create Product</Link>

      <ul className="mt-4 space-y-4">
        {products.map(product => (
          <li key={product._id} className="border p-4 rounded">
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.persian_name}</p>
            <Link href={`/admin/products/${product._id}`} className="text-blue-500">Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

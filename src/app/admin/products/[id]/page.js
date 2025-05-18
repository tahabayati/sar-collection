'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import ProductForm from '../../../components/ProductForm/ProductForm'

export default function EditProductPage() {
  const router = useRouter()
  const params = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [params.id])

  const handleSave = async (formData) => {
    const res = await fetch(`/api/products/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (!res.ok) {
      const error = await res.text()
      alert('Update failed: ' + error)
      return
    }

    alert('Product updated!')
    router.refresh() // Re-fetch the page data if needed
  }

  if (!product) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <ProductForm product={product} onSave={handleSave} />
    </div>
  )
}

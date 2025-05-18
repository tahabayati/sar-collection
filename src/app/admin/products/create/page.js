'use client'

import { useRouter } from 'next/navigation'
import ProductForm from '../../../components/ProductForm/ProductForm'

export default function CreateProductPage() {
  const router = useRouter()

  const handleSave = async (formData) => {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (!res.ok) {
      const error = await res.text()
      alert('Create failed: ' + error)
      return
    }

    const product = await res.json()
    router.push(`/admin/products/${product._id}`)
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>
      <ProductForm onSave={handleSave} />
    </div>
  )
}

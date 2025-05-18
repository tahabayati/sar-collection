'use client'

import { useState } from 'react'

export default function ProductForm({ product = {}, onSave }) {
  const [form, setForm] = useState({
    name: product.name || '',
    persian_name: product.persian_name || '',
    description: product.description || '',
    category: product.category || '',
    maintenance: product.maintenance || '',
    price: product.price || '',
    discounted_price: product.discounted_price || '',
    percentage_discount: product.percentage_discount || '',
    in_stock: product.in_stock || '',
    sold: product.sold || '',
    colors: product.colors || [''],
    sizes: product.sizes || [{ label: '', dimensions: [''] }],
  })

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field, index, value) => {
    const updated = [...form[field]]
    updated[index] = value
    handleChange(field, updated)
  }

  const handleNestedArrayChange = (index, key, value) => {
    const updated = [...form.sizes]
    updated[index][key] = value
    handleChange('sizes', updated)
  }

  const handleSizeDimensionChange = (sizeIndex, dimIndex, value) => {
    const updated = [...form.sizes]
    updated[sizeIndex].dimensions[dimIndex] = value
    handleChange('sizes', updated)
  }

  const addColor = () => handleChange('colors', [...form.colors, ''])
  const addSize = () => handleChange('sizes', [...form.sizes, { label: '', dimensions: [''] }])
  const addDimension = (sizeIndex) => {
    const updated = [...form.sizes]
    updated[sizeIndex].dimensions.push('')
    handleChange('sizes', updated)
  }

  const submit = (e) => {
    e.preventDefault()
    onSave(form)
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input className="w-full p-2 border" placeholder="Name" value={form.name} onChange={e => handleChange('name', e.target.value)} />
      <input className="w-full p-2 border" placeholder="Persian Name" value={form.persian_name} onChange={e => handleChange('persian_name', e.target.value)} />
      <textarea className="w-full p-2 border" placeholder="Description" value={form.description} onChange={e => handleChange('description', e.target.value)} />
      <input className="w-full p-2 border" placeholder="Category" value={form.category} onChange={e => handleChange('category', e.target.value)} />
      <input className="w-full p-2 border" placeholder="Maintenance" value={form.maintenance} onChange={e => handleChange('maintenance', e.target.value)} />
      <input className="w-full p-2 border" type="number" placeholder="Price" value={form.price} onChange={e => handleChange('price', e.target.value)} />
      <input className="w-full p-2 border" type="number" placeholder="Discounted Price" value={form.discounted_price} onChange={e => handleChange('discounted_price', e.target.value)} />
      <input className="w-full p-2 border" type="number" placeholder="Percentage Discount" value={form.percentage_discount} onChange={e => handleChange('percentage_discount', e.target.value)} />
      <input className="w-full p-2 border" type="number" placeholder="In Stock" value={form.in_stock} onChange={e => handleChange('in_stock', e.target.value)} />
      <input className="w-full p-2 border" type="number" placeholder="Sold" value={form.sold} onChange={e => handleChange('sold', e.target.value)} />

      <div>
        <label className="block font-semibold mb-1">Colors</label>
        {form.colors.map((color, i) => (
          <input
            key={i}
            className="w-full p-2 border mb-2"
            value={color}
            onChange={e => handleArrayChange('colors', i, e.target.value)}
            placeholder={`Color ${i + 1}`}
          />
        ))}
        <button type="button" onClick={addColor} className="text-sm text-blue-600 underline">+ Add Color</button>
      </div>

      <div>
        <label className="block font-semibold mb-1">Sizes</label>
        {form.sizes.map((size, i) => (
          <div key={i} className="border p-2 mb-4">
            <input
              className="w-full p-2 border mb-2"
              value={size.label}
              onChange={e => handleNestedArrayChange(i, 'label', e.target.value)}
              placeholder="Size Label"
            />
            {size.dimensions.map((dim, j) => (
              <input
                key={j}
                className="w-full p-2 border mb-2"
                value={dim}
                onChange={e => handleSizeDimensionChange(i, j, e.target.value)}
                placeholder={`Dimension ${j + 1}`}
              />
            ))}
            <button type="button" onClick={() => addDimension(i)} className="text-sm text-blue-600 underline">+ Add Dimension</button>
          </div>
        ))}
        <button type="button" onClick={addSize} className="text-sm text-blue-600 underline">+ Add Size</button>
      </div>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  )
}

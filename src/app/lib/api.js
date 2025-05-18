export async function uploadImage(id, file, slot = 'gallery') {
  const form = new FormData()
  form.append('file', file)
  form.append('slot', slot)
  const res = await fetch(`/api/products/${id}/upload`, { method: 'POST', body: form })
  if (!res.ok) throw new Error('upload failed')
  return res.json()            // { url }
}

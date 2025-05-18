import { connectDB } from '../../../lib/mongodb'
import Product from '../../../models/Product'

export async function GET(request, context) {
  const { params } = context
  await connectDB()
  const product = await Product.findById(params.id)
  return Response.json(product)
}


export async function PUT(request, context) {
  const { params } = context
  const body = await request.json()
  await connectDB()
  const updated = await Product.findByIdAndUpdate(params.id, body, { new: true })
  return Response.json(updated)
}

export async function DELETE(request, context) {
  const { params } = context
  await connectDB()
  await Product.findByIdAndDelete(params.id)
  return Response.json({ success: true })
}

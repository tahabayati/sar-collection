import mongoose from 'mongoose'

const SizeSchema = new mongoose.Schema({
  label: String,
  dimensions: [String],
}, { _id: false })

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  persian_name: String,
  description: String,
  category: String,
  maintenance: String,
  price: Number,
  discounted_price: Number,
  percentage_discount: Number,
  in_stock: Number,   // ✅ Number, not Boolean
  sold: Number,
  colors: [String],
  sizes: [SizeSchema],
}, { timestamps: true })


export default mongoose.models.Product || mongoose.model('Product', ProductSchema)

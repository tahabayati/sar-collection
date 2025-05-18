import mongoose from 'mongoose'

const MONGO_URI = 'mongodb://root:RclrWeXIMdyAus6WLLcatCUb@cho-oyu.liara.cloud:32067/my-app?authSource=admin'

export async function connectDB() {
  if (mongoose.connections[0].readyState) return
  try {
    await mongoose.connect(MONGO_URI)
    console.log("✅ MongoDB connected")
  } catch (error) {
    console.error("❌ MongoDB connection error:", error)
    throw error
  }
}

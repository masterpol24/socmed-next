import mongoose from 'mongoose'

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(error)
  }
}

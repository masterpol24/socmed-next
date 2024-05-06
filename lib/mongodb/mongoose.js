import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'cornhub',
      // // Remove the useNewUrlParser option as it is deprecated
      // // useNewUrlParser: true,
      // useUnifiedTopology: true, // Add this option for the new driver versions
    })

    isConnected = true

    console.log('MongoDB is connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}

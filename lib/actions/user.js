import User from '@/lib/models/User'
import { connectToDB } from '@/lib/mongodb/mongoose'

export async function createOrUpdateUser(clerkId, firstName, lastName, username, email, profilePhoto) {
  try {
    // Connect to the MongoDB database
    await connectToDB()

    let user = await User.findOne({ clerkId })

    if (!user) {
      user = new User({
        clerkId,
        firstName,
        lastName,
        username,
        email,
        profilePhoto,
      })
    } else {
      user.firstName = firstName
      user.lastName = lastName
      user.username = username
      user.email = email
      user.profilePhoto = profilePhoto
    }

    await user.save()
    return user
  } catch (error) {
    console.error('Error creating or updating user:', error)
    throw error
  }
}

export async function deleteUser(clerkId) {
  try {
    // Connect to the MongoDB database
    await connectToDB()

    const user = await User.findOneAndDelete({ clerkId })
    if (!user) {
      throw new Error(`User with clerkId ${clerkId} not found.`)
    }
    return user
  } catch (error) {
    console.error('Error deleting user:', error)
    throw error
  }
}

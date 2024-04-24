import User from '../models/Users'
import { connectToDB } from '../utils/db'

export const createOrUpdateUser = async (Id, firstName, lastName, username, email_addresses, image_url) => {
  try {
    await connectToDB()

    const user = await User.findOneAndUpdate(
      { clerkId: Id },
      {
        $set: {
          clerkId: Id,
          firstName: firstName,
          lastName: lastName,
          username: username,
          email: email_addresses[0].email_address,
          profilePhoto: image_url,
        },
      },
      { upsert: true, new: true }
    )
    await user.save()
    return user
  } catch (error) {
    console.error(error)
  }
}

export const deleteUser = async (Id) => {
  try {
    await connectToDB()
    await User.findOneAndDelete({ clerkId: Id })
  } catch (error) {
    console.error(error)
  }
}

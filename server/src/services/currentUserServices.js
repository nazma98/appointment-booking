import { User } from "../models/index.js"

export const getCurrentUser = async (userId) =>{
 const currentUser = await User.findById(userId).select('-password')
 return currentUser
}

import { User } from '../models/user.js';
export const getCurrentUserById = async (userId) => {
  try {
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      throw new Error('User not found');
    }
    return currentUser;
  } catch (error) {
    throw error;
  }
};

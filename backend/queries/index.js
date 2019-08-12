import jwt from 'jsonwebtoken'

export default {
  Query: {
    me: async (_, { token }, { models }) => {
      const { User } = models
      try {
        const { userId } = jwt.verify(token, process.env.JWT_SECRET)
        return User.findById(userId)
      } catch (error) {
        console.log(error)
        throw new Error('Invalid token.')
      }
    }
  }
}

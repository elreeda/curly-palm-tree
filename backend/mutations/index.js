import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default {
  Mutation: {
    async signUp (_, { email, name, password }, { models }) {
      const { User } = models
      const user = await User.findOne({ email })
      if (!!user && await bcrypt.compareSync(password, user.password)) {
        return {
          token: jwt.sign({ userId: user._id }, process.env.JWT_SECRET),
          user
        }
      } else if (!!user) {
        throw new Error('Email already exists.')
      } else {
        const newUser = new User({
          name,
          email,
          password: await bcrypt.hashSync(password, 10)
        })
        newUser.save()
        return {
          token: jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET),
          user: newUser
        }
      }
    },
    async signIn (_, { email, password }, { models }) {
      const { User } = models
      const user = await User.findOne({ email })
      if (!user || !await bcrypt.compareSync(password, user.password)) {
        throw new Error('Invalid email or password')
      } else {
        return {
          token: jwt.sign({ userId: user._id }, process.env.JWT_SECRET),
          user
        }
      }
    }
  }
}

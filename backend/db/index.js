import mongoose from 'mongoose'
import User from './User'

// SET UP Mongoose Promises.
mongoose.Promise = global.Promise

export const startDB = ({ user, pwd, url, db }) =>
  mongoose.connect(`mongodb://${user}:${pwd}@${url}/${db}`, { useNewUrlParser: true })

export const models = {
  User
}

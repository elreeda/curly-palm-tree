import './env'
import { GraphQLServer } from 'graphql-yoga'
import { mergeResolvers, mergeTypes } from 'merge-graphql-schemas'
import { startDB, models } from './db'
const db = startDB({ 
  user: '', 
  pwd: '', 
  db: 'bztami', 
  url: 'localhost:27017' 
})

import UserType from './types/User'

import rootQuery from './queries'
import rootMutation from './mutations'

const resolvers = [
  // queries
  rootQuery,
  // mutations
  rootMutation
]

const context = {
  models,
  db
}

const options = { port: 4000, playground: '/grafi' }
const server = new GraphQLServer({
  typeDefs: mergeTypes([UserType]),
  resolvers: mergeResolvers(resolvers),
  context
})
server.start(options, () =>
  console.log('Server is running on http://localhost:' + options.port)
)

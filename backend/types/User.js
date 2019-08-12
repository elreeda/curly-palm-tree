export default `
  type User {
    _id: ID
    name: String
    email: String
    balance: Int
  }

  type SignInPayload {
    token: String
    user: User
  }

  type Query {
    me (token: String!): User
  }

  type Mutation {
    signUp (email: String!, name: String!, password: String!): SignInPayload
    signIn (email: String!, password: String!): SignInPayload
  }
`

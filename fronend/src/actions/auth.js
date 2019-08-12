import gql from 'graphql-tag'

export const signUpMutation = gql`
  mutation ($email: String!, $password: String!, $name: String!) {
    signUp (email: $email, password: $password, name: $name) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`

export const signInMutation = gql`
  mutation ($email: String!, $password: String!) {
    signIn (email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`

export const currentUser = gql`
  query ($token: String!) {
    me (token: $token) {
      _id
      name
      email
    }
  }
`

import React from 'react'
import { useMutation } from 'urql'
import { Redirect, Link } from 'react-router-dom'

import { useFormInput } from 'hooks'
import { signUpMutation, signInMutation } from 'actions/auth'

import Input from 'components/Input'
import Button from 'components/Button'
import { StyleBase, Description, Form, ErrorMsg } from './style'

const LoginView = (props) => {
  const name = useFormInput('')
  const email = useFormInput('')
  const password = useFormInput('')
  const isSignIn = props.match.path === '/login'

  const [result, executeMutation] = useMutation(isSignIn ? signInMutation : signUpMutation)

  if (!result.error && result.data) {
    window.localStorage.setItem('auth-tkn', result.data[isSignIn ? 'signIn' : 'signUp'].token)
    return <Redirect to="/dashboard/overview" />
  }

  const handleSubmitForm = e => {
    e.preventDefault()
    executeMutation({
      name: name.value,
      email: email.value,
      password: password.value
    })
  }

  return (
    <StyleBase>
      {isSignIn ? <h3>Sign in</h3> : <h3>Sign up</h3>}

      <Description>
        or{' '}
        {isSignIn ? (
          <Link to="/signup" >create an account</Link>
        ) : (
          <Link to="/login" >sign in to your account</Link>
        )}
      </Description>
      {result.error && (
        <ErrorMsg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              className="primary"
              d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"
            />
            <path
              className="secondary"
              d="M12 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.9c-.13 1.2-1.88 1.2-2 0l-.5-5a1 1 0 0 1 1-1.1h1a1 1 0 0 1 1 1.1l-.5 5z"
            />
          </svg>
          <span>{result.error.graphQLErrors[0].message}</span>
        </ErrorMsg>
      )}
      <Form onSubmit={handleSubmitForm}>
        {
          !isSignIn && (
            <Input
              id="full-name"
              type="text"
              label="Full name"
              name="name"
              {...name}
            />
          )
        }
        <Input id="email" type="email" label="Email" name="email" {...email} />
        <Input
          id="password"
          type="password"
          label="Password"
          name="password"
          {...password}
        />
        <Button btnStyle="primary">Sign up</Button>
      </Form>
    </StyleBase>
  )
}

export default LoginView

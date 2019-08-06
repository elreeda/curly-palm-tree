import React from 'react'
import { Link } from 'react-router-dom'

import { useFormInput } from 'hooks'

import Input from 'components/Input'
import Button from 'components/Button'

const SignInView = () => {
  const email = useFormInput('')
  const password = useFormInput('')

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log({
      email, password
    })
  }

  return (
    <div>
      <h3>Sign in</h3>
      <div>or <Link to="/signup">create an account</Link></div>
      <form onSubmit={handleSubmitForm}>
        <Input id="email" type="text" label="Email" name="email" aria-label="Enter your email address" {...email} />
        <Input id="password" type="password" label="Password" name="password" {...password} />
        <Button btnStyle="primary">Sign in</Button>
      </form>
    </div>
  )
}

export default SignInView

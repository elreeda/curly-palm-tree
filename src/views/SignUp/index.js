import React from 'react'
import { Link } from 'react-router-dom'

import { useFormInput } from 'hooks'

import Input from 'components/Input'
import Button from 'components/Button'

const SignUpView = () => {
  const name = useFormInput('')
  const email = useFormInput('')
  const password = useFormInput('')

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log({
      name, email, password,
    })
  }

  return (
    <div>
      <h3>Sign up</h3>
      <div>or <Link to="/login">sign in to your account</Link></div>
      <form onSubmit={handleSubmitForm}>
        <Input id="full-name" type="text" label="Full name" name="name" {...name} />
        <Input id="email" type="email" label="Email" name="email" {...email} />
        <Input id="password" type="password" label="Password" name="password" {...password} />
        <Button btnStyle="primary">Sign up</Button>
      </form>
    </div>
  )
}


export default SignUpView

import React from 'react'
import { Redirect } from 'react-router-dom'
import { useQuery } from 'urql'

import { currentUser } from 'actions/auth'

const AuthentificationHoC = PrivateRoute => {
  return () => {
    const token = window.localStorage.getItem('auth-tkn')
    if (!window.localStorage.getItem('auth-tkn')) {
      return <Redirect to="/signup" />
    }
    // eslint-disable-next-line
    const [ result ] = useQuery({
      query: currentUser,
      variables: { token }
    })

    if (result.fetching) {
      return 'Loading...'
    } else if (result.error) {
      window.localStorage.removeItem('auth-tkn')
      return <Redirect to="/signup" />
    }

    return <PrivateRoute />
  }
}

export default AuthentificationHoC

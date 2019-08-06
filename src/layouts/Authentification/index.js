import React from 'react'
import { Route, Switch } from 'react-router-dom'

import authRoutes from '../../routes/authentification'

import { StyleBase, Container, Content } from './style'

const Authentification = () => {
  return (
    <StyleBase>
      <Container>
        <Content>
          <h2>Baztami</h2>
          <Switch>
            {
              authRoutes.map((prop, key) => {
                return (
                  <Route
                    exact={prop.exact}
                    path={prop.path}
                    render={routerProps => (
                      <prop.component
                        {...routerProps}
                      />
                    )}
                    key={key} />
                )})
            }
          </Switch>
        </Content>
      </Container>
    </StyleBase>
  )
}

export default Authentification

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Provider, createClient } from 'urql'

import indexRoutes from './routes'
import theme from './style/theme'
import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`
  :focus {
    outline: ${theme.primary} dotted 2px;
    outline-offset: 5px;
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
  a {
    color: ${theme.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const client = createClient({
  url: 'http://localhost:4000/'
})

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return (
                <Route
                  exact={prop.exact}
                  path={prop.path}
                  component={prop.component}
                  key={key}
                />
              )
            })}
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

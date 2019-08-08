import React from 'react'
import { Route, Switch } from 'react-router-dom'

import dashboardRoutes from 'routes/dashboard'
import WithAuth from 'hocs/withAuth'

const Dashboard = () => {
  return (
    <div>
      <h2>this yo dashi</h2>
      <Switch>
        {
          dashboardRoutes.map((prop, key) => {
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
    </div>
  )
}

export default WithAuth(Dashboard)

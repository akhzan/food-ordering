import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { MENUS } from 'config/constants/menus'
import { PUBLIC_URL } from 'config/env'
import Home from 'components/pages/home'

const AppRouter = (): ReactElement => (
  <Router basename={PUBLIC_URL}>
    <Switch>
      <Route exact path={MENUS.HOME}>
        <Home />
      </Route>
    </Switch>
  </Router>
)

export default AppRouter

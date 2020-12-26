import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { MENUS } from 'config/constants/menus'
import { PUBLIC_URL } from 'config/env'
import Home from 'components/pages/home'
import MenuPage from 'components/pages/menus'
import CartPage from 'components/pages/cart'
import NotFoundPage from 'components/pages/notfound'

const AppRouter = (): ReactElement => (
  <Router basename={PUBLIC_URL}>
    <Switch>
      <Route exact path={MENUS.HOME}>
        <Home />
      </Route>
      <Route exact path={MENUS.MENUS}>
        <MenuPage />
      </Route>
      <Route exact path={MENUS.CART}>
        <CartPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
)

export default AppRouter

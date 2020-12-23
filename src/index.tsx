import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from 'components/router'
import * as serviceWorker from 'serviceWorker'
import store from './redux/store'
import 'antd/dist/antd.less'
import 'assets/styles/index.css'
import 'assets/styles/override.css'
import 'assets/styles/custom.css'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

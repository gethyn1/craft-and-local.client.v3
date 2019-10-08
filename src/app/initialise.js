// Polyfills for IE11. Unsure if these are required, according to Parcel docs a browsers list file should
// deal with this automatically https://en.parceljs.org/javascript.html#babel. Requires some research
import 'whatwg-fetch'
import 'core-js/shim' // included < Stage 4 proposals
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store'
import { App } from './app'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

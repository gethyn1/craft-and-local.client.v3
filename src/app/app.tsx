import * as React from 'react'
import { Route } from 'react-router-dom'
import { compose, map, prop } from 'ramda'
import { routes } from './routes'
import { Base } from './components/base'

const createRoute = (route) =>
  <Route exact={route.exact} key={route.path} path={route.path} component={route.component} />

const Routes = compose(map(createRoute), prop('routes'))

const App = () => (
  <Base>
    <Routes routes={routes} />
  </Base>
)

export {
  App
}

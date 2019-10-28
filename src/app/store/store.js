import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { apiService } from '../middleware'
import { rootReducer } from '../state'

const preloadedState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(apiService, thunk)
  )
)

export {
  store
}

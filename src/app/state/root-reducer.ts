import { combineReducers } from 'redux'
import { reducer as locations } from './locations'
import { reducer as location } from './location'

const rootReducer = combineReducers({
  locations,
  location
})

export {
  rootReducer
}

import { combineReducers } from 'redux'
import { reducer as locations } from './locations'
import { reducer as location } from './location'
import { reducer as categories } from './categories'

const rootReducer = combineReducers({
  locations,
  location,
  categories
})

export {
  rootReducer
}

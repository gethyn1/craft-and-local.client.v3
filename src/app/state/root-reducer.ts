import { combineReducers } from 'redux'
import { reducer as locations, LocationsState } from './locations'
import { reducer as location } from './location'
import { reducer as categories, CategoriesState } from './categories'

type AppState = {
  locations: LocationsState,
  categories: CategoriesState
}

const rootReducer = combineReducers({
  locations,
  location,
  categories
})

export {
  rootReducer,
  AppState
}

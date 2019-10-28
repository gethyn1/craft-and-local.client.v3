import { combineReducers } from 'redux'
import { reducer as locations, LocationsState } from './locations'
import { reducer as location } from './location'
import { reducer as categories, CategoriesState } from './categories'
import { reducer as user, UserState } from './user'

type AppState = {
  locations: LocationsState,
  categories: CategoriesState,
  user: UserState
}

const rootReducer = combineReducers({
  locations,
  location,
  categories,
  user
})

export {
  rootReducer,
  AppState
}

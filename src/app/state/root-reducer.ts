import { combineReducers } from 'redux'
import { reducer as locations, LocationsState } from './locations'
import { reducer as location } from './location'
import { reducer as categories, CategoriesState } from './categories'
import { reducer as user, UserState } from './user'
import { reducer as search, SearchState } from './search'

type AppState = {
  locations: LocationsState,
  categories: CategoriesState,
  user: UserState,
  search: SearchState
}

const rootReducer = combineReducers({
  locations,
  location,
  categories,
  user,
  search
})

export {
  rootReducer,
  AppState
}

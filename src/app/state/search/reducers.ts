import { combineReducers } from 'redux'
import { createReducer } from '../create-reducer'
import * as types from './types'

type SearchState = {
  radius: number
}

const searchradiusHandlers = {
  [types.SEARCH_RADIUS_UPDATED]: (
    state: number,
    action: { type: typeof types.SEARCH_RADIUS_UPDATED, payload: number }
  ) => {
    return action.payload
  }
}

const DEFAULT_SEARCH_RADIUS = 10000

const reducer = combineReducers({
  radius: createReducer(DEFAULT_SEARCH_RADIUS, searchradiusHandlers)
})

export {
  reducer,
  SearchState
}

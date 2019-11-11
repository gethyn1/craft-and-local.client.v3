import { combineReducers } from 'redux'
import { createReducer, asyncMetaReducer } from '../create-reducer'
import * as types from './types'

const DEFAULT_SEARCH_RADIUS = 10000

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

const forwardGeocodeHandlers = {
  [types.FORWARD_GEOCODING_SUCCEEDED]: (
    state: string[],
    action: { type: typeof types.FORWARD_GEOCODING_SUCCEEDED, payload: string[] }
  ) => {
    return action.payload
  }
}

const reducer = combineReducers({
  radius: createReducer(DEFAULT_SEARCH_RADIUS, searchradiusHandlers),
  forwardGeocode: combineReducers({
    entities: createReducer([], forwardGeocodeHandlers),
    meta: asyncMetaReducer([{ operation: 'read', types: types.FORWARD_GEOCODE_REQUEST }])
  })
})

export {
  reducer,
  SearchState
}

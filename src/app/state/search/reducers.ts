import { combineReducers } from 'redux'
import { createReducer, asyncMetaReducer } from '../create-reducer'
import * as types from './types'
import { CrudMeta, LatLng, ForwardGeocodeResult } from '../../types'

const DEFAULT_SEARCH_RADIUS = 10000
const DEFAULT_FORWARD_GEOCODING_STATE = []

type Parameters = {
  radius: number,
  coordinates: LatLng,
  query: string
}

type SearchState = {
  parameters: Parameters,
  forwardGeocode: {
    entities: ForwardGeocodeResult[],
    meta: CrudMeta
  }
}

const searchParameterHandlers = {
  [types.SEARCH_RADIUS_UPDATED]: (
    state: Parameters,
    action: { type: typeof types.SEARCH_RADIUS_UPDATED, payload: number }
  ) => ({
    ...state,
    radius: action.payload
  }),
  [types.SEARCH_COORDINATES_UPDATED]: (
    state: Parameters,
    action: { type: typeof types.SEARCH_RADIUS_UPDATED, payload: number }
  ) => ({
    ...state,
    coordinates: action.payload
  }),
  [types.SEARCH_QUERY_UPDATED]: (
    state: Parameters,
    action: { type: typeof types.SEARCH_QUERY_UPDATED, payload: string }
  ) => ({
    ...state,
    query: action.payload
  })
}

const forwardGeocodeHandlers = {
  [types.FORWARD_GEOCODING_SUCCEEDED]: (
    state: ForwardGeocodeResult[],
    action: { type: typeof types.FORWARD_GEOCODING_SUCCEEDED, payload: ForwardGeocodeResult[] }
  ) => {
    return action.payload
  },
  [types.FORWARD_GEOCODING_RESET]: (
    state: string[],
    action: { type: typeof types.FORWARD_GEOCODING_RESET, payload: string[] }
  ) => {
    return DEFAULT_FORWARD_GEOCODING_STATE
  }
}

const reducer = combineReducers({
  parameters: createReducer({ radius: DEFAULT_SEARCH_RADIUS, coordinates: null }, searchParameterHandlers),
  forwardGeocode: combineReducers({
    entities: createReducer(DEFAULT_FORWARD_GEOCODING_STATE, forwardGeocodeHandlers),
    meta: asyncMetaReducer([{ operation: 'read', types: types.FORWARD_GEOCODE_REQUEST }])
  })
})

export {
  reducer,
  SearchState
}

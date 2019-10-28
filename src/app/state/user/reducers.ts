import { combineReducers } from 'redux'
import { createReducer } from '../create-reducer'
import * as types from './types'
import { FetchMeta } from '../../types/fetch-meta.interface'
import { LatLng } from '../../types/coordinates.type'

type CoordinatesState = {
  entity?: LatLng,
  meta: FetchMeta
}

type UserState = {
  coordinates: CoordinatesState
}

const coordinatesHandlers = {
  [types.GET_USER_COORDINATES_SUCCEEDED]: (
    state: LatLng,
    action: { type: typeof types.GET_USER_COORDINATES_SUCCEEDED, payload: LatLng }
  ) => {
    return action.payload
  }
}

const coordinatesMetaHandlers = {
  [types.GET_USER_COORDINATES_REQUESTED]: (
    state: FetchMeta
  ) => ({
    ...state,
    isLoading: true
  }),
  [types.GET_USER_COORDINATES_SUCCEEDED]: (
    state: FetchMeta
  ) => ({
    ...state,
    hasLoaded: true
  }),
  [types.GET_USER_COORDINATES_FAILED]: (
    state: FetchMeta
  ) => ({
    ...state,
    hasErrored: true
  })
}

const defaultMetaState = { isLoading: false, hasLoaded: false, hasErrored: false }

const reducer = combineReducers({
  coordinates: combineReducers({
    entity: createReducer(null, coordinatesHandlers),
    meta: createReducer(defaultMetaState, coordinatesMetaHandlers)
  })
})

export {
  reducer,
  UserState
}

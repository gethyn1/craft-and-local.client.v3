import { combineReducers } from 'redux'
import { createReducer, asyncMetaReducer } from '../create-reducer'
import * as types from './types'
import { LatLng, CrudMeta } from '../../types'

type CoordinatesState = {
  entity?: LatLng,
  meta: CrudMeta
}

type AddressState = {
  entity?: string,
  meta: CrudMeta
}

type UserState = {
  coordinates: CoordinatesState,
  address: AddressState
}

const coordinatesHandlers = {
  [types.GET_USER_COORDINATES_SUCCEEDED]: (
    state: LatLng,
    action: { type: typeof types.GET_USER_COORDINATES_SUCCEEDED, payload: LatLng }
  ) => {
    return action.payload
  }
}

const addressHandlers = {
  [types.GET_USER_ADDRESS_SUCCEEDED]: (
    state: string,
    action: { type: typeof types.GET_USER_ADDRESS_SUCCEEDED, payload: string }
  ) => {
    return action.payload
  }
}

// TODO import createFetchMetaReducer (rename) to avoid specifying read operation
const reducer = combineReducers({
  coordinates: combineReducers({
    entity: createReducer(null, coordinatesHandlers),
    meta: asyncMetaReducer([{ operation: 'read', types: types.READ_USER_COORDINATES }])
  }),
  address: combineReducers({
    entity: createReducer(null, addressHandlers),
    meta: asyncMetaReducer([{ operation: 'read', types: types.READ_USER_ADDRESS }])
  })
})

export {
  reducer,
  UserState
}

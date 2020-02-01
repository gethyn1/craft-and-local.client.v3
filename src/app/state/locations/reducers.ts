import { combineReducers } from 'redux'
import { createReducer, asyncMetaReducer } from '../create-reducer'
import * as types from './types'
import { Location, CrudMeta } from '../../types'

const { READ_LOCATIONS_SUCCEEDED, LOAD_MORE_LOCATIONS_SUCCEEDED } = types

type LocationsState = {
  entities: Location[],
  meta: CrudMeta
}

const entityHandlers = {
  [READ_LOCATIONS_SUCCEEDED]: (
    state: Location[],
    action: { type: typeof READ_LOCATIONS_SUCCEEDED, payload: Location[] }
  ) => {
    return [...state, ...action.payload]
  }
}

const reducer = combineReducers({
  entities: createReducer([], entityHandlers),
  meta: asyncMetaReducer([{ operation: 'read', types: types.READ }])
})

export {
  reducer,
  LocationsState
}

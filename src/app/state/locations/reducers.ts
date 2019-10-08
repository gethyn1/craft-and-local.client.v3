import { combineReducers } from 'redux'
import { createReducer, asyncMetaReducer } from '../create-reducer'
import * as types from './types'
import { Location } from '../../types/location.interface'

const { READ_LOCATIONS_SUCCEEDED } = types

/**
 * State shape
 * {
 *   entities: Location[],
 *   meta: {
 *     read: FetchMeta
 *   }
 * }
 */

const entityHandlers = {
  [READ_LOCATIONS_SUCCEEDED]: (
    state: Location[],
    action: { type: typeof READ_LOCATIONS_SUCCEEDED, payload: Location[] }
  ) => {
    return action.payload
  }
}

const reducer = combineReducers({
  entities: createReducer([], entityHandlers),
  meta: asyncMetaReducer([{ operation: 'read', types: types.READ }])
})

export {
  reducer
}

import { combineReducers } from 'redux'
import { createReducer, asyncMetaReducer } from '../create-reducer'
import * as types from './types'

/**
 * State shape
 * {
 *   entity: Object<Claim>,
 *   meta: {
 *     read: Object<Fetch Meta>
 *   }
 * }
 */

const entityHandlers = {
  [types.READ_CLAIM_SUCCEEDED]: (state, action) => {
    console.log(action)
    return action.payload.claim
  }
}

const reducer = combineReducers({
  entity: createReducer(null, entityHandlers),
  meta: asyncMetaReducer([{ operation: 'read', types: types.READ }])
})

export {
  reducer
}

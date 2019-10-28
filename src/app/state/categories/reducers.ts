import { combineReducers } from 'redux'
import { createReducer, asyncMetaReducer } from '../create-reducer'
import * as types from './types'
import { Category, CrudMeta } from '../../types'

const { READ_CATEGORIES_SUCCEEDED } = types

type CategoriesState = {
  entities: Category[],
  meta: CrudMeta
}

const entityHandlers = {
  [READ_CATEGORIES_SUCCEEDED]: (
    state: Category[],
    action: { type: typeof READ_CATEGORIES_SUCCEEDED, payload: Category[] }
  ) => {
    return action.payload
  }
}

const reducer = combineReducers({
  entities: createReducer([], entityHandlers),
  meta: asyncMetaReducer([{ operation: 'read', types: types.READ }])
})

export {
  reducer,
  CategoriesState
}

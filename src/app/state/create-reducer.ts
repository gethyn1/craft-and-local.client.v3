import { combineReducers } from 'redux'
import { isNil } from 'ramda'
import { FetchActionTypes, AsyncMeta } from '../types/fetch-meta.interface'

// index signature for handlers
type Handlers = {
  [key: string]: Function
}

type Operation = {
  operation: string,
  types: FetchActionTypes
}

const DEFAULT_ASYNC_META_STATE: AsyncMeta = {
  isLoading: false,
  hasLoaded: false,
  hasErrored: false
}

const createReducer = (initialState: any, handlers: Handlers) =>
  (state = initialState, action: { type: string }) =>
    handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state

const createFetchMetaReducer = (types: FetchActionTypes): Function => {
  if (isNil(types)) {
    return null
  }

  const [requested, succeeded, failed] = types

  return createReducer(DEFAULT_ASYNC_META_STATE, {
    [requested]: (): AsyncMeta => ({
      isLoading: true,
      hasLoaded: false,
      hasErrored: false
    }),
    [succeeded]: (): AsyncMeta => ({
      isLoading: false,
      hasLoaded: true,
      hasErrored: false
    }),
    [failed]: (): AsyncMeta => ({
      isLoading: false,
      hasLoaded: false,
      hasErrored: true
    })
  })
}

const buildAsyncMetaReducers = (reducers: object, operation: Operation) => ({
  ...reducers,
  [operation.operation]: createFetchMetaReducer(operation.types)
})

const asyncMetaReducer = (operations: Operation[]) =>
  combineReducers(operations.reduce(buildAsyncMetaReducers, {}))

export {
  DEFAULT_ASYNC_META_STATE,
  createReducer,
  createFetchMetaReducer,
  asyncMetaReducer
}

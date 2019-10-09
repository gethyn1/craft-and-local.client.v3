import { combineReducers } from 'redux'
import { isNil } from 'ramda'
import { FetchActionTypes } from '../types/fetch-meta.interface'

// index signature for handlers
type Handlers = {
  [key: string]: Function
}

type Operation = {
  operation: string,
  types: FetchActionTypes
}

const createReducer = (initialState: any, handlers: Handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

const createFetchMetaReducer = (types: FetchActionTypes) => {
  if (isNil(types)) {
    return null
  }

  const initialState = {
    isLoading: false,
    hasLoaded: false,
    hasErrored: false
  }

  const [requested, succeeded, failed] = types

  return createReducer(initialState, {
    [requested]: () => ({
      isLoading: true,
      hasLoaded: false,
      hasErrored: false
    }),
    [succeeded]: () => ({
      isLoading: false,
      hasLoaded: true,
      hasErrored: false
    }),
    [failed]: () => ({
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
  createReducer,
  createFetchMetaReducer,
  asyncMetaReducer
}

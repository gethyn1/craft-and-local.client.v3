import { combineReducers } from 'redux'
import { isNil } from 'ramda'

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

const createFetchMetaReducer = (types) => {
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
    [requested]: (state, action) => ({
      ...state,
      isLoading: true,
      hasLoaded: false,
      hasErrored: false
    }),
    [succeeded]: (state, action) => ({
      ...state,
      isLoading: false,
      hasLoaded: true,
      hasErrored: false
    }),
    [failed]: (state, action) => ({
      ...state,
      isLoading: false,
      hasLoaded: false,
      hasErrored: true
    })
  })
}

const asyncMetaReducer = (operations) => {
  const reducers = operations.reduce((acc, operation) => ({
    ...acc,
    [operation.operation]: createFetchMetaReducer(operation.types)
  }), {})

  return combineReducers(reducers)
}

export {
  createReducer,
  createFetchMetaReducer,
  asyncMetaReducer
}

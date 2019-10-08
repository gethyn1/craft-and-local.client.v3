import { path } from 'ramda'

const API_BASE = 'http://localhost:5000'
const CALL_API = 'CALL_API'

// TODO: General tidy up and refactor
// TODO: test API service
// TODO: trigger meta status messages for network requests
const apiService = (store) => (next) => (action) => {
  const apiType = action[CALL_API]

  if (typeof apiType === 'undefined') {
    return next(action)
  }

  const { types, endpoint, method, body } = apiType
  const [requestType, successType, failureType] = types

  next({ type: requestType })

  return fetch(
    `${API_BASE}${endpoint}`,
    {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(body)
    })
    .then((response) => {
      console.log('Response status:', response.status)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    })
    .then((json) => {
      return next({ type: successType, payload: path(['data'], json) })
    })
    .catch((error) => {
      console.log(error)
      return next({ type: failureType, error: true })
    })
}

export {
  CALL_API,
  apiService
}

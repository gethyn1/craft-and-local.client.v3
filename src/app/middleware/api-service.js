import { prop } from 'ramda'

const API_BASE = process.env.API_BASE_URL
const CALL_API = 'CALL_API'

const transformResponse = (json, adapter = prop('data')) => adapter(json)

// TODO: General tidy up and refactor
// TODO: test API service
const apiService = (store) => (next) => (action) => {
  const apiType = action[CALL_API]

  if (typeof apiType === 'undefined') {
    return next(action)
  }

  const { types, endpoint, method, body, url, adapter } = apiType
  const [requestType, successType, failureType] = types

  next({ type: requestType })

  const requestUrl = url || `${API_BASE}${endpoint}`

  return fetch(
    requestUrl,
    {
      method: method || 'GET',
      mode: 'cors',
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
      const errors = prop('errors', json)
      if (errors) {
        throw new Error(JSON.stringify(errors))
      }
      return next({ type: successType, payload: transformResponse(json, adapter) })
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

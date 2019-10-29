import { CALL_API } from '../middleware/api-service'

enum Methods {
  GET = 'GET',
  POST = 'POST'
}

type CallApiAction = {
  method?: Methods,
  endpoint?: string,
  url?: string,
  types: string[],
  body?: {},
  adapter?: (json: {}) => any
}

const createCallApiAction = ({ method, endpoint, url, types, body, adapter }: CallApiAction) => ({
  // TODO type is added as integration test (react testing library) throws an error if type is undefined
  type: CALL_API,
  [CALL_API]: {
    method,
    endpoint,
    url,
    types,
    body,
    adapter
  }
})

export {
  createCallApiAction
}

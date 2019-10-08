import { CALL_API } from '../middleware/api-service'

enum Methods {
  GET = 'GET',
  POST = 'POST'
}

type CallApiAction = {
  method?: Methods,
  endpoint: string,
  types: string[],
  body?: {}
}

const createCallApiAction = ({ method, endpoint, types, body }: CallApiAction) => ({
  // TODO type is added as integration test (react testing library) throws an error if type is undefined
  type: CALL_API,
  [CALL_API]: {
    method,
    endpoint,
    types,
    body
  }
})

export {
  createCallApiAction
}

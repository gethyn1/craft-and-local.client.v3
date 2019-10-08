import { createCallApiAction } from '../api-action-factory'
import * as types from './types'

const getClaim = (id) => createCallApiAction({
  endpoint: `/claims/${id}`,
  types: types.READ
})

export {
  getClaim
}

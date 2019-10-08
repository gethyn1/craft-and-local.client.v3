import { createCallApiAction } from '../api-action-factory'
import * as types from './types'

const getLocations = () => createCallApiAction({
  endpoint: '/locations',
  types: types.READ
})

export {
  getLocations
}

import { createCallApiAction } from '../api-action-factory'
import * as types from './types'

const getCategories = () => createCallApiAction({
  endpoint: '/categories',
  types: types.READ
})

export {
  getCategories
}

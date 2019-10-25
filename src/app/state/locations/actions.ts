import { createCallApiAction } from '../api-action-factory'
import * as types from './types'

const getLocations = ({ coordinates }) => createCallApiAction({
  endpoint: `/locations?latlng=${coordinates.latitude},${coordinates.longitude}`,
  types: types.READ
})

export {
  getLocations
}

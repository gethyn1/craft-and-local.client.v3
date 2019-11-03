import { createCallApiAction } from '../api-action-factory'
import * as types from './types'
import { LatLng } from '../../types'

const getLocations = ({ coordinates, maxDistance }: { coordinates: LatLng, maxDistance: number }) => createCallApiAction({
  endpoint: `/locations?latlng=${coordinates.latitude},${coordinates.longitude}&maxdistance=${maxDistance}`,
  types: types.READ
})

export {
  getLocations
}

import { AppState } from '../root-reducer'
import { AsyncMeta, LatLng, ForwardGeocodeResult } from '../../types'

const getSearchRadius = (state: AppState): number => state.search.parameters.radius

const getSearchCoordinates = (state: AppState): LatLng => state.search.parameters.coordinates

const getForwardGeocodeMeta = (state: AppState): AsyncMeta => state.search.forwardGeocode.meta.read

const getForwardGeocodeResults = (state: AppState): ForwardGeocodeResult[] => state.search.forwardGeocode.entities

export {
  getSearchRadius,
  getSearchCoordinates,
  getForwardGeocodeMeta,
  getForwardGeocodeResults
}

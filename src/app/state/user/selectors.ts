import { AppState } from '../root-reducer'
import { LatLng, AsyncMeta } from '../../types'

const getUserCoordinates = (state: AppState): LatLng => state.user.coordinates.entity

const getUserCoordinatesMeta = (state: AppState): AsyncMeta => state.user.coordinates.meta

export {
  getUserCoordinates,
  getUserCoordinatesMeta
}

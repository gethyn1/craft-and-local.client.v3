import { AppState } from '../root-reducer'
import { LatLng } from '../../types/coordinates.type'
import { FetchMeta } from '../../types/fetch-meta.interface'

const getUserCoordinates = (state: AppState): LatLng => state.user.coordinates.entity

const getUserCoordinatesMeta = (state: AppState): FetchMeta => state.user.coordinates.meta

export {
  getUserCoordinates,
  getUserCoordinatesMeta
}

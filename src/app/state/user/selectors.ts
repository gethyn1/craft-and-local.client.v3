import { AppState } from '../root-reducer'
import { LatLng, AsyncMeta } from '../../types'

const getUserCoordinates = (state: AppState): LatLng => state.user.coordinates.entity

const getUserCoordinatesMeta = (state: AppState): AsyncMeta => state.user.coordinates.meta.read

const isUserCoordinatesPristine = (state: AppState): boolean => {
  const { isLoading, hasLoaded, hasErrored } = getUserCoordinatesMeta(state)
  return !isLoading && !hasLoaded && !hasErrored
}

const getUserAddress = (state: AppState): string => state.user.address.entity

const getUserAddressMeta = (state: AppState): AsyncMeta => state.user.address.meta.read

const isUserLocationLoading  = (state: AppState): boolean => getUserCoordinatesMeta(state).isLoading || getUserAddressMeta(state).isLoading

const isUserLocationLoaded  = (state: AppState): boolean => getUserCoordinatesMeta(state).hasLoaded && getUserAddressMeta(state).hasLoaded

const isUserLocationErrored  = (state: AppState): boolean => getUserCoordinatesMeta(state).hasErrored || getUserAddressMeta(state).hasErrored

export {
  getUserCoordinates,
  getUserCoordinatesMeta,
  isUserCoordinatesPristine,
  getUserAddress,
  getUserAddressMeta,
  isUserLocationLoading,
  isUserLocationLoaded,
  isUserLocationErrored
}

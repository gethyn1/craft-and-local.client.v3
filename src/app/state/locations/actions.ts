import { createCallApiAction } from '../api-action-factory'
import * as types from './types'
import { LatLng, FetchActionTypes } from '../../types'

type GetLocations = {
  coordinates?: LatLng,
  minDistance?: number,
  maxDistance?: number,
  limit?: number,
  exclude?: string
}

const buildQueryString = (params: {}) =>
  Object.keys(params)
    .filter(key => typeof params[key] !== 'undefined')
    .map(key => `${key}=${params[key]}`)
    .join('&')

const readLocations = (fetchActionsTypes: FetchActionTypes) =>
  ({ coordinates, minDistance, maxDistance, limit = 4, exclude }: GetLocations) => {
    const queryString = buildQueryString({
      latlng: `${coordinates.latitude},${coordinates.longitude}`,
      maxdistance: maxDistance,
      mindistance: minDistance,
      limit,
      exclude
    })

    return createCallApiAction({
      endpoint: `/locations?${queryString}`,
      types: fetchActionsTypes
    })
  }

const getLocations = readLocations(types.READ)
const loadMoreLocations = readLocations(types.LOAD_MORE)

export {
  getLocations,
  loadMoreLocations
}

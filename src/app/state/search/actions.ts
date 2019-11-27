import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding'
import { compose, map, path, pick } from 'ramda'
import * as types from './types'
import { LatLng } from '../../types'

const geocodingService = mbxGeocoding({ accessToken: process.env.MAPBOX_TOKEN })

// TODO tidy this function
const assocRegion = result => ({
  ...result,
  region: result.context.map(c => c.text).join(', ')
})

const transformResult = compose(pick(['id', 'text', 'region', 'geometry']), assocRegion)

const transformResponse = compose(map(transformResult), path(['body', 'features']))

// TODO find Mapbox API types
// TODO better throttling of API requests
const forwardGeocode = (query: string) => (dispatch: Function): void => {
  dispatch({ type: types.SEARCH_QUERY_UPDATED, payload: query })

  if (query.length < 4) {
    return null
  }

  dispatch({ type: types.FORWARD_GEOCODING_REQUESTED })

  geocodingService.forwardGeocode({
    query,
    countries: ['GB'],
    types: ['neighborhood', 'locality']
  })
  .send()
  .then((response) => {
    dispatch({
      type: types.FORWARD_GEOCODING_SUCCEEDED,
      payload: transformResponse(response)
    })
  }, () => {
    dispatch({ type: types.FORWARD_GEOCODING_FAILED })
  })
}

const setSearchCoordinates = (coordinates: LatLng) => ({
  type: types.SEARCH_COORDINATES_UPDATED,
  payload: coordinates
})

const resetForwardGeocodeResults = () => ({
  type: types.FORWARD_GEOCODING_RESET
})

const setSearchQuery = (query: string) => ({
  type: types.SEARCH_QUERY_UPDATED,
  payload: query
})

export {
  forwardGeocode,
  setSearchCoordinates,
  resetForwardGeocodeResults,
  setSearchQuery
}

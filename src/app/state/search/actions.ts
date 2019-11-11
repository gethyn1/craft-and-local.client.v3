import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding'
import { compose, map, prop, path, replace } from 'ramda'
import * as types from './types'

const geocodingService = mbxGeocoding({ accessToken: process.env.MAPBOX_TOKEN })

const transformResult = compose(replace(', United Kingdom', ''), prop('place_name'))

const transformResponse = compose(map(transformResult), path(['body', 'features']))

// TODO find Mapbox API types
const forwardGeocode = (query: string) => (dispatch: Function): void => {
  if (query.length < 3) {
    return null
  }

  dispatch({ type: types.FORWARD_GEOCODING_REQUESTED })

  geocodingService.forwardGeocode({
    query,
    countries: ['GB'],
    types: ['place']
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

export {
  forwardGeocode
}

import { head, prop, compose } from 'ramda'
// const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
// const geocodingService = mbxGeocoding({ accessToken: process.env.MAPBOX_TOKEN })
import { createCallApiAction } from '../api-action-factory'
import * as types from './types'
import { LatLng } from '../../types'

const GOOGLE_MAPS_API_PUBLIC_KEY = 'AIzaSyAI0dZaZHkO6pUC1maNGg6HALwRX4nG0w4'

const adapter = compose(prop('formatted_address'), head, prop('results'))

const fetchAdressLookupOptions = (coordinates: LatLng) => createCallApiAction({
  url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=${GOOGLE_MAPS_API_PUBLIC_KEY}`,
  types: types.READ_USER_ADDRESS,
  adapter
})

// const fetchAdressLookupOptions = (coordinates: LatLng) => (dispatch: Function) =>  {
//   geocodingService.reverseGeocode({
//     query: [coordinates.longitude, coordinates.latitude],
//     countries: ['GB'],
//     types: ['address', 'neighborhood', 'place', 'locality']
//   })
//   .send()
//   .then(response => {
//     console.log('RESPONSE - - - - - - - >', response)
//   }, error => {
//     console.log('ERROR - - - - - - - >', error)
//   })
// }

export const getUserCoordinates = () => (dispatch: Function) => {
  dispatch({ type: types.GET_USER_COORDINATES_REQUESTED })

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords

      dispatch({
        type: types.GET_USER_COORDINATES_SUCCEEDED,
        payload: { latitude, longitude },
      })

      dispatch(fetchAdressLookupOptions({ latitude, longitude }))
    })
  } else {
    dispatch({ type: types.GET_USER_COORDINATES_FAILED })
  }
}

import { Location, LatLng } from '../../../../types'
import { GoogleLatLng, Marker } from './map'

// TODO: consider transforming all coordinates to Google LatLng on
// API response (user and locations)
const latLngtoGoogleLatLng = (latLng: LatLng): GoogleLatLng => ({
  lat: latLng.latitude,
  lng: latLng.longitude
})

const buildMarker = (location: Location): Marker => ({
  title: location.title,
  position: {
    lat: location.location.coordinates[1],
    lng: location.location.coordinates[0]
  }
})

export {
  latLngtoGoogleLatLng,
  buildMarker
}

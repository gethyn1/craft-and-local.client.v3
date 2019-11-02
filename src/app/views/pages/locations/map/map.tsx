import * as React from 'react'
import { useScript } from './use-script'

const { useRef, useState } = React

const GOOGLE_MAPS_API_PUBLIC_KEY = process.env.GOOGLE_MAPS_API_PUBLIC_KEY
const GOOGLE_MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_PUBLIC_KEY}&libraries=geometry`

const onBoundsChange = (e) => {
  console.log('Bounds changed', e)
}

/**
 * TO DO:
 *
 * - Set center from user lat lng
 * - Use styled component for map
 * - Map loading state
 * - Set zoom based on locations displayed in list
 * - Update locations fetched from API based on map zoom (`'bounds_changed'` event)
 * - Handle not being able to get user location
 * - Handle scriptError
 */

type GoogleLatLng = {
  lat: number,
  lng: number
}

type Marker = {
  title: string,
  position: GoogleLatLng
}

type MapProps = {
  center?: GoogleLatLng,
  markers: Marker[]
}

const addMarkerToMap = (map) => (marker: Marker): void => {
  const m = new window['google'].maps.Marker({
    title: marker.title,
    position: marker.position,
    map
  })
}

const Map = ({ center, markers }: MapProps) => {
  const googleMapEl = useRef(null)
  const [scriptLoaded, scriptError] = useScript(GOOGLE_MAPS_URL)
  const [map, setMap] = useState(null)

  if (scriptLoaded && !map && center) {
    setMap(new window['google'].maps.Map(googleMapEl.current, {
      center,
      zoom: 14
    }))

    // map.addListener('bounds_changed', onBoundsChange)
  }

  if (map) {
    markers.forEach(addMarkerToMap(map))
  }

  return (
    <React.Fragment>
      <div>Script loaded: <b>{scriptLoaded.toString()}</b>. Error: <b>{scriptError.toString()}</b></div>
      <div ref={googleMapEl} style={{width: '100%', height: '400px' }} />
    </React.Fragment>
  )
}

export {
  GoogleLatLng,
  Marker,
  Map
}

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
 * - Use styled component for map
 * - Map loading state
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

const Map = ({ center, markers }: MapProps) => {
  const googleMapEl = useRef(null)
  const [scriptLoaded, scriptError] = useScript(GOOGLE_MAPS_URL)
  const [map, setMap] = useState(null)
  const [bounds, setBounds] = useState(null)

  if (scriptLoaded && !map && center) {
    setMap(new window['google'].maps.Map(googleMapEl.current, {
      center,
      zoom: 14
    }))

    setBounds(new window['google'].maps.LatLngBounds())

    // map.addListener('bounds_changed', onBoundsChange)
  }

  if (map) {
    markers.forEach((marker: Marker): void => {
      const m = new window['google'].maps.Marker({
        title: marker.title,
        position: marker.position,
        map
      })

      bounds.extend(m.getPosition())
    })

    map.fitBounds(bounds)
  }

  return (
      <div ref={googleMapEl} style={{width: '100%', height: '400px' }} />
  )
}

export {
  GoogleLatLng,
  Marker,
  Map
}

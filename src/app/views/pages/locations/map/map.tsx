import * as React from 'react'
import { useScript } from '../use-script'

const { useRef, useState, useEffect } = React

const GOOGLE_MAPS_API_PUBLIC_KEY = process.env.GOOGLE_MAPS_API_PUBLIC_KEY
const GOOGLE_MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_PUBLIC_KEY}&libraries=geometry`

/**
 * TO DO:
 *
 * - Use styled component for map
 * - Map loading state
 * - Handle not being able to get user location
 * - Handle scriptError
 * - Tidy component
 * - Tidy useScript hook
 * - Pass zoom as prop
 *
 * Search rules:
 * 1. Load all results within certain radius of user
 * 2. Allow user to set radius for search
 *    - If lost of results for the search radius, paginate the results in the UI (AirBnB)
 * 3. Allow user to choose location
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

  useEffect(() => {
    if (map) {
      map.panTo(center)
      // TODO
      // - delete active markers
      // - set new markers
      // - update bounds
    }
  }, [center])

  if (scriptLoaded && !map && center) {
    setMap(new window['google'].maps.Map(googleMapEl.current, {
      center,
      zoom: 14
    }))

    setBounds(new window['google'].maps.LatLngBounds())
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

    if (markers.length) {
      map.fitBounds(bounds)
    }
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

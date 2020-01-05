import * as React from 'react'
import { useScript } from '../use-script'
import { LatLng, Location } from '../../../../types'

const { useRef, useState, useEffect } = React

const MAPBOX_API_URL = "https://api.mapbox.com/mapbox-gl-js/v1.6.1/mapbox-gl.js"

type MapProps = {
  center?: LatLng,
  locations: Location[],
}

const MapBox = ({ center, locations }: MapProps) => {
  const mapElement = useRef(null)
  const [map, setMap] = useState(null)
  const [apiLoaded, apiError] = useScript(MAPBOX_API_URL)

  if (apiLoaded && !map && center) {
    window['mapboxgl'].accessToken = process.env.MAPBOX_TOKEN

    setMap(new window['mapboxgl'].Map({
      container: mapElement.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [center.longitude, center.latitude],
      zoom: 12,
      maxZoom: 18
    }))
  }

  if (map && locations.length) {
    const bounds = new window['mapboxgl'].LngLatBounds()

    locations.forEach(location => {
      const { coordinates } = location.location
      const marker = new window['mapboxgl'].Marker()
        .setLngLat(coordinates)
        .addTo(map)

      bounds.extend(coordinates)
    })

    map.fitBounds(bounds, {
      padding: { top: 50, bottom: 50, left: 50, right: 50 },
      easing: (t: number) => t * (2 - t)
    })
  }

  return apiError
    ? <p>There was an error loading the map</p>
    : <div ref={mapElement} style={{ width: '100%', height: '400px' }} />
}

export {
  MapBox
}

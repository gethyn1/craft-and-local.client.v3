import * as React from 'react'
import { useScript } from '../use-script'
import { LatLng, Location } from '../../../../types'

const { useRef, useState, useEffect } = React

const MAPBOX_API_URL = "https://api.mapbox.com/mapbox-gl-js/v1.6.1/mapbox-gl.js"

type MapProps = {
  center?: LatLng,
  locations: Location[],
}

// TODO This is a bit of a hack for keeping track of map markers:
// Create a prop for each initialised map to track markers for removal
// Might be better to create a class component
const memoMarkers = {}

const MapBox = ({ center, locations }: MapProps) => {
  const mapElement = useRef(null)
  const [map, setMap] = useState(null)
  const [apiLoaded, apiError] = useScript(MAPBOX_API_URL)

  if (apiLoaded && !map && center && window['mapboxgl']) {
    window['mapboxgl'].accessToken = process.env.MAPBOX_TOKEN

    setMap(new window['mapboxgl'].Map({
      container: mapElement.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [center.longitude, center.latitude],
      zoom: 12,
      maxZoom: 18
    }))
  }

  useEffect(() => {
    if (map && locations.length) {
      // TODO Could use Map._mapId instead of creating UID
      const { _mapId } = map
      if (!memoMarkers[_mapId]) {
        memoMarkers[_mapId] = []
      }

      memoMarkers[_mapId].forEach(marker => marker.remove())
      memoMarkers[_mapId] = []
      const bounds = new window['mapboxgl'].LngLatBounds()

      locations.forEach(location => {
        const { coordinates } = location.location
        const marker = new window['mapboxgl'].Marker()
          .setLngLat(coordinates)
          .addTo(map)

          memoMarkers[_mapId] = [...memoMarkers[_mapId], marker]
        bounds.extend(coordinates)
      })

      map.fitBounds(bounds, {
        padding: { top: 50, bottom: 50, left: 50, right: 50 },
        easing: (t: number) => t * (2 - t)
      })
    }
  }, [locations])

  return apiError
    ? <p>There was an error loading the map</p>
    : <div ref={mapElement} style={{ width: '100%', height: '400px' }} />
}

export {
  MapBox
}

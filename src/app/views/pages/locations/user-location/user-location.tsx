import * as React from 'react'
import { prop } from 'ramda'
import { LatLng } from '../../../../types/coordinates.type'
import { AsyncMeta } from '../../../../types/fetch-meta.interface'
import { ComponentByMeta } from '../../../common/component-by-meta'

const { useEffect } = React

type UserLocationProps = {
  getUserCoordinates: () => void,
  coordinates: LatLng,
  meta: AsyncMeta
}

const UserLocation = ({ getUserCoordinates, coordinates, meta }: UserLocationProps) => {
  useEffect(() => {
    if (!meta.isLoading && !meta.hasLoaded && !meta.hasErrored) {
      getUserCoordinates()
    }
  }, [])

  return <ComponentByMeta
    hasLoaded={<p>Latitude: {prop('latitude', coordinates)}, Longitude: {prop('longitude', coordinates)}</p>}
    isLoading={<p>Loading user location</p>}
    hasErrored={<p>There was an error loading user location</p>}
    meta={meta}
  />
}

export {
  UserLocation
}

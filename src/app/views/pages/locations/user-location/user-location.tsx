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

const shouldGetUserCoordinates = (meta: AsyncMeta): boolean => !meta.isLoading && !meta.hasLoaded && !meta.hasErrored

const UserLocation = ({ getUserCoordinates, coordinates, meta }: UserLocationProps) => {
  useEffect(() => {
    if (shouldGetUserCoordinates(meta)) {
      getUserCoordinates()
    }
  }, [getUserCoordinates, meta])

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

import * as React from 'react'
import { AsyncMeta } from '../../../../types'
import { ComponentByMeta } from '../../../common/component-by-meta'

const { useEffect } = React

type UserLocationProps = {
  getUserCoordinates: () => void,
  shouldGetUserCoordinates: boolean,
  address?: string,
  meta: AsyncMeta
}

const UserLocation = ({ getUserCoordinates, shouldGetUserCoordinates, address, meta }: UserLocationProps) => {
  useEffect(() => {
    if (shouldGetUserCoordinates) {
      getUserCoordinates()
    }
  }, [getUserCoordinates, meta])

  return (
    <ComponentByMeta
      hasLoaded={<p>Locations near {address}</p>}
      isLoading={<p>Finding your location ...</p>}
      hasErrored={<p>There was an error finding your location.</p>}
      meta={meta}
    />
  )
}

export {
  UserLocation
}

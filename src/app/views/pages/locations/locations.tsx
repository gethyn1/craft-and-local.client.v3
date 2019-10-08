import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '../../layouts'
import { Location } from '../../../types/location.interface'
import { FetchMeta } from '../../../types/fetch-meta.interface'

const LocationItem = ({ location }: { location: Location, key: string }) => (
  <li>
    <Link to={`/locations/${location.id}`}>{location.title}</Link>
  </li>
)

interface LocationsProps {
  getLocations: () => void,
  locations: Location[],
  meta: FetchMeta
}

const Locations = ({ getLocations, locations, meta }: LocationsProps) => {
  useEffect(() => {
    getLocations()
  }, [getLocations])

  return (
    <AppLayout>
      <h1>Locations</h1>
      {meta.read.hasErrored && <p>There was an error loading locations</p>}
      <ul>
        {locations.map(location => <LocationItem key={location.id} location={location} />)}
      </ul>
    </AppLayout>
  )
}

export {
  Locations
}

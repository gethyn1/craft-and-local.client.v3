import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color, ColorProps, fontSize, FontSizeProps } from 'styled-system'
import { AppLayout } from '../../layouts'
import { Location } from '../../../types/location.interface'
import { FetchMeta } from '../../../types/fetch-meta.interface'

const { useEffect } = React

const Title = styled.h1<ColorProps & FontSizeProps>`
  text-align: center;
  ${color}
  ${fontSize}
`

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
      <Title color="primary" fontSize={[1, 5]}>Locations</Title>
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

import * as React from 'react'
import { AppLayout } from '../../layouts'
import { Location, LatLng } from '../../../types'
import { Heading, Headings, Levels } from '../../../components/heading'
import { Container } from '../../../components/container'
import { Box } from '../../../components/box'
import { Sizes } from '../../../components/enums'
import { GetLocations } from './types'
import { UserLocation } from './user-location'
import { MapBox } from './mapbox'
import { Search } from './search'
import { LocationsList } from './locations-list'

const { useEffect } = React

interface LocationsProps {
  getLocations: (options: GetLocations) => void,
  locations: Location[],
  coordinates: LatLng,
  searchRadius: number
}

const Locations = ({ getLocations, locations, coordinates, searchRadius }: LocationsProps) => {
  useEffect(() => {
    if (coordinates) {
      getLocations({
        coordinates,
        maxDistance: searchRadius
      })
    }
  }, [getLocations, coordinates, searchRadius])

  return (
    <AppLayout>
      <MapBox center={coordinates || null} locations={locations} />
      <Container>
        <Box size={Sizes.LARGE}>
          <Heading as={Headings.H1} level={Levels.LEVEL_2}>Locations</Heading>
          <UserLocation />
          <Search />
          <LocationsList />
        </Box>
      </Container>
    </AppLayout>
  )
}

export {
  Locations
}

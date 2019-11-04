import * as React from 'react'
import { AppLayout } from '../../layouts'
import { Location, CrudMeta, LatLng } from '../../../types'
import { Grid } from '../../../components/grid'
import { Heading, Headings, Levels } from '../../../components/heading'
import { Container } from '../../../components/container'
import { Box } from '../../../components/box'
import { Sizes } from '../../../components/enums'
import { LocationCard } from './location-card'
import { GetLocations } from './types'
import { Skeleton } from '../../../components/skeleton'
import { Card } from '../../../components/card'
import { ComponentByMeta } from '../../common/component-by-meta'
import { UserLocation } from './user-location'
import { Map, GoogleLatLng, Marker } from './map'

const { useEffect } = React

const LocationsSkeleton = ({ size }: { size: number }) => {
  const items = Array(size).fill(() => <Card size={Sizes.MEDIUM}><Skeleton /></Card>)

  return (
    <Grid>
      {items.map((Item, i) => <Item key={i} />)}
    </Grid>
  )
}

const LocationsGrid = ({ locations }: { locations: Location[] }) => (
  <Grid>
    {locations.map(location => <LocationCard key={location.id} location={location} />)}
  </Grid>
)

interface LocationsProps {
  getLocations: ({ coordinates }: GetLocations) => void,
  locations: Location[],
  meta: CrudMeta,
  coordinates: LatLng,
  searchRadius: number
}

// TODO: consider transforming all coordinates to Google LatLng on
// API response (user and locations)
const latLngtoGoogleLatLng = (latLng: LatLng): GoogleLatLng => ({
  lat: latLng.latitude,
  lng: latLng.longitude
})

const buildMarker = (location: Location): Marker => ({
  title: location.title,
  position: {
    lat: location.location.coordinates[1],
    lng: location.location.coordinates[0]
  }
})

const Locations = ({ getLocations, locations, meta, coordinates, searchRadius }: LocationsProps) => {
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
      <UserLocation />
      <Map
        center={coordinates ? latLngtoGoogleLatLng(coordinates) : null}
        markers={locations.map(buildMarker)}
      />
      <Container>
        <Box size={Sizes.LARGE}>
          <Heading as={Headings.H1} level={Levels.LEVEL_2}>Locations</Heading>
          <ComponentByMeta
            hasLoaded={<LocationsGrid locations={locations} />}
            isLoading={<LocationsSkeleton size={4} />}
            hasErrored={<p>There was an error loading locations</p>}
            meta={meta.read}
          />
        </Box>
      </Container>
    </AppLayout>
  )
}

export {
  Locations
}

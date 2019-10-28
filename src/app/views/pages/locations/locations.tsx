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
  coordinates: LatLng
}

const Locations = ({ getLocations, locations, meta, coordinates }: LocationsProps) => {
  useEffect(() => {
    if (coordinates) {
      getLocations({ coordinates })
    }
  }, [getLocations, coordinates])

  return (
    <AppLayout>
      <UserLocation />
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

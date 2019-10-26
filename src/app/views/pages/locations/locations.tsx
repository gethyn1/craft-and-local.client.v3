import * as React from 'react'
import { AppLayout } from '../../layouts'
import { PopulatedLocation } from '../../../types/location.interface'
import { CrudMeta } from '../../../types/fetch-meta.interface'
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

const { useEffect } = React

interface LocationsProps {
  getLocations: ({ coordinates }: GetLocations) => void,
  getCategories: () => void,
  locations: PopulatedLocation[],
  meta: CrudMeta
}

const getUserLocationCoordinates = (): Promise<{ latitude: number, longitude: number }> =>
  new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      console.log('Getting user position ...')
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('Loaded user position ...')
        const { latitude, longitude } = position.coords
        return resolve({ latitude, longitude })
      })
    } else {
      return reject('Sorry your browser does not support geolocation')
    }
  })

const LocationsSkeleton = ({ size }: { size: number }) => {
  const items = Array(size).fill(() => <Card size={Sizes.MEDIUM}><Skeleton /></Card>)

  return (
    <Grid>
      {items.map((Item, i) => <Item key={i} />)}
    </Grid>
  )
}

const LocationsGrid = ({ locations }: { locations: PopulatedLocation[] }) => (
  <Grid>
    {locations.map(location => <LocationCard key={location.id} location={location} />)}
  </Grid>
)

const Locations = ({ getLocations, getCategories, locations, meta }: LocationsProps) => {
  useEffect(() => {
    getCategories()
    getUserLocationCoordinates()
      .then(coordinates => getLocations({ coordinates }))
      .catch(console.log)
  }, [getLocations, getCategories])

  return (
    <AppLayout>
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

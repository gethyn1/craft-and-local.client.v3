import * as React from 'react'
import { AppLayout } from '../../layouts'
import { PopulatedLocation } from '../../../types/location.interface'
import { FetchMeta } from '../../../types/fetch-meta.interface'
import { Grid } from '../../../components/grid'
import { Heading, Headings, Levels } from '../../../components/heading'
import { Container } from '../../../components/container'
import { Box } from '../../../components/box'
import { Sizes } from '../../../components/enums'
import { LocationCard } from './location-card'
import { GetLocations } from './types'

const { useEffect } = React

interface LocationsProps {
  getLocations: ({ coordinates }: GetLocations) => void,
  getCategories: () => void,
  locations: PopulatedLocation[],
  meta: FetchMeta
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
          {meta.read.hasErrored && <p>There was an error loading locations</p>}
          <Grid>
            {locations.map(location => <LocationCard key={location.id} location={location} />)}
          </Grid>
        </Box>
      </Container>
    </AppLayout>
  )
}

export {
  Locations
}

import * as React from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '../../layouts'
import { Location } from '../../../types/location.interface'
import { FetchMeta } from '../../../types/fetch-meta.interface'
import { Card } from '../../../components/card'
import { Grid } from '../../../components/grid'
import { Heading, Headings, Levels } from '../../../components/heading'

const { useEffect } = React

const LocationItem = ({ location }: { location: Location, key: string }) => (
  <Card large>
    <Link to={`/locations/${location.id}`}>{location.title}</Link>
  </Card>
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
      <Heading as={Headings.H2} level={Levels.LEVEL_2}>Locations</Heading>
      {meta.read.hasErrored && <p>There was an error loading locations</p>}
      <Grid>
        {locations.map(location => <LocationItem key={location.id} location={location} />)}
      </Grid>
    </AppLayout>
  )
}

export {
  Locations
}

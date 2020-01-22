import * as React from 'react'
import { Location } from '../../../../types'
import { Grid } from '../../../../components/grid'
import { LocationCard } from './location-card'
import { LoadMore } from './load-more'

type LocationsListProps = {
  locations: Location[]
}

const LocationsList = ({ locations }: LocationsListProps) => (
  <React.Fragment>
    <Grid>
      {locations.map(location => <LocationCard key={location.id} location={location} />)}
    </Grid>
    <LoadMore />
  </React.Fragment>
)

export {
  LocationsList
}

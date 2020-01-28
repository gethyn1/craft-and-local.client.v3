import * as React from 'react'
import { Location, CrudMeta } from '../../../../types'
import { Grid } from '../../../../components/grid'
import { ComponentByMeta } from '../../../common/component-by-meta'
import { LocationCard } from './location-card'
import { LoadMore } from './load-more'
import { LocationsSkeleton } from './locations-skeleton'

type LocationsListProps = {
  locations: Location[],
  meta: CrudMeta,
}

const LocationsListGrid = ({ locations }: { locations: Location[] }) => (
  <React.Fragment>
    <Grid>
      {locations.map(location => <LocationCard key={location.id} location={location} />)}
    </Grid>
    <LoadMore />
  </React.Fragment>
)

const LocationsList = ({ locations, meta }: LocationsListProps) => (
  <ComponentByMeta
    hasLoaded={<LocationsListGrid locations={locations} />}
    isLoading={<LocationsSkeleton size={4} />}
    hasErrored={<p>There was an error loading locations</p>}
    meta={meta.read}
  />
)

export {
  LocationsList
}

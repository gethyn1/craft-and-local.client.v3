import * as React from 'react'
import { Location, CrudMeta } from '../../../../types'
import { Grid } from '../../../../components/grid'
import { VisuallyHidden } from '../../../../components/visually-hidden'
import { LocationCard } from './location-card'
import { LoadMore } from './load-more'
import { LocationsSkeleton } from './locations-skeleton'
import { LOADING_LOCATIONS, ERROR_LOADING_LOCATIONS } from './text'

type LocationsListProps = {
  locations: Location[],
  meta: CrudMeta,
}

const LocationsListGrid = ({ locations, isLoading }: { locations: Location[], isLoading: boolean }) => (
  <React.Fragment>
    <Grid>
      {locations.map(location => <LocationCard key={location.id} location={location} />)}
      {isLoading && <LocationsSkeleton size={4} />}
    </Grid>
    {isLoading && <VisuallyHidden>{LOADING_LOCATIONS}</VisuallyHidden>}
  </React.Fragment>
)

// TODO: disable load more button when no more locations to load
const LocationsList = ({ locations, meta }: LocationsListProps) => {
  const hasLocations = locations.length
  const { isLoading, hasErrored } = meta.read

  return (
    <React.Fragment>
      {hasLocations ? <LocationsListGrid locations={locations} isLoading={isLoading} /> : null}
      {hasErrored && <p>{ERROR_LOADING_LOCATIONS}</p>}
      {hasLocations ? <LoadMore /> : null}
    </React.Fragment>
  )
}

export {
  LocationsList
}

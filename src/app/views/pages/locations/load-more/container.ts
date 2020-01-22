import { connect } from 'react-redux'
import { last } from 'ramda'
import { LoadMore } from './load-more'
import { locations, user, AppState, search } from '../../../../state'
import { CrudMeta, Location, LatLng } from '../../../../types'
import { getDistanceFromLatLonInMetres } from '../distance'

const { selectors, actions } = locations

type MappedState = {
  locations: Location[],
  meta: CrudMeta,
  coordinates?: LatLng
}

const getLatLngForLocation = (location: Location) => {
  const [longitude, latitude] = location.location.coordinates
  return { latitude, longitude }
}

const getIdsAtSearchProximity = (locations: Location[], coordinates: LatLng, minDistance: number): string[] => {
  const ids = []

  for (let i = locations.length - 1; i >= 0; i--) {
    const latLng = getLatLngForLocation(locations[i])
    const distanceFromUser = getDistanceFromLatLonInMetres(coordinates, latLng)
    if (distanceFromUser < minDistance) {
      break
    }

    ids.push(locations[i].id)
  }

  return ids
}

const mapStateToProps = (state: AppState): MappedState => ({
  locations: selectors.getLocations(state),
  meta: selectors.getLocationsMeta(state),
  coordinates: search.selectors.getSearchCoordinates(state) || user.selectors.getUserCoordinates(state)
})

const mapDispatchToProps = (dispatch: Function) => ({
  onLoadMore: (locations: Location[], coordinates: LatLng): void => {
    const lastLatLng = getLatLngForLocation(last(locations))
    const minDistance = getDistanceFromLatLonInMetres(coordinates, lastLatLng)
    const exclude = getIdsAtSearchProximity(locations, coordinates, minDistance).join(',')

    dispatch(actions.loadMoreLocations({
      coordinates,
      minDistance,
      exclude
    }))
  }
})

const container = connect(mapStateToProps, mapDispatchToProps)(LoadMore)

export {
  container
}

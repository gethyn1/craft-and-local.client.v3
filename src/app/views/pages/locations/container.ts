import { connect } from 'react-redux'
import { Locations } from './locations'
import { locations, user, AppState, search } from '../../../state'
import { Location, LatLng } from '../../../types'
import { GetLocations } from './types'

const { selectors } = locations

type MappedState = {
  locations: Location[],
  coordinates?: LatLng,
  searchRadius: number
}

const mapStateToProps = (state: AppState): MappedState => ({
  locations: selectors.getLocations(state),
  coordinates: search.selectors.getSearchCoordinates(state) || user.selectors.getUserCoordinates(state),
  searchRadius: search.selectors.getSearchRadius(state)
})

const mapDispatchToProps = (dispatch: Function) => ({
  getLocations: ({ coordinates, maxDistance }: GetLocations) => dispatch(locations.actions.getLocations({ coordinates, maxDistance }))
})

const container = connect(mapStateToProps, mapDispatchToProps)(Locations)

export {
  container
}

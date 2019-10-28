import { connect } from 'react-redux'
import { Locations } from './locations'
import { locations, user, AppState } from '../../../state'
import { CrudMeta, Location, LatLng } from '../../../types'
import { GetLocations } from './types'

const { selectors } = locations

type MappedState = {
  locations: Location[],
  meta: CrudMeta,
  coordinates?: LatLng
}

const mapStateToProps = (state: AppState): MappedState => ({
  locations: selectors.getLocations(state),
  meta: selectors.getLocationsMeta(state),
  coordinates: user.selectors.getUserCoordinates(state)
})

const mapDispatchToProps = (dispatch: Function) => ({
  getLocations: ({ coordinates }: GetLocations) => dispatch(locations.actions.getLocations({ coordinates }))
})

const container = connect(mapStateToProps, mapDispatchToProps)(Locations)

export {
  container
}

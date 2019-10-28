import { connect } from 'react-redux'
import { Locations } from './locations'
import { locations, categories, user, AppState } from '../../../state'
import { CrudMeta } from '../../../types/fetch-meta.interface'
import { PopulatedLocation } from '../../../types/location.interface'
import { LatLng } from '../../../types/coordinates.type'
import { GetLocations } from './types'

const { selectors } = locations

type MappedState = {
  locations: PopulatedLocation[],
  meta: CrudMeta,
  coordinates?: LatLng
}

const mapStateToProps = (state: AppState): MappedState => ({
  locations: selectors.getPopulatedLocations(state.categories.entities, state),
  meta: selectors.getLocationsMeta(state),
  coordinates: user.selectors.getUserCoordinates(state)
})

const mapDispatchToProps = (dispatch: Function) => ({
  getLocations: ({ coordinates }: GetLocations) => {
    if (coordinates) {
      dispatch(locations.actions.getLocations({ coordinates }))
    }
  },
  getCategories: () => dispatch(categories.actions.getCategories())
})

const container = connect(mapStateToProps, mapDispatchToProps)(Locations)

export {
  container
}

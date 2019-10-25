import { connect } from 'react-redux'
import { Locations } from './locations'
import { locations, categories, AppState } from '../../../state'
import { FetchMeta } from '../../../types/fetch-meta.interface'
import { PopulatedLocation } from '../../../types/location.interface'
import { GetLocations } from './types'

const { selectors } = locations

type MappedState = {
  locations: PopulatedLocation[],
  meta: FetchMeta
}

const mapStateToProps = (state: AppState): MappedState => ({
  locations: selectors.getPopulatedLocations(state.categories.entities, state),
  meta: selectors.getLocationsMeta(state)
})

const mapDispatchToProps = (dispatch: Function) => ({
  getLocations: ({ coordinates }: GetLocations) => dispatch(locations.actions.getLocations({ coordinates })),
  getCategories: () => dispatch(categories.actions.getCategories())
})

const container = connect(mapStateToProps, mapDispatchToProps)(Locations)

export {
  container
}

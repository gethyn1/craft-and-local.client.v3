import { connect } from 'react-redux'
import { LocationsList } from './locations-list'
import { locations, AppState } from '../../../../state'
import { CrudMeta, Location } from '../../../../types'

const { selectors } = locations

type MappedState = {
  locations: Location[],
  meta: CrudMeta,
}

const mapStateToProps = (state: AppState): MappedState => ({
  locations: selectors.getLocations(state),
  meta: selectors.getLocationsMeta(state),
})

const container = connect(mapStateToProps)(LocationsList)

export {
  container
}

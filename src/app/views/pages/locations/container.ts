import { connect } from 'react-redux'
import { Locations } from './locations'
import { locations } from '../../../state'

const mapStateToProps = (state) => ({
  // TODO use selector to get entities
  locations: state.locations.entities,
  meta: state.locations.meta
})

const mapDispatchToProps = (dispatch: Function) => ({
  getLocations: () => dispatch(locations.actions.getLocations())
})

const container = connect(mapStateToProps, mapDispatchToProps)(Locations)

export {
  container
}

import { connect } from 'react-redux'
import { Location } from './location'
import { location } from '../../../state'

const mapStateToProps = (state, ownProps) => ({
  // TODO use selector to get entity and meta
  locationId: ownProps.match.params.id,
  location: state.location.entity,
  meta: state.location.meta
})

const mapDispatchToProps = (dispatch) => ({
  getClaim: (locationId) => dispatch(location.actions.getClaim(locationId))
})

const container = connect(mapStateToProps, mapDispatchToProps)(Location)

export {
  container
}

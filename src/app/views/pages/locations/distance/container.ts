import { connect } from 'react-redux'
import { Distance } from './distance'
import { user, AppState } from '../../../../state'
import { LatLng } from '../../../../types'

const { selectors } = user

type MappedState = {
  from: LatLng,
  to: LatLng
}

const mapStateToProps = (state: AppState, ownProps: { to: LatLng }): MappedState => ({
  from: selectors.getUserCoordinates(state),
  to: ownProps.to
})

const container = connect(mapStateToProps, null)(Distance)

export {
  container
}

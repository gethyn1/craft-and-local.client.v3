import { connect } from 'react-redux'
import { user, AppState } from '../../../../state'
import { LatLng } from '../../../../types'
import { Map } from './map'

const { selectors } = user

type MappedState = {
  center: LatLng,
  userLocationHasLoaded: boolean
}

const mapStateToProps = (state: AppState): MappedState => ({
  center: selectors.getUserCoordinates(state),
  userLocationHasLoaded: selectors.getUserCoordinatesMeta(state).hasLoaded
})

const container = connect(mapStateToProps, null)(Map)

export {
  container
}

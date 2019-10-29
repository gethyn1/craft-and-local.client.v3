import { connect } from 'react-redux'
import { user, AppState } from '../../../../state'
import { UserLocation } from './user-location'
import { LatLng, AsyncMeta } from '../../../../types'

type MappedState = {
  address?: string,
  shouldGetUserCoordinates: boolean,
  meta: AsyncMeta
}

const { actions, selectors } = user

const mapStateToProps = (state: AppState): MappedState => ({
  address: selectors.getUserAddress(state),
  shouldGetUserCoordinates: selectors.isUserCoordinatesPristine(state),
  meta: {
    isLoading: selectors.isUserLocationLoading(state),
    hasLoaded: selectors.isUserLocationLoaded(state),
    hasErrored: selectors.isUserLocationErrored(state)
  }
})

const mapDispatchToProps = (dispatch: Function) => ({
  getUserCoordinates: () => dispatch(actions.getUserCoordinates())
})

const container = connect(mapStateToProps, mapDispatchToProps)(UserLocation)

export {
  container
}

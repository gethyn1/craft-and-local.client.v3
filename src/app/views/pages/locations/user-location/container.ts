import { connect } from 'react-redux'
import { user, AppState } from '../../../../state'
import { UserLocation } from './user-location'
import { LatLng } from '../../../../types/coordinates.type'
import { AsyncMeta } from '../../../../types/fetch-meta.interface'

type MappedState = {
  coordinates?: LatLng,
  meta: AsyncMeta
}

const { actions, selectors } = user

const mapStateToProps = (state: AppState): MappedState => ({
  coordinates: selectors.getUserCoordinates(state),
  meta: selectors.getUserCoordinatesMeta(state)
})

const mapDispatchToProps = (dispatch: Function) => ({
  getUserCoordinates: () => dispatch(actions.getUserCoordinates())
})

const container = connect(mapStateToProps, mapDispatchToProps)(UserLocation)

export {
  container
}

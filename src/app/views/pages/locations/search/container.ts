import { connect } from 'react-redux'
import { Search } from './search'
import { AppState, search } from '../../../../state'
import { ForwardGeocodeResult } from '../../../../types'

const { actions, selectors } = search

type MappedState = {
  query: string,
  results: ForwardGeocodeResult[]
}


const mapStateToProps = (state: AppState): MappedState => ({
  query: selectors.getSearchQuery(state),
  results: selectors.getForwardGeocodeResults(state)
})

const mapDispatchToProps = (dispatch: Function) => ({
  onChange: (query: string): void => {
    dispatch(search.actions.forwardGeocode(query))
  },
  onSelectResult: (result: ForwardGeocodeResult): void => {
    const [longitude, latitude] = result.geometry.coordinates
    dispatch(actions.setSearchCoordinates({ latitude, longitude }))
    dispatch(actions.setSearchQuery(result.text))
    dispatch(actions.resetForwardGeocodeResults())
  },
  onSearchBoxBlur: (): void => dispatch(actions.resetForwardGeocodeResults())
})

const container = connect(mapStateToProps, mapDispatchToProps)(Search)

export {
  container
}

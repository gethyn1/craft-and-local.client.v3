import { connect } from 'react-redux'
import { Search } from './search'
import { AppState, search } from '../../../../state'
import { ForwardGeocodeResult } from '../../../../types'
import { interaction } from '../../../../common'

const { actions, selectors } = search
const { debounce } = interaction

const DEBOUNCE_WAIT_MILLISECONDS = 500

type MappedState = {
  query: string,
  results: ForwardGeocodeResult[]
}

const mapStateToProps = (state: AppState): MappedState => ({
  query: selectors.getSearchQuery(state),
  results: selectors.getForwardGeocodeResults(state)
})

const debouncedForwardGeocode = debounce((dispatch: Function, query: string): void => {
  dispatch(search.actions.forwardGeocode(query))
}, DEBOUNCE_WAIT_MILLISECONDS)

const mapDispatchToProps = (dispatch: Function) => ({
  onChange: (query: string): void => {
    dispatch(search.actions.setSearchQuery(query))

    if (!query.length) {
      dispatch(search.actions.resetForwardGeocodeResults())
      return null
    }

    if (query.length < 4) {
      return null
    }

    debouncedForwardGeocode.call(null, dispatch, query)
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

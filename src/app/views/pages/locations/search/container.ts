import { connect } from 'react-redux'
import { Search } from './search'
import { AppState, search } from '../../../../state'

type MappedState = {}

const mapStateToProps = (state: AppState): MappedState => ({})

const mapDispatchToProps = (dispatch: Function) => ({
  onChange: (query: string): void => dispatch(search.actions.forwardGeocode(query))
})

const container = connect(mapStateToProps, mapDispatchToProps)(Search)

export {
  container
}

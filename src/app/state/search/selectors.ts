import { AppState } from '../root-reducer'

const getSearchRadius = (state: AppState): number => state.search.radius

export {
  getSearchRadius
}

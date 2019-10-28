import { Location, CrudMeta } from '../../types'
import { AppState } from '../root-reducer'

const getLocations = (state: AppState): Location[] => state.locations.entities

const getLocationsMeta = (state: AppState): CrudMeta => state.locations.meta

export {
  getLocations,
  getLocationsMeta
}

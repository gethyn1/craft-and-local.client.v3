import { Location } from '../../types/location.interface'
import { Category } from '../../types/category.interface'
import { CrudMeta } from '../../types/fetch-meta.interface'
import { AppState } from '../root-reducer'

const getLocations = (state: AppState): Location[] => state.locations.entities

const getLocationsMeta = (state: AppState): CrudMeta => state.locations.meta

export {
  getLocations,
  getLocationsMeta
}

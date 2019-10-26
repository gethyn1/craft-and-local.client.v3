import { Location } from '../../types/location.interface'
import { Category } from '../../types/category.interface'
import { CrudMeta } from '../../types/fetch-meta.interface'
import { AppState } from '../root-reducer'

const getLocations = (state: AppState): Location[] => state.locations.entities

const getLocationsMeta = (state: AppState): CrudMeta => state.locations.meta

const findCategoryById = (ID: string) => (category: Category) => category.id === ID

const findCategoryForId = (categories: Category[]) => (ID: string): Category | undefined => categories.find(findCategoryById(ID))

const populateCategories = (categories: Category[]) => (location: Location) => ({
  ...location,
  // TODO Boolean filter as locations could be loaded without categories existing in app state
  // is there a better way of doing this? - maybe check categories fetch meta?
  categories: location.categories.map(findCategoryForId(categories)).filter(Boolean)
})

const getPopulatedLocations = (categories: Category[], state: AppState) =>
  getLocations(state).map(populateCategories(categories))

export {
  getLocations,
  getLocationsMeta,
  getPopulatedLocations
}

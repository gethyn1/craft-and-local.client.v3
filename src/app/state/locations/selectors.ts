import { Location } from '../../types/location.interface'
import { Category } from '../../types/category.interface'
import { FetchMeta } from '../../types/fetch-meta.interface'
import { AppState } from '../root-reducer'

const getLocations = (state: AppState): Location[] => state.locations.entities

const getLocationsMeta = (state: AppState): FetchMeta => state.locations.meta

const findCategoryById = (ID: string) => (category: Category) => category.id === ID

const findCategoryForId = (categories: Category[]) => (ID: string): Category | undefined => categories.find(findCategoryById(ID))

const populateCategories = (categories: Category[]) => (location: Location) => ({
  ...location,
  categories: location.categories.map(findCategoryForId(categories))
})

const getPopulatedLocations = (categories: Category[], state: AppState) =>
  getLocations(state).map(populateCategories(categories))

export {
  getLocations,
  getLocationsMeta,
  getPopulatedLocations
}

import { Category } from './category.interface'
import { GeoJson } from './coordinates.type'

export interface Location {
  title: string,
  id: string,
  categories: Category[],
  location: GeoJson
}

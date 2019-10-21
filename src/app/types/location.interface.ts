import { Category } from './category.interface'

export interface Location {
  title: string,
  id: string,
  categories: string[]
}

export interface PopulatedLocation {
  title: string,
  id: string,
  categories: Category[]
}

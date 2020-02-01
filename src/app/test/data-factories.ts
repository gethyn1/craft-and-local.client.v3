import { GeoJsonType, Category, Location, Coordinates } from '../types'

const coordinatesFactory = (coordinates: [number, number] = [123, 456]): Coordinates => coordinates

const categoryFactory = ({ title = 'bakery', slug = '/bakery', id = '1'} = {}): Category => ({
  title,
  slug,
  id
})

const locationFactory = ({
  title = 'Mama\'s Little bakery',
  id = '1',
  categories = [categoryFactory()],
  coordinates = coordinatesFactory()
} = {}): Location => ({
  title,
  id,
  categories,
  location: {
    type: GeoJsonType.POINT,
    coordinates
  }
})

export {
  coordinatesFactory,
  categoryFactory,
  locationFactory
}

type Coordinates = [number, number]

// TODO only one of Geometry or GeoJson is required
interface Geometry {
  type: string,
  coordinates: Coordinates
}

export type GeoJson = {
  type: 'Point',
  coordinates: Coordinates
}

export type LatLng = {
  latitude: number,
  longitude: number
}

export interface ForwardGeocodeResult {
  id: string,
  text: string,
  region: string,
  geometry: Geometry
}


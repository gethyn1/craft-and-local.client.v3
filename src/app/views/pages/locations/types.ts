type Coordinates = {
  latitude: number,
  longitude: number
}

type GetLocations = {
  coordinates?: Coordinates,
  maxDistance?: number,
  minDistance?: number,
  limit?: number,
  marker?: string,
  exclude?: string
}

export {
  GetLocations
}

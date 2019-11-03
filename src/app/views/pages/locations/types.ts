type Coordinates = {
  latitude: number,
  longitude: number
}

type GetLocations = {
  coordinates: Coordinates,
  maxDistance: number
}

export {
  GetLocations
}

import { LatLng } from "../../../../../types"

/**
 * Get distance in straight line between two points (haversine formula https://en.wikipedia.org/wiki/Haversine_formula)
 */
function getDistanceFromLatLonInMetres(from: LatLng, to: LatLng): number {
  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(from.latitude - to.latitude)  // deg2rad below
  const dLon = deg2rad(from.longitude - to.longitude)
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(from.latitude)) * Math.cos(deg2rad(to.latitude)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  const d = R * c * 1000 // Distance in m
  return d
}

function deg2rad(deg: number): number {
  return deg * (Math.PI/180)
}

function metresToMiles (metres: number): number {
  return metres * 0.000621371192
}

function getDistance (from: LatLng, to: LatLng): string {
  return metresToMiles(getDistanceFromLatLonInMetres(from, to)).toFixed(2)
}

export {
  getDistanceFromLatLonInMetres,
  getDistance
}

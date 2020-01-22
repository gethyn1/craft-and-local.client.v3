import * as React from 'react'
import { LatLng } from '../../../../../types'
import { getDistance } from './get-distance'

type DistanceProps = {
  from: LatLng,
  to: LatLng
}

const Distance = ({ from, to }: DistanceProps) => <span>{getDistance(from, to)} miles</span>

export {
  Distance
}

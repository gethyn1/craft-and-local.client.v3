import * as React from 'react'
import { Button } from '../../../../../components/button'
import { Location, LatLng } from '../../../../../types'

type LoadMoreProps = {
  locations: Location[],
  coordinates: LatLng,
  onLoadMore: (locations: Location[], coordinates: LatLng) => void,
}

const LoadMore = ({ onLoadMore, locations, coordinates }: LoadMoreProps) => {
  const handleLoadMore = () => onLoadMore(locations, coordinates)
  return (
    <Button text="Load more" onClick={handleLoadMore} />
  )
}

export {
  LoadMore
}

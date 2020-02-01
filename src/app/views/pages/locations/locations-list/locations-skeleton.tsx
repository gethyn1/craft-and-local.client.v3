import * as React from 'react'
import { Sizes } from '../../../../components/enums'
import { Skeleton } from '../../../../components/skeleton'
import { Card } from '../../../../components/card'

const LocationsSkeleton = ({ size }: { size: number }) => {
  const items = Array(size).fill(() => <Card size={Sizes.MEDIUM}><Skeleton /></Card>)

  return (
    <React.Fragment>
      {items.map((Item, i) => <Item key={i} />)}
    </React.Fragment>
  )
}

export {
  LocationsSkeleton
}

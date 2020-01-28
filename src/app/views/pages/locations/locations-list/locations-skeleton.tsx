import * as React from 'react'
import { Grid } from '../../../../components/grid'
import { Sizes } from '../../../../components/enums'
import { Skeleton } from '../../../../components/skeleton'
import { Card } from '../../../../components/card'

const LocationsSkeleton = ({ size }: { size: number }) => {
  const items = Array(size).fill(() => <Card size={Sizes.MEDIUM}><Skeleton /></Card>)

  return (
    <Grid>
      {items.map((Item, i) => <Item key={i} />)}
    </Grid>
  )
}

export {
  LocationsSkeleton
}

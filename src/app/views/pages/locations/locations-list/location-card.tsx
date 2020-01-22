import * as React from 'react'
import { Link } from 'react-router-dom'
import { Location } from '../../../../types'
import { InlineList } from '../../../../components/inline-list'
import { Sizes, FontSizes, Colors } from '../../../../components/enums'
import { Heading, Headings, Levels } from '../../../../components/heading'
import { Card } from '../../../../components/card'
import { Distance } from './distance'

const LocationCard = ({ location }: { location: Location, key: string }) => {
  const [longitude, latitude] = location.location.coordinates
  const latLng = { latitude, longitude }

  return (
    <Card size={Sizes.LARGE} align="center">
      <Heading as={Headings.H2} level={Levels.LEVEL_4} uppercase>
        <Link to={`/locations/${location.id}`}>{location.title}</Link>
      </Heading>
      <InlineList items={location.categories} prop="title" keyProp="id" delimiter="," color={Colors.DARK_GREY} fontSize={FontSizes.SMALL} />
      <Distance to={latLng} />
    </Card>
  )
  }

export {
  LocationCard
}

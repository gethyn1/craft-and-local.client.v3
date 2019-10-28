import * as React from 'react'
import { Link } from 'react-router-dom'
import { Location } from '../../../types/location.interface'
import { InlineList } from '../../../components/inline-list'
import { Sizes, FontSizes, Colors } from '../../../components/enums'
import { Heading, Headings, Levels } from '../../../components/heading'
import { Card } from '../../../components/card'

const LocationCard = ({ location }: { location: Location, key: string }) => (
  <Card size={Sizes.LARGE} align="center">
    <Heading as={Headings.H2} level={Levels.LEVEL_4} uppercase>
      <Link to={`/locations/${location.id}`}>{location.title}</Link>
    </Heading>
    <InlineList items={location.categories} prop="title" keyProp="id" delimiter="," color={Colors.DARK_GREY} fontSize={FontSizes.SMALL} />
  </Card>
)

export {
  LocationCard
}

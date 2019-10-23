import * as React from 'react'
import { Link } from 'react-router-dom'
import { PopulatedLocation } from '../../../types/location.interface'
import { InlineList } from '../../../components/inline-list'
import { Sizes, FontSizes, Colors } from '../../../components/enums'
import { Heading, Headings, Levels } from '../../../components/heading'
import { Card } from '../../../components/card'

const LocationCard = ({ location }: { location: PopulatedLocation, key: string }) => (
  <Card size={Sizes.LARGE}>
    <Heading as={Headings.H2} level={Levels.LEVEL_4}>
      <Link to={`/locations/${location.id}`}>{location.title}</Link>
    </Heading>
    <InlineList items={location.categories} prop="title" keyProp="id" delimiter="," color={Colors.DARK_GREY} fontSize={FontSizes.SMALL} />
  </Card>
)

export {
  LocationCard
}

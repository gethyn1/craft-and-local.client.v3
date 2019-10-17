import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

type Card = {
  children: React.ReactNode,
  large: boolean
}

const StyledCard = styled.div<SpaceProps>`
  border: 1px solid;
  min-width: 0;
  ${space}
`

const Card = ({ large, ...props }: Card) => (
  <StyledCard
    {...props}
    p={large ? 4 : 2}
  />
)

export {
  Card
}

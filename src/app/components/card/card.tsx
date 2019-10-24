import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps, typography, TypographyProps } from 'styled-system'
import { getSpace } from '../theme'
import { Sizes } from '../enums'

// TODO use colors enum
const StyledCard = styled.div<SpaceProps & TypographyProps>`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  box-shadow: 0 2px 2px rgba(0,0,0,.1);
  min-width: 0;
  ${space}
  ${typography}
`

type Card = {
  children: React.ReactNode,
  size: Sizes,
  align?: 'left' | 'center'
}

const Card = ({ size, align, ...props }: Card) => (
  <StyledCard
    {...props}
    p={getSpace(size)}
    textAlign={align}
  />
)

export {
  Card
}

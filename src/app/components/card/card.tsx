import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { getSpace } from '../theme'

// TODO use colors enum
const StyledCard = styled.div<SpaceProps>`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  box-shadow: 0 2px 2px rgba(0,0,0,.1);
  min-width: 0;
  ${space}
`

const Card = ({ size, ...props }) => (
  <StyledCard
    {...props}
    p={getSpace(size)}
  />
)

export {
  Card
}

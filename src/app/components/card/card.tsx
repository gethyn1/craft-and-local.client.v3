import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { getSizesForTheme } from '../get-sizes-for-theme'

const StyledCard = styled.div<SpaceProps>`
  border: 1px solid ${props => props.theme.colors.greys.border};
  box-shadow: 0 2px 2px rgba(0,0,0,.1);
  min-width: 0;
  ${space}
`

const Card = withTheme(({ size, ...props }) => {
  const padding = getSizesForTheme(props.theme)[size]

  return (
    <StyledCard
      {...props}
      p={padding}
    />
  )
})

export {
  Card
}
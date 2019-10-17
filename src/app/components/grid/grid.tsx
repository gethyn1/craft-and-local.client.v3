import * as React from 'react'
import styled from 'styled-components'
import { grid, GridProps } from 'styled-system'

type Grid = {
  children: React.ReactNode
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  margin: 0;
  padding: 0;
  ${grid}
`

const Grid = ({ ...props }: Grid) => (
  <StyledGrid
    {...props}
    gridGap={[ 2, 3 ]}
    gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']}
  />
)

export {
  Grid
}

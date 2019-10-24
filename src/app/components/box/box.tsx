import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { getSpace } from '../theme'
import { Sizes } from '../enums'

const StyledBox = styled.div<SpaceProps>`
  min-width: 0;
  ${space}
`

type Box = {
  size: Sizes
}

const Box = ({ size, ...props }) => (
  <StyledBox
    {...props}
    p={getSpace(size)}
  />
)

export {
  Box
}

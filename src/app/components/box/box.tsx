import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { getSizesForTheme } from '../get-sizes-for-theme'

const StyledBox = styled.div<SpaceProps>`
  min-width: 0;
  ${space}
`

// TODO this format renders <Anonymous /> instead of <Box /> in component inspector
const Box = withTheme(({ size, ...props }) => {
  const padding = getSizesForTheme(props.theme)[size]

  return (
    <StyledBox
      {...props}
      p={padding}
    />
  )
})

export {
  Box
}

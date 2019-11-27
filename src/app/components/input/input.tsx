import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { getSpace } from '../theme'
import { Sizes } from '../enums'

const StyledInput = styled.input<SpaceProps>`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  width: 100%;
  ${space}
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // TODO: input has a native 'size' attribute so using 'level'. Should
  // update 'Sizes' and 'size' references in other components for consistency
  level?: Sizes
}

// TODO apply HTML input attributes instead of defining in Input type
const Input = ({ level = Sizes.SMALL, ...props }: InputProps) => (
  <StyledInput
    {...props}
    p={getSpace(level)}
  />
)

export {
  Input
}

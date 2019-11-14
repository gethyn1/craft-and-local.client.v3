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

type Input = {
  size?: Sizes,
  placeholder?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  type?: string,
  list?: string
}

// TODO apply HTML input attributes instead of defining in Input type
const Input = ({ size = Sizes.SMALL, ...props }: Input & SpaceProps) => (
  <StyledInput
    {...props}
    p={getSpace(size)}
  />
)

export {
  Input
}

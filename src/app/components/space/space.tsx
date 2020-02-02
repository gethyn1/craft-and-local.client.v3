import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { getSpace } from '../theme'
import { Sizes } from '../enums'

const Space = styled.div<SpaceProps>`
  ${space}
`

const SpaceChildren = styled.div<SpaceProps>`
  & > * {
    ${space}
  }
`

type Space = {
  children: React.ReactNode,
  size?: Sizes
}

const SpaceY = ({ size = Sizes.SMALL, ...props }: Space) => <Space mb={getSpace(size)} {...props} />

const SpaceChildrenY = ({ size = Sizes.SMALL, ...props }: Space) => <SpaceChildren mb={getSpace(size)} {...props} />

export {
  SpaceY,
  SpaceChildrenY
}

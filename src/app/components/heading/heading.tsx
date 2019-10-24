import * as React from 'react'
import styled from 'styled-components'
import { fontSize, FontSizeProps, space, SpaceProps } from 'styled-system'
import { getFontSize, getSpace } from '../theme'
import { FontSizes, Sizes } from '../enums'

enum Headings {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

enum Levels {
  LEVEL_1 = '1',
  LEVEL_2 = '2',
  LEVEL_3 = '3',
  LEVEL_4 = '4'
}

type HeadingProps = {
  children: React.ReactNode,
  level?: Levels,
  as?: Headings
}

type StyledHeadingProps = {
  uppercase?: boolean
}

const StyledHeading = styled.h1<StyledHeadingProps & FontSizeProps & SpaceProps>`
  font-weight: 700;
  ${props => props.uppercase ? 'text-transform: uppercase;' : null}
  ${fontSize}
  ${space}
`

const fontSizesMap = {
  [Levels.LEVEL_1]: getFontSize(FontSizes.LEVEL_1),
  [Levels.LEVEL_2]: getFontSize(FontSizes.LEVEL_2),
  [Levels.LEVEL_3]: getFontSize(FontSizes.LEVEL_3),
  [Levels.LEVEL_4]: getFontSize(FontSizes.LEVEL_4)
}

const spaceMap = {
  [Levels.LEVEL_1]: getSpace(Sizes.LARGE),
  [Levels.LEVEL_2]: getSpace(Sizes.MEDIUM),
  [Levels.LEVEL_3]: getSpace(Sizes.SMALL),
  [Levels.LEVEL_4]: getSpace(Sizes.X_SMALL)
}

// Use styled components `as` prop to change heading level
// e.g. <Heading as={Headings.H2} level={Levels.LEVEL_3} />
//
// TODO styled components forwards `font-size` as a prop to the HTML element. Needs a fix:
// https://github.com/styled-system/styled-system/issues/593
const Heading = ({ level, ...props }: HeadingProps & StyledHeadingProps) => (
  <StyledHeading
    {...props}
    fontSize={fontSizesMap[level]}
    mb={spaceMap[level]}
  />
)

export {
  Headings,
  Levels,
  Heading
}

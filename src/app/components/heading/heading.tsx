import * as React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import { fontSize, FontSizeProps } from 'styled-system'

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

type HeadingType = {
  children: React.ReactNode,
  level?: Levels,
  as?: Headings,
  theme: {
    fontSizes: {
      headingLevel1: number[],
      headingLevel2: number[],
      headingLevel3: number[],
      headingLevel4: number[]
    }
  }
}

const StyledHeading = styled.h1<FontSizeProps>`
  font-weight: bold;
  ${fontSize}
`

// Use styled components `as` prop to change heading level
// e.g. <Heading as={Headings.H2} level={Levels.LEVEL_3} />
//
// TODO styled components forwards `font-size` as a prop to the HTML element. Needs a fix:
// https://github.com/styled-system/styled-system/issues/593
const Heading = withTheme(({ level, ...props }: HeadingType) => {
  const { headingLevel1, headingLevel2, headingLevel3, headingLevel4 } = props.theme.fontSizes

  const fontSizesMap = {
    [Levels.LEVEL_1]: headingLevel1,
    [Levels.LEVEL_2]: headingLevel2,
    [Levels.LEVEL_3]: headingLevel3,
    [Levels.LEVEL_4]: headingLevel4
  }

  return (
    <StyledHeading
      {...props}
      fontSize={fontSizesMap[level]}
    />
  )
})

export {
  Headings,
  Levels,
  Heading
}

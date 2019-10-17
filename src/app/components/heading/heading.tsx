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
  LEVEL_3 = '3'
}

type HeadingType = {
  children: React.ReactNode,
  level?: Levels,
  as?: Headings,
  theme: {
    fontSizes: {
      headingLevel1: number[],
      headingLevel2: number[],
      headingLevel3: number[]
    }
  }
}

const StyledHeading = styled.h1<FontSizeProps>`
  font-weight: bold;
  ${fontSize}
`

// Use styled components `as` prop to change heading level
// e.g. <Heading as={Headings.H2} level={Levels.LEVEL_3} />
const Heading = withTheme(({ level, ...props }: HeadingType) => {
  const fontSizesMap = {
    [Levels.LEVEL_1]: props.theme.fontSizes.headingLevel1,
    [Levels.LEVEL_2]: props.theme.fontSizes.headingLevel2,
    [Levels.LEVEL_3]: props.theme.fontSizes.headingLevel3
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

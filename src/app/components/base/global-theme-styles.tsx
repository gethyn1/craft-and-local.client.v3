import * as React from 'react'
import { fontSize, FontSizeProps, space, SpaceProps } from 'styled-system'
import { createGlobalStyle, withTheme } from 'styled-components'
import { ThemeType } from './theme'

const GlobalTypography = createGlobalStyle<{ theme: ThemeType } & FontSizeProps & SpaceProps>`
  body {
    font-family: ${props => props.theme.fontFamily};
    ${fontSize}
  }
`

const BlockLevelVerticalRhythm = createGlobalStyle<{ theme: ThemeType } & SpaceProps>`
  address,
  h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, ol, ul,
  figure,
  hr,
  table,
  fieldset {
    ${space}
  }
`

const ListIndentation = createGlobalStyle<{ theme: ThemeType } & SpaceProps>`
  dd, ol, ul {
    ${space}
  }
`

// <GlobalThemeStyles /> wraps createGlobalStyle() to allow passing of scale based
// theme properties from styled system
const GlobalThemeStyles = withTheme(({ ...props }) =>
  <React.Fragment>
    <GlobalTypography {...props} fontSize={props.theme.fontSizes.body} />
    <BlockLevelVerticalRhythm {...props} mb={props.theme.space.large} />
    <ListIndentation {...props} ml={props.theme.space.large} />
  </React.Fragment>
)

export {
  GlobalThemeStyles
}

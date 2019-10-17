import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import './base.scss'

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64],
  fontSizes: [12, 14, 16, 20, 24, 32],
  colors: {
    primary: '#007ce0'
  }
}

const { fontSizes } = theme

// @ts-ignore: Typescript does not support styled system aliases
theme.fontSizes.headingLevel1 = [fontSizes[4], fontSizes[5]]
// @ts-ignore: Typescript does not support styled system aliases
theme.fontSizes.headingLevel2 = [fontSizes[3], fontSizes[4]]
// @ts-ignore: Typescript does not support styled system aliases
theme.fontSizes.headingLevel3 = [fontSizes[2], fontSizes[3]]

// TODO look into how to set base styles using theme and styled components
export const Base = ({ children }) =>
  <ThemeProvider theme={theme}>{children}</ThemeProvider>

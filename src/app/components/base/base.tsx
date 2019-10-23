import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../theme'
import './scss/base.scss'
import { GlobalThemeStyles } from './global-theme-styles'

export const Base = ({ children }) =>
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalThemeStyles />
      {children}
    </React.Fragment>
  </ThemeProvider>

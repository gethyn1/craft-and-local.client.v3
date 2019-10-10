import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import './base.scss'

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32],
  colors: {
    primary: '#007ce0'
  }
}

export const Base = ({ children }) =>
<ThemeProvider theme={theme}>{children}</ThemeProvider>

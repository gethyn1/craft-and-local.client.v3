import * as React from 'react'
import 'normalize.css'

type Base = {
  children: React.ReactNode
}

export const Base = ({ children }: Base) =>
  <React.Fragment>{children}</React.Fragment>

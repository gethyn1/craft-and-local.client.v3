import * as React from 'react'

type AppLayout = {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayout) => (
  <div>{children}</div>
)

export {
  AppLayout
}

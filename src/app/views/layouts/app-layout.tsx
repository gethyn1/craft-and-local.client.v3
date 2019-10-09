import React from 'react'
import './app.scss'

type AppLayout = {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayout) => (
  <div>{children}</div>
)

export {
  AppLayout
}

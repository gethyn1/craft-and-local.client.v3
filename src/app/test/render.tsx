import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { rootReducer } from '../state'
import { theme } from '../components/theme'
import { apiService } from '../middleware'

// Check this function against https://testing-library.com/docs/react-testing-library/setup
// TODO apply same middleware as app (i.e. import middleware args)
function renderWithProviders(
  ui: React.ReactNode,
  state: {} = {}
) {
  return render(
    <Provider store={createStore(rootReducer, state, applyMiddleware(apiService, thunk))}>
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <React.Fragment>
            {ui}
          </React.Fragment>
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  )
}

export {
  renderWithProviders
}

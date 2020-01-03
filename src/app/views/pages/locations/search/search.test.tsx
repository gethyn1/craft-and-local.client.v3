import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent, wait, queryByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { container as Search } from './container'
import { rootReducer } from '../../../../state'
import { theme } from '../../../../components/theme'

const placeNames = [
  'Norwich, Norfolk, England, United Kingdom',
  'Wellingborough, Northamptonshire, England, United Kingdom',
  'Grantham, Lincolnshire, England, United Kingdom',
  'Towcester, Northamptonshire, England, United Kingdom',
  'Pewsey, Wiltshire, England, United Kingdom'
]

// Check this function against https://testing-library.com/docs/react-testing-library/setup
function renderWithRedux(
  ui: React.ReactNode,
) {
  return render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          {ui}
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  )
}

describe('Search', () => {
  test('Renders an empty search box', () => {
    const { getByTestId, container } = renderWithRedux(<Search />)

    // Assert search input is empty
    const input = (getByTestId('search/input') as HTMLInputElement)
    expect(input.value).toBe('')

    // Assert results is not in document
    const results = queryByTestId(container, 'search/results')
    expect(results).toBeNull()
  })

  test('Does not lookup results if less than 4 characters entered', () => {
    const { getByTestId, container, debug } = renderWithRedux(<Search />)

    // Enter value in search input
    const input = (getByTestId('search/input') as HTMLInputElement)
    fireEvent.change(input, { target: { value: 'eas' } })
    expect(input.value).toBe('eas')

    // Assert results is not in document
    const results = queryByTestId(container, 'search/results')
    expect(results).toBeNull()
  })

  test('Looks up results if more than 4 characters entered', async () => {
    const { getByTestId, getByText } = renderWithRedux(<Search />)

    // Enter value in search input
    const input = (getByTestId('search/input') as HTMLInputElement)
    fireEvent.change(input, { target: { value: 'easto' } })

    // Assert results is in document
    await wait(() => {
      expect(getByTestId('search/results')).toBeInTheDocument()
      placeNames.forEach(placeName => expect(getByText(placeName)).toBeInTheDocument())
    })
  })
})

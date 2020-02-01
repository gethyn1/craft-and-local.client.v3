import * as React from 'react'
import { fireEvent, wait, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { assocPath, compose } from 'ramda'
import { container as LocationsList } from './container'
import { locationFactory } from '../../../../test/data-factories'
import { renderWithProviders } from '../../../../test/render'
import { LOADING_LOCATIONS, ERROR_LOADING_LOCATIONS, LOAD_MORE } from './text'

const locations = [
  locationFactory({ title: 'Mama\'s Little Bakery', id: '1' }),
  locationFactory({ title: 'Jeremiahs bakery', id: '2' }),
  locationFactory({ title: 'Harts Bakery', id: '3' })
]

const moreLocations = [
  locationFactory({ title: 'The Bristol Loaf', id: '4' }),
  locationFactory({ title: 'Sam\'s bakery', id: '5' }),
  locationFactory({ title: 'Baking co.', id: '6' })
]

const defaultState = {
  user: {
    coordinates: {
      entity: {
        latitude: 123,
        longitude: 456
      }
    }
  },
  locations: {
    entities: [],
    meta: {
      read: {
        isLoading: false,
        hasLoaded: false,
        hasErrored: false
      }
    }
  }
}

describe('Locations list', () => {
  test.only('Renders a loading state when locations are loading', async () => {
    const state = compose(
      assocPath(['locations', 'entities'], locations),
      assocPath(['locations', 'meta', 'read', 'isLoading'], true),
    )(defaultState)

    const { getByText } = renderWithProviders(<LocationsList />, state)

    expect(getByText(LOADING_LOCATIONS)).toBeInTheDocument()
  })

  test('Renders an error message when loading locations has errored', async () => {
    const state = assocPath(['locations', 'meta', 'read', 'hasErrored'], true, defaultState)
    const { getByText } = renderWithProviders(<LocationsList />, state)

    expect(getByText(ERROR_LOADING_LOCATIONS)).toBeInTheDocument()
  })

  test('Renders a list of locations', async () => {
    const state = compose(
      assocPath(['locations', 'entities'], locations),
      assocPath(['locations', 'meta', 'read', 'hasLoaded'], true),
    )(defaultState)

    const { getByText } = renderWithProviders(<LocationsList />, state)

    expect(getByText('Mama\'s Little Bakery')).toBeInTheDocument()
    expect(getByText('Jeremiahs bakery')).toBeInTheDocument()
    expect(getByText('Harts Bakery')).toBeInTheDocument()
  })

  test('Loads more locations', async () => {
    // Mock fetch API response
    const mockJsonPromise = Promise.resolve({ data: moreLocations })
    const mockFetchPromise = Promise.resolve({
      status: 200,
      ok: true,
      json: () => mockJsonPromise,
    })

    global['fetch'] = jest.fn().mockImplementation(() => mockFetchPromise)

    const state = compose(
      assocPath(['locations', 'entities'], locations),
      assocPath(['locations', 'meta', 'read', 'hasLoaded'], true),
    )(defaultState)

    const { getByText, queryByText } = renderWithProviders(<LocationsList />, state)
    fireEvent.click(getByText(LOAD_MORE))

    await wait(() => expect(getByText(ERROR_LOADING_LOCATIONS)).toBeInTheDocument())
    await waitForElementToBeRemoved(() => queryByText(ERROR_LOADING_LOCATIONS))

    await wait(() => {
      expect(getByText('Mama\'s Little Bakery')).toBeInTheDocument()
      expect(getByText('Jeremiahs bakery')).toBeInTheDocument()
      expect(getByText('Harts Bakery')).toBeInTheDocument()
      expect(getByText('The Bristol Loaf')).toBeInTheDocument()
      expect(getByText('Sam\'s bakery')).toBeInTheDocument()
      expect(getByText('Baking co.')).toBeInTheDocument()
    })

    // Cleanup mock fetch
    global['fetch'].mockClear()
    delete global['fetch']
  })

  test('Renders error message when loading more locations fails', async () => {
    // Mock fetch API response
    const mockJsonPromise = Promise.resolve({ errors: "An error" })
    const mockFetchPromise = Promise.resolve({
      status: 500,
      ok: false,
      json: () => mockJsonPromise,
    })

    global['fetch'] = jest.fn().mockImplementation(() => mockFetchPromise)

    const state = compose(
      assocPath(['locations', 'entities'], locations),
      assocPath(['locations', 'meta', 'read', 'hasLoaded'], true),
    )(defaultState)

    const { getByText } = renderWithProviders(<LocationsList />, state)
    fireEvent.click(getByText(LOAD_MORE))

    await wait(() => {
      expect(getByText('Mama\'s Little Bakery')).toBeInTheDocument()
      expect(getByText('Jeremiahs bakery')).toBeInTheDocument()
      expect(getByText('Harts Bakery')).toBeInTheDocument()
      expect(getByText(ERROR_LOADING_LOCATIONS)).toBeInTheDocument()
    })

    // Cleanup mock fetch
    global['fetch'].mockClear()
    delete global['fetch']
  })
})

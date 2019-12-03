import * as React from 'react'
import styled from 'styled-components'
import { Input } from '../../../../components/input'
import { Sizes } from '../../../../components/enums'
import { Results } from './results'
import { ForwardGeocodeResult } from '../../../../types'

const { useRef, useEffect } = React

const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.space.medium}px;
`

const useRefBlur = ({ ref, onBlur }) => {
  const handleBlur = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onBlur()
    }
  }

  useEffect(() => {
    // TODO call handleBlur on escape key press
    document.addEventListener('mousedown', handleBlur)
    return () => {
      document.removeEventListener('mousedown', handleBlur)
    }
  })
}

type SearchProps = {
  results: ForwardGeocodeResult[],
  onChange: (value: string) => void,
  onSelectResult: (result: ForwardGeocodeResult) => void,
  onSearchBoxBlur: () => void,
  query: string
}

// TODO add loading state for results
const Search = ({ onChange, results, onSelectResult, onSearchBoxBlur, query }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void  => {
    onChange(e.target.value)
  }

  const ref = useRef(null)
  useRefBlur({ ref, onBlur: onSearchBoxBlur })

  return (
    <SearchWrapper ref={ref}>
      <form>
        <Input
          onChange={handleChange}
          type="text"
          placeholder="Search by location"
          level={Sizes.MEDIUM}
          value={query || ''}
        />
        <Results results={results} onResultClick={onSelectResult} />
      </form>
    </SearchWrapper>
  )
}

export {
  Search
}

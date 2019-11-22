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
  onKeyUp: (value: string) => void,
  onSelectResult: (result: ForwardGeocodeResult) => void,
  onSearchBoxBlur: () => void
}

// TODO add loading state for results
// TODO clear results and populate input on select
const Search = ({ onKeyUp, results, onSelectResult, onSearchBoxBlur }: SearchProps) => {
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyUp(e.currentTarget.value)
  }

  const ref = useRef(null)
  useRefBlur({ ref, onBlur: onSearchBoxBlur })

  return (
    <SearchWrapper ref={ref}>
      <form>
        <Input
          onKeyUp={handleKeyUp}
          type="text"
          placeholder="Search by location"
          size={Sizes.MEDIUM}
        />
        <Results results={results} onResultClick={onSelectResult} />
      </form>
    </SearchWrapper>
  )
}

export {
  Search
}

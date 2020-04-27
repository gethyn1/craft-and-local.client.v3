import * as React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../../components/button'
import { Location, LatLng } from '../../../../../types'
import { LOAD_MORE } from '../text'

const { useState, useRef, useEffect } = React

const LoadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.lightGrey};
  dispaly: block;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    cursor: pointer;
    color: #000;
  }

  &:disabled {
    /* color: ${props => props.theme.colors.lightGrey}; */
    color: red;
  }
`

type LoadMoreProps = {
  locations: Location[],
  coordinates: LatLng,
  onLoadMore: (locations: Location[], coordinates: LatLng) => void,
}

interface LooseObject {
  [key: string]: any
}

function usePrevious (value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

const LoadMore = ({ onLoadMore, locations, coordinates }: LoadMoreProps) => {
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const prevCount = usePrevious(count)

  useEffect(() => {
    setCount(locations.length)
    setDisabled(false)
    console.log('PREV COUNT:', prevCount)
    console.log('COUNT:', count)
  }, [locations])

  const handleLoadMore = () => {
    onLoadMore(locations, coordinates)
  }

  return (
    <LoadMoreButton onClick={handleLoadMore} disabled={disabled}>{LOAD_MORE}</LoadMoreButton>
  )
}

export {
  LoadMore
}

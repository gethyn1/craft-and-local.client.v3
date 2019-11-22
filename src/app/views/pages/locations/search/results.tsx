import * as React from 'react'
import styled from 'styled-components'
import { BareList } from '../../../../components/bare-list'
import { Sizes } from '../../../../components/enums'
import { ForwardGeocodeResult } from '../../../../types'

const ResultsWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 2px 2px rgba(0,0,0,.1);
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-top: none;
  padding: ${props => props.theme.space.large}px 0;
`

const Result = styled.div`
  cursor: pointer;
  padding: 0 ${props => props.theme.space.large}px;
`

const ResultTitle = styled.span`
  display: block;
  font-weight: ${props => props.theme.fontWeights.bold}
`

const ResultAddress = styled.span`
  display: block;
  color: ${props => props.theme.colors.darkGrey}
`

const renderSearchResult = (onClick: (result: ForwardGeocodeResult) => void) => (result: ForwardGeocodeResult) => {
  const handleClick = () => onClick(result)

  return (
    <Result onClick={handleClick}>
      <ResultTitle>{result.text}</ResultTitle>
      <ResultAddress>{result.region}</ResultAddress>
    </Result>
  )
}

type ResultsProps = {
  results: ForwardGeocodeResult[],
  onResultClick: (result: ForwardGeocodeResult) => void
}

const Results = ({ results, onResultClick }: ResultsProps) =>
  results.length ? (
    <ResultsWrapper>
      <BareList items={results} keyProp="id" renderItem={renderSearchResult(onResultClick)} size={Sizes.MEDIUM} />
    </ResultsWrapper>
  ) : null

export {
  Results
}

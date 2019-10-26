import * as React from 'react'
import styled from 'styled-components'

const Bone = styled.div`
  height: 16px;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  animation: skeleton-loading 1.4s ease infinite;

  @keyframes skeleton-loading {
    0% {
      background-position:100% 50%;
    }
    100% {
      background-position:0 50%;
    }
  }

  &:first-child {
    width: 38%;
  }

  &:last-child {
    width: 61%;
    margin-bottom: 0;
  }
`

const Skeleton = () => (
  <div>
    <Bone />
    <Bone />
    <Bone />
    <Bone />
  </div>
)

export {
  Skeleton
}

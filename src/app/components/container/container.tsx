import styled from 'styled-components'

const Container = styled.div`
  max-width: ${props => props.theme.layout.container.maxWidth}px;
  margin-left: auto;
  margin-right: auto;
`

export {
  Container
}

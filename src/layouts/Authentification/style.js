import styled from 'styled-components'

export const StyleBase = styled.div`
  background-color: #fafcfe;
  min-height: 100vh;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 450px;
  &:before {
    content: '';
    display: block;
    height: 90px;
  }
`

export const Content = styled.div`
  background-color: #FFF;
  border: 1px solid #e9ebee;
  padding: 60px 68px 40px;
  h2 {
    font-size: 28px;
    font-weight: 900;
    color: ${({theme}) => theme.primary};
    margin-bottom: 64px;
  }
`

import styled from 'styled-components'

export const StyleBase = styled.div`
  display: flex;
  min-height: 100vh;
`

export const Main = styled.div`
  width: 75%;
  border-right: 1px solid #e6e8ec;
  > div {
    max-width: 940px;
    padding: 0 20px;
    margin-left: auto;
  }
`

export const SideBar = styled.div`
  background-color: #fafcfe;
  width: 25%;
  > div {
    max-width: 200px;
    padding: 0 20px;
    margin-right: auto;
  }
`

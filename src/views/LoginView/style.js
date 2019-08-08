import styled from 'styled-components'

export const StyleBase = styled.div`
  h3 {
    font-weight: 600;
    font-size: 20px;
  }
`

export const Description = styled.div`
  font-size: 12px;
  color: ${({theme}) => theme.label};
  margin-top: 8px;
  span {
    color: ${({theme}) => theme.primary};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Form = styled.form`
  margin-top: 24px;
  /* Submit button */
  button {
    margin-top: 48px;
  }
`

export const ErrorMsg = styled.div`
  background-color: #fed8da;
  color: hsl(4, 41%, 50%);
  padding: 20px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-top: 24px;
  display: flex;
  align-items: flex-end;
  svg {
    height: 16px;
    margin-right: 10px;
    .primary {
      fill: hsl(4, 41%, 50%);
    }
    .secondary {
      fill: #fed8da;
    }
  }
`

import styled, { css } from 'styled-components'

const styles = {
  primary: css`
    border-color: ${props => props.theme.primary};
    background-color: ${props => props.theme.primary};
    color: #FFF;
    &:focus {
      background-color: #1443b8;
      border-color: #1443b8;
    }
  `,
  secondary: css`
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
    &:focus {
      border-color: #1443b8;
    }
  `,
}

export const StyleBase = styled.button`
  width: 100%;
  display: block;
  text-align: center;
  padding: 12px;
  font-weight: 500;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: .5px;
  border-width: 2px;
  border-style: solid;
  ${({btnStyle}) => styles[btnStyle]};
  transition: border-color 420ms cubic-bezier(.165,.84,.44,1), background-color 420ms cubic-bezier(.165,.84,.44,1);
  &:focus {
    outline: 0;
  }
`

import styled, { css } from 'styled-components'

export const StyleBase = styled.div`
  position: relative;
  padding-top: 15px;
  margin-bottom: 20px;
  height: 42px;
`

export const InputStyle = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.label};
  padding: 10px 0;
  width: 100%;
  font-family: 'Poppins',sans-serif;
  font-size: 14px;
  outline: 0;
  color: ${({theme}) => theme.title};
  position: absolute;
  transition: border-bottom 420ms cubic-bezier(.165,.84,.44,1);
  &:focus {
    border-bottom: 2px solid ${({theme}) => theme.primary};
    outline: 0;
    & + label {
      font-size: 12px;
      bottom: 40px;
    }
  }
  ${({isFocus}) => isFocus && css`
    border-bottom: 2px solid ${({theme}) => theme.primary};
    & + label {
      font-size: 12px;
      bottom: 40px;
    }
  `};
`

export const LabelStyle = styled.label`
  position: absolute;
  bottom: 13px;
  font-size: 14px;
  left: 0;
  transition: font-size 420ms cubic-bezier(.165,.84,.44,1), bottom 420ms cubic-bezier(.165,.84,.44,1);
  color: ${({theme}) => theme.label};
`

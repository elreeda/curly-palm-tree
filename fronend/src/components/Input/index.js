import React from 'react'

import { StyleBase, InputStyle, LabelStyle } from './style'

const Input = ({ id, label, value, ...props }) => {
  return (
    <StyleBase>
      <InputStyle isFocus={!!value} id={id} value={value} {...props} />
      <LabelStyle htmlFor={id}>{label}</LabelStyle>
    </StyleBase>
  )
}

export default Input

import React from 'react'

import { StyleBase } from './style'

const Button = ({ btnStyle, children, ...props }) => {
  return (
    <StyleBase btnStyle={btnStyle} {...props}>
      {children}
    </StyleBase>
  )
}

Button.defaultProps = {
  btnStyle: 'primary'
}

export default Button

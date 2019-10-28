import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

const StyledButton = styled(StyledBaseButton)`
  ${({ outline, disabled }) => `
    background-color: ${outline ? 'transparent' : colors.default.background};
    border-color: ${colors.default.background};
    color: ${colors.default.color};

    &:hover {
      color: ${disabled ? colors.default.color : colors.color}
      background-color: ${disabled ? colors.default.background : colors.default.hover};
      border-color: ${disabled ? colors.default.background : colors.default.hover};
    }
  `}
`

const Button = props => {
  const { children } = props

  return <StyledButton {...props}>{children}</StyledButton>
}

Button.propTypes = {
  children: string,
  className: string
}

export default Button

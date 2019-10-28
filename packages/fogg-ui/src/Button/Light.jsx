import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

const StyledButton = styled(StyledBaseButton)`
  ${({ outline, disabled }) => `
    background-color: ${outline ? 'transparent' : colors.light.background};
    border-color: ${colors.light.background};
    color: ${colors.light.color};

    &:hover {
      color: ${disabled ? colors.light.color : colors.color}
      background-color: ${disabled ? colors.light.background : colors.light.hover};
      border-color: ${disabled ? colors.light.background : colors.light.hover};
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

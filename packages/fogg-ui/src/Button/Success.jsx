import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

const StyledButton = styled(StyledBaseButton)`
  ${({ outline, disabled }) => `
    background-color: ${outline ? 'transparent ' : colors.success.background};
    border-color: ${colors.success.background};
    color: ${outline ? colors.success.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${disabled ? colors.success.background : colors.success.hover};
      border-color: ${colors.success.background};
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

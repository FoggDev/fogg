import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

const StyledButton = styled(StyledBaseButton)`
  ${({ outline, disabled }) => `
    background-color: ${outline ? 'transparent ' : colors.warning.background};
    border-color: ${colors.warning.background};
    color: ${outline ? colors.warning.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${disabled ? colors.warning.background : colors.warning.hover};
      border-color: ${colors.warning.hover};
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

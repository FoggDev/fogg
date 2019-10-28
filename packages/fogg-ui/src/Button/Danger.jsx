import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

const StyledButton = styled(StyledBaseButton)`
  ${({ outline, disabled }) => `
    background-color: ${outline ? 'transparent ' : colors.danger.background};
    border-color: ${colors.danger.background};
    color: ${outline ? colors.danger.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${disabled ? colors.danger.background : colors.danger.hover};
      border-color: ${colors.danger.hover};
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

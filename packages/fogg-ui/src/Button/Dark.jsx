import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

const StyledButton = styled(StyledBaseButton)`
  ${({ outline, disabled }) => `
    background-color: ${outline ? 'transparent ' : colors.dark.background};
    border-color: ${colors.dark.background};
    color: ${outline ? colors.dark.background : colors.dark.color};

    &:hover {
      color: ${colors.color}
      background-color: ${disabled ? colors.dark.background : colors.dark.hover};
      border-color: ${colors.dark.hover};
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

import React from 'react'
import styled from 'styled-components'
import { bool, string } from 'prop-types'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

const StyledButton = styled(StyledBaseButton)`
  ${({ outline, disabled }) => `
    background-color: ${outline ? 'transparent ' : colors.primary.background};
    border-color: ${colors.primary.background};
    color: ${outline ? colors.primary.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${disabled ? colors.primary.background : colors.primary.hover};
      border-color: ${disabled ? colors.primary.background : colors.primary.hover};
    }
  `}
`

const Button = props => {
  const { children, disabled, href } = props
  const buttonProps = Object.assign({}, props)

  if (disabled && href) {
    delete buttonProps.href
  }

  return <StyledButton {...buttonProps}>{children}</StyledButton>
}

Button.propTypes = {
  children: string,
  className: string,
  disabled: bool,
  href: string
}

export default Button

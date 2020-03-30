import React, { FC } from 'react'
import styled from 'styled-components'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

interface iProps {
  block?: boolean
  children?: string
  className?: string
  disabled?: boolean
  href?: string
  large?: boolean
  name?: string
  onClick?(): void
  outline?: boolean
  small?: boolean
  xLarge?: boolean
}

const StyledButton = styled(StyledBaseButton)<iProps>`
  ${({ outline, disabled }): any => `
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

const Button: FC<iProps> = props => {
  const { children, disabled, href } = props
  const buttonProps = { ...props }

  if (disabled && href) {
    delete buttonProps.href
  }

  return <StyledButton {...buttonProps}>{children}</StyledButton>
}

export default Button

import React, { FC } from 'react'
import styled from 'styled-components'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

interface iProps {
  children?: string
  className?: string
  disabled?: boolean
  name?: string
  outline?: boolean
}

const StyledButton = styled(StyledBaseButton)<iProps>`
  ${({ outline, disabled }): any => `
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

const Button: FC<iProps> = props => {
  const { children } = props

  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button

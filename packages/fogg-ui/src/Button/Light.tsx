import React, { FC } from 'react'
import styled from 'styled-components'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

interface iProps {
  children?: string
  className?: string
  disabled?: boolean
  outline?: boolean
}

const StyledButton = styled(StyledBaseButton)<iProps>`
  ${({ outline, disabled }): any => `
    background-color: ${outline ? 'transparent' : colors.light.background};
    border-color: ${colors.light.background};
    color: ${colors.light.color};

    &:hover {
      color: ${disabled ? colors.light.color : colors.color};
      background-color: ${disabled ? colors.light.background : colors.light.hover};
      border-color: ${disabled ? colors.light.background : colors.light.hover};
    }
  `}
`

const Button: FC<iProps> = props => {
  const { children } = props

  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button

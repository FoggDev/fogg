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

const Button: FC<iProps> = props => {
  const { children } = props

  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button

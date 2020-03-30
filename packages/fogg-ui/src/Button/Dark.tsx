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

const Button: FC<iProps> = props => {
  const { children } = props

  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button

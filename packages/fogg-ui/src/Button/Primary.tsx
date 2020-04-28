import React, { FC } from 'react'
import styled from 'styled-components'
import Spinner from '../Spinner'
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
  onClick?(e: any): any
  outline?: boolean
  small?: boolean
  xLarge?: boolean
  isLoading?: boolean
  loadingText?: string
  spinner?: string
}

const StyledButton = styled(StyledBaseButton)<iProps>`
  position: relative;

  img {
    position: absolute;
    top: 9px;
    left: 6px;
  }

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
  const { children, disabled, href, isLoading, loadingText, spinner = 'rolling' } = props
  let buttonText: any = children
  const buttonProps = { ...props }

  if (isLoading) {
    buttonText = (
      <>
        <Spinner spinner={spinner} style={{ width: '18px' }} /> &nbsp;&nbsp;&nbsp; {loadingText}
      </>
    )
  }

  if (disabled && href) {
    delete buttonProps.href
  }

  return (
    <StyledButton {...props} disabled={isLoading}>
      {buttonText}
    </StyledButton>
  )
}

export default Button

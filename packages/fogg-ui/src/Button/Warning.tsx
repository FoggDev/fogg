import React, { FC } from 'react'
import styled from 'styled-components'
import Spinner from '../Spinner'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

interface iProps {
  children?: string
  className?: string
  disabled?: boolean
  href?: string
  name?: string
  onClick?(e: any): any
  outline?: boolean
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

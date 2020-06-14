import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import Spinner from '../Spinner'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

interface iProps {
  block?: boolean
  children?: string | ReactElement
  className?: string
  disabled?: boolean
  href?: string
  as?: string
  large?: boolean
  name?: string
  onClick?(e: any): any
  outline?: boolean
  small?: boolean
  xLarge?: boolean
  isLoading?: boolean
  loadingText?: string
  spinner?: string
  Link?: any
}

const StyledButton = styled(StyledBaseButton)<iProps>`
  a {
    position: relative;

    img {
      position: absolute;
      top: 9px;
      left: 6px;
    }

    ${({ outline, disabled }): any => `
      background-color: ${outline ? 'transparent ' : colors.success.background};
      border-color: ${colors.success.background};
      color: ${outline ? colors.success.background : colors.color};

      &:hover {
        color: ${colors.color}
        background-color: ${disabled ? colors.success.background : colors.success.hover};
        border-color: ${disabled ? colors.success.background : colors.success.hover};
      }
    `}
  }
`

const Button: FC<iProps> = props => {
  const { children, className, disabled, isLoading, loadingText, spinner = 'rolling', Link } = props
  let buttonText: any = children

  if (isLoading) {
    buttonText = (
      <>
        <Spinner spinner={spinner} style={{ width: '18px' }} /> &nbsp;&nbsp;&nbsp; {loadingText}
      </>
    )
  }

  if (Link) {
    return (
      <StyledButton className={className} disabled={isLoading || disabled}>
        <Link {...props}>{buttonText}</Link>
      </StyledButton>
    )
  }

  return (
    <StyledButton className={className} disabled={isLoading || disabled}>
      <a {...props}>{buttonText}</a>
    </StyledButton>
  )
}

export default Button

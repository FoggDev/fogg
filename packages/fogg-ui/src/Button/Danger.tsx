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
      background-color: ${outline ? 'transparent ' : colors.danger.background};
      border-color: ${colors.danger.background};
      color: ${outline ? colors.danger.background : colors.color};

      &:hover {
        color: ${colors.color}
        background-color: ${disabled ? colors.danger.background : colors.danger.hover};
        border-color: ${disabled ? colors.danger.background : colors.danger.hover};
      }
    `}
  }
`

const Button: FC<iProps> = props => {
  const {
    Link,
    as,
    children,
    className,
    disabled,
    href,
    isLoading,
    loadingText,
    onClick,
    spinner = 'rolling'
  } = props

  let buttonText: any = children
  const linkProps: any = {
    className,
    disabled,
    href
  }

  if (as) {
    linkProps.as = as
  }

  if (onClick) {
    linkProps.onClick = onClick
  }

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
        <Link {...linkProps}>{buttonText}</Link>
      </StyledButton>
    )
  }

  return (
    <StyledButton className={className} disabled={isLoading || disabled}>
      <a {...linkProps}>{buttonText}</a>
    </StyledButton>
  )
}

export default Button

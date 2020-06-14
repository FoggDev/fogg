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
      background-color: ${outline ? 'transparent ' : colors.warning.background};
      border-color: ${colors.warning.background};
      color: ${outline ? colors.warning.background : colors.color};

      &:hover {
        color: ${colors.color}
        background-color: ${disabled ? colors.warning.background : colors.warning.hover};
        border-color: ${disabled ? colors.warning.background : colors.warning.hover};
      }
    `}
  }
`

const Button: FC<iProps> = props => {
  const {
    children,
    className,
    disabled,
    isLoading,
    loadingText,
    spinner = 'rolling',
    Link,
    href,
    as
  } = props
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
        <Link href={href} as={as}>
          {buttonText}
        </Link>
      </StyledButton>
    )
  }

  return (
    <StyledButton className={className} disabled={isLoading || disabled}>
      <a href={href}>{buttonText}</a>
    </StyledButton>
  )
}

export default Button

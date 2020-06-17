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
      background-color: ${outline ? 'transparent ' : colors.light.background};
      border-color: ${colors.light.background};
      color: ${outline ? colors.light.background : colors.color};

      &:hover {
        color: ${colors.color}
        background-color: ${disabled ? colors.light.background : colors.light.hover};
        border-color: ${disabled ? colors.light.background : colors.light.hover};
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

  // Fix to remove React Warning
  delete props.isLoading
  delete props.loadingText

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

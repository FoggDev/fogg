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
    background-color: ${outline ? 'transparent ' : colors.danger.background};
    border-color: ${colors.danger.background};
    color: ${outline ? colors.danger.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${disabled ? colors.danger.background : colors.danger.hover};
      border-color: ${colors.danger.hover};
    }
  `}
`

const Button: FC<iProps> = props => {
  const { children, disabled, isLoading, loadingText, spinner = 'rolling' } = props
  let buttonText: any = children

  if (isLoading) {
    buttonText = (
      <>
        <Spinner spinner={spinner} style={{ width: '18px' }} /> &nbsp;&nbsp;&nbsp; {loadingText}
      </>
    )
  }

  return (
    <StyledButton {...props} disabled={isLoading || disabled}>
      {buttonText}
    </StyledButton>
  )
}

export default Button

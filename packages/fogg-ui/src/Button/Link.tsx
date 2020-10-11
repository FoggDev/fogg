import React, { FC, ReactElement } from 'react'
import styled from '@emotion/styled'
import { cx } from 'fogg-utils'
import colors from '../colors'
import StyledBaseButton from './StyledBaseButton'

interface iProps {
  block?: boolean
  children?: string | ReactElement
  className?: string
  disabled?: boolean
  href?: string
  large?: boolean
  name?: string
  onClick?(e: any): any
  outline?: boolean
  small?: boolean
  xLarge?: boolean
  color?: string
  bold?: boolean
  bg?: string
  fontSize?: string
}

const StyledButton = styled(StyledBaseButton)<iProps>`
  display: inline-block;

  ${({ color, bold, bg, fontSize }): any => `
    a {
      box-sizing: border-box;
      background-color: transparent;
      color: ${color || colors.primary.background};
      font-weight: ${bold ? '600' : '400'};
      font-size: ${fontSize || '1rem'};
      border: 2px solid transparent;
      &:hover {
        color: ${color || colors.primary.background};
        background-color: ${bg || '#EEE'};
      }
      &:active {
        border: 2px solid ${bg ? color : '#CCC'};
      }
    }
  `}
`

const Button: FC<iProps> = props => {
  const { children, disabled, href, className = '' } = props
  const buttonProps = { ...props }

  if (disabled && href) {
    delete buttonProps.href
  }

  if (buttonProps.bold) {
    delete buttonProps.bold
  }

  return (
    <StyledButton {...props} disabled={disabled} className={cx('LinkButton', className)}>
      <a {...buttonProps}>{children}</a>
    </StyledButton>
  )
}

export default Button

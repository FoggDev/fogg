import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
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
  color?: string
  bold?: boolean
  bg?: string
  fontSize?: string
  Link?: any
}

const StyledButton = styled(StyledBaseButton)<iProps>`
  ${({ color, bold, bg, fontSize }): any => `
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
  `}
`

const Button: FC<iProps> = props => {
  const { children, className, Link, href, as } = props
  const buttonText: any = children

  if (Link) {
    return (
      <StyledButton className={className}>
        <Link href={href} as={as}>
          {buttonText}
        </Link>
      </StyledButton>
    )
  }

  return (
    <StyledButton className={className}>
      <a href={href}>{buttonText}</a>
    </StyledButton>
  )
}

export default Button

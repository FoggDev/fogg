import React, { FC } from 'react'
import styled from '@emotion/styled'
import { cx } from 'fogg-utils'

interface iProps {
  center?: boolean
  children?: any
  className?: string
  danger?: boolean
  dark?: boolean
  flat?: boolean
  info?: boolean
  light?: boolean
  onClick?(e: any): any
  primary?: boolean
  secondary?: boolean
  success?: boolean
  warning?: boolean
}

const StyledBadge = styled.div<iProps>`
  background-color: #0168fa;
  border-radius: 0.25rem;
  color: #fff;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter UI', Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  margin-right: 2px;
  padding: 3px 7px 4px;
  text-align: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  vertical-align: baseline;
  white-space: nowrap;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${({ secondary }): any =>
    secondary &&
    `
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
  `}

  ${({ success }): any =>
    success &&
    `
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  `}

  ${({ danger }): any =>
    danger &&
    `
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `}

  ${({ info }): any =>
    info &&
    `
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  `}

  ${({ light }): any =>
    light &&
    `
    color: #7f7f81;
    background-color: #fdfdfe;
    border-color: #fcfcfd;
  `}

  ${({ dark }): any =>
    dark &&
    `
    color: #fff;
    background-color: #343A40;
    border-color: #343A40;
  `}

  ${({ warning }): any =>
    warning &&
    `
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  `}
`

const Badge: FC<iProps> = props => {
  const { children, className = '' } = props
  let style = {}

  if (props.onClick) {
    style = {
      cursor: 'pointer'
    }
  }

  return (
    <StyledBadge style={style} {...props} className={cx('Badge', className)}>
      {children}
    </StyledBadge>
  )
}

export default Badge

import React, { FC } from 'react'
import styled from 'styled-components'

interface iProps {
  children?: string
  className?: string
  center?: boolean
  danger?: boolean
  dark?: boolean
  flat?: boolean
  info?: boolean
  light?: boolean
  primary?: boolean
  secondary?: boolean
  success?: boolean
  warning?: boolean
}

const StyledAlert = styled.div<iProps>`
  border-radius: 0.25rem;
  border: 1px solid transparent;
  margin-bottom: 1rem;
  padding: 0.75rem 1.25rem;
  position: relative;
  font-family: -apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",Arial,sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${({ center }): any =>
    center &&
    `
    text-align: center;
  `}

  ${({ flat }): any =>
    flat &&
    `
    border-radius: 0;
  `}

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
    color: #1f2533;
    background-color: #d8dae0;
    border-color: #c8ccd3;
  `}

  ${({ warning }): any =>
    warning &&
    `
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  `}
`

const Alert: FC<iProps> = props => {
  const { children } = props

  return <StyledAlert {...props}>{children}</StyledAlert>
}

export default Alert

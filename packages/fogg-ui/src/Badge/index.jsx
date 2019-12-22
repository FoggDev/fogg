import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledBadge = styled.div`
  background-color: #0168fa;
  border-radius: 0.25rem;
  color: #fff;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Inter UI", Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  margin-right: 2px;
  padding: 3px 7px 4px;
  text-align: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  vertical-align: baseline;
  white-space: nowrap;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${({ secondary }) => secondary && `
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
  `}

  ${({ success }) => success && `
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  `}

  ${({ danger }) => danger && `
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `}

  ${({ info }) => info && `
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  `}

  ${({ light }) => light && `
    color: #7f7f81;
    background-color: #fdfdfe;
    border-color: #fcfcfd;
  `}

  ${({ dark }) => dark && `
    color: #fff;
    background-color: #343A40;
    border-color: #343A40;
  `}

  ${({ warning }) => warning && `
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  `}
`

const Badge = props => {
  const { children } = props

  return <StyledBadge {...props}>{children}</StyledBadge>
}

Badge.propTypes = {
  children: string,
  className: string
}

export default Badge

import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledAlert = styled.div`
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

  ${({ center }) => center && `
    text-align: center;
  `}

  ${({ flat }) => flat && `
    border-radius: 0;
  `}

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
    color: #1f2533;
    background-color: #d8dae0;
    border-color: #c8ccd3;
  `}

  ${({ warning }) => warning && `
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  `}
`

const Alert = props => {
  const { children } = props

  return <StyledAlert {...props}>{children}</StyledAlert>
}

Alert.propTypes = {
  children: string,
  className: string
}

export default Alert

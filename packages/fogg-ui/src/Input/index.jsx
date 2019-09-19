// Dependencies
import React from 'react'
import { string, bool, func } from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  background-color: #F5F5F5;
  border-radius: 6px;
  border: 1px solid rgba(0, 149, 255, 0);
  color: #333;
  font-size: 15px;
  font-weight: 300;
  height: 38px;
  margin-bottom: 14px;
  padding: 8px;
  transition: all 0.3s ease 0s;
  width: 93%;

  &:hover,
  &:focus {
    border: 1px solid #2EA1F8;
    background-color: white;
    color: black;
    outline: 0;
  }

  &.center {
    color: white;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    display: block;
    font-size: 14px;
    width: auto;

    &:hover,
    &:focus {
      color: white;
    }
  }
}
`

const Input = props => {
  const { noWrapper } = props

  if (noWrapper) {
    return <StyledInput {...props} />
  }

  return <p><StyledInput {...props} /></p>
}

Input.propTypes = {
  autoComplete: string,
  autoFocus: bool,
  className: string,
  disabled: bool,
  id: string,
  name: string,
  noWrapper: bool,
  onBlur: func,
  onChange: func,
  onClick: func,
  placeholder: string,
  type: string,
  value: string
}

export default Input

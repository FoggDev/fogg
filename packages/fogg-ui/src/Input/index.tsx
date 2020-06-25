// Dependencies
import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

interface iProps {
  autoComplete?: string
  autoFocus?: boolean
  className?: string
  disabled?: boolean
  hasError?: boolean
  id?: string
  name?: string
  min?: string
  max?: string
  noWrapper?: boolean
  onBlur?(e: any): any
  onChange?(e: any): any
  onClick?(e: any): any
  pattern?: string
  placeholder?: string
  readOnly?: boolean
  style?: object
  type?: string
  value?: string
}

interface iStyledProps {
  hasError?: boolean
}

const StyledBody = createGlobalStyle`
  textarea,
  input {
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`

const StyledInput = styled.input<iStyledProps>`
  background: white;
  border-radius: 5px;
  border: 1px solid #EEE;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  height: 25px;
  padding: 8px;
  transition: all 0.3s ease 0s;
  width: 93%;
  border-radius: 0;

  ${({ hasError }): any =>
    hasError &&
    `
    border: 1px solid red;
  `}

  ::placeholder {
    color: #EEE;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #EEE;
  }

  ::-ms-input-placeholder {
    color: #EEE;
  }

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
    outline: 0;
  }

  &:disabled {
    background: #EEE;
    color: #CCC;

    ::placeholder {
      color: #CCC;
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: #CCC;
    }

    ::-ms-input-placeholder {
      color: #CCC;
    }
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

const Input: FC<iProps> = props => {
  const { noWrapper } = props

  if (noWrapper) {
    return <StyledInput {...props} />
  }

  return (
    <>
      <StyledBody />
      <div style={{ marginTop: '5px', marginBottom: '20px' }}>
        <StyledInput {...props} />
      </div>
    </>
  )
}

export default Input

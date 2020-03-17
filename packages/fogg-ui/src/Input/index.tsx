// Dependencies
import React, { FC } from 'react'
import styled from 'styled-components'

interface iProps {
  autoComplete?: string
  autoFocus?: boolean
  className?: string
  disabled?: boolean
  id?: string
  name?: string
  noWrapper?: boolean
  onBlur?(): void
  onChange?(): void
  onClick?(): void
  placeholder?: string
  type?: string
  value?: string
  style?: object
}

const StyledInput = styled.input`
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
    <div style={{ marginTop: '5px', marginBottom: '20px' }}>
      <StyledInput {...props} />
    </div>
  )
}

export default Input

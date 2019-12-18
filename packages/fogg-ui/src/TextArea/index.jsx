// Dependencies
import React from 'react'
import { element, string, bool, func, object } from 'prop-types'
import styled from 'styled-components'

const StyledTextarea = styled.textarea`
  background-color: white;
  border-radius: 6px;
  border: 1px solid #EEE;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 14px;
  padding: 8px;
  overflow: hidden;
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

const TextArea = props => {
  const { noWrapper, children } = props

  if (noWrapper) {
    return <StyledTextarea {...props}>{children}</StyledTextarea>
  }

  return <p><StyledTextarea {...props}>{children}</StyledTextarea></p>
}

TextArea.propTypes = {
  autoComplete: string,
  autoFocus: bool,
  className: string,
  children: element,
  disabled: bool,
  id: string,
  name: string,
  noWrapper: bool,
  onBlur: func,
  onChange: func,
  onClick: func,
  placeholder: string,
  type: string,
  value: string,
  style: object
}

export default TextArea

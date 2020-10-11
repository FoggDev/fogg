// Dependencies
import React, { FC, ReactElement } from 'react'
import styled from '@emotion/styled'
import { cx } from 'fogg-utils'

interface iProps {
  autoComplete?: string
  autoFocus?: boolean
  className?: string
  children?: string
  disabled?: boolean
  hasError?: boolean
  id?: string
  name?: string
  noWrapper?: boolean
  onBlur?(e: any): any
  onChange?(e: any): any
  onClick?(e: any): any
  placeholder?: string
  type?: string
  value?: string
  style?: any
}

interface iStyledProps {
  hasError?: boolean
}

const StyledTextarea = styled.textarea<iStyledProps>`
  background-color: white;
  border-radius: 6px;
  border: 1px solid #EEE;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px;
  overflow: hidden;
  transition: all 0.3s ease 0s;
  width: 93%;

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

const TextArea: FC<iProps> = (props): ReactElement => {
  const { noWrapper, children, value, className = '' } = props

  if (noWrapper) {
    return (
      <StyledTextarea {...props} className={cx('TextArea', className)} value={value || children} />
    )
  }

  return (
    <div style={{ marginTop: '5px', marginBottom: '20px' }}>
      <StyledTextarea {...props} className={cx('TextArea', className)} value={value || children} />
    </div>
  )
}

export default TextArea

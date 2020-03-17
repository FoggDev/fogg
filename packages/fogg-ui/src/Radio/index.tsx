import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

interface iProps {
  name?: string
  label?: string
}

const StyledLabel = styled.label`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  display: block;
  margin-bottom: 12px;
  padding-left: 35px;
  position: relative;
  user-select: none;
  width: fit-content;

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ .checkmark {
    background-color: #3bafda;
  }

  &:checked ~ .checkmark:after {
    display: block;
  }
`

const StyledSpan = styled.span.attrs({
  className: 'checkmark'
})`
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eaeaea;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`

const Radio: FC<iProps> = (props): ReactElement => {
  const { label } = props

  return (
    <StyledLabel>
      <>
        {label}
        <StyledInput {...props} type="radio" />
        <StyledSpan />
      </>
    </StyledLabel>
  )
}

export default Radio

import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

interface iProps {
  label?: string
  checked?: boolean
  color?: string
  type?: string
  readOnly?: boolean
  onChange?(e: any): any
  onClick?(e: any): any
}

const StyledDiv = styled.div`
  display: inline-block;
  line-height: 34px;
`

const StyledText = styled.span`
  padding-left: 15px;
  font-size: 15px;
  color: #333;
`

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`

const StyledInput = styled.input`
  opacity: 0;
  width: 0px;
  height: 0px;

  &:checked + .slider {
    ${({ color }): any =>
      color &&
      `
      background-color: ${color};
    `}
  }

  &:focus + .slider {
    ${({ color }): any =>
      color &&
      `
    box-shadow: 0 0 1px ${color};
  `}
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

const StyledSquareSpan = styled.span.attrs({
  className: 'slider'
})`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`

const StyledRoundSpan = styled(StyledSquareSpan)`
  border-radius: 34px;

  &:before {
    border-radius: 50%;
  }
`

const Toggle: FC<iProps> = ({
  label = '',
  color = '#2196f3',
  type,
  readOnly,
  onChange,
  checked = false
}): ReactElement => {
  return (
    <>
      <StyledDiv className="Toggle">
        <StyledLabel>
          <StyledInput
            type="checkbox"
            color={color}
            onChange={onChange}
            checked={checked}
            readOnly={readOnly}
          />
          {type === 'round' ? <StyledRoundSpan /> : <StyledSquareSpan />}
        </StyledLabel>

        <StyledText>{label}</StyledText>
      </StyledDiv>
    </>
  )
}

export default Toggle

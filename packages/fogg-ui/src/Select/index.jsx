import React, { useState } from 'react'
import { array, string, func, element, bool, object } from 'prop-types'
import styled from 'styled-components'
import Icon from '../Icon'
import colors from '../colors'

const StyledSelect = styled.div`
  width: fit-content;
  margin-bottom: 200px;
  position: relative;

  a {
    background: #5A6268;
    ${({ type }) => type && `
      background: ${colors[type].background};
    `}
    display: flex;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    width: fit-content;

    div {
      i {
        margin-left: 20px;
      }
    }
  }

  ul {
    -ms-overflow-style: none;
    border-radius: 3px;
    border: 1px solid #CCC;
    list-style-type: none;
    margin: 0;
    max-height: 150px;
    overflow: auto;
    padding: 0;
    position: absolute;
    scrollbar-width: none;
    top: 42px;
    width: 130%;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      font-size: 14px;
      padding: 10px;
      padding-left: 20px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &:hover {
        background: #EEE;

        ${({ type }) => type && `
          background: ${colors[type].hover};
          color: ${colors[type].font};
        `}
      }
    }
  }
`

const Select = props => {
  const { label = '', options = null, name = '' } = props
  const [open, setOpen] = useState(false)
  const [selected, setValue] = useState({ option: '', value: '' })

  const onClick = () => {
    setOpen(!open)
  }

  const selectOption = (option, value) => {
    setValue({
      option,
      value
    })

    setOpen(!open)
  }

  if (!options) {
    return null
  }

  return (
    <p>
      <StyledSelect {...props}>
        <a name="dropdown" onClick={onClick}>
          <div>{selected.option || label}</div>
          <div><Icon type="fas fa-caret-down" /></div>
        </a>

        <input type="hidden" name={`${name}:value`} value={selected.value} />
        <input type="hidden" name={`${name}:option`} value={selected.option} />

        <ul style={{ display: open ? 'block' : 'none' }}>
          {options.map(({ option, value }) => (
            <li onClick={() => selectOption(option, value)}>
              {option}
            </li>
          ))}
        </ul>
      </StyledSelect>
    </p>
  )
}

Select.propTypes = {
  className: string,
  children: element,
  id: string,
  name: string,
  noWrapper: bool,
  label: string,
  onChange: func,
  options: array,
  style: object,
  type: string
}

export default Select

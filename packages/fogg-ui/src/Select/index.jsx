import React, { useState } from 'react'
import { array, string, func, element, bool, object } from 'prop-types'
import styled from 'styled-components'
import Icon from '../Icon'
import colors from '../colors'

const StyledSelect = styled.div`
  width: fit-content;
  position: relative;

  a {
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
    background: white;
    -ms-overflow-style: none;
    border-radius: 3px;
    border: 1px solid #666;
    list-style-type: none;
    margin: 0;
    max-height: 150px;
    overflow: auto;
    padding: 0;
    position: absolute;
    scrollbar-width: none;
    top: 45px;
    width: 130%;
    z-index: 1;

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
      border-bottom: 1px solid #666;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        ${({ type }) => type && `
          background: ${colors[type].hover};
          color: ${colors[type].font};
        `}
      }
    }
  }
`

const Select = props => {
  const { label = '', options = null, onClick, type = 'select' } = props
  const [open, setOpen] = useState(false)
  const [selected, setValue] = useState({ option: '', value: '' })

  const handleOpenOnClick = () => {
    setOpen(!open)
  }

  const selectOption = (option, value) => {
    setValue({
      option,
      value
    })

    onClick({ option, value })

    setOpen(!open)
  }

  if (!options) {
    return null
  }

  return (
    <p>
      <StyledSelect {...props} type={type}>
        <a name="dropdown" onClick={handleOpenOnClick}>
          <div>{selected.option || label}</div>
          <div><Icon type="fas fa-caret-down" /></div>
        </a>

        <ul style={{ display: open ? 'block' : 'none' }}>
          {options.map(({ option, value }) => (
            <li
              onClick={() => selectOption(option, value)}
              style={{
                background: `${selected.value === value ? colors[type].hover : ''}`,
                color: `${selected.value === value ? colors[type].font : ''}`
              }}
            >
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
  onClick: func,
  options: array,
  style: object,
  type: string
}

export default Select

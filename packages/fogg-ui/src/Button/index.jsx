import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const colors = {
  color: '#FFF',
  primary: {
    background: '#00AEEF',
    hover: '#43C8F5'
  },
  success: {
    background: '#54D48A',
    hover: '#7ADCA1'
  },
  danger: {
    background: '#DA4453',
    hover: '#ED5565'
  },
  warning: {
    background: '#F6BB42',
    hover: '#FFCE54'
  },
  light: {
    color: '#7987A1',
    background: '#E5E9F2',
    hover: '#B4BDCE'
  },
  dark: {
    background: '#343A40',
    hover: '#22272A'
  },
  disabled: {
    color: '#F5F7FA',
    background: '#CCD1DC',
    outline: '#D2D7E3',
    hover: '#CCD1DC'
  }
}

const StyledButton = styled.button`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  background-color: transparent;
  border-radius: .25rem;
  border: 1px solid transparent;
  color: ${colors.color};
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",Arial,sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  outline: none;
  padding: .375rem .75rem;
  text-align: center;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  user-select: none;
  vertical-align: middle;

  ${({ primary, outline }) => primary && `
    background-color: ${outline ? 'transparent ' : colors.primary.background};
    border-color: ${colors.primary.background};
    color: ${outline ? colors.primary.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${colors.primary.hover};
      border-color: ${colors.primary.hover};
    }
  `}

  ${({ success, outline }) => success && `
    background-color: ${outline ? 'transparent ' : colors.success.background};
    border-color: ${colors.success.background};
    color: ${outline ? colors.success.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${colors.success.hover};
      border-color: ${colors.success.background};
    }
  `}

  ${({ danger, outline }) => danger && `
    background-color: ${outline ? 'transparent ' : colors.danger.background};
    border-color: ${colors.danger.background};
    color: ${outline ? colors.danger.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${colors.danger.hover};
      border-color: ${colors.danger.hover};
    }
  `}

  ${({ warning, outline }) => warning && `
    background-color: ${outline ? 'transparent ' : colors.warning.background};
    border-color: ${colors.warning.background};
    color: ${outline ? colors.warning.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${colors.warning.hover};
      border-color: ${colors.warning.hover};
    }
  `}

  ${({ light, outline }) => light && `
    background-color: ${outline ? 'transparent' : colors.light.background};
    border-color: ${colors.light.background};
    color: ${colors.light.color};

    &:hover {
      color: ${colors.color}
      background-color: ${colors.light.hover};
      border-color: ${colors.light.hover};
    }
  `}

  ${({ dark, outline }) => dark && `
    background-color: ${outline ? 'transparent ' : colors.dark.background};
    border-color: ${colors.dark.background};
    color: ${outline ? colors.dark.background : colors.dark.color};

    &:hover {
      color: ${colors.color}
      background-color: ${colors.dark.hover};
      border-color: ${colors.dark.hover};
    }
  `}

  ${({ disabled, outline }) => disabled && `
    color: ${colors.disabled.color};
    background-color: ${outline ? colors.disabled.outline : colors.disabled.background};
    border-color: ${colors.disabled.background};
    cursor: not-allowed;

    &:hover {
      background-color: ${colors.disabled.hover};
      border-color: ${colors.disabled.hover};
    }
  `}
`

const Button = props => {
  const { children } = props

  return <StyledButton {...props}>{children}</StyledButton>
}

Button.propTypes = {
  children: string,
  className: string
}

export default Button

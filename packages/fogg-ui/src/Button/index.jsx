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

  ${({ block }) => block && `
    display: block;
    margin-top: .5rem;
    width: 100%;
  `}

  ${({ small }) => small && `
    padding: 0px 1rem;
    font-size: 0.75rem;
    line-height: 1.875rem;
    border-radius: 0.1875rem;
  `}

  ${({ large }) => large && `
    padding: 0px 1.75rem;
    font-size: 1.125rem;
    line-height: 3.125rem;
    border-radius: 0.1875rem;
  `}

  ${({ xLarge }) => xLarge && `
    padding: 0px 2.125rem;
    font-size: 1.375rem;
    line-height: 4.375rem;
    border-radius: 0.1875rem;
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

  ${({ primary, outline, disabled }) => primary && `
    background-color: ${outline ? 'transparent ' : colors.primary.background};
    border-color: ${colors.primary.background};
    color: ${outline ? colors.primary.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${disabled ? colors.primary.background : colors.primary.hover};
      border-color: ${disabled ? colors.primary.background : colors.primary.hover};
    }
  `}

  ${({ success, outline, disabled }) => success && `
    background-color: ${outline ? 'transparent ' : colors.success.background};
    border-color: ${colors.success.background};
    color: ${outline ? colors.success.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${disabled ? colors.success.background : colors.success.hover};
      border-color: ${colors.success.background};
    }
  `}

  ${({ danger, outline, disabled }) => danger && `
    background-color: ${outline ? 'transparent ' : colors.danger.background};
    border-color: ${colors.danger.background};
    color: ${outline ? colors.danger.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${disabled ? colors.danger.background : colors.danger.hover};
      border-color: ${colors.danger.hover};
    }
  `}

  ${({ warning, outline, disabled }) => warning && `
    background-color: ${outline ? 'transparent ' : colors.warning.background};
    border-color: ${colors.warning.background};
    color: ${outline ? colors.warning.background : colors.color};

    &:hover {
      color: ${colors.color}
      background-color: ${disabled ? colors.warning.background : colors.warning.hover};
      border-color: ${colors.warning.hover};
    }
  `}

  ${({ light, outline, disabled }) => light && `
    background-color: ${outline ? 'transparent' : colors.light.background};
    border-color: ${colors.light.background};
    color: ${colors.light.color};

    &:hover {
      color: ${disabled ? colors.light.color : colors.color}
      background-color: ${disabled ? colors.light.background : colors.light.hover};
      border-color: ${disabled ? colors.light.background : colors.light.hover};
    }
  `}

  ${({ dark, outline, disabled }) => dark && `
    background-color: ${outline ? 'transparent ' : colors.dark.background};
    border-color: ${colors.dark.background};
    color: ${outline ? colors.dark.background : colors.dark.color};

    &:hover {
      color: ${colors.color}
      background-color: ${disabled ? colors.dark.background : colors.dark.hover};
      border-color: ${colors.dark.hover};
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

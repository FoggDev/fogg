import styled from 'styled-components'
import colors from '../colors'

interface iStyledProps {
  block?: boolean
  disabled?: boolean
  large?: boolean
  name?: string
  onClick?(e: any): any
  small?: boolean
  xLarge?: boolean
}

const StyledBaseButton = styled.span<iStyledProps>`
  a {
    text-decoration: none;
    margin-right: 5px;
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

    ${({ disabled }): any =>
      disabled &&
      `
      opacity: 0.8;
      cursor: not-allowed;
      text-decoration: none;
      pointer-events: none;
    `}

    ${({ block }): any =>
      block &&
      `
      display: block;
      margin-top: .5rem;
      width: 100%;
    `}

    ${({ small }): any =>
      small &&
      `
      padding: 0px 1rem;
      font-size: 0.75rem;
      line-height: 1.875rem;
      border-radius: 0.1875rem;
    `}

    ${({ large }): any =>
      large &&
      `
      padding: 0px 1.75rem;
      font-size: 1.125rem;
      line-height: 3.125rem;
      border-radius: 0.1875rem;
    `}

    ${({ xLarge }): any =>
      xLarge &&
      `
      padding: 0px 2.125rem;
      font-size: 1.375rem;
      line-height: 4.375rem;
      border-radius: 0.1875rem;
    `}
  }
`

export default StyledBaseButton

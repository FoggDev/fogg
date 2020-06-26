// Dependencies
import React, { FC } from 'react'
import styled from 'styled-components'

// Components
import Icon from '../Icon'

import colors from '../colors'

interface iProps {
  className?: string
  disabled?: boolean
  hasError?: boolean
  id?: string
  name?: string
  noWrapper?: boolean
  onBlur?(e: any): any
  onChange?(e: any): any
  onClick?(e: any): any
  style?: object
  label?: string
  theme?: string
  selectedFile?: any
  maxFileSize?: number
}

const StyledWrapper = styled.div`
  height: 40px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    .button {
      ${({ theme }): any => `
        background-color: ${colors[theme].hover};
      `}
    }
  }
`
const StyledInput = styled.input`
  font-size: 200px;
  cursor: pointer;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
`

const StyledButton = styled.button`
  display: inline-block;
  cursor: pointer;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 1;
  border-radius: 5px;

  ${({ theme }): any => `
    border: 1px solid ${colors[theme].background};
    background-color: ${colors[theme].background};
    color: white;
  `}
`

const StyledInformation = styled.div`
  color: #999;
  font-size: 12px;
`

const bytesToSize = (bytes: any, maxFileSize: number): any => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  let allowed = true

  if (bytes > maxFileSize) {
    allowed = false
  }

  const n = parseInt(bytes)

  // @ts-ignore
  const i = parseInt(Math.floor(Math.log(n) / Math.log(1024)), 10)

  if (i === 0) {
    return `${bytes} ${sizes[i]}`
  }

  return {
    size: `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`,
    allowed
  }
}

const File: FC<iProps> = props => {
  const {
    label = 'Choose a file',
    name = 'file',
    theme = 'primary',
    selectedFile,
    maxFileSize = 10000000
  } = props
  const validThemes = ['primary', 'default', 'success', 'danger', 'warning', 'light', 'dark']
  const currentTheme = validThemes.includes(theme) ? theme : 'primary'
  const file = bytesToSize(selectedFile.size, maxFileSize)

  return (
    <>
      <div
        style={{ display: 'flex', alignItems: 'center', marginTop: '5px', marginBottom: '20px' }}
      >
        <StyledWrapper theme={currentTheme}>
          <StyledButton className="button" theme={currentTheme}>
            <Icon type="fas fa-upload" /> {label}
          </StyledButton>
          <StyledInput type="file" name={name} id="file" {...props} />
        </StyledWrapper>

        {selectedFile.name && (
          <StyledInformation>
            {selectedFile.name} (
            <span style={{ color: file.allowed ? colors.success.background : 'red' }}>
              {file.size}
            </span>
            )
          </StyledInformation>
        )}
      </div>
    </>
  )
}

export default File

// Dependencies
import React, { FC, Fragment } from 'react'
import styled from 'styled-components'
import { getFileInfo, bytesToSize } from 'fogg-utils'

// Components
import Icon from '../Icon'

// Colors
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
  style?: any
  label?: string
  theme?: string
  selectedFile?: any
  maxFileSize?: number
  allowedExtensions?: string[]
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
  margin-top: 9px;
`

const StyledSpan = styled.span`
  color: #ccc;
  font-size: 10px;
  margin-top: 2px;
`

const StyledDiv = styled.div`
  margin-top: -20px;
`

const StyledGoodExt = styled.span`
  color: ${colors.success.background};
`

const StyledInvalidExt = styled.span`
  color: red;
`

const File: FC<iProps> = props => {
  const {
    label = 'Choose a file',
    name = 'file',
    theme = 'primary',
    selectedFile,
    maxFileSize = 12000000,
    allowedExtensions = ['all']
  } = props
  const validThemes = ['primary', 'default', 'success', 'danger', 'warning', 'light', 'dark']
  const currentTheme = validThemes.includes(theme) ? theme : 'primary'
  const file = bytesToSize(selectedFile.size, maxFileSize)
  const maxSize = bytesToSize(maxFileSize, maxFileSize, true)
  const { fileName, extension } = getFileInfo(selectedFile.name)
  const isAllowedExt = allowedExtensions.includes(extension) || allowedExtensions.includes('all')

  return (
    <>
      <div
        className="File"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          marginTop: '5px',
          marginBottom: '20px'
        }}
      >
        <div>
          <StyledWrapper theme={currentTheme} title={`Max File Size is ${maxSize.size}`}>
            <StyledButton className="button" theme={currentTheme}>
              <Icon type="fas fa-upload" /> {label}
            </StyledButton>
            <StyledInput type="file" name={name} id="file" {...props} />
          </StyledWrapper>
        </div>

        {selectedFile.name && (
          <StyledInformation>
            {fileName}.
            {isAllowedExt ? (
              <StyledGoodExt>{extension}</StyledGoodExt>
            ) : (
              <StyledInvalidExt>{extension}</StyledInvalidExt>
            )}{' '}
            (
            <span style={{ color: file.allowed ? colors.success.background : 'red' }}>
              {file.size}
            </span>
            )
          </StyledInformation>
        )}
      </div>

      <StyledDiv>
        <StyledSpan>
          <strong>Max File Size is:</strong> {maxSize.size}
        </StyledSpan>
        <br />
        <StyledSpan>
          <strong>Allowed extensions:</strong>{' '}
          {allowedExtensions.map((ext: string, index: number) => (
            <Fragment key={`file-${index}`}>
              {ext === extension ? (
                isAllowedExt ? (
                  <StyledGoodExt>{ext}</StyledGoodExt>
                ) : (
                  <StyledInvalidExt>{ext}</StyledInvalidExt>
                )
              ) : (
                <>{ext}</>
              )}
              {index < allowedExtensions.length - 1 ? ', ' : ''}
            </Fragment>
          ))}
        </StyledSpan>
      </StyledDiv>
    </>
  )
}

export default File

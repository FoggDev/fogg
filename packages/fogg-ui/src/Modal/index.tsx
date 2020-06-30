import React, { FC, ReactElement } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const StyledBody = createGlobalStyle`
  html,
  body {
    margin: 0;
    height: 100%;
    overflow: hidden
  }

  :root {
    scrollbar-color: #222 #fff !important;
  }

  ::-webkit-scrollbar { width: 8px; height: 3px; }
  ::-webkit-scrollbar-track-piece { background-color: #fff; }
  ::-webkit-scrollbar-thumb { height: 20px; background-color: #222; border-radius: 10px; }

  input {
      border-radius: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
  }
`

const StyledModal = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
`

interface iContainerProps {
  height?: string
  margin?: string
  maxWidth?: string
}

const StyledContainer = styled.div<iContainerProps>`
  position: relative;
  background-color: white;
  padding: 12px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.62);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.62);
  border: 1px solid #333;

  ${({ maxWidth, height, margin }): any => `
    max-width: ${maxWidth};
    height: ${height};
    margin: ${margin};
  `}

  @media (max-width: 768px) {
    height: 100%;
    margin: 0;
    border: none;
    max-width: 100%;
  }
`

const StyledClose = styled.span`
  cursor: pointer;
  margin-top: -6px;
  position: absolute;
  right: 10px;

  @media (max-width: 768px) {
    margin-top: 0;
    right: 15px;
  }
`

const StyledImg = styled.img`
  width: 12px;

  @media (max-width: 768px) {
    width: 16px;
  }
`

const StyledContent = styled.div`
  max-width: 100%;
  max-height: 500px;
  margin: 0 auto;
  margin-top: 9px;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: left;

  .label {
    margin: 0;
    padding: 0;
    margin-bottom: 15px;
    font-size: 23px;
    font-weight: 500;
    word-wrap: break-word;
  }

  textarea {
    resize: none;
  }
`

// Interfaces
interface iProps {
  isOpen: boolean
  onOpen?(): any
  onClose?(): any
  label?: string
  children: ReactElement | ReactElement[]
  options?: {
    position?: 'top' | 'center'
    height?: string
    width?: string
  }
}

const Modal: FC<iProps> = ({ children, isOpen, onOpen, onClose, label, options = {} }) => {
  let width = '70%'
  let height = ''
  const margin = `${options.position === 'top' ? '2%' : '14%'} auto`

  if (!isOpen) {
    return null
  }

  if (onOpen) {
    onOpen()
  }

  if (options.width) {
    width = options.width
  }

  if (options.height) {
    height = options.height
  }

  return (
    <>
      <StyledBody />

      <StyledModal className="Modal">
        <StyledContainer maxWidth={width} height={height} margin={margin}>
          <StyledClose onClick={onClose}>
            <StyledImg alt="Close" src={require(`./icons/close.svg`)} />
          </StyledClose>

          <StyledContent style={{ maxHeight: height !== '100%' ? height : '500px' }}>
            {label && <h2 className="label">{label}</h2>}
            {children}
          </StyledContent>
        </StyledContainer>
      </StyledModal>
    </>
  )
}

export default Modal

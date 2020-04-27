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
`

const StyledModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
`

const StyledContainer = styled.div`
  position: relative;
  background-color: white;
  padding: 12px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.62);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.62);
  border: 1px solid #333;
`

const StyledClose = styled.span`
  cursor: pointer;
  margin-top: -10px;
  position: absolute;
  right: 6px;
`

const StyledContent = styled.div`
  max-width: 100%;
  max-height: 500px;
  margin: 0 auto;
  margin-top: 9px;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: left;

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
  let height = '100%'
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

      <StyledModal>
        <StyledContainer style={{ width, height, margin }}>
          <StyledClose onClick={onClose}>
            <img style={{ width: '10px' }} alt="Close" src={require(`./icons/close.svg`)} />
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

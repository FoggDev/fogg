import React, { FC } from 'react'
import styled from 'styled-components'

// Interfaces
interface iProps {
  activateTab(): void
  activeTab: number
  content?: string
  index: number
  title?: string
}

interface iStyledProps {
  open?: boolean
}

const StyledPanel = styled.div<iStyledProps>`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: normal;
  background-color: #fff;
  border-top: 1px solid rgba(72, 94, 144, 0.16);
  border-left: 1px solid rgba(72, 94, 144, 0.16);
  border-right: 1px solid rgba(72, 94, 144, 0.16);
  position: relative;

  &:last-child {
    border-bottom: 1px solid rgba(72, 94, 144, 0.16);
  }
`
const StyledPanelHeader = styled.div<iStyledProps>`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: #1b2e4b;
  margin-bottom: 0;
  background-color: #f5f6fa;
  padding: 12px 15px 12px 15px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${({ open }): any =>
    open &&
    `
    background-color: transparent;
    color: #0086d7;
  `}
`

const StyledPanelHeaderSpan = styled.span`
  display: inline;
  white-space: pre-wrap;
  margin-left: 10px;
`

const StyledPanelWrapper = styled.div<iStyledProps>`
  height: 0;
  overflow: hidden;
  transition: all 0.25s ease-in;

  ${({ open }): any =>
    open &&
    `
    height: 120px;
  `}
`

const StyledPanelContent = styled.div`
  font-size: 0.85rem;
  border-top-width: 0;
  padding: 10px 20px 20px 35px;
  position: relative;
`

const Panel: FC<iProps> = ({ title, content, activeTab, index, activateTab }) => {
  const isOpen = activeTab === index

  return (
    <StyledPanel open={isOpen}>
      <StyledPanelHeader onClick={activateTab}>
        <span>
          <img style={{ width: '10px' }} alt="Spinner" src={require(`./icons/${isOpen ? 'minus' : 'plus'}.svg`)} />
        </span>
        <StyledPanelHeaderSpan>{title}</StyledPanelHeaderSpan>
      </StyledPanelHeader>

      <StyledPanelWrapper open={isOpen}>
        <StyledPanelContent>{content}</StyledPanelContent>
      </StyledPanelWrapper>
    </StyledPanel>
  )
}

export default Panel

import React from 'react'
import { string, number, func } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const StyledPanel = styled.div`
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
const StyledPanelHeader = styled.div`
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

  ${({ open }) => open && `
    background-color: transparent;
    color: #0086d7;
  `}
`

const StyledPanelHeaderSpan = styled.span`
  display: inline;
  white-space: pre-wrap;
  margin-left: 10px;
`

const StyledPanelWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: all .25s ease-in;

  ${({ open }) => open && `
    height: 120px;
  `}
`

const StyledPanelContent = styled.div`
  font-size: 0.85rem;
  border-top-width: 0;
  padding: 0 20px 20px 35px;
  position: relative;
`

const Panel = props => {
  const { title, content, activeTab, index, activateTab } = props
  const isOpen = activeTab === index

  return (
    <StyledPanel>
      <StyledPanelHeader onClick={activateTab} open={isOpen}>
        <span>
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
        </span>
        <StyledPanelHeaderSpan>
          {title}
        </StyledPanelHeaderSpan>
      </StyledPanelHeader>

      <StyledPanelWrapper open={isOpen}>
        <StyledPanelContent>
          {content}
        </StyledPanelContent>
      </StyledPanelWrapper>
    </StyledPanel>
  )
}

Panel.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  activeTab: number.isRequired,
  index: number.isRequired,
  activateTab: func.isRequired
}

export default Panel

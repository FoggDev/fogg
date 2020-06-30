import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Panel from './Panel'

// Interfaces
type Panel = {
  title: string
  content: string
}

interface iProps {
  panels: Panel[]
}

const StyledAccordion = styled.div`
  width: 100%;
`

const Accordion: FC<iProps> = ({ panels }) => {
  // States
  const [activeTab, setActiveTab] = useState<number>(0)

  // Methods
  const activateTab = (index: number): void => {
    setActiveTab(activeTab === index ? -1 : index)
  }

  return (
    <StyledAccordion role="tablist" className="Accordion">
      {panels.map((panel, key) => (
        <Panel
          key={`panel-${key}`}
          {...panel}
          activeTab={activeTab}
          index={key}
          activateTab={(): void => activateTab(key)}
        />
      ))}
    </StyledAccordion>
  )
}

export default Accordion

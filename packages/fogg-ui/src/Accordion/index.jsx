import React, { Component } from 'react'
import { array } from 'prop-types'
import styled from 'styled-components'
import Panel from './Panel'

const StyledAccordion = styled.div`
  width: 100%;
  max-width: 470px;
`

class Accordion extends Component {
  state = {
    activeTab: 0
  }

  activateTab = index => {
    this.setState(prev => ({
      activeTab: prev.activeTab === index ? -1 : index
    }))
  }

  render() {
    const { panels } = this.props
    const { activeTab } = this.state

    return (
      <StyledAccordion role="tablist">
        {panels.map((panel, key) => (
          <Panel
            key={`panel-${key}`}
            activeTab={activeTab}
            index={key}
            activateTab={() => this.activateTab(key)}
            {...panel}
          />
        ))}
      </StyledAccordion>
    )
  }
}

Accordion.propTypes = {
  panels: array.isRequired
}

export default Accordion

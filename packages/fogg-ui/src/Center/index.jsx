import React from 'react'
import { element } from 'prop-types'
import styled from 'styled-components'

const StyledP = styled.p`
  text-align: center;
`

const Center = ({ children }) => (
  <StyledP>
    {children}
  </StyledP>
)

Center.propTypes = {
  children: element
}

export default Center

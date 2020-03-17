import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface iProps {
  children: ReactNode
}

const StyledP = styled.p`
  text-align: center;
`

const Center: FC<iProps> = ({ children }) => <StyledP>{children}</StyledP>

export default Center

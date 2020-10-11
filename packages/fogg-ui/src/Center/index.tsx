import React, { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

interface iProps {
  children: ReactNode
}

const StyledP = styled.p`
  text-align: center;
`

const Center: FC<iProps> = ({ children }) => <StyledP className="Center">{children}</StyledP>

export default Center

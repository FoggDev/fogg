import React, { FC } from 'react'
import styled from 'styled-components'

interface iProps {
  modelName: string
  title: string
  status: string
  onClick: any
}

const StyledBlock = styled.div`
  display: flex;
  border: 1px solid #ccc;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid $frenchGray;
  padding: 20px 10px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.05);
  width: 95%;

  &:hover {
    border: 1px solid #4bc0f3;
  }
`

const StyledModelName = styled.div`
  color: #777;
`

const StyledEntryTitle = styled.div`
  font-weight: bold;
`

const StyledPublished = styled.div`
  color: #0eb87f;
`

const StyledDraft = styled.div`
  color: #ffaa22;
`

const Block: FC<iProps> = props => {
  const { modelName, title, status } = props

  return (
    <StyledBlock className="Block" {...props}>
      <div>
        <StyledModelName>{modelName}</StyledModelName>
        <StyledEntryTitle>{title}</StyledEntryTitle>
      </div>

      {status === 'Draft' && <StyledDraft>{status}</StyledDraft>}
      {status === 'Published' && <StyledPublished>{status}</StyledPublished>}
    </StyledBlock>
  )
}

export default Block

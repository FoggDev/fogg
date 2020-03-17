// Dependencies
import React, { FC, ReactElement } from 'react'

interface iProps {
  children: ReactElement
  isTrue: boolean
}

const RenderIf: FC<iProps> = ({ children, isTrue }): ReactElement => {
  if (isTrue) {
    return <>{children}</>
  }

  return <div />
}

export default RenderIf

// Dependencies
import React, { FC, ReactElement } from 'react'

interface iProps {
  left: number
  total: number
}

interface Style {
  color?: string
}

const TextCounter: FC<iProps> = (props): ReactElement => {
  const { left, total } = props
  const percentage = (left / total) * 100
  const style: Style = {}

  if (percentage > 90) {
    style.color = 'red'
  } else if (percentage <= 2) {
    style.color = 'orange'
  }

  return (
    <span className="TextCounter" style={style}>
      {left}/{total}
    </span>
  )
}

export default TextCounter

// Dependencies
import React, { FC } from 'react'

interface iProps {
  className?: string
  type: string
  title?: string
  onClick?(): void
}

const Icon: FC<iProps> = props => {
  const { type, className = '' } = props
  const iconProps = { ...props }

  delete iconProps.type
  delete iconProps.className
  let style = {}

  if (props.onClick) {
    style = {
      cursor: 'pointer'
    }
  }

  return <i style={style} className={`${type} ${className}`} {...iconProps} />
}

export default Icon

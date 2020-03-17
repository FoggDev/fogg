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

  return <i className={`${type} ${className}`} {...iconProps} />
}

export default Icon

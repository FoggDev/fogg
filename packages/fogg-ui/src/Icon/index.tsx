// Dependencies
import React, { FC, ReactElement } from 'react'

interface iProps {
  children?: ReactElement | string
  className?: string
  type: string
  title?: string
  onClick?(): void
}

const Icon: FC<iProps> = (props): ReactElement => {
  const { type, className = '', children } = props
  const iconProps = { ...props }

  delete iconProps.type
  delete iconProps.className
  let style = {}

  if (props.onClick) {
    style = {
      cursor: 'pointer'
    }
  }

  if (children) {
    return (
      <i style={style} className={className} {...iconProps}>
        {children}
      </i>
    )
  }

  return <i style={style} className={`${type} ${className}`} {...iconProps} />
}

export default Icon

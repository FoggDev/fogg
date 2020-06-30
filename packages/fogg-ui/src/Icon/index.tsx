// Dependencies
import React, { FC, ReactElement } from 'react'
import { cx } from 'fogg-utils'

interface iProps {
  children?: ReactElement | string
  className?: string
  type?: string
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
      <i style={style} {...iconProps} className={cx('Icon', className)}>
        {children}
      </i>
    )
  }

  return <i style={style} {...iconProps} className={cx('Icon', `${type} ${className}`)} />
}

export default Icon

// Dependencies
import React, { FC, ReactElement } from 'react'

interface iProps {
  src: string
}

const Retina: FC<iProps> = ({ src }): ReactElement => {
  const parts = src.split('/')

  if (parts) {
    const filename: any = parts.pop()
    const image2x = `${parts.join('/')}/${filename.replace('.', '_2x.')}`

    return <img alt={filename} src={src} srcSet={`${src} 1x, ${image2x} 2x`} />
  }

  return <div />
}

export default Retina

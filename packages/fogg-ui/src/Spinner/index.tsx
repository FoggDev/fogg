import React, { FC, ReactElement } from 'react'

interface iProps {
  spinner: string
  style: object
}

const Spinner: FC<iProps> = ({ spinner = 'puff', style = {} }): ReactElement => {
  return <img style={style} alt="Spinner" src={require(`./loaders/${spinner}.svg`)} />
}

export default Spinner

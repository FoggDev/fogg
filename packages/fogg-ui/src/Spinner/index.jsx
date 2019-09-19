import React from 'react'
import { string, object } from 'prop-types'

const Spinner = ({ spinner = 'puff', style = {} }) => {
  return (
    <img
      style={style}
      alt="Spinner"
      src={require(`./loaders/${spinner}.svg`)}
    />
  )
}

Spinner.propTypes = {
  spinner: string,
  style: object
}

export default Spinner

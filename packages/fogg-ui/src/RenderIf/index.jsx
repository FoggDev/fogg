// Dependencies
import React from 'react'
import { bool, element } from 'prop-types'

const RenderIf = ({ children, isTrue }) => {
  if (isTrue) {
    return (
      <>
        {children}
      </>
    )
  }

  return null
}

RenderIf.propTypes = {
  children: element.isRequired,
  isTrue: bool.isRequired
}

export default RenderIf

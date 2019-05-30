import React from 'react'
import { element, string } from 'prop-types'

import cx from 'classnames'

import styles from './Button.scss'

const Button = props => {
  const { children, className = 'primary' } = props

  return (
    <button className={cx(styles.foggButton, styles[className])}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: element,
  className: string
}

export default Button

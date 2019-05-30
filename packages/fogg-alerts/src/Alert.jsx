import React from 'react'
import { element, string } from 'prop-types'

import cx from 'classnames'

import styles from './Alert.scss'

const Alert = props => {
  const { children, className = 'primary' } = props

  return (
    <div className={cx(styles.foggAlert, styles[className])} role="alert">
      {children}
    </div>
  )
}

Alert.propTypes = {
  children: element,
  className: string
}

export default Alert

// Dependencies
import React from 'react'

// Components
import Alert from '../src/Alert'

import styles from './App.scss'

const App = () => (
  <div className={styles.App}>
    <div>
      <Alert>This is my primary alert</Alert>
      <Alert className="secondary">This is my secondary alert</Alert>
      <Alert className="success">This is my success alert</Alert>
      <Alert className="danger">This is my danger alert</Alert>
      <Alert className="warning">This is my warning alert</Alert>
      <Alert className="info">This is my info alert</Alert>
      <Alert className="light">This is my light alert</Alert>
      <Alert className="dark">This is my dark alert</Alert>
    </div>
  </div>
)

export default App

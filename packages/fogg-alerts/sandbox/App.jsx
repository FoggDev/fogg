// Dependencies
import React from 'react'

// Components
import Alert from '../src/Alert'

import styles from './App.scss'

const App = () => (
  <div className={styles.App}>
    <div>
      <Alert primary>This is my primary alert</Alert>
      <Alert secondary>This is my secondary alert</Alert>
      <Alert success>This is my success alert</Alert>
      <Alert danger>This is my danger alert</Alert>
      <Alert warning>This is my warning alert</Alert>
      <Alert info>This is my info alert</Alert>
      <Alert light>This is my light alert</Alert>
      <Alert dark>This is my dark alert</Alert>
    </div>
  </div>
)

export default App

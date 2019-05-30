// Dependencies
import React from 'react'

// Components
import Button from '../src/Button'

import styles from './App.scss'

const App = () => (
  <div className={styles.App}>
    <div>
      <Button>Primary</Button>
      <Button className="success">Success</Button>
      <Button className="danger">Danger</Button>
      <Button className="warning">Warning</Button>
      <Button className="dark">Dark</Button>
      <Button className="light">Light</Button>
    </div>
  </div>
)

export default App

// Dependencies
import React from 'react'

// Components
import Alert from '../src/Alert'
import Accordion from '../src/Accordion'
import Button from '../src/Button'

import styles from './App.scss'

const panels = [
  {
    title: 'What\'s the difference between 32-bit and 64-bit versions of Windows?',
    content: 'The terms 32-bit and 64-bit refer to the way a computer\'s processor (also called a CPU) handles information. The 64-bit version of Windows handles large amounts of random access memory (RAM) more effectively than a 32-bit system. Not all devices can run the 64-bit versions of Windows.',
  },
  {
    title: 'My Windows 7 product key won\'t verify. What\'s the problem?',
    content: 'The most common issue is the use of a product key for a product not currently supported by the site such as an Upgrade key, an MSDN key, product keys for pre-installed media or an Enterprise edition key. For access to MSDN products or Enterprise edition visit the MSDN Portal or the Volume Licensing Service Center. Upgrades and pre-installed media are not currently supported by the tools on the site.',
  },
  {
    title: 'I don\'t see the Windows 8.1 or Windows 10 edition I\'m looking for. Where else should I check?',
    content: 'If you are looking for MSDN products or Enterprise editions visit the MSDN Portal or the Volume Licensing Service Center.',
  }
]

const App = () => (
  <div className={styles.App}>
    <div>
      <h1>fogg-ui</h1>

      <h2>Alerts</h2>
      <Alert primary>This is my primary alert</Alert>
      <Alert secondary>This is my secondary alert</Alert>
      <Alert success>This is my success alert</Alert>
      <Alert danger>This is my danger alert</Alert>
      <Alert warning>This is my warning alert</Alert>
      <Alert info>This is my info alert</Alert>
      <Alert light>This is my light alert</Alert>
      <Alert dark>This is my dark alert</Alert>

      <h2>Buttons</h2>

      <p>
        <Button primary>Primary</Button>
        <Button success>Success</Button>
        <Button danger>Danger</Button>
        <Button warning>Warning</Button>
        <Button light>Light</Button>
        <Button dark>Dark</Button>
        <Button disabled>Disabled</Button>
      </p>

      <p>
        <Button primary outline>Primary</Button>
        <Button success outline>Success</Button>
        <Button danger outline>Danger</Button>
        <Button warning outline>Warning</Button>
        <Button light outline>Light</Button>
        <Button dark outline>Dark</Button>
        <Button disabled outline>Disabled</Button>
      </p>

      <h2>Accordion</h2>

      <Accordion panels={panels} />
    </div>
  </div>
)

export default App

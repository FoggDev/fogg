// Dependencies
import React from 'react'

// Components
import Alert from '../src/Alert'
import Accordion from '../src/Accordion'
import Button from '../src/Button'

import styles from './App.scss'

const panels = [
  {
    title: 'What does royalty free mean?',
    content: 'Royalty free means you just need to pay for rights to use the item once per end product. You don\'t need to pay additional or ongoing fees for each person who sees or uses it.',
  },
  {
    title: 'What do you mean by item and end product?',
    content: 'The item is what you purchase from Envato Market. The end product is what you build with that item. For example, the item is a business card template; the end product is the finalized business card. The item is a button graphic; the end product is an app using the button graphic in the app\'s interface.',
  },
  {
    title: 'They Fail Poorly and Often',
    content: 'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
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
      <Button>Primary</Button>
      <Button success>Success</Button>
      <Button danger>Danger</Button>
      <Button warning>Warning</Button>
      <Button light>Light</Button>
      <Button dark>Dark</Button>

      <h2>Accordion</h2>

      <Accordion panels={panels} />
    </div>
  </div>
)

export default App

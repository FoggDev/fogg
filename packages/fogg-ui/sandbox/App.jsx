// Dependencies
import React, { Component } from 'react'

// Components
import Alert from '../src/Alert'
import Accordion from '../src/Accordion'
import Badge from '../src/Badge'
import Button from '../src/Button'
import DangerButton from '../src/Button/Danger'
import DarkButton from '../src/Button/Dark'
import LightButton from '../src/Button/Light'
import PrimaryButton from '../src/Button/Primary'
import SuccessButton from '../src/Button/Success'
import WarningButton from '../src/Button/Warning'
import Checkbox from '../src/Checkbox'
import Radio from '../src/Radio'
import TextCounter from '../src/TextCounter'
import Icon from '../src/Icon'
import RenderIf from '../src/RenderIf'
import Pagination from '../src/Pagination'
import Placeholder from '../src/Placeholder'
import Spinner from '../src/Spinner'
import Input from '../src/Input'
import TextArea from '../src/TextArea'

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

class App extends Component {
  state = {
    text: '',
    clicked: false
  }

  handleTextField = (e, field) => {
    this.setState({
      [field]: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      clicked: true
    })
  }

  render() {
    const { clicked, text } = this.state

    return (
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

          <h2>Badges</h2>
          <Badge primary>Primary</Badge>
          <Badge secondary>Secondary</Badge>
          <Badge success>Success</Badge>
          <Badge danger>Danger</Badge>
          <Badge warning>Warning</Badge>
          <Badge light>Light</Badge>
          <Badge dark>Dark</Badge>

          <h2>Buttons</h2>

          <h3>Colors</h3>
          <p>
            <PrimaryButton>Primary</PrimaryButton>
            <SuccessButton>Success</SuccessButton>
            <DangerButton>Danger</DangerButton>
            <WarningButton>Warning</WarningButton>
            <LightButton>Light</LightButton>
            <DarkButton>Dark</DarkButton>
            <Button disabled>Disabled</Button>
          </p>

          <h3>Outline</h3>
          <p>
            <PrimaryButton outline>Primary</PrimaryButton>
            <SuccessButton outline>Success</SuccessButton>
            <DangerButton outline>Danger</DangerButton>
            <WarningButton outline>Warning</WarningButton>
            <LightButton outline>Light</LightButton>
            <DarkButton outline>Dark</DarkButton>
            <Button disabled outline>Disabled</Button>
          </p>

          <h3>Sizes</h3>
          <p>
            <Button primary small>Small</Button>
            <Button primary>Default</Button>
            <Button primary large>Large</Button>
            <Button primary xLarge>xLarge</Button>
          </p>

          <h3>Full Width</h3>
          <p>
            <Button primary large block>Block level button</Button>
            <Button danger large block>Block level button</Button>
          </p>

          <h2>Accordion</h2>

          <Accordion panels={panels} />

          <h2>Checkbox</h2>

          <Checkbox label="One" name="option[]" />
          <Checkbox label="Two" name="option[]" />
          <Checkbox label="Three" name="option[]" />
          <Checkbox label="Four" name="option[]" />

          <h2>Radio</h2>

          <Radio label="One" name="option[]" />
          <Radio label="Two" name="option[]" />
          <Radio label="Three" name="option[]" />
          <Radio label="Four" name="option[]" />

          <h2>Input</h2>

          <Input name="input" className="input" />
          <Input noWrapper name="input2" className="input2" />

          <h2>TextArea</h2>

          <TextArea name="textarea" className="textarea">Content</TextArea>
          <TextArea noWrapper name="textarea" className="textarea" />

          <h2>TextCounter</h2>

          <textarea
            name="text"
            onChange={e => { this.handleTextField(e, 'text') }}
            value={text}
            maxLength={50}
          />
          <br />
          <TextCounter
            left={text.length}
            total={50}
          />

          <h2>Icon</h2>

          <Icon type="fas fa-angle-right" /> {' '}
          <Icon type="fas fa-align-justify" /> {' '}
          <Icon type="fab fa-apple" /> {' '}
          <Icon type="fab fa-facebook-square" />

          <h2>RenderIf</h2>

          <PrimaryButton primary onClick={this.handleClick}>Click it</PrimaryButton>

          <RenderIf isTrue={clicked}>
            <p>This should be render when the button is clicked!</p>
          </RenderIf>

          <h2>Pagination</h2>

          <h3>Primary Theme</h3>
          <Pagination
            theme="primary"
            page={2}
            total={100}
            url="/page/"
          />

          <h3>Success Theme</h3>
          <Pagination
            theme="success"
            page={4}
            total={100}
            url="/page/"
          />

          <h3>Danger Theme</h3>
          <Pagination
            theme="danger"
            page={10}
            total={100}
            url="/page/"
          />

          <h3>Warning Theme</h3>
          <Pagination
            theme="warning"
            page={1}
            total={100}
            url="/page/"
          />

          <h3>Light Theme</h3>
          <Pagination
            theme="light"
            page={7}
            total={100}
            url="/page/"
          />

          <h3>Dark Theme</h3>
          <Pagination
            theme="dark"
            page={10}
            total={100}
            url="/page/"
          />

          <h2>Spinners</h2>
          <div className={styles.spinners}>
            <Spinner
              spinner="audio"
              style={{ width: '30px' }}
            />
            {' '}
            <Spinner
              spinner="ball-triangle"
              style={{ width: '30px' }}
            />
            {' '}
            <Spinner
              spinner="bars"
              style={{ width: '30px' }}
            />
            {' '}
            <Spinner
              spinner="circles"
              style={{ width: '30px' }}
            />
            {' '}
            <Spinner
              spinner="grid"
              style={{ width: '30px' }}
            />
            {' '}
            <Spinner
              spinner="oval"
              style={{ width: '30px' }}
            />
            {' '}
            <Spinner
              spinner="puff"
              style={{ width: '30px' }}
            />
            {' '}
            <Spinner
              spinner="rings"
              style={{ width: '30px' }}
            />
            {' '}
            <Spinner
              spinner="spinning-circles"
              style={{ width: '30px' }}
            />
            {' '}
            <Spinner
              spinner="tail-spin"
              style={{ width: '30px' }}
            />
            {' '}
            <Spinner
              spinner="three-dots"
              style={{ width: '30px' }}
            />
          </div>

          <h2>Placeholder</h2>
          <Placeholder />
        </div>
      </div>
    )
  }
}

export default App

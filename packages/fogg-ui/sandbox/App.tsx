// Dependencies
import React, { Component, ReactElement } from 'react'

// Components
import Alert from '../src/Alert'
import Accordion from '../src/Accordion'
import Badge from '../src/Badge'
import LinkButton from '../src/Button/Link'
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
import Select from '../src/Select'
import Tags from '../src/Tags'
import Table from '../src/Table'
import Modal from '../src/Modal'
import Toggle from '../src/Toggle'
import Menu from '../src/Menu'

import styles from './App.scss'

const panels = [
  {
    title: "What's the difference between 32-bit and 64-bit versions of Windows?",
    content:
      "The terms 32-bit and 64-bit refer to the way a computer's processor (also called a CPU) handles information. The 64-bit version of Windows handles large amounts of random access memory (RAM) more effectively than a 32-bit system. Not all devices can run the 64-bit versions of Windows."
  },
  {
    title: "My Windows 7 product key won't verify. What's the problem?",
    content:
      'The most common issue is the use of a product key for a product not currently supported by the site such as an Upgrade key, an MSDN key, product keys for pre-installed media or an Enterprise edition key. For access to MSDN products or Enterprise edition visit the MSDN Portal or the Volume Licensing Service Center. Upgrades and pre-installed media are not currently supported by the tools on the site.'
  },
  {
    title:
      "I don't see the Windows 8.1 or Windows 10 edition I'm looking for. Where else should I check?",
    content:
      'If you are looking for MSDN products or Enterprise editions visit the MSDN Portal or the Volume Licensing Service Center.'
  }
]

const tableData = {
  head: ['ID', 'Title', 'Slug', 'Content', 'Created At', 'Status'],
  body: ['id', 'title', 'slug', 'content', 'createdAt', 'status'],
  rows: [
    {
      id: '1231f240-347f-44d1-9007-7b933fb612dc',
      createdAt: '2020-05-31 17:17:49.168-07',
      status: 'Draft',
      title: 'My blog post 1',
      slug: 'my-blog-post-1',
      content: `
        <p><img src="https://learntechsystems.com/wp-content/uploads/2020/05/part3.jpeg" /></p>
        <p>Hi, continuing with the third post and this is the final post about the GraphQL introduction.

        So, there is a way to alter the data because for now we only know to get data with queries, but to change, update, mutate the data we need to implement “mutations” in GraphQL this is really easy to do.

        1.- Go inside the Schema and insert type mutation like this</p>

        <p>2.- Then we need to create the function that will update the data</p>

        <p>3.- Then call the updateCourseTopic in root object like this</p>

        <p><img src="https://learntechsystems.com/wp-content/uploads/2020/05/Screenshot-2020-05-28-at-23.13.32.png" />

        <p>4.- Then call the updateCourseTopic in root object like this</p>
      `
    },
    {
      id: 'abc1f240-347f-44d1-9007-7b933fb612dc',
      createdAt: '2020-05-31 17:17:49.168-07',
      status: 'Published',
      title: 'My blog post 2',
      slug: 'my-blog-post-2',
      content: '<p>Content 2 <strong>Content</strong></p>'
    }
  ]
}

class App extends Component {
  state = {
    text: '',
    clicked: false,
    isOpen: false,
    isOpenMenu: false,
    checked: true,
    loading: false
  }

  handleModal = (): void => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleMenu = (): void => {
    this.setState({
      isOpenMenu: !this.state.isOpenMenu
    })
  }

  handleChecked = (): void => {
    this.setState({
      checked: !this.state.checked
    })
  }

  handleTextField = (e: any, field: string): void => {
    this.setState({
      [field]: e.target.value
    })
  }

  handleClick = (): void => {
    this.setState({
      clicked: true
    })
  }

  handleLoadingClick = (): void => {
    this.setState({
      loading: true
    })

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 4000)
  }

  render(): ReactElement {
    const { clicked, text } = this.state

    return (
      <div className={styles.App}>
        <div>
          <h1>fogg-ui</h1>
          <h2>Toggle</h2>
          <div>
            <Toggle label="Show system fields" />
          </div>
          <div>
            <Toggle
              type="round"
              onChange={(): void => console.log('CLICKED!')}
              label="Show system fields"
            />
          </div>
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
          <Badge primary onClick={(): void => console.log('PRIMARY')}>
            Primary
          </Badge>
          <Badge secondary>Secondary</Badge>
          <Badge success>Success</Badge>
          <Badge danger>Danger</Badge>
          <Badge warning>Warning</Badge>
          <Badge light>Light</Badge>
          <Badge dark>Dark</Badge>
          <h2>Select</h2>
          <Select
            name="language"
            label="Select language"
            onClick={({ option, value }: { option: string; value: any }): void => {
              console.log(option, value)
            }}
            options={[
              {
                option: 'English',
                value: 'en'
              },
              {
                option: 'Spanish',
                value: 'es'
              },
              {
                option: 'French',
                value: 'fr',
                selected: true
              },
              {
                option: 'German',
                value: 'ge'
              },
              {
                option: 'Japan',
                value: 'jp'
              },
              {
                option: 'Chinese',
                value: 'ch'
              }
            ]}
          />
          <Select
            name="language"
            type="warning"
            label="Select language"
            onClick={({ option, value }: { option: string; value: any }): void => {
              console.log(option, value)
            }}
            options={[
              {
                option: 'English',
                value: 'en'
              },
              {
                option: 'Spanish',
                value: 'es'
              },
              {
                option: 'French',
                value: 'fr'
              },
              {
                option: 'German',
                value: 'ge'
              },
              {
                option: 'Japan',
                value: 'jp'
              },
              {
                option: 'Chinese',
                value: 'ch',
                selected: true
              }
            ]}
          />
          <Select
            name="published"
            type="warning"
            label="Published"
            onClick={({ option, value }: { option: string; value: any }): void => {
              console.log(option, value)
            }}
            options={[
              {
                option: 'Yes',
                value: true
              },
              {
                option: 'No',
                value: false,
                selected: true
              }
            ]}
          />
          <h2>Tags</h2>
          <Tags tags={[{ name: 'react' }]} getTags={(tags): void => console.log(tags)} />
          <h2>Table</h2>
          <Table
            url="#"
            data={tableData}
            onDelete={(ids: any): void => console.log('Delete', ids)}
            onPublish={(ids: any): void => console.log('Publish', ids)}
            onUnpublish={(ids: any): void => console.log('Unpublish', ids)}
          />
          <h2>Buttons</h2>
          <h3>Button with Spinner</h3>
          <p>
            <DarkButton
              onClick={this.handleLoadingClick}
              isLoading={this.state.loading}
              loadingText="Creating Field..."
            >
              Create Field
            </DarkButton>
          </p>
          <p>
            <DangerButton
              onClick={this.handleLoadingClick}
              isLoading={this.state.loading}
              loadingText="Creating Field..."
            >
              Create Field
            </DangerButton>
          </p>
          <p>
            <LightButton
              onClick={this.handleLoadingClick}
              isLoading={this.state.loading}
              loadingText="Creating Field..."
            >
              Create Field
            </LightButton>
          </p>
          <p>
            <PrimaryButton
              onClick={this.handleLoadingClick}
              isLoading={this.state.loading}
              loadingText="Creating Field..."
            >
              Create Field
            </PrimaryButton>
          </p>
          <p>
            <SuccessButton
              onClick={this.handleLoadingClick}
              isLoading={this.state.loading}
              loadingText="Creating Field..."
            >
              Create Field
            </SuccessButton>
          </p>
          <p>
            <WarningButton
              onClick={this.handleLoadingClick}
              isLoading={this.state.loading}
              loadingText="Creating Field..."
            >
              Create Field
            </WarningButton>
          </p>
          <h3>Colors</h3>
          <p>
            <PrimaryButton href="http://dev.education">Primary</PrimaryButton>
            <SuccessButton>Success</SuccessButton>
            <DangerButton>Danger</DangerButton>
            <WarningButton>Warning</WarningButton>
            <LightButton>Light</LightButton>
            <DarkButton>Dark</DarkButton>
          </p>
          <h3>Outline</h3>
          <p>
            <PrimaryButton outline>Primary</PrimaryButton>
            <SuccessButton outline>Success</SuccessButton>
            <DangerButton outline>Danger</DangerButton>
            <WarningButton outline>Warning</WarningButton>
            <LightButton outline>Light</LightButton>
            <DarkButton outline>Dark</DarkButton>
          </p>
          <h3>Sizes</h3>
          <p>
            <PrimaryButton small>Small</PrimaryButton>
            <PrimaryButton>Default</PrimaryButton>
            <PrimaryButton large>Large</PrimaryButton>
            <PrimaryButton xLarge>xLarge</PrimaryButton>
          </p>
          <h3>Full Width</h3>
          <p>
            <PrimaryButton large block>
              Block level button
            </PrimaryButton>
            <PrimaryButton large block>
              Block level button
            </PrimaryButton>
          </p>
          <h3>Link Button</h3>
          <p>
            <LinkButton color="rgb(102, 99, 253)" bold>
              Cancel
            </LinkButton>

            <LinkButton color="red" bg="#fadad7" bold fontSize="12px">
              Delete Field
            </LinkButton>
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
          <Input disabled name="input" className="input" placeholder="Placeholder" />
          <Input
            noWrapper
            name="input2"
            className="input2"
            style={{
              width: '100%',
              height: '40px'
            }}
          />
          <h2>TextArea</h2>
          <TextArea
            name="textarea"
            className="textarea"
            disabled
            style={{
              height: '200px',
              width: '400px'
            }}
          >
            Content
          </TextArea>
          <TextArea noWrapper name="textarea" className="textarea" />
          <h2>TextCounter</h2>
          <textarea
            name="text"
            onChange={(e): void => {
              this.handleTextField(e, 'text')
            }}
            value={text}
            maxLength={50}
          />
          <br />
          <TextCounter left={text.length} total={50} />
          <h2>Icon</h2>
          <Icon type="fas fa-angle-right" /> <Icon type="fas fa-align-justify" />{' '}
          <Icon type="fab fa-apple" /> <Icon type="fab fa-facebook-square" />
          <h2>RenderIf</h2>
          <PrimaryButton onClick={this.handleClick}>Click it</PrimaryButton>
          <RenderIf isTrue={clicked}>
            <p>This should be render when the button is clicked!</p>
          </RenderIf>
          <h2>Menu</h2>
          <PrimaryButton onClick={this.handleMenu}>Open Menu</PrimaryButton>
          <div style={{ position: 'relative', marginBottom: '100px' }}>
            <Menu
              isOpen={this.state.isOpenMenu}
              items={[
                {
                  option: 'Create Model',
                  icon: 'create',
                  onClick: (): void => console.log('Item 1')
                },
                {
                  option: 'Edit Model',
                  icon: 'edit',
                  onClick: (): void => console.log('Item 1')
                },
                {
                  option: 'Delete Model',
                  icon: 'trash',
                  onClick: (): void => console.log('Item 2')
                },
                {
                  option: 'Create User',
                  icon: 'boy',
                  onClick: (): void => console.log('Item 2')
                },
                {
                  option: 'Create User',
                  icon: 'girl',
                  onClick: (): void => console.log('Item 2')
                }
              ]}
            />
          </div>
          <h2>Modal</h2>
          <PrimaryButton onClick={this.handleModal}>Open Modal</PrimaryButton>
          <Modal
            isOpen={this.state.isOpen}
            label="My Modal"
            options={{
              position: 'top'
            }}
            onOpen={(): void => console.log('on open')}
            onClose={this.handleModal}
          >
            <p>
              <label>Name:</label>

              <Input
                noWrapper
                name="input2"
                className="input2"
                style={{
                  width: '96%'
                }}
              />
            </p>

            <p>
              <label>Content:</label>

              <TextArea
                noWrapper
                name="textarea"
                className="textarea"
                style={{
                  width: '96%',
                  height: '200px'
                }}
              />
            </p>

            <p>
              <Toggle
                checked={this.state.checked}
                type="round"
                onChange={(): void => this.handleChecked()}
                label="Show system fields"
              />
            </p>

            <p>
              <PrimaryButton>Save</PrimaryButton>
            </p>
          </Modal>
          <h2>Pagination</h2>
          <h3>Primary Theme</h3>
          <Pagination theme="primary" page={2} total={100} url="/page/" />
          <h3>Success Theme</h3>
          <Pagination theme="success" page={4} total={100} url="/page/" />
          <h3>Danger Theme</h3>
          <Pagination theme="danger" page={10} total={100} url="/page/" />
          <h3>Warning Theme</h3>
          <Pagination theme="warning" page={1} total={100} url="/page/" />
          <h3>Light Theme</h3>
          <Pagination theme="light" page={7} total={100} url="/page/" />
          <h3>Dark Theme</h3>
          <Pagination theme="dark" page={10} total={100} url="/page/" />
          <h2>Spinners</h2>
          <div className={styles.spinners}>
            <Spinner spinner="audio" style={{ width: '30px' }} />{' '}
            <Spinner spinner="ball-triangle" style={{ width: '30px' }} />{' '}
            <Spinner spinner="bars" style={{ width: '30px' }} />
            <Spinner spinner="circles" style={{ width: '30px' }} />{' '}
            <Spinner spinner="grid" style={{ width: '30px' }} />
            <Spinner spinner="oval" style={{ width: '30px' }} />{' '}
            <Spinner spinner="puff" style={{ width: '30px' }} />
            <Spinner spinner="rings" style={{ width: '30px' }} />{' '}
            <Spinner spinner="spinning-circles" style={{ width: '30px' }} />{' '}
            <Spinner spinner="tail-spin" style={{ width: '30px' }} />{' '}
            <Spinner spinner="three-dots" style={{ width: '30px' }} />
          </div>
          <h2>Placeholder</h2>
          <Placeholder />
        </div>
      </div>
    )
  }
}

export default App

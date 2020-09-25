import { arrayIn, capitalize, camelCase, pluralify } from '../index'

describe('#arrayIn', () => {
  it('should return true if a value from array exists on string', () => {
    const whitelist = ['login']
    const fakeWhitelist = ['getUsers']
    const query = `
      mutation {
        login(input: {email: "carlos.santana@dev.education", password: "12345678"}) {
          token
        }
      }
    `

    expect(arrayIn(whitelist, query)).toBe(true)
    expect(arrayIn(fakeWhitelist, query)).toBe(false)
  })
})

describe('#capitalize', () => {
  it('should return a capitalized string', () => {
    expect(capitalize('fogg')).toBe('Fogg')
    expect(capitalize('f')).toBe('F')
    expect(capitalize(0)).toBe('')
    expect(capitalize({})).toBe('')
  })
})

describe('#camelCase', () => {
  it('should return a camelCased string', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar')
    expect(camelCase('--foo-bar--')).toBe('fooBar')
    expect(camelCase('__FOO_BAR__')).toBe('fooBar')
  })
})

describe('#pluralify', () => {
  it('should return singular value', () => {
    expect(pluralify('Entry', 'Entries', 1)).toBe('Entry')
  })

  it('should return plural', () => {
    expect(pluralify('Entry', 'Entries', 0)).toBe('Entries')
    expect(pluralify('Entry', 'Entries', 2)).toBe('Entries')
  })
})

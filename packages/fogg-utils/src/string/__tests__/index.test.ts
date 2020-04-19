import { capitalize, camelCase } from '../index'

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

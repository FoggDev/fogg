import { availableLanguages, isLanguage, languages } from '../index'

describe('#availableLanguages', () => {
  it('should return the list of available languages', () => {
    expect(availableLanguages()).toEqual(languages)
  })
})

describe('#isLanguage', () => {
  it('should return true if is a valid language', () => {
    expect(isLanguage('en-US')).toBe(true)
  })

  it('should return false if is not a valid language', () => {
    expect(isLanguage('bn-IN')).toBe(false)
  })
})

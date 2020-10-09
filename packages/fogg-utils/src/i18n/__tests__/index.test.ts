import { availableLanguages, isLanguage, t } from '../index'

describe('#availableLanguages', () => {
  it('should return the list of available languages as string', () => {
    expect(availableLanguages()).toEqual(
      'ar|de-DE|en-US|en-GB|es|es-AR|es-ES|es-MX|fr-FR|it-IT|pt-BR|pt-PT|ja-JP|ko-KR|zh-CN'
    )
  })

  it('should return the list of available languages as array', () => {
    expect(availableLanguages(false)).toEqual([
      'ar',
      'de-DE',
      'en-US',
      'en-GB',
      'es',
      'es-AR',
      'es-ES',
      'es-MX',
      'fr-FR',
      'it-IT',
      'pt-BR',
      'pt-PT',
      'ja-JP',
      'ko-KR',
      'zh-CN'
    ])
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

describe('#t', () => {
  it('should return the translation in English', () => {
    const __ = {
      hello: {
        world: 'Hello World'
      }
    }

    expect(t('hello.world', __)).toBe('Hello World')
  })

  it('should return the translation in Spanish', () => {
    const __ = {
      hello: {
        world: 'Hola Mundo'
      }
    }

    expect(t('hello.world', __)).toBe('Hola Mundo')
  })
})

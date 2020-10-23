import { getParams } from '../utils'
import { pick } from '../object'
import { isLanguage } from '../is'
import { languagesList } from '../languages'

export const getLanguagesList = () => {
  return languagesList
}

export const getCurrentLanguage = (url?: string, defaultLanguage = 'en-US') => {
  const params = getParams(url)
  return params && isLanguage(params[0]) ? params[0] : defaultLanguage
}

export const getSelectLanguages = (list: any) => {
  const languages: any = []
  const currentLanguage = getCurrentLanguage()

  list.forEach((language: string) => {
    languages.push({
      option: languagesList[language].name,
      value: languagesList[language].lang,
      selected: language === currentLanguage
    })
  })

  return languages
}

export const availableLanguages = (join = true) => {
  const listOfLanguages = Object.keys(languagesList)

  if (join) {
    return listOfLanguages.join('|')
  }

  return listOfLanguages
}

export function t(key: string, __: any) {
  return pick(key, __)
}

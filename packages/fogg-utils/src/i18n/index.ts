import { getParamsFromUrl } from '../utils'
import { pick } from '../object'
import { isLanguage } from '../is'
import { languagesList } from '../languages'

export const getLanguagesList = () => {
  return languagesList
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

export const getCurrentLanguage = (url?: string, defaultLanguage = 'en-US') => {
  const params = getParamsFromUrl(url)
  return params && isLanguage(params[0]) ? params[0] : defaultLanguage
}

import { isString } from '../is'
import { words } from '../utils'

export function capitalize(str: any): string {
  if (!isString(str)) {
    return ''
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function camelCase(str: string): string {
  return words(str.replace(/['\u2019]/g, '')).reduce((result: string, word: string, index: number) => {
    word = word.toLowerCase()

    return result + (index ? capitalize(word) : word)
  }, '')
}

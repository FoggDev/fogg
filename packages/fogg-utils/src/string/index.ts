import { isString } from '../is'
import { words } from '../utils'

export function capitalize(str: any): string {
  if (!isString(str)) {
    return ''
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function camelCase(str: string): string {
  return words(str.replace(/['\u2019]/g, '')).reduce(
    (result: string, word: string, index: number) => {
      word = word.toLowerCase()

      return result + (index ? capitalize(word) : word)
    },
    ''
  )
}

export function arrayIn(arr: string[], str: string): boolean {
  let found = false

  arr.forEach((item: string) => {
    if (str.includes(item)) {
      found = true
    }
  })

  return found
}

export function pluralify(singular: string, plural: string, count: number): string {
  return count === 1 ? singular : plural
}

import { isString, isDefined, isLanguage, isBrowser } from '../is'
import { getCurrentLanguage } from '../languages'

export function getLocation(req?: any): any {
  return typeof window !== 'undefined' ? window.location : { pathname: req && req.url }
}

export function getParamsFromUrl(url: any, index = 0): any {
  if (!url) {
    url = getLocation().pathname
  }

  if (isString(url)) {
    if (url.indexOf('?') > -1) {
      url = url.substr(0, url.indexOf('?'))
    }

    const params = url.split('/')
    params.shift()

    if (params[params.length - 1] === '') {
      params.pop()
    }

    if (index) {
      if (isLanguage(params[0])) {
        index += 1
      }

      return isDefined(params[index]) ? params[index] : false
    }

    return params
  }

  return null
}

export function redirectTo(url = '/', inclueLanguage = false): void {
  if (isBrowser()) {
    const { pathname } = window.location
    const language = getCurrentLanguage()
    let slash = '/'

    if (url === '_self') {
      window.location.href = pathname
    }

    if (inclueLanguage) {
      if (url[0] === '/') {
        slash = ''
      }

      window.location.href = `${language}${slash}${url}`
    } else {
      window.location.href = url
    }
  }
}

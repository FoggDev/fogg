import { isString, isDefined, isLanguage, isBrowser } from '../is'

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

export function redirectTo(url = '/'): void {
  if (isBrowser()) {
    const { pathname } = window.location

    window.location.href = url === '_self' ? pathname : url
  }
}

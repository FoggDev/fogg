import { isBrowser } from '../is'
import { getCurrentLanguage } from '../i18n'

export function redirectTo(url = '/', includeLanguage = false): void {
  if (isBrowser()) {
    const { pathname } = window.location
    const language = getCurrentLanguage()
    let slash = '/'

    if (url === '_self') {
      window.location.href = pathname
    }

    if (includeLanguage) {
      if (url[0] === '/') {
        slash = ''
      }

      window.location.href = `/${language}${slash}${url}`
    } else {
      window.location.href = url
    }
  }
}

export function getParamsFromUrl(mapParams: string[], baseUrl?: any): any {
  let pathname = ''

  if (isBrowser() && !baseUrl) {
    pathname = window.location.pathname
  } else if (baseUrl) {
    pathname = baseUrl.split('?')[0] // eslint-disable-line prefer-destructuring

    if (pathname.substr(-1) === '/') {
      pathname = pathname.slice(0, -1)
    }
  }

  const chunks = pathname.split('/').filter(v => v)
  const params: any = {}

  mapParams.forEach((param, i) => {
    params[param] = chunks[i] || null
  })

  return params
}

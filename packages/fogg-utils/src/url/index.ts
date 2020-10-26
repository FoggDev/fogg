import { isBrowser, isLanguage } from '../is'
import { getCurrentLanguage } from '../i18n'

export function redirectTo(url = '/', includeLanguage = ''): void {
  if (isBrowser()) {
    const { pathname } = window.location
    const language = getCurrentLanguage()
    let slash = '/'

    if (url === '_self') {
      if (isLanguage(includeLanguage)) {
        const segments = pathname.split(slash).filter(v => v)

        if (isLanguage(segments[0])) {
          segments[0] = includeLanguage
        }

        window.location.assign(`${slash}${segments.join('/')}`)
        window.location.reload(true)
      } else {
        window.location.href = pathname
        window.location.reload(true)
      }
    } else if (includeLanguage) {
      if (url[0] === '/') {
        slash = ''
      }

      window.location.assign(`/${language}${slash}${url}`)
      window.location.reload(true)
    } else {
      window.location.assign(url)
      window.location.reload(true)
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

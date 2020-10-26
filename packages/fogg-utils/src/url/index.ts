import { isBrowser, isLanguage } from '../is'
import { getCurrentLanguage } from '../i18n'

export function redirectTo(url = '/', includeLanguage = ''): void {
  if (isBrowser()) {
    const { pathname, reload } = window.location
    const language = getCurrentLanguage()
    let slash = '/'

    if (url === '_self') {
      if (isLanguage(includeLanguage)) {
        const segments = pathname.split(slash).filter(v => v)

        if (isLanguage(segments[0])) {
          segments[0] = includeLanguage
        }

        window.location.assign(`${slash}${segments.join('/')}`)

        setTimeout(() => {
          reload()
        }, 0)
      } else {
        window.location.href = pathname
        setTimeout(() => {
          reload()
        }, 0)
      }
    } else if (includeLanguage) {
      if (url[0] === '/') {
        slash = ''
      }

      window.location.assign(`/${language}${slash}${url}`)
      setTimeout(() => {
        reload()
      }, 0)
    } else {
      window.location.assign(url)
      setTimeout(() => {
        reload()
      }, 0)
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

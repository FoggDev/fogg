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

      window.location.href = `${language}${slash}${url}`
    } else {
      window.location.href = url
    }
  }
}

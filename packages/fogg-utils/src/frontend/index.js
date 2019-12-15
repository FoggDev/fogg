// Utils
import { isBrowser, isDefined } from '../is'

export function cx(...classes) {
  return classes.join(' ').trim()
}

export function redirectTo(url = '/') {
  if (isBrowser()) {
    window.location.href = url
  }

  return false
}

export function isFirstRender(items) {
  return !isDefined(items) || items.length === 0 || Object.keys(items).length === 0
}

export function getModuleInfo({ asPath }) {
  const [, page, module = 'home', action] = asPath.split('/')

  return {
    page,
    module,
    action
  }
}

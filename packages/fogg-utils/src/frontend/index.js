// Dependencies
import slug from 'slug'

// Utils
import { isBrowser, isDefined } from '../is'

export function slugFn(str = '') {
  return slug(str, { lower: true })
}

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
  let cleanPath = asPath.split('?')[0]

  if (cleanPath.substr(-1) === '/') {
    cleanPath = cleanPath.slice(0, -1)
  }

  const [, section, module = 'home', action, id] = cleanPath.split('/')

  return {
    section,
    module,
    action,
    id
  }
}

export function scrollToTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

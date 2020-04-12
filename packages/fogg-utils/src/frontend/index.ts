// Dependencies
import slug from 'slug'

// Utils
import { isBrowser, isDefined } from '../is'

// Interfaces
interface Router {
  asPath: string
}

interface PathInfo {
  section: string
  module: string
  action: string
  id: string
}

export function slugFn(str = ''): string {
  return slug(str, { lower: true })
}

export function cx(...classes: string[]): string {
  return classes.join(' ').trim()
}

export function redirectTo(url = '/'): void {
  if (isBrowser()) {
    window.location.href = url
  }
}

export function isFirstRender(items: any): boolean {
  return !isDefined(items) || items.length === 0 || Object.keys(items).length === 0
}

export function getModuleInfo(router: Router): PathInfo {
  let cleanPath = router.asPath.split('?')[0]

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

export function scrollToTop(): void {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

export function isValidHexColor(hexCode: string) {
  return /^#([0-9a-f]{3}){1,2}$/i.test(hexCode.toLowerCase())
}

export function generateHexCode(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

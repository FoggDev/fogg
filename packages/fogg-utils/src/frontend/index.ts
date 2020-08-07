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

export function buildUrl(params: any[]): any {
  return params.filter(v => v).join('/')
}

export function slugFn(str = ''): string {
  return slug(str, { lower: true })
}

export function cx(...classes: string[]): string {
  return classes.join(' ').trim()
}

export function redirectTo(url = '/'): void {
  if (isBrowser()) {
    window.location.href = url === '_self' ? window.location.pathname : url
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

export function scrollToTop(): void {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

export function isValidHexColor(hexCode: string): boolean {
  return /^#([0-9a-f]{3}){1,2}$/i.test(hexCode.toLowerCase())
}

export function generateHexCode(): string {
  let newHex = `${Math.floor(Math.random() * 16777215)
    .toString(16)
    .substring(0, 7)}`

  if (newHex.length < 6) {
    newHex += 'f'
  }

  return `#${newHex}`
}

export function invertHexCode(hexCode?: any): string {
  if (!hexCode) {
    return '#fff'
  }

  const hex = hexCode.replace('#', '')

  let newHex = `${(Number(`0x1${hex}`) ^ 0xffffff)
    .toString(16)
    .substr(1)
    .toUpperCase()}`

  return `#${newHex}`
}

export function waitFor(time: number): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, time * 1000))
}

export function isArray(v: unknown): boolean {
  return Array.isArray(v)
}

export function isDefined(v: unknown): boolean {
  return typeof v !== 'undefined' && v !== null
}

export function isFalse(v: unknown): boolean {
  return isDefined(v) && v === false
}

export function isNumber(v: unknown): boolean {
  return typeof v === 'number'
}

export function isFunction(v: any): boolean {
  return typeof v === 'function'
}

export function isJson(str: any): any {
  if (!str || str === null) {
    return false
  }

  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }

  return true
}

export function isObject(v: unknown): boolean {
  return isDefined(v) && typeof v === 'object' && !isArray(v)
}

export function isPassword(password: string, min = 8): boolean {
  return Boolean(password && password.length >= min)
}

export function isPasswordMatch(p1: string, p2: string): boolean {
  return isPassword(p1) && isPassword(p2) && p1 === p2
}

export function isString(v: unknown): boolean {
  return isDefined(v) && typeof v === 'string'
}

export function isUndefined(v: unknown): boolean {
  return typeof v === 'undefined' || v === null
}

export function isBrowser(): boolean {
  return typeof window !== 'undefined'
}

export function isSymbol(v: unknown): boolean {
  return typeof v === 'symbol' || isObject(v)
}

export function isEmptyObject(v: any): boolean {
  return v ? Object.keys(v).length === 0 : true
}

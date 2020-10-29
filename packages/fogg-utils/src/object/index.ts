// Dependencies
import dot from 'dot-object'

// Utils
import { isBrowser, isString, isEmptyObject, isObject, isDefined, isJson, isArray } from '../is'
import { chunk } from '../array'

export function cloneObject(o: any): any {
  return { ...o }
}

export function getEmptyValues(values: any, required: any = []): any {
  const emptyValues: any = {}

  Object.keys(values).forEach((field: string) => {
    const v = isString(values[field]) ? values[field].trim() : values[field]

    if (required && required.length === 0 && v === '') {
      emptyValues[field] = true
    } else if (required && required.includes(field) && v === '') {
      emptyValues[field] = true
    }
  })

  return !isEmptyObject(emptyValues) ? emptyValues : false
}

export function getDebug(data: any): any {
  if (data._DEBUG) {
    return JSON.parse(data._DEBUG)
  }

  return null
}

export function getEntries(data: any, exclude = ['updatedAt']): any {
  if (!data) {
    return null
  }

  const { fields, values } = data
  const systemHead = []
  const systemBody = []
  const head = []
  const body = []
  let entries: any = {}

  if (fields) {
    for (const field of fields) {
      if (!exclude.includes(field.identifier) && field.type !== 'Reference') {
        if (field.isSystem && field.identifier !== 'id') {
          systemHead.push(field.fieldName)
          systemBody.push(field.identifier)
        } else {
          head.push(field.fieldName)
          body.push(field.identifier)
        }

        if (!values) {
          for (const value of field.values) {
            entries[value.entry] = entries[value.entry] || {}
            entries[value.entry][field.identifier] = value.value
          }
        } else {
          entries = values
        }
      }
    }
  }

  return {
    head,
    body,
    systemHead,
    systemBody,
    entries: Object.values(entries)
  }
}

export function getValuesForTable(
  data: any,
  excludeMore?: any,
  orderBy?: any,
  direction?: any,
  chunks?: any
): any {
  if (!data) {
    return null
  }

  direction = direction || 'asc'
  chunks = chunks || 10

  const exclude: any = excludeMore || ['updatedAt']
  const { head, body, entries: rows, systemHead, systemBody } = getEntries(data, exclude)

  if (orderBy) {
    if (direction === 'asc') {
      rows.sort((a: any, b: any) => (a[orderBy] > b[orderBy] ? 1 : -1))
    } else {
      rows.sort((a: any, b: any) => (a[orderBy] < b[orderBy] ? 1 : -1))
    }
  }

  return {
    head: head.concat(systemHead),
    body: body.concat(systemBody),
    rows: chunk(rows, chunks),
    raw: rows,
    total: rows.length
  }
}

export function keys(obj: any): any[] {
  if (isObject(obj)) {
    return Object.keys(obj)
  }

  return []
}

export function forEach(items: any, callback: any): any {
  if (!isDefined(items)) {
    return false
  }

  if ((isDefined(items) && isDefined(items[0])) || isArray(items)) {
    return items.forEach(callback)
  }

  return isObject(items) ? keys(items).forEach(callback) : false
}

export function pick(key: string, obj: any): string {
  return dot.pick(key, obj) || key
}

export function buildContentJson(nodes: any, raw?: boolean) {
  const rows: any = {}

  forEach(nodes, (node: any) => {
    rows[node.key] = node.value
  })

  if (!raw) {
    dot.object(rows)
  }

  return rows
}

export function objectToDot(nodes: any): any {
  if (isObject(nodes)) {
    return dot.dot(nodes)
  }

  return null
}

export function hasOwnProperty(obj: any, prop: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

export function getStorageItem(key: string, returnJson = true): any {
  if (!isBrowser() || !localStorage) {
    return null
  }

  const item: any = localStorage.getItem(key)

  if (returnJson && isJson(item)) {
    return JSON.parse(item)
  }

  return item
}

export function setStorageItem(key: string, value: any): any {
  if (isBrowser() && key && value && localStorage) {
    if (isObject(value)) {
      value = JSON.stringify(value)
    }

    localStorage.setItem(key, value)

    return true
  }

  return null
}

export function removeStorageItem(key: string): any {
  if (isBrowser() && key && localStorage) {
    localStorage.removeItem(key)
  }
}

export function clearStorage(): any {
  if (isBrowser() && localStorage) {
    localStorage.clear()
  }
}

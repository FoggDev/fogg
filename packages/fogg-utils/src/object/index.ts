import { isString, isEmptyObject } from '../is'
import { chunk } from '../array'

export function cloneObject(o: object): object {
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
  const entries: any = {}
  const systemHead = []
  const systemBody = []
  let head = []
  let body = []

  for (const field of data) {
    if (!exclude.includes(field.identifier)) {
      if (field.isSystem && field.identifier !== 'id') {
        systemHead.push(field.fieldName)
        systemBody.push(field.identifier)
      } else {
        head.push(field.fieldName)
        body.push(field.identifier)
      }

      for (const value of field.values) {
        entries[value.entry] = entries[value.entry] || {}
        entries[value.entry][field.identifier] = value.value
      }
    }
  }

  let rows = Object.values(entries)

  if (orderBy) {
    if (direction === 'asc') {
      rows.sort((a: any, b: any) => (a[orderBy] > b[orderBy] ? 1 : -1))
    } else {
      rows.sort((a: any, b: any) => (a[orderBy] < b[orderBy] ? 1 : -1))
    }
  }

  const total = rows.length

  rows = chunk(rows, chunks)
  head = head.concat(systemHead)
  body = body.concat(systemBody)

  return {
    head,
    body,
    rows,
    total
  }
}

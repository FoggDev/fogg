import { isString, isEmptyObject } from '../is'

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

export function getValuesForTable(data: any, excludeMore?: any): any {
  if (!data) {
    return null
  }

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

  head = head.concat(systemHead)
  body = body.concat(systemBody)

  return {
    head,
    body,
    rows: Object.values(entries)
  }
}

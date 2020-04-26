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

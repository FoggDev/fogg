import { isString } from '../is'

export function cloneObject(o: object): object {
  return { ...o }
}

export function getEmptyValues(values: any): object {
  const emptyValues: any = {}

  Object.keys(values).forEach((field: string) => {
    const v = isString(values[field]) ? values[field].trim() : values[field]

    if (v === '') {
      emptyValues.hasEmptyValues = true
    }

    emptyValues[field] = v === ''
  })

  return emptyValues
}

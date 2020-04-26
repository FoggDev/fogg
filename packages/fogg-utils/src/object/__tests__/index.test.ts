import { cloneObject, getEmptyValues } from '../index'

describe('#cloneObject', () => {
  it('should clone an object', () => {
    const obj = {
      foo: true,
      baz: false
    }

    const clonedObj = cloneObject(obj)

    expect(clonedObj).toEqual(obj)
  })

  it('should clone an object and have a different instance', () => {
    const obj = {
      foo: true,
      baz: false
    }

    const clonedObj = cloneObject(obj)

    expect(clonedObj === obj).toBe(false)
  })
})

describe('#getEmptyValues', () => {
  it('should get all empty values', () => {
    const values = {
      firstName: '     ',
      lastName: 'foo',
      age: 20,
      email: ''
    }

    const expectedValues = {
      firstName: true,
      lastName: false,
      age: false,
      email: true
    }

    const emptyValues = getEmptyValues(values)

    expect(emptyValues).toEqual(expectedValues)
  })
})

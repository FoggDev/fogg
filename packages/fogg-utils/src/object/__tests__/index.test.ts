import { cloneObject, getEmptyValues, getDebug } from '../index'

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
      email: true
    }

    const emptyValues = getEmptyValues(values)

    expect(emptyValues).toEqual(expectedValues)
  })

  it('should get false if there is not empty values', () => {
    const values = {
      firstName: 'baz',
      lastName: 'foo',
      age: 20,
      email: 'foo@baz.com'
    }

    const emptyValues = getEmptyValues(values)

    expect(emptyValues).toBe(false)
  })

  it('should get just required empty values', () => {
    const values = {
      firstName: '',
      lastName: '',
      age: 20,
      email: ''
    }

    const emptyValues = getEmptyValues(values, ['firstName', 'email'])

    expect(emptyValues).toEqual({
      firstName: true,
      email: true
    })
  })
})

describe('#getDebug', () => {
  it('should get the debug data', () => {
    const query = {
      _DEBUG: JSON.stringify({
        foo: 'bar'
      })
    }

    const debug = getDebug(query)

    expect(debug.foo).toEqual('bar')
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

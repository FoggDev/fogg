import { cloneObject, getEmptyValues, getDebug, getValuesForTable } from '../index'

const data = [
  {
    id: 'a7e48837-a759-49d9-9061-7c0e0cc9ca53',
    type: 'Status',
    fieldName: 'Status',
    identifier: 'status',
    description: 'The status of the record',
    isHide: false,
    isMedia: false,
    isRequired: true,
    isUnique: false,
    isSystem: true,
    isPrimaryKey: false,
    values: [
      {
        id: '6120bac8-dd52-482f-be5c-a76c919a12a3',
        entry: '247791ee-49e9-4f9a-a30e-be2524764d11',
        value: 'Draft',
        __typename: 'Value'
      },
      {
        id: 'd72b044e-5886-42fa-805e-58fdcae027fe',
        entry: '11111111-49e9-4f9a-a30e-be2524764d11',
        value: 'Draft',
        __typename: 'Value'
      }
    ],
    __typename: 'Field'
  },
  {
    id: '7596002c-4937-48d1-a3e0-2ff75b339e21',
    type: 'DateTime',
    fieldName: 'Updated At',
    identifier: 'updatedAt',
    description: 'The time the record was updated',
    isHide: true,
    isMedia: false,
    isRequired: true,
    isUnique: false,
    isSystem: true,
    isPrimaryKey: false,
    values: [
      {
        id: 'dcbaaabd-cb9e-4bec-a6b7-915486c6637c',
        entry: '247791ee-49e9-4f9a-a30e-be2524764d11',
        value: '2020-06-01 22:42:56.383-07',
        __typename: 'Value'
      },
      {
        id: '602c8183-71f2-454d-bf15-644df28f0edb',
        entry: '11111111-49e9-4f9a-a30e-be2524764d11',
        value: '2020-06-02 22:44:55.797-07',
        __typename: 'Value'
      }
    ],
    __typename: 'Field'
  },
  {
    id: '4d1f74b5-244d-4ce2-9e45-bf3d09f086cf',
    type: 'DateTime',
    fieldName: 'Created At',
    identifier: 'createdAt',
    description: 'The time the record was created',
    isHide: true,
    isMedia: false,
    isRequired: true,
    isUnique: false,
    isSystem: true,
    isPrimaryKey: false,
    values: [
      {
        id: 'c95a09ed-6692-4b43-8eb8-a57eca7a3ad7',
        entry: '247791ee-49e9-4f9a-a30e-be2524764d11',
        value: '2020-05-27 22:42:56.383-07',
        __typename: 'Value'
      },
      {
        id: '9b055610-a977-46d1-8372-c43529abdc1f',
        entry: '11111111-49e9-4f9a-a30e-be2524764d11',
        value: '2020-05-28 22:44:55.797-07',
        __typename: 'Value'
      }
    ],
    __typename: 'Field'
  },
  {
    id: 'a0dd3f73-968a-4419-9b4e-c2b780f75c23',
    type: 'ID',
    fieldName: 'ID',
    identifier: 'id',
    description: 'The unique identifier',
    isHide: false,
    isMedia: false,
    isRequired: true,
    isUnique: true,
    isSystem: true,
    isPrimaryKey: true,
    values: [
      {
        id: '90188b3c-18ec-443f-94c6-69502f6e509c',
        entry: '247791ee-49e9-4f9a-a30e-be2524764d11',
        value: 'dac4fcdd-0954-4e86-be6a-160be8ffbf2e',
        __typename: 'Value'
      },
      {
        id: '642ae442-8df6-4810-a085-a498263bdf94',
        entry: '11111111-49e9-4f9a-a30e-be2524764d11',
        value: 'fe07c143-ecb5-4fd3-aa29-2058981ed328',
        __typename: 'Value'
      }
    ],
    __typename: 'Field'
  },
  {
    id: '00c71451-321c-4630-9e99-8decf6d2a2a0',
    type: 'String',
    fieldName: 'Title',
    identifier: 'title',
    description: '',
    isHide: false,
    isMedia: false,
    isRequired: true,
    isUnique: false,
    isSystem: false,
    isPrimaryKey: false,
    values: [
      {
        id: 'a0d9893f-7e7d-435a-97b8-8c62672a9bb3',
        entry: '247791ee-49e9-4f9a-a30e-be2524764d11',
        value: 'Blog post 1',
        __typename: 'Value'
      },
      {
        id: 'da1c267b-8a8a-4877-9c3c-4e80e95af494',
        entry: '11111111-49e9-4f9a-a30e-be2524764d11',
        value: 'My blog post 2',
        __typename: 'Value'
      }
    ],
    __typename: 'Field'
  }
]

describe('#getValuesForTable', () => {
  it('should order the data', () => {
    const values = getValuesForTable(data, null, 'createdAt', 'desc')

    expect(values).toEqual({
      head: ['ID', 'Title', 'Status', 'Created At'],
      body: ['id', 'title', 'status', 'createdAt'],
      rows: [
        [
          {
            status: 'Draft',
            createdAt: '2020-05-28 22:44:55.797-07',
            id: 'fe07c143-ecb5-4fd3-aa29-2058981ed328',
            title: 'My blog post 2'
          },
          {
            status: 'Draft',
            createdAt: '2020-05-27 22:42:56.383-07',
            id: 'dac4fcdd-0954-4e86-be6a-160be8ffbf2e',
            title: 'Blog post 1'
          }
        ]
      ],
      total: 2
    })
  })

  it('should return the correct values', () => {
    const values = getValuesForTable(data)

    expect(values).toEqual({
      head: ['ID', 'Title', 'Status', 'Created At'],
      body: ['id', 'title', 'status', 'createdAt'],
      rows: [
        [
          {
            status: 'Draft',
            createdAt: '2020-05-27 22:42:56.383-07',
            id: 'dac4fcdd-0954-4e86-be6a-160be8ffbf2e',
            title: 'Blog post 1'
          },
          {
            status: 'Draft',
            createdAt: '2020-05-28 22:44:55.797-07',
            id: 'fe07c143-ecb5-4fd3-aa29-2058981ed328',
            title: 'My blog post 2'
          }
        ]
      ],
      total: 2
    })
  })
})

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

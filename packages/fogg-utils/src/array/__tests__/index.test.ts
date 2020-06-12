import { chunk } from '../index'

const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q']

describe('#chunk', () => {
  it('should break the array in chunks', () => {
    const arr = chunk(data, 5)

    expect(arr).toEqual([
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i', 'j'],
      ['k', 'l', 'm', 'n', 'o'],
      ['p', 'q']
    ])
  })
})

import {
  getModuleInfo,
  generateHexCode,
  isValidHexColor,
  invertHexCode,
  buildUrl,
  getReferenceTitle
} from '../index'

describe('#buildUrl', () => {
  it('should generate a valid url', () => {
    expect(buildUrl(['dashboard', '123', 'master', 'schema', 'model', 'post'])).toBe(
      'dashboard/123/master/schema/model/post'
    )
  })
})

describe('#isValidHexColor', () => {
  it('should generate a valid hex code', () => {
    expect(isValidHexColor(generateHexCode())).toBe(true)
  })
})

describe('#generateHexCode', () => {
  it('should generate an hex code', () => {
    const hexCode = generateHexCode()
    expect(hexCode.length).toBe(7)
  })
})

describe('#invertHexCode', () => {
  it('should generate an inverted hex code with #', () => {
    const hexCode = invertHexCode('#015856')
    expect(hexCode).toBe('#FFFFFF')
  })

  it('should generate an inverted hex code with #', () => {
    const hexCode = invertHexCode('#C1EA06')
    expect(hexCode).toBe('#000000')
  })

  it('should generate an inverted hex code without #', () => {
    const hexCode = invertHexCode('FFFFFF')
    expect(hexCode).toBe('#000000')
  })

  it('should generate an inverted hex code white by default', () => {
    const hexCode = invertHexCode()
    expect(hexCode).toBe('#FFFFFF')
  })
})

describe('#getModuleInfo', () => {
  it('get module info with action', () => {
    const router = {
      asPath: '/dashboard/blog/create'
    }

    const { section, module, action, id } = getModuleInfo(router)

    expect(section).toBe('dashboard')
    expect(module).toBe('blog')
    expect(action).toBe('create')
    expect(id).toBe(undefined)
  })

  it('get module info with action and id', () => {
    const router = {
      asPath: '/dashboard/blog/update/1'
    }

    const { section, module, action, id } = getModuleInfo(router)

    expect(section).toBe('dashboard')
    expect(module).toBe('blog')
    expect(action).toBe('update')
    expect(id).toBe('1')
  })

  it('get module info with query', () => {
    const router = {
      asPath: '/dashboard/blog?page=2'
    }

    const { section, module, action, id } = getModuleInfo(router)

    expect(section).toBe('dashboard')
    expect(module).toBe('blog')
    expect(action).toBe(undefined)
    expect(id).toBe(undefined)
  })

  it('get module info with query and extra slash', () => {
    const router = {
      asPath: '/dashboard/blog/?page=2'
    }

    const { section, module, action, id } = getModuleInfo(router)

    expect(section).toBe('dashboard')
    expect(module).toBe('blog')
    expect(action).toBe(undefined)
    expect(id).toBe(undefined)
  })
})

describe('getReferenceTitle', () => {
  it('should get the correct title', () => {
    const entry = {
      authorName: 'Carlos Santana',
      createdAt: '2020-09-18T22:51:03-07:00',
      id: 'a0c38fdc-0732-4a1a-b2f3-9430fd9c810b',
      modelName: 'Author',
      status: 'Draft'
    }

    const title = getReferenceTitle(entry)

    expect(title).toBe('Carlos Santana')
  })

  it('should get Unknown title', () => {
    const entry = {
      createdAt: '2020-09-18T22:51:03-07:00',
      id: 'a0c38fdc-0732-4a1a-b2f3-9430fd9c810b',
      modelName: 'Author',
      status: 'Draft'
    }

    const title = getReferenceTitle(entry)

    expect(title).toBe('Unknown')
  })
})

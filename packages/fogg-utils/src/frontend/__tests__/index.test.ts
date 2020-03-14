import {
  getModuleInfo
} from '../index'

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

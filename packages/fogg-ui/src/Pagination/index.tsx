// Dependencies
import React, { FC, ReactNode, ReactElement } from 'react'
import styled from 'styled-components'

// Colors
import colors from '../colors'

// Components
import Icon from '../Icon'

interface iProps {
  page: number
  total: number
  theme: string
  href: string
  as?: string
  Link?: any
}

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 500 auto;
  margin-top: 90px;
  margin-bottom: 50px;
  width: 100%;
`

const StyledLi = styled.li`
  margin: 5px;
`

const StyledLink = styled.span`
  a {
    color: #777;
    text-decoration: none;
    padding: 15px 20px;
    border-radius: 5px;
    &:hover {
      background: #555;
      color: #FFF;
    }

    &.active {
      background: blue;
      color: white;

      &:hover {
        background: blue;
        color: white;
      }
    }

    ${({ theme }): any =>
      theme === 'primary' &&
      `
      &.active {
        background: ${colors.primary.background};
        color: white;

        &:hover {
          background: ${colors.primary.hover};
          color: white;
        }
      }
    `}

    ${({ theme }): any =>
      theme === 'success' &&
      `
      &.active {
        background: ${colors.success.background};
        color: white;

        &:hover {
          background: ${colors.success.hover};
          color: white;
        }
      }
    `}

    ${({ theme }): any =>
      theme === 'danger' &&
      `
      &.active {
        background: ${colors.danger.background};
        color: white;

        &:hover {
          background: ${colors.danger.hover};
          color: white;
        }
      }
    `}

    ${({ theme }): any =>
      theme === 'warning' &&
      `
      &.active {
        background: ${colors.warning.background};
        color: white;

        &:hover {
          background: ${colors.warning.hover};
          color: white;
        }
      }
    `}

    ${({ theme }): any =>
      theme === 'light' &&
      `
      &.active {
        background: ${colors.light.background};
        color: ${colors.light.color};

        &:hover {
          background: ${colors.light.hover};
          color: white;
        }
      }
    `}

    ${({ theme }): any =>
      theme === 'dark' &&
      `
      &.active {
        background: ${colors.dark.background};
        color: white;

        &:hover {
          background: ${colors.dark.hover};
          color: white;
        }
      }
    `}
  }
`

const Pagination: FC<iProps> = (props): ReactElement => {
  const maxElementsPerPage = 10
  const increment = 5

  const getCurrentPage = (start: number, end: number): number => (start === 0 ? 1 : start / end + 1)

  const getPageNav = (
    firstPage: number,
    lastPage: number,
    start: number,
    end: number
  ): ReactNode[] => {
    const { theme, Link, href, as } = props
    const pageNav = []

    for (let i = firstPage; i < lastPage; i += 1) {
      const pge = i + 1
      const next = i * end

      if (start === next) {
        if (Link) {
          pageNav.push(
            <StyledLi key={i}>
              <StyledLink theme={theme} className="active">
                <Link href={href} as={as}>
                  {pge}
                </Link>
              </StyledLink>
            </StyledLi>
          )
        } else {
          pageNav.push(
            <StyledLi key={i}>
              <StyledLink theme={theme} className="active">
                <a href="#">{pge}</a>
              </StyledLink>
            </StyledLi>
          )
        }
      } else if (Link) {
        pageNav.push(
          <StyledLi key={i}>
            <StyledLink theme={theme}>
              <Link href={`${href}${pge}`} as={`${as}${pge}`}>
                {pge}
              </Link>
            </StyledLink>
          </StyledLi>
        )
      } else {
        pageNav.push(
          <StyledLi key={i}>
            <StyledLink theme={theme}>
              <a href={`${href}${pge}`}>{pge}</a>
            </StyledLink>
          </StyledLi>
        )
      }
    }

    return pageNav
  }

  const getPageNext = (currentPage: number, pages: number): ReactNode => {
    const { theme, Link, href, as } = props

    if (currentPage <= pages - 1) {
      if (Link) {
        return (
          <StyledLi>
            <StyledLink theme={theme} className="next">
              <Link href={`${href}${currentPage + 1}`} as={`${as}${currentPage + 1}`}>
                <Icon type="fas fa-chevron-right" />
              </Link>
            </StyledLink>
          </StyledLi>
        )
      } else {
        return (
          <StyledLi>
            <StyledLink theme={theme} className="next">
              <a href={`${href}${currentPage + 1}`}>
                <Icon type="fas fa-chevron-right" />
              </a>
            </StyledLink>
          </StyledLi>
        )
      }
    }

    return <div />
  }

  const getPagePrevious = (start: number, currentPage: number): ReactNode => {
    const { theme, Link, href, as } = props

    if (start > 0) {
      if (Link) {
        return (
          <StyledLi>
            <StyledLink theme={theme} className="previous">
              <Link href={`${href}${currentPage - 1}`} as={`${as}${currentPage - 1}`}>
                <Icon type="fas fa-chevron-left" />
              </Link>
            </StyledLink>
          </StyledLi>
        )
      } else {
        return (
          <StyledLi>
            <StyledLink theme={theme} className="previous">
              <a href={`${href}${currentPage - 1}`}>
                <Icon type="fas fa-chevron-left" />
              </a>
            </StyledLink>
          </StyledLi>
        )
      }
    }

    return null
  }

  const getPaginationStart = (page: number): number => {
    const paginationPage = page > 0 ? page : 0

    return paginationPage > 0 ? paginationPage * maxElementsPerPage - maxElementsPerPage : 0
  }

  const buildPagination = (
    total: number,
    end: number,
    start: number,
    elementsPerPage?: number
  ): ReactElement => {
    const { href, as } = props
    const limit = elementsPerPage || maxElementsPerPage

    let currentPage: number
    let firstPage: number
    let lastPage: number
    let pageNav: ReactNode
    let pageNext: ReactNode
    let pagePrevious: ReactNode
    let pages: number
    let rest: number

    if (total > end) {
      rest = total % end
      pages = rest === 0 ? total / end : (total - rest) / end + 1
      currentPage = start / end + 1

      if (pages > limit) {
        if (start === 0) {
          firstPage = 0
          lastPage = limit
        }

        if (currentPage < increment) {
          firstPage = 0
          lastPage = currentPage + increment + (increment - currentPage)
        } else {
          firstPage = currentPage - increment - (currentPage + increment - pages)
          lastPage = pages
        }

        if (currentPage >= increment && currentPage <= pages - increment) {
          firstPage = currentPage - increment
          lastPage = currentPage + increment
        }
      } else {
        firstPage = 0
        lastPage = pages
      }

      pageNav = getPageNav(firstPage, lastPage, start, end)
      currentPage = getCurrentPage(start, end)
      pageNext = getPageNext(currentPage, pages)
      pagePrevious = getPagePrevious(start, currentPage)
    }

    return (
      <StyledUl>
        {pagePrevious}
        {pageNav}
        {pageNext}
      </StyledUl>
    )
  }

  const getPagination = (): ReactElement => {
    const { page, total } = props
    const start = getPaginationStart(page)

    if (total > maxElementsPerPage) {
      return buildPagination(total, maxElementsPerPage, start)
    }

    return <div />
  }

  return getPagination()
}

export default Pagination

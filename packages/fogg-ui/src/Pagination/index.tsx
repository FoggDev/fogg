// Dependencies
import React, { FC, ReactNode, ReactElement } from 'react'
import styled from '@emotion/styled'

// Colors
import colors from '../colors'

// Components
import Icon from '../Icon'

interface iProps {
  page: number
  total: number
  rowsPerPage?: number
  design: string
  href: string
  as?: string
  Link?: any
}

interface iStyledLink {
  design: string
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

  a {
    color: #777;
    text-decoration: none;
  }
`

const StyledLink = styled.span<iStyledLink>`
  padding: 15px 20px;
  border-radius: 5px;
  &:hover {
    background: #555;
    color: #fff;
  }

  &.active {
    background: blue;
    color: white;

    &:hover {
      background: blue;
      color: white;
    }
  }

  ${({ design }): any =>
    design === 'primary' &&
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

  ${({ design }): any =>
    design === 'success' &&
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

  ${({ design }): any =>
    design === 'danger' &&
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

  ${({ design }): any =>
    design === 'warning' &&
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

  ${({ design }): any =>
    design === 'light' &&
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

  ${({ design }): any =>
    design === 'dark' &&
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
`

const Pagination: FC<iProps> = (props): ReactElement => {
  const maxElementsPerPage = props.rowsPerPage || 10
  const increment = 5

  const getCurrentPage = (start: number, end: number): number => (start === 0 ? 1 : start / end + 1)

  const getPageNav = (
    firstPage: number,
    lastPage: number,
    start: number,
    end: number
  ): ReactNode[] => {
    const { design, Link, href, as } = props
    const pageNav = []

    for (let i = firstPage; i < lastPage; i += 1) {
      const pge = i + 1
      const next = i * end

      if (start === next) {
        if (Link) {
          pageNav.push(
            <StyledLi key={i}>
              <a href="#">
                <StyledLink design={design} className="active">
                  {pge}
                </StyledLink>
              </a>
            </StyledLi>
          )
        } else {
          pageNav.push(
            <StyledLi key={i}>
              <a href="#">
                <StyledLink design={design} className="active">
                  {pge}
                </StyledLink>
              </a>
            </StyledLi>
          )
        }
      } else if (Link) {
        pageNav.push(
          <StyledLi key={i}>
            <Link href={`${href}${pge}`} as={`${as}${pge}`}>
              <StyledLink design={design}>{pge}</StyledLink>
            </Link>
          </StyledLi>
        )
      } else {
        pageNav.push(
          <StyledLi key={i}>
            <a href={`${href}${pge}`}>
              <StyledLink design={design}>{pge}</StyledLink>
            </a>
          </StyledLi>
        )
      }
    }

    return pageNav
  }

  const getPageNext = (currentPage: number, pages: number): ReactNode => {
    const { design, Link, href, as } = props

    if (currentPage <= pages - 1) {
      if (Link) {
        return (
          <StyledLi>
            <Link href={`${href}${currentPage + 1}`} as={`${as}${currentPage + 1}`}>
              <StyledLink design={design} className="next">
                <Icon type="fas fa-chevron-right" />
              </StyledLink>
            </Link>
          </StyledLi>
        )
      } else {
        return (
          <StyledLi>
            <a href={`${href}${currentPage + 1}`}>
              <StyledLink design={design} className="next">
                <Icon type="fas fa-chevron-right" />
              </StyledLink>
            </a>
          </StyledLi>
        )
      }
    }

    return <div />
  }

  const getPagePrevious = (start: number, currentPage: number): ReactNode => {
    const { design, Link, href, as } = props

    if (start > 0) {
      if (Link) {
        return (
          <StyledLi>
            <Link href={`${href}${currentPage - 1}`} as={`${as}${currentPage - 1}`}>
              <StyledLink design={design} className="previous">
                <Icon type="fas fa-chevron-left" />
              </StyledLink>
            </Link>
          </StyledLi>
        )
      } else {
        return (
          <StyledLi>
            <a href={`${href}${currentPage - 1}`}>
              <StyledLink design={design} className="previous">
                <Icon type="fas fa-chevron-left" />
              </StyledLink>
            </a>
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
      <StyledUl className="Pagination">
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

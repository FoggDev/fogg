// Dependencies
import React, { Component } from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'

// Colors
import colors from '../colors'

// Components
import Icon from '../Icon'

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

const StyledLink = styled.a`
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

  ${({ theme }) => theme === 'primary' && `
    &.active {
      background: ${colors.primary.background};
      color: white;

      &:hover {
        background: ${colors.primary.hover};
        color: white;
      }
    }
  `}

  ${({ theme }) => theme === 'success' && `
    &.active {
      background: ${colors.success.background};
      color: white;

      &:hover {
        background: ${colors.success.hover};
        color: white;
      }
    }
  `}

  ${({ theme }) => theme === 'danger' && `
    &.active {
      background: ${colors.danger.background};
      color: white;

      &:hover {
        background: ${colors.danger.hover};
        color: white;
      }
    }
  `}

  ${({ theme }) => theme === 'warning' && `
    &.active {
      background: ${colors.warning.background};
      color: white;

      &:hover {
        background: ${colors.warning.hover};
        color: white;
      }
    }
  `}

  ${({ theme }) => theme === 'light' && `
    &.active {
      background: ${colors.light.background};
      color: ${colors.light.color};

      &:hover {
        background: ${colors.light.hover};
        color: white;
      }
    }
  `}

  ${({ theme }) => theme === 'dark' && `
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

class Pagination extends Component {
  static propTypes = {
    page: number.isRequired,
    total: number.isRequired,
    theme: string,
    url: string.isRequired
  }

  constructor(props) {
    super(props)

    this.maxElementsPerPage = 10
    this.increment = 5
  }

  getCurrentPage = (start, end) => start === 0 ? 1 : start / end + 1

  getPageNav = (firstPage, lastPage, start, end, url) => {
    const { theme } = this.props
    const pageNav = []

    for (let i = firstPage; i < lastPage; i += 1) {
      const pge = i + 1
      const next = i * end

      if (start === next) {
        pageNav.push(
          <StyledLi key={i}>
            <StyledLink theme={theme} href="#" className="active">{pge}</StyledLink>
          </StyledLi>
        )
      } else {
        pageNav.push(
          <StyledLi key={i}>
            <StyledLink theme={theme} href={`${url}${pge}`} title={pge}>{pge}</StyledLink>
          </StyledLi>
        )
      }
    }

    return pageNav
  }

  getPageNext = (currentPage, pages, url) => {
    const { theme } = this.props

    if (currentPage <= (pages - 1)) {
      return (
        <StyledLi>
          <StyledLink theme={theme} href={`${url}${currentPage + 1}`} className="next">
            <Icon type="fas fa-chevron-right" />
          </StyledLink>
        </StyledLi>
      )
    }

    return null
  }

  getPagePrevious = (start, currentPage, url) => {
    const { theme } = this.props

    if (start > 0) {
      return (
        <StyledLi>
          <StyledLink theme={theme} href={`${url}${currentPage - 1}`} className="previous">
            <Icon type="fas fa-chevron-left" />
          </StyledLink>
        </StyledLi>
      )
    }

    return null
  }

  getPaginationLimit(params, total, returnStart) {
    const paginationPage = params > 0
      ? params
      : 0

    const start = paginationPage > 0
      ? paginationPage * this.maxElementsPerPage - this.maxElementsPerPage
      : 0

    if (returnStart) {
      return start
    }

    return `${start}, ${this.maxElementsPerPage}`
  }

  getPagination() {
    const { page, total, url } = this.props
    const start = this.getPaginationLimit(page, total, true)
    const end = this.maxElementsPerPage

    if (total > this.maxElementsPerPage) {
      return this.buildPagination(total, end, start, url)
    }

    return ''
  }

  buildPagination(total, end, start, url, elementsPerPage) {
    const limit = elementsPerPage || this.maxElementsPerPage

    let currentPage
    let firstPage
    let lastPage
    let pageNav = ''
    let pageNext = ''
    let pagePrevious = ''
    let pages
    let rest

    if (total > end) {
      rest = total % end
      pages = rest === 0 ? total / end : (total - rest) / end + 1
      currentPage = start / end + 1

      if (pages > limit) {
        if (start === 0) {
          firstPage = 0
          lastPage = limit
        }

        if (currentPage < this.increment) {
          firstPage = 0
          lastPage = currentPage + this.increment + (this.increment - currentPage)
        } else {
          firstPage = currentPage - this.increment - (currentPage + this.increment - pages)
          lastPage = pages
        }

        if (currentPage >= this.increment && currentPage <= pages - this.increment) {
          firstPage = currentPage - this.increment
          lastPage = currentPage + this.increment
        }
      } else {
        firstPage = 0
        lastPage = pages
      }

      pageNav = this.getPageNav(firstPage, lastPage, start, end, url, limit)
      currentPage = this.getCurrentPage(start, end)
      pageNext = this.getPageNext(currentPage, pages, url)
      pagePrevious = this.getPagePrevious(start, currentPage, url)
    }

    return (
      <StyledUl>
        {pagePrevious}
        {pageNav}
        {pageNext}
      </StyledUl>
    )
  }

  render() {
    return this.getPagination()
  }
}

export default Pagination

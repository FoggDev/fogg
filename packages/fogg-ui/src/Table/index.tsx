import React, { FC, ReactElement, Fragment, useState, useMemo, useEffect } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import { cx, getFileExtensionFromURL, pluralify, getCurrentLanguage } from 'fogg-utils'
import Icon from '../Icon'
import Modal from '../Modal'

interface iProps {
  className?: string
  onDelete: any
  onPublish: any
  onUnpublish: any
  url: string
  query?: string
  t?: any
  data: {
    head: string[]
    body: string[]
    rows: any[]
    raw: any[]
    isFile?: boolean
    fileTypes: any
  }
}

const language = getCurrentLanguage()

const StyledModalContent = styled.div`
  width: 100%;
  margin: 0 auto;

  img {
    width: 98%;
  }
`

const StyledTable = styled.table`
  background: white;
  font-family: Arial;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto;
  margin-top: 25px;
  width: 100%;

  caption {
    color: #a9b9c0;
    font-size: 12px;
    background-color: white;
    border-bottom: 0;
    position: relative;
    text-align: ${language === 'ar' ? 'right' : 'left'};
    padding-left: 10px;
    margin-bottom: 10px;
  }

  thead {
    background: #f7f7f7;
    border: 1px solid #eee;

    th {
      color: #999;
      font-size: 13px;
      font-weight: 500;
      padding: 10px 8px;
      text-align: ${language === 'ar' ? 'right' : 'left'};
      text-transform: none;
      width: 100px;
      position: relative;
      cursor: pointer;

      &.ascending::after {
        content: '\f0de';
        display: inline-block;
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        margin-left: 10px;
        margin-right: 5px;
        margin-top: 5px;
        position: absolute;
      }

      &.descending::after {
        content: '\f0dd';
        display: inline-block;
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        margin-left: 10px;
        margin-right: 5px;
        position: absolute;
      }

      @media screen and (max-width: 768px) {
        font-size: 11.5px;
        min-width: 68px;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:first-of-type {
          min-width: 10px;
        }

        &.date {
          color: #f7f7f7;
          min-width: 5px;
        }
      }

      &.actions {
        background-color: #fbfbfb;
      }

      &.noData {
        background-color: #fbfbfb;
        text-align: center;
        padding: 20px;
      }

      .action {
        display: inline-block;
        margin-left: 10px;
        cursor: pointer;
        padding: 5px;
        border: 1px solid transparent;

        &:hover {
          background-color: #f5f5f5;
          border: 1px solid #eee;
        }
      }

      .onDelete {
        color: #de1212;
      }

      .onPublish {
        color: #0eb87f;
      }

      .onUnpublish {
        color: #ffb914;
      }

      .disabled {
        color: #888;
      }

      &.checkbox {
        width: 10px;
        margin: 0;

        input[type='checkbox'] {
          appearance: checkbox;
          transform: scale(1);
        }
      }
    }
  }

  tbody {
    tr {
      border-left: 1px solid #eee;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      cursor: pointer;

      &:hover {
        background: #f7f7f7;
      }

      td {
        color: #666;
        font-size: 14px;
        height: 50px;
        max-width: 140px;
        overflow: hidden;
        padding: 0px 10px;
        text-overflow: ellipsis;
        white-space: nowrap;

        @media screen and (max-width: 768px) {
          font-size: 11.5px;
          max-width: 108px;

          .date,
          .at,
          .hour {
            display: none;
          }
        }

        @media screen and (max-width: 640px) {
          max-width: 40px;
          font-size: 11px;
        }

        &.checkbox {
          width: 10px;

          input[type='checkbox'] {
            appearance: checkbox;
            transform: scale(1);
          }
        }

        &.id {
          width: 60px;

          span {
            display: inline-block;
            background-color: #eee;
            border-radius: 3px;
            color: #888;
            font-size: 11px;
            padding: 5px 6px;
            width: 60px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            @media screen and (max-width: 640px) {
              width: 50px;
            }
          }
        }

        &.content {
          span {
            display: inline-block;
            padding: 10px;

            &:hover {
              background-color: #fff;
            }
          }
        }

        &.status {
          a {
            text-transform: uppercase;
            color: #0eb87f;
            font-size: 12px;
            font-weight: 500;

            &:hover {
              color: #0eb87f;
            }
          }
        }

        &.changed {
          a {
            color: #3c80cf;

            &:hover {
              color: #3c80cf;
            }
          }
        }

        &.deleted {
          a {
            color: #de1212;

            &:hover {
              color: #de1212;
            }
          }
        }

        &.status {
          &.draft {
            a {
              color: #ffb914;

              &:hover {
                color: #ffb914;
              }
            }
          }
        }

        a {
          color: #555;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            color: #555;
          }
        }
      }
    }
  }
`

const StyledPreviewImage = styled.img`
  background-color: #666;
  border-radius: 10px;
  width: 80px;
`

const StyledPlayIcon = styled.div`
  i {
    color: red;
    font-size: 64px;

    &:hover {
      color: #444;
    }
  }
`

const StyledDocumentIcon = styled.div`
  i {
    color: #00aeef;
    font-size: 64px;

    &:hover {
      color: #1565c0;
    }
  }
`

const StyledCenter = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

const StyledInput = styled.input`
  border: 1px solid #eee;
  color: #333;
  height: 35px;
  padding-left: 5px;
  font-size: 13px;
  width: 100%;

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
    outline: 0;
  }

  &::placeholder {
    color: #ccc;
    opacity: 1;
  }
`

const StyledSearch = styled.div`
  display: inline-block;
  position: relative;
  width: 50%;

  &:after {
    content: '\f002';
    display: inline-block;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    top: 11px;
    right: 6px;
    color: #ccc;
  }
`

const Search: FC<any> = ({
  t,
  setSearchedRows,
  setCurrentSearch,
  setCheckbox,
  raw,
  currentSearch
}): ReactElement => {
  const filterRows = (raw: any, value: string) =>
    raw.filter((item: any) => {
      const str = Object.values(item).join().toLowerCase()
      return str.indexOf(value.toLowerCase()) > -1
    })

  const handleOnKeyUp = (e: any) => {
    const {
      target: { value }
    } = e

    if (value) {
      if (value.length >= 3 && value !== currentSearch) {
        const filteredRows = filterRows(raw, value)
        setCurrentSearch(value)
        setSearchedRows(filteredRows)

        setCheckbox(createCheckboxes(false, filteredRows, filteredRows.length))
      } else {
        setCurrentSearch('')
        setSearchedRows(raw)
      }
    } else {
      setCurrentSearch('')
      setSearchedRows(raw)
    }
  }

  return (
    <StyledSearch>
      <StyledInput type="text" placeholder={t('Search')} onKeyUp={handleOnKeyUp} />
    </StyledSearch>
  )
}

const createCheckboxes = (state: boolean, ids: any[], count: number): any => {
  const checkboxes: any = {}

  Array.from(Array(count).keys()).forEach((index: number) => {
    checkboxes[index] = {
      checked: state,
      id: ids[index].id,
      status: ids[index].status
    }
  })

  return checkboxes
}

const getCheckedCheckboxes = (checkboxes: any): any => {
  return Object.values(checkboxes).filter((checkbox: any) => checkbox.checked)
}

const useSortableData = (items: any, config = null) => {
  const [sortConfig, setSortConfig] = useState<any>(config)

  const sortedItems = useMemo(() => {
    const sortableItems = [...items]

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }

        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }

        return 0
      })
    }

    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key: string, isSearch: boolean) => {
    if (isSearch) {
      setSortConfig({ key, direction: undefined })
      return null
    }

    let direction = 'ascending'

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }

    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}

const Table: FC<iProps> = ({
  className = '',
  data,
  onDelete,
  onPublish,
  onUnpublish,
  url,
  query = '/',
  t = (key: string) => key
}): ReactElement => {
  const defaultFileTypes = {
    documents: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip'],
    images: ['png', 'jpg', 'jpeg', 'gif'],
    videos: ['mp4']
  }
  const { head, body, rows = [], raw = [], isFile, fileTypes = defaultFileTypes } = data

  const [allCheckboxes, setAllCheckboxes] = useState(false)
  const [isOpen, handleIsOpen] = useState(false)
  const [html, setHtml] = useState('')
  const [searchedRows, setSearchedRows] = useState(raw)
  const [currentSearch, setCurrentSearch] = useState('')

  const { items, requestSort, sortConfig } = useSortableData(rows)
  const showItems = currentSearch ? searchedRows : items

  const [checkbox, setCheckbox] = useState(createCheckboxes(false, showItems, showItems.length))
  const selectedCheckboxes = getCheckedCheckboxes(checkbox)
  const checkedCheckboxes = selectedCheckboxes.length

  const total = currentSearch ? showItems.length : raw.length

  const handleModal = (html: any): any => {
    setHtml(html)
    handleIsOpen(!isOpen)
  }

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return
    }

    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  useEffect(() => {
    const allChecks = Object.values(checkbox).filter((check: any) => check.checked)

    if (allChecks.length < showItems.length) {
      setAllCheckboxes(false)
    } else if (showItems.length) {
      setAllCheckboxes(true)
    }
  }, [checkbox, showItems, currentSearch])

  const handleCheckbox = (index: number): any => {
    const newCheckbox = checkbox[index]
    newCheckbox.checked = !newCheckbox.checked

    setCheckbox({
      ...checkbox,
      [index]: newCheckbox
    })
  }

  const handleAllCheckbox = (): any => {
    setAllCheckboxes(!allCheckboxes)
    setCheckbox(createCheckboxes(!allCheckboxes, showItems, showItems.length))
  }

  const renderDelete = (): any => {
    const hasPublishedEntries = getCheckedCheckboxes(checkbox).filter(
      (selectedCheckbox: any) => selectedCheckbox.status === 'Published'
    )

    if (hasPublishedEntries.length === 0) {
      return (
        <>
          <span
            className="action onDelete"
            onClick={(): void => onDelete(getCheckedCheckboxes(checkbox))}
            title="Delete"
          >
            <Icon type="fas fa-trash" /> {t('Delete')}
          </span>{' '}
        </>
      )
    }

    return (
      <>
        <span className="action onDelete disabled" title={t('Only Draft Entries can be deleted')}>
          <Icon type="fas fa-trash" /> {t('Delete')}
        </span>{' '}
      </>
    )
  }

  const renderPublish = (): any => {
    const hasPublishedEntries = getCheckedCheckboxes(checkbox).filter(
      (selectedCheckbox: any) => selectedCheckbox.status === 'Published'
    )

    if (hasPublishedEntries.length === 0) {
      return (
        <>
          <span
            className="action onPublish"
            onClick={(): void => onPublish(getCheckedCheckboxes(checkbox))}
            title="Publish"
          >
            <Icon type="fas fa-download" /> {t('Publish')}
          </span>{' '}
        </>
      )
    }

    return (
      <>
        <span
          className="action onPublish disabled"
          title={t('Only Draft Entries can be published')}
        >
          <Icon type="fas fa-download" /> {t('Publish')}
        </span>{' '}
      </>
    )
  }

  const renderUnpublish = (): any => {
    const hasPublishedEntries = getCheckedCheckboxes(checkbox).filter(
      (selectedCheckbox: any) => selectedCheckbox.status === 'Published'
    )

    if (hasPublishedEntries.length === 0) {
      return (
        <>
          <span
            className="action onUnpublish disabled"
            title={t('Only Published Entries can be unpublished')}
          >
            <Icon type="fas fa-download" /> {t('Unpublish')}
          </span>{' '}
        </>
      )
    }

    return (
      <>
        <span
          className="action onUnpublish"
          onClick={(): void => onUnpublish(getCheckedCheckboxes(checkbox))}
          title={t('Unpublish')}
        >
          <Icon type="fas fa-download" /> {t('Unpublish')}
        </span>{' '}
      </>
    )
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        label={t('Preview')}
        options={{
          position: 'top',
          height: html.includes('img') ? '700px' : '500px',
          width: html.includes('img') ? '80%' : '60%'
        }}
        onClose={(): void => handleIsOpen(!isOpen)}
      >
        <StyledModalContent dangerouslySetInnerHTML={{ __html: html }} />
      </Modal>

      <Search
        t={t}
        setSearchedRows={setSearchedRows}
        setCurrentSearch={setCurrentSearch}
        setCheckbox={setCheckbox}
        raw={raw}
      />

      <StyledTable className={cx('Table', className)}>
        <caption>
          {total} {t(pluralify('entry found', 'entries found', total))}
        </caption>

        <thead>
          <tr key="head">
            {head.map((th, index) => {
              if (isFile && th === 'File') {
                return <th key={`th-${index}`} />
              }

              if (isFile && th === 'FileUrl') {
                return <th key={`th-${index}`}>{t('Preview')}</th>
              }

              return (
                <Fragment key={`head-fragment-${index}`}>
                  {index === 0 && (
                    <th className="checkbox">
                      <input type="checkbox" checked={allCheckboxes} onChange={handleAllCheckbox} />
                    </th>
                  )}

                  <th
                    key={`th-${index}`}
                    className={cx(th.toLocaleLowerCase(), getClassNamesFor(body[index]))}
                    title={`${th} (${t(th)})`}
                    onClick={() => requestSort(body[index], !!currentSearch)}
                  >
                    {th}
                  </th>
                </Fragment>
              )
            })}
          </tr>

          <tr
            key="selected"
            style={{
              display: checkedCheckboxes > 0 ? 'table-row' : 'none',
              borderTop: '1px solid #eee'
            }}
          >
            <th className="actions" colSpan={head.length + 1}>
              {checkedCheckboxes > showItems.length ? showItems.length : checkedCheckboxes}{' '}
              {checkedCheckboxes === 1 ? t('entry selected') : t('entries selected')}:
              {renderDelete()}
              {renderPublish()}
              {renderUnpublish()}
            </th>
          </tr>

          <tr
            key="noData"
            style={{
              display: rows.length === 0 ? 'table-row' : 'none',
              borderTop: '1px solid #eee'
            }}
          >
            <th className="noData" colSpan={head.length + 1}>
              {t('No data found')}
            </th>
          </tr>
        </thead>

        <tbody>
          {showItems && showItems.length === 0 && (
            <tr>
              <td colSpan={head.length + 1} style={{ textAlign: 'center' }}>
                {t('No results')}
              </td>
            </tr>
          )}
          {showItems &&
            showItems.map((row, rowIndex) => {
              let id: any = null

              return (
                <tr key={`row-${rowIndex}`}>
                  {body.map((tr, trIndex) => {
                    const [parent, child] = tr.split('.')
                    let values = ''

                    if (row && row[parent] && typeof row[parent][child] === 'string') {
                      values = row[parent][child]
                    }

                    if (!id && tr === 'id') {
                      id = row[parent].toString()
                    }

                    if (child) {
                      if (Array.isArray(row[parent])) {
                        row[parent].forEach((item: any) => {
                          if (item[child]) {
                            values += `${item[child]} `
                          } else {
                            values += `${item} `
                          }
                        })
                      }

                      return (
                        <td key={`tr-${trIndex}`}>
                          {isFile && <span>{t(values)}</span>}
                          {!isFile && (
                            <a href={`${url}${query}${id}`} title={values}>
                              <span>{t(values)}</span>
                            </a>
                          )}
                        </td>
                      )
                    }

                    if (row[parent] && parent === 'content') {
                      return (
                        <td key={`tr-${trIndex}`} className={parent}>
                          <span onClick={(): void => handleModal(row[parent])}>
                            <Icon type="fas fa-quote-right" />
                          </span>
                        </td>
                      )
                    }

                    if (isFile && row[parent] && parent === 'file') {
                      return <td key={`tr-${trIndex}`} />
                    }

                    if (isFile && row[parent] && parent === 'fileUrl') {
                      const { extension, fileName } = getFileExtensionFromURL(row[parent])
                      const isImage = fileTypes.images.includes(extension)
                      const isDocument = fileTypes.documents.includes(extension)
                      const isVideo = fileTypes.videos.includes(extension)

                      if (isImage) {
                        const img = `
                        <div style="display: flex; align-items: center; flex-direction: column;">
                          <img src="${row[parent]}" alt="${
                          row[parent]
                        }" style="width: 90%; border: 3px solid #000; margin-bottom: 10px;" />
                          <p>
                            <a
                              style="
                                text-decoration: none;
                                font-weight: 600;
                                background-color: #00AEEF;
                                border-color: #00AEEF;
                                color: #FFF;
                                border-radius: .25rem;
                                padding: .375rem .75rem;
                              "
                              href="${row[parent]}"
                              title="${t('Download Image')}"
                              download="${fileName}.${extension}"
                              target="_blank"
                            >
                              ${t('Download')}
                            </a>
                          </p>
                        </div>
                      `

                        return (
                          <td key={`tr-${trIndex}`}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              title={t('Click to preview')}
                              onClick={(): void => handleModal(img)}
                            >
                              <StyledCenter>
                                <StyledPreviewImage src={row[parent]} />
                              </StyledCenter>
                            </a>
                          </td>
                        )
                      }

                      if (isVideo) {
                        const video = `
                          <div style="display: flex; align-items: center; flex-direction: column;">
                            <video width="80%" controls autoplay style="border-radius: 10px;">
                              <source src="${row[parent]}" type="video/mp4">
                            </video>
                            <p>
                              <a
                                style="
                                  text-decoration: none;
                                  font-weight: 600;
                                  background-color: #00AEEF;
                                  border-color: #00AEEF;
                                  color: #FFF;
                                  border-radius: .25rem;
                                  padding: .375rem .75rem;
                                "
                                href="${row[parent]}"
                                title="${t('Download Video')}"
                                target="_blank"
                                download="${fileName}.${extension}"
                              >
                                ${t('Download')}
                              </a>
                            </p>
                          </div>
                        `

                        return (
                          <td key={`tr-${trIndex}`}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              title={t('Click to preview')}
                              onClick={(): void => handleModal(video)}
                            >
                              <StyledCenter>
                                <StyledPlayIcon>
                                  <Icon type="fas fa-play-circle" />
                                </StyledPlayIcon>
                              </StyledCenter>
                            </a>
                          </td>
                        )
                      }

                      if (isDocument) {
                        return (
                          <td key={`tr-${trIndex}`}>
                            <a
                              href={row[parent]}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={t('Click to download')}
                              download={`${fileName}.${extension}`}
                            >
                              <StyledCenter>
                                <StyledDocumentIcon>
                                  <Icon type="fas fa-cloud-download-alt" />
                                </StyledDocumentIcon>
                              </StyledCenter>
                            </a>
                          </td>
                        )
                      }
                    }

                    if (row[parent] && parent === 'createdAt') {
                      const date = moment(row[parent]).format('MM/DD/YYYY,HH:mm').split(',')

                      return (
                        <td key={`tr-${trIndex}`} className={parent}>
                          {isFile && (
                            <>
                              <span className="date">{date[0]}</span>
                              <span className="at"> {t('at')} </span>
                              <span className="hour">{date[1]}</span>
                            </>
                          )}

                          {!isFile && (
                            <a href={`${url}${query}${id}`}>
                              <span className="date">{date[0]}</span>
                              <span className="at"> {t('at')} </span>
                              <span className="hour">{date[1]}</span>
                            </a>
                          )}
                        </td>
                      )
                    }

                    if (trIndex === 0) {
                      let checked = false

                      if (checkbox[rowIndex]) {
                        checked = checkbox[rowIndex].checked
                      }

                      return (
                        <Fragment key="checkbox-fragment">
                          <td className="checkbox">
                            <input
                              type="checkbox"
                              name="option[]"
                              checked={checked}
                              onChange={(): void => handleCheckbox(rowIndex)}
                            />
                          </td>
                          <td key={`tr-${trIndex}`} className={tr} title={row[parent].toString()}>
                            {isFile && <span>{row[parent].toString()}</span>}
                            {!isFile && (
                              <a href={`${url}${query}${id}`}>
                                <span>{row[parent].toString()}</span>
                              </a>
                            )}
                          </td>
                        </Fragment>
                      )
                    }

                    const rowClass = row[parent]
                      ? row[parent].toString().toLowerCase().replace(/\s+/g, '')
                      : ''

                    return (
                      <td key={`tr-${trIndex}`} className={`${parent} ${tr} ${rowClass}`}>
                        {isFile && <a>{row[parent] && t(row[parent].toString())}</a>}
                        {!isFile && (
                          <a href={`${url}${query}${id}`}>
                            {row[parent] && row[parent].toString()}
                          </a>
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
        </tbody>
      </StyledTable>
    </>
  )
}

export default Table

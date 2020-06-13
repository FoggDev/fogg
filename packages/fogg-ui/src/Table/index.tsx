import React, { FC, ReactElement, Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Icon from '../Icon'
import Modal from '../Modal'

interface iProps {
  className?: string
  onDelete: any
  onPublish: any
  onUnpublish: any
  url: string
  data: {
    head: string[]
    body: string[]
    rows: any[]
    count?: number
  }
}

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
    text-align: left;
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
      text-align: left;
      text-transform: none;

      @media screen and (max-width: 768px) {
        font-size: 11.5px;
        min-width: 68px;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:first-child {
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

        &.draft {
          a {
            color: #ffb914;

            &:hover {
              color: #ffb914;
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

const createCheckboxes = (state: boolean, ids: any[], count: number): any => {
  const checkboxes: any = {}

  Array.from(Array(count).keys()).forEach((index: number) => {
    checkboxes[index] = {
      checked: state,
      id: ids[index].id
    }
  })

  return checkboxes
}

const getCheckedCheckboxes = (checkboxes: any): any => {
  return Object.values(checkboxes).filter((checkbox: any) => checkbox.checked)
}

const Table: FC<iProps> = ({
  className = '',
  data,
  onDelete,
  onPublish,
  onUnpublish,
  url
}): ReactElement => {
  const [allCheckboxes, setAllCheckboxes] = useState(false)
  const [isOpen, handleIsOpen] = useState(false)
  const [html, setHtml] = useState('')
  const { head, body, rows = [], count } = data
  const total = count || rows.length
  const [checkbox, setCheckbox] = useState(createCheckboxes(false, rows, rows.length))
  const selectedCheckboxes = getCheckedCheckboxes(checkbox)
  const checkedCheckboxes = selectedCheckboxes.length
  const handleModal = (html: any): any => {
    setHtml(html)
    handleIsOpen(!isOpen)
  }

  useEffect(() => {
    const allChecks = Object.values(checkbox).filter((check: any) => check.checked)

    if (allChecks.length < total) {
      setAllCheckboxes(false)
    } else {
      setAllCheckboxes(true)
    }
  }, [checkbox])

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
    setCheckbox(createCheckboxes(!allCheckboxes, rows, rows.length))
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        label="Content"
        options={{
          position: 'top',
          height: html.includes('img') ? '700px' : '500px',
          width: html.includes('img') ? '80%' : '60%'
        }}
        onClose={(): void => handleIsOpen(!isOpen)}
      >
        <StyledModalContent dangerouslySetInnerHTML={{ __html: html }} />
      </Modal>

      <StyledTable className={className}>
        <caption>
          {total} {total === 1 ? 'entry' : 'entries'} found
        </caption>

        <thead>
          <tr key="head">
            {head.map((th, index) => (
              <Fragment key={`head-fragment-${index}`}>
                {index === 0 && (
                  <th className="checkbox">
                    <input type="checkbox" checked={allCheckboxes} onChange={handleAllCheckbox} />
                  </th>
                )}
                <th key={`th-${index}`} className={th.toLocaleLowerCase()}>
                  {th}
                </th>
              </Fragment>
            ))}
          </tr>

          <tr
            key="selected"
            style={{
              display: checkedCheckboxes > 0 ? 'table-row' : 'none',
              borderTop: '1px solid #eee'
            }}
          >
            <th className="actions" colSpan={head.length + 1}>
              {checkedCheckboxes} {checkedCheckboxes === 1 ? 'entry' : 'entries'} selected:{' '}
              <span
                className="action onDelete"
                onClick={(): void => onDelete(selectedCheckboxes)}
                title="Delete"
              >
                <Icon type="fas fa-trash" /> Delete
              </span>{' '}
              <span
                className="action onPublish"
                onClick={(): void => onPublish(selectedCheckboxes)}
                title="Publish"
              >
                <Icon type="fas fa-upload" /> Publish
              </span>{' '}
              <span
                className="action onUnpublish"
                onClick={(): void => onUnpublish(selectedCheckboxes)}
                title="Unpublish"
              >
                <Icon type="fas fa-download" /> Unpublish
              </span>{' '}
            </th>
          </tr>

          <tr
            key="noData"
            style={{
              display: total === 0 ? 'table-row' : 'none',
              borderTop: '1px solid #eee'
            }}
          >
            <th className="noData" colSpan={head.length + 1}>
              No data found
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => {
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
                        <a href={`${url}/${id}`}>
                          <span>{values}</span>
                        </a>
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

                  if (row[parent] && parent === 'createdAt') {
                    const date = moment(row[parent])
                      .format('MM/DD/YYYY,hh:mm a')
                      .split(',')

                    return (
                      <td key={`tr-${trIndex}`} className={parent}>
                        <a href={`${url}/${id}`}>
                          <span className="date">{date[0]}</span>
                          <span className="at"> at </span>
                          <span className="hour">{date[1]}</span>
                        </a>
                      </td>
                    )
                  }

                  if (trIndex === 0) {
                    return (
                      <Fragment key="checkbox-fragment">
                        <td className="checkbox">
                          <input
                            type="checkbox"
                            name="option[]"
                            checked={checkbox[rowIndex].checked}
                            onChange={(): void => handleCheckbox(rowIndex)}
                          />
                        </td>
                        <td key={`tr-${trIndex}`} className={tr} title={row[parent].toString()}>
                          <a href={`${url}/${id}`}>
                            <span>{row[parent].toString()}</span>
                          </a>
                        </td>
                      </Fragment>
                    )
                  }

                  const rowClass = row[parent]
                    ? row[parent]
                        .toString()
                        .toLowerCase()
                        .replace(/\s+/g, '')
                    : ''

                  return (
                    <td key={`tr-${trIndex}`} className={`${parent} ${tr} ${rowClass}`}>
                      <a href={`${url}/${id}`}>{row[parent] && row[parent].toString()}</a>
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

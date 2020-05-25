import React, { FC, ReactElement, Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Icon from '../Icon'

interface iProps {
  className?: string
  onDelete?: any
  onPublish?: any
  onUnpublish?: any
  data: {
    head: string[]
    body: string[]
    rows: any[]
    count?: number
  }
}

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
    font-size: 13px;
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

      &.actions {
        background-color: #fbfbfb;
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
          transform: scale(1.2);
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
        max-width: 220px;
        overflow: hidden;
        padding: 0px 10px;
        text-overflow: ellipsis;
        white-space: nowrap;

        &.checkbox {
          width: 10px;

          input[type='checkbox'] {
            appearance: checkbox;
            transform: scale(1.2);
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
  onUnpublish
}): ReactElement => {
  const { head, body, rows = [], count } = data
  const total = count || rows.length
  const [allCheckboxes, setAllCheckboxes] = useState(false)
  const [checkbox, setCheckbox] = useState(createCheckboxes(false, rows, total))
  const selectedCheckboxes = getCheckedCheckboxes(checkbox)
  const checkedCheckboxes = selectedCheckboxes.length

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
    setCheckbox(createCheckboxes(!allCheckboxes, rows, total))
  }

  return (
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
                  <input type="checkbox" checked={allCheckboxes} onClick={handleAllCheckbox} />
                </th>
              )}
              <th key={`th-${index}`}>{th}</th>
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
      </thead>

      <tbody>
        {rows.map((row, rowIndex) => {
          let id: any = null

          return (
            <tr key={`row-${rowIndex}`}>
              {body.map((tr, trIndex) => {
                const [parent, child] = tr.split('.')
                let values = typeof row[parent][child] === 'string' ? row[parent][child] : ''

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
                      <a href={id}>
                        <span>{values}</span>
                      </a>
                    </td>
                  )
                }

                if (parent === 'createdAt') {
                  return (
                    <td key={`tr-${trIndex}`}>
                      <a href={id}>
                        <span>{moment(row[parent]).format('MM/DD/YYYY, hh:mm a')}</span>
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
                          onClick={(): void => handleCheckbox(rowIndex)}
                        />
                      </td>
                      <td key={`tr-${trIndex}`} className={tr} title={row[parent].toString()}>
                        <a href={id}>
                          <span>{row[parent].toString()}</span>
                        </a>
                      </td>
                    </Fragment>
                  )
                }

                return (
                  <td
                    key={`tr-${trIndex}`}
                    className={`${parent} ${tr} ${row[parent]
                      .toString()
                      .toLowerCase()
                      .replace(/\s+/g, '')}`}
                  >
                    <a href={id}>{row[parent].toString()}</a>
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}

export default Table

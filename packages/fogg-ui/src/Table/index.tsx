import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Icon from '../Icon'

interface iProps {
  className?: string
  data: {
    caption: string
    head: string[]
    body: string[]
    rows: any[]
    count?: number
    actions: {
      delete: string
      edit: string
    }
  }
}

const StyledTable = styled.table`
  background: white;
  font-family: Arial;
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 25px;
  width: 100%;

  caption {
    color: #555;
    font-size: 24px;
    background-color: white;
    border: 1px solid #eee;
    border-bottom: 0;
    padding: 25px 30px;
    position: relative;
    text-align: left;
    text-transform: capitalize;

    .app {
      float: left;
    }

    .count {
      float: right;
    }
  }

  thead {
    background: #f7f7f7;
    border: 1px solid #eee;

    th {
      font-weight: bold;
      padding: 20px 8px;
      text-transform: none;
    }
  }

  tbody {
    tr {
      border-left: 1px solid #eee;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;

      &:hover {
        background: #f7f7f7;
      }

      td {
        font-size: 16px;
        height: 50px;
        max-width: 220px;
        overflow: hidden;
        padding: 20px 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;

        input[type='checkbox'] {
          transform: scale(1.2);
        }

        a {
          color: #333;
          cursor: pointer;

          &:hover {
            color: #666;
          }
        }
      }
    }
  }
`

const Table: FC<iProps> = ({ className = '', data }): ReactElement => {
  const { caption, head, body, rows, count, actions = null } = data
  const $window: any = typeof window !== 'undefined' ? window : {}

  return (
    <StyledTable className={className}>
      <caption>
        <div className="app">{caption}</div>
        <div className="count">
          <i className="fa fa-database" aria-hidden="true" /> {count || rows.length}
        </div>
      </caption>

      <thead>
        <tr>
          {head.map((th, index) => (
            <th key={`th-${index}`}>{th}</th>
          ))}
          {actions && <th key="th-action">Action</th>}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => (
          <tr key={`row-${index}`}>
            {body.map((tr, index) => {
              const [parent, child] = tr.split('.')
              let values = typeof row[parent][child] === 'string' ? row[parent][child] : ''

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

                return <td key={`tr-${index}`}>{values}</td>
              }

              if (parent === 'createdAt') {
                return <td key={`tr-${index}`}>{moment(row[parent]).format('MM/DD/YYYY')}</td>
              }

              return <td key={`tr-${index}`}>{row[parent].toString()}</td>
            })}

            {actions && row.id && (
              <td>
                {actions.edit && (
                  <a href={`${actions.edit}/${row.id}`} title="Edit">
                    <Icon type="fas fa-edit" />
                  </a>
                )}{' '}
                {actions.delete && (
                  <a
                    title="Delete"
                    onClick={(): void => {
                      if (confirm('Do you want to delete this row?')) {
                        $window.location = `${actions.delete}/${row.id}`
                      }
                    }}
                  >
                    <Icon type="fas fa-trash-alt" />
                  </a>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default Table

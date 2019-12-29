import React from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import Icon from '../Icon'

const StyledTable = styled.table`
  background: white;
  font-family: Arial;
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 25px;
  width: 95%;

  caption {
    color: #555;
    font-size: 24px;
    background-color: white;
    border: 1px solid #EEE;
    border-bottom: 0;
    border-radius: 4px 4px 0 0;
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
    background: #F7F7F7;
    border: 1px solid #EEE;

    th {
      font-weight: bold;
      padding: 20px 8px;
      text-transform: none;
    }
  }

  tbody {
    tr {
      border-left: 1px solid #EEE;
      border-right: 1px solid #EEE;
      border-bottom: 1px solid #EEE;

      &:hover {
        background: #F7F7F7;
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

        input[type="checkbox"] {
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

const Table = props => {
  const {
    data: {
      caption,
      head,
      body,
      rows,
      count,
      actions = null
    }
  } = props

  return (
    <StyledTable>
      <caption>
        <div className="app">{caption}</div>
        <div className="count">
          <i className="fa fa-database" aria-hidden="true" /> {count || rows.length}
        </div>
      </caption>

      <thead>
        <tr>
          {head.map((th, index) => <th key={`th-${index}`}>{th}</th>)}
          {actions && (<th key="th-action">Action</th>)}
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
                  row[parent].forEach(item => {
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
                )}
                {' '}
                {actions.delete && (
                  <a
                    title="Delete"
                    onClick={() => {
                      if (confirm('Do you want to delete this row?')) {
                        window.location = `${actions.delete}/${row.id}`
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

Table.propTypes = {
  data: object
}

export default Table

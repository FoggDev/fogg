// Dependencies
import React, { useState } from 'react'
import { array, string, func, object } from 'prop-types'
import styled from 'styled-components'
import Icon from '../Icon'

const StyledTags = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid #EEE;
  border-radius: 5px;
  padding: 20px 5px 20px 2px;
  width: 500px;

  div.label {
    color: #666;
    font-size: 14px;
    padding-left: 5px;
    margin-top: -15px;
    margin-bottom: 5px;
  }

  div.tag {
    display: inline-block;
    cursor: pointer;
    color: #888;
    border-radius: 15px;
    height: 30px;
    line-height: 30px;
    padding-left: 15px;
    padding-right: 10px;
    margin-left: 5px;
    margin-bottom: 8px;
    background: #EEE;

    &:hover {
      background: #DDD;
    }

    i {
      font-size: 13px;
      color: #666;
      margin-left: 10px;
    }
  }

  input {
    margin-left: 10px;
    border: none;
    outline: none;
  }
`

const Tags = props => {
  const { tags = [], getTags } = props
  const [tagsArr, setTags] = useState(tags)
  const [newTag, setTag] = useState('')

  const onKeyPressed = ({ key }) => {
    if (key === 'Enter') {
      if (!tagsArr.includes(newTag)) {
        const newTags = [...tagsArr, newTag]

        setTags(newTags)
        setTag('')
      }
    }
  }

  const onChange = ({ target: { value } }) => {
    setTag(value)
  }

  const onClick = (tag) => {
    if (tagsArr.includes(tag)) {
      const tagIndex = tagsArr.findIndex(t => t === tag)
      tagsArr.splice(tagIndex, 1)

      setTags([...tagsArr])
    }
  }

  getTags(tagsArr)

  return (
    <div style={{ marginTop: '5px', marginBottom: '20px' }}>
      <StyledTags>
        <div className="label">Tags:</div>

        <div className="container">
          {tagsArr.map(tag => (
            <div key={tag} className="tag">
              <span title={tag}>{tag}</span>
              <Icon
                title="Remove tag"
                type="fas fa-times"
                onClick={() => onClick(tag)}
              />
            </div>
          ))}

          <input
            name="tag"
            placeholder="Add new tag"
            onKeyPress={onKeyPressed}
            onChange={onChange}
            value={newTag}
          />
        </div>
      </StyledTags>
    </div>
  )
}

Tags.propTypes = {
  tags: array,
  className: string,
  onClick: func,
  style: object
}

export default Tags

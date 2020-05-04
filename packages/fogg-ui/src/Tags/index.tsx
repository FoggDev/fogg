// Dependencies
import React, { FC, ReactElement, useState, useCallback } from 'react'
import styled from 'styled-components'
import slug from 'slug'
import Icon from '../Icon'

type Tag = {
  name: string
}

interface iProps {
  tags: Tag[]
  getTags(tags: Tag[]): void
}

const StyledTags = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border: none;
  padding: 20px 5px 20px 2px;
  width: 60%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

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
    background: #eee;

    &:hover {
      background: #ddd;
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

const Tags: FC<iProps> = (props): ReactElement => {
  const { tags = [], getTags } = props
  const [tagsArr, setTags] = useState(tags)
  const [newTag, setTag] = useState('')
  const [fetchTags, setFetchTags] = useState(true)

  useCallback(() => {
    if (fetchTags) {
      getTags(tagsArr)
    }
  }, [])

  const findTagIndex = (tagName: string): number => tagsArr.findIndex(t => t.name === tagName)

  const onKeyPressed = ({ key }: { key: string }): void => {
    if (key === 'Enter') {
      const tagIndex = findTagIndex(newTag)

      if (tagIndex === -1 && newTag.trim() !== '') {
        const newTags = [...tagsArr, { name: slug(newTag, { lower: true }) }]

        setTags(newTags)
        setTag('')
        setFetchTags(true)
      }
    }
  }

  const onChange = ({ target: { value } }: { target: { value: string } }): void => {
    setTag(value)
    setFetchTags(false)
  }

  const onClick = (tag: string): void => {
    const tagIndex = findTagIndex(tag)

    if (tagIndex > -1) {
      tagsArr.splice(tagIndex, 1)

      setTags([...tagsArr])
      setFetchTags(true)
    }
  }

  return (
    <div style={{ marginTop: '5px', marginBottom: '20px' }}>
      <StyledTags>
        <div className="container">
          {tagsArr.map((tag, index) => (
            <div key={`${tag.name}-${index}`} className="tag">
              <span title={tag.name}>{tag.name}</span>
              <Icon
                title="Remove tag"
                type="fas fa-times"
                onClick={(): void => onClick(tag.name)}
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

export default Tags

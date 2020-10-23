import React, { FC, ReactElement } from 'react'
import styled from '@emotion/styled'

const StyledMenu = styled.div`
  border: 1px solid #eee;
  background-color: white;
  box-sizing: border-box;
  border-radius: 4px;
  position: absolute;
  top: 5px;
  border-color: rgb(240, 242, 247);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 4px;
  z-index: 900;

  div {
    height: 30px;
    line-height: 35px;
    padding: 5px 10px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;

    img {
      margin-right: 5px;
      width: 15px;
    }

    &:hover {
      background-color: #eee;
    }
  }
`

// Interfaces
interface iProps {
  isOpen: boolean
  items: any[]
}

const Menu: FC<iProps> = ({ isOpen, items }): ReactElement => {
  if (!isOpen || items.length === 0) {
    return <div />
  }

  return (
    <>
      <StyledMenu className="Menu">
        {items.map((item, i: number) => (
          <div key={`menu-option-${i}`}>
            <a href={item.href || null} onClick={item.onClick || null}>
              {item.icon && (
                <img
                  className={item.icon}
                  alt={item.icon}
                  src={require(`./icons/${item.icon}.svg`)}
                />
              )}
              &nbsp;
              {item.option}
            </a>
          </div>
        ))}
      </StyledMenu>
    </>
  )
}

export default Menu

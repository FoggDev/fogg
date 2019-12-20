// Dependencies
import React from 'react'
import { number, bool } from 'prop-types'
import styled, { keyframes } from 'styled-components'

const animationName = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`
const StyledPlaceholder = styled.div`
  display: block;
`

const StyledLine = styled.div`
  position: relative;
  width: 87%;
  margin: 20px 0;

  &::after {
    content: '';
    position: absolute;
    animation: ${animationName};
    animation-duration: .8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background: #f4f5f8;
    background: linear-gradient(to right, #e3e7ed 8%, #cdd4e0 18%, #e3e7ed 33%);
    background-size: 800px 10px;
    height: 8px;

    ${({ right }) => right && `
      right: 0;
    `}

    ${({ line, centered, media }) => line === 1 && `
      bottom: -28px;
      width: 84%;
      margin-left: ${centered ? '15%' : '0px'};

      ${media && `
        left: 70px;
        height: 16px;
        width: 30%;
      `}
    `}

    ${({ line, centered, media }) => line === 2 && `
      bottom: -68px;
      width: 74%;
      margin-left: ${centered ? '20%' : '0px'};

      ${media && `
        display: none;
      `}
    `}

    ${({ line, centered }) => line === 3 && `
      bottom: -108px;
      width: 70%;
      margin-left: ${centered ? '22%' : '0px'};
    `}

    ${({ line, centered }) => line === 4 && `
      bottom: -148px;
      width: 84%;
      margin-left: ${centered ? '16%' : '0px'};
    `}

    ${({ line, centered }) => line === 5 && `
      bottom: -188px;
      width: 95%;
      margin-left: ${centered ? '10%' : '0px'};
    `}
  }

  &::before {
    content: '';
    position: absolute;
    animation: ${animationName};
    animation-duration: .8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background: #f4f5f8;
    background: linear-gradient(to right, #e3e7ed 8%, #cdd4e0 18%, #e3e7ed 33%);
    background-size: 800px 10px;
    height: 8px;

    ${({ right }) => right && `
      right: 0;
    `}

    ${({ line, centered, media }) => line === 1 && `
      top: 0;
      width: 64%;
      margin-left: ${centered ? '25%' : '0px'};

      ${media && `
        content: '';
        position: absolute;
        width: 55px;
        height: 55px;
        border-radius: 100%;
      `}
    `}

    ${({ line, centered, media }) => line === 2 && `
      top: 40px;
      width: 54%;
      margin-left: ${centered ? '30%' : '0px'};

      ${media && `
        left: 70px;
        height: 10px;
        width: 20%;
      `}
    `}

    ${({ line, centered }) => line === 3 && `
      top: 80px;
      width: 62%;
      margin-left: ${centered ? '25%' : '0px'};
    `}

    ${({ line, centered }) => line === 4 && `
      top: 120px;
      width: 40%;
      margin-left: ${centered ? '38%' : '0px'};
    `}

    ${({ line, centered }) => line === 5 && `
      top: 160px;
      width: 48%;
      margin-left: ${centered ? '35%' : '0px'};
    `}
  }
`

const Placeholder = ({ lines = 4, centered, right, media }) => (
  <StyledPlaceholder>
    {Array.from(Array(!media ? lines : 3).keys()).map(line => (
      <StyledLine
        key={line}
        line={line}
        centered={centered}
        right={right}
        media={media}
      />
    ))}
  </StyledPlaceholder>
)

Placeholder.propTypes = {
  lines: number,
  centered: bool,
  media: bool,
  right: bool
}

export default Placeholder

import React from 'react'
import ReactDOM from 'react-dom'

// Reac.createElement(element, props, value)
const ourHelloWithClass = React.createElement(
  'h1',
  {
    className: 'my-title'
  },
  'Olá mundo'
)

const ourList = React.createElement(
  'ul',
  {},
  [
    React.createElement(
      'li',
      {
        className: 'item-01'
      },
      'Item 1'
    ),
    React.createElement(
      'li',
      {
        className: 'item-02'
      },
      'Item 2'
    ),
    React.createElement(
      'li',
      {
        className: 'item-03'
      },
      'Item 3'
    ),
  ]
)

const myWrapper = React.createElement(
  'div',
  {
    className: 'my-wrapper'
  },
  [
    ourHelloWithClass,
    ourList
  ]
)

// ReactDOM.render(component, container, )
const container = document.getElementById('app')

// ReactDOM.render(Component, Container)
ReactDOM.render(myWrapper, container)
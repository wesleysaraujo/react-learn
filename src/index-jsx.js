import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class OurHelloWithClass extends Component {
  render () {
    return (
      <h1 className="my-title">Olá mundo</h1>
    )
  }
}

class OurList extends Component {
  render () {
    return (
      <ul>
        <li className="item-01">Item 1</li>
        <li className="item-04">Item 2</li>
        <li className="item-03">Item 3</li>
      </ul>
    )
  }
}

class MyWrapper extends Component {
  render () {
    return (
      <div className="my-wrapper">
        <OurHelloWithClass />
        <OurList />
      </div>
    )
  }
}

// ReactDOM.render(component, container, )
const container = document.getElementById('app')

// ReactDOM.render(Component, Container)
ReactDOM.render(<MyWrapper />, container)

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Watch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      customName: "Wesley Serafim"
    }
  }

  render () {

    setTimeout (() => {
      this.setState({
        seconds: this.state.seconds < 60 
          ? this.state.seconds + 1
          : 1,
        minutes: this.state.seconds === 60 
          ? this.state.minutes + 1 
          : (this.state.minutes < 60 ? this.state.minutes : 0),
        hours: this.state.minutes === 60
          ? this.state.hours + 1
          : (this.state.hours < 24 ? this.state.hours : 0)
      })
    }, 1000)

    return (
      <div>
        <h1>{ this.state.hours } : {this.state.minutes} : { this.state.seconds }</h1>
        <CustomLabel value={ this.state.customName } />
      </div>
    )
  }
}

const CustomLabel = (props) => {
  return (
    <div>
      <h1>{ props.value }</h1>
    </div>
  )
}

/* class CustomLabel extends Component {
  render () {
    return (
      <div className="my-wrapper">
        <h1>{ this.props.value }</h1>
      </div>
    )
  }
} */

// ReactDOM.render(component, container, )
const container = document.getElementById('app')

// ReactDOM.render(Component, Container)
ReactDOM.render(<Watch />, container)

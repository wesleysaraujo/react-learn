import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Watch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0,
      customName: "Wesley Serafim"
    }
  }

  onClickHandler (operation) {
    this.setState({
      counter: operation === 'sum' 
        ? this.state.counter + 1
        : (operation === 'sub' && this.state.counter > 0 
          ? this.state.counter - 1
          : 0)
    })
  }

  render () {
    return (
      <div>
        <Contador value={ this.state.counter } />
        <Button label="+" onClick={ () => this.onClickHandler('sum') }/>
        <Button label="-" onClick={ () => this.onClickHandler('sub') }/>
        <Button label="Alerta" onClick={ () => alert('Olá!')} />
      </div>
    )
  }
}

const Contador = (props) => {
  return (
    <div className="my-title">
      <h1>{ props.value }</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={ () => props.onClick() }>{ props.label }</button>
  )
}

// ReactDOM.render(component, container, )
const container = document.getElementById('app')

// ReactDOM.render(Component, Container)
ReactDOM.render(<Watch />, container)

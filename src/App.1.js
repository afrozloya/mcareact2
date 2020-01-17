import React, { Component } from 'react'
import Car from './Car'

export default class componentName extends Component {
  state ={
    brand: "Audi",
    make: 2020
  }
  onChangeHand = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input name="brand" value={this.state.brand} onChange={this.onChangeHand}/>
        <input name="make" value={this.state.make} onChange={this.onChangeHand}/>
        <Car brand="BMW" make="2020"/>
        <Car brand="Merc" make="2019" />
        <Car brand="Maruti" make="2001"/>
        <h1>New Car</h1>
        <Car brand={this.state.brand} make={this.state.make}/>
      </div>
    )
  }
}

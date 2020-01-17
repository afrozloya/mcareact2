import React, {Component} from 'react'
import Car from './Car'
import App4 from './App4'
import App3 from './App3'


export default class App extends Component {
  state = {
    brand: "Maruti",
  }
  onCh = (e) => {
    this.setState({
      brand: e.target.value
    })
    console.log(e.target.value)
  }
  render(){
    return (
      <div>
        <input value={this.state.brand} onChange={this.onCh} />
        <Car brand="Audi" make="2020"/>
        <Car brand="nano" make="2010"/>
        <Car brand="Merc" make="2019"/>
        <h1>New Car!!</h1>
        <Car brand={this.state.brand} make="2020" />
        <App3 />
        <App4 />
      </div>
    )  
  }
}

import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    sushis:[],
    startIndex: 0,
    eaten:[],
    money:200
  }

  componentDidMount(){
    fetch(API)
      .then(r => r.json())
      .then(sushis => this.setState({
        sushis: sushis,
      }))
  }

  getSushis = () => {
    return this.state.sushis.slice(this.state.startIndex, this.state.startIndex+4)
  }

  moreSushis = () => {
    this.setState({
      startIndex: this.state.startIndex + 4
    })
  }

  eatSushi = (sushi) => {
      if (this.state.money >= sushi.price) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: this.state.money - sushi.price
      })
    }
  }


  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.getSushis()} 
        eaten={this.state.eaten}
        moreSushis={this.moreSushis} 
        eatSushi={this.eatSushi} />
        <Table 
        money={this.state.money}
        eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
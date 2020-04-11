import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: "alpha", age: 25, belt: 'green', id: 1},
      { name: "beta", age: 35, belt: 'black', id: 2},
      { name: "gammaa", age: 28, belt: 'brown', id: 3},
      { name: "delta", age: 32, belt: 'red', id: 4},
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.floor(Math.random() * 100) + 5;
    this.setState({
      ninjas: [...this.state.ninjas, ninja]
    })
  }

  deleteNinja = (id) => {
    this.setState({
      ninjas: [...this.state.ninjas.filter(ninja => ninja.id !== id)]
    })
  }
  
  render() {
    return (
      <div className="App">
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }
}

export default App;

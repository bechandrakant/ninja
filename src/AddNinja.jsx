import React, { Component } from 'react'

class AddNinja extends Component {

  state = {
    name: '',
    age: '',
    belt: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNinja(this.state)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="name" id="name" onChange={this.handleChange}/>
        <input type="text" placeholder="age" id="age" onChange={this.handleChange}/>
        <input type="text" placeholder="belt" id="belt" onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Add Ninja</button>
      </form>
    )
  }
}

export default AddNinja
import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeText (){
        this.setState({
            message: "Than you for subcribing"
        });
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeText()}>Save</button>
      </div>
    )
  }
}

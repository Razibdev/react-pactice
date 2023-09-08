import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    incremnt(){
       this.setState({
        count: this.state.count + 1
       }, ()=>{
        console.log('Call back function', this.state.count);
       });

    // this.setState((prevState) => ({
    //     count: prevState.count + 1
    // }));

        console.log(this.state.count);
    }

    incrementFive(){
        this.incremnt();
        this.incremnt();
        this.incremnt();
        this.incremnt();
        this.incremnt();
    }

    
  render() {
    return (
      <div>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

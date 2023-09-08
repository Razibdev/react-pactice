import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Good Bye",
    });
  }

  clickHandlerArroFunction =() => {
    this.setState({
      message: "Good Bye",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button> &nbsp;
        <button onClick={this.clickHandler}>Click Constractor</button>&nbsp;
        <button onClick={() => this.clickHandler()}>Click Arrow Method</button>&nbsp;
        <button onClick={this.clickHandlerArroFunction}>Click</button>
      </div>
    );
  }
}

export default EventBind
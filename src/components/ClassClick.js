import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandaler(){
        console.log('Click the button');
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.clickHandaler()}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick

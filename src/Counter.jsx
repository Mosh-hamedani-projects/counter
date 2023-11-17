import { Component } from 'react'

class Counter extends Component {
  
  state={
    count:0
  }

  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }
  render() { 
    return (
      <>
        <h1>{this.state.count}</h1>
        <button 
          className='btn btn-dark'
          onClick={this.handleIncrement}>Increment</button>
      </>
    );
  }
}
 
export default Counter;
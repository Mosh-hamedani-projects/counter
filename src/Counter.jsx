import { Component } from 'react'

class Counter extends Component {
  
  state={
    count:this.props.value
  }

  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }
  render() { 
    console.log(this.props);
    return (
      <>
        {this.props.children}
        {this.props.id}
        <h1>{this.state.count}</h1>
        <button 
          className='btn btn-dark'
          onClick={this.handleIncrement}>Increment</button>
      </>
    );
  }
}
 
export default Counter;
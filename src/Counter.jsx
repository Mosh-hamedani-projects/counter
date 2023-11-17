import { Component } from 'react'

class Counter extends Component {
  
  state={
    count:this.props.value  //parent(<Counters>) se send ki props ko receive kiya
  }

  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }
  render() { 
    console.log(this.props);
    return (
      <>
        <h1>{this.state.count}</h1>
        <button 
          className='btn btn-dark'
          //passing reference to onClick event when no argument to pass
          onClick={this.handleIncrement}>Increment</button> 

          <button onClick={this.props.onDelete}>Delete</button>
      </>

    );
  }
}
 
export default Counter;
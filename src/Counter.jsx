import { Component } from 'react'

class Counter extends Component {
  
  render() { 
    console.log(this.props);
    return (
      <>
        <h1>{this.props.counter.value}</h1>
        <button 
          className='btn btn-dark'
          onClick={()=>this.props.onIncrement(this.props.counter)}>+</button> 
          
          <button 
          className='btn btn-dark'
          disabled={this.props.counter.value===0 ? "disable": ""}
          onClick={()=>this.props.onDecrement(this.props.counter)}>-</button> 
          
          
          <button 
            className='btn btn-danger'
            onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>  
      </>

    );
  }
}
 
export default Counter;
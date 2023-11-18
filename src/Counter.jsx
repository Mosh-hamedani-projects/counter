import { Component } from 'react'

class Counter extends Component {
  
  render() { 
    console.log(this.props);
    return (
      <>
        <h1>{this.props.counter.value}</h1>
        <button 
          className='btn btn-dark'
          //passing reference to onClick event when no argument to pass
          onClick={()=>this.props.onIncrement(this.props.counter)}>Increment</button> 

          
          <button 
            className='btn btn-danger'
            //passing data from child to parent, use callback when we need to pass argument
            onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>  
      </>

    );
  }
}
 
export default Counter;
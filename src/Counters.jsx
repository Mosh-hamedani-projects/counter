import { Component } from 'react'
import Counter from "./Counter";

class Counters extends Component {
  render() { 
    const {onDelete, onIncrement, onDecrement, onReset, counters}=this.props
    return (
      <>
      <button onClick={onReset} className="btn btn-primary">Reset</button>
        {
          counters.map( counter => 
            <Counter 
                key={counter.id}        //key is mandatory to pass 
                counter={counter}  
                onDelete={onDelete} //receive data from child and handle child event
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            /> 
        )}
      </>
    );
  }
}
 
export default Counters;
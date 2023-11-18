import { Component } from 'react'
import Counter from "./Counter";

class Counters extends Component {
  
  
  render() { 
    return (
      <>
      <button onClick={this.props.onReset} className="btn btn-primary">Reset</button>
        {
          this.props.counters.map( counter => 
            <Counter 
                key={counter.id}        //key is mandatory to pass 
                counter={counter}  
                onDelete={this.props.onDelete} //receive data from child and handle child event
                onIncrement={this.props.onIncrement}
            /> 
        )}
      </>
    );
  }
}
 
export default Counters;
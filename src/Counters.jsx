import { Component } from 'react'
import Counter from "./Counter";

class Counters extends Component {
  
  state={
    counters:[
      {id:1, value:4},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0},
    ]
  }

  render() { 
    return (
      <>
        {
          this.state.counters.map( counter => 
            <Counter 
                key={counter.id}        //key is mandatory to pass 
                value={counter.value}   //sending props to child component
                id={counter.id}  
            /> 
        )}
      </>
    );
  }
}
 
export default Counters;
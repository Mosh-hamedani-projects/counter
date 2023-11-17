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

  handleDelete=(counterId)=>{
    const counters=this.state.counters.filter(c => c.id !== counterId)  //to detele the item 
    this.setState({counters}) //to change the state that is reflected
  };

  render() { 
    return (
      <>
        {
          this.state.counters.map( counter => 
            <Counter 
                key={counter.id}        //key is mandatory to pass 
                value={counter.value}   //sending props to child component
                id={counter.id}  
                onDelete={this.handleDelete} //receive data from child and handle child event
            /> 
        )}
      </>
    );
  }
}
 
export default Counters;
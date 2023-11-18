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


  handleIncrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters})
    console.log(this.state.counters[index]);
  };

  handleDelete=(counterId)=>{
    const counters=this.state.counters.filter(c => c.id !== counterId)  //to detele the item 
    this.setState({counters}) //to change the state that is reflected
  };

  handleReset=()=>{
   const counters = this.state.counters.map(c => {
      c.value=0;
      return c;
    })
    this.setState({counters})
  }

  render() { 
    return (
      <>
      <button onClick={this.handleReset} className="btn btn-primary">Reset</button>
        {
          this.state.counters.map( counter => 
            <Counter 
                key={counter.id}        //key is mandatory to pass 
                counter={counter}  
                onDelete={this.handleDelete} //receive data from child and handle child event
                onIncrement={this.handleIncrement}
            /> 
        )}
      </>
    );
  }
}
 
export default Counters;
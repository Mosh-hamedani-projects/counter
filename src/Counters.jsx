import { Component } from 'react'
import Counter from "./Counter";

class Counters extends Component {
  
  render() { 
    return (
      <>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </>
    );
  }
}
 
export default Counters;
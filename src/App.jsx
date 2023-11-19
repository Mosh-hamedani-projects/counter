
import { Component } from 'react';
import Counters from './Counters';
import NavBar from './NavBar';

class App extends Component {
 
  state={
    counters:[
      {id:1, value:4},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0},
    ]
  }

  constructor(){
    super()
    console.log('App-constructorf');
  }

  handleIncrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters})
    console.log(this.state.counters[index]);
  };
  
  handleDecrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value--;
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
      <NavBar totalProducts={this.state.counters.filter(c => c.value>0).length}/>
      <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    </>
    );
  }
}
 
export default App

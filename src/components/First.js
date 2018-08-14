import React, { Component } from 'react';
//import Timer from './Timer';
import configureStore from './store';
import * as actions from './actions';



class First extends Component { 
  componentDidMount(){
    console.log("Greeting componentDidMount");
   this.unsubscribe = this.store.subscribe(() =>{
    this.setState(this.store.getState());
   });    
  }

componentWillUnmount(){
    console.log("Greeting componentWillUnmount");
    this.unsubscribe();
  }
  constructor(props){
    super(props);

    //this.state = { currentValue : 150};
    this.store = configureStore();
    this.state = this.store.getState();
    
    this.resetTime = () => {
    //this.setState({currentValue : 150});
    this.store.dispatch(actions.resetTimer());
    console.log("call");}

    setInterval(() => {
      //this.setState({currentValue : this.state.currentValue - 1});
      this.store.dispatch(actions.decrement());},1000);


  }

  render() {
    console.log('this is App component');
    return (
      <div className="App">
       {this.state.currentValue}
       <button onClick={this.resetTime}>Reset Value</button>
      </div>
    );
  }
}



export default First;
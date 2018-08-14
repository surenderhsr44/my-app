import React, { Component } from 'react';
//import Greeting from './Greeting';
import Login from './Login';
//import Demo from './Demo';
import First from './components/First';
import MyForm from './MyForm';
class App extends Component {
  render() {
    return (
      <div>
      <First />
    	   <Login />
    	   <MyForm />
   			
      </div>
    );
  }
}

export default App;

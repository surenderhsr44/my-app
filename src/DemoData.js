import React, { Component } from 'react';

class DemoData extends Component {
   constructor(props) {
      super(props);
 this.state = {test : ""};
   }
   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
      fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data =>  {
         this.setState({test:data })
      }); 
   }
  
   render() {
   	// console.log ('printing '+ JSON.stringify(this.state.test));
          return (
      <div>
      {this.state.test.map((test, index) =>
      {test.id}
      ) 
   }</div> 
    );
   }
}
   
export default DemoData
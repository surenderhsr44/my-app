import React, { Component } from 'react';
import App from './App.css';

class Greeting extends Component{
  constructor (props){
    super(props);

    this.state = { 
    	test : [] 
    }
  }
  componentWillMount(){
    console.log("Greeting componentWillMount");
    //debugger;
  }
  componentDidMount(){
    console.log("Greeting componentDidMount");  
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data =>  {
      	this.setState({test : data})
      });
  }
  componentWillUnmount(){
    console.log("Greeting componentWillUnmount");
  }

  componentWillReceiveProps(){
    console.log("Greeting componentWillReceiveProps");
  }
  shouldComponentUpdate(){
    console.log("Greeting shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(){
    console.log("Greeting componentWillUpdate");
  };
  componentDidUpdate(){
    console.log("Greeting componentDidUpdate");
  };
  render() {
    console.log ('printing '+ JSON.stringify(this.state.test));
    return (
      <div >
<table className="table">
<thead>
  <tr className="th">
    <th>Employees ID</th>
    <th>Employees Name</th>
     <th>Employees Salary</th>  
    <th>Age</th>
     <th>Image</th> 
  </tr>   
 </thead>
   	<tbody >
      {
  	 this.state.test.map((test, index) =>
   	
   	<tr className="td">
      <td className="tr">{test.id} </td> 
       <td className="tr">{test.employee_name}</td> 
       <td className="tr">{test.employee_salary}</td> 
       <td className="tr">{test.employee_age}</td> 
      <td className="tr"><img alt="profile_image" src = {test.profile_image}/></td> 
      </tr>
  
     
      )}
      </tbody>
      </table>
      </div>
      );
   }


  
}
export default Greeting
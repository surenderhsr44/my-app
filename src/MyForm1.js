import React, { Component } from 'react';

class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter username:</label>
        <input id="username" name="username" type="text" />

        <label htmlFor="password">Enter your Password:</label>
        <input id="password" name="password" type="password" /><br/><br/>

       
        <button>Send data!</button>
      </form>
    );
  }
}
export default MyForm;
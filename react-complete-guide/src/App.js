import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: 'Naveen Batheja'
  }

  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  };




  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div style={style}>
        <UserInput 
          changed={this.userNameChangedHandler}
          username={this.state.userName}>
        </UserInput>
        <UserOutput 
          username={this.state.userName}>
        </UserOutput>
      </div>
    );

  }
}

export default App;

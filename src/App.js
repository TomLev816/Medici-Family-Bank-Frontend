import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage.js';

class App extends Component {
  state = {
    allFamilyMembers: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/family_members')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          allFamilyMembers: resJson,
        });
      })
  }

  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;

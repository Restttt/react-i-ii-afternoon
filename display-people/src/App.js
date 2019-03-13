import React, { Component } from 'react';
import './App.css';
import FlashCard from './Components/FlashCard.jsx';
import Header from './Components/Header.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FlashCard />
      </div>
    );
  }
}

export default App;

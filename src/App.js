import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter/counter';
import WordReverse from './components/wordreverse/wordreverse';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <WordReverse />
      </div>
    );
  }
}

export default App;

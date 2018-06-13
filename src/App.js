import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter/counter';
import WordReverse from './components/wordreverse/wordreverse';
import List from './components/list/list'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <WordReverse />
        <List />
      </div>
    );
  }
}

export default App;

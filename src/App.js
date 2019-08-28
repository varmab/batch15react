import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Friends from './Friends'
import Todos from './Todos'
import Like from './Like'
import Users from './Users'
import Library from './library/Library'
import Movies from './Movies'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Varma" password="123456" year={2020}/>
        </header>
        <Movies/>
      </div>
    );
  }
}

export default App;

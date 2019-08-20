import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Friends from './Friends'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Varma" password="123456" year={2020}/>
          <Welcome name="Ram" password="abcdef"/>
        </header>
        <Friends/>
      </div>
    );
  }
}

export default App;

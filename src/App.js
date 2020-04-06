import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h2>Calculator Application</h2>
        <body>
          <Calculator />
        </body>
      </div>
    );
  }
}

export default App;

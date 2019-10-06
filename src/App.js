import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    const Usuario = {
      Nombre: "Jose",
      Apellido: "Charro"
    }
    return (
      <div className="App">
        <h2>{helloWorld} {Usuario.Nombre} {Usuario.Apellido}</h2>
      </div>
    );
  }
}
export default App;
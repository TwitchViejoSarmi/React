import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button onButtonClickApp = {this.onButtonClickApp}></Button>
        {/*<Button></Button>*/}
        <p>{this.state.message}</p>
        {/*<Button name = 'Iniciar sesión'></Button>*/}
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
    </header>*/}
    </div>
    );
  }

  constructor (props) {
    super(props);
    this.state = {message: 'Este es un parrafo en App.js'};
    this.onButtonClickApp = this.onButtonClickApp.bind(this);
  }

  onButtonClickApp() {
    this.setState({message: 'Mensaje afectado por botón...'});
  }
}

export default App;

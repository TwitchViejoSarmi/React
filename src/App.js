/*import logo from './logo.svg';*/
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PlayerCard from './components/PlayerCard/PlayerCard';
import { useState } from 'react';
import Home from './pages/Home/Home';
/*import Button from './components/Button/Button';*/
/*import { Component } from 'react';*/

function App() {
  const [players, setPlayers] = useState([{
    id: 1,
    image: 'logo512.png',
    name: 'Lionel Messi',
    description: 'Campeón del Mundo del 2022'
  }, {
    id: 2,
    image: 'logo192.png',
    name: 'Cristiano Ronaldo',
    description: 'Siuuuuu!!'
  }]);

  return (
    <div className='App'>
      <PlayerCard playerData={players[0]} />
      <PlayerCard playerData={players[1]} />
      <Routes>
        <Route path = '/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

{/*class App extends Component {
  render() {
    return (
      <div className="App">
        <Button onButtonClickApp = {this.onButtonClickApp}></Button>
        <Button></Button>
        {
          this.state.showMessage && <p>
          /*this.state.showMessage ?
          <p>{this.state.message}</p>
          :
          null</p>
        }
        <div>
          <PlayerCard />
          <PlayerCard/>
        </div>
        <div>
          {<Button name = 'Iniciar sesión'></Button>}
          {
            Representar listas en react
            this.state.list.map((num, index) => (
              <Button key={index}>{num}</Button>
            ))
          }
        </div>
    </div>
    );
  }

  constructor (props) {
    super(props);
    this.state = {
      showMessage: false,
      message: 'Este es un parrafo en App.js', 
      list: [1, 2, 3, 4, 5]};
    this.onButtonClickApp = this.onButtonClickApp.bind(this);
  }

  onButtonClickApp(num) {
    console.log(num);
    this.setState({message: 'Mensaje afectado por botón...', showMessage: true});
  }
}
*/}
export default App;
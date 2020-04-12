import React from 'react';
import Board from './Components/Board.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import ShuffleButton from './Components/Button'

function App() {
  return (
    <div className="App">
     <Container>
      <Board />
      </Container>  
      <ShuffleButton />
    </div>
  );
}

export default App;

import React from 'react';
import Board from './Components/Board.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';

function App() {
  return (
    <div className="App">
     <Container>
      <Board />
      </Container>  
    </div>
  );
}

export default App;

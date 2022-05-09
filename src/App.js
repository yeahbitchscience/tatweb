import './App.css';
import Firstwarning from './components/firstwarning';
import Landing from './components/landing';
import {useState} from 'react';

function App() {

  const[check,Setcheck] =useState(!true)
  return (
    <div className="App">
      {check ? <Firstwarning/> : <Landing/>}
     
    </div>
  );
}

export default App;

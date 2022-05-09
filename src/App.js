import './App.css';
import Firstwarning from './components/firstwarning';
import Landing from './components/landing';
import {useState,useEffect} from 'react';

function App() {

  const[check,Setcheck] =useState(true)
  
  useEffect(() => {
  const timer = setTimeout(() => 
  Setcheck(false), 12000);
}, []);

  return (
    <div className="App">
      {check ? <Firstwarning/> : <Landing/>}
     
    </div>
  );
}

export default App;

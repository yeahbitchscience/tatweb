import '../App.css';
import Typewriter from 'typewriter-effect';
import {useState} from 'react';

function Firstwarning() {
  let [text, setText] = useState("Welcome To The Tribe");
  

  return (

    <div className="warningpage">
      <div className="typewriter">
     <Typewriter
      skipAddStyles = 'false'
      wrapperClassName='typing'
      cursorClassName='typing'
    
      onInit={(typewriter) => {
        typewriter.typeString("This is Not a Cult")
        .callFunction(() => {
          console.log('String typed out!');
        })
        
        .pauseFor(1000)
        .deleteAll()
        .pauseFor(500)
        .typeString(text)
        .callFunction(() => {
          setText("Welcome to The Tribe")
        })
        .pauseFor(500)
        .deleteAll()
        .start()
        .pauseFor(100)
      }}
      />
    </div>
    </div>
  );
}

export default Firstwarning;
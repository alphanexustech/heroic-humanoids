import logo from './logo.svg';
import './App.css';
import Scientist from './images/Scientist.png';
import React, { useState } from 'react';

const RandomDisplayComponent = () => {
  const [display, setDisplay] = useState(null);

  const handleClick = () => {
      // Generate a random number and determine the display
      const randomNumber = Math.random();
      if (randomNumber < 0.67) {
          setDisplay('X'); // 67% chance
      } else {
          setDisplay('check'); // 33% chance
      }
  };

  return (
      <div style={{ textAlign: 'center' }}>
          <button onClick={handleClick}>{display ? 'Again' : 'Start'}</button>
          {display === 'X' && <div style={{ color: 'red', fontSize: '48px' }}>X</div>}
          {display === 'check' && <div style={{ color: 'green', fontSize: '48px' }}>✔</div>}
      </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Heroic Humanoids</h1> 
      <img src={Scientist} className='character-one'/>
      <RandomDisplayComponent />
      <RandomDisplayComponent />
      <RandomDisplayComponent />
    </div>
  );
}

export default App;

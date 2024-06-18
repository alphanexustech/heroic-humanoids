import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Scientist from './images/Scientist.png';

const RandomDisplayComponent = ({ onScoreUpdate, round, currentRound, onRoundComplete }) => {
  const [display, setDisplay] = useState(null);

  const handleClick = () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.67) {
      setDisplay('X');
      onScoreUpdate(false);
    } else {
      setDisplay('check');
      onScoreUpdate(true);
    }
    onRoundComplete();
  };

  return (
    <div className="random-display">
      {currentRound === round && (
        <>
          <button className="game-button" onClick={handleClick}>
            {display ? 'Again' : 'Start'}
          </button>
          {display === 'X' && <div className="display red">X</div>}
          {display === 'check' && <div className="display green">✔</div>}
        </>
      )}
    </div>
  );
};

function App() {
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [currentRound, setCurrentRound] = useState(1);

  const handleScoreUpdate = (isCorrect) => {
    setScore(prevScore => ({
      correct: isCorrect ? prevScore.correct + 1 : prevScore.correct,
      incorrect: !isCorrect ? prevScore.incorrect + 1 : prevScore.incorrect
    }));
  };

  const handleRoundComplete = () => {
    if (currentRound < 3) {
      setCurrentRound(currentRound + 1);
    }
  };

  return (
    <div className="App">
      <h1>Heroic Humanoids</h1>
      <img src={Scientist} className="character-one" alt="Scientist"/>
      <div className="score-board">
        <div>Correct: {score.correct}</div>
        <div>Incorrect: {score.incorrect}</div>
      </div>
      <RandomDisplayComponent
        onScoreUpdate={handleScoreUpdate}
        round={1}
        currentRound={currentRound}
        onRoundComplete={handleRoundComplete}
      />
      <RandomDisplayComponent
        onScoreUpdate={handleScoreUpdate}
        round={2}
        currentRound={currentRound}
        onRoundComplete={handleRoundComplete}
      />
      <RandomDisplayComponent
        onScoreUpdate={handleScoreUpdate}
        round={3}
        currentRound={currentRound}
        onRoundComplete={handleRoundComplete}
      />
      {currentRound < 3 && currentRound > 1 && (
        <button className="arrow-button" onClick={() => setCurrentRound(currentRound + 1)}>
          ➡️
        </button>
      )}
    </div>
  );
}

export default App;

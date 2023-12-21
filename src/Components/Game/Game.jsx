import React, { useState, useRef } from 'react'
import './Game.css'

const Game = ({
   verifyLetter,
   pickedWord,
   pickedCategory,
   letters,
   guesseLetters,
   wrongLetters,
   guesses,
   score
  }) => {

   const [letter, setLetter] = useState('');
   const letterInputRef = useRef(null);//cria uma referencia 

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetter('');

    letterInputRef.current.focus()
  }


  return (
     <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
        <h1>Adivinhe a palavra:</h1>
        <h3 className="tip">
          Dica sobre a palavra: {pickedCategory}
        </h3>
        <p>Você ainda tem {guesses} tentativa(s)</p>
        <div className="wordContainer">
          {letters.map((letter, i) => (
            guesseLetters.includes(letter) ? (
              <p key={i} className="letter">
                {letter}
              </p>
            ) : (
              <p key={i} className="blankSquare"></p>
            )
          ))}
        </div>
        <div className="letterContainer">
          <p>Tente adivinhar uma letra da palavra:</p>
          <form onSubmit={handleSubmit}>
            <input
              
              type="text"
              name='letter' 
              maxLength="1" 
              required 
              onChange={(e) => setLetter(e.target.value)}
              value={letter}
              ref={letterInputRef}
            />
            <button className='btn'>Jogar</button>
          </form>
          <div className="wrongLettersContainer">
            <p>Letras já utilizadas:</p>
            {wrongLetters.map((letter, i) => (
              <span key={i}>{letter}, </span>
            ))}
          </div>
        </div>
     </div>
  )
}

export default Game
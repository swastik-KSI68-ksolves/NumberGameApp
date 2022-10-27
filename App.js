import React, { useEffect, useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';

import Images from './Constants/Images';
import ImageBack from './Components/ImageBack';
import Welcome from "./Pages/Welcome"
import PlayGame from './Pages/PlayGame';
import GameOver from "./Pages/GameOver"


const App = () => {
  const [userPickedNum, setUserPickedNum] = useState()
  const [roundNumbers, setRoundNumbers] = useState()
  const [gameIsOver, setGameIsOver] = useState(true);


  const onSubmitClick = (number) => {
    setUserPickedNum(number);
    setGameIsOver(false);

  }

  const gameOverHandler = (number) => {
    setGameIsOver(true);
    setRoundNumbers(number)
  }



  const playGameAgainHandler = () => {
    setUserPickedNum(null);
    setRoundNumbers(0);
  }

  let screen = <Welcome onSubmitClick={onSubmitClick} />;
  if (userPickedNum) {
    screen = <PlayGame
      userPickedNum={userPickedNum}
      GameOverHandler={gameOverHandler} />
  }

  if (gameIsOver && userPickedNum) {
    screen = <GameOver
      userPickedNumber={userPickedNum}
      roundNumbers={roundNumbers}
      playGameAgainHandler={playGameAgainHandler}
    />
  }










  return (
    <ImageBack
      whichImg={Images.image1}
      resizeMode='cover'
    >
      {screen}
      {/* <GameOver /> */}
    </ImageBack>
  )
}

export default App



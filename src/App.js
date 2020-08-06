import React from "react";
import "./App.css";
import Game from "./components/game/Game"
import raccoonLogo from "./assets/images/raccoon.png"
import squirrelLogo from "./assets/images/squirrel.png"
import bunniesLogo from "./assets/images/bunny.png"
import houndsLogo from "./assets/images/hound.png"

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoonLogo
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrelLogo
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunniesLogo
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: houndsLogo
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;



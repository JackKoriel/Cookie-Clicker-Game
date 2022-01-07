import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

import { GameContext } from "./GameContext";

import useInterval from "../hooks/use-interval.hook";

function App(props) {
  const { numCookies, setNumCookies, cookiesPerSecond } =
    useContext(GameContext);

  useInterval(() => {
    setNumCookies(numCookies + cookiesPerSecond);
  }, 1000);

  useEffect(() => {
    let timeLog = Date.now();
    window.localStorage.setItem("timeLog", JSON.stringify(timeLog));
    let getTimeOpen = JSON.parse(window.localStorage.getItem("timeLog"));
    let timeClosed;
    window.addEventListener(
      "beforeunload",
      (ev) => {
        timeClosed = Date.now();
        window.localStorage.setItem("timeClosed", JSON.stringify(timeClosed));
      },
      { once: true }
    );
    let getTimeClose;
    if (timeClosed !== null) {
      getTimeClose = JSON.parse(window.localStorage.getItem("timeClosed"));
    }

    let timeDif = getTimeOpen - getTimeClose;

    setNumCookies(numCookies + cookiesPerSecond * Math.floor(timeDif / 1000));
    console.log(cookiesPerSecond);
    console.log(Math.floor(timeDif / 1000));
    console.log(numCookies + cookiesPerSecond * timeDif);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}

export default App;

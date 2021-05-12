import React from "react";
import {Switch, Route} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

// import components
import Nav from './Layout/Nav.js';
import DiaryHome from './Components/DiaryHome'
import About from './Components/About';

function App() {
  return (
    <div className="App">
    <GlobalStyle />
    <Nav />
    <div className="container">
    <Switch>
    <Route exact path="/">
    <DiaryHome />
    </Route>
    <Route exact path="/About">
    <About />
    </Route>
    </Switch>
    </div>
    </div>
  );
}

export default App;
